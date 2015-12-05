using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Diphap.JsNetBridge
{
    /// <summary>
    /// Informations on controller.
    /// </summary>
    public class ControllerInfo
    {
        /// <summary>
        /// List of ActionInfo.
        /// </summary>
        public IList<ActionInfo> ActionInfoCol { get; set; }

        /// <summary>
        /// Controller name.
        /// </summary>
        public string Name { get; set; }

        public ControllerInfo(IList<ActionInfo> urlCol, string name)
        {
            this.ActionInfoCol = urlCol;
            this.Name = name;
        }

        public string ToJS
        {
            get
            {
                List<string> keys = this.ActionInfoCol.Select(x => x.JsKeyValue).ToList();

                string keys_string = string.Join(",", keys);
                string json = "{" + Config.VS_JsEnumKeyValue + keys_string + "}";
                json = string.Format("\"{0}\":{1}", this.Name, json);
                return json;
            }
        }

        public override string ToString()
        {
            return this.Name;
        }

    }
}
