using Diphap.JsNetBridge.Generator.Common;
using Diphap.JsNetBridge.Generator.Config;
using Diphap.JsNetBridge.Mvc;
using Diphap.JsNetBridge.Mvc.Proxy;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace Diphap.JsNetBridge.Generator
{
    public class ProgramCore
    {

        public static void MainCore(string[] args)
        {
            try
            {
                Stopwatch sw = System.Diagnostics.Stopwatch.StartNew();
                Console.WriteLine(string.Format("{0}: BEGIN [{1}]", config.file_name_exe, DateTimeOffset.Now));
                
                Console.WriteLine(Assembly.GetExecutingAssembly().FullName);
                Console.WriteLine(Assembly.GetAssembly(typeof(Diphap.JsNetBridge.Data.ModelInfo)).FullName);
                Console.WriteLine(Assembly.GetAssembly(typeof(Diphap.JsNetBridge.Mvc.AspMvcInfo)).FullName);
                Console.WriteLine(Assembly.GetAssembly(typeof(Diphap.JsNetBridge.Mvc.Proxy.AssemblyInfoWrapper)).FullName);

                #region "First argument"
                string js_config = null;

                if (args.Length > 0)
                {
                    js_config = args[0];
                }
                #endregion

                config _config = config.ResolveAbsolutePathes(js_config);

                #region "validation"
                if (Directory.Exists(Path.GetDirectoryName(_config.file_js_absolute)) == false)
                {
                    var ex = new DirectoryNotFoundException("DirectoryNotFoundException =>" + Path.GetDirectoryName(_config.file_js_absolute));
                    Console.WriteLine(ex.Message);
                    throw ex;
                }

                if (File.Exists(_config.dll_asp_absolute) == false)
                {
                    var ex = new FileNotFoundException("FileNotFoundException =>" + _config.dll_asp_absolute, _config.dll_asp_absolute);
                    Console.WriteLine(ex.Message);
                    throw ex;
                }
                #endregion


                try
                {
                    Console.WriteLine(string.Format("Generate JS code - Begin  [{0}]", sw.Elapsed.TotalSeconds));


                    List<AssemblySet> assemblySetList = new List<Diphap.JsNetBridge.AssemblySet>();

                    if (_config.dll_set != null)
                    {
                        foreach (AssemblyConfig dto in _config.dll_set)
                        {
                            dto.validate(_config.asp_bin_absolute);
                            assemblySetList.Add(new AssemblySet(dto.file, dto.whitens_filters, dto.blackns_filters));
                        }
                    }

                    AspMvcInfo api = new AspMvcInfo(_config.dll_asp_absolute, assemblySetList, _config.isAspNetCoreWindows);
                    Console.WriteLine(string.Format("Instanciate AspMvcInfo - End [{0}]", sw.Elapsed.TotalSeconds));

                    #region "Generate Script codes"
                    //-- ts and js code.
                    api.WriteAllText(_config.file_js_absolute, _config.file_ts_absolute);
                    Console.WriteLine(string.Format("Generate JS and TS codes - api.WriteAllText({0}, {1}); - End [{2}]", 
                        _config.file_js_absolute, _config.file_ts_absolute, sw.Elapsed.TotalSeconds));
                    #endregion
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.Message);
                    throw ex;
                }
                sw.Stop();
                Console.WriteLine(string.Format("{0}: SUCCESS [{1} sec]", config.file_name_exe, sw.Elapsed.TotalSeconds));

            }
            catch (ReflectionTypeLoadException ex)
            {
                Console.WriteLine(DateTime.Now);
                foreach (var item in ex.LoaderExceptions)
                {
                    Console.WriteLine(item.Message);
                }
            }
            catch (Exception ex)
            {

                Console.WriteLine(ex.Message);
                throw ex;
            }



        }
    }
}
