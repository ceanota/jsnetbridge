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

        protected internal override Type Type_JsonResult
        {
            get
            {
                return _assWrapper_FormatterJson.Type_JsonResult;
            }
        }

        protected internal override Type Type_ViewResult
        {
            get
            {
                return _assWrapper_ViewFeatures.Type_ViewResult;
            }
        }

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

        readonly AssemblyInfoWrapperBaseMvc_FormattersJson _assWrapper_FormatterJson;
        readonly AssemblyInfoWrapperBaseMvc_ViewFeatures _assWrapper_ViewFeatures;

        /// <summary>
        /// Microsoft.AspNetCore.Mvc
        /// </summary>
        /// <param name="assemblyResolver"></param>
        /// <param name="assWrapper_FormatterJson"></param>
        /// <param name="assWrapper_ViewFeatures"></param>
        public AssemblyInfoWrapperCoreMvc(AssemblyResolver assemblyResolver, AssemblyInfoWrapperBaseMvc_FormattersJson assWrapper_FormatterJson, AssemblyInfoWrapperBaseMvc_ViewFeatures assWrapper_ViewFeatures)
            : base(assemblyResolver)
        {
            _assWrapper_FormatterJson = assWrapper_FormatterJson;
            _assWrapper_ViewFeatures = assWrapper_ViewFeatures;
        }
    }
}
