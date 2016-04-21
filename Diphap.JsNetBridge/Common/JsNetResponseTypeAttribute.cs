using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Diphap.JsNetBridge.Common
{
    [AttributeUsage(AttributeTargets.Method, AllowMultiple = true)]
    public sealed class JsNetResponseTypeAttribute : Attribute
    {
        /// <summary>
        /// Initializes a new instance
        /// </summary>
        /// <param name="responseType"></param>
        public JsNetResponseTypeAttribute(Type responseType) 
        {
            this.ResponseType = responseType;
        }
        
        /// <summary>
        /// Gets the response type.
        /// </summary>
        public Type ResponseType { get; private set; }
    }

}
