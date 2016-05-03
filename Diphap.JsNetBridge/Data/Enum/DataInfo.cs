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

        public string JsKeyValue
        {
            get
            {
                return string.Format("\"{0}\":{1}",
                    TObj.Name,
                    this.flagGetFactory ? JSHelper.GetFactory(this.JsObj, false) : this.JsObj);
            }
        }

        public string JsObjDeclaration(bool withAlias)
        {

            string objFullName = this._JSNamespace.GetObjectFullName(TObj, withAlias);
            return this.flagGetFactory ? JSHelper.GetFactoryDeclaration(TObj, this.JsObj, false, objFullName) : JSHelper.GetObjectDeclaration(objFullName, this.JsObj);

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
        }

        public override string ToString()
        {
            string text = this.TObj.FullName;
            return text;
        }

    }
}
