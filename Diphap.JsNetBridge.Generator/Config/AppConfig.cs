using Diphap.JsNetBridge.Generator.Common;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Diphap.JsNetBridge.Generator.Config
{
    /// <summary>
    /// configuration of application.
    /// </summary>
    public class config
    {
        public string dll_asp;
        public const string file_name_out = "Diphap.JsNetBridge";
        internal string js_out = string.Format(@"Scripts\Diphap.JsNetBridge\{0}.js", file_name_out);
        public const string file_name_exe = file_name_out + ".Generator.exe";
        public AssemblyConfig[] dll_set;

        internal string json_content;
        internal string bin_path
        {
            get { return Path.GetDirectoryName(this.exe_path); }
        }
        internal string exe_path;
        internal string config_path;
        internal string folder_site_absolute;
        internal string file_js_absolute;
        internal string dll_asp_absolute;
        internal string asp_bin_absolute
        {
            get { return folder_site_absolute + "/bin"; }
        }

        /// <summary>
        /// Convert absolute path to relative path of ASP.NET MVC Application from exe.
        /// </summary>
        internal void ConvertDllAspToRelativePath()
        {
            if (Path.IsPathRooted(this.dll_asp))
            {
                //-- if it's absolute path
                //-- so we convert it to relative path.
                this.dll_asp = Helper.GetRelativePath(this.dll_asp, this.bin_path);

#if DEBUG
                //-- and save it in config file.
                JObject rss = JObject.Parse(this.json_content);
                rss["dll_asp"] = this.dll_asp;
                if (string.IsNullOrWhiteSpace(this.config_path) == false)
                {
                    File.WriteAllText(this.config_path, rss.ToString(Formatting.Indented).Replace(@"\\", "/").Replace(@"//", "/"));
                }
#endif

            }
        }

        /// <summary>
        /// Resolve Absolute Pathes
        /// </summary>
        /// <returns></returns>
        static internal config ResolveAbsolutePathes(string config_content = null)
        {

            config _config = ExtractConfig(config_content);

            Console.WriteLine(string.Format("{2}: [{0}:{1}]", "_config.dll_asp", _config.dll_asp, file_name_exe));

            if (Path.IsPathRooted(_config.dll_asp))
            {
                _config.ConvertDllAspToRelativePath();
            }

#if DEBUG
            #region "Append comments in config file."
            if (File.Exists(_config.config_path))
            {
                var config_example = new config()
                {
                    dll_asp = @"C:\www\MyApplicationMvc\bin\MyApplicationMvc.dll (ASP.NET MVC application)",
                    js_out = @"Scripts\Diphap.JsNetBridge\Diphap.JsNetBridge.js (output file, relative path from folder of ASP.NET MVC application)",
                    dll_set = new AssemblyConfig[] 
                        { 
                            new AssemblyConfig() { file = @"bin\MyBusinessEntities.dll (relative path from folder of ASP.NET MVC application)", ns_filters = new string[] { "MyBusinessEntities.dto (or no items)", "MyBusinessEntities.enum (or no items)" } },
                            new AssemblyConfig() { file = @"bin\MyViewEntities.dll (relative path from folder of ASP.NET MVC application)" }
                        }
                };

                StringBuilder sb = new StringBuilder();
                sb.AppendLine();
                sb.AppendLine();
                sb.AppendLine("/*");
                sb.AppendLine("Example of configuration:");
                sb.AppendLine(JsonConvert.SerializeObject(config_example, Formatting.Indented));
                sb.AppendLine("*/");

                File.AppendAllText(_config.config_path, sb.ToString());
            }
            #endregion
#endif


            #region "Resolves Absolute Paths"
            string dll_asp = Path.Combine(_config.bin_path, _config.dll_asp);
            string bin_dll_asp = Path.GetDirectoryName(dll_asp);
            string folder_asp = Path.GetDirectoryName(bin_dll_asp);

            _config.folder_site_absolute = new DirectoryInfo(folder_asp).FullName;

            _config.file_js_absolute = new FileInfo(_config.folder_site_absolute + @"/" + _config.js_out).FullName;

            _config.dll_asp_absolute = new FileInfo(dll_asp).FullName;
            #endregion

            Console.WriteLine(string.Format("{2}: [{0}:{1}]", "_config.folder_site_absolute", _config.folder_site_absolute, file_name_exe));
            Console.WriteLine(string.Format("{2}: [{0}:{1}]", "_config.file_js_absolute", _config.file_js_absolute, file_name_exe));
            Console.WriteLine(string.Format("{2}: [{0}:{1}]", "_config.dll_asp_absolute", _config.dll_asp_absolute, file_name_exe));

            return _config;
        }

        private static config ExtractConfig(string config_content = null)
        {
            string config_file = null;
            string path_exe = System.Reflection.Assembly.GetEntryAssembly().Location;
            string folder_bin = Path.GetDirectoryName(path_exe);
            Console.WriteLine(string.Format("{2}: [{0}:{1}]", "path_exe", path_exe, file_name_exe));

            if (string.IsNullOrWhiteSpace(config_content))
            {
                config_file = folder_bin + @"/" + Path.GetFileName(path_exe) + ".json";
                if (File.Exists(config_file) == false)
                {
                    var ex = new FileNotFoundException("FileNotFoundException =>", config_file);
                    Console.WriteLine(ex.Message);
                    throw ex;
                }

                config_content = File.ReadAllText(config_content).Replace(@"\", "/");
                Console.WriteLine(string.Format("{2}: [{0}:{1}]", "config_file", config_file, file_name_exe));
            }
            else
            {
                config_content = config_content.Replace(@"\", @"/");
            }

            config _config = JsonConvert.DeserializeObject<config>(config_content);
            _config.config_path = config_file;
            _config.exe_path = path_exe;
            _config.json_content = config_content;

            return _config;
        }

    }
}

