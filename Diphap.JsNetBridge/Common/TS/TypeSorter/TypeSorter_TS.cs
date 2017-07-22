using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace Diphap.JsNetBridge.Common
{
    /// <summary>
    /// Indicates if the type has members with complex or somple type.
    /// </summary>
    internal class TypeSorter_TS : TypeSorter_Script
    {

        readonly ConfigJS.JSNamespace _JSNamespace;

        /// <summary>
        /// Indicates if the type has members with complex or somple type.
        /// </summary>
        /// <param name="ts"></param>
        /// <param name="JSNamespace"></param>
        internal TypeSorter_TS(TypeSorter_ ts, ConfigJS.JSNamespace JSNamespace) : base(ts)
        {
            this._JSNamespace = JSNamespace;
        }

        /// <summary>
        /// ex: 'Course:$dp.$JsNet.MvcApplicationExample.Models.Course'. 'Course' is name of property.
        /// </summary>
        /// <param name="mi"></param>
        /// <param name="telem_work"></param>
        /// <param name="isCollection"></param>
        /// <returns></returns>
        override protected string GetScriptKeyValue_FactoryCall(MemberInfo mi, Type telem_work, bool isCollection)
        {
            string tname;
            if (telem_work == typeof(System.Object))
            {
                tname = "Object";
            }
            else
            {
                tname = _JSNamespace.GetObjectFullName(telem_work, false);
            }

            if (isCollection)
            {
                tname = (new ScriptTypeInfo_TS()).TArrayFactoryFunctionDefinitionCall(tname);
            }


            var key_value = string.Format("{0}:{1}", mi.Name, tname);

            return key_value;
        }

        /// <summary>
        /// EnumScript
        /// </summary>
        protected override EnumScript _EnumScript
        {
            get
            {
                return EnumScript.TS;
            }
        }

        /// <summary>
        /// ex: 'propertyName : 78'
        /// </summary>
        /// <param name="mi"></param>
        /// <param name="valueTemp"></param>
        /// <returns></returns>
        override protected string get_script_key_value(MemberInfo mi, string valueTemp)
        {
            return string.Format("{0}:{1}", mi.Name, valueTemp);
        }
    }
}
