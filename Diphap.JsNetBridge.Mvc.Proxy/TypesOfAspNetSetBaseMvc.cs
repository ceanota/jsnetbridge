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
 
        abstract protected internal Type Type_JsonResult { get; }
        abstract protected internal Type Type_ViewResult { get; }

        protected internal Type Type_ActionResult;
        protected internal Type _Type_ActionNameAttribute;

        /// <summary>
        /// Microsoft.AspNetCore.Mvc
        /// </summary>
        /// <param name="assemblyResolver"></param>
        public AssemblyInfoWrapperBaseMvc(AssemblyResolver assemblyResolver)
        {
            this._Assembly = ReflectionLoader.Load(Name, assemblyResolver);



            {
                string name = (this.Namespace + ".ActionResult");
                this.Type_ActionResult = this._Assembly.GetType(name, false);
            }

            {
                string name = (this.Namespace + ".ActionNameAttribute");
                this._Type_ActionNameAttribute = this._Assembly.GetType(name, false);
            }
        }


    }

    /// <summary>
    /// //Microsoft.AspNetCore.Mvc.Formatters.Json.dll
    /// </summary>
    public class AssemblyInfoWrapperBaseMvc_FormattersJson : AssemblyInfoWrapper
    {

        protected internal Type Type_JsonResult;

        protected internal override string Name
        {
            get
            {
                return "Microsoft.AspNetCore.Mvc.Formatters.Json";
            }
        }

        protected internal override string Namespace
        {
            get
            {
                return "Microsoft.AspNetCore.Mvc";
            }
        }

        /// <summary>
        /// //Microsoft.AspNetCore.Mvc.Formatters.Json.dll
        /// </summary>
        /// <param name="assemblyResolver"></param>
        public AssemblyInfoWrapperBaseMvc_FormattersJson(AssemblyResolver assemblyResolver)
        {
            this._Assembly = ReflectionLoader.Load(Name, assemblyResolver);

            {
                string name = (this.Namespace + ".JsonResult");
                this.Type_JsonResult = this._Assembly.GetType(name, false);
            }
        }


    }

    /// <summary>
    /// //Microsoft.AspNetCore.Mvc.ViewFeatures.dll
    /// </summary>
    public class AssemblyInfoWrapperBaseMvc_ViewFeatures : AssemblyInfoWrapper
    {
        protected internal Type Type_ViewResult;

        protected internal override string Name
        {
            get
            {
                return "Microsoft.AspNetCore.Mvc.ViewFeatures";
            }
        }

        protected internal override string Namespace
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
        public AssemblyInfoWrapperBaseMvc_ViewFeatures(AssemblyResolver assemblyResolver)
        {
            this._Assembly = ReflectionLoader.Load(Name, assemblyResolver);

            {
                string name = (this.Namespace + ".ViewResult");
                this.Type_ViewResult = this._Assembly.GetType(name, false);
            }
        }


    }

}
