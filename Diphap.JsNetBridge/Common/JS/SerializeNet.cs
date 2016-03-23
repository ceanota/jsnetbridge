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
        /// Serialize object with constructor less parameters.
        /// </summary>
        /// <param name="tobj"></param>
        /// <returns></returns>
        private static string TrySerializeObject(Type tobj)
        {
            #region "DON'T DELETE: No dependance to Newtonsoft.Json"
            //string jsonValue = "";
            //if (tobj.GetConstructors().Any(x => x.GetParameters().Count() == 0))
            //{
            //    object instance = Activator.CreateInstance(tobj);
            //    jsonValue = Newtonsoft.Json.JsonConvert.SerializeObject(instance);
            //}
            //return jsonValue;
            #endregion

            throw new NotImplementedException();

        }

        /// <summary>
        /// Serialize type.
        /// </summary>
        /// <param name="tobj"></param>
        /// <param name="exclude"></param>
        /// <returns></returns>
        public static void TrySerializeType(Type tobj, bool noReturn, string exclude = "System.")
        {
            SerializeType st = new SerializeType();
            st.Execute(tobj, noReturn, exclude);
        }

        
    }
}
