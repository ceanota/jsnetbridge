using Diphap.JsNetBridge.Common;
using Diphap.JsNetBridge.Common.JS;
using Diphap.JsNetBridge.Mvc.Helpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;

namespace Diphap.JsNetBridge.Mvc
{
    /// <summary>
    /// Informations on action method.
    /// </summary>
    public class ActionInfoGroup
    {
        /// <summary>
        /// Action name.
        /// </summary>
        public string MethodName { get; set; }

        /// <summary>
        /// Controller name.
        /// </summary>
        public string Controller { get; set; }

        /// <summary>
        /// Area name.
        /// </summary>
        public string Area { get; set; }

        /// <summary>
        /// MethodInfoGroup on action.
        /// </summary>
        public IGrouping<string, MethodInfo> MethodInfoGroup { get; set; }

        /// <summary>
        /// Url.
        /// </summary>
        public string Url { get; set; }

        private readonly Type _type_controller;

        readonly bool _IsApiController = false;
        public bool IsApiController { get { return this._IsApiController; } }

        public ActionInfo[] Signatures { get; private set; }

        private readonly ConfigJS.JSNamespace _JSNamespace;
        /// <summary>
        /// Intanciate an instance of informations on action method.
        /// </summary>
        /// <param name="action"></param>
        /// <param name="type_controller"></param>
        /// <param name="areaName"></param>
        /// <param name="miGroup">differents signatures of one method</param>
        /// <param name="JSNamespace"></param>
        public ActionInfoGroup(string action, Type type_controller, string areaName, IGrouping<string, MethodInfo> miGroup, ConfigJS.JSNamespace JSNamespace)
        {
            _JSNamespace = JSNamespace;
            this.MethodName = action;
            this._type_controller = type_controller;
            this.Controller = this._type_controller.Name.Replace("Controller", "");
            this.Area = areaName;
            this.Url = "";
            this.MethodInfoGroup = miGroup;

            this._IsApiController = AspMvcInfo.TypesOfAspNetSetWebApi.TWebHttp.IsApiConstroller(this._type_controller);

            this.Signatures = miGroup.Select(x => new ActionInfo(this._type_controller, this.Area, x, JSNamespace)).ToArray();
            
            //-- set idx.
            for (int ii = 0; ii < this.Signatures.Length; ii++)
            {
                this.Signatures[ii].Idx = ii;
            }
        }

        /// <summary>
        /// Value.
        /// [{Url:null, Params:null, Return:null, IsApiController:true, AjaxSettings:{}}]
        /// </summary>
        public string JsValue
        {
            get
            {
                StringBuilder sb = new StringBuilder();
                {
                    string objName = "obj";
                    sb.Append("var " + objName + " = {};");
                    sb.Append(ConfigJS.VS_JsEnumKeyValue_instruction(objName));

                    for (int ii = 0; ii < this.Signatures.Length; ii++)
                    {
                        sb.AppendFormat(objName + "." + ConfigJS.brandLetter + "action{0} = {1};", this.Signatures[ii].Idx.Value, this.Signatures[ii].GetJsValue());
                    }

                    sb.Append("return " + objName + ";");
                }

                string json = ScriptHelper.GetInstance(EnumScript.JS).GetFunction(sb.ToString(), true, "actionFactory");

                return json;
            }
        }

        /// <summary>
        /// Key and jsvalue.
        /// [action_name: {url:null, param:null, return:null }]
        /// </summary>
        public string JsKeyValue
        {
            get
            {
                string json = string.Format("\"{0}\": {1}", this.MethodName, this.JsValue);
                return json;
            }
        }

        IList<Type> _ParameterClassTypes;

        /// <summary>
        /// all Types of class.
        /// </summary>
        /// <returns></returns>
        public IList<Type> ParameterClassTypes()
        {
            if (this._ParameterClassTypes == null)
            {
                this._ParameterClassTypes = this.Signatures.SelectMany(x => x.ParameterClassTypes()).Distinct().ToArray();
            }

            return this._ParameterClassTypes;
        }

        IList<Type> _ParameterEnumTypes;

        /// <summary>
        /// all Types of Enum.
        /// </summary>
        /// <returns></returns>
        public IList<Type> ParameterEnumTypes()
        {
            if (this._ParameterEnumTypes == null)
            {
                this._ParameterEnumTypes = this.Signatures.SelectMany(x => x.ParameterEnumTypes()).Distinct().ToArray();
            }

            return this._ParameterEnumTypes;
        }

        IList<Type> _AllInOutClassTypes;

        /// <summary>
        /// Parameter Class Types and Return class type.
        /// </summary>
        /// <returns></return>
        public IList<Type> AllInOutClassTypes()
        {
            if (this._AllInOutClassTypes == null)
            {
                this._AllInOutClassTypes = this.Signatures.SelectMany(x => x.AllInOutClassTypes()).Distinct().ToArray();
            }
            return this._AllInOutClassTypes;
        }

        /// <summary>
        /// Text representing instance.
        /// </summary>
        /// <returns></returns>
        public override string ToString()
        {
            return this.Signatures[0].ToString();
        }
    }
}
