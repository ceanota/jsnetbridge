
(function () {
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
                var f = $dp.$JsNet.$Helpers.$Shared.$Action.getUrlFromTemplate;
                if (!routeData) { return action.$_Url || f(action); } else { return f(action, routeData); }
            };
            action.$GetRouteData = function () { return $dp.$JsNet.$Helpers.$Shared.$Action.getRouteData(action); };
            action.$Names = { action: '', controller: '', area: '' };
            action.$Params = function () { var obj = {}; return obj; };
            action.$Return = function () { var obj = {}; return obj; };
            action.$Enums = function () { var obj = null; return obj; };
            action.$IsApi = { $httpMethodArray: { $items: [''], $single: '' } };
            action.$AjaxOptions = function () { var obj = { dataType: 'json', contentType: 'application/json', cache: false, method: 'POST' }; return obj; };
            action.$RouteTemplate = '';
            return action;
        }
        catch (ex) {
            throw ex;
        }
    }

    $dp.$JsNet.$Helpers.$Shared.$Action.getUrlFromTemplate = _getUrlFromTemplate;
    $dp.$JsNet.$Helpers.$Shared.$Action.getRouteData = _getRouteData;

})();