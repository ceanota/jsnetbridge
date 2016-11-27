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
    public class TypesOfAspNetSetWebApi_NetHttp : TypesOfAspNetSetBaseWebApi_NetHttp
    {
        /// <summary>
        /// Name of assembly
        /// </summary>
        protected override string assName
        {
            get
            {
                return "System.Net.Http";
            }
        }

        /// <summary>
        /// Namespace.
        /// </summary>
        protected override string _Namespace
        {
            get
            {
                return this.assName;
            }
        }

        /// <summary>
        /// System.Web.Http.
        /// </summary>
        /// <param name="assemblyResolver"></param>
        public TypesOfAspNetSetWebApi_NetHttp(AssemblyResolver assemblyResolver) : base(assemblyResolver)
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
    public class TypesOfAspNetSetWebApi_WebHttp : TypesOfAspNetSetBaseWebApi_WebHttp
    {
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

        /// <summary>
        /// Name of assembly
        /// </summary>
        protected override string assName
        {
            get
            {
                return "System.Web.Http";
            }
        }

        /// <summary>
        /// Namespace.
        /// </summary>
        protected override string _Namespace
        {
            get
            {
                return this.assName;
            }
        }

        /// <summary>
        /// System.Net.Http.
        /// </summary>
        private readonly TypesOfAspNetSetWebApi_NetHttp _TNetHttp;

        /// <summary>
        /// System.Web.Http references System.Net.Http
        /// </summary>
        /// <param name="assemblyResolver"></param>
        /// <param name="TNetHttp_">System.Net.Http</param>
        public TypesOfAspNetSetWebApi_WebHttp(AssemblyResolver assemblyResolver, TypesOfAspNetSetWebApi_NetHttp TNetHttp_) : base(assemblyResolver)
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
