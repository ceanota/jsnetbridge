using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace Diphap.JsNetBridge.Mvc
{
    public class TypesOfAspNetSet
    {
        public Type Type_JsonResult = typeof(System.Web.Mvc.JsonResult);
        public Type Type_ActionResult = typeof(System.Web.Mvc.ActionResult);
        public Type Type_ViewResult = typeof(System.Web.Mvc.ViewResult);

        public Type Type_HttpResponseMessage = typeof(System.Net.Http.HttpResponseMessage);

        public Type Type_ApiController = typeof(System.Web.Http.ApiController);

        public Type[] THttpAttributes = new Type[] { typeof(System.Web.Http.HttpGetAttribute), typeof(System.Web.Http.HttpPostAttribute), typeof(System.Web.Http.HttpPutAttribute), typeof(System.Web.Http.HttpDeleteAttribute), typeof(System.Web.Http.HttpHeadAttribute) };

        #region "AcceptVerbsAttribute"
        public Type Type_AcceptVerbsAttribute = typeof(System.Web.Http.AcceptVerbsAttribute);

        PropertyInfo _PropInfo_HttpMethodArray;
        private PropertyInfo PropInfo_HttpMethodArray
        {
            get
            {
                if (_PropInfo_HttpMethodArray == null)
                {
                    if ((Type_AcceptVerbsAttribute != null) == false) { throw new ArgumentNullException("Type_AcceptVerbsAttribute"); }
                    _PropInfo_HttpMethodArray = Type_AcceptVerbsAttribute.GetProperty("HttpMethods");
                    if ((_PropInfo_HttpMethodArray != null) == false) { throw new ArgumentNullException("_PropInfo_HttpMethodArray"); }
                }
                return _PropInfo_HttpMethodArray;
            }
        }
        #endregion

        #region "HttpMethod"
        public Type Type_HttpMethod = typeof(System.Net.Http.HttpMethod);
        PropertyInfo _PropInfo_HttpMethod;
        private PropertyInfo PropInfo_HttpMethod
        {
            get
            {
                if (_PropInfo_HttpMethod == null)
                {
                    if ((Type_HttpMethod != null) == false) { throw new ArgumentNullException("Type_HttpMethod"); }
                    _PropInfo_HttpMethod = Type_HttpMethod.GetProperty("Method");
                    if ((_PropInfo_HttpMethod != null) == false) { throw new ArgumentNullException("_PropInfo_HttpMethod"); }
                }
                return _PropInfo_HttpMethod;
            }
        }
        #endregion

        internal string[] GetHttpMethod_FromAcceptVerbsAttribute(MethodInfo MethodInfo)
        {
            Attribute att = MethodInfo.GetCustomAttribute(Type_AcceptVerbsAttribute);

            if (att != null)
            {
                List<string> methods_str = new List<string>();

                IEnumerable httpMethodArray = this.PropInfo_HttpMethodArray.GetValue(att) as IEnumerable;

                if ((httpMethodArray != null) == false) { throw new ArgumentNullException("httpMethodArray"); }

                foreach (var m in httpMethodArray)
                {
                    methods_str.Add(this.PropInfo_HttpMethod.GetValue(m) as string);
                }

                return methods_str.ToArray();
            }
            else { return new string[0]; }
        }

    }
}
