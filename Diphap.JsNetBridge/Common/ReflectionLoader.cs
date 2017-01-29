using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace Diphap.JsNetBridge.Common
{
    public class AssemblyLoadError
    {
        public string RootAssemblyPath { get; internal set; }
        public AssemblyName AssemblyName { get; internal set; }
        public Exception Exception { get; internal set; }
        public AssemblyName RootAssemblyName { get; internal set; }
        public IEnumerable<AssemblyName> ReferencedAssemblies { get; internal set; }

        public override string ToString()
        {
            string text = string.Format("{0}, Root: ", this.AssemblyName, this.RootAssemblyName);
            return text;
        }

    }

    public class AssemblyResolver
    {
        public readonly string Folder;
        static private readonly Dictionary<string, Assembly> _Redirects = new Dictionary<string, Assembly>();
        static private readonly List<AssemblyLoadError> _AssemblyLoadErrors = new List<AssemblyLoadError>();

        public AssemblyResolver(string binFolderPath)
        {
            this.Folder = binFolderPath;
            this.SubscribeAssemblyResolveEvent(true);
        }

        public Dictionary<string, Assembly> Redirects
        {
            get
            {
                return _Redirects;
            }
        }

        public List<AssemblyLoadError> AssemblyLoadErrors
        {
            get
            {
                return _AssemblyLoadErrors;
            }
        }

        Assembly _ResolveEventHandler(object sender, ResolveEventArgs argss)
        {
            if (_Redirects.ContainsKey(argss.Name) == false)
            {
                string fullName = TypeHelper.GetAssemblyNameFromFullname(argss.Name) + ".dll";
                var path = Path.Combine(this.Folder, fullName);
                if (File.Exists(path))
                {
                    Assembly ass = Assembly.LoadFrom(path);
                    _Redirects.Add(argss.Name, ass);

                    Console.WriteLine(string.Format("AssemblyResolve => Load {0} => return {1}", argss.Name, ass));

                    return ass;
                }
                else
                {
                    Console.WriteLine(string.Format("AssemblyResolve => Fails {0} => return {1}", argss.Name, null));
                    return null;
                }

            }
            else
            {
                Console.WriteLine(string.Format("AssemblyResolve => Same {0} => return {1}", argss.Name, _Redirects[argss.Name]));
                return _Redirects[argss.Name];
            }
        }

        private bool _subscribed;
        public void SubscribeAssemblyResolveEvent(bool flag)
        {
            if (flag)
            {
                if (this._subscribed == false)
                {
                    this._subscribed = true;
                    AppDomain.CurrentDomain.AssemblyResolve += _ResolveEventHandler;
                }

            }
            else
            {
                if (this._subscribed == true)
                {
                    this._subscribed = false;
                    AppDomain.CurrentDomain.AssemblyResolve -= _ResolveEventHandler;
                }

            }
        }
    }

    /// <summary>
    /// Load assemblies
    /// </summary>
    public class ReflectionLoader
    {

        public readonly Assembly Assembly;
        public readonly AssemblyResolver AssemblyResolver;

        /// <summary>
        /// Load only assembly (and its referenced assemblies)
        /// </summary>
        /// <param name="assemblyName">ex: "System.Web.Mvc" OR "System.Web.Mvc, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" </param>
        /// <param name="assemblyResolver_"></param>
        public ReflectionLoader(string assNameOrFullname, AssemblyResolver assemblyResolver_)
        {
            string assName = TypeHelper.GetAssemblyNameFromFullname(assNameOrFullname);

            this.AssemblyResolver = assemblyResolver_;
            string dllPath = Path.Combine(this.AssemblyResolver.Folder, assName + ".dll");

            var foundAssembly = this.AssemblyResolver.Redirects.Where(x => TypeHelper.GetAssemblyNameFromFullname(x.Key) == assName).ToArray();
            Assembly reflectedAssembly = null;

            if (foundAssembly.Length > 0)
            {
                reflectedAssembly = foundAssembly[0].Value;
            }

            if (reflectedAssembly == null)
            {
                reflectedAssembly = GetAlreadyLoadedAssembly(assName);

                if (reflectedAssembly == null)
                {
                    reflectedAssembly = File.Exists(dllPath) ? Assembly.LoadFrom(dllPath) : Assembly.Load(assNameOrFullname);
                }
            }

            if (this.AssemblyResolver.Redirects.ContainsKey(reflectedAssembly.FullName) == false)
            {
                this.AssemblyResolver.Redirects.Add(reflectedAssembly.FullName, reflectedAssembly);
            }

            this.Assembly = reflectedAssembly;

            var referencedAssemblies = reflectedAssembly.GetReferencedAssemblies();

            foreach (var assemblyName in referencedAssemblies)
            {
                try
                {
                    LoadReferencedAssembly(assemblyName);
                }
                catch (System.IO.FileNotFoundException ex)
                {
                    //if an exception occurs it means that a referenced assembly could not be found    
                    this.AssemblyResolver.AssemblyLoadErrors.Add(new AssemblyLoadError() { RootAssemblyPath = reflectedAssembly.CodeBase, RootAssemblyName = reflectedAssembly.GetName(), AssemblyName = assemblyName, Exception = ex, ReferencedAssemblies = referencedAssemblies });
                }
            }

        }

        /// <summary>
        /// Get already loaded assembly with high version.
        /// </summary>
        /// <param name="assName"></param>
        /// <returns></returns>
        private Assembly GetAlreadyLoadedAssembly(string assName)
        {
            Assembly highVersionAssembly;
            Assembly[] alreadyLoadedAssemblies = AppDomain.CurrentDomain.GetAssemblies();
            Assembly[] sameVersionLoadedAssemblies = alreadyLoadedAssemblies.Where(x => x.GetName().Name == assName).ToArray();

            if (sameVersionLoadedAssemblies.Length == 1)
            {
                highVersionAssembly = sameVersionLoadedAssemblies[0];
            }
            else if (sameVersionLoadedAssemblies.Length > 1)
            {
                Version version = sameVersionLoadedAssemblies.Max(x => x.GetName().Version);
                highVersionAssembly = sameVersionLoadedAssemblies.FirstOrDefault(x => x.GetName().Version == version);
            }
            else
            {
                highVersionAssembly = null;
            }
            return highVersionAssembly;
        }

        /// <summary>
        /// Load also all assemblies (and their referenced assemblies) in the folder. 
        /// </summary>
        /// <param name="file"></param>
        /// <param name="assemblyResolver_"></param>
        public ReflectionLoader(AssemblyResolver assemblyResolver_, string file)
        {

            this.AssemblyResolver = assemblyResolver_;
            List<string> files = new List<string>(200);
            files.AddRange(Directory.GetFiles(this.AssemblyResolver.Folder, "*.dll"));
            files.Add(file);
            
            files = files.Distinct().ToList();

            //Then load each referenced assembly into the context
            foreach (var f in files)
            {
                //-- mysterious??
                if (f.Contains("libuv.dll")) { continue; }

                var foundAssembly = this.AssemblyResolver.Redirects.Where(x => TypeHelper.GetAssemblyNameFromFullname(x.Key) == Path.GetFileNameWithoutExtension(f)).ToArray();
                Assembly reflectedAssembly = null;

                if (foundAssembly.Length > 0)
                {
                    reflectedAssembly = foundAssembly[0].Value;
                }

                if (reflectedAssembly == null)
                {
                    if (System.IO.Path.GetExtension(f).Replace(".", "") == "exe")
                    {
                        reflectedAssembly = Assembly.LoadFrom(f);
                    }
                    else
                    {
                        reflectedAssembly = Assembly.LoadFrom(f);
                    }

                }

                if (this.AssemblyResolver.Redirects.ContainsKey(reflectedAssembly.FullName) == false)
                {
                    this.AssemblyResolver.Redirects.Add(reflectedAssembly.FullName, reflectedAssembly);
                }
                if (file == f) { this.Assembly = reflectedAssembly; }

                var referencedAssemblies = reflectedAssembly.GetReferencedAssemblies();
                foreach (var assemblyName in referencedAssemblies)
                {
                    try
                    {
                        LoadReferencedAssembly(assemblyName);
                    }
                    catch (System.IO.FileNotFoundException ex)
                    {
                        //if an exception occurs it means that a referenced assembly could not be found    
                        this.AssemblyResolver.AssemblyLoadErrors.Add(new AssemblyLoadError() { AssemblyName = assemblyName, RootAssemblyPath = f, RootAssemblyName = AssemblyName.GetAssemblyName(f), Exception = ex, ReferencedAssemblies = referencedAssemblies });
                    }
                }
            }
        }

        private void LoadReferencedAssembly(AssemblyName assemblyName)
        {
            if (this.AssemblyResolver.Redirects.ContainsKey(assemblyName.FullName) == false && (this.AssemblyResolver.AssemblyLoadErrors.All(x => x.AssemblyName.FullName != assemblyName.FullName)))
            {
                Assembly ass;
                string assfile = Path.Combine(this.AssemblyResolver.Folder, assemblyName.Name + ".dll");
                if (System.IO.File.Exists(assfile))
                {
                    ass = Assembly.LoadFrom(assfile);
                }
                else
                {
                    ass = Assembly.Load(assemblyName.FullName);
                }
                if (this.AssemblyResolver.Redirects.ContainsKey(ass.FullName) == false)
                {
                    this.AssemblyResolver.Redirects.Add(ass.FullName, ass);
                }
            }
        }

        /// <summary>
        /// Load also all assemblies (and their referenced assemblies) in the folder.
        /// </summary>
        /// <param name="file"></param>
        /// <param name="assemblyResolver_"></param>
        /// <returns></returns>
        public static Assembly LoadFrom(string file, AssemblyResolver assemblyResolver_)
        {
            ReflectionLoader loader = new ReflectionLoader(assemblyResolver_, file);
            return loader.Assembly;
        }

        /// <summary>
        /// Load only assembly (and its referenced assemblies)
        /// </summary>
        /// <param name="assNameOrFullname"></param>
        /// <param name="AssemblyResolver_"></param>
        /// <returns></returns>
        public static Assembly Load(string assNameOrFullname, AssemblyResolver AssemblyResolver_)
        {
            ReflectionLoader loader = new ReflectionLoader(assNameOrFullname, AssemblyResolver_);
            return loader.Assembly;
        }
    }
}
