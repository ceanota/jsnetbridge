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


        public static class JSNamespace
        {
            private static string prefixAliax = "_alias";

            private static readonly Dictionary<string, string> NamespaceAliasDic = new Dictionary<string, string>();

            public static void ClearAlias()
            {
                NamespaceAliasDic.Clear();
            }

            public static string GetNamespaceAliasOrDefault(Type t, bool alias)
            {
                return alias && NamespaceAliasDic.ContainsKey(ConfigJS.JSNamespace.GetPseudoNamespace(t)) ? NamespaceAliasDic[ConfigJS.JSNamespace.GetPseudoNamespace(t)] : ConfigJS.prefix_ns_jsnet + "." + ConfigJS.JSNamespace.GetPseudoNamespace(t);
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

            public static void AddRangeAlias(IEnumerable<Type> types)
            {
                foreach (var t in types)
                {
                    if (NamespaceAliasDic.ContainsKey(GetPseudoNamespace(t)) == false)
                    {
                        NamespaceAliasDic.Add(GetPseudoNamespace(t), prefixAliax + NamespaceAliasDic.Count.ToString());
                    }
                }
            }

            public static void AddRangeJSInstructions(IList<string> nsDecl_Array)
            {
                foreach (var kv in NamespaceAliasDic)
                {
                    nsDecl_Array.Add(string.Format("var {0} = {1};", kv.Value, ConfigJS.prefix_ns_jsnet + "." + kv.Key));
                }

            }

            public static StringBuilder ToJSInstructions(StringBuilder sb = null)
            {
                if (sb == null) { sb = new StringBuilder(); }

                foreach (var kv in NamespaceAliasDic)
                {
                    sb.AppendLine(string.Format("var {0} = {1};", kv.Value, ConfigJS.prefix_ns_jsnet + "." + kv.Key));
                }
                return sb;
            }

        }


    }
}
