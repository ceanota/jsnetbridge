using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace Diphap.JsNetBridge.Common.JS
{
    /// <summary>
    /// Indicates if the type has members with complex or somple type.
    /// </summary>
    internal class TypeSorter_TS : TypeSorter
    {

        readonly ConfigJS.JSNamespace _JSNamespace;

        /// <summary>
        /// Indicates if the type has members with complex or somple type.
        /// </summary>
        /// <param name="tobj"></param>
        /// <param name="JSNamespace"></param>
        internal TypeSorter_TS(Type tobj, ConfigJS.JSNamespace JSNamespace) : base(tobj)
        {
            this._JSNamespace = JSNamespace;
        }

        /// <summary>
        /// JS Value.
        /// </summary>
        override public string JSValue
        {
            get
            {
                string value = "null";
                if (ComplexMembers.Count == 0)
                {
                    value = "{" + string.Join(",", js_key_value_list) + "}";
                }

                return value;
            }
        }

        /// <summary>
        /// ex: 'Course:$dp.$JsNet.MvcApplicationExample.Models.Course'. 'Course' is name of property.
        /// </summary>
        /// <param name="mi"></param>
        /// <param name="telem_work"></param>
        /// <param name="isCollection"></param>
        /// <returns></returns>
        override protected string GetJsKeyValue_FactoryCall(MemberInfo mi, Type telem_work, bool isCollection)
        {
            var tname = _JSNamespace.GetObjectFullName(telem_work, true);
            if (isCollection)
            {
                tname = (new ScriptTypeInfo_TS()).TArrayFactoryFunctionDefinitionCall(tname);
            }
            return tname;
        }

        ScriptTypeInfo _GetScriptTypeInfo;
        /// <summary>
        /// Singleton.
        /// </summary>
        /// <returns></returns>
        public override ScriptTypeInfo GetScriptTypeInfo
        {
            get
            {
                if (this._GetScriptTypeInfo == null)
                {
                    this._GetScriptTypeInfo = new ScriptTypeInfo_TS();
                }
                return this._GetScriptTypeInfo;
            }
        }

        /// <summary>
        /// ex: 'propertyName : 78'
        /// </summary>
        /// <param name="mi"></param>
        /// <param name="valueTemp"></param>
        /// <returns></returns>
        override protected string get_js_key_value(MemberInfo mi, string valueTemp)
        {
            return string.Format("\"{0}\":{1}", mi.Name, valueTemp);
        }
    }
}
