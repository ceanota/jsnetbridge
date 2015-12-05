using Diphap.JsNetBridge.Common.JS;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Dynamic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Reflection;
using System.Runtime.Serialization;
using System.Runtime.Serialization.Json;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Mvc;

namespace Diphap.JsNetBridge
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
        /// MethodInfo on action.
        /// </summary>
        public MethodInfo MethodInfo { get; set; }

        /// <summary>
        /// Url.
        /// </summary>
        public string Url { get; set; }

        private readonly Type _type_controller;

        public readonly bool IsApiController = false;
        public readonly bool IsJsonResult = false;
        public readonly bool IsHttpResponseMessage = false;
        public readonly bool IsActionResult = false;
        public readonly bool IsViewResult = false;
        public readonly bool IsIEnumerable = false;

        /// <summary>
        /// Intanciate an instance of informations on action method.
        /// </summary>
        /// <param name="action"></param>
        /// <param name="controller"></param>
        /// <param name="area"></param>
        /// <param name="methodInfo"></param>
        public ActionInfo(string action, Type type_controller, string areaName, MethodInfo methodInfo)
        {
            this.Action = action;
            this._type_controller = type_controller;
            this.Controller = this._type_controller.Name.Replace("Controller", "");
            this.Area = areaName;
            this.Url = "";
            this.MethodInfo = methodInfo;

            this.IsApiController = AspMvcInfo.Type_ApiController.IsAssignableFrom(this._type_controller);

            this.IsJsonResult = AspMvcInfo.Type_JsonResult.IsAssignableFrom(this.MethodInfo.ReturnType);
            this.IsHttpResponseMessage = AspMvcInfo.Type_HttpResponseMessage.IsAssignableFrom(this.MethodInfo.ReturnType);
            this.IsActionResult = AspMvcInfo.Type_ActionResult.IsAssignableFrom(this.MethodInfo.ReturnType);
            this.IsViewResult = AspMvcInfo.Type_ViewResult.IsAssignableFrom(this.MethodInfo.ReturnType);
            this.IsIEnumerable = TypeHelper.IsCollection(this.MethodInfo.ReturnType);
        }

        /// <summary>
        /// Types of class.
        /// </summary>
        /// <returns></returns>
        public Type[] ParameterClassType()
        {
            Type[] types = this.MethodInfo.GetParameters().Where(p => p.ParameterType.IsClass).Select(p => p.ParameterType).ToArray();
            return types;
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
            string jsonValue = GetJS_EmptyValue(type_return);
            return jsonValue;
        }

        static public readonly bool GetInfo = false;

        /// <summary>
        /// Value.
        /// [{url:null, param:null, return:null }]
        /// </summary>
        public string JsValue
        {
            get
            {
                string jsObj_info = "{}";

                if (GetInfo)
                {
                    jsObj_info = string.Format("{{ IsApiController:{0},IsActionResult:{1},IsHttpResponseMessage:{2},IsJsonResult:{3},IsViewResult:{4},IsIEnumerable:{5} }}", this.IsApiController.ToString().ToLower(), this.IsActionResult.ToString().ToLower(), this.IsHttpResponseMessage.ToString().ToLower(), this.IsJsonResult.ToString().ToLower(), this.IsViewResult.ToString().ToLower(), this.IsIEnumerable.ToString().ToLower());
                }

                string json = string.Format("{{" + Config.VS_JsEnumKeyValue + "Url:{0}, Params:{1}, Return:{2}, Info:{3} }}",
                    "null", JSHelper.GetFactory(this.ToJS_Params()), JSHelper.GetFactory(this.ToJS_Return()), jsObj_info);
                return json;
            }
        }

        /// <summary>
        /// Key and value.
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
                string url = string.IsNullOrWhiteSpace(this.Url) ? "null" : "\"" + this.Url + "\"";
                string json = this.JsLongName + ".Url=" + url;
                return json;
            }
        }

        /// <summary>
        /// Get parameters of action in JS.
        /// </summary>
        /// <param name="piArray"></param>
        /// <returns></returns>
        private List<string> GetJS_Params(ParameterInfo[] piArray)
        {
            List<string> jsParams = new List<string>();
            foreach (var pi in piArray)
            {
                string paramName = pi.Name;

                string jsValue;

                jsValue = GetJS_EmptyValue_WithFactory(pi.ParameterType);

                if (jsValue.Contains("test"))
                {

                }


                jsParams.Add(string.Format("\"{0}\":{1}", paramName, jsValue));
            }
            return jsParams;
        }

        /// <summary>
        /// Get empty value of type in js.
        /// </summary> 
        /// <param name="t"></param>
        /// <returns></returns>
        private static string GetJS_EmptyValue_WithFactory(Type t)
        {
            string jsValue = "null";
            if (!JSHelper.GetPrimitiveEmptyValue(t, out jsValue))
            {
                //-- it's class so, we use factory.

                Type telem_work;

                if (TypeHelper.GetElementTypeOfCollection(t, out telem_work))
                {
                    //-- Type is collection, so telem_work is used.
                    jsValue = string.Format("{0}.{1}()", Config.prefix_ns, telem_work.FullName.Replace("+", "."));//for nested type.
                    jsValue = JSArrayFactory.FunctionDefinitionCall(jsValue);
                }
                else
                {
                    jsValue = string.Format("{0}.{1}()", Config.prefix_ns, t.FullName.Replace("+", "."));//for nested type.
                }
            }

            return jsValue;
        }

        /// <summary>
        /// Get empty value of type in js.
        /// </summary> 
        /// <param name="t"></param>
        /// <returns></returns>
        private static string GetJS_EmptyValue(Type t)
        {
            string jsonValue = "null";
            if (!JSHelper.GetPrimitiveEmptyValue(t, out jsonValue))
            {
                jsonValue = "null";

                if (TypeHelper.IsCollection(t))
                {
                    jsonValue = "[]";

                    Type telem;
                    if (TypeHelper.GetElementTypeOfCollection(t, out telem))
                    {
                        if (!JSHelper.GetPrimitiveEmptyValue(telem, out jsonValue))
                        {
                            jsonValue = SerializeNet.TrySerialize(telem);
                        }

                        if (string.IsNullOrWhiteSpace(jsonValue))
                        {
                            jsonValue = "[]";
                        }
                        else
                        {
                            jsonValue = JSArrayFactory.FunctionDefinitionCall(jsonValue);
                        }
                    }
                }
                else
                {
                    if (t.IsInterface)
                    {
                        jsonValue = "{}";
                    }

                    if (t.IsClass)
                    {
                        jsonValue = "{}";

                        if (AspMvcInfo.Type_ActionResult.IsAssignableFrom(t) == false &&
                            AspMvcInfo.Type_HttpResponseMessage.IsAssignableFrom(t) == false)
                        {
                            jsonValue = SerializeNet.TrySerialize(t);
                        }
                    }
                }
            }

            return jsonValue;
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
    }
}
