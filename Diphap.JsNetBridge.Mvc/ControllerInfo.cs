using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Diphap.JsNetBridge.Mvc
{
    /// <summary>
    /// Informations on controller.
    /// </summary>
    public class ControllerInfo
    {
        /// <summary>
        /// List of ActionInfo.
        /// </summary>
        public IList<IActionInfo> ActionInfoCol { get; set; }

        /// <summary>
        /// Controller name.
        /// </summary>
        public string Name { get; set; }

        public ControllerInfo(IList<IActionInfo> urlCol, string name)
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
                string json = "{" + ConfigJS.VS_JsEnumKeyValue + keys_string + "}";
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
