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

        static protected Assembly _LoadAssembly(string assName, AssemblyResolver assemblyResolver)
        {
            Assembly ass = ReflectionLoader.Load(ConfigDynamicAssembly.References[assName], assemblyResolver);
            return ass;
        }

        public TypesOfAspNetSet(AssemblyResolver assemblyResolver)
        {
        }

        #region "ActionName"
        /// <summary>
        /// Get Action Name.
        /// </summary>
        /// <param name="MethodInfo"></param>
        /// <returns></returns>
        internal string GetActionName(MethodInfo MethodInfo)
        {
            object value = TypeHelper.GetAttributePropertyValue(MethodInfo, this.Type_ActionNameAttribute, "Name");
            if (value != null)
            {
                string name = value as string;
                return name;
            }
            else { return MethodInfo.Name; }
        }
        #endregion

        #region "TemplateName"
        /// <summary>
        /// Get Action Name.
        /// </summary>
        /// <param name="MethodInfo"></param>
        /// <returns></returns>
        internal string GetRouteTemplate(MethodInfo MethodInfo)
        {
            if (this.Type_RouteAttribute != null)
            {
                object value = TypeHelper.GetAttributePropertyValue(MethodInfo, this.Type_RouteAttribute, "Template");
                if (value != null)
                {
                    string name = value as string;
                    return name;
                }
                else { return ""; }
            }
            else { return ""; }
        }
        #endregion
    }
}
