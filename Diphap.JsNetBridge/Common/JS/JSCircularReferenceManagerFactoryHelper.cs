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
    public class JSCircularReferenceManagerFactoryHelper
    {

        const string prefixe_ns = "$dp";

        /// <summary>
        /// Name of factory.
        /// </summary>
        static private string FunctionName = prefixe_ns + ".shared.circularReferenceManagerFactory";

        /// <summary>
        ///  ex: $dp.shared.circularReferenceManagerFactory.apply(null, args)(objectFactory)
        ///  or ex: $dp.shared.JSArrayFactory($dp.shared.circularReferenceManagerFactory.apply(null, args)(objectFactory))
        /// </summary>
        /// <param name="telem_work"></param>
        /// <param name="isCollection"></param>
        /// <param name="functionReference"></param>
        /// <returns></returns>
        public static string FunctionDefinitionCall(Type telem_work, bool isCollection)
        {
            string jsvalue = string.Format("{0}.{1}", Config.prefix_ns_jsnet, telem_work.FullName.Replace("+", "."));
            jsvalue = string.Format("{0}.apply(null, args)({1})", JSCircularReferenceManagerFactoryHelper.FunctionName, jsvalue);
            if (isCollection)
            {
                jsvalue = JSArrayFactory.FunctionDefinitionCall(jsvalue);
            }
            return jsvalue;
        }

        /// <summary>
        /// Factory gives un new instance of Function that handles the circular reference objects.
        /// </summary>
        /// <returns></returns>
        static public string Implementation()
        {
            return Diphap.JsNetBridge.Properties.Resources.circularReferenceManagerFactory;
        }

    }
}
