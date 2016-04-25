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

        //private string GetMvcDefaultUrl()
        //{
        //    string url;

        //    if (string.IsNullOrWhiteSpace(this.Area))
        //    {
        //        url = string.Format("\"/{0}/{1}\"", this.Controller, this.Action);
        //    }
        //    else
        //    {
        //        url = string.Format("\"/{0}/{1}/{2}\"", this.Area, this.Controller, this.Action);
        //    }

        //    return url;
        //}

        //private string GetApiDefaultUrl()
        //{
        //    string url;

        //    if (string.IsNullOrWhiteSpace(this.Area))
        //    {
        //        url = string.Format("\"/api/{0}/{1}\"", this.Controller, this.Action);
        //    }
        //    else
        //    {
        //        url = string.Format("\"/{0}/api/{1}/{2}\"", this.Area, this.Controller, this.Action);
        //    }

        //    return url;
        //}

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

                    sb.Append(objName + "." + ConfigJS.brandLetter + "_Url = null;");

                    //-- names.
                    sb.AppendFormat("action.{0}Names = {{ {0}Action : \"{1}\", {0}Controller : \"{2}\", {0}Area : \"{3}\" }};",
    ConfigJS.brandLetter, this.Action, this.Controller, string.IsNullOrWhiteSpace(this.Area) ? "" : this.Area);

                    for (int ii = 0; ii < this._signatures.Length; ii++)
                    {
                        sb.AppendFormat(objName + "." + ConfigJS.brandLetter + "sig{0} = {1};", ii, this._signatures[ii].GetJsValue(false));
                    }
                    sb.Append(objName + "." + ConfigJS.brandLetter + "GetUrl = function () { return action.$_Url || $dp.$JsNet.$Helpers.$Shared.$Action.getUrlFromTemplate(action); };");
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

        IList<Type> _ParameterClassTypes;

        /// <summary>
        /// allTypes of class.
        /// </summary>
        /// <returns></returns>
        public IList<Type> ParameterClassTypes()
        {
            if (this._ParameterClassTypes == null)
            {
                this._ParameterClassTypes = this._signatures.SelectMany(x => x.ParameterClassTypes()).Distinct().ToArray();
            }

            return this._ParameterClassTypes;
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
                this._AllInOutClassTypes = this._signatures.SelectMany(x => x.AllInOutClassTypes()).Distinct().ToArray();
            }
            return this._AllInOutClassTypes;
        }

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
