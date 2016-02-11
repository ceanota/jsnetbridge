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
                    sb_principal.AppendFormat("{0}{1}:\"{1}\"", Config.brandLetter, httpMethods[idx]);
                }

                sb_principal.Append(",");

                sb_principal.AppendFormat(Config.brandLetter + "items:[{0}]", string.Join(",", httpMethods.Select(x => string.Format("\"{0}\"", x))));
                sb_principal.Append(",");
                if (httpMethods.Length == 1)
                {
                    sb_principal.AppendFormat(Config.brandLetter + "single:\"{0}\"", httpMethods[0]);
                }
                else
                {
                    sb_principal.AppendFormat(Config.brandLetter + "single:{0}", "null");
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
                string[] methods = GetHttpMethod_FromAcceptVerbsAttribute(MethodInfo);
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
                AspMvcInfo.Type_HttpResponseMessage.IsAssignableFrom(MethodInfo.ReturnType);

            if (isText)
            {
                return "text";
            }
            else
            {
                return "json";
            }

        }

        static Type[] THttpAttributes = new Type[] { typeof(System.Web.Http.HttpGetAttribute), typeof(System.Web.Http.HttpPostAttribute), typeof(System.Web.Http.HttpPutAttribute), typeof(System.Web.Http.HttpDeleteAttribute), typeof(System.Web.Http.HttpHeadAttribute) };


        static private string GetHttpMethod_FromHttpAttribute(MethodInfo MethodInfo)
        {

            foreach (var t in THttpAttributes)
            {
                var att = MethodInfo.GetCustomAttribute(t);
                if (att != null)
                {
                    return t.Name.ToLower().Replace("http", null).Replace("attribute", null);
                }
            }

            return "";
        }

        static private string[] GetHttpMethod_FromAcceptVerbsAttribute(MethodInfo MethodInfo)
        {

            System.Web.Http.AcceptVerbsAttribute att = MethodInfo.GetCustomAttribute<System.Web.Http.AcceptVerbsAttribute>();

            if (att != null)
            {
                return att.HttpMethods.Select(x => x.Method).ToArray();
            }

            return new string[0];

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
