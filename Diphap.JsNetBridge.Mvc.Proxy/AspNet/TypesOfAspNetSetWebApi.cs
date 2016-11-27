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
    /// System.Web.Http.
    /// </summary>
    public class AssemblyInfoWrapperWebApi_NetHttp : AssemblyInfoWrapperBaseWebApi_NetHttp
    {
        /// <summary>
        /// Name of assembly
        /// </summary>
        internal protected override string Name
        {
            get
            {
                return "System.Net.Http";
            }
        }

        /// <summary>
        /// Namespace.
        /// </summary>
        internal protected override string Namespace
        {
            get
            {
                return "System.Net.Http";
            }
        }

        /// <summary>
        /// System.Web.Http.
        /// </summary>
        /// <param name="assemblyResolver"></param>
        public AssemblyInfoWrapperWebApi_NetHttp(AssemblyResolver assemblyResolver) : base(assemblyResolver)
        {

        }

        #region "HttpMethod"

        PropertyInfo _PropInfo_HttpMethod;
        /// <summary>
        /// Get getter info about 'System.Net.Http.HttpMethod.Method'.
        /// => public string Method { get; }
        /// </summary>
        internal PropertyInfo PropInfo_HttpMethod
        {
            get
            {
                if (_PropInfo_HttpMethod == null)
                {
                    if ((this.Type_HttpMethod != null) == false) { throw new ArgumentNullException("Type_HttpMethod"); }
                    _PropInfo_HttpMethod = this.Type_HttpMethod.GetProperty("Method");
                    if ((_PropInfo_HttpMethod != null) == false) { throw new ArgumentNullException("_PropInfo_HttpMethod"); }
                }
                return _PropInfo_HttpMethod;
            }
        }
        #endregion

    }

    /// <summary>
    /// System.Web.Http references System.Net.Http
    /// </summary>
    public class AssemblyInfoWrapperWebApi_WebHttp : AssemblyInfoWrapperBaseWebApi_WebHttp
    {
        Type _Type_IHttpActionResult;
        protected internal override Type Type_IHttpActionResult
        {
            get
            {
                if (this._Type_IHttpActionResult == null)
                {
                    this._Type_IHttpActionResult = _Assembly.GetType(this.Namespace + "." + this._NameOfClassIActionResult, false);
                }

                return this._Type_IHttpActionResult;
            }
        }

        /// <summary>
        /// IsApiConstroller
        /// </summary>
        /// <param name="tcontroller"></param>
        /// <returns></returns>
        override protected internal bool IsApiConstroller(Type tcontroller)
        {
            if (this.Type_Controller == null)
            {
                throw new Exception("Issue of Initilization for 'AspMvcInfo.TypesOfAspNetSetWebApi.TWebHttp'");
            }

            return this.Type_Controller.IsAssignableFrom(tcontroller);
        }

        /// <summary>
        /// Get type of response of controller.
        /// </summary>
        /// <returns></returns>
        override internal Type Get_RespsonseTypeAttribute_ResponseTypeOrDefault(MethodInfo mi)
        {
            Type value = null;

            if (this.Type_RespsonseTypeAttribute != null)
            {
                value = TypeHelper.GetAttributePropertyValue(mi, this.Type_RespsonseTypeAttribute, "ResponseType") as Type;
            }

            return value;
        }

        /// <summary>
        /// Name of class of System.Net.Http.ApiController.
        /// </summary>
        protected override string _NameOfClassOfController
        {
            get
            {
                return "ApiController";
            }
        }

        protected override string _NameOfClassIActionResult
        {
            get
            {
                return "IHttpActionResult";
            }
        }

        protected override string _NameOfClassResponseTypeAttribute
        {
            get
            {
                return "Description.ResponseTypeAttribute";
            }
        }

        /// <summary>
        /// Name of assembly
        /// </summary>
        internal protected override string Name
        {
            get
            {
                return "System.Web.Http";
            }
        }

        /// <summary>
        /// Namespace.
        /// </summary>
        internal protected override string Namespace
        {
            get
            {
                return "System.Web.Http";
            }
        }

        /// <summary>
        /// System.Net.Http.
        /// </summary>
        private readonly AssemblyInfoWrapperWebApi_NetHttp _TNetHttp;

        /// <summary>
        /// System.Web.Http references System.Net.Http
        /// </summary>
        /// <param name="assemblyResolver"></param>
        /// <param name="TNetHttp_">System.Net.Http</param>
        public AssemblyInfoWrapperWebApi_WebHttp(AssemblyResolver assemblyResolver, AssemblyInfoWrapperWebApi_NetHttp TNetHttp_) : base(assemblyResolver)
        {
            this._TNetHttp = TNetHttp_;
        }

        /// <summary>
        /// System.Web.Http references System.Net.Http
        /// </summary>
        /// <param name="ass"></param>
        /// <param name="TNetHttp_">System.Net.Http</param>
        public AssemblyInfoWrapperWebApi_WebHttp(Assembly ass, AssemblyInfoWrapperWebApi_NetHttp TNetHttp_) : base(ass)
        {
            this._TNetHttp = TNetHttp_;
        }

        /// <summary>
        /// ex: [System.Web.Http.AcceptVerbsAttribute("PUT", "TEST", "get")]
        /// System.Web.Http references System.Net.Http.
        /// </summary>
        /// <param name="MethodInfo"></param>
        /// <returns></returns>
        override protected internal string[] GetHttpMethod_FromAcceptVerbsAttribute(MethodInfo MethodInfo)
        {
            //Gets or sets the list of HTTP methods that the action method will respond to.
            // => public Collection<System.Net.Http.HttpMethod> HttpMethods { get; }
            object value = TypeHelper.GetAttributePropertyValue(MethodInfo, this.Type_AcceptVerbsAttribute, "HttpMethods");

            if (value != null)
            {

                List<string> methods_str = new List<string>();

                //ex: IEnumerable of instances of System.Net.Http.HttpMethod
                IEnumerable httpMethodArray = value as IEnumerable;

                if ((httpMethodArray != null) == false) { throw new ArgumentNullException("httpMethodArray"); }

                //ex: IEnumerable of instances of System.Net.Http.HttpMethod
                foreach (var m in httpMethodArray)
                {
                    //-- m is instance of System.Net.Http.HttpMethod: m.Method;
                    //-- System.Net.Http.HttpMethod.Method
                    //-- public string Method { get; }
                    methods_str.Add(this._TNetHttp.PropInfo_HttpMethod.GetValue(m) as string);
                }

                return methods_str.ToArray();
            }
            else { return new string[0]; }
        }


    }

}
