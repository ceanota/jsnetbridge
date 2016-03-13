using Diphap.JsNetBridge.Common.JS;
using Diphap.JsNetBridge.Data.Enum;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace Diphap.JsNetBridge.Data
{

    public class EntityInfo
    {
        ModelInfo _ModelInfo;
        EnumColInfo _EnumColInfo;

        public EntityInfo(string appAspNetPath, string[] whiteNamespaces, string[] blackNamespaces)
        {
            _ModelInfo = new ModelInfo(appAspNetPath, whiteNamespaces, blackNamespaces);
            _EnumColInfo = new EnumColInfo(appAspNetPath, whiteNamespaces, blackNamespaces);
        }

        public string ToJS()
        {
            StringBuilder sb = new StringBuilder();
            sb.AppendLine();
            sb.AppendLine(this._ModelInfo.ToJSCore());
            sb.AppendLine();
            sb.AppendLine(this._EnumColInfo.ToJSCore());

            return sb.ToString();
        }

        public void WriteAllJS(string jsFilePath)
        {
            File.WriteAllText(jsFilePath, this.ToJS());
        }

        public void AppendAllText(string jsFilePath)
        {
            File.AppendAllText(jsFilePath, this.ToJS());
        }
    }
}
