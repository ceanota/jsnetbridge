using Diphap.JsNetBridge.Common;
using Diphap.JsNetBridge.Common.JS;
using Diphap.JsNetBridge.Data;
using Diphap.JsNetBridge.Data.Enum;
using Diphap.JsNetBridge.Mvc.Proxy;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;

namespace Diphap.JsNetBridge.Mvc
{

    /// <summary>
    /// Information on AspMvc application.
    /// </summary>
    public class AspMvcInfo
    {
        #region "Constants"
        public static TypesOfAspNetSetBaseMvc TypesOfAspNetSetMvc { get; private set; }
        public static TypesOfAspNetSetBaseWebApi TypesOfAspNetSetWebApi { get; private set; }
        #endregion

        #region "Internal"
        /// <summary>
        /// allTypes of models
        /// </summary>
        internal List<Type> Types_Model { get; private set; }

        /// <summary>
        /// allTypes of Enum.
        /// </summary>
        internal List<Type> Types_Enum { get; private set; }

        /// <summary>
        /// allTypes of controller.
        /// </summary>
        internal List<Type> Types_Controller { get; private set; }
        #endregion

        private ConfigJS.JSNamespace _JSNamespace;

        private void InitiliazeForAspNetObjects(Assembly asp_net)
        {
            Type type_obj = typeof(System.Object);
            Type type_type = typeof(System.Type);

            Type[] types;
            try
            {
                types = asp_net.GetExportedTypes();
            }
            catch (ReflectionTypeLoadException ex)
            {
                foreach (var excep in ex.LoaderExceptions)
                {
                    System.Console.WriteLine(excep.Message);
                }
                throw ex;
            }
            catch (Exception)
            {

                throw;
            }


            this.Types_Model = TypeHelper.GetCustomTypes(types
                .Where(t => t.FullName.Contains(".Models")
                    && (t.BaseType == type_obj || t.BaseType == null || (t.BaseType.FullName != null && t.BaseType.FullName.Contains("System.") == false))).ToArray(),
                new string[] { }, new string[] { }).ToList();

            this.Types_Enum = TypeHelper.GetTypesOfEnum(types, new string[] { }, new string[] { });

            this.Types_Controller = types.Where(t => t.Name.Contains("Controller")).ToList();

            //-- Parameter and return types of action method.
            foreach (Type t in this.AllInOutClassTypes())
            {
                if (this.Types_Model.Contains(t) == false)
                {
                    //-- add Type which is not Collection.
                    this.Types_Model.Add(t);
                }
            }

            //-- Parameter and return types of action method.
            foreach (Type t in this.ParameterEnumTypes())
            {
                if (this.Types_Enum.Contains(t) == false)
                {
                    //-- add Type which is not Collection.
                    this.Types_Enum.Add(t);
                }
            }


            {
                _JSNamespace.ClearAlias();

                _JSNamespace.AddRangeAlias(this.Types_Model);
                _JSNamespace.AddRangeAlias(this.Types_Enum);
                _JSNamespace.AddRangeAlias(this.Types_Controller);
            }

        }

        readonly public AssemblyResolver AssemblyResolver;

        private void InitializeCore(Assembly asp_net, IList<AssemblySet> typeSetList, AssemblyResolver ar, bool isAspNetCoreWindows)
        {
            this.IsAspNetCoreWindows = isAspNetCoreWindows;

            _JSNamespace = new ConfigJS.JSNamespace();

            if (isAspNetCoreWindows)
            {
                //-- AspNetCore.

                AspMvcInfo.TypesOfAspNetSetMvc = new TypesOfAspNetSetBaseMvc(new AssemblyInfoWrapperCoreMvc(ar, new AssemblyInfoWrapperBaseMvc_FormattersJson(ar), new AssemblyInfoWrapperBaseMvc_ViewFeatures(ar)));
                AspMvcInfo.TypesOfAspNetSetWebApi = new TypesOfAspNetSetBaseWebApi(new AssemblyInfoWrapperCoreWebApi_NetHttp() /* is useless */,
                    new AssemblyInfoWrapperCoreWebApi_WebHttp(AspMvcInfo.TypesOfAspNetSetMvc.TMvc /*the same assembly*/, new AssemblyInfoWrapperBaseWebApi_Abstractions(ar)));
            }
            else
            {
                //-- AspNet.

                AspMvcInfo.TypesOfAspNetSetMvc = new TypesOfAspNetSetBaseMvc(new AssemblyInfoWrapperMvc(ar));
                var TNetHttp = new AssemblyInfoWrapperWebApi_NetHttp(ar);
                AspMvcInfo.TypesOfAspNetSetWebApi = new TypesOfAspNetSetBaseWebApi(TNetHttp, new AssemblyInfoWrapperWebApi_WebHttp(ar, TNetHttp));
            }


            InitiliazeForAspNetObjects(asp_net);

            foreach (var f in typeSetList)
            {
                foreach (var t in f.Types_Model)
                {
                    if (this.Types_Model.Contains(t) == false)
                    {
                        this.Types_Model.Add(t);
                    }
                }

                foreach (var t in f.Types_Enum)
                {
                    if (this.Types_Enum.Contains(t) == false)
                    {
                        this.Types_Enum.Add(t);
                    }
                }

            }
        }

