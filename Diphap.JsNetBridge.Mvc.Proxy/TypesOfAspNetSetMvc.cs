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
    public class TypesOfAspNetSetMvc : TypesOfAspNetSet
    {
        #region "_Ass_WebMvc"
        readonly Assembly _Ass_WebMvc;
        internal Type Type_JsonResult;
        internal Type Type_ActionResult;
        internal Type Type_ViewResult;
        #endregion

        public TypesOfAspNetSetMvc(AssemblyResolver assemblyResolver)
            : base(assemblyResolver)
        {

            #region "_Ass_WebMvc"
            {
                string assName = "System.Web.Mvc";
                this._Ass_WebMvc = _LoadAssembly(assName, assemblyResolver);
            }

            foreach (var t in this._Ass_WebMvc.ExportedTypes)
            {
                if (this.Type_JsonResult == null && t.FullName == "System.Web.Mvc.JsonResult")
                {
                    this.Type_JsonResult = t;
                }

                if (this.Type_ActionResult == null && t.FullName == "System.Web.Mvc.ActionResult")
                {
                    this.Type_ActionResult = t;
                }

                if (this.Type_ViewResult == null && t.FullName == "System.Web.Mvc.ViewResult")
                {
                    this.Type_ViewResult = t;
                }

                if (this.Type_ActionNameAttribute == null && t.FullName == "System.Web.Mvc.ActionNameAttribute")
                {
                    this.Type_ActionNameAttribute = t;
                }

                if (this.Type_JsonResult != null && this.Type_ActionResult != null && this.Type_ViewResult != null && this.Type_ActionNameAttribute != null)
                {
                    break;
                }
            }

            #endregion
        }
    }
}
