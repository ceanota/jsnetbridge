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
    public class TypesOfAspNetSetCoreWebApi_NetHttp : TypesOfAspNetSetBaseWebApi_NetHttp
    {
        protected override string assName_NetHttp
        {
            get
            {
                return "System.Net.Http";
            }
        }

        public TypesOfAspNetSetCoreWebApi_NetHttp(AssemblyResolver assemblyResolver) : base(assemblyResolver)
        {

        }
    }

    public class TypesOfAspNetSetCoreWebApi_WebHttp : TypesOfAspNetSetBaseWebApi_WebHttp
    {
        protected override string assName_WebHttp
        {
            get
            {
                return "Microsoft.AspNetCore.Mvc.Core";
            }
        }

        public TypesOfAspNetSetCoreWebApi_WebHttp(AssemblyResolver assemblyResolver) : base(assemblyResolver)
        {

        }
    }

}
