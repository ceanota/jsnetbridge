using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;
using System.Web.Security;
using System.Web.SessionState;
using System.Web.Http;
using TestJsNetBridgeApp.Models;
using System.IO;

namespace TestJsNetBridgeApp
{
    public class Global : HttpApplication
    {
        static public readonly LayoutModel LayoutModel = new LayoutModel();

        void Application_Start(object sender, EventArgs e)
        {
            // Code qui s’exécute au démarrage de l’application
            AreaRegistration.RegisterAllAreas();
            GlobalConfiguration.Configure(WebApiConfig.Register);
            RouteConfig.RegisterRoutes(RouteTable.Routes);

            string dir_base_name = "Diphap.JsNetBridge.Mvc";
            Version version;
            try
            {
                var path_dir_base = Path.Combine(System.AppDomain.CurrentDomain.BaseDirectory, @"bin\..\..\packages");

                string[] directories = Directory.GetDirectories(path_dir_base, dir_base_name + "*");
                var versions = directories.Select(x => new Version((new DirectoryInfo(x)).Name.Replace(dir_base_name + ".", ""))).ToArray();

                if (versions.Length > 0)
                {
                    version = versions.Max();
                }
                else
                {
                    version = new Version("0.0.0");
                }
            }
            catch (Exception)
            {
                version = new Version("0.0.0");
            }


            Global.LayoutModel.PackageNugetName = dir_base_name;
            Global.LayoutModel.PackageNugetVersion = version;

        }

        static Diphap.JsNetBridge.Mvc.AspMvcInfo _AspMvcInfo;
        static public Diphap.JsNetBridge.Mvc.AspMvcInfo AspMvcInfo
        {
            get
            {
                if (_AspMvcInfo == null)
                {
                    _AspMvcInfo = new Diphap.JsNetBridge.Mvc.AspMvcInfo(System.Reflection.Assembly.GetExecutingAssembly());
                }
                return _AspMvcInfo;
            }
        }


    }



}