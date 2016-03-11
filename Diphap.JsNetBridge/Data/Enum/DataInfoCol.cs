using Diphap.JsNetBridge.Common.JS;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace Diphap.JsNetBridge.Data.Enum
{
    abstract public class DataInfoCol
    {
        abstract protected DataInfo Factory(Type tobj);

        public List<DataInfo> JsObjCol { get; protected set; }

        public string ToJSCore()
        {
            IEnumerable<string> objDecl_Array = this.JsObjCol.Select(x => x.JsObjDeclaration);

            List<string> nsDecl_Array = new List<string>();
            foreach (var jsObj in this.JsObjCol)
            {
                IEnumerable<string> objDecl_Array_Temp = JSHelper.CreateNamespace(ConfigJS.prefix_ns_jsnet + "." + jsObj.TObj.FullName.Replace("+", "."));
                foreach (var objDecl in objDecl_Array_Temp)
                {
                    if (nsDecl_Array.Contains(objDecl) == false)
                    {
                        nsDecl_Array.Add(objDecl);
                    }
                }
            }

            nsDecl_Array.AddRange(objDecl_Array);

            return string.Join("\r\n", nsDecl_Array);
        }

        public string ToJS()
        {
            StringBuilder sb = new StringBuilder();
            sb.AppendLine(JSArrayFactory.Implementation());
            sb.AppendLine();
            sb.AppendLine(JSCircularReferenceManagerFactoryHelper.Implementation());
            sb.AppendLine();
            sb.AppendLine(this.ToJSCore());
            return sb.ToString();
        }

        protected bool flagGetFactory = false;

        virtual protected void Init(IList<Type> Types_Net)
        {
            this.JsObjCol = new List<DataInfo>(Types_Net.Count);

            foreach (Type tobj in Types_Net)
            {
                DataInfo objInfo = this.Factory(tobj);
                if (string.IsNullOrWhiteSpace(objInfo.JsKeyValue) == false)
                {
                    JsObjCol.Add(objInfo);
                }
            }
        }

        public DataInfoCol(IList<Type> Types_Net)
        {
            this.Init(Types_Net);
        }

    }

}
