using Diphap.JsNetBridge.Common.JS;
using Diphap.JsNetBridge.Data;
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
    public class ActionInfo : Diphap.JsNetBridge.Mvc.IActionInfo
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
        public MethodInfo MethodInfo { get; private set; }

        /// <summary>
        /// Url.
        /// </summary>
        public string Url { get; set; }

        private readonly Type _type_controller;

        readonly bool _IsApiController = false;
        public bool IsApiController { get { return this._IsApiController; } }
        public bool IsJsonResult { get; private set; }
        public bool IsHttpResponseMessage { get; private set; }
        public bool IsActionResult { get; private set; }
        public bool IsViewResult { get; private set; }
        public bool IsIEnumerable { get; private set; }

        /// <summary>
        /// Intanciate an instance of informations on action method.
        /// </summary>
        /// <param name="action"></param>
        /// <param name="controller"></param>
        /// <param name="area"></param>
        /// <param name="miGroup">differents signatures of one method</param>
        public ActionInfo(string action, Type type_controller, string areaName, MethodInfo methodInfo)
        {
            this.Action = action;
            this._type_controller = type_controller;
            this.Controller = this._type_controller.Name.Replace("Controller", "");
            this.Area = areaName;
            this.Url = "";
            this.MethodInfo = methodInfo;

            this._IsApiController = AspMvcInfo.TypesOfAspNetSet.Type_ApiController.IsAssignableFrom(this._type_controller);

            this.IsJsonResult = AspMvcInfo.TypesOfAspNetSet.Type_JsonResult.IsAssignableFrom(this.MethodInfo.ReturnType);
            this.IsHttpResponseMessage = AspMvcInfo.TypesOfAspNetSet.Type_HttpResponseMessage.IsAssignableFrom(this.MethodInfo.ReturnType);
            this.IsActionResult = AspMvcInfo.TypesOfAspNetSet.Type_ActionResult.IsAssignableFrom(this.MethodInfo.ReturnType);
            this.IsViewResult = AspMvcInfo.TypesOfAspNetSet.Type_ViewResult.IsAssignableFrom(this.MethodInfo.ReturnType);
            this.IsIEnumerable = TypeHelper.IsCollection(this.MethodInfo.ReturnType);
        }


        IList<Type> _ParameterClassTypes;

        /// <summary>
        /// Parameter Class Types
        /// </summary>
        /// <returns></returns>
        public IList<Type> ParameterClassTypes()
        {
            if (this._ParameterClassTypes == null)
            {
                this._ParameterClassTypes = TypeHelper.GetCustomTypes(this.MethodInfo.GetParameters().Select(p => p.ParameterType).ToArray()).Distinct().ToArray();
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
                this._AllInOutClassTypes = new List<Type>(this.ParameterClassTypes());
                IList<Type> returnTypes = TypeHelper.GetCustomTypes(new Type[] { this.MethodInfo.ReturnType });

                foreach (var t in returnTypes)
                {
                    this._AllInOutClassTypes.Add(t);
                }
                this._AllInOutClassTypes = this._AllInOutClassTypes.Distinct().ToArray();
            }

            return this._AllInOutClassTypes;
        }

        /// <summary>
        /// Serialise parameters of action.
        /// {param1:obj1, param2:2, param3:"" }
        /// </summary>
        /// <returns></returns>
        public string ToJS_Params()
        {
            ParameterInfo[] piArray = this.MethodInfo.GetParameters();

            List<string> jsonParams = GetJS_Params(piArray);

            string jsonParams_string = "null";

            if (jsonParams.Count > 0)
            {
                jsonParams_string = "{" + string.Join(",", jsonParams) + "}";
            }

            return jsonParams_string;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public string ToJS_Return()
        {
            Type type_return = this.MethodInfo.ReturnType;
            string jsonValue = GetJS_EmptyValue_WithFactory(type_return, true);
            return jsonValue;
        }

        /// <summary>
        /// Value.
        /// [{Url:null, Params:null, Return:null, IsApiController:true, AjaxOptions:{}}]
        /// </summary>
        public string JsValue
        {
            get
            {
                string json = GetJsValue(true);

                return json;
            }
        }

        /// <summary>
        /// Value.
        /// [{Url:null, Params:null, Return:null, IsApiController:true, AjaxOptions:{}}]
        /// </summary>
        /// <param name="hasUrl"></param>
        /// <returns></returns>
        public string GetJsValue(bool hasUrl)
        {
            StringBuilder sb = new StringBuilder();
            {
                string objName = "action";
                sb.Append("var action = {};");
                sb.Append(ConfigJS.VS_JsEnumKeyValue_instruction(objName));

                if (hasUrl) { sb.Append("action." + ConfigJS.brandLetter + "Url = null;"); }

                sb.AppendFormat(objName + "." + ConfigJS.brandLetter + "Params = {0};", JSHelper.GetFactory(this.ToJS_Params(), false));
                sb.AppendFormat(objName + "." + ConfigJS.brandLetter + "Return = {0};", JSHelper.GetFactory(this.ToJS_Return(), false));

                if (this.IsApiController)
                {
                    string httpMethod_jsObj = WebApiHelper.GetHttpMethod_ToJS(this.MethodInfo);
                    if (string.IsNullOrWhiteSpace(httpMethod_jsObj) == false)
                    {
                        sb.AppendFormat(objName + "." + ConfigJS.brandLetter + "IsApiController = {{ {0}httpMethodArray:{1} }};", ConfigJS.brandLetter, httpMethod_jsObj);
                    }
                }
                else
                {
                    sb.Append(objName + "." + ConfigJS.brandLetter + "IsApiController = null;");
                }

                string sb_ajax_options;
                if (this.IsApiController)
                {
                    sb_ajax_options = GetAjaxOptions_ForWebApi().ToString();
                }
                else
                {
                    sb_ajax_options = GetAjaxOptions_ForMvc().ToString();
                }

                sb.AppendFormat(objName + "." + ConfigJS.brandLetter + "AjaxOptions = {0};", JSHelper.GetFactory(sb_ajax_options, false));

                sb.Append("return action;");
            }

            string json = JSHelper.GetFunction(sb.ToString(), true, "actionFactory");
            return json;
        }

        /// <summary>
        /// Get ajax options for js.
        /// </summary>
        /// <returns></returns>
        private StringBuilder GetAjaxOptions_ForWebApi()
        {
            StringBuilder sb_ajax_options = new StringBuilder();
            sb_ajax_options.Append("{");
            sb_ajax_options.AppendFormat("dataType:\"{0}\"", WebApiHelper.GetAjaxDataType(this.MethodInfo));
            sb_ajax_options.Append(",");
            sb_ajax_options.AppendFormat("contentType:\"{0}\"", "application/json");
            sb_ajax_options.Append(",");
            sb_ajax_options.AppendFormat("cache:{0}", "false");

            sb_ajax_options.Append("}");
            return sb_ajax_options;
        }

        /// <summary>
        /// Get ajax options for js.
        /// </summary>
        /// <returns></returns>
        private StringBuilder GetAjaxOptions_ForMvc()
        {
            StringBuilder sb_ajax_options = new StringBuilder();
            sb_ajax_options.Append("{");

            if (this.IsJsonResult)
            {
                sb_ajax_options.AppendFormat("dataType:\"{0}\"", "json");
                sb_ajax_options.Append(",");
                sb_ajax_options.AppendFormat("contentType:\"{0}\"", "application/json");
                sb_ajax_options.Append(",");
                sb_ajax_options.AppendFormat("cache:{0}", "false");
            }
            sb_ajax_options.Append("}");
            return sb_ajax_options;
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
                string json = string.Format("{0}.{1}", this.Controller, this.Action);

                if (string.IsNullOrWhiteSpace(this.Area) == false)
                {
                    json = this.Area + "." + json;
                }

                return json;
            }
        }

        /// <summary>
        /// ex: 'AreaName.ControllerName.ActionName.Url="url_value"'
        /// </summary>
        public string JsSetUrl
        {
            get
            {
                return GetJsSetUrl(this.Url);
            }
        }

        /// <summary>
        /// ex: 'AreaName.ControllerName.ActionName.Url="url_value"'
        /// </summary>
        /// <param name="url_"></param>
        /// <returns></returns>
        public string GetJsSetUrl(string url_)
        {
            string url = string.IsNullOrWhiteSpace(url_) ? "null" : "\"" + url_ + "\"";
            string json = this.JsLongName + "." + ConfigJS.brandLetter + "Url=" + url;
            return json;
        }

        /// <summary>
        /// Text representing instance.
        /// </summary>
        /// <returns></returns>
        public override string ToString()
        {
            string text;

            if (string.IsNullOrWhiteSpace(this.Area))
            {
                text = string.Format("{0}.{1}", this.Controller, this.Action);
            }
            else
            {
                text = string.Format("{0}.{1}.{2}", this.Area, this.Controller, this.Action);

            }

            return text;
        }

        #region "private"
        /// <summary>
        /// Get parameters of action in JS.
        /// </summary>
        /// <param name="piArray"></param>
        /// <returns></returns>
        static internal List<string> GetJS_Params(ParameterInfo[] piArray)
        {
            List<string> jsParams = new List<string>();
            foreach (var pi in piArray)
            {
                string paramName = pi.Name;

                string jsValue;

                jsValue = GetJS_EmptyValue_WithFactory(pi.ParameterType, true);

                jsParams.Add(string.Format("\"{0}\":{1}", paramName, jsValue));
            }
            return jsParams;
        }

        internal static string GetJS_EmptyValue_WithFactory(Type t, bool nsAlias)
        {
            string jsValue = "null";
            if (!JSHelper.GetPrimitiveEmptyValue(t, out jsValue))
            {
                bool isCollection;

                //-- it's class so, we use functionReference.
                Type telem_work = TypeHelper.FindCustomTypeOrDefault(t, out isCollection);

                if (telem_work != null)
                {
                    if (isCollection)
                    {
                        //-- telem_work  is collection.
                        jsValue = JSHelper.GetObjectFactoryName(telem_work, isCollection, false, nsAlias);
                    }
                    else
                    {
                        if (AspMvcInfo.TypesOfAspNetSet.Type_ActionResult.IsAssignableFrom(telem_work) == false &&
                                AspMvcInfo.TypesOfAspNetSet.Type_HttpResponseMessage.IsAssignableFrom(telem_work) == false &&
                            AspMvcInfo.TypesOfAspNetSet.Type_IHttpActionResult.IsAssignableFrom(telem_work) == false)
                        {
                            if (telem_work.IsGenericType)
                            {
                                //-- get type of arg.
                                Type targ = telem_work.GetGenericArguments().FirstOrDefault();
                                if (targ != null)
                                {
                                    Type telem_of_targ;
                                    isCollection = TypeHelper.GetElementTypeOfCollection(targ, out telem_of_targ);
                                    if (isCollection)
                                    {
                                        jsValue = JSHelper.GetObjectFactoryName(telem_of_targ, isCollection, false, nsAlias);
                                    }
                                    else { jsValue = JSHelper.GetObjectFactoryName(targ, isCollection, false, nsAlias); }
                                }
                                else
                                { /* it's generic type. */
                                    jsValue = "{}";
                                }

                            }
                            else { jsValue = JSHelper.GetObjectFactoryName(telem_work, isCollection, false, nsAlias); }

                        }
                        else { jsValue = "{}"; }

                    }
                }
                else { jsValue = "{}"; }

            }

            return jsValue;
        }

        #endregion

    }
}
