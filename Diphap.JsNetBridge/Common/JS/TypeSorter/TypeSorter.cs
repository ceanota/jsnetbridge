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
    internal class TypeSorter
    {
        public readonly Type TObj;
        public IList<Type> TypesToIgnore = new Type[] { };
        public readonly List<Type> TypesIgnored = new List<Type>();
        public List<MemberInfo> ComplexMembers = new List<MemberInfo>();
        public readonly MemberInfo[] miArray;
        List<string> js_key_value_list;
        public static string prefix_namespace = ConfigJS.prefix_ns_jsnet;

        public List<string> Js_key_value_list
        {
            get
            {
                return js_key_value_list.ToList();
            }
        }
        public string JSValue
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
        public bool IsSimpleType
        {
            get
            {
                return ComplexMembers.Count == 0;
            }

        }

        Type[] _TComplexMembers;
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

        public TypeSorter(Type tobj)
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

                if (JSHelper.GetPrimitiveEmptyValue(tmem, out value))
                {
                    js_key_value_list.Add(string.Format("\"{0}\":{1}", mi.Name, value));
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

                            string js_key_value =  GetJsKeyValue_FactoryCall(mi, telem_work, isCollection);
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
        /// <param name="functionReference">For example: This '$dp.$JsNet.MvcApplicationExample.Models.Course' or '$dp.$JsNet.MvcApplicationExample.Models.Course()'</param>
        /// <returns></returns>
        private static string GetJsKeyValue_FactoryCall(MemberInfo mi, Type telem_work, bool isCollection)
        {
            return string.Format("\"{0}\":{1}", mi.Name, JSCircularReferenceManagerFactoryHelper.FunctionDefinitionCall(telem_work, isCollection));
        }

        /// <summary>
        /// Force.
        /// </summary>
        /// <param name="mi"></param>
        /// <param name="jsvalue">force value</param>
        public void ResolveComplexMember(MemberInfo mi, string jsvalue = null)
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

                    js_key_value = GetJsKeyValue_FactoryCall(mi, telem_work, isCollection);
                }
                else 
                {
                    string valueTemp = jsvalue;
                    if (TypeHelper.IsCollection(TypeHelper.GetMemberType(mi)))
                    {
                        valueTemp = JSArrayFactory.FunctionDefinitionCall(jsvalue);
                    }
                    js_key_value = string.Format("\"{0}\":{1}", mi.Name, valueTemp);
                }




                js_key_value_list.Add(js_key_value);
                this.ComplexMembers.Remove(mi);
            }
        }

        public override string ToString()
        {
            string text = string.Format("{0},{1}", this.TObj, this.JSValue);
            return text;
        }
    }
}
