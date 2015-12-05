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

        public static string prefix_ns = "$dp.$JsNet";

        public static string url_set = Config.prefix_ns + ".$UrlSet";
    }
}
