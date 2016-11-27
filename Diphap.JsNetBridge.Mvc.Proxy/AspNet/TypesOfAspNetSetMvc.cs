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
    public class TypesOfAspNetSetMvc : TypesOfAspNetSetBaseMvc
    {

        override protected string assName { get { return "System.Web.Mvc"; } }

        public TypesOfAspNetSetMvc(AssemblyResolver assemblyResolver)
            : base(assemblyResolver)
        {

        }
    }
}
