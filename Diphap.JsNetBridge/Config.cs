using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Diphap.JsNetBridge
{
    public class Config
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

        public const string prefixe_ns_dp = Config.brandLetter + "dp";

        public const string prefix_ns_jsnet = Config.prefixe_ns_dp + "." + brandLetter + "JsNet";

        public const string url_set = Config.prefix_ns_jsnet + "." + brandLetter + "UrlSet";

        public const string stampFunc = "_stampFunc";
        public static readonly string stampFuncInstruction = string.Format("var {0} = function() {{ return {1}; }};", stampFunc, Config.prefix_ns_jsnet);
    }
}
