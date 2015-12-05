using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace Diphap.JsNetBridge.Common.JS
{
    public class TypeSorter
    {
        public readonly Type TObj;
        public IList<Type> TypesToIgnore = new Type[] { };
        public readonly List<Type> TypesIgnored = new List<Type>();
        public List<MemberInfo> ComplexMembers = new List<MemberInfo>();
        public readonly MemberInfo[] miArray;
        List<string> js_key_value_list;
        public static string prefix_namespace = Config.prefix_ns;

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

                            string js_key_value;
                            if (isCollection)
                            {
                                string jsvalue = string.Format("{0}.{1}()", prefix_namespace, telem_work.FullName.Replace("+", "."));
                                jsvalue = JSArrayFactory.FunctionDefinitionCall(jsvalue);
                                js_key_value = string.Format("\"{0}\":{1}", mi.Name, jsvalue);
                            }
                            else
                            {
                                js_key_value = string.Format("\"{0}\":{1}.{2}()", mi.Name, prefix_namespace, telem_work.FullName.Replace("+", "."));
                            }

                            js_key_value_list.Add(js_key_value);


                        }
                    }
                }
            }
        }

        /// <summary>
        /// Force.
        /// </summary>
        /// <param name="mi"></param>
        /// <param name="value"></param>
        public void ResolveComplexMember(MemberInfo mi, string value)
        {
            if (this.ComplexMembers.Contains(mi))
            {
                js_key_value_list.Add(string.Format("\"{0}\":{1}", mi.Name, value));
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
