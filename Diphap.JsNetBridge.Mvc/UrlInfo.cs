using Diphap.JsNetBridge.Mvc.Proxy;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;

namespace Diphap.JsNetBridge.Mvc
{
    /// <summary>
    /// Generates Url
    /// </summary>
    public class UrlInfo
    {
        /// <summary>
        /// Areas
        /// </summary>
        public readonly List<AreaInfo> AreaInfoList;

        /// <summary>
        /// Generates Url
        /// </summary>
        /// <param name="types_contoller"></param>
        /// <param name="JSNamespace"></param>
        public UrlInfo(IList<Type> types_contoller, ConfigJS.JSNamespace JSNamespace)
        {
            this.AreaInfoList = GetAreaInfoList(types_contoller, JSNamespace);
        }

        /// <summary>
        /// Set url jsvalue.
        /// </summary>
        /// <param name="urlHelper"></param>
        /// <param name="apiRouteName"></param>
        /// <returns></returns>
        public UrlInfo SetUrlValue(UrlManager urlHelper, string apiRouteName)
        {
            SetUrlValue(urlHelper, this.AreaInfoList, apiRouteName);
            return this;
        }

        /// <summary>
        /// Serialize.
        /// </summary>
        /// <returns></returns>
        public string ToJS()
        {
            return ToJS(this.AreaInfoList);
        }

        /// <summary>
        /// Get instructions set for url.
        /// </summary>
        /// <param name="urlHelper"></param>
        /// <param name="apiRouteName"></param>
        /// <returns></returns>
        public string ToJS_SetUrl(UrlManager urlHelper = null, string apiRouteName = "DefaultApi")
        {
            if (urlHelper != null)
            {
                this.SetUrlValue(urlHelper, apiRouteName);
            }

            string properties = GetJsSetUrl(this.AreaInfoList, ConfigJS.url_set);

            return Diphap.JsNetBridge.JSHelper.GetFunctionModule(properties, true, null, "NetObjectGenerationException\\r\\nCheck that the .NET objects are generated in the js file [/Scripts/Diphap.JsNetBridge/Diphap.JsNetBridge.js].\\r\\nPlease read the file [/Generators/Diphap.JsNetBridge/_ReadMe.txt]"); ;
        }

        #region "static"

        /// <summary>
        /// Serialize
        /// </summary>
        /// <param name="areaInfoList"></param>
        /// <returns></returns>
        private static string ToJS(List<AreaInfo> areaInfoList)
        {
            List<string> properties = GetJS_ActionInfo(areaInfoList);
            string toJson = "{" + string.Join(",\r\n", properties) + "}";
            return toJson;
        }

        /// <summary>
        /// Set action url.
        /// </summary>
        /// <param name="urlHelper"></param>
        /// <param name="areaInfoList"></param>
        /// <param name="apiRouteName"></param>
        /// <returns></returns>
        private static List<AreaInfo> SetUrlValue(UrlManager urlHelper, List<AreaInfo> areaInfoList, string apiRouteName)
        {
            foreach (var ai in areaInfoList)
            {
                foreach (var ci in ai.ControllerInfoCol)
                {
                    foreach (var aig in ci.ActionInfoCol)
                    {
                        foreach (var sig in aig.Signatures)
                        {
                            object dic;

                            if (sig.IsApiController)
                            {
                                if (string.IsNullOrWhiteSpace(sig.Area) == false)
                                {
                                    dic = new { area = sig.Area, httproute = "", controller = sig.Controller, action = sig.Action };
                                }
                                else
                                {
                                    dic = new { httproute = "", controller = sig.Controller, action = sig.Action };
                                }

                                sig.Url = urlHelper.RouteUrl(apiRouteName, dic);
                            }
                            else
                            {
                                if (string.IsNullOrWhiteSpace(sig.Area) == false)
                                {
                                    dic = new { area = sig.Area };
                                }
                                else
                                {
                                    dic = new { };
                                }

                                sig.Url = urlHelper.Action(sig.Action, sig.Controller, dic);
                            }

                            if (sig.Url != null && sig.Url.Contains('?'))
                            {
                                //ex: if routeTemplate = "api/{controller}/{id}", url_temp = "/Person?action='PostName'"
                                //ex: we remove the query string.
                                sig.Url = sig.Url.Split('?')[0];
                            }

                        }
                    }
                }
            }

            return areaInfoList;
        }

        /// <summary>
        /// Get list of ActionInfo
        /// </summary>
        /// <param name="aiList"></param>
        /// <returns></returns>
        private static List<string> GetJS_ActionInfo(List<AreaInfo> aiList)
        {
            List<string> properties = new List<string>();

            properties.AddRange(GetJS_ActionInfo_WithArea(aiList));

            properties.AddRange(GetJS_ActionInfo_NoArea(aiList));

            return properties;
        }

        /// <summary>
        /// Get list of ActionInfo
        /// </summary>
        /// <param name="aiList"></param>
        /// <returns></returns>
        private static List<string> GetJS_ActionInfo_WithArea(List<AreaInfo> aiList)
        {
            List<string> properties = new List<string>();

            AreaInfo[] aiListWithArea = aiList.Where(x => string.IsNullOrWhiteSpace(x.Name) == false).ToArray();

            foreach (var ai in aiListWithArea)
            {
                properties.Add("\"" + ai.Name + "\":" + ai.ToJS);
            }

            return properties;
        }

