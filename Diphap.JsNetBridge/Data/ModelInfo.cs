using Diphap.JsNetBridge.Common;
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
        public void Execute(EnumScript choice)
        {
            this.Classes.Clear();
            List<RecursiveTypeSorter> serializeTypes = new List<RecursiveTypeSorter>();
            List<Type> unresolvedTypes;

            #region "First Pass"
            unresolvedTypes = ModelInfo.ExecuteCore(choice, this.Types, this.Classes, _JSNamespace, ref serializeTypes);
            #endregion

            #region "2nd Pass: For recursive issues"
            unresolvedTypes = ModelInfo.ExecuteCore(choice, unresolvedTypes, this.Classes, _JSNamespace, ref serializeTypes);
            #endregion

        }

        /// <summary>
        /// Creates oldClasses from Types. Memorise all [RecursiveTypeSorter] in list.
        /// </summary>
        /// <param name="choice"></param>
        /// <param name="tobjArray"></param>
        /// <param name="JSNamespace"></param>
        /// <param name="rTypeSorters"></param>
        /// <param name="classes"></param>
        /// <returns></returns>
        static private List<Type> ExecuteCore(EnumScript choice, List<Type> tobjArray, List<Dictionary<Type, TypeSorter>> classes, ConfigJS.JSNamespace JSNamespace, ref List<RecursiveTypeSorter> rTypeSorters)
        {
            do
            {
                //-- create each class.
            }
            while (AddClass(choice, tobjArray, classes, JSNamespace, ref rTypeSorters));

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
        /// <param name="choice"></param>
        /// <param name="allTypes"></param>
        /// <param name="oldClasses"></param>
        /// <param name="JSNamespace"></param>
        /// <param name="serializeTypes"></param>
        /// <returns></returns>
        private static bool AddClass(EnumScript choice, List<Type> allTypes, List<Dictionary<Type, TypeSorter>> oldClasses, ConfigJS.JSNamespace JSNamespace, ref List<RecursiveTypeSorter> serializeTypes)
        {
            RecursiveTypeSorter st = new RecursiveTypeSorter(choice);
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
        public string ToJSCore(string regionName = "Model")
        {
            //-- sort types of oldClasses.
            this.Execute(EnumScript.JS);

            List<string> jsInstructions = new List<string>();

            jsInstructions.Add(JSRaw.Region.Begin(regionName));

            //-- Create Namespaces
            jsInstructions.AddRange(CreateNamespaces());

            //-- Create Aliases of ns.
            jsInstructions.AddRange(CreateAliases());

            //-- Declaration of objects.
            //-- ex: _alias0.LoginModel = _alias0.LoginModel || function () { var args = Array.prototype.slice.call(arguments); var obj = { "UserName": "", "Password": "", "RememberMe": false }; obj.constructor = _alias0.LoginModel; return obj; };
            jsInstructions.AddRange(this.CreateJsObjectDeclaration(true));

            jsInstructions.Add(JSRaw.Region.End());

            return string.Join("\r\n", jsInstructions);

        }

        /// <summary>
        /// Code TS of factories of c# oldClasses.
        /// There is not 'JSArrayFactory'
        /// </summary>
        /// <returns></returns>
        public string ToTSCore()
        {
            //-- sort types of oldClasses.
            this.Execute(EnumScript.TS);

            Dictionary<string, List<TypeSorter>> groups_by_ns = new Dictionary<string, List<TypeSorter>>();

            foreach (var dic in this.Classes)
            {
                foreach (var kv in dic)
                {
                    var ns = kv.Value.GetScriptNamespace_Full();
                    if (groups_by_ns.ContainsKey(ns))
                    {
                        groups_by_ns[ns].Add(kv.Value);
                    }
                    else
                    {
                        var list = new List<TypeSorter>();
                        list.Add(kv.Value);
                        groups_by_ns.Add(ns, list);
                    }

                }
            }

            StringBuilder scriptInstructions = new StringBuilder();

            scriptInstructions.AppendLine(
@"declare namespace $dp.$shared {
    interface $Array<T> extends Array<T> {
        $dpItemFactory(): T;
    }
}");

            foreach (var kv in groups_by_ns)
            {
                //--ex: declare namespace $dp.$JsNet.ContosoUniversity.Models {
                scriptInstructions.AppendLine("declare namespace {name} {".Replace("{name}", kv.Key /*namespace*/));

                scriptInstructions.AppendLine(JSRaw.Region.Begin("interfaces"));
                foreach (var typeSorter in kv.Value)
                {
                    // interface Enrollment
                    // { EnrollmentID: number, CourseID: number, PersonID: number, Grade: number, Student: Student, Course: Course }
                    scriptInstructions.AppendLine("interface {name}".Replace("{name}", TypeHelper.GetName(typeSorter.TObj)/*model name*/));
                    scriptInstructions.AppendLine(typeSorter.JSValue);
                }
                scriptInstructions.AppendLine(JSRaw.Region.End());

                scriptInstructions.AppendLine(JSRaw.Region.Begin("functions"));
                foreach (var typeSorter in kv.Value)
                {
                    //-- var OfficeAssignment: () => $dp.$JsNet.ContosoUniversity.Models.OfficeAssignment;
                    scriptInstructions.AppendLine("var {model_name}: () => {model_fullname};"
                        .Replace("{model_name}", TypeHelper.GetName(typeSorter.TObj))
                        .Replace("{model_fullname}", kv.Key + "." + TypeHelper.GetName(typeSorter.TObj)));
                }
                scriptInstructions.AppendLine(JSRaw.Region.End());

                scriptInstructions.AppendLine("}");
            }

            return scriptInstructions.ToString();

        }

        /// <summary>
        /// function declaration
        /// ex: _alias0.LoginModel = _alias0.LoginModel || function () { var args = Array.prototype.slice.call(arguments); var obj = { "UserName": "", "Password": "", "RememberMe": false }; obj.constructor = _alias0.LoginModel; return obj; };
        /// </summary>
        /// <param name="withAlias"></param>
        /// <returns></returns>
        private List<string> CreateJsObjectDeclaration(bool withAlias)
        {
            List<string> funcDecl_Array = new List<string>();
            foreach (var dic in Classes)
            {
                foreach (var kv in dic)
                {
                    {
                        string funcDecl = ScriptHelper.GetInstance(EnumScript.JS).GetFactoryDeclaration(
                            kv.Key,
                            kv.Value.JSValue,
                            true,
                            _JSNamespace.GetObjectFullName(kv.Key, withAlias));
                        funcDecl_Array.Add(funcDecl);
                    }
                }
            }
            return funcDecl_Array;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public List<string> CreateNamespaces()
        {
            List<string> createdNamespaces = new List<string>();
            foreach (var dic in Classes)
            {
                foreach (var kv in dic)
                {
                    createdNamespaces.AddRange(ScriptHelper.GetInstance(EnumScript.JS).CreateNamespace(ConfigJS.JSNamespace.GetObjectFullName(kv.Key)));
                }
            }
            List<string> jsInstructions = new List<string>();
            //-- namespace
            //-- ex: $dp.$JsNet.ContosoUniversity = $dp.$JsNet.ContosoUniversity || {};
            foreach (var ns in createdNamespaces)
            {
                if (jsInstructions.Contains(ns) == false)
                {
                    jsInstructions.Add(ns);
                }
            }

            return jsInstructions;
        }

        /// <summary>
        /// Create aliases.
        /// </summary>
        /// <returns></returns>
        public List<string> CreateAliases()
        {
            List<string> jsInstructions_ = new List<string>();

            IEnumerable<Type> types_temp = this.Classes.SelectMany(dic => dic.Keys);

            //-- add alias in global variable 'NamespaceAliasDic'
            _JSNamespace.AddRangeAlias(types_temp);

            //-- alias of namespace
            //-- ex: var _alias0 = $dp.$JsNet.ContosoUniversity.Models;
            jsInstructions_.AddRange(_JSNamespace.ToJSInstructions(types_temp));

            return jsInstructions_;
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
                    sb.AppendLine(JSRaw.actionHelper);
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
        /// <summary>
        /// Generates file script
        /// </summary>
        /// <param name="jsFilePath"></param>
        /// <param name="withJsFileDependencies"></param>
        public void WriteAllText(string jsFilePath, bool withJsFileDependencies = true)
        {
            File.WriteAllText(jsFilePath, this.ToJS(withJsFileDependencies));
        }

        /// <summary>
        /// Generates file script
        /// </summary>

        /// <param name="jsFilePath"></param>
        /// <param name="withJsFileDependencies"></param>
        public void AppendAllText(string jsFilePath, bool withJsFileDependencies = true)
        {
            File.AppendAllText(jsFilePath, this.ToJS(withJsFileDependencies));
        }

    }
}
