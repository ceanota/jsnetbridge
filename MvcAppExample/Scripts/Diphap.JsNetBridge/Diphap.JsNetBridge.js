


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
$dp.$JsNet.$UrlSet = {"Account":{"Login": function actionFactory () { try { var action = {};action.$_Url = null;action.$Names = { $Action : "Login", $Controller : "Account", $Area : "" };action.$sig0 = function actionFactory () { try { var action = {};action.$Params = function(){  var obj = {"returnUrl":""}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {dataType:"json",contentType:"application/json",cache:false}; return obj; };return action; } catch(ex) { throw ex;  } }();action.$sig1 = function actionFactory () { try { var action = {};action.$Params = function(){  var obj = {"model":_alias0.LoginModel(),"returnUrl":""}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {dataType:"json",contentType:"application/json",cache:false}; return obj; };return action; } catch(ex) { throw ex;  } }();action.$GetUrl = function () { return action.$_Url || $dp.$JsNet.$Helpers.$Shared.$Action.getUrlFromTemplate(action); };return action; } catch(ex) { throw ex;  } }(),"LogOff": function actionFactory () { try { var action = {};action.$_Url = null;action.$Names = { $Action : "LogOff", $Controller : "Account", $Area : "" };action.$sig0 = function actionFactory () { try { var action = {};action.$Params = function(){  var obj = null; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {dataType:"json",contentType:"application/json",cache:false}; return obj; };return action; } catch(ex) { throw ex;  } }();action.$GetUrl = function () { return action.$_Url || $dp.$JsNet.$Helpers.$Shared.$Action.getUrlFromTemplate(action); };return action; } catch(ex) { throw ex;  } }(),"Register": function actionFactory () { try { var action = {};action.$_Url = null;action.$Names = { $Action : "Register", $Controller : "Account", $Area : "" };action.$sig0 = function actionFactory () { try { var action = {};action.$Params = function(){  var obj = null; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {dataType:"json",contentType:"application/json",cache:false}; return obj; };return action; } catch(ex) { throw ex;  } }();action.$sig1 = function actionFactory () { try { var action = {};action.$Params = function(){  var obj = {"model":_alias0.RegisterModel()}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {dataType:"json",contentType:"application/json",cache:false}; return obj; };return action; } catch(ex) { throw ex;  } }();action.$GetUrl = function () { return action.$_Url || $dp.$JsNet.$Helpers.$Shared.$Action.getUrlFromTemplate(action); };return action; } catch(ex) { throw ex;  } }(),"Disassociate": function actionFactory () { try { var action = {};action.$_Url = null;action.$Names = { $Action : "Disassociate", $Controller : "Account", $Area : "" };action.$sig0 = function actionFactory () { try { var action = {};action.$Params = function(){  var obj = {"provider":"","providerUserId":""}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {dataType:"json",contentType:"application/json",cache:false}; return obj; };return action; } catch(ex) { throw ex;  } }();action.$GetUrl = function () { return action.$_Url || $dp.$JsNet.$Helpers.$Shared.$Action.getUrlFromTemplate(action); };return action; } catch(ex) { throw ex;  } }(),"Manage": function actionFactory () { try { var action = {};action.$_Url = null;action.$Names = { $Action : "Manage", $Controller : "Account", $Area : "" };action.$sig0 = function actionFactory () { try { var action = {};action.$Params = function(){  var obj = {"message":0}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = {"message":_alias1.ManageMessageId}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {dataType:"json",contentType:"application/json",cache:false}; return obj; };return action; } catch(ex) { throw ex;  } }();action.$sig1 = function actionFactory () { try { var action = {};action.$Params = function(){  var obj = {"model":_alias0.LocalPasswordModel()}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {dataType:"json",contentType:"application/json",cache:false}; return obj; };return action; } catch(ex) { throw ex;  } }();action.$GetUrl = function () { return action.$_Url || $dp.$JsNet.$Helpers.$Shared.$Action.getUrlFromTemplate(action); };return action; } catch(ex) { throw ex;  } }(),"ExternalLogin": function actionFactory () { try { var action = {};action.$_Url = null;action.$Names = { $Action : "ExternalLogin", $Controller : "Account", $Area : "" };action.$sig0 = function actionFactory () { try { var action = {};action.$Params = function(){  var obj = {"provider":"","returnUrl":""}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {dataType:"json",contentType:"application/json",cache:false}; return obj; };return action; } catch(ex) { throw ex;  } }();action.$GetUrl = function () { return action.$_Url || $dp.$JsNet.$Helpers.$Shared.$Action.getUrlFromTemplate(action); };return action; } catch(ex) { throw ex;  } }(),"ExternalLoginCallback": function actionFactory () { try { var action = {};action.$_Url = null;action.$Names = { $Action : "ExternalLoginCallback", $Controller : "Account", $Area : "" };action.$sig0 = function actionFactory () { try { var action = {};action.$Params = function(){  var obj = {"returnUrl":""}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {dataType:"json",contentType:"application/json",cache:false}; return obj; };return action; } catch(ex) { throw ex;  } }();action.$GetUrl = function () { return action.$_Url || $dp.$JsNet.$Helpers.$Shared.$Action.getUrlFromTemplate(action); };return action; } catch(ex) { throw ex;  } }(),"ExternalLoginConfirmation": function actionFactory () { try { var action = {};action.$_Url = null;action.$Names = { $Action : "ExternalLoginConfirmation", $Controller : "Account", $Area : "" };action.$sig0 = function actionFactory () { try { var action = {};action.$Params = function(){  var obj = {"model":_alias0.RegisterExternalLoginModel(),"returnUrl":""}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {dataType:"json",contentType:"application/json",cache:false}; return obj; };return action; } catch(ex) { throw ex;  } }();action.$GetUrl = function () { return action.$_Url || $dp.$JsNet.$Helpers.$Shared.$Action.getUrlFromTemplate(action); };return action; } catch(ex) { throw ex;  } }(),"ExternalLoginFailure": function actionFactory () { try { var action = {};action.$_Url = null;action.$Names = { $Action : "ExternalLoginFailure", $Controller : "Account", $Area : "" };action.$sig0 = function actionFactory () { try { var action = {};action.$Params = function(){  var obj = null; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {dataType:"json",contentType:"application/json",cache:false}; return obj; };return action; } catch(ex) { throw ex;  } }();action.$GetUrl = function () { return action.$_Url || $dp.$JsNet.$Helpers.$Shared.$Action.getUrlFromTemplate(action); };return action; } catch(ex) { throw ex;  } }(),"ExternalLoginsList": function actionFactory () { try { var action = {};action.$_Url = null;action.$Names = { $Action : "ExternalLoginsList", $Controller : "Account", $Area : "" };action.$sig0 = function actionFactory () { try { var action = {};action.$Params = function(){  var obj = {"returnUrl":""}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {dataType:"json",contentType:"application/json",cache:false}; return obj; };return action; } catch(ex) { throw ex;  } }();action.$GetUrl = function () { return action.$_Url || $dp.$JsNet.$Helpers.$Shared.$Action.getUrlFromTemplate(action); };return action; } catch(ex) { throw ex;  } }(),"RemoveExternalLogins": function actionFactory () { try { var action = {};action.$_Url = null;action.$Names = { $Action : "RemoveExternalLogins", $Controller : "Account", $Area : "" };action.$sig0 = function actionFactory () { try { var action = {};action.$Params = function(){  var obj = null; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {dataType:"json",contentType:"application/json",cache:false}; return obj; };return action; } catch(ex) { throw ex;  } }();action.$GetUrl = function () { return action.$_Url || $dp.$JsNet.$Helpers.$Shared.$Action.getUrlFromTemplate(action); };return action; } catch(ex) { throw ex;  } }()},
"Home":{"Index": function actionFactory () { try { var action = {};action.$_Url = null;action.$Names = { $Action : "Index", $Controller : "Home", $Area : "" };action.$sig0 = function actionFactory () { try { var action = {};action.$Params = function(){  var obj = null; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {dataType:"json",contentType:"application/json",cache:false}; return obj; };return action; } catch(ex) { throw ex;  } }();action.$GetUrl = function () { return action.$_Url || $dp.$JsNet.$Helpers.$Shared.$Action.getUrlFromTemplate(action); };return action; } catch(ex) { throw ex;  } }(),"About": function actionFactory () { try { var action = {};action.$_Url = null;action.$Names = { $Action : "About", $Controller : "Home", $Area : "" };action.$sig0 = function actionFactory () { try { var action = {};action.$Params = function(){  var obj = null; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {dataType:"json",contentType:"application/json",cache:false}; return obj; };return action; } catch(ex) { throw ex;  } }();action.$GetUrl = function () { return action.$_Url || $dp.$JsNet.$Helpers.$Shared.$Action.getUrlFromTemplate(action); };return action; } catch(ex) { throw ex;  } }(),"Contact": function actionFactory () { try { var action = {};action.$_Url = null;action.$Names = { $Action : "Contact", $Controller : "Home", $Area : "" };action.$sig0 = function actionFactory () { try { var action = {};action.$Params = function(){  var obj = null; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {dataType:"json",contentType:"application/json",cache:false}; return obj; };return action; } catch(ex) { throw ex;  } }();action.$GetUrl = function () { return action.$_Url || $dp.$JsNet.$Helpers.$Shared.$Action.getUrlFromTemplate(action); };return action; } catch(ex) { throw ex;  } }()}};
//#endregion
})();
})();
})();


