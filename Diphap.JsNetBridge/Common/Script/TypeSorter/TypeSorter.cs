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

        /// <summary>
        /// Get instance.
        /// </summary>
        /// <param name="choice"></param>
        /// <param name="tobj"></param>
        /// <param name="JSNamespace"></param>
        /// <returns></returns>
        internal static TypeSorter GetInstance(EnumScript choice, Type tobj, ConfigJS.JSNamespace JSNamespace)
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

        public readonly Type TObj;
        public IList<Type> TypesToIgnore = new Type[] { };
        public readonly List<Type> TypesIgnored = new List<Type>();
        public List<MemberInfo> ComplexMembers = new List<MemberInfo>();
        public readonly MemberInfo[] miArray;
        protected List<string> js_key_value_list;
        public static string prefix_namespace = ConfigJS.prefix_ns_jsnet;

        public List<string> Js_key_value_list
        {
            get
            {
                return js_key_value_list.ToList();
            }
        }
        abstract public string JSValue { get; }

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
        public void Execute()
        {
            js_key_value_list = new List<string>(miArray.Length);

            foreach (MemberInfo mi in miArray)
            {
                string value;

                Type tmem = TypeHelper.GetMemberType(mi);

                if (ScriptHelper.GetInstance(this._EnumScript).GetPrimitiveEmptyValue(tmem, out value))
                {
                    js_key_value_list.Add(this.get_js_key_value(mi, value));
                }
                else
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
                            TypesIgnored.Add(tmem);

                            string js_key_value = this.GetJsKeyValue_FactoryCall(mi, telem_work, isCollection);
                            js_key_value_list.Add(js_key_value);
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
        /// <param name="jsvalue">force value</param>
        internal void ResolveComplexMember(MemberInfo mi, string jsvalue = null)
        {
            if (this.ComplexMembers.Contains(mi))
            {
                string js_key_value;
                if (jsvalue == null)
                {
                    Type tmem = TypeHelper.GetMemberType(mi);
                    Type telem_work;
                    bool isCollection = TypeHelper.GetElementTypeOfCollection(tmem, out telem_work);

                    if (isCollection == false)
                    {
                        telem_work = tmem;
                    }

                    js_key_value = this.GetJsKeyValue_FactoryCall(mi, telem_work, isCollection);
                }
                else
                {
                    string valueTemp = jsvalue;
                    if (TypeHelper.IsCollection(TypeHelper.GetMemberType(mi)))
                    {
                        valueTemp = this.GetScriptTypeInfo.TArrayFactoryFunctionDefinitionCall(jsvalue);
                    }
                    js_key_value = this.get_js_key_value(mi, valueTemp);
                }

                js_key_value_list.Add(js_key_value);
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
            string text = string.Format("{0},{1}", this.TObj, this.JSValue);
            return text;
        }
    }
}
