using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Diphap.JsNetBridge
{
    public class ConfigJS
    {
        /// <summary>
        /// JS ENUM Intellisense.
        /// </summary>
        public static string VS_JsEnumKeyValue
        {
            get
            {
                return (true ? null : "\"__enum\":true,");
            }
        }
        /// <summary>
        /// JS ENUM Intellisense.
        /// </summary>
        public static string VS_JsEnumKeyValue_instruction(string objName)
        {
            return (true ? null : string.Format("{0}.__enum = true;", objName));
        }

        public const string brandLetter = "$";

        public const string prefixe_ns_dp = ConfigJS.brandLetter + "dp";

        public const string prefix_ns_jsnet = ConfigJS.prefixe_ns_dp + "." + brandLetter + "JsNet";

        public const string url_set = ConfigJS.prefix_ns_jsnet + "." + brandLetter + "UrlSet";

        public const string stampFunc = "_stampFunc";

        public static readonly string stampFuncInstruction = string.Format("var {0} = function() {{ return {1}; }};", stampFunc, ConfigJS.prefix_ns_jsnet);

        public static string prefix_apiController = brandLetter + "api";

        public class JSNamespace
        {
            private static string prefixAliax = "_alias";

            private readonly Dictionary<string, string> NamespaceAliasDic = new Dictionary<string, string>();

            /// <summary>
            /// full name of object.
            /// </summary>
            /// <param name="t"></param>
            /// <returns></returns>
            public string GetObjectFullName(Type t, bool alias)
            {
                string objFullname = this.GetNamespaceAliasOrDefault(t, alias) + "." + TypeHelper.GetName(t);
                return objFullname;
            }

            public void ClearAlias()
            {
                NamespaceAliasDic.Clear();
            }

            public string GetNamespaceAliasOrDefault(Type t, bool alias)
            {
                return alias && NamespaceAliasDic.ContainsKey(ConfigJS.JSNamespace.GetPseudoNamespace(t)) ?
                    NamespaceAliasDic[ConfigJS.JSNamespace.GetPseudoNamespace(t)] :
                    ConfigJS.prefix_ns_jsnet + "." + ConfigJS.JSNamespace.GetPseudoNamespace(t);
            }

            /// <summary>
            /// full name of object.
            /// </summary>
            /// <param name="t"></param>
            /// <returns></returns>
            static public string GetObjectFullName(Type t)
            {
                string objFullname = GetNamespace(t) + "." + TypeHelper.GetName(t);
                return objFullname;
            }

            static public string GetNamespace(Type t)
            {
                return ConfigJS.prefix_ns_jsnet + "." + ConfigJS.JSNamespace.GetPseudoNamespace(t);
            }

            /// <summary>
            /// [For JS]If t.IsNested, so t.Namespace + "." + t.DeclaringType.Name.
            /// </summary>
            /// <param name="t"></param>
            /// <returns></returns>
            public static string GetPseudoNamespace(Type t)
            {
                string ns = t.Namespace;

                if (t.IsNested)
                {
                    ns = ns + "." + ConfigJS.brandLetter + "JsNs" + ConfigJS.brandLetter + "_" + t.DeclaringType.Name;
                }

                return ns;
            }

            public void AddRangeAlias(IEnumerable<Type> types)
            {

                foreach (var t in types)
                {
                    if (NamespaceAliasDic.ContainsKey(GetPseudoNamespace(t)) == false)
                    {
                        NamespaceAliasDic.Add(GetPseudoNamespace(t), prefixAliax + NamespaceAliasDic.Count.ToString());
                    }
                }
            }

            public Dictionary<string, string> GetNamespaceAliasDic(IEnumerable<Type> types)
            {
                Dictionary<string, string> nsAliasDic = new Dictionary<string, string>();
                foreach (var t in types)
                {
                    if (nsAliasDic.ContainsKey(GetPseudoNamespace(t)) == false)
                    {
                        if (NamespaceAliasDic.ContainsKey(GetPseudoNamespace(t)) == true)
                        {
                            nsAliasDic.Add(GetPseudoNamespace(t), NamespaceAliasDic[GetPseudoNamespace(t)]);
                        }
                    }
                }
                return nsAliasDic;
            }

            /// <summary>
            /// ex: var _alias0 = $dp.$JsNet.ContosoUniversity.Models;
            /// </summary>
            /// <param name="kv"></param>
            /// <returns></returns>
            private static string ToJSInstruction(KeyValuePair<string, string> kv)
            {
                return string.Format("var {0} = {1};", kv.Value, ConfigJS.prefix_ns_jsnet + "." + kv.Key);
            }

            /// <summary>
            /// ex: var _alias0 = $dp.$JsNet.ContosoUniversity.Models;
            /// </summary>
            /// <param name="nsAliasDic"></param>
            public static IList<string> ToJSInstructions(Dictionary<string, string> nsAliasDic)
            {
                IList<string> nsDecl_Array = new List<string>();
                foreach (var kv in nsAliasDic)
                {
                    nsDecl_Array.Add(ToJSInstruction(kv));
                }
                return nsDecl_Array;
            }

            /// <summary>
            /// ex: var _alias0 = $dp.$JsNet.ContosoUniversity.Models;
            /// </summary>
            /// <param name="types"></param>
            /// <returns></returns>
            public IList<string> ToJSInstructions(IEnumerable<Type> types)
            {
                Dictionary<string, string> nsAliasDic = this.GetNamespaceAliasDic(types);
                return ToJSInstructions(nsAliasDic);
            }

            /// <summary>
            /// ex: var _alias0 = $dp.$JsNet.ContosoUniversity.Models;
            /// </summary>
            /// <param name="sb"></param>
            /// <returns></returns>
            public StringBuilder ToJSInstructions(StringBuilder sb = null)
            {
                if (sb == null) { sb = new StringBuilder(); }

                foreach (var kv in NamespaceAliasDic)
                {
                    sb.AppendLine(ToJSInstruction(kv));
                }
                return sb;
            }

        }


    }
}
