using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Diphap.JsNetBridge.Common
{
    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Enum, AllowMultiple = false, Inherited = true)]
    public sealed class JsNetIgnoreAttribute : Attribute
    {
    }
}
