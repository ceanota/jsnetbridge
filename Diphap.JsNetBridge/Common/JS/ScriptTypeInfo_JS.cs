using Diphap.JsNetBridge.Common.JS;
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
    public class ScriptTypeInfo_JS : ScriptTypeInfo
    {
        /// <summary>
        /// 
        /// </summary>
        public override string TString { get { return "\"\""; } }
        /// <summary>
        /// 
        /// </summary>
        public override string TNumber { get { return "0"; } }
        /// <summary>
        /// 
        /// </summary>
        public override string TDatetime { get { return "new Date()"; } }
        /// <summary>
        /// 
        /// </summary>
        public override string TBoolean { get { return "false"; } }
        /// <summary>
        /// 
        /// </summary>
        public override string TArray { get { return "[]"; } }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="jsValue"></param>
        /// <returns></returns>
        public override string TArrayFactoryFunctionDefinitionCall(string jsValue)
        {
            return JSArrayFactory.FunctionDefinitionCall(jsValue);
        }
    }
}
