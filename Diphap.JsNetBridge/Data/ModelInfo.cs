using Diphap.JsNetBridge.Common.JS;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Diphap.JsNetBridge.Data
{
    /// <summary>
    /// Convert several types to JS.
    /// </summary>
    public class ModelInfo
    {
        private readonly ConfigJS.JSNamespace _JSNamespace;
        #region "Constructors"
        public ModelInfo(List<Type> allTypes, ConfigJS.JSNamespace JSNamespace)
        {
            this.Types = allTypes;
            this._JSNamespace = JSNamespace;
        }

        public ModelInfo(ConfigJS.JSNamespace JSNamespace, params Type[] allTypes)
            : this(allTypes.ToList(), JSNamespace)
        {

        }

        public ModelInfo(params Type[] allTypes)
            : this(allTypes.ToList(), new ConfigJS.JSNamespace())
        {

        }

        public ModelInfo(string appAspNetPath, IList<string> whiteNamespaces, IList<string> blackNamespaces, ConfigJS.JSNamespace JSNamespace)
            : this(TypeHelper.GetTypesOfClass(appAspNetPath, whiteNamespaces, blackNamespaces), JSNamespace)
        {

        }

        public ModelInfo(string appAspNetPath, ConfigJS.JSNamespace JSNamespace)
        {
            this.Types = TypeHelper.GetTypesOfClass(appAspNetPath, new string[] { }, new string[] { });
            this._JSNamespace = JSNamespace;
        }
        #endregion

        /// <summary>
        /// Classes of dependencies. In a class, all types together no dependencies.
        /// </summary>
        private readonly List<Dictionary<Type, TypeSorter>> Classes = new List<Dictionary<Type, TypeSorter>>(20);
        public readonly List<Type> Types;


        /// <summary>
        /// Sort types.
        /// </summary>
        public void Execute()
        {
            this.Classes.Clear();
            List<RecursiveTypeSorter> serializeTypes = new List<RecursiveTypeSorter>();
            List<Type> unresolvedTypes;

            #region "First Pass"
            unresolvedTypes = ModelInfo.ExecuteCore(this.Types, this.Classes, _JSNamespace, ref serializeTypes);
            #endregion

            #region "2nd Pass: For recursive issues"
            unresolvedTypes = ModelInfo.ExecuteCore(unresolvedTypes, this.Classes, _JSNamespace, ref serializeTypes);
            #endregion

        }

        /// <summary>
        /// Creates oldClasses from Types. Memorise all [RecursiveTypeSorter] in list.
        /// </summary>
        /// <param name="tobjArray"></param>
        /// <param name="oldClasses"></param>
        /// <param name="JSNamespace"></param>
        /// <param name="rTypeSorters"></param>
        /// <param name="classes"></param>
        /// <returns></returns>
        static private List<Type> ExecuteCore(List<Type> tobjArray, List<Dictionary<Type, TypeSorter>> classes, ConfigJS.JSNamespace JSNamespace, ref List<RecursiveTypeSorter> rTypeSorters)
        {
            do
            {
                //-- create each class.
            }
            while (AddClass(tobjArray, classes, JSNamespace, ref rTypeSorters));

            #region "unresolvedTypes"
            List<Type> unresolvedTypes;
            {
                Type[] resolvedTypes = classes.SelectMany(x => x.Keys).ToArray();
                Type[] allTypes = rTypeSorters.Where(x => x.Context_global != null).SelectMany(x => x.Context_global.Occurences.Keys).ToArray();
                unresolvedTypes = allTypes.Except(resolvedTypes).ToList();
            }
            #endregion

            return unresolvedTypes;
        }

        /// <summary>
        /// Add a new class for unresolved types, in old classes. Memorize all [RecursiveTypeSorter] in list.
        /// </summary>
        /// <param name="allTypes"></param>
        /// <param name="oldClasses"></param>
        /// <param name="JSNamespace"></param>
        /// <param name="serializeTypes"></param>
        /// <returns></returns>
        private static bool AddClass(List<Type> allTypes, List<Dictionary<Type, TypeSorter>> oldClasses, ConfigJS.JSNamespace JSNamespace, ref List<RecursiveTypeSorter> serializeTypes)
        {
            RecursiveTypeSorter st = new RecursiveTypeSorter();
            serializeTypes.Add(st);

            st.TypesToIgnore.AddRange(oldClasses.SelectMany(kv => kv.Keys));

            IList<Type> allTypesTemp = allTypes.Where(t => st.TypesToIgnore.Contains(t) == false).ToArray();

            foreach (Type t in allTypesTemp)
            {
                st.Execute(t, true, JSNamespace);
            }

            var cl = st.ResolvedTypes.ToDictionary(kv => kv.Key, kv => kv.Value);

            if (cl.Count > 0)
            {
                oldClasses.Add(cl);
            }

            return cl.Count > 0;

        }

        /// <summary>
        /// Code JS of factories of c# oldClasses.
        /// There is not 'JSArrayFactory'
        /// </summary>
        /// <returns></returns>
        public string ToJSCore()
        {
            //-- sort types of oldClasses.
            this.Execute();


            List<string> nsDecl_Array = new List<string>();
            List<string> funcDecl_Array = new List<string>();
            List<string> createdNamespaces = new List<string>();

            foreach (var dic in Classes)
            {
                foreach (var kv in dic)
                {
                    {
                        createdNamespaces.AddRange(JSHelper.CreateNamespace(_JSNamespace.GetObjectFullName(kv.Key, false)));
                    }
                    {
                        string funcDecl = JSHelper.GetFactoryDeclaration(kv.Key, kv.Value.JSValue, true, 
                            _JSNamespace.GetObjectFullName(kv.Key, true));
                        funcDecl_Array.Add(funcDecl);
                    }
                }
            }

            //-- namespace
            //-- ex: $dp.$JsNet.ContosoUniversity = $dp.$JsNet.ContosoUniversity || {};
            foreach (var ns in createdNamespaces)
            {
                if (nsDecl_Array.Contains(ns) == false)
                {
                    nsDecl_Array.Add(ns);
                }
            }

            {
                IEnumerable<Type> types_temp = this.Classes.SelectMany(dic => dic.Keys);

                //-- add alias in global variable 'NamespaceAliasDic'
                _JSNamespace.AddRangeAlias(types_temp);

                //-- alias of namespace
                //-- ex: var _alias0 = $dp.$JsNet.ContosoUniversity.Models;
                nsDecl_Array.AddRange(_JSNamespace.ToJSInstructions(types_temp));
            }


            //-- function declaration
            //-- ex: _alias0.LoginModel = _alias0.LoginModel || function () { var args = Array.prototype.slice.call(arguments); var obj = { "UserName": "", "Password": "", "RememberMe": false }; obj.constructor = _alias0.LoginModel; return obj; };
            nsDecl_Array.AddRange(funcDecl_Array);

            nsDecl_Array.Insert(0, JSRaw.Region.Begin("Model"));
            nsDecl_Array.Add(JSRaw.Region.End());

            return string.Join("\r\n", nsDecl_Array);

        }

        public static string ToJSTemplate(Func<StringBuilder, object> ToJSCore, bool withJsFileDependencies = true)
        {
            StringBuilder sb = new StringBuilder();
            sb.AppendLine(JSRaw.AnynomousModule.Begin);
            {
                if (withJsFileDependencies)
                {
                    #region "js files depedencies"
                    sb.AppendLine(JSRaw.arrayFactory);
                    sb.AppendLine(JSRaw.circularReferenceManagerFactory);
                    sb.AppendLine(JSRaw.getUrlFromTemplate);
                    #endregion
                }

                sb.AppendLine(JSRaw.AnynomousModule.Begin);
                {
                    sb.AppendLine(JSRaw.CheckingDependencies);
                    sb.AppendLine(ConfigJS.stampFuncInstruction);

                    #region "Core"
                    sb.AppendLine(JSRaw.AnynomousModule.Begin);
                    ToJSCore(sb);
                    sb.AppendLine(JSRaw.AnynomousModule.End);
                    #endregion
                }

                sb.AppendLine(JSRaw.AnynomousModule.End);
            }
            sb.AppendLine(JSRaw.AnynomousModule.End);

            return sb.ToString();
        }

        /// <summary>
        /// All code js.
        /// </summary>
        /// <param name="withJsFileDependencies"></param>
        /// <returns></returns>
        public string ToJS(bool withJsFileDependencies = true)
        {
            Func<StringBuilder, object> f = 
                (sb) => { sb.AppendLine(this.ToJSCore()); return null; };
            return ToJSTemplate(f, withJsFileDependencies);
        }

        public void WriteAllText(string jsFilePath)
        {
            File.WriteAllText(jsFilePath, this.ToJS());
        }

        public void AppendAllText(string jsFilePath)
        {
            File.AppendAllText(jsFilePath, this.ToJS());
        }

    }
}
