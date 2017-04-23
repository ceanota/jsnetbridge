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
    /// Sorts all types of type recursively 
    /// </summary>
    public class RecursiveTypeSorter
    {
        /// <summary>
        /// Sorts all types of type recursively 
        /// </summary>
        public RecursiveTypeSorter() { }

        internal class GlobalRecursiveContext
        {
            /// <summary>
            /// complex types.
            /// </summary>
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
        /// allTypes who containe only primitive type.
        /// </summary>
        internal readonly Dictionary<Type, TypeSorter> ResolvedTypes = new Dictionary<Type, TypeSorter>();


        public List<Type> TypesToIgnore = new List<Type>();

        public int idx_max = 1;
        internal Diphap.JsNetBridge.RecursiveTypeSorter.GlobalRecursiveContext Context_global { get; private set; }

        /// <summary>
        /// Serialalize type.
        /// </summary>
        /// <param name="tobj"></param>
        /// <param name="exclude"></param>
        /// <param name="noReturn"></param>
        /// <param name="JSNamespace"></param>
        /// <returns></returns>
        public void Execute(Type tobj, bool noReturn, ConfigJS.JSNamespace JSNamespace, string exclude = "System.")
        {
            Context_global = new GlobalRecursiveContext(idx_max, tobj);
            this.Execute(tobj, this.idx_max, noReturn, JSNamespace, exclude);
        }

        /// <summary>
        /// Serialalize type. Recursive function.
        /// </summary>
        /// <param name="tobj">type of object</param>
        /// <param name="_idx_max"></param>
        /// <param name="noReturn"></param>
        /// <param name="JSNamespace"></param>
        /// <param name="exclude"></param>
        /// <returns></returns>
        internal void Execute(Type tobj, int _idx_max, bool noReturn, ConfigJS.JSNamespace JSNamespace, string exclude = "System.")
        {
            TypeSorter tSorter = TypeSorter.GetInstance(tobj, JSNamespace);
            tSorter.TypesToIgnore = TypesToIgnore;
            tSorter.Execute();

            IList<MemberInfo> complexMembersTemp = tSorter.ComplexMembers.ToArray();

            foreach (MemberInfo mi in complexMembersTemp)
            {

                Type tmem = TypeHelper.GetMemberType(mi);

                Type telem_work;
                bool isCollection = TypeHelper.GetElementTypeOfCollection(tmem, out telem_work);

                if (isCollection == false)
                {
                    telem_work = tmem;
                }

                if (typeof(System.Object) == telem_work)
                {
                    tSorter.ResolveComplexMember(mi, "{}");
                }
                else
                {
                    if (string.IsNullOrWhiteSpace(exclude) || (string.IsNullOrWhiteSpace(exclude) == false && telem_work.FullName != null && telem_work.FullName.Contains(exclude) == false))
                    {
                        if (this.Context_global.TestOverFlow(telem_work) == false)
                        {
                            //-- memorize executions.
                            this.Context_global.Add(telem_work);

                            //-- recursive
                            this.Execute(telem_work, _idx_max, noReturn, JSNamespace, exclude);

                        }
                        else
                        {
                            //-- it's recursive member.
                            tSorter.ResolveComplexMember(mi);
                        }

                    }
                    else
                    {
                        tSorter.ResolveComplexMember(mi, "{}");
                    }
                }
            }

            if (tSorter.IsSimpleType && (ResolvedTypes.ContainsKey(tobj) == false))
            {
                this.ResolvedTypes.Add(tobj, tSorter);
            }
        }


    }
}
