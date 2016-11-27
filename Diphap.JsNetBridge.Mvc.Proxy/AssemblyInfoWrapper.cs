using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace Diphap.JsNetBridge.Mvc.Proxy
{
    public abstract class AssemblyInfoWrapper
    {
        /// <summary>
        /// Assembly, ex: "System.Net.Http"
        /// </summary>
        protected Assembly _Assembly;

        /// <summary>
        /// Assembly Name, ex: "System.Net.Http"
        /// </summary>
        abstract protected string assName { get; }

        /// <summary>
        /// Namespace.
        /// </summary>
        abstract protected string _Namespace { get; }

    }
}