        /// <summary>
        /// IsAspNetCoreWindows
        /// </summary>
        public bool IsAspNetCoreWindows { get; private set; }

        /// <summary>
        /// Instanciate information about AspMvc Application.
        /// </summary>
        /// <param name="asp_net"></param>
        /// <param name="typeSetList"></param>
        /// <param name="isAspNetCoreWindows"></param>
        /// <returns></returns>
        public AspMvcInfo(Assembly asp_net, IList<AssemblySet> typeSetList, bool isAspNetCoreWindows = false)
        {
            this.AssemblyResolver = new AssemblyResolver(Path.GetDirectoryName(asp_net.Location));

            InitializeCore(asp_net, typeSetList, this.AssemblyResolver, isAspNetCoreWindows);
        }

        /// <summary>
        /// Instanciate information about AspMvc Application.
        /// </summary>
        /// <param name="appAspNetPath"></param>
        /// <param name="typeSetList"></param>
        /// <param name="isAspNetCoreWindows"></param>
        /// <returns></returns>
        public AspMvcInfo(string appAspNetPath, IList<AssemblySet> typeSetList, bool isAspNetCoreWindows = false)
        {
            this.AssemblyResolver = new AssemblyResolver(Path.GetDirectoryName(appAspNetPath));
            Assembly asp_net = ReflectionLoader.LoadFrom(appAspNetPath, this.AssemblyResolver);

            InitializeCore(asp_net, typeSetList, this.AssemblyResolver, isAspNetCoreWindows);
        }

        /// <summary>
        /// Instanciate information about AspMvc Application.
        /// </summary>
        /// <param name="asp_net"></param>
        /// <param name="isAspNetCoreWindows"></param>
        /// <returns></returns>
        public AspMvcInfo(Assembly asp_net, bool isAspNetCoreWindows = false)
            : this(asp_net, new AssemblySet[] { }, isAspNetCoreWindows)
        {

        }



        /// <summary>
        /// Instanciate information about AspMvc Application.
        /// </summary>
        /// <param name="appAspNetPath"></param>
        /// <param name="typeSet"></param>
        /// <param name="isAspNetCoreWindows"></param>
        public AspMvcInfo(string appAspNetPath, AssemblySet typeSet, bool isAspNetCoreWindows = false)
            : this(appAspNetPath, new AssemblySet[] { typeSet }, isAspNetCoreWindows)
        {

        }

        /// <summary>
        /// Instanciate information about AspMvc Application.
        /// </summary>
        /// <param name="appAspNetPath"></param>
        /// <param name="isAspNetCoreWindows"></param>
        public AspMvcInfo(string appAspNetPath, bool isAspNetCoreWindows = false)
            : this(appAspNetPath, new AssemblySet[] { }, isAspNetCoreWindows)
        {

        }

        #region "Public"

        /// <summary>
        /// Creates file which contains ASP MVC object model. 
        /// </summary>
        /// <param name="jsFilePath"></param>
        public void WriteAllText(string jsFilePath)
        {
            File.WriteAllText(jsFilePath, this.ToJS(false), Encoding.UTF8);
        }

        public void AppendAllText(string jsFilePath)
        {
            File.AppendAllText(jsFilePath, this.ToJS(false));
        }

        /// <summary>
        /// Generates JS code.
        /// </summary>
        /// <param name="withJsFileDependencies"></param>
        /// <returns></returns>
        public string ToJS(bool withJsFileDependencies = true)
        {
            Func<StringBuilder, object> f = (sb) =>
            {
                sb.AppendLine(this.ModelInfo.ToJSCore());
                sb.AppendLine(this.EnumInfo.ToJSCore());
                sb.AppendLine(JSRaw.Region.Begin("UrlSet"));
                sb.AppendLine(string.Join("\r\n", ScriptHelper.GetInstance(EnumScript.JS).CreateNamespace(ConfigJS.url_set)));
                sb.AppendLine(string.Format("{0} = {1};", ConfigJS.url_set, this.UrlInfo.ToJS()));

                //-- alias
                sb.AppendLine("//-- alias");
                sb.AppendLine(string.Format("{0} = {1};", "window.$dpUrlSet", ConfigJS.url_set));
                sb.AppendLine(string.Format("{0} = {1};", "window.$dpLib", ConfigJS.prefix_ns_jsnet));
                sb.AppendLine(JSRaw.Region.End());
                return null;
            };
            return ModelInfo.ToJSTemplate(f, withJsFileDependencies);
        }

