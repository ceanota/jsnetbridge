using Diphap.JsNetBridge.Common.JS;
using Diphap.JsNetBridge.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace Diphap.JsNetBridge
{
    /// <summary>
    /// Serialize type.
    /// </summary>
    public class SerializeType
    {
        public class GlobalRecursiveContext
        {
            readonly public Dictionary<Type, int> Occurences = new Dictionary<Type, int>();
            readonly int _IdxMax;
            readonly Type TObj;
            public int Idx { get; private set; }

            public GlobalRecursiveContext(int idx_max, Type tobj)
            {
                this.TObj = tobj;
                this._IdxMax = idx_max;
            }

            public void Add(Type tmemb)
            {
                this.Idx++;
                if (Occurences.ContainsKey(tmemb) == false)
                {
                    Occurences.Add(tmemb, 0);
                }
                else
                {
                    Occurences[tmemb]++;
                }
            }

            public bool TestOverFlow(Type tmem)
            {
                return this.Occurences.ContainsKey(tmem) && this.Occurences[tmem] >= this._IdxMax;
            }

            public override string ToString()
            {
                string text = string.Format("{0}, {1}", this.Idx, this.TObj);
                return text;
            }
        }

        /// <summary>
        /// Types who containe only primitive type.
        /// </summary>
        public Dictionary<Type, TypeSorter> SimpleTypes = new Dictionary<Type, TypeSorter>();


        public List<Type> TypesToIgnore = new List<Type>();

        public int idx_max = 1;
        private Diphap.JsNetBridge.SerializeType.GlobalRecursiveContext Context_global;

        /// <summary>
        /// Serialalize type.
        /// </summary>
        /// <param name="tobj"></param>
        /// <param name="exclude"></param>
        /// <param name="noReturn"></param>
        /// <returns></returns>
        public string Execute(Type tobj, bool noReturn, string exclude = "System.")
        {
            Context_global = new GlobalRecursiveContext(idx_max, tobj);

            string result = this.Execute(tobj, this.idx_max, noReturn, exclude);

            return result;
        }

        public bool? HasRecursive
        {
            get
            {
                bool? value;

                if (this.Context_global != null)
                {
                    if (this.Context_global.Occurences.Count == 0)
                    {
                        value = false;
                    }
                    else
                    {
                        if (this.Context_global.Occurences.All(x => x.Value == 0))
                        {
                            value = false;
                        }
                        else
                        {
                            value = true;
                        }
                    }
                }
                else 
                {
                    value = null;
                }

                return value;

            }
        }

        /// <summary>
        /// Serialalize type.
        /// </summary>
        /// <param name="tobj">type of object</param>
        /// <param name="_idx_max"></param>
        /// <param name="noReturn"></param>
        /// <param name="exclude"></param>
        /// <returns></returns>
        internal string Execute(Type tobj, int _idx_max, bool noReturn, string exclude = "System.")
        {
            TypeSorter tSorter = new TypeSorter(tobj);
            tSorter.TypesToIgnore = TypesToIgnore;
            tSorter.Execute();

            List<string> js_key_value_list = tSorter.Js_key_value_list;

            IList<MemberInfo> complexMembersTemp = tSorter.ComplexMembers.ToArray();

            foreach (MemberInfo mi in complexMembersTemp)
            {
                string value = "{}";

                Type tmem = TypeHelper.GetMemberType(mi);

                Type telem_work;
                bool isCollection = TypeHelper.GetElementTypeOfCollection(tmem, out telem_work);

                if (isCollection == false)
                {
                    telem_work = tmem;
                }
                else
                {
                    value = "[]";
                }

                if (typeof(System.Object) == telem_work)
                {
                    value = "{}";
                    tSorter.ResolveComplexMember(mi, value);
                }
                else
                {
                    if (string.IsNullOrWhiteSpace(exclude) || (string.IsNullOrWhiteSpace(exclude) == false && telem_work.FullName != null && telem_work.FullName.Contains(exclude) == false))
                    {
                        if (this.Context_global.TestOverFlow(telem_work) == false)
                        {
                            Context_global.Add(telem_work);
                            value = Execute(telem_work, _idx_max, noReturn, exclude);

                        }
                        else
                        {
                            //-- it's recursive member.
                            tSorter.ResolveComplexMember(mi/*, value*/);
                        }

                        if (string.IsNullOrWhiteSpace(value))
                        {
                            value = "{}";
                        }

                        if (isCollection)
                        {
                            value = JSArrayFactory.FunctionDefinitionCall(value);
                        }
                    }
                    else
                    {
                        value = "{}";
                        tSorter.ResolveComplexMember(mi, value);
                    }
                }

                js_key_value_list.Add(string.Format("\"{0}\":{1}", mi.Name, value));
            }

            string jsonValue;

            if (noReturn == true)
            {
                jsonValue = "";
            }
            else
            {
                jsonValue = "{" + string.Join(",", js_key_value_list) + "}";
            }


            if (tSorter.IsSimpleType && (SimpleTypes.ContainsKey(tobj) == false))
            {
                SimpleTypes.Add(tobj, tSorter);
            }

            return jsonValue;
        }

        
    }
}
