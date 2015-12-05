using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using System.Web.Mvc;

namespace Diphap.JsNetBridge
{
    public class UrlInfo
    {

        public readonly List<AreaInfo> AreaInfoList;

        public UrlInfo(IList<Type> types_contoller)
        {
            this.AreaInfoList = GetAreaInfoList(types_contoller);
        }

        /// <summary>
        /// Set url value.
        /// </summary>
        /// <param name="webViewPage"></param>
        /// <returns></returns>
        public UrlInfo SetUrlValue(WebViewPage webViewPage)
        {
            SetUrlValue(webViewPage, this.AreaInfoList);
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
        /// <param name="js_root"></param>
        /// <returns></returns>
        public string ToJS_SetUrl(string js_root)
        {
            string properties = GetJsSetUrl(this.AreaInfoList, js_root);
            return properties;
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
        /// <param name="webViewPage"></param>
        /// <param name="areaInfoList"></param>
        /// <returns></returns>
        private static List<AreaInfo> SetUrlValue(WebViewPage webViewPage, List<AreaInfo> areaInfoList)
        {
            foreach (var ai in areaInfoList)
            {
                foreach (var ci in ai.ControllerInfoCol)
                {
                    foreach (var u in ci.ActionInfoCol)
                    {
                        if (string.IsNullOrWhiteSpace(u.Area))
                        {
                            u.Url = webViewPage.Url.Action(u.Action, u.Controller);
                        }
                        else
                        {
                            u.Url = webViewPage.Url.Action(u.Action, u.Controller, new { area = u.Area });
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
                .Select(x =>  js_rootTemp + x.JsSetUrl);

            string js = string.Join(";", properties);
            js = js + ";";

            return js;
        }

        private static List<AreaInfo> GetAreaInfoList(IList<Type> types_contoller/*Assembly asp_net*/)
        {
            List<AreaInfo> aiList = new List<AreaInfo>();

            List<ActionInfo> urlList = ExtractUrlFromAspNetMvcApplication(types_contoller/*asp_net*/);

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

        private static AreaInfo GetAreaInfo(List<ActionInfo> urlList, string a)
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

        private static List<ActionInfo> ExtractUrlFromAspNetMvcApplication(IList<Type> types_contoller)
        {
            List<ActionInfo> urlList = new List<ActionInfo>();

            for (int ii = 0; ii < types_contoller.Count; ii++)
            {
                List<ActionInfo> urlListTemp = ExtractUrlFromController(types_contoller[ii]);

                urlList.AddRange(urlListTemp);
            }
            return urlList;
        }

        private static List<ActionInfo> ExtractUrlFromController(Type type_controller_current)
        {
            List<ActionInfo> urlListTemp = new List<ActionInfo>();

            MethodInfo[] miArray = type_controller_current.GetMethods(BindingFlags.Public |
                BindingFlags.Instance | BindingFlags.DeclaredOnly);

            for (int jj = 0; jj < miArray.Length; jj++)
            {
                MethodInfo mi_current = miArray[jj];

                ActionInfo url = CreateUrl(type_controller_current, mi_current);
                if (url != null)
                {
                    urlListTemp.Add(url);
                }
            }
            return urlListTemp;
        }

        private static ActionInfo CreateUrl(Type type_controller_current, MethodInfo mi_current)
        {
            ActionInfo url = null;

            if (mi_current.Name.IndexOf("get_") < 0)
            {
                string area = TryGetArea(type_controller_current);

                url = new ActionInfo(mi_current.Name,
                    type_controller_current,
                    area,
                    mi_current);

            }
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
