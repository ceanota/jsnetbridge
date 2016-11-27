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
    /// <summary>
    /// WebApi
    /// </summary>
    public class TypesOfAspNetSetBaseWebApi : TypesOfAspNetSet
    {
        /// <summary>
        /// Info about ActionNameAttribute.
        /// </summary>
        protected internal override Type Type_ActionNameAttribute
        {
            get
            {
                return this.TWebHttp.Type_ActionNameAttribute;
            }
        }

        /// <summary>
        /// System.Net.Http
        /// </summary>
        public readonly AssemblyInfoWrapperBaseWebApi_NetHttp TNetHttp;

        /// <summary>
        /// System.Web.Http or Microsoft.AspNetCore.Mvc
        /// </summary>
        public readonly AssemblyInfoWrapperBaseWebApi_WebHttp TWebHttp;

        /// <summary>
        /// WebApi
        /// </summary>
        /// <param name="TNetHttp_"></param>
        /// <param name="TWebHttp_"></param>
        public TypesOfAspNetSetBaseWebApi(AssemblyInfoWrapperBaseWebApi_NetHttp TNetHttp_, AssemblyInfoWrapperBaseWebApi_WebHttp TWebHttp_)
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

    /// <summary>
    /// System.Net.Http or Microsoft.AspNetCore.Mvc
    /// </summary>
    abstract public class AssemblyInfoWrapperBaseWebApi_NetHttp : AssemblyInfoWrapper
    {
        /// <summary>
        /// Type: System.Net.Http.HttpResponseMessage
        /// </summary>
        protected Type _Type_HttpResponseMessage;

        /// <summary>
        /// Type: System.Net.Http.HttpMethod
        /// </summary>
        protected Type Type_HttpMethod;

        /// <summary>
        /// Wrapper
        /// </summary>
        internal TypeInfoWrapper Type_HttpResponseMessage
        {
            get
            {
                return new TypeInfoWrapper(this._Type_HttpResponseMessage);
            }
        }

        /// <summary>
        /// System.Net.Http or Microsoft.AspNetCore.Mvc
        /// </summary>
        /// <param name="assemblyResolver"></param>
        public AssemblyInfoWrapperBaseWebApi_NetHttp(AssemblyResolver assemblyResolver)
        {
            #region "_Ass_NetHttp"

            this._Assembly = ReflectionLoader.Load(Name, assemblyResolver);

            foreach (var t in this._Assembly.ExportedTypes)
            {
                if (this._Type_HttpResponseMessage == null && t.FullName == this.Namespace + ".HttpResponseMessage")
                {
                    this._Type_HttpResponseMessage = t;
                }

                if (this.Type_HttpMethod == null && t.FullName == this.Namespace + ".HttpMethod")
                {
                    this.Type_HttpMethod = t;
                }

                if (this._Type_HttpResponseMessage != null && this.Type_HttpMethod != null)
                {
                    break;
                }
            }


            #endregion

        }

    }

    /// <summary>
    /// ex: System.Web.Http or Microsoft.AspNetCore.Mvc
    /// </summary>
    abstract public class AssemblyInfoWrapperBaseWebApi_WebHttp : AssemblyInfoWrapper
    {
        /// <summary>
        /// MVC and Web API
        /// </summary>
        internal Type Type_ActionNameAttribute;

        /// <summary>
        /// Warning, Since Web API 2
        /// [Optionnal]
        /// </summary>
        internal Type Type_RouteAttribute { get; private set; }

        protected internal Type Type_Controller;
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

        /// <summary>
        /// ex: ?.HttpGetAttribute
        /// </summary>
        protected internal Dictionary<string, Type> THttpAttributes;

        /// <summary>
        /// System.Web.Http.ApiController or Microsoft.AspNetCore.Mvc.Controlleur
        /// </summary>
        abstract protected string _NameOfClassOfController { get; }

        /// <summary>
        /// ex: System.Web.Http or Microsoft.AspNetCore.Mvc
        /// </summary>
        /// <param name="assemblyResolver"></param>
        public AssemblyInfoWrapperBaseWebApi_WebHttp(AssemblyResolver assemblyResolver)
        {
            this.InitializeCore(ReflectionLoader.Load(Name, assemblyResolver));
        }

        /// <summary>
        /// ex: System.Web.Http or Microsoft.AspNetCore.Mvc
        /// </summary>
        /// <param name="ass"></param>
        public AssemblyInfoWrapperBaseWebApi_WebHttp(Assembly ass)
        {
            this.InitializeCore(ass);
        }

        /// <summary>
        /// ex: System.Web.Http or Microsoft.AspNetCore.Mvc
        /// </summary>
        /// <param name="ass"></param>
        private void InitializeCore(Assembly ass)
        {

            this._Assembly = ass;

            THttpAttributes = new Dictionary<string, Type>(){
                {this.Namespace + ".HttpGetAttribute",null}, {this.Namespace +".HttpPostAttribute",null},
                {this.Namespace +".HttpPutAttribute",null}, {this.Namespace +".HttpDeleteAttribute",null},
                {this.Namespace +".HttpHeadAttribute",null} };

            foreach (var t in this._Assembly.ExportedTypes)
            {
                if (this.Type_Controller == null && t.FullName == this.Namespace + "." + this._NameOfClassOfController)
                {
                    this.Type_Controller = t;
                }

                if (this.Type_AcceptVerbsAttribute == null && t.FullName == this.Namespace + ".AcceptVerbsAttribute")
                {
                    this.Type_AcceptVerbsAttribute = t;
                }

                if (this.Type_IHttpActionResult == null && t.FullName == this.Namespace + ".IHttpActionResult")
                {
                    this.Type_IHttpActionResult = t;
                }

                if (this.Type_RespsonseTypeAttribute == null && t.FullName == this.Namespace + ".Description.ResponseTypeAttribute")
                {
                    this.Type_RespsonseTypeAttribute = t;
                }

                if (this.Type_ActionNameAttribute == null && t.FullName == this.Namespace + ".ActionNameAttribute")
                {
                    this.Type_ActionNameAttribute = t;
                }

                if (this.Type_RouteAttribute == null && t.FullName == this.Namespace + ".RouteAttribute")
                {
                    this.Type_RouteAttribute = t;
                }

                if (this.THttpAttributes.ContainsKey(t.FullName) && this.THttpAttributes[t.FullName] == null)
                {
                    this.THttpAttributes[t.FullName] = t;
                }

                if (this.Type_Controller != null &&
                    this.Type_AcceptVerbsAttribute != null &&
                    this.Type_IHttpActionResult != null &&
                    this.Type_RespsonseTypeAttribute != null &&
                    this.Type_ActionNameAttribute != null &&
                    this.THttpAttributes.All(x => x.Value != null))
                {
                    break;
                }
            }
        }

        /// <summary>
        /// ex: [AcceptVerbsAttribute("PUT", "TEST", "get")]
        /// </summary>
        /// <param name="MethodInfo">Controller</param>
        /// <returns></returns>
        abstract protected internal string[] GetHttpMethod_FromAcceptVerbsAttribute(MethodInfo MethodInfo);

    }

}
