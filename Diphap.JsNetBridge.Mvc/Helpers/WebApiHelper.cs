using System;
using System.Linq;
using System.Reflection;
using System.Text;

namespace Diphap.JsNetBridge.Mvc.Helpers
{
    class WebApiHelper
    {

        static public string GetHttpMethod_ToJS(MethodInfo MethodInfo)
        {
            string[] httpMethods = WebApiHelper.GetHttpMethod(MethodInfo);

            if (httpMethods.Length > 0)
            {
                StringBuilder sb_principal = new StringBuilder();
                sb_principal.Append("{");


                for (int idx = 0; idx < httpMethods.Length; idx++)
                {
                    if (idx > 0)
                    {
                        sb_principal.Append(",");
                    }
                    sb_principal.AppendFormat("{0}{1}:\"{1}\"", ConfigJS.brandLetter, httpMethods[idx]);
                }

                sb_principal.Append(",");

                sb_principal.AppendFormat(ConfigJS.brandLetter + "items:[{0}]", string.Join(",", httpMethods.Select(x => string.Format("\"{0}\"", x))));
                sb_principal.Append(",");
                if (httpMethods.Length == 1)
                {
                    sb_principal.AppendFormat(ConfigJS.brandLetter + "single:\"{0}\"", httpMethods[0]);
                }
                else
                {
                    sb_principal.AppendFormat(ConfigJS.brandLetter + "single:{0}", "null");
                }

                sb_principal.Append("}");

                return sb_principal.ToString();
            }
            else
            {
                return "";
            }

        }

        static public string[] GetHttpMethod(MethodInfo MethodInfo)
        {
            {
                string method = GetHttpMethod_FromHttpAttribute(MethodInfo);
                if (string.IsNullOrWhiteSpace(method) == false)
                {
                    return new string[] { method };
                }
            }


            {
                string[] methods = AspMvcInfo.TypesOfAspNetSetWebApi.GetHttpMethod_FromAcceptVerbsAttribute(MethodInfo);
                if (methods.Length > 0)
                {
                    return methods;
                }
            }

            {
                string method = GetHttpMethod_FromActionName(MethodInfo.Name);
                if (string.IsNullOrWhiteSpace(method) == false)
                {
                    return new string[] { method };
                }
            }

            return new string[0];
        }

        static public string GetAjaxDataType(MethodInfo MethodInfo)
        {
            bool isText = typeof(void) == MethodInfo.ReturnType ||
                AspMvcInfo.TypesOfAspNetSetWebApi.Type_HttpResponseMessage.IsAssignableFrom(MethodInfo.ReturnType);

            if (isText)
            {
                return "text";
            }
            else
            {
                return "json";
            }

        }

        static private string GetHttpMethod_FromHttpAttribute(MethodInfo MethodInfo)
        {

            foreach (var t in AspMvcInfo.TypesOfAspNetSetWebApi.THttpAttributes.Values)
            {
                var att = TypeHelper.GetCustomAttribute(MethodInfo, t);
                if (att != null)
                {
                    return t.Name.ToLower().Replace("http", null).Replace("attribute", null);
                }
            }

            return "";
        }

        private static string GetHttpMethod_FromActionName(string actionName)
        {
            if (string.IsNullOrWhiteSpace(actionName) == true)
            {
                throw new ArgumentException("actionName");
            }
            string[] verbs = new string[] { "get", "post", "delete", "put", "head" };

            foreach (var v in verbs)
            {
                if (actionName.ToLower().IndexOf(v) == 0)
                {
                    return v;
                }
            }

            return "";
        }
    }
}
