using Diphap.JsNetBridge.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace Diphap.JsNetBridge.Mvc.Helpers
{
    static class MvcHelper
    {

        /// <summary>
        /// Get the effective return type.
        /// </summary>
        /// <param name="mi"></param>
        /// <returns></returns>
        static public Type GetEffectiveReturnType(MethodInfo mi)
        {
            Type value = null;

            if (value == null)
            {
                value = TypeHelper.GetAttributePropertyValue(mi, typeof(JsNetResponseTypeAttribute), "ResponseType") as Type;
            }

            if (value == null)
            {
                value = mi.ReturnType;
            }

            return value;
        }

        /// <summary>
        /// get data type of return.
        /// </summary>
        /// <param name="mi"></param>
        /// <returns></returns>
        static public string GetAjaxDataType(MethodInfo mi)
        {
            Type treturn = GetEffectiveReturnType(mi) ?? typeof(void);

            bool isJson = !AspMvcInfo.TypesOfAspNetSetMvc.TMvc.Type_ActionResult.IsAssignableFrom(treturn) ||
                AspMvcInfo.TypesOfAspNetSetMvc.TMvc.Type_JsonResult.IsAssignableFrom(treturn);

            if (isJson)
            {
                return "json";
            }
            else
            {
                return "text";
            }

        }
    }
}
