using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Diphap.JsNetBridge.Generator;

namespace Diphap.JsNetBridge.GeneratorNetCore
{
    public class Program
    {
        public static void Main(string[] args)
        {
            //args = new string[] 
            //{
            //    @
            //    \"{ dll_asp:'%project:Directory%\\bin\\Debug\\net452\\win7-x64\\WinCoreAppExample.exe', file_js_absolute: 'C:\\Users\\diphap\\Source\\Repos\\jsnet\\WinCoreAppExample\\Scripts\\Diphap.JsNetBridge\\Diphap.JsNetBridge.js', isAspNetCoreWindows: true }\"
            //};
            ProgramCore.MainCore(args);
        }
    }
}
