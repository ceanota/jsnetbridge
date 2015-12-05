using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Diphap.JsNetBridge.Common.JS
{
    public class JSArrayFactory
    {
        const string prefixe_ns = "$dp";

        private static string GetNamespace()
        {

            return string.Format("window.{0} = window.{0} || {{}};window.{0}.shared = window.{0}.shared || {{}};", prefixe_ns);
        }

        static private string FunctionName = prefixe_ns + ".shared.arrayFactory";

        private static string FunctionDefinition()
        {
            string jstext =
                FunctionName + "=" + FunctionName + "||" +
@"function (ref) {
    var aa = [];
    aa.$dpItemFactory = function () {
        return ref;
    };
    return aa;
};";
            return jstext;
        }

        static public string Implementation()
        {
            string jstext = JSArrayFactory.GetNamespace();
            jstext += "\r\n" + JSArrayFactory.FunctionDefinition() + "\r\n";
            return jstext;
        }

        public static string FunctionDefinitionCall(string var)
        {
            string jstext = string.Format("{0}({1})", FunctionName, var);
            return jstext;
        }

    }
}
