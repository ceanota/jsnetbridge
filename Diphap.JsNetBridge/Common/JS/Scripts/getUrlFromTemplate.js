
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

    var _defaultApiRoute = { $routeTemplate: 'api/{controller}/{id}' };
    var _defaultMvcRoute = { $routeTemplate: '{controller}/{action}/{id}' };

    $dp.$JsNet.$Helpers.$Api.$Routes.$selectedRoute = _defaultApiRoute;
    $dp.$JsNet.$Helpers.$Mvc.$Routes.$selectedRoute = _defaultMvcRoute;
    
    String.prototype.$dpFormat = function _formatString() {
        var str = this.toString();
        if (!arguments.length)
            return str;
        var args = typeof arguments[0],
            args = (('string' == args || 'number' == args) ? arguments : arguments[0]);
        for (arg in args)
            str = str.replace(RegExp('\\{' + arg + '\\}', 'gi'), args[arg]);
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

            if (predicate(partTemp) ||
                (partTemp.indexOf('{') < 0 && partTemp.indexOf('}') < 0)) {
                parts.push(partTemp);
            }
        }
        var routeTemplate = parts.join('/');
        return routeTemplate;
    }

    function _getUrlFromTemplate(action) {
        /// <summary>Get Url</summary>
        /// <param name='action' type='Object'></param>

        var url = '';
        if (action.$IsApiController) {
            var selectedRoute = $dp.$JsNet.$Helpers.$Api.$Routes.$selectedRoute || _defaultApiRoute;
            var routeTemplate = _cleanRouteTemplate(selectedRoute.$routeTemplate, function (partTemp) { return partTemp === '{controller}'; });
            url = routeTemplate.replace('{controller}', action.$Names.$Controller);
            if (url.indexOf('/') !== 0) { url = '/' + url; }
        }
        else {
            var selectedRoute = $dp.$JsNet.$Helpers.$Mvc.$Routes.$selectedRoute || _defaultMvcRoute;
            var routeTemplate = _cleanRouteTemplate(selectedRoute.$routeTemplate, function (partTemp) { return partTemp === '{controller}' || partTemp === '{action}'; });
            url = routeTemplate.replace('{controller}', action.$Names.$Controller);
            url = url.replace('{action}', action.$Names.$Action);
            if (url.indexOf('/') !== 0) { url = '/' + url; }
            if (action.$Names.$Area) {
                url = '/' + action.$Names.$Area + url;
            }
        };
        return url;
    }
    $dp.$JsNet.$Helpers.$Shared.$Action.getUrlFromTemplate = _getUrlFromTemplate;
})();