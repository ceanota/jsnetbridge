using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace Diphap.JsNetBridge.Mvc.Proxy
{
    /// <summary>
    /// AssemblyInfoWrapper
    /// </summary>
    public abstract class AssemblyInfoWrapper
    {
        /// <summary>
        /// Assembly, ex: "System.Net.Http"
        /// </summary>
        internal protected Assembly _Assembly;

        /// <summary>
        /// Assembly Name, ex: "System.Net.Http"
        /// </summary>
        internal abstract protected string Name { get; }

        /// <summary>
        /// Namespace.
        /// </summary>
        internal abstract protected string Namespace { get; }

    }
}
