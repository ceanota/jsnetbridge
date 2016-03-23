using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace Diphap.JsNetBridge
{
    /// <summary>
    /// Converter to JS.
    /// </summary>
    public static class SerializeNet
    {
        public enum EnumTrySerialize
        {
            TrySerializeObject,
            TrySerializeType
        }

        public static EnumTrySerialize EnumTrySerializeValue = EnumTrySerialize.TrySerializeType;

        /// <summary>
        /// Serialize type.
        /// </summary>
        /// <param name="tobj"></param>
        /// <param name="exclude"></param>
        /// <returns></returns>
        public static void TrySerializeType(Type tobj, bool noReturn, string exclude = "System.")
        {
            RecursiveTypeSorter st = new RecursiveTypeSorter();
            st.Execute(tobj, noReturn, exclude);
        }

        
    }
}
