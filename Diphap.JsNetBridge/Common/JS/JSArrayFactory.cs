using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Diphap.JsNetBridge.Common.JS
{
    /// <summary>
    /// My array factory extends a js array.
    /// New instances of Array have a function '$dpItemFactory' who creates instance of item of Array.
    /// </summary>
    public class JSArrayFactory
    {



        /// <summary>
        /// Name of factory.
        /// </summary>
        static private string FunctionName = ConfigJS.prefixe_ns_dp + "." + ConfigJS.brandLetter + "shared" + "." + ConfigJS.brandLetter + "arrayFactory";


        /// <summary>
        /// JS code of call of my factory who extends instances of array.
        /// </summary>
        /// <param name="var"></param>
        /// <returns></returns>
        public static string FunctionDefinitionCall(string var)
        {
            string jstext = string.Format("{0}({1})", FunctionName, var);
            return jstext;
        }

    }
}
