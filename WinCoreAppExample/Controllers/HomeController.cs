using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace WinCoreAppExample.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult About()
        {
            ViewData["Message"] = "Your application description page.";
            
            return View();
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }

        public IActionResult Error()
        {
            return View();
        }

        [ActionName("vue")]
        public ViewResult Vue()
        {
            throw new NotImplementedException();
        }

        [AcceptVerbsAttribute("fdsf")]
        public JsonResult Data()
        {
            return new JsonResult("");
        }
    }
}
