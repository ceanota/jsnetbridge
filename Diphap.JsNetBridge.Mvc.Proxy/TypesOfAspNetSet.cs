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
    public abstract class TypesOfAspNetSet
    {
        /// <summary>
        /// MVC and Web API
        /// </summary>
        internal Type Type_ActionNameAttribute;

        /// <summary>
        /// Warning, Since Web API 2
        /// [Optionnal]
        /// </summary>
        internal Type Type_RouteAttribute;

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
            AppDomain.CurrentDomain.AssemblyResolve += AssemblyResolver.GetHandler(binFolderPath);
        }

        #region "ActionName"
        PropertyInfo _PropInfo_ActionName;
        private PropertyInfo PropInfo_ActionName
        {
            get
            {
                if (_PropInfo_ActionName == null)
                {
                    if ((Type_ActionNameAttribute != null) == false) { throw new ArgumentNullException("Type_ActionNameAttribute"); }
                    _PropInfo_ActionName = this.Type_ActionNameAttribute.GetProperty("Name");
                    if ((_PropInfo_ActionName != null) == false) { throw new ArgumentNullException("_PropInfo_ActionName"); }
                }
                return _PropInfo_ActionName;
            }
        }

        /// <summary>
        /// Get Action Name.
        /// </summary>
        /// <param name="MethodInfo"></param>
        /// <returns></returns>
        internal string GetActionName(MethodInfo MethodInfo)
        {
            Attribute att = MethodInfo.GetCustomAttribute(this.Type_ActionNameAttribute, true);

            if (att != null)
            {
                string name = this.PropInfo_ActionName.GetValue(att) as string;
                return name;
            }
            else { return MethodInfo.Name; }
        }
        #endregion

        #region "TemplateName"
        PropertyInfo _PropInfo_RouteTemplate;
        /// <summary>
        /// Optionnal
        /// </summary>
        private PropertyInfo PropInfo_RouteTemplate
        {
            get
            {
                if (_PropInfo_RouteTemplate == null)
                {
                    if (Type_RouteAttribute != null)
                    {
                        _PropInfo_RouteTemplate = this.Type_RouteAttribute.GetProperty("Template");
                    }
                }
                return _PropInfo_RouteTemplate;
            }
        }

        /// <summary>
        /// Get Action Name.
        /// </summary>
        /// <param name="MethodInfo"></param>
        /// <returns></returns>
        internal string GetRouteTemplate(MethodInfo MethodInfo)
        {
            Attribute att;

            if (this.Type_RouteAttribute != null)
            {
                att = MethodInfo.GetCustomAttribute(this.Type_RouteAttribute, true);
                if (att != null)
                {
                    string name = this.PropInfo_RouteTemplate.GetValue(att) as string;
                    return name;
                }
                else { return ""; }
            }
            else { return ""; }
        }
        #endregion
    }
}
