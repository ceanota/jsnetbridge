using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApplication_vide.Controllers
{
    public class TestController : Controller
    {

        public ActionResult Index_test(EffetFacture ef)
        {
            throw new NotImplementedException();
        }

        public ActionResult Index()
        {
            return View();
        }

    }
}