using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Diphap.JsNetBridge
{
    /// <summary>
    /// Serialize Enum
    /// </summary>
    public static class SerializeEnum
    {
        /// <summary>
        /// Serialize Enum.
        /// </summary>
        /// <param name="tenum"></param>
        /// <returns></returns>
        public static string ExecuteAdvanced(Type tenum)
        {
            Dictionary<string, int> dic = ToDictionnary(tenum);

            List<string> props = new List<string>(dic.Count);
            foreach (var kv in dic)
            {

                string prop_key = string.Format("\"{0}\":\"{1}\"", ConfigJS.brandLetter + "Key", kv.Key);
                string prop_value = string.Format("\"{0}\":{1}", ConfigJS.brandLetter + "Value", kv.Value);
                string obj = string.Format("{{ {0},{1} }}", prop_key, prop_value);
                string prop = string.Format("\"{0}\":{1}", kv.Key, obj);
                props.Add(prop);
            }

            string jsValue = "{" + string.Join(",", props) + "}";

            return jsValue;
        }

        /// <summary>
        /// Serialize Enum.
        /// </summary>
        /// <param name="tenum"></param>
        /// <returns></returns>
        public static string ExecuteSimple(Type tenum)
        {
            Dictionary<string, int> dic = ToDictionnary(tenum);

            List<string> props = new List<string>(dic.Count);
            foreach (var kv in dic)
            {
                props.Add(string.Format("\"{0}\":{1}", kv.Key, kv.Value));
            }

            string jsValue = "{" + string.Join(",", props) + "}";

            return jsValue;
        }

        /// <summary>
        /// To Dictionnary
        /// </summary>
        /// <param name="tenum"></param>
        /// <returns></returns>
        private static Dictionary<string, int> ToDictionnary(Type tenum)
        {
            if (tenum.IsEnum == false)
            {
                throw new ArgumentException("It is not 'Enum'");
            }

            string[] names = Enum.GetNames(tenum);
            Dictionary<string, int> dic = new System.Collections.Generic.Dictionary<string, int>(names.Length);

            foreach (string n in names)
            {
                int value = Convert.ToInt32((Enum.Parse(tenum, n)));
                dic.Add(n, value);
            }
            return dic;
        }
    }
}
