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
            this.Types_In = allTypes;
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
            this.Types_In = TypeHelper.GetTypesOfClass(appAspNetPath, new string[] { }, new string[] { });
            this._JSNamespace = JSNamespace;
        }
        #endregion

        /// <summary>
        /// Classes of dependencies. In a class, all types together no dependencies.
        /// </summary>
        private readonly List<Dictionary<Type, TypeSorter_>> Classes = new List<Dictionary<Type, TypeSorter_>>(0);
        public readonly List<Type> Types_In;

        public readonly HashSet<Type> found_complex_types = new HashSet<Type>();

        /// <summary>
        /// Sort types.
        /// </summary>
        /// <param name="force">force reexecuting</param>
        public void SortTypesInClasses(bool force = false)
        {
            if (force)
            {
                this.Classes.Clear();
            }

            if (this.Classes.Count == 0)
            {
                List<RecursiveTypeDependanceSorter> serializeTypes = new List<RecursiveTypeDependanceSorter>();
                List<Type> unresolvedTypes;

                #region "First Pass"
                unresolvedTypes = ModelInfo.ExecuteCore(this.Types_In, this.Classes, _JSNamespace, ref serializeTypes);
                #endregion

                #region "2nd Pass: For recursive issues"
                unresolvedTypes = ModelInfo.ExecuteCore(unresolvedTypes, this.Classes, _JSNamespace, ref serializeTypes);
                #endregion

                #region ""
                this.found_complex_types.Clear();

                foreach (var dic in this.Classes)
                {
                    foreach (var kv in dic)
                    {
                        if (this.found_complex_types.Contains(kv.Value.TObj) == false)
                        {
                            this.found_complex_types.Add(kv.Value.TObj);
                        }
                    }
                }
                #endregion
            }
        }

        /// <summary>
        /// Creates oldClasses from Types. Memorise all [RecursiveTypeSorter] in list.
        /// </summary>
        /// <param name="tobjArray_In"></param>
        /// <param name="JSNamespace"></param>
        /// <param name="rTypeSorters"></param>
        /// <param name="classes"></param>
        /// <returns></returns>
        static private List<Type> ExecuteCore(List<Type> tobjArray_In, List<Dictionary<Type, TypeSorter_>> classes, ConfigJS.JSNamespace JSNamespace, ref List<RecursiveTypeDependanceSorter> rTypeSorters)
        {
            do
            {
                //-- create each class.
            }
            while (AddClass(tobjArray_In, classes, JSNamespace, ref rTypeSorters));

            #region "unresolvedTypes"
            List<Type> unresolvedTypes;
            {
                Type[] resolvedTypes = classes.SelectMany(x => x.Keys).ToArray();
                Type[] allTypes = rTypeSorters.SelectMany(r => r.OccurencesOfDependanceType_All.Keys).ToArray();
                unresolvedTypes = allTypes.Except(resolvedTypes).ToList();
            }
            #endregion

            return unresolvedTypes;
        }

        /// <summary>
        /// Add a new class for unresolved types, in old classes. Memorize all [RecursiveTypeSorter] in list.
        /// </summary>
        /// <param name="allTypes_In"></param>
        /// <param name="oldClasses"></param>
        /// <param name="JSNamespace"></param>
        /// <param name="serializeTypes"></param>
        /// <returns></returns>
        private static bool AddClass(List<Type> allTypes_In, List<Dictionary<Type, TypeSorter_>> oldClasses, ConfigJS.JSNamespace JSNamespace, ref List<RecursiveTypeDependanceSorter> serializeTypes)
        {
            var typesToIgnore_temp = oldClasses.SelectMany(kv => kv.Keys).ToArray();
            var types_toResolve_In = allTypes_In.Where(t => typesToIgnore_temp.Contains(t) == false).ToArray();

            if (types_toResolve_In.Length  > 0)
            {
                RecursiveTypeDependanceSorter st = new RecursiveTypeDependanceSorter();
                serializeTypes.Add(st);
                st.TypesToIgnore.AddRange(typesToIgnore_temp);

                foreach (Type t_in in types_toResolve_In)
                {
                    //-- sorts dependances.
                    st.Execute(t_in, true, JSNamespace);
                }

                var cl = st.ResolvedTypes.ToDictionary(kv => kv.Key, kv => kv.Value);

                if (cl.Count > 0)
                {
                    oldClasses.Add(cl);
                }

                return cl.Count > 0;

            }else
            {
                return false;
            }


        }

        /// <summary>
        /// Code JS of factories of c# oldClasses.
        /// There is not 'JSArrayFactory'
        /// </summary>
        /// <returns></returns>
        public string ToJSCore(string regionName = "Model")
        {
            var st = System.Diagnostics.Stopwatch.StartNew();

            //-- sort types of oldClasses.
            this.SortTypesInClasses();

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

            st.Stop();

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
            this.SortTypesInClasses();

            Dictionary<string, List<TypeSorter_>> groups_by_ns = new Dictionary<string, List<TypeSorter_>>();

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
                        var list = new List<TypeSorter_>();
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
                    var ts_out = TypeSorter_Script.GetInstance(EnumScript.TS, typeSorter, _JSNamespace);
                    scriptInstructions.AppendLine(ts_out.ScriptValue(this.found_complex_types));
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
                        var ts_out = TypeSorter_Script.GetInstance(EnumScript.JS, kv.Value, _JSNamespace);
                        string funcDecl = ScriptHelper.GetInstance(EnumScript.JS).GetFactoryDeclaration(
                            kv.Key,
                            ts_out.ScriptValue(this.found_complex_types),
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
            sb.AppendLine(JSRaw.AnonymousModule.Begin);
            {
                if (withJsFileDependencies)
                {
                    #region "js files depedencies"
                    sb.AppendLine(JSRaw.arrayFactory);
                    sb.AppendLine(JSRaw.circularReferenceManagerFactory);
                    sb.AppendLine(JSRaw.actionHelper);
                    #endregion
                }

                sb.AppendLine(JSRaw.AnonymousModule.Begin);
                {
                    sb.AppendLine(JSRaw.CheckingDependencies);
                    sb.AppendLine(ConfigJS.stampFuncInstruction);

                    #region "Core"
                    sb.AppendLine(JSRaw.AnonymousModule.Begin);
                    ToJSCore(sb);
                    sb.AppendLine(JSRaw.AnonymousModule.End);
                    #endregion
                }

                sb.AppendLine(JSRaw.AnonymousModule.End);
            }
            sb.AppendLine(JSRaw.AnonymousModule.End);

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
