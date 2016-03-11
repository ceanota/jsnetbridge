using System;
using System.Collections;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace Diphap.JsNetBridge.Mvc
{
    public class TypesOfAspNetSet
    {
        #region "_Ass_WebMvc"
        readonly Assembly _Ass_WebMvc;
        internal Type Type_JsonResult;
        internal Type Type_ActionResult;
        internal Type Type_ViewResult;
        #endregion

        #region "_Ass_NetHttp"
        readonly Assembly _Ass_NetHttp;
        internal Type Type_HttpResponseMessage;
        #endregion

        #region "_Ass_WebHttp"
        readonly Assembly _Ass_WebHttp;
        internal Type Type_ApiController;
        internal Type Type_AcceptVerbsAttribute;
        internal Type Type_HttpMethod;
        internal Dictionary<string, Type> THttpAttributes = new Dictionary<string, Type>(){ 
                {"System.Web.Http.HttpGetAttribute",null}, {"System.Web.Http.HttpPostAttribute",null}, 
                {"System.Web.Http.HttpPutAttribute",null}, {"System.Web.Http.HttpDeleteAttribute",null}, {"System.Web.Http.HttpHeadAttribute",null} };

        #endregion

        public static string AssemblyDirectory
        {
            get
            {
                string codeBase = Assembly.GetExecutingAssembly().CodeBase;
                UriBuilder uri = new UriBuilder(codeBase);
                string path = Uri.UnescapeDataString(uri.Path);
                return Path.GetDirectoryName(path);
            }
        }

        public TypesOfAspNetSet(string binFolderPath)
        {
            #region "_Ass_WebMvc"
            {
                string dllName = "System.Web.Mvc.dll";
                string dllPath = Path.Combine(binFolderPath, dllName);
                this._Ass_WebMvc = File.Exists(dllPath) ? Assembly.LoadFrom(dllPath) : Assembly.Load("System.Web.Mvc, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35");
            }

            foreach (var t in this._Ass_WebMvc.ExportedTypes)
            {
                if (this.Type_JsonResult == null && t.FullName == "System.Web.Mvc.JsonResult")
                {
                    this.Type_JsonResult = t;
                }

                if (this.Type_ActionResult == null && t.FullName == "System.Web.Mvc.ActionResult")
                {
                    this.Type_ActionResult = t;
                }

                if (this.Type_ViewResult == null && t.FullName == "System.Web.Mvc.ViewResult")
                {
                    this.Type_ViewResult = t;
                }

                if (this.Type_JsonResult != null && this.Type_ActionResult != null && this.Type_ViewResult != null) 
                { 
                    break; 
                }
            }

            #endregion

            #region "_Ass_NetHttp"
            {
                string dllName = "System.Net.Http.dll";
                string dllPath = Path.Combine(binFolderPath, dllName);
                this._Ass_NetHttp = File.Exists(dllPath) ? Assembly.LoadFrom(dllPath) : Assembly.Load("System.Net.Http, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a");
            }
            foreach (var t in this._Ass_NetHttp.ExportedTypes)
            {
                if (this.Type_HttpResponseMessage == null && t.FullName == "System.Net.Http.HttpResponseMessage")
                {
                    this.Type_HttpResponseMessage = t;
                }

                if (this.Type_HttpMethod == null && t.FullName == "System.Net.Http.HttpMethod")
                {
                    this.Type_HttpMethod = t;
                }

                if (this.Type_HttpResponseMessage != null && this.Type_HttpMethod != null)
                {
                    break;
                }

            }


            #endregion

            #region "_Ass_WebHttp"
            {
                string dllName = "System.Web.Http.dll";
                string dllPath = Path.Combine(binFolderPath, dllName);
                this._Ass_WebHttp = File.Exists(dllPath) ? Assembly.LoadFrom(dllPath) : Assembly.Load("System.Web.Http, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35");
            }

            foreach (var t in this._Ass_WebHttp.ExportedTypes)
            {
                if (this.Type_ApiController == null && t.FullName == "System.Web.Http.ApiController")
                {
                    this.Type_ApiController = t;
                }

                if (this.Type_AcceptVerbsAttribute == null && t.FullName == "System.Web.Http.AcceptVerbsAttribute")
                {
                    this.Type_AcceptVerbsAttribute = t;
                }

                if (this.THttpAttributes.ContainsKey(t.FullName) && this.THttpAttributes[t.FullName] == null)
                {
                    this.THttpAttributes[t.FullName] = t;
                }

                if (this.Type_ApiController != null && this.Type_AcceptVerbsAttribute != null && this.THttpAttributes.All(x => x.Value != null))
                {
                    break;
                }
            }

            #endregion

        }

        #region "AcceptVerbsAttribute"


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
