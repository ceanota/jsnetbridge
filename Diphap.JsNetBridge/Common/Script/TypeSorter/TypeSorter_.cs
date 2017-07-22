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
    internal class TypeSorter_
    {
        public readonly Type TObj;
        public IList<Type> TypesToIgnore { get; private set; }
        private readonly List<Type> TypesIgnored = new List<Type>();
        readonly private List<MemberInfo> ComplexMembers = new List<MemberInfo>();
        private List<MemberInfo> ComplexMembers_unresolved { get; set; }
        public readonly MemberInfo[] miArray;
        public static string prefix_namespace = ConfigJS.prefix_ns_jsnet;

        public bool IsResolved
        {
            get
            {
                return ComplexMembers_unresolved.Count == 0;
            }
        }

        private readonly ConfigJS.JSNamespace _JSNamespace;

        internal TypeSorter_(Type tobj)
        {
            this.TObj = tobj;

            //-- all fields and properties of object.
            this.miArray = this.TObj.GetMembers(BindingFlags.Public | BindingFlags.Instance)
                .Where(mi => (mi.MemberType == MemberTypes.Field || mi.MemberType == MemberTypes.Property)).ToArray();

            this.DetermineComplexMembers();

        }

        public IList<MemberInfo> DetermineIfMemberInfoAreComplexMembers_unresolved(IList<Type> TypesToIgnore)
        {
            this.TypesToIgnore = TypesToIgnore;
            this.ComplexMembers_unresolved = new List<MemberInfo>();

            foreach (MemberInfo mi in this.ComplexMembers)
            {
                Type tmem = TypeHelper.GetMemberType(mi);

                if (this.TypesToIgnore.Count == 0)
                {
                    ComplexMembers_unresolved.Add(mi);
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
                        ComplexMembers_unresolved.Add(mi);
                    }
                    else
                    {
                        this.TypesIgnored.Add(tmem);
                    }
                }

            }

            return this.ComplexMembers_unresolved.ToArray();
        }

        /// <summary>
        /// Executes.
        /// </summary>
        private void DetermineComplexMembers()
        {
            foreach (MemberInfo mi in miArray)
            {
                Type tmem = TypeHelper.GetMemberType(mi);
                if (ScriptHelper.GetCategoryType(tmem) == ScriptHelper.EnumType.tcomplex)
                {
                    this.ComplexMembers.Add(mi);
                }
            }
        }

        /// <summary>
        /// Force.
        /// </summary>
        /// <param name="mi"></param>
        internal void ResolveComplexMember(MemberInfo mi)
        {
            if (this.ComplexMembers_unresolved.Contains(mi))
            {
                this.ComplexMembers_unresolved.Remove(mi);
            }
        }

        internal MemberInfo[] GetComplexMembers_unresolved()
        {
            return this.ComplexMembers_unresolved.ToArray();
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
