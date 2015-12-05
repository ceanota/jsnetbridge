using Diphap.JsNetBridge.Common.JS;
using Diphap.JsNetBridge.Data;
using Diphap.JsNetBridge.Data.Enum;
using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Mvc;

namespace Diphap.JsNetBridge
{

    /// <summary>
    /// Information on AspMvc application.
    /// </summary>
    public class AspMvcInfo
    {
        #region "Constants"
        static internal readonly Type Type_ApiController = typeof(ApiController);
        static internal readonly Type Type_JsonResult = typeof(JsonResult);
        static internal readonly Type Type_HttpResponseMessage = typeof(HttpResponseMessage);
        static internal readonly Type Type_ActionResult = typeof(ActionResult);
        static internal readonly Type Type_ViewResult = typeof(ViewResult);
        #endregion

        #region "Internal"
        /// <summary>
        /// Types of models
        /// </summary>
        internal List<Type> Types_Model { get; private set; }

        /// <summary>
        /// Types of Enum.
        /// </summary>
        internal List<Type> Types_Enum { get; private set; }

        /// <summary>
        /// Types of controller.
        /// </summary>
        internal List<Type> Types_Controller { get; private set; }
        #endregion

        /// <summary>
        /// Instanciate information about AspMvc Application.
        /// </summary>
        /// <param name="appAspNetPath"></param>
        /// <param name="typeSetList"></param>
        /// 
        /// <returns></returns>
        public AspMvcInfo(string appAspNetPath, IList<AssemblySet> typeSetList)
        {
            Type type_obj = typeof(System.Object);
            Type type_type = typeof(System.Type);

            #region  "asp_net"
            Assembly asp_net = Assembly.LoadFrom(appAspNetPath);

            Type[] types = asp_net.GetTypes();

            this.Types_Model = TypeHelper.GetTypesOfClass(types
                .Where(t => t.FullName.Contains(".Models")
                    && (t.BaseType == type_obj || t.BaseType == null || (t.BaseType.FullName != null && t.BaseType.FullName.Contains("System.") == false))).ToArray(),
                new string[] { }).ToList();

            this.Types_Enum = TypeHelper.GetTypesOfEnum(asp_net, new string[] { });

            this.Types_Controller = types.Where(t => t.Name.Contains("Controller")).ToList();

            foreach (Type t in this.Types_ActionClassParameter())
            {
                Type t_work = TypeHelper.GetElementTypeOfCollectionOrDefault(t);

                if (this.Types_Model.Contains(t_work) == false)
                {
                    //-- add Type which is not Collection.
                    this.Types_Model.Add(t_work);
                }
            }


            #endregion

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
            File.WriteAllText(jsFilePath, this.ToJS());
        }

        public void AppendAllText(string jsFilePath)
        {
            File.AppendAllText(jsFilePath, this.ToJS());
        }

        public string ToJS()
        {
            StringBuilder sb = new StringBuilder();

            sb.AppendLine(JSArrayFactory.Implementation());

            sb.AppendLine(this.ModelInfo.ToJSCore());

            sb.AppendLine(this.EnumInfo.ToJSCore());

            {
                sb.AppendLine(string.Join("", JSHelper.CreateNamespace(Config.url_set)));
                sb.AppendLine(string.Format("{0} = {1};", Config.url_set, this.UrlInfo.ToJS()));
            }

            return sb.ToString();
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

        /// <summary>
        /// All types of class parameters of action methods.
        /// </summary>
        /// <returns></returns>
        public Type[] Types_ActionClassParameter()
        {
            Type[] types = this.UrlInfo.AreaInfoList
                .SelectMany<AreaInfo, ControllerInfo>(ai => ai.ControllerInfoCol)
                .SelectMany<ControllerInfo, ActionInfo>(ci => ci.ActionInfoCol)
                .SelectMany<ActionInfo, Type>(ai => ai.ParameterClassType())
                .Where(t => t.FullName.Contains("System.") == false)
                .Distinct()
                .ToArray();

            return types;
        }

        #endregion

    }
}
