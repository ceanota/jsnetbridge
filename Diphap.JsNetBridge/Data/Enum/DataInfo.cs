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
        bool flagGetFactory = true;

        public string JsObj { get; set; }
        public Type TObj { get; set; }
        public IList<DataInfo> ObjInfoCol { get; set; }
        readonly private ConfigJS.JSNamespace _JSNamespace;
        readonly EnumScript _EnumScript;

        public string JsKeyValue
        {
            get
            {
                return string.Format("\"{0}\":{1}",
                    TObj.Name,
                    this.flagGetFactory ? ScriptHelper.GetInstance(this._EnumScript).GetFactory(this.JsObj, false) : this.JsObj);
            }
        }

        public string JsObjDeclaration(bool withAlias)
        {

            string objFullName = this._JSNamespace.GetObjectFullName(TObj, withAlias);
            return this.flagGetFactory ? ScriptHelper.GetInstance(this._EnumScript).GetFactoryDeclaration(TObj, this.JsObj, false, objFullName) : ScriptHelper.GetInstance(this._EnumScript).GetObjectDeclaration(objFullName, this.JsObj);

        }


        protected DataInfo(string jsValue_, Type tobj_, IList<DataInfo> objInfoCol_, ConfigJS.JSNamespace JSNamespace, bool flagGetFactory_ = true)
        {

            if ((JSNamespace != null) == false)
            { throw new ArgumentNullException("JSNamespace"); }

            this.JsObj = jsValue_;
            this.TObj = tobj_;
            this.ObjInfoCol = objInfoCol_;
            this.flagGetFactory = flagGetFactory_;
            this._JSNamespace = JSNamespace;
            this._EnumScript = EnumScript.JS;
        }

        public override string ToString()
        {
            string text = this.TObj.FullName;
            return text;
        }

    }
}
