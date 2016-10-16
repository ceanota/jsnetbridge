using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MvcAppExample.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Message = "Modify this template to jump-start your ASP.NET MVC application.";

            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your app descriptionFormat page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public JsonResult ShowMe(string name, int? age)
        {

            JsonResult result = new JsonResult();
            result.Data = new { name = name, age = age };
            result.JsonRequestBehavior = JsonRequestBehavior.AllowGet;
            return result;
        }
    }



}
