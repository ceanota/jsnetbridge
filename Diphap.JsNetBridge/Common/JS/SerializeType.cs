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
        /// <summary>
        /// Previous Context.
        /// </summary>
        public class PrevisousRecursiveContext
        {
            public Type Tobj;
            public List<string> js_key_value_list;
            public MemberInfo MemberInfo;
            public string GetJsonValue()
            {
                string value = "";

                if (js_key_value_list != null && js_key_value_list.Count > 0)
                {
                    List<string> kvListTemp_ = js_key_value_list.ToList();
                    string temp_ = string.Format("\"{0}\":{1}", MemberInfo.Name, "{}");
                    kvListTemp_.Add(temp_);
                    value = "{" + string.Join(",", kvListTemp_) + "}";
                }
                return value;

            }

            /// <summary>
            /// type of member is it similar with this.Tobj.
            /// </summary>
            /// <param name="tmem"></param>
            /// <returns></returns>
            public bool IsSimilarWithTObj(Type tmem)
            {
                Type telem_work;
                bool isCollection = TypeHelper.GetElementTypeOfCollection(tmem, out telem_work);

                if (isCollection == false)
                {
                    telem_work = tmem;
                }

                return telem_work == this.Tobj;
            }

        }

        /// <summary>
        /// Types who containe only primitive type.
        /// </summary>
        public Dictionary<Type, TypeSorter> SimpleTypes = new Dictionary<Type, TypeSorter>();


        public List<Type> TypesToIgnore = new List<Type>();

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
                return this.Occurences.ContainsKey(tmem) && this.Occurences[tmem] > this._IdxMax;
            }

            public override string ToString()
            {
                string text = string.Format("{0}, {1}", this.Idx, this.TObj);
                return text;
            }
        }

        private List<Type> TMembersOfCurrentParent = new List<Type>();
        public int idx_max = 0;
        private Diphap.JsNetBridge.SerializeType.GlobalRecursiveContext Context_global;

        /// <summary>
        /// Serialalize type.
        /// </summary>
        /// <param name="tobj"></param>
        /// <param name="exclude"></param>
        /// <returns></returns>
        public string Execute(Type tobj, string exclude = "System.")
        {
            int _idx = 0;
            TMembersOfCurrentParent.Clear();
            Context_global = new GlobalRecursiveContext(idx_max, tobj);
            Diphap.JsNetBridge.SerializeType.PrevisousRecursiveContext context_old = null;

            string result = this.Execute(tobj, this.idx_max, ref _idx, context_old, exclude);

            return result;
        }


        /// <summary>
        /// Serialalize type.
        /// </summary>
        /// <param name="tobj">type of object</param>
        /// <param name="_idx_max"></param>
        /// <param name="_idx"></param>
        /// <returns></returns>
        internal string Execute(Type tobj, int _idx_max,
            ref int _idx, PrevisousRecursiveContext context_old = null, string exclude = "System.")
        {
            TypeSorter tSorter = new TypeSorter(tobj);
            tSorter.TypesToIgnore = TypesToIgnore;
            tSorter.Execute();

            List<string> js_key_value_list = tSorter.Js_key_value_list;

            IList<MemberInfo> ComplexMembersTemp = tSorter.ComplexMembers.ToArray();

            foreach (MemberInfo mi in ComplexMembersTemp)
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
                        if (context_old == null ||
                            context_old != null && telem_work != context_old.Tobj &&
                            this.Context_global.TestOverFlow(telem_work) == false)
                        //(this.TMembersOfCurrentParent.Contains(telem_work) == false || (this.TMembersOfCurrentParent.Contains(telem_work) == true && _idx <= _idx_max)))
                        {
                            _idx++;
                            if (this.TMembersOfCurrentParent.Contains(telem_work) == false)
                            {
                                TMembersOfCurrentParent.Add(telem_work);
                            }

                            Context_global.Add(telem_work);

                            value = Execute(telem_work, _idx_max, ref _idx,
                                new PrevisousRecursiveContext { js_key_value_list = js_key_value_list, MemberInfo = mi, Tobj = tobj }, exclude);

                        }
                        else
                        {
                            if (telem_work == context_old.Tobj)
                            {
                                value = context_old.GetJsonValue();
                            }
                            else
                            {
                                value = "{}";
                                if (this.SimpleTypes.ContainsKey(telem_work)) 
                                {
                                    value = this.SimpleTypes[telem_work].JSValue;
                                }
                            }

                            //-- it's recursive member.
                            tSorter.ResolveComplexMember(mi, value);
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


            string jsonValue = "{" + string.Join(",", js_key_value_list) + "}";

            if (tSorter.IsSimpleType && (SimpleTypes.ContainsKey(tobj) == false))
            {
                SimpleTypes.Add(tobj, tSorter);
            }

            return jsonValue;
        }
    }
}
