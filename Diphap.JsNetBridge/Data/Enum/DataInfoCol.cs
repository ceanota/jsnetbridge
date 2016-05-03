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
        abstract protected DataInfo Factory(Type tobj, ConfigJS.JSNamespace JSNamespace);



        public List<DataInfo> JsObjCol { get; protected set; }

        public string ToJSCore()
        {


            List<string> nsDecl_Array = new List<string>();
            foreach (var jsObj in this.JsObjCol)
            {
                IEnumerable<string> objDecl_Array_Temp =
                    JSHelper.CreateNamespace(_JSNamespace.GetObjectFullName(jsObj.TObj, false));

                foreach (var objDecl in objDecl_Array_Temp)
                {
                    if (nsDecl_Array.Contains(objDecl) == false)
                    {
                        nsDecl_Array.Add(objDecl);
                    }
                }
            }

            {

                IEnumerable<Type> types_temp = this.JsObjCol.Select(x => x.TObj);

                //-- add alias in global variable 'NamespaceAliasDic'
                _JSNamespace.AddRangeAlias(types_temp);

                //-- alias of namespace
                //-- ex: var _alias0 = $dp.$JsNet.ContosoUniversity.Models;
                nsDecl_Array.AddRange(_JSNamespace.ToJSInstructions(types_temp));
            }

            IEnumerable<string> objDecl_Array = this.JsObjCol.Select(x => x.JsObjDeclaration(true));

            nsDecl_Array.AddRange(objDecl_Array);

            nsDecl_Array.Insert(0, JSRaw.Region.Begin());
            nsDecl_Array.Add(JSRaw.Region.End());

            return string.Join("\r\n", nsDecl_Array);
        }

        public string ToJS()
        {
            StringBuilder sb = new StringBuilder();
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
                DataInfo objInfo = this.Factory(tobj, _JSNamespace);
                if (string.IsNullOrWhiteSpace(objInfo.JsKeyValue) == false)
                {
                    JsObjCol.Add(objInfo);
                }
            }
        }

        protected ConfigJS.JSNamespace _JSNamespace { get; private set; }

        public DataInfoCol(IList<Type> Types_Net, ConfigJS.JSNamespace JSNamespace)
        {
            _JSNamespace = JSNamespace;
            this.Init(Types_Net);

        }

    }

}