        /// <summary>
        /// Generates TS code.
        /// </summary>
        /// <param name="withJsFileDependencies"></param>
        /// <returns></returns>
        public string ToTS(bool withJsFileDependencies = true)
        {
            StringBuilder sb = new StringBuilder();

            string share =
@"declare namespace $dp.$JsNet.$Helpers.$Shared.$Action {

    interface $AjaxSettings {
        dataType: string,
        contentType: string,
        cache: boolean,
        type: string,
        method: string,
    }

    interface $httpMethodArray {
        $items: ArrayConstructor, $single: string, $first: string
    }

    interface $Names {
        action: string, controller: string, area: string
    }

    interface _$Action {
        $_Url: string,
        $GetUrl(routeData: Object): string,
        $GetRouteData(): Object,
        $Names: $Names,
        $Params(): {},
        $Return(): Object,
        $Enums(): Object,
        $IsApi: boolean,
        $httpMethodArray: $httpMethodArray,
        $AjaxSettings(): $AjaxSettings,
        $RouteTemplate: string,
    }

    function $ActionFactory(): _$Action;

}";
            sb.AppendLine(share);
            sb.AppendLine(this.ModelInfo.ToTSCore());
            sb.AppendLine(this.EnumInfo.ToTSCore());

            ToTS_UrlSet(sb);

            return sb.ToString();
        }

        private void ToTS_UrlSet(StringBuilder sb)
        {
            foreach (var area in this.UrlInfo.AreaInfoList)
            {
                foreach (var controller in area.ControllerInfoCol)
                {
                    foreach (var actionGroup in controller.ActionInfoCol)
                    {
                        sb.Append("declare namespace $dp.$JsNet.$UrlSet." + actionGroup.Controller + "." + actionGroup.MethodName + "{");
                        sb.AppendLine();

                        for (var ii = 0; ii < actionGroup.Signatures.Length; ii++)
                        {
                            sb.AppendLine("interface _$action" + ii + " extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {");
                            var signature = actionGroup.Signatures[ii];


                            //-- parameters of action method.
                            {
                                ParameterInfo[] piArray = signature.MethodInfo.GetParameters();

                                //ex: $Params(): { PersonID: Number, Name: String }
                                sb.Append("$Params():");
                                if (signature.ToScript_Params(EnumScript.TS, sb, false) == false)
                                {
                                    sb.Append("{}");
                                }
                                sb.AppendLine();
                            }

                            //-- returns of action method.
                            {
                                sb.Append("$Return():");
                                sb.Append(signature.ToScript_Return(EnumScript.TS, false));
                                sb.AppendLine();
                            }

                            sb.AppendLine("}");

                            sb.AppendLine("var $action" + ii + ": _$action" + ii + ";");
                        }

                        sb.AppendLine("}");


                    }
                }
            }
        }

        private ModelInfo _ModelInfo;

        private EnumColInfo _EnumInfo;

        private UrlInfo _UrlInfo;

        public ModelInfo ModelInfo
        {
            get
            {
                if (this._ModelInfo == null)
                {
                    this._ModelInfo = new ModelInfo(this.Types_Model, _JSNamespace);
                }
                return this._ModelInfo;
            }

        }

        public EnumColInfo EnumInfo
        {
            get
            {
                if (this._EnumInfo == null)
                {
                    this._EnumInfo = new EnumColInfo(this.Types_Enum, _JSNamespace);
                }
                return this._EnumInfo;
            }

        }

        public UrlInfo UrlInfo
        {
            get
            {
                if (this._UrlInfo == null)
                {
                    this._UrlInfo = new UrlInfo(this.Types_Controller, _JSNamespace);
                }
                return this._UrlInfo;
            }

        }

        Type[] _AllInOutClassTypes;
        /// <summary>
        /// All types of class parameters of action methods.
        /// </summary>
        /// <returns></returns>
        public Type[] AllInOutClassTypes()
        {
            if (this._AllInOutClassTypes == null)
            {
                this._AllInOutClassTypes = this.UrlInfo.AreaInfoList
                    .SelectMany<AreaInfo, ControllerInfo>(ai => ai.ControllerInfoCol)
                    .SelectMany<ControllerInfo, ActionInfoGroup>(ci => ci.ActionInfoCol)
                    .SelectMany<ActionInfoGroup, ActionInfo>(aig => aig.Signatures)
                    .SelectMany<ActionInfo, Type>(ai => ai.AllInOutClassTypes())
                    .Where(t => t.FullName.IndexOf("System.") != 0)
                    .Distinct()
                    .ToArray();
            }
            return this._AllInOutClassTypes;
        }

        Type[] _ParameterEnumTypes;

        /// <summary>
        /// All types of enum parameters of action methods.
        /// </summary>
        /// <returns></returns>
        public Type[] ParameterEnumTypes()
        {
            if (this._ParameterEnumTypes == null)
            {
                this._ParameterEnumTypes = this.UrlInfo.AreaInfoList
                    .SelectMany<AreaInfo, ControllerInfo>(ai => ai.ControllerInfoCol)
                    .SelectMany<ControllerInfo, ActionInfoGroup>(ci => ci.ActionInfoCol)
                    .SelectMany<ActionInfoGroup, ActionInfo>(aig => aig.Signatures)
                    .SelectMany<ActionInfo, Type>(ai => ai.ParameterEnumTypes())
                    .Distinct()
                    .ToArray();
            }
            return this._ParameterEnumTypes;
        }

        #endregion

    }
}
