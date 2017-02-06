using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Diphap.JsNetBridge.Mvc;

namespace WebApplicationWinCore
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

            string appAspNetPath = "";
            appAspNetPath = @"D:\Source\Repos\jsnet\WebApplicationWinCore\bin\Release\net452\win7-x64\WebApplicationWinCore.exe";
            appAspNetPath = @"D:\Source\Repos\jsnet\WebApplicationWinCore\bin\Debug\net452\win7-x64\WebApplicationWinCore.exe";
            //appAspNetPath = @"D:\Source\Repos\jsnet\WebApplicationWinCore\bin\Debug\net452\WebApplicationWinCore.exe";
            AspMvcInfo api = new AspMvcInfo(appAspNetPath, true);

            host.Run();



        }
    }
}
