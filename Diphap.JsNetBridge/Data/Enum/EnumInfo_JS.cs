using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Diphap.JsNetBridge.Common;

namespace Diphap.JsNetBridge.Data.Enum
{
    public class EnumInfo_JS : DataInfo
    {
        protected override EnumScript _EnumScript
        {
            get
            {
                return EnumScript.JS;
            }
        }
        string _JsObj;
        public override string JsObj
        {
            get
            {
                if (this._JsObj == null)
                {
                    this._JsObj = SerializeEnum.ExecuteAdvanced_JS(this.TObj);
                }

                return this._JsObj;
                
            }
        }


        override public string JsObjDeclaration(bool withAlias)
        {
            string objFullName = this._JSNamespace.GetObjectFullName(TObj, withAlias);
            return this.flagGetFactory ? ScriptHelper.GetInstance(this._EnumScript).GetFactoryDeclaration(TObj, this.JsObj, false, objFullName) : ScriptHelper.GetInstance(this._EnumScript).GetObjectDeclaration(objFullName, this.JsObj);

        }

        public EnumInfo_JS(Type tobj_, IList<DataInfo> jsObjCol_, ConfigJS.JSNamespace JSNamespace, bool flagGetFactory_ = true)
            : base(tobj_, jsObjCol_, JSNamespace, flagGetFactory_)
        {
            if (tobj_.IsEnum == false) 
            {
                throw new Exception("It must be 'Enum'"); 
            }
        }
    }
    
}
