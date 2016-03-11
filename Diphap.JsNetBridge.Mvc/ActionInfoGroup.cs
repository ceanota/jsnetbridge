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
    public class ActionInfoGroup : IActionInfo
    {
        /// <summary>
        /// Action name.
        /// </summary>
        public string Action { get; set; }

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

        private readonly ActionInfo[] _signatures;

        /// <summary>
        /// Intanciate an instance of informations on action method.
        /// </summary>
        /// <param name="action"></param>
        /// <param name="controller"></param>
        /// <param name="area"></param>
        /// <param name="methodInfo">differents signatures of one method</param>
        public ActionInfoGroup(string action, Type type_controller, string areaName, IGrouping<string, MethodInfo> miGroup)
        {
            this.Action = action;
            this._type_controller = type_controller;
            this.Controller = this._type_controller.Name.Replace("Controller", "");
            this.Area = areaName;
            this.Url = "";
            this.MethodInfoGroup = miGroup;

            this._IsApiController = AspMvcInfo.TypesOfAspNetSet.Type_ApiController.IsAssignableFrom(this._type_controller);

            this._signatures = miGroup.Select(x => new ActionInfo(this.Action, this._type_controller, this.Area, x)).ToArray();

        }

        /// <summary>
        /// Value.
        /// [{Url:null, Params:null, Return:null, IsApiController:true, AjaxOptions:{}}]
        /// </summary>
        public string JsValue
        {
            get
            {
                StringBuilder sb = new StringBuilder();
                {
                    string objName = "action";
                    sb.Append("var action = {};");
                    sb.Append(ConfigJS.VS_JsEnumKeyValue_instruction(objName));
                    sb.Append(objName + "." + ConfigJS.brandLetter + "Url = null;");

                    for (int ii = 0; ii < this._signatures.Length; ii++)
                    {
                        sb.AppendFormat(objName + "." + ConfigJS.brandLetter + "sig{0} = {1};", ii, this._signatures[ii].GetJsValue(false));
                    }

                    sb.Append("return action;");
                }

                string json = JSHelper.GetFunction(sb.ToString(), true, "actionFactory");

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
                string json = string.Format("\"{0}\": {1}", this.Action, this.JsValue);
                return json;
            }
        }

        /// <summary>
        /// ex: 'AreaName.ControllerName.ActionName'
        /// </summary>
        public string JsLongName
        {
            get
            {
                return this._signatures[0].JsLongName;
            }
        }

        /// <summary>
        /// ex: 'AreaName.ControllerName.ActionName.Url="url_value"'
        /// </summary>
        public string JsSetUrl
        {
            get
            {
                return this._signatures[0].GetJsSetUrl(this.Url);
            }
        }

        /// <summary>
        /// Types of class.
        /// </summary>
        /// <returns></returns>
        public Type[] ParameterClassType() { return this._signatures.SelectMany(x => x.ParameterClassType()).ToArray(); }

        /// <summary>
        /// Text representing instance.
        /// </summary>
        /// <returns></returns>
        public override string ToString()
        {
            return this._signatures[0].ToString();
        }
    }
}
