using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace Diphap.JsNetBridge.Common
{
    /// <summary>
    /// Load assemblies
    /// </summary>
    public class ReflectionLoader
    {


        public readonly Assembly Assembly;
        private readonly string _Folder;
        static private readonly Dictionary<string, Assembly> _Redirects = new Dictionary<string, Assembly>();
        static private readonly List<AssemblyLoadError> _AssemblyLoadErrors = new List<AssemblyLoadError>();

        Assembly _ResolveEventHandler(object sender, ResolveEventArgs argss)
        {
            if (_Redirects.ContainsKey(argss.Name) == false)
            {
                string fullName = TypeHelper.GetAssemblyNameFromFullname(argss.Name) + ".dll";
                var path = Path.Combine(this._Folder, fullName);
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
                    Assembly a = Assembly.ReflectionOnlyLoad(argss.Name);
                    return a;
                }

            }
            else
            {
                Console.WriteLine(string.Format("AssemblyResolve => Same {0} => return {1}", argss.Name, _Redirects[argss.Name]));
                return _Redirects[argss.Name];
            }
        }

        /// <summary>
        /// Load only assembly (and its referenced assemblies)
        /// </summary>
        /// <param name="assemblyName">ex: "System.Web.Mvc" OR "System.Web.Mvc, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" </param>
        /// <param name="binFolderPath"></param>
        public ReflectionLoader(string assNameOrFullname, string binFolderPath)
        {
            string assName = TypeHelper.GetAssemblyNameFromFullname(assNameOrFullname);

            this._Folder = binFolderPath;
            string dllPath = Path.Combine(this._Folder, assName + ".dll");

            AppDomain.CurrentDomain.AssemblyResolve += _ResolveEventHandler;

            var foundAssembly = _Redirects.Where(x => TypeHelper.GetAssemblyNameFromFullname(x.Key) == assName).ToArray();
            Assembly reflectedAssembly = null;

            if (foundAssembly.Length > 0)
            {
                reflectedAssembly = foundAssembly[0].Value;
            }

            if (reflectedAssembly == null)
            {
                reflectedAssembly = File.Exists(dllPath) ? Assembly.LoadFrom(dllPath) : Assembly.Load(assNameOrFullname);
            }

            if (_Redirects.ContainsKey(reflectedAssembly.FullName) == false)
            {
                _Redirects.Add(reflectedAssembly.FullName, reflectedAssembly);
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
                    _AssemblyLoadErrors.Add(new AssemblyLoadError() { RootAssemblyPath = reflectedAssembly.CodeBase, RootAssemblyName = reflectedAssembly.GetName(), AssemblyName = assemblyName, Exception = ex, ReferencedAssemblies = referencedAssemblies });
                }
            }

        }

        /// <summary>
        /// Load also all assemblies (and their referenced assemblies) in the folder. 
        /// </summary>
        /// <param name="file"></param>
        public ReflectionLoader(string file)
        {
            this._Folder = System.IO.Path.GetDirectoryName(file);
            string[] files = Directory.GetFiles(this._Folder, "*.dll");

            AppDomain.CurrentDomain.AssemblyResolve += _ResolveEventHandler;

            //Then load each referenced assembly into the context
            foreach (var f in files)
            {
                var foundAssembly = _Redirects.Where(x => TypeHelper.GetAssemblyNameFromFullname(x.Key) == Path.GetFileNameWithoutExtension(f)).ToArray();
                Assembly reflectedAssembly = null;

                if (foundAssembly.Length > 0)
                {
                    reflectedAssembly = foundAssembly[0].Value;
                }

                if (reflectedAssembly == null)
                {
                    reflectedAssembly = Assembly.LoadFrom(f);
                }

                if (_Redirects.ContainsKey(reflectedAssembly.FullName) == false)
                {
                    _Redirects.Add(reflectedAssembly.FullName, reflectedAssembly);
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
                        _AssemblyLoadErrors.Add(new AssemblyLoadError() { AssemblyName = assemblyName, RootAssemblyPath = f, RootAssemblyName = AssemblyName.GetAssemblyName(f), Exception = ex, ReferencedAssemblies = referencedAssemblies });
                    }
                }
            }
        }

        private void LoadReferencedAssembly(AssemblyName assemblyName)
        {
            if (_Redirects.ContainsKey(assemblyName.FullName) == false && (_AssemblyLoadErrors.All(x => x.AssemblyName.FullName != assemblyName.FullName)))
            {
                Assembly ass;
                string assfile = Path.Combine(_Folder, assemblyName.Name + ".dll");
                if (System.IO.File.Exists(assfile))
                {
                    ass = Assembly.LoadFrom(assfile);
                }
                else
                {
                    ass = Assembly.Load(assemblyName.FullName);
                }
                if (_Redirects.ContainsKey(ass.FullName) == false)
                {
                    _Redirects.Add(ass.FullName, ass);
                }
            }
        }

        /// <summary>
        /// Load also all assemblies (and their referenced assemblies) in the folder.
        /// </summary>
        /// <param name="file"></param>
        /// <returns></returns>
        public static Assembly LoadFrom(string file)
        {
            ReflectionLoader loader = new ReflectionLoader(file);
            return loader.Assembly;
        }

        /// <summary>
        /// Load only assembly (and its referenced assemblies)
        /// </summary>
        /// <param name="assName"></param>
        /// <param name="binFolderPath"></param>
        /// <returns></returns>
        public static Assembly Load(string assName, string binFolderPath)
        {
            ReflectionLoader loader = new ReflectionLoader(assName, binFolderPath);
            return loader.Assembly;
        }

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
    }
}
