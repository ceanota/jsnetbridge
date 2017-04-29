using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Diphap.JsNetBridge
{
    /// <summary>
    /// Metadata on types.
    /// </summary>
    abstract public class ScriptTypeInfo
    {
        /// <summary>
        /// TString
        /// </summary>
        public abstract string TString { get; }
        /// <summary>
        /// TNumber
        /// </summary>
        public abstract string TNumber { get; }
        /// <summary>
        /// 
        /// </summary>
        public abstract string TDatetime { get; }
        /// <summary>
        /// 
        /// </summary>
        public abstract string TBoolean { get; }
        /// <summary>
        /// 
        /// </summary>
        public abstract string TArray { get; }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="jsValue"></param>
        /// <returns></returns>
        public abstract string TArrayFactoryFunctionDefinitionCall(string jsValue);
    }
}
