using Diphap.JsNetBridge.Common.JS;
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
    internal class TypeSorter_JS : TypeSorter_Script
    {

        readonly ConfigJS.JSNamespace _JSNamespace;

        /// <summary>
        /// ex: 'Course:$dp.$JsNet.MvcApplicationExample.Models.Course'. 'Course' is name of property.
        /// </summary>
        /// <param name="mi"></param>
        /// <param name="telem_work"></param>
        /// <param name="isCollection"></param>
        /// <param name="objectFullName">For example: This '$dp.$JsNet.MvcApplicationExample.Models.Course' or '$dp.$JsNet.MvcApplicationExample.Models.Course()'</param>
        /// <returns></returns>
        private static string GetJsKeyValue_FactoryCall(MemberInfo mi, Type telem_work, bool isCollection, string objectFullName)
        {
            string value;
            if (telem_work == typeof(System.Object))
            {
                if (isCollection)
                {
                    value = "[]";
                }
                else
                {
                    value = "{}";
                }
            }
            else
            {
                value = JSCircularReferenceManagerFactoryHelper.FunctionDefinitionCall(telem_work, isCollection, objectFullName);
            }

            string key_value = string.Format("\"{0}\":{1}", mi.Name, value);

            return key_value;
        }

        /// <summary>
        /// Indicates if the type has members with complex or somple type.
        /// </summary>
        /// <param name="ts"></param>
        /// <param name="JSNamespace"></param>
        internal TypeSorter_JS(TypeSorter_ ts, ConfigJS.JSNamespace JSNamespace) : base(ts)
        {
            this._JSNamespace = JSNamespace;
        }

        /// <summary>
        /// ex: 'Course:$dp.$JsNet.MvcApplicationExample.Models.Course'. 'Course' is name of property.
        /// ex: "Courses_":$dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.ContosoUniversity.Models.Course))
        /// </summary>
        /// <param name="mi"></param>
        /// <param name="telem_work"></param>
        /// <param name="isCollection"></param>
        /// <returns></returns>
        override protected string GetScriptKeyValue_FactoryCall(MemberInfo mi, Type telem_work, bool isCollection)
        {
            string key_value = TypeSorter_JS.GetJsKeyValue_FactoryCall(mi, telem_work, isCollection, _JSNamespace.GetObjectFullName(telem_work, true));
            return key_value;
        }

        /// <summary>
        /// EnumScript
        /// </summary>
        protected override EnumScript _EnumScript
        {
            get
            {
                return EnumScript.JS;
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
            return string.Format("\"{0}\":{1}", mi.Name, valueTemp);
        }
    }
}
