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
    abstract public class TypesOfAspNetSetBaseMvc : TypesOfAspNetSet
    {
        #region "_Ass_WebMvc"
        protected readonly Assembly _Ass_WebMvc;
        protected internal Type Type_JsonResult;
        protected internal Type Type_ActionResult;
        protected internal Type Type_ViewResult;
        #endregion

        private Type _Type_ActionNameAttribute;
        protected internal override Type Type_ActionNameAttribute
        {
            get
            {
                return _Type_ActionNameAttribute;
            }
        }

        abstract protected string assName { get; }

        public TypesOfAspNetSetBaseMvc(AssemblyResolver assemblyResolver)
        {

            #region "_Ass_WebMvc"
            this._Ass_WebMvc = ReflectionLoader.Load(assName, assemblyResolver);


            foreach (var t in this._Ass_WebMvc.ExportedTypes)
            {
                if (this.Type_JsonResult == null && t.FullName == assName + ".JsonResult")
                {
                    this.Type_JsonResult = t;
                }

                if (this.Type_ActionResult == null && t.FullName == assName + ".ActionResult")
                {
                    this.Type_ActionResult = t;
                }

                if (this.Type_ViewResult == null && t.FullName == assName + ".ViewResult")
                {
                    this.Type_ViewResult = t;
                }

                if (this._Type_ActionNameAttribute == null && t.FullName == assName + ".ActionNameAttribute")
                {
                    this._Type_ActionNameAttribute = t;
                }

                if (this.Type_JsonResult != null && this.Type_ActionResult != null && this.Type_ViewResult != null && this.Type_ActionNameAttribute != null)
                {
                    break;
                }
            }

            #endregion
        }

        protected internal override string GetRouteTemplate(MethodInfo MethodInfo)
        {
            return "";
        }
    }
}
