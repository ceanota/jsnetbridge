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

        IEnumerable<Type> _GetJsObjColType;
        public IEnumerable<Type> GetJsObjColTypes()
        {
            if (this._GetJsObjColType == null)
            {
                //-- distinct types.
                this._GetJsObjColType = this.JsObjCol.Select(o => o.TObj).Distinct();
            }
            return this._GetJsObjColType;
        }

        /// <summary>
        /// Create namespaces.
        /// </summary>
        /// <returns></returns>
        public IList<string> CreateNamespaces()
        {
            return CreateNamespaces(this.GetJsObjColTypes());
        }

        /// <summary>
        /// alias of namespace
        /// ex: var _alias0 = $dp.$JsNet.ContosoUniversity.Models;
        /// </summary>
        /// <returns></returns>
        public IList<string> CreateAliases()
        {
            //-- add alias in global variable 'NamespaceAliasDic'
            _JSNamespace.AddRangeAlias(this.GetJsObjColTypes());

            //-- alias of namespace
            //-- ex: var _alias0 = $dp.$JsNet.ContosoUniversity.Models;
            return _JSNamespace.ToJSInstructions(this.GetJsObjColTypes());
        }

        /// <summary>
        ///  Declaration of objects.
        /// </summary>
        /// <param name="withAlias"></param>
        /// <returns></returns>
        public IEnumerable<string> CreateJsObjectDeclaration(bool withAlias)
        {
            IEnumerable<string> objDecl_Array = this.JsObjCol.Select(x => x.JsObjDeclaration(withAlias));
            return objDecl_Array;
        }

        virtual public string ToJSCore(string regionName = "")
        {
            List<string> jsInstructions = new List<string>();

            jsInstructions.Add(JSRaw.Region.Begin(regionName));

            //-- Create Namespaces.
            jsInstructions.AddRange(this.CreateNamespaces());

            //-- Create Aliases
            jsInstructions.AddRange(this.CreateAliases());

            //-- Declaration of objects.
            jsInstructions.AddRange(this.CreateJsObjectDeclaration(true));

            jsInstructions.Add(JSRaw.Region.End());

            return string.Join("\r\n", jsInstructions);
        }

        /// <summary>
        /// Create namespaces.
        /// </summary>
        /// <param name="tobjArray"></param>
        /// <returns></returns>
        static public List<string> CreateNamespaces(IEnumerable<Type> tobjArray)
        {
            List<string> jsInstructions = new List<string>();

            foreach (var t in tobjArray)
            {
                IEnumerable<string> nsArray = ScriptHelper.GetInstance().CreateNamespace(ConfigJS.JSNamespace.GetObjectFullName(t));
                foreach (var ns in nsArray)
                {
                    if (jsInstructions.Contains(ns) == false)
                    {
                        jsInstructions.Add(ns);
                    }
                }
            }
            return jsInstructions;
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
