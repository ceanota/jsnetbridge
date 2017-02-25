using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using TestJsNetBridgeApp.Models;

namespace TestJsNetBridgeApp.Areas.TestArea.Controllers
{
    public class Data2Controller : ApiController
    {
        public ReturnData Get()
        {
            return new ReturnData() { Success = true, Url = this.Request.RequestUri.AbsolutePath };
        }
    }
}
