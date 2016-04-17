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

        public string JsKeyValue
        {
            get
            {
                return string.Format("\"{0}\":{1}",
                    TObj.Name,
                    this.flagGetFactory ? JSHelper.GetFactory(this.JsObj, false) : this.JsObj);
            }
        }

        public string JsObjDeclaration
        {
            get
            {
                return this.flagGetFactory ? JSHelper.GetFactoryDeclaration(TObj, this.JsObj, false, false) : JSHelper.GetObjectDeclaration(TObj, this.JsObj);
            }
        }


        protected DataInfo(string jsValue_, Type tobj_, IList<DataInfo> objInfoCol_, bool flagGetFactory_ = true)
        {
            this.JsObj = jsValue_;
            this.TObj = tobj_;
            this.ObjInfoCol = objInfoCol_;
            this.flagGetFactory = flagGetFactory_;
        }

        public override string ToString()
        {
            string text = this.TObj.FullName;
            return text;
        }

    }
}
