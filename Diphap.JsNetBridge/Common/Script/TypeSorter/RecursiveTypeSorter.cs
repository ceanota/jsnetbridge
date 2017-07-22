using Diphap.JsNetBridge.Common;
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
    public class RecursiveTypeDependanceSorter
    {
        /// <summary>
        /// Sorts all types of type recursively 
        /// </summary>
        public RecursiveTypeDependanceSorter()
        {
        }

        /// <summary>
        /// Recursive Execution Context.
        /// </summary>
        private class GlobalRecursiveContext
        {
            /// <summary>
            /// Occurences of complex types.
            /// </summary>
            readonly public Dictionary<Type, int> OccurencesOfDependanceType = new Dictionary<Type, int>();
            readonly int _IdxMax;
            readonly Type TObj;
            public int Idx { get; private set; }

            private int _Stamp = -1;

            public int GetNext_Stamp()
            {
                return ++this._Stamp;
            }

            public List<object> RecursiveContext_Execution = new List<object>();

            public GlobalRecursiveContext(int idx_max, Type tobj)
            {
                this.TObj = tobj;
                this._IdxMax = idx_max;
            }

            public void Add(Type tmemb)
            {
                this.Idx++;
                if (OccurencesOfDependanceType.ContainsKey(tmemb) == false)
                {
                    OccurencesOfDependanceType.Add(tmemb, 1);
                }
                else
                {
                    OccurencesOfDependanceType[tmemb]++;
                }
            }

            public bool TestOverFlow(Type tmem)
            {
                return this.OccurencesOfDependanceType.ContainsKey(tmem) && this.OccurencesOfDependanceType[tmem] >= this._IdxMax;
            }

            public override string ToString()
            {
                string text = string.Format("{0}, {1}", this.Idx, this.TObj);
                return text;
            }
        }

        /// <summary>
        /// All occurences of complex types
        /// </summary>
        readonly public Dictionary<Type, int> OccurencesOfDependanceType_All = new Dictionary<Type, int>();

        /// <summary>
        /// allTypes who containe only primitive type.
        /// </summary>
        internal readonly Dictionary<Type, TypeSorter_> ResolvedTypes = new Dictionary<Type, TypeSorter_>();


        public List<Type> TypesToIgnore = new List<Type>();

        public int idx_max = 1;
        private Diphap.JsNetBridge.RecursiveTypeDependanceSorter.GlobalRecursiveContext Context_global { get; set; }

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
            this.Context_global = new GlobalRecursiveContext(idx_max, tobj);

            //if (tobj.FullName == "QuadraEden.Domain.EffetFacture")//-- debug
            //{
            //    var aa = 1;
            //}

            var next_stamp = this.Context_global.GetNext_Stamp();
            this.Context_global.RecursiveContext_Execution.Add(tobj);
            this.Execute(next_stamp, tobj, this.idx_max, noReturn, JSNamespace, exclude);

            foreach(var kv in this.Context_global.OccurencesOfDependanceType)
            {
                if (this.OccurencesOfDependanceType_All.ContainsKey(kv.Key) == false)
                {
                    //-- All occurences of complex types
                    this.OccurencesOfDependanceType_All.Add(kv.Key, kv.Value);
                }
            }

            this.Context_global = null;

        }

        /// <summary>
        /// Serialalize type. Recursive function.
        /// </summary>
        /// <param name="stamp"></param>
        /// <param name="tobj">type of object</param>
        /// <param name="_idx_max"></param>
        /// <param name="noReturn"></param>
        /// <param name="JSNamespace"></param>
        /// <param name="exclude"></param>
        /// <returns></returns>
        internal void Execute(int stamp, Type tobj, int _idx_max, bool noReturn, ConfigJS.JSNamespace JSNamespace, string exclude = "System.")
        {
            TypeSorter_ tSorter = new TypeSorter_(tobj);

            IList<MemberInfo> complexMembersTemp = tSorter.DetermineIfMemberInfoAreComplexMembers_unresolved(TypesToIgnore);

            foreach (MemberInfo mi in complexMembersTemp)
            {
                Type tmem = TypeHelper.GetMemberType(mi);

                Type telem_work = TypeHelper.GetElementTypeOfCollectionOrDefault(tmem);

                if (this.ResolvedTypes.ContainsKey(telem_work) == true)
                {
                    tSorter.ResolveComplexMember(mi);
                    continue;
                }


                if (typeof(System.Object) == telem_work)
                {
                    tSorter.ResolveComplexMember(mi);
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
                            this.Context_global.RecursiveContext_Execution.Add(telem_work);
                            int next_stamp = this.Context_global.GetNext_Stamp();
                            this.Execute(next_stamp, telem_work, _idx_max, noReturn, JSNamespace, exclude);
                        }
                        else
                        {
                            //-- it's recursive member.
                            tSorter.ResolveComplexMember(mi);
                        }

                    }
                    else
                    {
                        tSorter.ResolveComplexMember(mi);
                    }
                }
            }

            #region "extra"
            //------------------- DON'T DELETE
            //if (tSorter.IsResolved == false)
            //{
            //    foreach (var mi in tSorter.GetComplexMembers_unresolved())
            //    {
            //        Type tmi = TypeHelper.GetMemberType(mi);
            //        Type telem_work = TypeHelper.GetElementTypeOfCollectionOrDefault(tmi);
            //        if (this.ResolvedTypes.ContainsKey(telem_work))
            //        {
            //            tSorter.ResolveComplexMember(mi);
            //        }
            //    } 
            //}
            #endregion

            if (tSorter.IsResolved && (ResolvedTypes.ContainsKey(tobj) == false))
            {
                this.ResolvedTypes.Add(tobj, tSorter);
            }

        }


    }
}
