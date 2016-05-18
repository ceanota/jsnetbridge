


(function () {
(function () {

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

})();
(function () {
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

})();
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
        /// <param name='action' type='Object'></param>
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
        /// <param name='action' type='Object'></param>

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

    $dp.$JsNet.$Helpers.$Shared.$Action.getUrlFromTemplate = _getUrlFromTemplate;
    $dp.$JsNet.$Helpers.$Shared.$Action.getRouteData = _getRouteData;
    
})();
(function () {
(function () {
    var message = '[circularReferenceManagerFactory.js] or [arrayFactory.js] or [getUrlFromTemplate.js] is missing';
    try {
        if (!window.$dp.$shared.$arrayFactory) { throw message; };
        if (!window.$dp.$shared.$circularReferenceManagerFactory) { throw message };
        if (!window.$dp.$JsNet.$Helpers.$Shared.$Action.getUrlFromTemplate) { throw message };
    } catch (e) {
        message = message + '\r\n' + e.toString();
        throw message;
    }
})();
var _stampFunc = function() { return $dp.$JsNet; };
(function () {
//#region 'Model'
window.$dp = window.$dp || {};
$dp.$JsNet = $dp.$JsNet || {};
$dp.$JsNet.MvcAppExample = $dp.$JsNet.MvcAppExample || {};
$dp.$JsNet.MvcAppExample.Models = $dp.$JsNet.MvcAppExample.Models || {};
var _alias0 = $dp.$JsNet.MvcAppExample.Models;
_alias0.UserProfile = _alias0.UserProfile || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"UserId":0,"UserName":""};obj.constructor=_alias0.UserProfile; return obj; };
_alias0.RegisterExternalLoginModel = _alias0.RegisterExternalLoginModel || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"UserName":"","ExternalLoginData":""};obj.constructor=_alias0.RegisterExternalLoginModel; return obj; };
_alias0.LocalPasswordModel = _alias0.LocalPasswordModel || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"OldPassword":"","NewPassword":"","ConfirmPassword":""};obj.constructor=_alias0.LocalPasswordModel; return obj; };
_alias0.LoginModel = _alias0.LoginModel || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"UserName":"","Password":"","RememberMe":false};obj.constructor=_alias0.LoginModel; return obj; };
_alias0.RegisterModel = _alias0.RegisterModel || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"UserName":"","Password":"","ConfirmPassword":""};obj.constructor=_alias0.RegisterModel; return obj; };
_alias0.ExternalLogin = _alias0.ExternalLogin || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"Provider":"","ProviderDisplayName":"","ProviderUserId":""};obj.constructor=_alias0.ExternalLogin; return obj; };
//#endregion
//#region 'Enum'
window.$dp = window.$dp || {};
$dp.$JsNet = $dp.$JsNet || {};
$dp.$JsNet.MvcAppExample = $dp.$JsNet.MvcAppExample || {};
$dp.$JsNet.MvcAppExample.Controllers = $dp.$JsNet.MvcAppExample.Controllers || {};
$dp.$JsNet.MvcAppExample.Controllers.$JsNs$_AccountController = $dp.$JsNet.MvcAppExample.Controllers.$JsNs$_AccountController || {};
var _alias1 = $dp.$JsNet.MvcAppExample.Controllers.$JsNs$_AccountController;
_alias1.ManageMessageId = _alias1.ManageMessageId || {"ChangePasswordSuccess":{ "$Key":"ChangePasswordSuccess","$Value":0 },"SetPasswordSuccess":{ "$Key":"SetPasswordSuccess","$Value":1 },"RemoveLoginSuccess":{ "$Key":"RemoveLoginSuccess","$Value":2 }};
//#endregion
//#region 'UrlSet'
window.$dp = window.$dp || {};
$dp.$JsNet = $dp.$JsNet || {};
$dp.$JsNet.$UrlSet = {"Account":{"Login": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = {};action.$_Url = null;action.$GetUrl = function (routeData) { var f = $dp.$JsNet.$Helpers.$Shared.$Action.getUrlFromTemplate; if(!routeData) { return action.$_Url || f(action); } else { return f(action, routeData); } };action.$GetRouteData = function () { return $dp.$JsNet.$Helpers.$Shared.$Action.getRouteData(action); };action.$Names = { action : "Login", controller : "Account", area : "" };action.$Params = function(){  var obj = {"returnUrl":""}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$IsApi = null;action.$AjaxOptions = function(){  var obj = {dataType:"json",contentType:"application/json",cache:false,method:'POST'}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();obj.$action1 = function actionFactory () { try { var action = {};action.$_Url = null;action.$GetUrl = function (routeData) { var f = $dp.$JsNet.$Helpers.$Shared.$Action.getUrlFromTemplate; if(!routeData) { return action.$_Url || f(action); } else { return f(action, routeData); } };action.$GetRouteData = function () { return $dp.$JsNet.$Helpers.$Shared.$Action.getRouteData(action); };action.$Names = { action : "Login", controller : "Account", area : "" };action.$Params = function(){  var obj = {"model":_alias0.LoginModel(),"returnUrl":""}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$IsApi = null;action.$AjaxOptions = function(){  var obj = {dataType:"json",contentType:"application/json",cache:false,method:'POST'}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"LogOff": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = {};action.$_Url = null;action.$GetUrl = function (routeData) { var f = $dp.$JsNet.$Helpers.$Shared.$Action.getUrlFromTemplate; if(!routeData) { return action.$_Url || f(action); } else { return f(action, routeData); } };action.$GetRouteData = function () { return $dp.$JsNet.$Helpers.$Shared.$Action.getRouteData(action); };action.$Names = { action : "LogOff", controller : "Account", area : "" };action.$Params = function(){  var obj = null; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$IsApi = null;action.$AjaxOptions = function(){  var obj = {dataType:"json",contentType:"application/json",cache:false,method:'POST'}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"Register": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = {};action.$_Url = null;action.$GetUrl = function (routeData) { var f = $dp.$JsNet.$Helpers.$Shared.$Action.getUrlFromTemplate; if(!routeData) { return action.$_Url || f(action); } else { return f(action, routeData); } };action.$GetRouteData = function () { return $dp.$JsNet.$Helpers.$Shared.$Action.getRouteData(action); };action.$Names = { action : "Register", controller : "Account", area : "" };action.$Params = function(){  var obj = null; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$IsApi = null;action.$AjaxOptions = function(){  var obj = {dataType:"json",contentType:"application/json",cache:false,method:'POST'}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();obj.$action1 = function actionFactory () { try { var action = {};action.$_Url = null;action.$GetUrl = function (routeData) { var f = $dp.$JsNet.$Helpers.$Shared.$Action.getUrlFromTemplate; if(!routeData) { return action.$_Url || f(action); } else { return f(action, routeData); } };action.$GetRouteData = function () { return $dp.$JsNet.$Helpers.$Shared.$Action.getRouteData(action); };action.$Names = { action : "Register", controller : "Account", area : "" };action.$Params = function(){  var obj = {"model":_alias0.RegisterModel()}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$IsApi = null;action.$AjaxOptions = function(){  var obj = {dataType:"json",contentType:"application/json",cache:false,method:'POST'}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"Disassociate": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = {};action.$_Url = null;action.$GetUrl = function (routeData) { var f = $dp.$JsNet.$Helpers.$Shared.$Action.getUrlFromTemplate; if(!routeData) { return action.$_Url || f(action); } else { return f(action, routeData); } };action.$GetRouteData = function () { return $dp.$JsNet.$Helpers.$Shared.$Action.getRouteData(action); };action.$Names = { action : "Disassociate", controller : "Account", area : "" };action.$Params = function(){  var obj = {"provider":"","providerUserId":""}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$IsApi = null;action.$AjaxOptions = function(){  var obj = {dataType:"json",contentType:"application/json",cache:false,method:'POST'}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"Manage": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = {};action.$_Url = null;action.$GetUrl = function (routeData) { var f = $dp.$JsNet.$Helpers.$Shared.$Action.getUrlFromTemplate; if(!routeData) { return action.$_Url || f(action); } else { return f(action, routeData); } };action.$GetRouteData = function () { return $dp.$JsNet.$Helpers.$Shared.$Action.getRouteData(action); };action.$Names = { action : "Manage", controller : "Account", area : "" };action.$Params = function(){  var obj = {"message":0}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = {"message":_alias1.ManageMessageId}; return obj; };action.$IsApi = null;action.$AjaxOptions = function(){  var obj = {dataType:"json",contentType:"application/json",cache:false,method:'POST'}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();obj.$action1 = function actionFactory () { try { var action = {};action.$_Url = null;action.$GetUrl = function (routeData) { var f = $dp.$JsNet.$Helpers.$Shared.$Action.getUrlFromTemplate; if(!routeData) { return action.$_Url || f(action); } else { return f(action, routeData); } };action.$GetRouteData = function () { return $dp.$JsNet.$Helpers.$Shared.$Action.getRouteData(action); };action.$Names = { action : "Manage", controller : "Account", area : "" };action.$Params = function(){  var obj = {"model":_alias0.LocalPasswordModel()}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$IsApi = null;action.$AjaxOptions = function(){  var obj = {dataType:"json",contentType:"application/json",cache:false,method:'POST'}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"ExternalLogin": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = {};action.$_Url = null;action.$GetUrl = function (routeData) { var f = $dp.$JsNet.$Helpers.$Shared.$Action.getUrlFromTemplate; if(!routeData) { return action.$_Url || f(action); } else { return f(action, routeData); } };action.$GetRouteData = function () { return $dp.$JsNet.$Helpers.$Shared.$Action.getRouteData(action); };action.$Names = { action : "ExternalLogin", controller : "Account", area : "" };action.$Params = function(){  var obj = {"provider":"","returnUrl":""}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$IsApi = null;action.$AjaxOptions = function(){  var obj = {dataType:"json",contentType:"application/json",cache:false,method:'POST'}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"ExternalLoginCallback": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = {};action.$_Url = null;action.$GetUrl = function (routeData) { var f = $dp.$JsNet.$Helpers.$Shared.$Action.getUrlFromTemplate; if(!routeData) { return action.$_Url || f(action); } else { return f(action, routeData); } };action.$GetRouteData = function () { return $dp.$JsNet.$Helpers.$Shared.$Action.getRouteData(action); };action.$Names = { action : "ExternalLoginCallback", controller : "Account", area : "" };action.$Params = function(){  var obj = {"returnUrl":""}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$IsApi = null;action.$AjaxOptions = function(){  var obj = {dataType:"json",contentType:"application/json",cache:false,method:'POST'}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"ExternalLoginConfirmation": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = {};action.$_Url = null;action.$GetUrl = function (routeData) { var f = $dp.$JsNet.$Helpers.$Shared.$Action.getUrlFromTemplate; if(!routeData) { return action.$_Url || f(action); } else { return f(action, routeData); } };action.$GetRouteData = function () { return $dp.$JsNet.$Helpers.$Shared.$Action.getRouteData(action); };action.$Names = { action : "ExternalLoginConfirmation", controller : "Account", area : "" };action.$Params = function(){  var obj = {"model":_alias0.RegisterExternalLoginModel(),"returnUrl":""}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$IsApi = null;action.$AjaxOptions = function(){  var obj = {dataType:"json",contentType:"application/json",cache:false,method:'POST'}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"ExternalLoginFailure": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = {};action.$_Url = null;action.$GetUrl = function (routeData) { var f = $dp.$JsNet.$Helpers.$Shared.$Action.getUrlFromTemplate; if(!routeData) { return action.$_Url || f(action); } else { return f(action, routeData); } };action.$GetRouteData = function () { return $dp.$JsNet.$Helpers.$Shared.$Action.getRouteData(action); };action.$Names = { action : "ExternalLoginFailure", controller : "Account", area : "" };action.$Params = function(){  var obj = null; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$IsApi = null;action.$AjaxOptions = function(){  var obj = {dataType:"json",contentType:"application/json",cache:false,method:'POST'}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"ExternalLoginsList": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = {};action.$_Url = null;action.$GetUrl = function (routeData) { var f = $dp.$JsNet.$Helpers.$Shared.$Action.getUrlFromTemplate; if(!routeData) { return action.$_Url || f(action); } else { return f(action, routeData); } };action.$GetRouteData = function () { return $dp.$JsNet.$Helpers.$Shared.$Action.getRouteData(action); };action.$Names = { action : "ExternalLoginsList", controller : "Account", area : "" };action.$Params = function(){  var obj = {"returnUrl":""}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$IsApi = null;action.$AjaxOptions = function(){  var obj = {dataType:"json",contentType:"application/json",cache:false,method:'POST'}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"RemoveExternalLogins": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = {};action.$_Url = null;action.$GetUrl = function (routeData) { var f = $dp.$JsNet.$Helpers.$Shared.$Action.getUrlFromTemplate; if(!routeData) { return action.$_Url || f(action); } else { return f(action, routeData); } };action.$GetRouteData = function () { return $dp.$JsNet.$Helpers.$Shared.$Action.getRouteData(action); };action.$Names = { action : "RemoveExternalLogins", controller : "Account", area : "" };action.$Params = function(){  var obj = null; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$IsApi = null;action.$AjaxOptions = function(){  var obj = {dataType:"json",contentType:"application/json",cache:false,method:'POST'}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }()},
"Home":{"Index": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = {};action.$_Url = null;action.$GetUrl = function (routeData) { var f = $dp.$JsNet.$Helpers.$Shared.$Action.getUrlFromTemplate; if(!routeData) { return action.$_Url || f(action); } else { return f(action, routeData); } };action.$GetRouteData = function () { return $dp.$JsNet.$Helpers.$Shared.$Action.getRouteData(action); };action.$Names = { action : "Index", controller : "Home", area : "" };action.$Params = function(){  var obj = null; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$IsApi = null;action.$AjaxOptions = function(){  var obj = {dataType:"json",contentType:"application/json",cache:false,method:'POST'}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"About": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = {};action.$_Url = null;action.$GetUrl = function (routeData) { var f = $dp.$JsNet.$Helpers.$Shared.$Action.getUrlFromTemplate; if(!routeData) { return action.$_Url || f(action); } else { return f(action, routeData); } };action.$GetRouteData = function () { return $dp.$JsNet.$Helpers.$Shared.$Action.getRouteData(action); };action.$Names = { action : "About", controller : "Home", area : "" };action.$Params = function(){  var obj = null; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$IsApi = null;action.$AjaxOptions = function(){  var obj = {dataType:"json",contentType:"application/json",cache:false,method:'POST'}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"Contact": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = {};action.$_Url = null;action.$GetUrl = function (routeData) { var f = $dp.$JsNet.$Helpers.$Shared.$Action.getUrlFromTemplate; if(!routeData) { return action.$_Url || f(action); } else { return f(action, routeData); } };action.$GetRouteData = function () { return $dp.$JsNet.$Helpers.$Shared.$Action.getRouteData(action); };action.$Names = { action : "Contact", controller : "Home", area : "" };action.$Params = function(){  var obj = null; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$IsApi = null;action.$AjaxOptions = function(){  var obj = {dataType:"json",contentType:"application/json",cache:false,method:'POST'}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }()}};
//#endregion
})();
})();
})();


