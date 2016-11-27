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
        Type _Type_JsonResult;
        protected internal override Type Type_JsonResult
        {
            get
            {
                if (_Type_JsonResult == null)
                {
                    string name = (this.Namespace + ".JsonResult");
                    this._Type_JsonResult = this._Assembly.GetType(name, false);
                }

                return _Type_JsonResult;
            }
        }

        Type _Type_ViewResult;
        protected internal override Type Type_ViewResult
        {
            get
            {
                if (_Type_ViewResult == null)
                {
                    string name = (this.Namespace + ".ViewResult");
                    _Type_ViewResult = this._Assembly.GetType(name, false);
                }

                return _Type_ViewResult;
            }
        }

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
                return "System.Web.Mvc";
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
