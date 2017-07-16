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
        public IList<Type> TypesToIgnore = new Type[] { };
        private readonly List<Type> TypesIgnored = new List<Type>();
        public List<MemberInfo> ComplexMembers = new List<MemberInfo>();
        public readonly MemberInfo[] miArray;
        public static string prefix_namespace = ConfigJS.prefix_ns_jsnet;

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

        internal TypeSorter_(Type tobj)
        {
            this.TObj = tobj;

            //-- all fields and properties of object.
            this.miArray = this.TObj.GetMembers(BindingFlags.Public | BindingFlags.Instance)
                .Where(mi => (mi.MemberType == MemberTypes.Field || mi.MemberType == MemberTypes.Property)).ToArray();

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
