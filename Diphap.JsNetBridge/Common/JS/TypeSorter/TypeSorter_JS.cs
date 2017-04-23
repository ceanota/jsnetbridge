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
    internal class TypeSorter_JS : TypeSorter
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
            return string.Format("\"{0}\":{1}", mi.Name, JSCircularReferenceManagerFactoryHelper.FunctionDefinitionCall(telem_work, isCollection, objectFullName));
        }

        /// <summary>
        /// Indicates if the type has members with complex or somple type.
        /// </summary>
        /// <param name="tobj"></param>
        /// <param name="JSNamespace"></param>
        internal TypeSorter_JS(Type tobj, ConfigJS.JSNamespace JSNamespace) : base(tobj)
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
            return TypeSorter_JS.GetJsKeyValue_FactoryCall(mi, telem_work, isCollection, _JSNamespace.GetObjectFullName(telem_work, true));
        }

        /// <summary>
        /// JS code of call of my factory who extends instances of array.
        /// </summary>
        /// <param name="jsvalue"></param>
        /// <returns></returns>
        override protected string FunctionDefinitionCall(string jsvalue)
        {
            return JSArrayFactory.FunctionDefinitionCall(jsvalue);
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
