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
    abstract internal class TypeSorter
    {

        protected abstract EnumScript _EnumScript { get; }

        public readonly Type TObj;
        public IList<Type> TypesToIgnore = new Type[] { };
        private readonly List<Type> TypesIgnored = new List<Type>();
        public List<MemberInfo> ComplexMembers = new List<MemberInfo>();
        public readonly MemberInfo[] miArray;
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
                if (ComplexMembers.Count == 0)
                {
                    this._ScriptValue = "{" + string.Join(",", _script_key_value_list) + "}";
                }
            }
            return this._ScriptValue;

        }

        public bool IsSimpleType
        {
            get
            {
                return ComplexMembers.Count == 0;
            }

        }

        private Type[] _TComplexMembers;

        /// <summary>
        /// Get element type of collection if 't' is collection other else return 't'. 
        /// </summary>
        public Type[] TComplexMembers
        {
            get
            {
                if (_TComplexMembers == null)
                {
                    _TComplexMembers = this.ComplexMembers.Select(mi => TypeHelper.GetElementTypeOfCollectionOrDefault(TypeHelper.GetMemberType(mi))).ToArray();
                }
                return _TComplexMembers;
            }

        }

        private readonly ConfigJS.JSNamespace _JSNamespace;

        protected TypeSorter(Type tobj)
        {
            this.TObj = tobj;

            //-- all fields and properties of object.
            this.miArray = this.TObj.GetMembers(BindingFlags.Public | BindingFlags.Instance)
                .Where(mi => (mi.MemberType == MemberTypes.Field || mi.MemberType == MemberTypes.Property)).ToArray();

        }

        /// <summary>
        /// Executes.
        /// </summary>
        ///<param name="found_complex_types">optionnal</param>
        public List<string> Execute_to_script_key_value_list(HashSet<Type> found_complex_types)
        {
            var key_value_list = new List<string>(miArray.Length);

            foreach (MemberInfo mi in miArray)
            {
                string value;

                Type tmem = TypeHelper.GetMemberType(mi);

                if (ScriptHelper.GetInstance(this._EnumScript).GetPrimitiveEmptyValue(tmem, out value))
                {
                    key_value_list.Add(this.get_js_key_value(mi, value));
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

                    string key_value = this.GetJsKeyValue_FactoryCall(mi, telem_work, isCollection);
                    key_value_list.Add(key_value);
                }
            }

            return key_value_list;
        }

        /// <summary>
        /// Executes.
        /// </summary>
        public void DetermineIfMemberInfoAreComplexMembers()
        {
            foreach (MemberInfo mi in miArray)
            {
                Type tmem = TypeHelper.GetMemberType(mi);

                if (ScriptHelper.IsPrimitiveOrPureCollection(tmem) == ScriptHelper.EnumType.tcomplex)
                {
                    if (this.TypesToIgnore.Count == 0)
                    {
                        ComplexMembers.Add(mi);
                    }
                    else
                    {
                        Type telem_work;
                        bool isCollection = TypeHelper.GetElementTypeOfCollection(tmem, out telem_work);

                        if (isCollection == false)
                        {
                            telem_work = tmem;
                        }

                        if (!this.TypesToIgnore.Contains(telem_work))
                        {
                            ComplexMembers.Add(mi);
                        }
                        else
                        {
                            this.TypesIgnored.Add(tmem);
                        }
                    }
                }
            }
        }

        /// <summary>
        /// ex: 'Course:$dp.$JsNet.MvcApplicationExample.Models.Course'. 'Course' is name of property.
        /// </summary>
        /// <param name="mi"></param>
        /// <param name="telem_work"></param>
        /// <param name="isCollection"></param>
        /// <returns></returns>
        abstract protected string GetJsKeyValue_FactoryCall(MemberInfo mi, Type telem_work, bool isCollection);

        /// <summary>
        /// ex: 'propertyName : 78'
        /// </summary>
        /// <param name="mi"></param>
        /// <param name="valueTemp"></param>
        /// <returns></returns>
        abstract protected string get_js_key_value(MemberInfo mi, string valueTemp);

        /// <summary>
        /// Primitive Type of member or Collection of primitive types .
        /// </summary>
        /// <returns></returns>
        public abstract ScriptTypeInfo GetScriptTypeInfo { get; }

        /// <summary>
        /// Force.
        /// </summary>
        /// <param name="mi"></param>
        internal void ResolveComplexMember(MemberInfo mi)
        {
            if (this.ComplexMembers.Contains(mi))
            {
                this.ComplexMembers.Remove(mi);
            }
        }

        /// <summary>
        /// ex: $dp.$JsNet.ContosoUniversity.Models
        /// </summary>
        /// <returns></returns>
        public string GetScriptNamespace_Full()
        {
            return ConfigJS.JSNamespace.GetNamespace(this.TObj);
        }

        public override string ToString()
        {
            string text = string.Format("{0}", this.TObj);
            return text;
        }
    }

}
