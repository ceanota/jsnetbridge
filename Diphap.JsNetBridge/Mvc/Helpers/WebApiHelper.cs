using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace Diphap.JsNetBridge.Mvc.Helpers
{
    class WebApiHelper
    {
        static public string GetHttpMethod(MethodInfo MethodInfo)
        {
            {
                string method = GetHttpMethod_FromHttpAttribute(MethodInfo);
                if (string.IsNullOrWhiteSpace(method) == false)
                {
                    return method;
                }
            }


            {
                string[] methods = GetHttpMethod_FromAcceptVerbsAttribute(MethodInfo);
                if (methods.Length > 0)
                {
                    return methods[0];
                }
            }

            {
                string method = GetHttpMethod_FromActionName(MethodInfo.Name);
                if (string.IsNullOrWhiteSpace(method) == false)
                {
                    return method;
                }
            }

            return "";


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
