using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Diphap.JsNetBridge
{
    public class ConfigJS
    {
        /// <summary>
        /// JS ENUM Intellisense.
        /// </summary>
        public static string VS_JsEnumKeyValue
        {
            get
            {
                return (true ? null : "\"__enum\":true,");
            }
        }
        /// <summary>
        /// JS ENUM Intellisense.
        /// </summary>
        public static string VS_JsEnumKeyValue_instruction(string objName)
        {
            return (true ? null : string.Format("{0}.__enum = true;", objName));
        }

        public const string brandLetter = "$";

        public const string prefixe_ns_dp = ConfigJS.brandLetter + "dp";

        public const string prefix_ns_jsnet = ConfigJS.prefixe_ns_dp + "." + brandLetter + "JsNet";

        public const string url_set = ConfigJS.prefix_ns_jsnet + "." + brandLetter + "UrlSet";

        public const string stampFunc = "_stampFunc";
        public static readonly string stampFuncInstruction = string.Format("var {0} = function() {{ return {1}; }};", stampFunc, ConfigJS.prefix_ns_jsnet);
    }
}
