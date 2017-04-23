using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Diphap.JsNetBridge.Common.JS
{
    /// <summary>
    /// Factory gives un new instance of Function that handles the circular reference objects.
    /// </summary>
    internal class JSCircularReferenceManagerFactoryHelper
    {

        const string prefixe_ns = "$dp";

        /// <summary>
        /// Name of factory.
        /// </summary>
        static private string FunctionName = prefixe_ns + "." + ConfigJS.brandLetter + "shared" + "." + ConfigJS.brandLetter + "circularReferenceManagerFactory";

        /// <summary>
        ///  ex: $dp.shared.circularReferenceManagerFactory.apply(null, args)(objectFactory)
        ///  or ex: $dp.shared.JSArrayFactory($dp.shared.circularReferenceManagerFactory.apply(null, args)(objectFactory))
        /// </summary>
        /// <param name="telem_work"></param>
        /// <param name="isCollection"></param>
        /// <param name="objectFullname"></param>
        /// <returns></returns>
        public static string FunctionDefinitionCall(Type telem_work, bool isCollection, string objectFullname)
        {
            string factoryName = ScriptHelper.GetInstance().GetObjectFactoryName(telem_work, false, true, objectFullname);
            return FunctionDefinitionCall(factoryName, isCollection);
        }

        /// <summary>
        ///  ex: $dp.shared.circularReferenceManagerFactory.apply(null, args)(objectFactory)
        ///  or ex: $dp.shared.JSArrayFactory($dp.shared.circularReferenceManagerFactory.apply(null, args)(objectFactory))
        /// </summary>
        /// <param name="factoryName"></param>
        /// <param name="isCollection"></param>
        /// <returns></returns>
        public static string FunctionDefinitionCall(string factoryName, bool isCollection)
        {
            string jsvalue = string.Format("{0}.apply(null, args)({1})", JSCircularReferenceManagerFactoryHelper.FunctionName, factoryName);
            if (isCollection)
            {
                jsvalue = JSArrayFactory.FunctionDefinitionCall(jsvalue);
            }
            return jsvalue;
        }


    }
}
