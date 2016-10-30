using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SingleAppExample.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index(string returnUrl)
        {
            ViewBag.ReturnUrl = returnUrl;
            return View();
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