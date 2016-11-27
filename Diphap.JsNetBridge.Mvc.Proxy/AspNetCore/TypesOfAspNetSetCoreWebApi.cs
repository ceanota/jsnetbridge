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
    public class AssemblyInfoWrapperCoreWebApi_NetHttp : AssemblyInfoWrapperBaseWebApi_NetHttp
    {
        /// <summary>
        /// Name of assembly.
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
                return this.Name;
            }
        }

        /// <summary>
        /// System.Net.Http.
        /// </summary>
        /// <param name="assemblyResolver"></param>
        public AssemblyInfoWrapperCoreWebApi_NetHttp(AssemblyResolver assemblyResolver)
            : base(assemblyResolver)
        {

        }

        /// <summary>
        /// System.Net.Http is useless.
        /// </summary>
        public AssemblyInfoWrapperCoreWebApi_NetHttp()
            : base()
        {
            //-- nothing.
        }

    }

    /// <summary>
    /// Microsoft.AspNetCore.Mvc
    /// </summary>
    public class AssemblyInfoWrapperCoreWebApi_WebHttp : AssemblyInfoWrapperBaseWebApi_WebHttp
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
        internal protected override string Name
        {
            get
            {
                return _assWrapper.Name;
            }
        }

        /// <summary>
        /// Namespace.
        /// </summary>
        internal protected override string Namespace
        {
            get
            {
                return _assWrapper.Namespace;
            }
        }

        readonly AssemblyInfoWrapper _assWrapper;

        /// <summary>
        /// Microsoft.AspNetCore.Mvc
        /// </summary>
        /// <param name="assWrapper"></param>
        public AssemblyInfoWrapperCoreWebApi_WebHttp(AssemblyInfoWrapper assWrapper)
            : base(assWrapper._Assembly)
        {
            _assWrapper = assWrapper;
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