        /// <summary>
        /// Get list of ActionInfo
        /// </summary>
        /// <param name="aiList"></param>
        /// <returns></returns>
        private static List<string> GetJS_ActionInfo_NoArea(List<AreaInfo> aiList)
        {
            List<string> properties = new List<string>();
            var noArea = aiList.FirstOrDefault(x => string.IsNullOrWhiteSpace(x.Name));

            if (noArea != null)
            {
                foreach (var ci in noArea.ControllerInfoCol)
                {
                    properties.Add(ci.ToJS);
                }
            }

            return properties;
        }

        /// <summary>
        ///ex: 'AreaName.ControllerName.ActionName.Url="url_value"'
        /// </summary>
        static private string GetJsSetUrl(List<AreaInfo> aiList, string js_root)
        {
            string js_rootTemp = string.IsNullOrWhiteSpace(js_root) ? "" : (js_root + ".");

            IEnumerable<string> properties = aiList
                .SelectMany(x => x.ControllerInfoCol)
                .SelectMany(x => x.ActionInfoCol)
                .SelectMany(x => x.Signatures)
                .Select(x => js_rootTemp + x.JsSetUrl);

            string js = string.Join(";", properties);
            js = js + ";";

            return js;
        }

        private static List<AreaInfo> GetAreaInfoList(IList<Type> types_contoller/*Assembly asp_net*/, ConfigJS.JSNamespace JSNamespace)
        {
            List<AreaInfo> aiList = new List<AreaInfo>();

            IList<ActionInfoGroup> urlList = ExtractUrlFromAspNetMvcApplication(types_contoller/*asp_net*/, JSNamespace);

            List<string> areas = urlList.Where(x => string.IsNullOrWhiteSpace(x.Area) == false).Select(x => x.Area).Distinct().ToList();
            foreach (var a in areas)
            {
                var ai = GetAreaInfo(urlList, a);
                aiList.Add(ai);
            }

            AreaInfo no_area_info = GetAreaInfo(urlList, "");
            aiList.Add(no_area_info);

            return aiList;

        }

        private static AreaInfo GetAreaInfo(IList<ActionInfoGroup> urlList, string a)
        {
            var url_list_byArea = urlList.Where(x => x.Area == a);
            var groupByController = url_list_byArea.GroupBy(x => x.Controller);


            List<ControllerInfo> ciList = new List<ControllerInfo>();
            foreach (var g in groupByController)
            {
                ciList.Add(new ControllerInfo(g.ToArray(), g.Key));
            }

            var ai = new AreaInfo(ciList, a);
            return ai;
        }

        private static List<ActionInfoGroup> ExtractUrlFromAspNetMvcApplication(IList<Type> types_contoller, ConfigJS.JSNamespace JSNamespace)
        {
            List<ActionInfoGroup> urlList = new List<ActionInfoGroup>();

            for (int ii = 0; ii < types_contoller.Count; ii++)
            {
                List<ActionInfoGroup> urlListTemp = ExtractUrlFromController(types_contoller[ii], JSNamespace);

                urlList.AddRange(urlListTemp);
            }


            return urlList;
        }

        private static List<ActionInfoGroup> ExtractUrlFromController(Type type_controller_current, ConfigJS.JSNamespace JSNamespace)
        {
            List<ActionInfoGroup> urlListTemp = new List<ActionInfoGroup>();

            IGrouping<string, MethodInfo>[] miGroups;
            {
                MethodInfo[] miArray = type_controller_current.GetMethods(BindingFlags.Public |
    BindingFlags.Instance | BindingFlags.DeclaredOnly);

                miGroups = miArray
                    .Where(x => x.Name.IndexOf("get_") < 0)
                    .GroupBy(x => x.Name).ToArray();
            }


            for (int jj = 0; jj < miGroups.Length; jj++)
            {
                IGrouping<string, MethodInfo> mig_current = miGroups[jj];

                //-- TODO: passer à ActionInfo, plusieurs signatures d'une méthode.
                ActionInfoGroup url = CreateUrl(type_controller_current, mig_current, JSNamespace);
                if (url != null)
                {
                    urlListTemp.Add(url);
                }
            }

            return urlListTemp;
        }

        /// <summary>
        /// Creates instance of ActionInfo.
        /// </summary>
        /// <param name="type_controller_current"></param>
        /// <param name="miGroup">differents signatures of one method</param>
        /// <param name="JSNamespace"></param>
        /// <returns></returns>
        private static ActionInfoGroup CreateUrl(Type type_controller_current, IGrouping<string, MethodInfo> miGroup, ConfigJS.JSNamespace JSNamespace)
        {
            ActionInfoGroup url = null;

            string area = TryGetArea(type_controller_current);

            url = new ActionInfoGroup(miGroup.Key,
                type_controller_current,
                area,
                miGroup, JSNamespace);


            return url;
        }

        private static string TryGetArea(Type type_controller_current)
        {
            string area = "";

            if (type_controller_current.FullName.Contains("Areas"))
            {
                string[] ns_array = type_controller_current.FullName.Split('.');
                for (int gg = 0; gg < ns_array.Length; gg++)
                {
                    if (ns_array[gg] == "Areas")
                    {
                        area = ns_array[gg + 1];
                        break;
                    }
                }
            }
            return area;
        }

        #endregion

    }
}
