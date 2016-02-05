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
            return (true ? null : string.Format("{0}.__enum = true;",objName));
        }

        public static string prefix_ns = "$dp.$JsNet";

        public static string url_set = Config.prefix_ns + ".$UrlSet";
    }
}
