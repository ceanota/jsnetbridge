using Diphap.JsNetBridge.Common;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;

[assembly: InternalsVisibleTo("Diphap.JsNetBridge.Mvc")]

namespace Diphap.JsNetBridge.Mvc.Proxy
{
    public class TypesOfAspNetSetBaseWebApi : TypesOfAspNetSet
    {
        protected internal override Type Type_ActionNameAttribute
        {
            get
            {
                return this.TWebHttp.Type_ActionNameAttribute;
            }
        }

        public readonly TypesOfAspNetSetBaseWebApi_NetHttp TNetHttp;

        public readonly TypesOfAspNetSetBaseWebApi_WebHttp TWebHttp;

        public TypesOfAspNetSetBaseWebApi(TypesOfAspNetSetBaseWebApi_NetHttp TNetHttp_, TypesOfAspNetSetBaseWebApi_WebHttp TWebHttp_)
        {
            TNetHttp = TNetHttp_;
            TWebHttp = TWebHttp_;
        }

        /// <summary>
        /// GetRouteTemplate
        /// </summary>
        /// <param name="MethodInfo"></param>
        /// <returns></returns>
        override protected internal string GetRouteTemplate(MethodInfo MethodInfo)
        {
            if (this.TWebHttp.Type_RouteAttribute != null)
            {
                object value = TypeHelper.GetAttributePropertyValue(MethodInfo, this.TWebHttp.Type_RouteAttribute, "Template");
                if (value != null)
                {
                    string name = value as string;
                    return name;
                }
                else { return ""; }
            }
            else { return ""; }
        }

    }

    abstract public class TypesOfAspNetSetBaseWebApi_NetHttp
    {
        #region "_Ass_NetHttp"
        protected readonly Assembly _Ass_NetHttp;
        protected internal Type Type_HttpResponseMessage;
        abstract protected string assName_NetHttp { get; }  //= "System.Net.Http";
        protected internal Type Type_HttpMethod;
        #endregion

        public TypesOfAspNetSetBaseWebApi_NetHttp(AssemblyResolver assemblyResolver)
        {
            #region "_Ass_NetHttp"

            this._Ass_NetHttp = ReflectionLoader.Load(assName_NetHttp, assemblyResolver);

            foreach (var t in this._Ass_NetHttp.ExportedTypes)
            {
                if (this.Type_HttpResponseMessage == null && t.FullName == assName_NetHttp + ".HttpResponseMessage")
                {
                    this.Type_HttpResponseMessage = t;
                }

                if (this.Type_HttpMethod == null && t.FullName == assName_NetHttp + ".HttpMethod")
                {
                    this.Type_HttpMethod = t;
                }

                if (this.Type_HttpResponseMessage != null && this.Type_HttpMethod != null)
                {
                    break;
                }

            }


            #endregion

        }

        #region "HttpMethod"

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

        internal string[] GetHttpMethod_FromAcceptVerbsAttribute(MethodInfo MethodInfo, TypesOfAspNetSetBaseWebApi_WebHttp TWebHttp)
        {
            object value = TypeHelper.GetAttributePropertyValue(MethodInfo, TWebHttp.Type_AcceptVerbsAttribute, "HttpMethods");

            if (value != null)
            {
                List<string> methods_str = new List<string>();

                IEnumerable httpMethodArray = value as IEnumerable;

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

    abstract public class TypesOfAspNetSetBaseWebApi_WebHttp
    {

        /// <summary>
        /// MVC and Web API
        /// </summary>
        internal Type Type_ActionNameAttribute;

        /// <summary>
        /// Warning, Since Web API 2
        /// [Optionnal]
        /// </summary>
        internal Type Type_RouteAttribute { get; }

        #region "_Ass_WebHttp"
        protected readonly Assembly _Ass_WebHttp;
        protected internal Type Type_ApiController;
        protected internal Type Type_AcceptVerbsAttribute;



        /// <summary>
        /// Warning, Since Web API 2
        /// [Optionnal]
        /// </summary>
        protected internal Type Type_IHttpActionResult;
        /// <summary>
        /// Warning, Since Web API 2
        /// [Optionnal]
        /// </summary>
        protected internal Type Type_RespsonseTypeAttribute;

        readonly protected internal Dictionary<string, Type> THttpAttributes;

        abstract protected string assName_WebHttp { get; }  //= "System.Web.Http";

        #endregion

        public TypesOfAspNetSetBaseWebApi_WebHttp(AssemblyResolver assemblyResolver)
        {
            #region "_Ass_WebHttp"

            THttpAttributes = new Dictionary<string, Type>(){
                {assName_WebHttp + ".HttpGetAttribute",null}, {assName_WebHttp +".HttpPostAttribute",null},
                {assName_WebHttp +".HttpPutAttribute",null}, {assName_WebHttp +".HttpDeleteAttribute",null},
                {assName_WebHttp +".HttpHeadAttribute",null} };


            this._Ass_WebHttp = ReflectionLoader.Load(assName_WebHttp, assemblyResolver);


            foreach (var t in this._Ass_WebHttp.ExportedTypes)
            {
                if (this.Type_ApiController == null && t.FullName == assName_WebHttp + ".ApiController")
                {
                    this.Type_ApiController = t;
                }

                if (this.Type_AcceptVerbsAttribute == null && t.FullName == assName_WebHttp + ".AcceptVerbsAttribute")
                {
                    this.Type_AcceptVerbsAttribute = t;
                }

                if (this.Type_IHttpActionResult == null && t.FullName == assName_WebHttp + ".IHttpActionResult")
                {
                    this.Type_IHttpActionResult = t;
                }

                if (this.Type_RespsonseTypeAttribute == null && t.FullName == assName_WebHttp + ".Description.ResponseTypeAttribute")
                {
                    this.Type_RespsonseTypeAttribute = t;
                }

                if (this.Type_ActionNameAttribute == null && t.FullName == assName_WebHttp + ".ActionNameAttribute")
                {
                    this.Type_ActionNameAttribute = t;
                }

                if (this.Type_RouteAttribute == null && t.FullName == assName_WebHttp + ".RouteAttribute")
                {
                    this.Type_RouteAttribute = t;
                }

                if (this.THttpAttributes.ContainsKey(t.FullName) && this.THttpAttributes[t.FullName] == null)
                {
                    this.THttpAttributes[t.FullName] = t;
                }

                if (this.Type_ApiController != null &&
                    this.Type_AcceptVerbsAttribute != null &&
                    this.Type_IHttpActionResult != null &&
                    this.Type_RespsonseTypeAttribute != null &&
                    this.Type_ActionNameAttribute != null &&
                    this.THttpAttributes.All(x => x.Value != null))
                {
                    break;
                }
            }

            #endregion



        }


    }

}
