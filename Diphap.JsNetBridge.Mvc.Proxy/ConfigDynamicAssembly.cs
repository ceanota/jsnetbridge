//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Runtime.CompilerServices;
//using System.Text;
//using System.Threading.Tasks;

//namespace Diphap.JsNetBridge.Mvc.Proxy
//{
//    /// <summary>
//    /// For loading dynamically Assemblies.
//    /// </summary>
//    public class ConfigDynamicAssembly
//    {
//        /// <summary>
//        /// For loading dynamically Assemblies.
//        /// </summary>
//        static public Dictionary<string, string> References(bool isAspNetCoreWindows)
//        {
//            Dictionary<string, string> refe;

//            if (isAspNetCoreWindows)
//            {
//                refe = new Dictionary<string, string>()
//                {
//                    {"System.Web.Mvc", "System.Web.Mvc, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35"},
//                    {"System.Net.Http", "System.Net.Http, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a"},
//                    {"System.Web.Http", "System.Web.Http, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35"},
//                };
//            }
//            else
//            {
//                refe = new Dictionary<string, string>()
//                {
//                    {"Microsoft.AspNetCore.Mvc.Core", "Microsoft.AspNetCore.Mvc.Core, Version=1.0.1.0, Culture=neutral, PublicKeyToken=adb9793829ddae60"},
//                    {"Microsoft.AspNetCore.Mvc.Abstractions","Microsoft.AspNetCore.Mvc.Abstractions, Version=1.0.1.0, Culture=neutral, PublicKeyToken=adb9793829ddae60" },
//                    {"Microsoft.AspNetCore.Mvc.ViewFeatures","Assembly Microsoft.AspNetCore.Mvc.ViewFeatures, Version=1.0.1.0, Culture=neutral, PublicKeyToken=adb9793829ddae60" },
//                    {"System.Net.Http", "System.Net.Http, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a"},
//                };
//            }


//            return refe;
//        }


//    }


//}
