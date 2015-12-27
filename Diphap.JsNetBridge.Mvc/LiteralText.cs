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
            #region "Literal"
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
*/
//#endregion
";
            #endregion

            string description = string.Format(descriptionFormat,
                assInfo.ProductTitle,
                assInfo.Version,
                assInfo.Description,
                assInfo.Copyright);

            return description;
        }

        static public string GetStarted()
        {
            #region"Literal"
            string text =
@"
//#region ""GET STARTED""
/***************************************************************************************************************
            //GET STARTED: Here's an example to start using the API:
***************************************************************************************************************/
// 1- Paste this code into the file 'BundleConfig.cs' in the function 'RegisterBundles' of the class 'BundleConfig':

            //bundles.Add(new ScriptBundle(""~/bundles/JsNetBridge"").Include(
            //            ""~/Scripts/Diphap.JsNetBridge.js""));

// 2- Paste this code into the file 'Global.asax.cs' in class 'MvcApplication':

            //static Diphap.JsNetBridge.Mvc.AspMvcInfo _AspMvcInfo;
            //static public Diphap.JsNetBridge.Mvc.AspMvcInfo AspMvcInfo
            //{
            //    get
            //    {
            //        if (_AspMvcInfo == null)
            //        {
            //            _AspMvcInfo = new Diphap.JsNetBridge.Mvc.AspMvcInfo(System.Reflection.Assembly.GetExecutingAssembly());
            //        }

            //        return _AspMvcInfo;
            //    }
            //}

// 3- Paste this code in each layout file (ex: '_ Layout.cshtml), before JS app:

            //@Scripts.Render(""~/bundles/JsNetBridge"")
            //<script>
            //    @(new MvcHtmlString({MyApplicationWeb}.MvcApplication.AspMvcInfo.UrlInfo.ToJS_SetUrl(this)))
            //</script>

// 4- Replace the word '{MyApplicationWeb}' with the name of your web application.

//#endregion
";
            #endregion

            return text;
        }
    }
}
