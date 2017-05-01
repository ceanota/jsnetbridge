using Diphap.JsNetBridge.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Diphap.JsNetBridge.Data.Enum
{
    abstract public class DataInfo
    {
        protected bool flagGetFactory = true;

        abstract public string JsObj { get;}
        public Type TObj { get; private set; }
        public IList<DataInfo> ObjInfoCol { get; private set; }
        readonly protected ConfigJS.JSNamespace _JSNamespace;
        protected abstract EnumScript _EnumScript { get; }

        abstract public string JsObjDeclaration(bool withAlias);

        public string JsKeyValue
        {
            get
            {
                return string.Format("\"{0}\":{1}",
                    TObj.Name,
                    this.flagGetFactory ? ScriptHelper.GetInstance(this._EnumScript).GetFactory(this.JsObj, false) : this.JsObj);
            }
        }

        protected DataInfo(Type tobj_, IList<DataInfo> objInfoCol_, ConfigJS.JSNamespace JSNamespace, bool flagGetFactory_ = true)
        {

            if ((JSNamespace != null) == false)
            { throw new ArgumentNullException("JSNamespace"); }

            this.TObj = tobj_;
            this.ObjInfoCol = objInfoCol_;
            this.flagGetFactory = flagGetFactory_;
            this._JSNamespace = JSNamespace;
        }

        public override string ToString()
        {
            string text = this.TObj.FullName;
            return text;
        }

    }
}
