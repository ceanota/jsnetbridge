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
    /// System.Net.Http.
    /// </summary>
    public class TypesOfAspNetSetCoreWebApi_NetHttp : TypesOfAspNetSetBaseWebApi_NetHttp
    {
        protected override string assName
        {
            get
            {
                return "System.Net.Http";
            }
        }

        protected override string _Namespace
        {
            get
            {
                return this.assName;
            }
        }

        public TypesOfAspNetSetCoreWebApi_NetHttp(AssemblyResolver assemblyResolver) : base(assemblyResolver)
        {

        }
    }

    /// <summary>
    /// Microsoft.AspNetCore.Mvc
    /// </summary>
    public class TypesOfAspNetSetCoreWebApi_WebHttp : TypesOfAspNetSetBaseWebApi_WebHttp
    {
        protected override string _NameOfClassOfController
        {
            get
            {
                return "Controller";
            }
        }

        /// <summary>
        /// Assembly Name
        /// </summary>
        protected override string assName
        {
            get
            {
                return "Microsoft.AspNetCore.Mvc.Core";
            }
        }

        /// <summary>
        /// Namespace.
        /// </summary>
        protected override string _Namespace
        {
            get
            {
                return "Microsoft.AspNetCore.Mvc";
            }
        }

        /// <summary>
        /// Microsoft.AspNetCore.Mvc
        /// </summary>
        /// <param name="assemblyResolver"></param>
        public TypesOfAspNetSetCoreWebApi_WebHttp(AssemblyResolver assemblyResolver) : base(assemblyResolver)
        {

        }

        /// <summary>
        /// ex: [AcceptVerbsAttribute("PUT", "TEST", "get")]
        /// </summary>
        /// <param name="MethodInfo"></param>
        /// <returns></returns>
        override protected internal string[] GetHttpMethod_FromAcceptVerbsAttribute(MethodInfo MethodInfo)
        {
            //
            // Summary:
            //     Gets the HTTP methods the action supports.
            //public IEnumerable<string> HttpMethods { get; }
            object value = TypeHelper.GetAttributePropertyValue(MethodInfo, this.Type_AcceptVerbsAttribute, "HttpMethods");

            if (value != null)
            {

                List<string> methods_str = new List<string>();

                //ex: IEnumerable of instances of System.Net.Http.HttpMethod
                IEnumerable httpMethodArray = value as IEnumerable;

                if ((httpMethodArray != null) == false) { throw new ArgumentNullException("httpMethodArray"); }

                //ex: IEnumerable of instances of String
                foreach (var m in httpMethodArray)
                {
                    //-- m is instance of String;
                    if (m != null)
                    {
                        methods_str.Add(m.ToString());
                    }
                }
                return methods_str.ToArray();
            }
            else { return new string[0]; }
        }

    }

}
