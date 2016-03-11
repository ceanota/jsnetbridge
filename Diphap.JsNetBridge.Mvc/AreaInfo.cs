using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Diphap.JsNetBridge.Mvc
{
    public class AreaInfo
    {
        public IList<ControllerInfo> ControllerInfoCol { get; set; }
        public string Name { get; set; }

        public AreaInfo(IList<ControllerInfo> controllerInfoCol, string name)
        {
            this.ControllerInfoCol = controllerInfoCol;
            this.Name = name;
        }

        public string ToJS
        {
            get
            {
                string json = "{" + ConfigJS.VS_JsEnumKeyValue + string.Join(",", ControllerInfoCol.Select(x => x.ToJS)) + "}";
                return json;
            }
        }

        public override string ToString()
        {
            return this.Name;
        }

    }
}
