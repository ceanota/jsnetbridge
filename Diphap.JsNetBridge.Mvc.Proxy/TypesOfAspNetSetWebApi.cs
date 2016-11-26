using Diphap.JsNetBridge.Common;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;

[assembly: InternalsVisibleTo("Diphap.JsNetBridge.Mvc")]

namespace Diphap.JsNetBridge.Mvc.Proxy
{
    public class TypesOfAspNetSetWebApi_NetHttp : TypesOfAspNetSetBaseWebApi_NetHttp
    {
        protected override string assName_NetHttp
        {
            get
            {
                return "System.Net.Http";
            }
        }

        public TypesOfAspNetSetWebApi_NetHttp(AssemblyResolver assemblyResolver) : base(assemblyResolver)
        {

        }
    }

    public class TypesOfAspNetSetWebApi_WebHttp : TypesOfAspNetSetBaseWebApi_WebHttp
    {
        protected override string assName_WebHttp
        {
            get
            {
                return "System.Web.Http";
            }
        }

        public TypesOfAspNetSetWebApi_WebHttp(AssemblyResolver assemblyResolver) : base(assemblyResolver)
        {

        }
    }

}
