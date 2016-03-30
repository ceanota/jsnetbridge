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
        public static TypesOfAspNetSet TypesOfAspNetSet { get; private set; }
        public static ConfigDynamicAssembly ConfigReferences { get; private set; }
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

        private void InitiliazeForAspNetObjects(Assembly asp_net)
        {
            Type type_obj = typeof(System.Object);
            Type type_type = typeof(System.Type);

            Type[] types = asp_net.GetTypes();

            this.Types_Model = TypeHelper.GetCustomTypes(types
                .Where(t => t.FullName.Contains(".Models")
                    && (t.BaseType == type_obj || t.BaseType == null || (t.BaseType.FullName != null && t.BaseType.FullName.Contains("System.") == false))).ToArray(),
                new string[] { }, new string[] { }).ToList();

            this.Types_Enum = TypeHelper.GetTypesOfEnum(asp_net, new string[] { }, new string[] { });

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
        }

        /// <summary>
        /// Instanciate information about AspMvc Application.
        /// </summary>
        /// <param name="appAspNetPath"></param>
        /// <param name="typeSetList"></param>
        /// <returns></returns>
        public AspMvcInfo(Assembly asp_net, IList<AssemblySet> typeSetList)
        {
            string binFolderPath = Path.GetDirectoryName(asp_net.Location);
            AspMvcInfo.TypesOfAspNetSet = new TypesOfAspNetSet(binFolderPath);

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
        /// Instanciate information about AspMvc Application.
        /// </summary>
        /// <param name="appAspNetPath"></param>
        /// <param name="typeSetList"></param>
        /// <returns></returns>
        public AspMvcInfo(Assembly asp_net)
            : this(asp_net, new AssemblySet[] { })
        {

        }

        /// <summary>
        /// Instanciate information about AspMvc Application.
        /// </summary>
        /// <param name="appAspNetPath"></param>
        /// <param name="typeSetList"></param>
        /// <returns></returns>
        public AspMvcInfo(string appAspNetPath, IList<AssemblySet> typeSetList)
            : this(Assembly.LoadFrom(appAspNetPath), typeSetList)
        {

        }

        /// <summary>
        /// Instanciate information about AspMvc Application.
        /// </summary>
        /// <param name="appAspNetPath"></param>
        /// <param name="typeSet"></param>
        /// 
        public AspMvcInfo(string appAspNetPath, AssemblySet typeSet)
            : this(appAspNetPath, new AssemblySet[] { typeSet })
        {

        }

        /// <summary>
        /// Instanciate information about AspMvc Application.
        /// </summary>
        /// <param name="appAspNetPath"></param>
        public AspMvcInfo(string appAspNetPath)
            : this(appAspNetPath, new AssemblySet[] { })
        {

        }

        #region "Public"

        /// <summary>
        /// Creates file which contains ASP MVC object model. 
        /// </summary>
        /// <param name="jsFilePath"></param>
        public void WriteAllText(string jsFilePath)
        {
            File.WriteAllText(jsFilePath, this.ToJS(), Encoding.UTF8);
        }

        public void AppendAllText(string jsFilePath)
        {
            File.AppendAllText(jsFilePath, this.ToJS());
        }

        public string ToJS()
        {
            Func<StringBuilder, object> f = (sb) => 
            {
                sb.AppendLine(this.ModelInfo.ToJSCore());
                sb.AppendLine(this.EnumInfo.ToJSCore());
                sb.AppendLine(string.Join("", JSHelper.CreateNamespace(ConfigJS.url_set)));
                sb.AppendLine(string.Format("{0} = {1};", ConfigJS.url_set, this.UrlInfo.ToJS()));
                return null; 
            };
            return ModelInfo.ToJSTemplate(f);
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
                    this._ModelInfo = new ModelInfo(this.Types_Model);
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
                    this._EnumInfo = new EnumColInfo(this.Types_Enum);
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
                    this._UrlInfo = new UrlInfo(this.Types_Controller);
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
                    .SelectMany<ControllerInfo, IActionInfo>(ci => ci.ActionInfoCol)
                    .SelectMany<IActionInfo, Type>(ai => ai.AllInOutClassTypes())
                    .Where(t => t.FullName.IndexOf("System.") != 0)
                    .Distinct()
                    .ToArray();
            }
            return this._AllInOutClassTypes;
        }

        #endregion

    }
}
