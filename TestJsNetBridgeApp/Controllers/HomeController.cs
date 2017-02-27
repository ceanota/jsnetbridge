using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TestJsNetBridgeApp.Models;

namespace TestJsNetBridgeApp.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }

        [Diphap.JsNetBridge.Common.JsNetResponseType(typeof(ReturnData))]
        public ActionResult Action_NoParams()
        {
            StreamReader reader = new StreamReader(this.Request.InputStream);
            string inputStream = reader.ReadToEnd();

            var result = new JsonResult();
            result.JsonRequestBehavior = JsonRequestBehavior.AllowGet;
            result.Data = new ReturnData() { Url = this.Request.Url.AbsolutePath, InputStream = inputStream, Success = true};
            return result;
        }

        [Diphap.JsNetBridge.Common.JsNetResponseType(typeof(ReturnData))]
        public ActionResult Action_WithParamterIdInUrl(string id)
        {
            StreamReader reader = new StreamReader(this.Request.InputStream);
            string inputStream = reader.ReadToEnd();

            var result = new JsonResult();
            result.JsonRequestBehavior = JsonRequestBehavior.AllowGet;
            result.Data = new ReturnData() { InputStream = new { id }, Url = this.Request.Url.AbsolutePath, Success = true };
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

        #region "copy and paste this"
        public class dpPerson
        {
            public string name { get; set; }
            public int age { get; set; }
            public string description { get { return String.Format("{0} has {1} years old", name, age); } }
            public dpPerson() { }
            public dpPerson(string name, int age) { this.name = name; this.age = age; }
        }

        [Diphap.JsNetBridge.Common.JsNetResponseType(typeof(dpPerson))]
        public JsonResult ShowMe(string name, int age)
        {
            JsonResult result = new JsonResult();
            result.Data = new dpPerson(name, age);
            return result;
        }
        #endregion
    }
}