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
    /// <summary>
    /// System.Web.Mvc
    /// </summary>
    public class AssemblyInfoWrapperMvc : AssemblyInfoWrapperBaseMvc
    {
        /// <summary>
        /// Name of assembly.
        /// </summary>
        override internal protected string Name { get { return "System.Web.Mvc"; } }

        /// <summary>
        /// Namespace.
        /// </summary>
        internal protected override string Namespace
        {
            get
            {
                return this.Name;
            }
        }
        /// <summary>
        /// System.Web.Mvc
        /// </summary>
        public AssemblyInfoWrapperMvc(AssemblyResolver assemblyResolver)
            : base(assemblyResolver)
        {

        }
    }
}
