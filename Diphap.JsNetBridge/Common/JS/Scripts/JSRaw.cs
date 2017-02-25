using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Diphap.JsNetBridge.Common.JS
{

    public class JSRaw
    {
        public const string CheckingDependencies =
@"(function () {
    var message = '[circularReferenceManagerFactory.js] or [arrayFactory.js] or [actionHelper.js] is missing';
    try {
        if (!window.$dp.$shared.$arrayFactory) { throw message; };
        if (!window.$dp.$shared.$circularReferenceManagerFactory) { throw message };
        if (!window.$dp.$JsNet.$Helpers.$Shared.$Action.getUrlFromTemplate) { throw message };
    } catch (e) {
        message = message + '\r\n' + e.toString();
        throw message;
    }
})();";

        public const string arrayFactory =
@"(function () {

    window.$dp = window.$dp || {};
    window.$dp.$shared = window.$dp.$shared || {};

    if (window.$dp.$shared.$arrayFactory !== undefined) { return; }

    $dp.$shared.$arrayFactory = function arrayFactory(ref) {
        /// <signature>
        ///   <summary>this function returns a array with added function '$dpItemFactory' who creates instance of item of array.</summary>
        ///   <param name='ref' type='Function'>ref is factory who creates instance of item of array</param>
        ///   <returns type='Function' />
        /// </signature>

        var aa = [];
        aa.$dpItemFactory = function () {
            var result;
            if (typeof ref === 'function') { result = ref(); }
            else { result = ref; }
            return result;
        };
        return aa;
    };

})();";
        public const string circularReferenceManagerFactory =
@"(function () {
    window.$dp = window.$dp || {};
    window.$dp.$shared = window.$dp.$shared || {};

    if (window.$dp.$shared.$circularReferenceManagerFactory !== undefined) { return; }

    window.$dp.$shared.$circularReferenceManagerFactory = function circularReferenceManagerFactory(sameIntance) {
        /// <signature>
        ///   <summary>Factory gives un new instance of Function that handles the circular reference objects.</summary>
        ///   <param name='sameIntance' type='bool'>If sameInstance === undefined: new instance of function. Otherwise, we use the same instance.</param>
        ///   <returns type='Function' />
        /// </signature>
        if (sameIntance === undefined) {
            var newFunc = window.$dp.$shared.$circularReferenceManagerFactory._managerFunc.bind();
            newFunc.factories = [];
            window.$dp.$shared.$circularReferenceManagerFactory.instance = newFunc;
        }
        return window.$dp.$shared.$circularReferenceManagerFactory.instance;
    }

    window.$dp.$shared.$circularReferenceManagerFactory._managerFunc = function _managerFunc(func) {
        /// <signature>
        ///   <summary>it is the function that handles the circular reference objects</summary>
        ///   <param name='func' type='Function'>Factory of instances.</param>
        ///   <returns type='Object' />
        /// </signature>

        var internalFunc = window.$dp.$shared.$circularReferenceManagerFactory.instance;

        var foundedIdx = -1;
        for (var idx = 0; idx < internalFunc.factories.length; idx++) {
            if (internalFunc.factories[idx].item === func) {
                foundedIdx = idx;
            }
        }

        if (foundedIdx === -1) {
            internalFunc.factories.push({ 'item': func, 'number': 0 });
            foundedIdx = internalFunc.factories.length - 1;
        } else {
            internalFunc.factories[foundedIdx].number++;
        }

        if (internalFunc.factories[foundedIdx].number < 1) {
            return internalFunc.factories[foundedIdx].item(true);
        } else {
            internalFunc.factories[foundedIdx].number = null;
            return internalFunc.factories[foundedIdx].item;
        }
    }

})();";

        public const string actionHelper =
