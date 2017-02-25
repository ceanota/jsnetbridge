using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using TestJsNetBridgeApp.Models;

namespace TestJsNetBridgeApp.Controllers
{
    public class DataController : ApiController
    {
        public ReturnData Get()
        {
            return new ReturnData() { Success = true, Url = this.Request.RequestUri.AbsolutePath };
        }

        //[ActionName("testPutt")]
        [Diphap.JsNetBridge.Common.JsNetResponseType(typeof(ReturnData))]
        [AcceptVerbsAttribute("TEST")]
        public HttpResponseMessage Action_AcceptVerbs_TEST()
        {
            return Request.CreateResponse(HttpStatusCode.OK, new ReturnData() { Success = true, Url = this.Request.RequestUri.AbsolutePath, Method = this.Request.Method.Method });
        }

        //[Route("customers/{customerId}/orders")]
        [Route("customers/orders")]
        [System.Web.Http.HttpPut()]
        public ReturnData Orders()
        {
            return new ReturnData() { Success = true, Url = this.Request.RequestUri.AbsolutePath, Method = this.Request.Method.Method }; ;
        }

    }
}
