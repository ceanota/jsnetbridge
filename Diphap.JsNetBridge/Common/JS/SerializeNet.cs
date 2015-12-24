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
        /// <param name="_idx_max"></param>
        /// <param name="exclude"></param>
        /// <returns></returns>
        private static string TrySerializeType(Type tobj, int _idx_max, string exclude = "System.")
        {
            //int _idx = 0;
            //Diphap.JsNetBridge.SerializeType.PrevisousRecursiveContext context_old = null;
            //return SerializeType.Execute(tobj, _idx_max, ref _idx, context_old, exclude);

            SerializeType st = new SerializeType();
            return st.Execute(tobj, _idx_max, exclude);
        }

        /// <summary>
        /// Serialize type or object.
        /// </summary>
        /// <param name="enumTrySerialize"></param>
        /// <param name="tobj"></param>
        /// <param name="isCollection"></param>
        /// <returns></returns>
        public static string TrySerialize(EnumTrySerialize enumTrySerialize, Type tobj)
        {
            string jsValue;
            switch (enumTrySerialize)
            {
                case EnumTrySerialize.TrySerializeObject:
                    jsValue = TrySerializeObject(tobj);
                    break;
                case EnumTrySerialize.TrySerializeType:
                    jsValue = TrySerializeType(tobj, int.MaxValue);
                    break;
                default:
                    throw new NotImplementedException("TrySerialize");
            }

            return jsValue;
        }

        /// <summary>
        /// Serialize type or object(it depends on 'SerializeNet.EnumTrySerializeValue').
        /// </summary>
        /// <param name="tobj"></param>
        /// <param name="isCollection"></param>
        /// <returns></returns>
        public static string TrySerialize(Type tobj)
        {
            return TrySerialize(EnumTrySerializeValue, tobj);
        }
    }
}
