using Diphap.JsNetBridge.Common;
using Diphap.JsNetBridge.Common.JS;
using Diphap.JsNetBridge.Data;
using Diphap.JsNetBridge.Mvc.Helpers;
using Diphap.JsNetBridge.Mvc.Proxy;
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
    public class ActionInfo
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
        /// Route template
        /// </summary>
        public string RouteTemplate { get; private set; }

        /// <summary>
        /// MethodInfoGroup on action.
        /// </summary>
        public MethodInfo MethodInfo { get; private set; }

        /// <summary>
        /// Url.
        /// </summary>
        public string Url { get; set; }

        /// <summary>
        /// index of signatures.
        /// </summary>
        internal int? Idx { get; set; }

        private readonly Type _type_controller;

        readonly bool _IsApiController = false;
        public bool IsApiController { get { return this._IsApiController; } }
        public bool IsJsonResult { get; private set; }
        public bool IsHttpResponseMessage { get; private set; }
        public bool IsActionResult { get; private set; }
        public bool IsViewResult { get; private set; }
        public bool IsIEnumerable { get; private set; }

        private readonly ConfigJS.JSNamespace _JSNamespace;

        private TypesOfAspNetSet _TypesOfAspNetSet
        {
            get
            {
                if (this._IsApiController)
                {
                    return AspMvcInfo.TypesOfAspNetSetWebApi;
                }
                else
                {
                    return AspMvcInfo.TypesOfAspNetSetMvc;
                }

            }
        }

        /// <summary>
        /// Intanciate an instance of informations on action method.
        /// </summary>
        /// <param name="type_controller"></param>
        /// <param name="areaName"></param>
        /// <param name="methodInfo">differents signatures of one method</param>
        /// <param name="JSNamespace"></param>
        public ActionInfo(Type type_controller, string areaName, MethodInfo methodInfo, ConfigJS.JSNamespace JSNamespace)
        {
            _JSNamespace = JSNamespace;

            this._type_controller = type_controller;
            this.Controller = this._type_controller.Name.Replace("Controller", "");
            this.Area = areaName;
            this.Url = "";
            this.MethodInfo = methodInfo;

            this._IsApiController = AspMvcInfo.TypesOfAspNetSetWebApi.Type_ApiController.IsAssignableFrom(this._type_controller);

            this.IsJsonResult = AspMvcInfo.TypesOfAspNetSetMvc.Type_JsonResult.IsAssignableFrom(this.MethodInfo.ReturnType);
            this.IsHttpResponseMessage = AspMvcInfo.TypesOfAspNetSetWebApi.Type_HttpResponseMessage.IsAssignableFrom(this.MethodInfo.ReturnType);
            this.IsActionResult = AspMvcInfo.TypesOfAspNetSetMvc.Type_ActionResult.IsAssignableFrom(this.MethodInfo.ReturnType);
            this.IsViewResult = AspMvcInfo.TypesOfAspNetSetMvc.Type_ViewResult.IsAssignableFrom(this.MethodInfo.ReturnType);
            this.IsIEnumerable = TypeHelper.IsCollection(this.MethodInfo.ReturnType);

            this.Action = this._TypesOfAspNetSet.GetActionName(methodInfo);
            this.RouteTemplate = this._TypesOfAspNetSet.GetRouteTemplate(methodInfo);
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

        IList<Type> _ParameterEnumTypes;

        /// <summary>
        /// Parameter Enum Types
        /// </summary>
        /// <returns></returns>
        public IList<Type> ParameterEnumTypes()
        {
            if (this._ParameterEnumTypes == null)
            {
                this._ParameterEnumTypes = this.EnumParameters().Select(p => TypeHelper.GetUnderlyingTypeOrDefault(p.ParameterType)).Distinct().ToArray();
            }
            return this._ParameterEnumTypes;
        }

        IList<ParameterInfo> _EnumParameters;

        /// <summary>
        /// Enum ParameterInfo 
        /// </summary>
        /// <returns></returns>
        public IList<ParameterInfo> EnumParameters()
        {
            if (this._EnumParameters == null)
            {
                this._EnumParameters = this.MethodInfo.GetParameters()
                    .Where(p => TypeHelper.IsEnum(p.ParameterType)).ToArray();
            }
            return this._EnumParameters;
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
                IList<Type> returnTypes = TypeHelper.GetCustomTypes(new Type[] { WebApiHelper.GetEffectiveReturnType(this.MethodInfo) });

                if (returnTypes.Count > 0)
                {
                    this._AllInOutClassTypes.Add(returnTypes[0]);
                }

                this._AllInOutClassTypes = this._AllInOutClassTypes.Distinct().ToArray();
            }

            return this._AllInOutClassTypes;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public string ToJS_Enums()
        {
            ParameterInfo[] piArray = this.MethodInfo.GetParameters();

            List<string> jsonParams = GetJS_Enums(this.EnumParameters(), _JSNamespace);

            string jsonParams_string = "null";

            if (jsonParams.Count > 0)
            {
                jsonParams_string = "{" + string.Join(",", jsonParams) + "}";
            }

            return jsonParams_string;

        }

        /// <summary>
        /// Serialise parameters of action.
        /// {param1:obj1, param2:2, param3:"" }
        /// </summary>
        /// <returns></returns>
        public string ToJS_Params()
        {
            ParameterInfo[] piArray = this.MethodInfo.GetParameters();

            List<string> jsonParams = GetJS_Params(piArray, _JSNamespace);

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
            Type type_return = WebApiHelper.GetEffectiveReturnType(this.MethodInfo);
            string jsonValue = GetJS_EmptyValue_WithFactory(type_return, true, _JSNamespace);
            return jsonValue;
        }

        /// <summary>
        /// Value.
        /// [{Url:null, Params:null, Return:null, IsApiController:true, AjaxSettings:{}}]
        /// </summary>
        public string JsValue
        {
            get
            {
                string json = GetJsValue();

                return json;
            }
        }

        /// <summary>
        /// Value.
        /// [{Url:null, Params:null, Return:null, IsApiController:true, AjaxSettings:{}}]
        /// </summary>
        /// 
        /// <returns></returns>
        public string GetJsValue()
        {
            StringBuilder sb = new StringBuilder();
            {
                string objName = "action";
                sb.AppendFormat("var {0} = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();", objName);
                sb.Append(ConfigJS.VS_JsEnumKeyValue_instruction(objName));

                //-- names.
                sb.AppendFormat("{0}.{1}Names.action = '{2}'; {0}.{1}Names.controller = '{3}'; {0}.{1}Names.area  = '{4}';",
                    objName, ConfigJS.brandLetter, this.Action, this.Controller, string.IsNullOrWhiteSpace(this.Area) ? "" : this.Area);

                //-- IN/OUT parameters.
                sb.AppendFormat(objName + "." + ConfigJS.brandLetter + "Params = {0};", JSHelper.GetFactory(this.ToJS_Params(), false));
                sb.AppendFormat(objName + "." + ConfigJS.brandLetter + "Return = {0};", JSHelper.GetFactory(this.ToJS_Return(), false));
                sb.AppendFormat(objName + "." + ConfigJS.brandLetter + "Enums = {0};", JSHelper.GetFactory(this.ToJS_Enums(), false));

                string prop_httpMethodArray = objName + "." + ConfigJS.brandLetter + "httpMethodArray";
                //-- httpMethod
                if (this.IsApiController)
                {
                    string httpMethod_jsObj = WebApiHelper.GetHttpMethod_ToJS(this.MethodInfo);
                    if (string.IsNullOrWhiteSpace(httpMethod_jsObj) == false)
                    {
                        sb.AppendFormat(prop_httpMethodArray + " = {0};", httpMethod_jsObj);
                    }

                    sb.Append(objName + "." + ConfigJS.brandLetter + "IsApi = true;");
                }

                //-- AJAX Options.
                {
                    string sb_ajax_options;
                    string getUrl = objName + "." + ConfigJS.brandLetter + "GetUrl()";
                    if (this.IsApiController)
                    {
                        sb_ajax_options = GetAjaxOptions_ForWebApi(getUrl, objName + "." + ConfigJS.brandLetter + "Params()", prop_httpMethodArray + "." + ConfigJS.brandLetter + "first").ToString();
                    }
                    else
                    {
                        sb_ajax_options = GetAjaxOptions_ForMvc(getUrl, objName + "." + ConfigJS.brandLetter + "Params()").ToString();
                    }

                    sb.AppendFormat(objName + "." + ConfigJS.brandLetter + "AjaxSettings = {0};", JSHelper.GetFactory(sb_ajax_options, false));
                }

                //-- Route Template
                sb.AppendFormat(objName + "." + ConfigJS.brandLetter + "RouteTemplate = '{0}';", this.RouteTemplate);

                //-- Return.
                sb.Append("return action;");
            }

            string json = JSHelper.GetFunction(sb.ToString(), true, "actionFactory");
            return json;
        }

        /// <summary>
        /// Get ajax options for js.
        /// </summary>
        /// <param name="getUrl"></param>
        /// <param name="dataFactory"></param>
        /// <param name="method"></param>
        /// <returns></returns>
        private StringBuilder GetAjaxOptions_ForWebApi(string getUrl, string dataFactory, string method)
        {
            StringBuilder sb_ajax_options = new StringBuilder();
            sb_ajax_options.Append("{");
            sb_ajax_options.AppendFormat("url:{0}", getUrl);
            sb_ajax_options.Append(",");
            sb_ajax_options.AppendFormat("dataType:\"{0}\"", WebApiHelper.GetAjaxDataType(this.MethodInfo));
            sb_ajax_options.Append(",");
            sb_ajax_options.AppendFormat("contentType:\"{0}\"", "application/json");
            sb_ajax_options.Append(",");
            sb_ajax_options.AppendFormat("cache:{0}", "false");
            sb_ajax_options.Append(",");
            sb_ajax_options.AppendFormat("method:{0}", method);
            sb_ajax_options.Append(",");
            sb_ajax_options.AppendFormat("data:{0}", dataFactory);

            sb_ajax_options.Append("}");
            return sb_ajax_options;
        }

        /// <summary>
        /// Get ajax options for js.
        /// </summary>
        /// <param name="getUrl"></param>
        /// <param name="dataFactory"></param>
        /// <returns></returns>
        private StringBuilder GetAjaxOptions_ForMvc(string getUrl, string dataFactory)
        {
            StringBuilder sb_ajax_options = new StringBuilder();
            sb_ajax_options.Append("{");
            sb_ajax_options.AppendFormat("url:{0}", getUrl);
            sb_ajax_options.Append(",");
            sb_ajax_options.AppendFormat("dataType:\"{0}\"", "json");
            sb_ajax_options.Append(",");
            sb_ajax_options.AppendFormat("contentType:\"{0}\"", "application/json");
            sb_ajax_options.Append(",");
            sb_ajax_options.AppendFormat("cache:{0}", "false");
            sb_ajax_options.Append(",");
            sb_ajax_options.AppendFormat("method:'{0}'", "POST");
            sb_ajax_options.Append(",");
            sb_ajax_options.AppendFormat("data:{0}", dataFactory);

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
                string json = string.Format("{0}.{1}.{2}action{3}", this.Controller, this.MethodInfo.Name, ConfigJS.brandLetter, this.Idx.Value);

                if (this._IsApiController)
                {
                    json = ConfigJS.prefix_apiController + json;
                }

                if (string.IsNullOrWhiteSpace(this.Area) == false)
                {
                    json = this.Area + "." + json;
                }

                return json;
            }
        }

        /// <summary>
        /// ex: 'AreaName.ControllerName.MethodName.action0.$_Url="url_value"'
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
            string json = this.JsLongName + "." + ConfigJS.brandLetter + "_Url = " + url;
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
        static internal List<string> GetJS_Params(ParameterInfo[] piArray, ConfigJS.JSNamespace _JSNamespace)
        {
            List<string> jsParams = new List<string>();
            foreach (var pi in piArray)
            {
                string paramName = pi.Name;

                string jsValue;

                jsValue = GetJS_EmptyValue_WithFactory(pi.ParameterType, true, _JSNamespace);

                jsParams.Add(string.Format("\"{0}\":{1}", paramName, jsValue));
            }
            return jsParams;
        }

        internal static string GetJS_EmptyValue_WithFactory(Type t, bool nsAlias, ConfigJS.JSNamespace _JSNamespace)
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
                        jsValue = JSHelper.GetObjectFactoryName(telem_work, isCollection, false, _JSNamespace.GetObjectFullName(telem_work, nsAlias));
                    }
                    else
                    {
                        if ((AspMvcInfo.TypesOfAspNetSetMvc.Type_ActionResult.IsAssignableFrom(telem_work) == false &&
                                AspMvcInfo.TypesOfAspNetSetWebApi.Type_HttpResponseMessage.IsAssignableFrom(telem_work) == false &&
                            (AspMvcInfo.TypesOfAspNetSetWebApi.Type_IHttpActionResult == null ||
                            AspMvcInfo.TypesOfAspNetSetWebApi.Type_IHttpActionResult != null &&
                            AspMvcInfo.TypesOfAspNetSetWebApi.Type_IHttpActionResult.IsAssignableFrom(telem_work) == false)))
                        {
                            jsValue = JSHelper.GetObjectFactoryName(telem_work, isCollection, false, _JSNamespace.GetObjectFullName(telem_work, nsAlias));
                        }
                        else { jsValue = "{}"; }

                    }
                }
                else { jsValue = "{}"; }

            }

            return jsValue;
        }

        static internal List<string> GetJS_Enums(IList<ParameterInfo> piArray, ConfigJS.JSNamespace _JSNamespace)
        {
            List<string> jsParams = new List<string>();
            foreach (var pi in piArray)
            {
                string paramName = pi.Name;

                string jsValue;

                jsValue = GetJS_EmptyValue_WithFactory_forEnum(TypeHelper.GetUnderlyingTypeOrDefault(pi.ParameterType), true, _JSNamespace);

                jsParams.Add(string.Format("\"{0}\":{1}", paramName, jsValue));
            }
            return jsParams;
        }

        internal static string GetJS_EmptyValue_WithFactory_forEnum(Type t, bool nsAlias, ConfigJS.JSNamespace _JSNamespace)
        {
            if (t.IsEnum == false) { throw new Exception("t must be Enum"); }

            string jsValue;
            Type telem_work;
            bool isCollection = TypeHelper.GetElementTypeOfCollection(t, out telem_work);

            if (isCollection == false)
            {
                telem_work = t;
            }

            //-- telem_work  is collection.
            jsValue = JSHelper.GetObjectFactoryName(telem_work, isCollection, true, _JSNamespace.GetObjectFullName(telem_work, nsAlias));

            return jsValue;
        }

        #endregion

    }
}
