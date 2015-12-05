using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Diphap.JsNetBridge.Data.Enum
{
    public class EnumInfo : DataInfo
    {
        public EnumInfo(Type tobj_, IList<DataInfo> jsObjCol_, bool flagGetFactory_ = true)
            : base(SerializeEnum.ExecuteAdvanced(tobj_), tobj_, jsObjCol_, flagGetFactory_)
        {
            if (tobj_.IsEnum == false) 
            {
                throw new Exception("It must be 'Enum'"); 
            }
        }
    }
}
