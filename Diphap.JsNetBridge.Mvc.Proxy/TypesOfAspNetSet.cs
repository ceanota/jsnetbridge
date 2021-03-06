﻿using Diphap.JsNetBridge.Common;
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
        abstract protected internal Type Type_ActionNameAttribute { get; }

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
        /// GetRouteTemplate
        /// </summary>
        /// <param name="MethodInfo"></param>
        /// <returns></returns>
        abstract protected internal string GetRouteTemplate(MethodInfo MethodInfo);
        #endregion
    }
}
