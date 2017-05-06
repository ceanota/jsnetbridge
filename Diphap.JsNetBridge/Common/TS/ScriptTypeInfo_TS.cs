using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Diphap.JsNetBridge
{
    /// <summary>
    /// 
    /// </summary>
    public class ScriptTypeInfo_TS : ScriptTypeInfo
    {
        /// <summary>
        /// 
        /// </summary>
        public override string TString { get { return "string"; } }
        /// <summary>
        /// 
        /// </summary>
        public override string TNumber { get { return "number"; } }
        /// <summary>
        /// 
        /// </summary>
        public override string TDatetime { get { return "Date"; } }
        /// <summary>
        /// 
        /// </summary>
        public override string TBoolean { get { return "boolean"; } }
        /// <summary>
        /// 
        /// </summary>
        public override string TArray { get { return "any[]"; } }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="T">Type of data</param>
        /// <returns></returns>
        public override string TArrayFactoryFunctionDefinitionCall(string T)
        {
            return "$dp.$shared.$Array<" + T + ">";
        }
    }
}
