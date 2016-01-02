using Diphap.JsNetBridge.Generator.Common;
using Diphap.JsNetBridge.Generator.Config;
using Diphap.JsNetBridge.Mvc;
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
    class Program
    {
        static void Main(string[] args)
        {
            try
            {
                Console.WriteLine(string.Format("{0}: BEGIN", config.file_name_exe));

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
                    #region "Generate JS code"
                    List<AssemblySet> assemblySetList = new List<Diphap.JsNetBridge.AssemblySet>();

                    if (_config.dll_set != null)
                    {
                        foreach (AssemblyConfig dto in _config.dll_set)
                        {
                            dto.validate(_config.asp_bin_absolute);
                            assemblySetList.Add(new AssemblySet(dto.file, dto.ns_filters));
                        }
                    }

                    AspMvcInfo api = new AspMvcInfo(_config.dll_asp_absolute, assemblySetList);

                    //-- js code.
                    api.WriteAllText(_config.file_js_absolute);
                    #endregion
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.Message);
                    throw ex;
                }

                Console.WriteLine(string.Format("{0}: SUCCESS", config.file_name_exe));

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
