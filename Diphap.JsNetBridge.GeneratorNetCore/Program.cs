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
            args = new string[] { @"{ dll_asp:'D:\Source\Repos\jsnet\WebApplicationWinCore\bin\Debug\net452\\win7-x64\WebApplicationWinCore.exe', file_js_absolute: 'D:\Source\Repos\jsnet\WebApplicationWinCore\Scripts\Diphap.JsNetBridge\Diphap.JsNetBridge.js', isAspNetCoreWindows: true }" };
            ProgramCore.MainCore(args);
        }
    }
}
