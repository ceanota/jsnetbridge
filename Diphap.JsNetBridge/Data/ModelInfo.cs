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

        public ModelInfo(string appAspNetPath, IList<string> namespaces)
            : this(TypeHelper.GetTypesOfClass(appAspNetPath, namespaces))
        {

        }

        public ModelInfo(string appAspNetPath)
        {
            this.Types = TypeHelper.GetTypesOfClass(appAspNetPath, new string[] { });
        }

        public void Execute()
        {
            Classes.Clear();

            do
            {

            }
            while (AddClass(this.Types, this.Classes));
        }

        private static bool AddClass(List<Type> allTypes, List<Dictionary<Type, TypeSorter>> classes)
        {
            SerializeType st = new SerializeType();
            st.TypesToIgnore.AddRange(classes.SelectMany(kv => kv.Keys));

            IList<Type> allTypesTemp = allTypes.Where(t => st.TypesToIgnore.Contains(t) == false).ToArray();

            foreach (Type t in allTypesTemp)
            {
                st.Execute(t);
            }

            var cl = st.SimpleTypes.ToDictionary(kv => kv.Key, kv => kv.Value);

            if (cl.Count > 0)
            {
                classes.Add(cl);
            }

            return cl.Count > 0;

        }

        public string ToJSCore()
        {
            this.Execute();

            List<string> funcDecl_Array = new List<string>();
            List<string> nsDecl_Array = new List<string>();

            foreach (var dic in Classes)
            {
                foreach (var kv in dic)
                {
                    List<string> objDecl_Array_Temp = JSHelper.CreateNamespace(Config.prefix_ns + "." + kv.Key.FullName.Replace("+", "."));

                    foreach (var objDecl in objDecl_Array_Temp)
                    {
                        if (nsDecl_Array.Contains(objDecl) == false)
                        {
                            nsDecl_Array.Add(objDecl);
                        }
                    }

                    string funcDecl = JSHelper.GetFactoryDeclaration(kv.Key, kv.Value.JSValue);
                    funcDecl_Array.Add(funcDecl);
                }
            }

            nsDecl_Array.AddRange(funcDecl_Array);

            return string.Join("\r\n", nsDecl_Array);

        }

        public string ToJS()
        {
            StringBuilder sb = new StringBuilder();
            sb.AppendLine(JSArrayFactory.Implementation());
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
