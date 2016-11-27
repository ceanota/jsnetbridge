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
    /// System.Web.Mvc or Microsoft.AspNetCore.Mvc
    /// </summary>
    public class TypesOfAspNetSetBaseMvc : TypesOfAspNetSet
    {
        /// <summary>
        /// ActionNameAttribute
        /// </summary>
        protected internal override Type Type_ActionNameAttribute
        {
            get
            {
                return TMvc._Type_ActionNameAttribute;
            }
        }

        /// <summary>
        /// System.Web.Mvc or Microsoft.AspNetCore.Mvc
        /// </summary>
        public readonly AssemblyInfoWrapperBaseMvc TMvc;

        /// <summary>
        /// System.Web.Mvc or Microsoft.AspNetCore.Mvc
        /// </summary>
        /// <param name="TMvc_"></param>
        public TypesOfAspNetSetBaseMvc(AssemblyInfoWrapperBaseMvc TMvc_)
        {
            this.TMvc = TMvc_;
        }

        /// <summary>
        /// Route template
        /// </summary>
        /// <param name="MethodInfo"></param>
        /// <returns></returns>
        protected internal override string GetRouteTemplate(MethodInfo MethodInfo)
        {
            return "";
        }
    }

    /// <summary>
    /// Microsoft.AspNetCore.Mvc
    /// </summary>
    abstract public class AssemblyInfoWrapperBaseMvc : AssemblyInfoWrapper
    {
        #region "_Ass_WebMvc"
        protected internal Type Type_JsonResult;
        protected internal Type Type_ActionResult;
        protected internal Type Type_ViewResult;
        protected internal Type _Type_ActionNameAttribute;
        #endregion

        /// <summary>
        /// Microsoft.AspNetCore.Mvc
        /// </summary>
        /// <param name="assemblyResolver"></param>
        public AssemblyInfoWrapperBaseMvc(AssemblyResolver assemblyResolver)
        {

            #region "_Ass_WebMvc"
            this._Assembly = ReflectionLoader.Load(Name, assemblyResolver);


            foreach (var t in this._Assembly.ExportedTypes)
            {
                if (this.Type_JsonResult == null && t.FullName == Name + ".JsonResult")
                {
                    this.Type_JsonResult = t;
                }

                if (this.Type_ActionResult == null && t.FullName == Name + ".ActionResult")
                {
                    this.Type_ActionResult = t;
                }

                if (this.Type_ViewResult == null && t.FullName == Name + ".ViewResult")
                {
                    this.Type_ViewResult = t;
                }

                if (this._Type_ActionNameAttribute == null && t.FullName == Name + ".ActionNameAttribute")
                {
                    this._Type_ActionNameAttribute = t;
                }

                if (this.Type_JsonResult != null && this.Type_ActionResult != null && this.Type_ViewResult != null && this._Type_ActionNameAttribute != null)
                {
                    break;
                }
            }

            #endregion
        }


    }

}
