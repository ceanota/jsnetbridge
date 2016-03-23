using Diphap.JsNetBridge.Common.JS;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Diphap.JsNetBridge.Data
{
    public class ModelInfo
    {
        public readonly List<Dictionary<Type, TypeSorter>> Classes = new List<Dictionary<Type, TypeSorter>>(20);
        public readonly List<Type> Types;

        public ModelInfo(List<Type> allTypes)
        {
            this.Types = allTypes;
        }

        public ModelInfo(params Type[] allTypes)
            : this(allTypes.ToList())
        {

        }

        public ModelInfo(string appAspNetPath, IList<string> whiteNamespaces, IList<string> blackNamespaces)
            : this(TypeHelper.GetTypesOfClass(appAspNetPath, whiteNamespaces, blackNamespaces))
        {

        }

        public ModelInfo(string appAspNetPath)
        {
            this.Types = TypeHelper.GetTypesOfClass(appAspNetPath, new string[] { }, new string[] { });
        }

        /// <summary>
        /// 
        /// </summary>
        public void Execute()
        {
            this.Classes.Clear();
            List<RecursiveTypeSorter> serializeTypes = new List<RecursiveTypeSorter>();
            List<Type> unresolvedTypes;

            #region "First Pass"
            unresolvedTypes = ModelInfo.ExecuteCore(this.Types, this.Classes, ref serializeTypes);
            #endregion

            #region "2nd Pass: For recursive issues"
            unresolvedTypes = ModelInfo.ExecuteCore(unresolvedTypes, this.Classes, ref serializeTypes);
            #endregion

        }

        static private List<Type> ExecuteCore(List<Type> tobjArray, List<Dictionary<Type, TypeSorter>> classes, ref List<RecursiveTypeSorter> serializeTypes)
        {
            do
            {

            }
            while (AddClass(tobjArray, classes, ref serializeTypes));

            #region "unresolvedTypes"
            List<Type> unresolvedTypes;
            {
                Type[] resolvedTypes = classes.SelectMany(x => x.Keys).ToArray();
                Type[] allTypes = serializeTypes.Where(x => x.Context_global != null).SelectMany(x => x.Context_global.Occurences.Keys).ToArray();
                unresolvedTypes = allTypes.Except(resolvedTypes).ToList();
            }
            #endregion

            return unresolvedTypes;
        }

        private static bool AddClass(List<Type> allTypes, List<Dictionary<Type, TypeSorter>> classes, ref List<RecursiveTypeSorter> serializeTypes)
        {
            RecursiveTypeSorter st = new RecursiveTypeSorter();
            serializeTypes.Add(st);

            st.TypesToIgnore.AddRange(classes.SelectMany(kv => kv.Keys));

            IList<Type> allTypesTemp = allTypes.Where(t => st.TypesToIgnore.Contains(t) == false).ToArray();

            foreach (Type t in allTypesTemp)
            {
                st.Execute(t, true);
            }

            var cl = st.ResolvedTypes.ToDictionary(kv => kv.Key, kv => kv.Value);

            if (cl.Count > 0)
            {
                classes.Add(cl);
            }

            return cl.Count > 0;

        }

        /// <summary>
        /// Code JS of factories of c# classes.
        /// There is not 'JSArrayFactory'
        /// </summary>
        /// <returns></returns>
        public string ToJSCore()
        {
            //-- sort types of classes.
            this.Execute();


            List<string> nsDecl_Array = new List<string>();
            List<string> funcDecl_Array = new List<string>();

            foreach (var dic in Classes)
            {
                foreach (var kv in dic)
                {
                    List<string> objDecl_Array_Temp = JSHelper.CreateNamespace(ConfigJS.prefix_ns_jsnet + "." + kv.Key.FullName.Replace("+", "."));

                    foreach (var objDecl in objDecl_Array_Temp)
                    {
                        if (nsDecl_Array.Contains(objDecl) == false)
                        {
                            nsDecl_Array.Add(objDecl);
                        }
                    }

                    string funcDecl = JSHelper.GetFactoryDeclaration(kv.Key, kv.Value.JSValue, true);
                    funcDecl_Array.Add(funcDecl);
                }
            }

            nsDecl_Array.AddRange(funcDecl_Array);

            return string.Join("\r\n", nsDecl_Array);

        }

        /// <summary>
        /// All code js.
        /// </summary>
        /// <returns></returns>
        public string ToJS()
        {
            StringBuilder sb = new StringBuilder();
            sb.AppendLine();
            sb.AppendLine(this.ToJSCore());
            return sb.ToString();
        }

        public void WriteAllText(string jsFilePath)
        {
            File.WriteAllText(jsFilePath, this.ToJS());
        }

        public void AppendAllText(string jsFilePath)
        {
            File.AppendAllText(jsFilePath, this.ToJS());
        }

    }
}
