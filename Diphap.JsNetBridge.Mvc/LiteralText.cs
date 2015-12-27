using Diphap.JsNetBridge.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Diphap.JsNetBridge.Mvc
{
    static class LiteralText
    {
        static public string FileInfo(AssemblyInfo assInfo)
        {
            string descriptionFormat =
@"
//#region ""COPYRIGHT""
/***************************************************************************************************************
            {0} v{1}
            {2}
            {3}

            http://jsnet.codeplex.com/
            The MIT License (MIT)
            
            Creator:    TRAN Alexandre 
                        tran-alexandre@hotmail.fr
            Created:    {4}, {5}, {6}
*/
//#endregion
";

            string description = string.Format(descriptionFormat,
                assInfo.ProductTitle,
                assInfo.Version,
                assInfo.Description,
                assInfo.Copyright,
                DateTime.Now.ToString(),
                TimeZone.CurrentTimeZone.GetUtcOffset(DateTime.Now),
                TimeZone.CurrentTimeZone.DaylightName);

            return description;
        }

        static public string GetStarted()
        {
            string text =
@"
//#region ""GET STARTED""
/***************************************************************************************************************
            //GET STARTED: Here's an example to start using the software:
***************************************************************************************************************/
// 1- Paste this code into the file 'BundleConfig.cs' in the function 'RegisterBundles' of the class 'BundleConfig':

            //bundles.Add(new ScriptBundle(""~/bundles/JsNetBridge"").Include(
            //            ""~/Scripts/Diphap.JsNetBridge.js""));

// 2- Paste this code into the file 'Global.asax.cs' in class 'MvcApplication':

            //static Diphap.JsNetBridge.AspMvcInfo _AspMvcInfo;
            //static public Diphap.JsNetBridge.AspMvcInfo AspMvcInfo
            //{
            //    get
            //    {
            //        if (_AspMvcInfo == null)
            //        {
            //            _AspMvcInfo = new Diphap.JsNetBridge.AspMvcInfo(System.Reflection.Assembly.GetExecutingAssembly());
            //        }

            //        return _AspMvcInfo;
            //    }
            //}

// 3- Paste this code in each layout file (ex: '_ Layout.cshtml), before JS app:

            //@Scripts.Render(""~/bundles/JsNetBridge"")
            //<script>
            //    @(new MvcHtmlString(SingleAppExample.MvcApplication.AspMvcInfo.UrlInfo.ToJS_SetUrl(this)))
            //</script>
//#endregion
";
            return text;
        }
    }
}