@"(function () {
    window.$dp = window.$dp || {};
    $dp.$JsNet = $dp.$JsNet || {};
    $dp.$JsNet.$Helpers = $dp.$JsNet.$Helpers || {};
    $dp.$JsNet.$Helpers.$Shared = $dp.$JsNet.$Helpers.$Shared || {};
    $dp.$JsNet.$Helpers.$Shared.$Action = $dp.$JsNet.$Helpers.$Shared.$Action || {};

    $dp.$JsNet.$Helpers.$Api = $dp.$JsNet.$Helpers.$Api || {};
    $dp.$JsNet.$Helpers.$Mvc = $dp.$JsNet.$Helpers.$Mvc || {};
    $dp.$JsNet.$Helpers.$Api.$Routes = $dp.$JsNet.$Helpers.$Api.$Routes || {};
    $dp.$JsNet.$Helpers.$Mvc.$Routes = $dp.$JsNet.$Helpers.$Mvc.$Routes || {};

    var _defaultApiRoute = { $RouteTemplate: 'api/{controller}/{id}' };
    var _defaultMvcRoute = { $RouteTemplate: '{controller}/{action}/{id}' };

    $dp.$JsNet.$Helpers.$Api.$Routes.$selectedRoute = _defaultApiRoute;
    $dp.$JsNet.$Helpers.$Mvc.$Routes.$selectedRoute = _defaultMvcRoute;

    String.prototype.$dpFormat = function _formatString() {
        /// <summary>format string</summary>
        /// <param name='obj' type='Object'>ex: 'Hello {myFriend}'.$dpFormat({myFriend: 'John'})</param>

        var str = this.toString();
        if (!arguments.length)
            return str;
        var args = typeof arguments[0],
            args = (('string' == args || 'number' == args) ? arguments : arguments[0]);
        for (arg in args) {
            if (args[arg]) {
                str = str.replace(RegExp('\\{' + arg + '\\}', 'gi'), args[arg]);
            }
        }
        return str;
    }

    function _cleanRouteTemplate(routeTemplateTemp, predicate) {
        /// <summary></summary>
        /// <param name='routeTemplateTemp' type='String'></param>
        /// <param name='predicate' type='Function'></param>

        var partsTemp = routeTemplateTemp.split('/');

        var parts = [];
        for (var ii = 0; ii < partsTemp.length; ii++) {

            var partTemp = partsTemp[ii];

            if (predicate) {
                if (predicate(partTemp) || (partTemp.indexOf('{') < 0 && partTemp.indexOf('}') < 0)) {
                    parts.push(partTemp);
                }
            } else {
                if ((partTemp.indexOf('{') < 0 && partTemp.indexOf('}') < 0)) {
                    parts.push(partTemp);
                }
            }

        }
        var routeTemplate = parts.join('/');

        return routeTemplate;
    }

    function _noMatch(urlTemplate, routeData) {
        /// <summary>find unused properties </summary>
        /// <param name='urlTemplate' type='String'></param>
        /// <param name='routeData' type='Object'></param>

        var obj = {};
        for (var propName in routeData) {
            var res = urlTemplate.match(RegExp('\\{' + propName + '\\}', 'gi'));
            if (!res) {
                obj[propName] = routeData[propName];
            }
        }
        return obj;
    }

    function _toQueryString(routeData) {
        var text = '';
        var idx = 0;
        for (var propName in routeData) {
            if (idx == 0) {
                text = routeData[propName] ? (propName + '=' + routeData[propName]) : propName;
            }
            else {
                text = text + '&' + (routeData[propName] ? (propName + '=' + routeData[propName]) : propName);
            }
            idx++;
        }
        return text;
    }
    
    function _getUrlFromTemplate(action, routeData) {
        /// <summary>Get Url</summary>
        /// <param name='action' type='$dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory'></param>
        /// <param name='routeData' type='Object'>ex:{id:1}</param>
        
        var url = '';
        if (typeof routeData != 'object') {
            routeData = null;
        }

        var selectedRouteTemplate;
        if (action.$IsApi) {
            var selectedRoute = $dp.$JsNet.$Helpers.$Api.$Routes.$selectedRoute || _defaultApiRoute;
            selectedRouteTemplate = action.$RouteTemplate || selectedRoute.$RouteTemplate;
            url = selectedRouteTemplate.$dpFormat(action.$Names);
            if (routeData) { url = url.$dpFormat(routeData); }
            url = _cleanRouteTemplate(url);
            if (url.indexOf('/') !== 0) { url = '/' + url; }
            url.replace('//', '/');

        }
        else {
            var selectedRoute = $dp.$JsNet.$Helpers.$Mvc.$Routes.$selectedRoute || _defaultMvcRoute;
            selectedRouteTemplate = action.$RouteTemplate || selectedRoute.$RouteTemplate;
            url = selectedRouteTemplate.$dpFormat(action.$Names);
            if (routeData) { url = url.$dpFormat(routeData); }
            url = _cleanRouteTemplate(url);
            if (url.indexOf('/') !== 0) { url = '/' + url; }
            url.replace('//', '/');

            if (action.$Names.area) {
                url = '/' + action.$Names.area + url;
            }
        };

        //-- querystring
        var unusedRouteData = _noMatch(selectedRouteTemplate, routeData);
        var queryString = _toQueryString(unusedRouteData);
        if (queryString) {
            url = url + '?' + queryString;
        }

        return url;
    }
    function _getRouteDataCore(routeTemplate) {
        var parts = routeTemplate.split('/');
        var obj = {};
        for (var idx = 0; idx < parts.length; idx++) {
            var rg = RegExp('\\{' + '.*' + '\\}', 'gi');
            var rgArray = rg.exec(parts[idx]);
            if (rgArray && rgArray.length > 0) {
                if (rgArray[0]) {
                    obj[rgArray[0].replace('{', '').replace('}', '')] = null;
                }
            }
        }
        return obj;
    }

    function _getRouteData(action) {
        /// <summary>ex: { action: null, controller: null, id: null }</summary>
        /// <param name='action' type='$dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory'></param>

        var selectedRouteTemplate;
        if (action.$IsApi) {
            var selectedRoute = $dp.$JsNet.$Helpers.$Api.$Routes.$selectedRoute || _defaultApiRoute;
            selectedRouteTemplate = action.$RouteTemplate || selectedRoute.$RouteTemplate;
        }
        else {
            var selectedRoute = $dp.$JsNet.$Helpers.$Mvc.$Routes.$selectedRoute || _defaultMvcRoute;
            selectedRouteTemplate = action.$RouteTemplate || selectedRoute.$RouteTemplate;
        }

        var routeData = _getRouteDataCore(selectedRouteTemplate);

        return routeData;
    }
    $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory = function _actionFactory() {
        try {
            var action = {};
            action.constructor = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory; 
            action.$_Url = null;
            action.$GetUrl = function (routeData) {

                var url_route;
                if (!!action.$RouteTemplate && action.$RouteTemplate.indexOf('{') < 0 && action.$RouteTemplate.indexOf('}') < 0) {
                    url_route = action.$RouteTemplate;
                } else {
                    url_route = null;
                }

                var f = $dp.$JsNet.$Helpers.$Shared.$Action.getUrlFromTemplate;
                if (!routeData) {
                    return url_route || action.$_Url || f(action);
                }
                else {
                    return f(action, routeData);
                }
            };
            action.$GetRouteData = function () { return $dp.$JsNet.$Helpers.$Shared.$Action.getRouteData(action); };
            action.$Names = { action: '', controller: '', area: '' };
            action.$Params = function () { var obj = {}; return obj; };
            action.$Return = function () { var obj = {}; return obj; };
            action.$Enums = function () { var obj = null; return obj; };
            action.$IsApi = false;
            action.$httpMethodArray = { $items:['post','get'], $single:'post', $first:'post' };
            action.$AjaxSettings = function () { var obj = { dataType: undefined, contentType: 'application/json', cache: false, type: 'post', method: 'post' }; return obj; };
            action.$RouteTemplate = '';
            return action;
        }
        catch (ex) {
            throw ex;
        }
    }
    $dp.$JsNet.$Helpers.$Shared.$Action.getUrlFromTemplate = _getUrlFromTemplate;
    $dp.$JsNet.$Helpers.$Shared.$Action.getRouteData = _getRouteData;
})();";

        public class AnynomousModule
        {
            public const string Begin = "(function () {";
            public const string End = "})();";
        }

        public class Region
        {
            static public string Begin(string name = "")
            {
                return string.Format("//#region '{0}'", name);
            }

            static public string End()
            {
                return "//#endregion";
            }
        }


    }
}
