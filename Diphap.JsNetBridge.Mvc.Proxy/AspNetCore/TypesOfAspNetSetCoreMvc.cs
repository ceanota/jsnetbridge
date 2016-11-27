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
    /// Microsoft.AspNetCore.Mvc
    /// </summary>
    public class AssemblyInfoWrapperCoreMvc : AssemblyInfoWrapperBaseMvc
    {
        /// <summary>
        /// Name of assembly
        /// </summary>
        internal override protected string Name { get { return "Microsoft.AspNetCore.Mvc.Core"; } }

        /// <summary>
        /// Namespace
        /// </summary>
        internal protected override string Namespace
        {
            get
            {
                return "Microsoft.AspNetCore.Mvc";
            }
        }

        /// <summary>
        /// Microsoft.AspNetCore.Mvc
        /// </summary>
        /// <param name="assemblyResolver"></param>
        public AssemblyInfoWrapperCoreMvc(AssemblyResolver assemblyResolver)
            : base(assemblyResolver)
        {

        }
    }
}
