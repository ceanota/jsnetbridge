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
        /// System.Net.Http.
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

        /// <summary>
        ///  System.Net.Http.
        /// </summary>
        public AssemblyInfoWrapperBaseWebApi_NetHttp()
        {
            //-- nothing.
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

        protected Type Type_Controller;
        protected internal Type Type_AcceptVerbsAttribute;

        /// <summary>
        /// IsApiConstroller
        /// </summary>
        /// <param name="tcontroller"></param>
        /// <returns></returns>
        abstract protected internal bool IsApiConstroller(Type tcontroller);


        protected Type _Type_IHttpActionResult { get; }

        /// <summary>
        /// Warning, Since Web API 2
        /// [Optionnal]
        /// </summary>
        abstract protected internal Type Type_IHttpActionResult { get; }

        /// <summary>
        /// Warning, Since Web API 2
        /// [Optionnal]
        /// </summary>
        protected Type Type_RespsonseTypeAttribute;

        /// <summary>
        /// ex: ?.HttpGetAttribute
        /// </summary>
        protected internal Dictionary<string, Type> THttpAttributes;

        /// <summary>
        /// System.Web.Http.ApiController or Microsoft.AspNetCore.Mvc.Controlleur
        /// </summary>
        abstract protected string _NameOfClassOfController { get; }

        /// <summary>
        /// System.Web.Http.IHttActionResult or Microsoft.AspNetCore.Mvc.IActionResult
        /// </summary>
        abstract protected string _NameOfClassIActionResult { get; }

        /// <summary>
        /// System.Web.Http.RespsonseTypeAttribute or Microsoft.AspNetCore.Mvc.Produces
        /// </summary>
        abstract protected string _NameOfClassResponseTypeAttribute { get; }

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
        /// <param name="assembly"></param>
        public AssemblyInfoWrapperBaseWebApi_WebHttp(Assembly assembly)
        {
            this.InitializeCore(assembly);
        }

        /// <summary>
        /// ex: System.Web.Http or Microsoft.AspNetCore.Mvc
        /// </summary>
        public AssemblyInfoWrapperBaseWebApi_WebHttp()
        {
            //-- nothing.
        }

        /// <summary>
        /// ex: System.Web.Http or Microsoft.AspNetCore.Mvc
        /// </summary>
        /// <param name="ass"></param>
        protected void InitializeCore(Assembly ass)
        {

            this._Assembly = ass;

            this.THttpAttributes = new Dictionary<string, Type>(){
                {this.Namespace + ".HttpGetAttribute",null}, {this.Namespace +".HttpPostAttribute",null},
                {this.Namespace +".HttpPutAttribute",null}, {this.Namespace +".HttpDeleteAttribute",null},
                {this.Namespace +".HttpHeadAttribute",null} };


            {
                string name = (this.Namespace + "." + this._NameOfClassOfController);
                this.Type_Controller = this._Assembly.GetType(name, false);
            }

            {
                string name = (this.Namespace + ".AcceptVerbsAttribute");
                this.Type_AcceptVerbsAttribute = this._Assembly.GetType(name, false);
            }

            {
                string name = (this.Namespace + ".ActionNameAttribute");
                this.Type_ActionNameAttribute = this._Assembly.GetType(name, false);
            }

            {
                string name = (this.Namespace + ".RouteAttribute");
                this.Type_RouteAttribute = this._Assembly.GetType(name, false);
            }

            {
                string name = (this.Namespace + "." + this._NameOfClassResponseTypeAttribute);
                this.Type_RespsonseTypeAttribute = this._Assembly.GetType(name, false);
            }

            var keys = this.THttpAttributes.Keys.ToArray();
            foreach (var name in keys)
            {
                this.THttpAttributes[name] = this._Assembly.GetType(name, false);
            }

        }

        /// <summary>
        /// ex: [AcceptVerbsAttribute("PUT", "TEST", "get")]
        /// </summary>
        /// <param name="MethodInfo">Controller</param>
        /// <returns></returns>
        abstract protected internal string[] GetHttpMethod_FromAcceptVerbsAttribute(MethodInfo MethodInfo);

        /// <summary>
        /// Get type of response of controller.
        /// </summary>
        /// <returns></returns>
        abstract internal Type Get_RespsonseTypeAttribute_ResponseTypeOrDefault(MethodInfo mi);

    }

    /// <summary>
    /// //Microsoft.AspNetCore.Mvc.Abstractions.dll
    /// </summary>
    public class AssemblyInfoWrapperBaseWebApi_Abstractions : AssemblyInfoWrapper
    {
        /// <summary>
        /// Warning, Since Web API 2
        /// [Optionnal]
        /// </summary>
        protected internal Type Type_IHttpActionResult;

        protected internal override string Name
        {
            get
            {
                return "Microsoft.AspNetCore.Mvc.Abstractions";
            }
        }

        protected internal override string Namespace
        {
            get
            {
                return "Microsoft.AspNetCore.Mvc";
            }
        }

        /// <summary>
        /// //Microsoft.AspNetCore.Mvc.Abstractions.dll
        /// </summary>
        /// <param name="assemblyResolver"></param>
        public AssemblyInfoWrapperBaseWebApi_Abstractions(AssemblyResolver assemblyResolver)
        {

            this._Assembly = ReflectionLoader.Load(Name, assemblyResolver);

            {
                string name = (this.Namespace + "." + "IActionResult");
                this.Type_IHttpActionResult = this._Assembly.GetType(name, false);
            }

        }

    }


}
