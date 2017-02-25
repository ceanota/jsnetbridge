using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TestJsNetBridgeApp.Models;

namespace TestJsNetBridgeApp.Areas.TestArea.Controllers
{
    public class Home2Controller : Controller
    {
        [Diphap.JsNetBridge.Common.JsNetResponseType(typeof(ReturnData))]
        public ActionResult Action_NoParams()
        {
            StreamReader reader = new StreamReader(this.Request.InputStream);
            string inputStream = reader.ReadToEnd();

            var result = new JsonResult();
            result.JsonRequestBehavior = JsonRequestBehavior.AllowGet;
            result.Data = new ReturnData() { Url = this.Request.Url.AbsolutePath, InputStream = inputStream, Success = true };
            return result;
        }

        [Diphap.JsNetBridge.Common.JsNetResponseType(typeof(ReturnData))]
        [ActionName("Action_RealName")]
        public ActionResult Action_FakeName()
        {
            StreamReader reader = new StreamReader(this.Request.InputStream);
            string inputStream = reader.ReadToEnd();

            var result = new JsonResult();
            result.JsonRequestBehavior = JsonRequestBehavior.AllowGet;
            result.Data = new ReturnData() { Url = this.Request.Url.AbsolutePath, InputStream = inputStream, Success = true };
            return result;
        }
    }
}