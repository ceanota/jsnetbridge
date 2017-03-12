using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.IO;
using WebApplicationWinCore.Models;

namespace WebApplicationWinCore.Controllers
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
            StreamReader reader = new StreamReader(this.Request.Body);
            string inputStream = reader.ReadToEnd();

            var result = new JsonResult(new ReturnData() { Url = this.Request.Path.Value, InputStream = inputStream, Success = true });
            return result;
        }

        [Diphap.JsNetBridge.Common.JsNetResponseType(typeof(ReturnData))]
        public ActionResult Action_WithParamterIdInUrl(string id)
        {
            StreamReader reader = new StreamReader(this.Request.Body);
            string inputStream = reader.ReadToEnd();

            var result = new JsonResult(new ReturnData() { InputStream = new { id }, Url = this.Request.Path.Value, Success = true });
            return result;
        }

        [Diphap.JsNetBridge.Common.JsNetResponseType(typeof(ReturnData))]
        [ActionName("Action_RealName")]
        public ActionResult Action_FakeName()
        {
            StreamReader reader = new StreamReader(this.Request.Body);
            string inputStream = reader.ReadToEnd();

            var result = new JsonResult(new ReturnData() { Url = this.Request.Path.Value, InputStream = inputStream, Success = true });
            return result;
        }
    }
}
