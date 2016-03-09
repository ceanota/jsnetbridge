using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Routing;

namespace Diphap.JsNetBridge.Mvc
{
    /// <summary>
    /// Contains methods to build URLs for ASP.NET MVC within an application.
    /// </summary>
    public class UrlManager
    {
        /// <summary>
        /// Generates a fully qualified URL to an action method by using the specified
        ///     action name.
        /// </summary>
        /// <param name="actionName"></param>
        /// <param name="controllerName"></param>
        /// <param name="routeValues"></param>
        /// <returns></returns>
        public delegate string delAction(string actionName, string controllerName, RouteValueDictionary routeValues);
        /// <summary>
        /// Generates a fully qualified URL for the specified route values.
        /// </summary>
        /// <param name="routeName"></param>
        /// <param name="routeValues"></param>
        /// <returns></returns>
        public delegate string delRouteUrl(string routeName, RouteValueDictionary routeValues);

        /// <summary>
        ///  Generates a fully qualified URL to an action method by using the specified
        ///     action name.
        /// </summary>
        public delAction Action;
        /// <summary>
        /// Generates a fully qualified URL for the specified route values.
        /// </summary>
        public delRouteUrl RouteUrl;

        /// <summary>
        /// Generates a fully qualified URL to an action method by using the specified
        ///     action name.
        /// </summary>
        /// <param name="actionName"></param>
        /// <param name="controllerName"></param>
        /// <param name="routeValues"></param>
        /// <returns></returns>
        public string Action_(string actionName, string controllerName, IDictionary<string, object> routeValues)
        {
            return this.Action(actionName, controllerName, routeValues as RouteValueDictionary);
        }
        /// <summary>
        /// Generates a fully qualified URL for the specified route values.
        /// </summary>
        /// <param name="routeName"></param>
        /// <param name="routeValues"></param>
        /// <returns></returns>
        public string RouteUrl_(string routeName, IDictionary<string, object> routeValues)
        {
            return this.RouteUrl(routeName, routeValues as RouteValueDictionary);
        }

        /// <summary>
        /// CreateInstanceOfRouteValueDictionary
        /// </summary>
        /// <returns></returns>
        public IDictionary<string, object> CreateInstanceOfRouteValueDictionary()
        {
            return new RouteValueDictionary();
        }

        /// <summary>
        ///     Initializes a new instance of the System.Web.Mvc.UrlHelper class using the
        ///     specified request context
        /// </summary>
        /// <param name="action"></param>
        /// <param name="routeUrl"></param>
        public UrlManager(delAction action, delRouteUrl routeUrl)
        {
            this.Action = action;
            this.RouteUrl = routeUrl;
        }

    }
}
