using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;

namespace WinCoreAppExample
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var host = new WebHostBuilder()
                .UseKestrel()
                .UseContentRoot(Directory.GetCurrentDirectory())
                .UseIISIntegration()
                .UseStartup<Startup>()
                .Build();

            host.Run();
        }

        static Diphap.JsNetBridge.Mvc.AspMvcInfo _AspMvcInfo;
        static public Diphap.JsNetBridge.Mvc.AspMvcInfo AspMvcInfo
        {
            get
            {
                if (_AspMvcInfo == null)
                {
                    _AspMvcInfo = new Diphap.JsNetBridge.Mvc.AspMvcInfo(System.Reflection.Assembly.GetExecutingAssembly(), true);
                    //_AspMvcInfo.WriteAllText("C:\\Users\\diphap\\Source\\Repos\\jsnet\\WinCoreAppExample\\wwwroot\\lib\\Diphap.JsNetBridge\\Diphap.JsNetBridge.js");
                }
                return _AspMvcInfo;
            }
        }

    }
}
