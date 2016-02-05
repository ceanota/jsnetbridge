using System;
namespace Diphap.JsNetBridge.Mvc
{
    public interface IActionInfo
    {
        string Action { get; set; }
        string Area { get; set; }
        string Controller { get; set; }
        string JsKeyValue { get; }
        string JsLongName { get; }
        string JsSetUrl { get; }
        string JsValue { get; }
        string Url { get; set; }
        bool IsApiController { get; }
        Type[] ParameterClassType();
    }
}
