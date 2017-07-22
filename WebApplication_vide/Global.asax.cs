using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace WebApplication_vide
{
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            RouteConfig.RegisterRoutes(RouteTable.Routes);
        }

        #region "JsNetBridge: it will help generate the url in the layout of views."
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
        #endregion
    }
}
