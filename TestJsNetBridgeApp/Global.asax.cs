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

            Global.LayoutModel.PackageNugetName = "Diphap.JsNetBridge.Mvc";
            Global.LayoutModel.PackageNugetVersion = new Version("1.2.42");
            
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