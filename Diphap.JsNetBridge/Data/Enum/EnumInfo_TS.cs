using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Diphap.JsNetBridge.Common;

namespace Diphap.JsNetBridge.Data.Enum
{
    public class EnumInfo_TS : DataInfo
    {
        protected override EnumScript _EnumScript
        {
            get
            {
                return EnumScript.TS;
            }
        }
        string _JsObj;
        public override string JsObj
        {
            get
            {
                if (this._JsObj == null)
                {
                    this._JsObj = SerializeEnum.ExecuteAdvanced_TS(this.TObj); 
                }

                return this._JsObj;

            }
        }


        override public string JsObjDeclaration(bool withAlias)
        {
            string objFullName = TypeHelper.GetName(TObj);
            return ScriptHelper.GetInstance(this._EnumScript).GetObjectDeclaration(objFullName, this.JsObj);

        }

        public EnumInfo_TS(Type tobj_, IList<DataInfo> jsObjCol_, ConfigJS.JSNamespace JSNamespace, bool flagGetFactory_ = true)
            : base(tobj_, jsObjCol_, JSNamespace, flagGetFactory_)
        {
            if (tobj_.IsEnum == false)
            {
                throw new Exception("It must be 'Enum'");
            }
        }
    }
}
