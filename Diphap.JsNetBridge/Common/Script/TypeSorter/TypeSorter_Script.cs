using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace Diphap.JsNetBridge.Common
{
    /// <summary>
    /// Indicates if the type has members with complex or simple type.
    /// </summary>
    abstract internal class TypeSorter_Script
    {

        protected abstract EnumScript _EnumScript { get; }

        /// <summary>
        /// Get instance.
        /// </summary>
        /// <param name="choice"></param>
        /// <param name="tobj"></param>
        /// <param name="JSNamespace"></param>
        /// <returns></returns>
        internal static TypeSorter_Script GetInstance(EnumScript choice, TypeSorter_ tobj, ConfigJS.JSNamespace JSNamespace)
        {
            switch (choice)
            {
                case EnumScript.JS:
                    return new TypeSorter_JS(tobj, JSNamespace);
                case EnumScript.TS:
                    return new TypeSorter_TS(tobj, JSNamespace);
                default:
                    throw new NotImplementedException();
            }

        }

        private readonly TypeSorter_ _ts;
        public static string prefix_namespace = ConfigJS.prefix_ns_jsnet;


        private string _ScriptValue;
        /// <summary>
        /// Script Value.
        /// </summary>
        public string ScriptValue(HashSet<Type> found_complex_types)
        {

            if (this._ScriptValue == null)
            {
                List<string> _script_key_value_list = this.Execute_to_script_key_value_list(found_complex_types);

                this._ScriptValue = "null";
                if (this._ts.IsResolved)
                {
                    this._ScriptValue = "{" + string.Join(",", _script_key_value_list) + "}";
                }
            }
            return this._ScriptValue;

        }

        protected TypeSorter_Script(TypeSorter_ ts)
        {
            this._ts = ts;
        }

        /// <summary>
        /// Executes.
        /// </summary>
        ///<param name="found_complex_types">optionnal</param>
        protected List<string> Execute_to_script_key_value_list(HashSet<Type> found_complex_types)
        {
            var key_value_list = new List<string>(this._ts.miArray.Length);

            foreach (MemberInfo mi in this._ts.miArray)
            {
                string value;

                Type tmem = TypeHelper.GetMemberType(mi);

                if (ScriptHelper.GetInstance(this._EnumScript).GetPrimitiveEmptyValue(tmem, out value))
                {
                    key_value_list.Add(this.get_script_key_value(mi, value));
                }
                else
                {
                    Type telem_work;
                    bool isCollection = TypeHelper.GetElementTypeOfCollection(tmem, out telem_work);

                    if (isCollection == false)
                    {
                        telem_work = tmem;
                    }

                    if (found_complex_types != null && found_complex_types.Contains(telem_work) == false)
                    {
                        telem_work = typeof(System.Object);
                    }

                    string key_value = this.GetScriptKeyValue_FactoryCall(mi, telem_work, isCollection);
                    key_value_list.Add(key_value);
                }
            }

            return key_value_list;
        }

        private readonly ConfigJS.JSNamespace _JSNamespace;

        /// <summary>
        /// ex: 'Course:$dp.$JsNet.MvcApplicationExample.Models.Course'. 'Course' is name of property.
        /// </summary>
        /// <param name="mi"></param>
        /// <param name="telem_work"></param>
        /// <param name="isCollection"></param>
        /// <returns></returns>
        abstract protected string GetScriptKeyValue_FactoryCall(MemberInfo mi, Type telem_work, bool isCollection);

        /// <summary>
        /// ex: 'propertyName : 78'
        /// </summary>
        /// <param name="mi"></param>
        /// <param name="valueTemp"></param>
        /// <returns></returns>
        abstract protected string get_script_key_value(MemberInfo mi, string valueTemp);
        
    }

}
