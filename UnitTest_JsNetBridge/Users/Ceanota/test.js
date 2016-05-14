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
            var selectedRoute;
            if (action.$IsApiController) {
                selectedRoute = $dp.$JsNet.$Helpers.$Api.$Routes.$selectedRoute || _defaultApiRoute;

                url = (action.$RouteTemplate || selectedRoute.$RouteTemplate).$dpFormat(action.$Names);
                if (routeData) { url = url.$dpFormat(routeData); }
                url = _cleanRouteTemplate(url);
                if (url.indexOf('/') !== 0) { url = '/' + url; }
                url.replace('//', '/');

            }
            else {
                selectedRoute = $dp.$JsNet.$Helpers.$Mvc.$Routes.$selectedRoute || _defaultMvcRoute;

                url = (action.$RouteTemplate || selectedRoute.$RouteTemplate).$dpFormat(action.$Names);
                if (routeData) { url = url.$dpFormat(routeData); }
                url = _cleanRouteTemplate(url);
                if (url.indexOf('/') !== 0) { url = '/' + url; }
                url.replace('//', '/');

                if (action.$Names.area) {
                    url = '/' + action.$Names.area + url;
                }
            };

            //-- querystring
            var unusedRouteData = _noMatch(selectedRoute.$RouteTemplate, routeData);
            var queryString = _toQueryString(unusedRouteData);
            if (queryString) {
                url = url + '?' + queryString;
            }

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
        var _stampFunc = function () { return $dp.$JsNet; };
        (function () {
            //#region 'Model'
            window.$dp = window.$dp || {};
            $dp.$JsNet = $dp.$JsNet || {};
            $dp.$JsNet.SingleAppExample = $dp.$JsNet.SingleAppExample || {};
            $dp.$JsNet.SingleAppExample.Areas = $dp.$JsNet.SingleAppExample.Areas || {};
            $dp.$JsNet.SingleAppExample.Areas.HelpPage = $dp.$JsNet.SingleAppExample.Areas.HelpPage || {};
            $dp.$JsNet.SingleAppExample.Areas.HelpPage.Models = $dp.$JsNet.SingleAppExample.Areas.HelpPage.Models || {};
            $dp.$JsNet.SingleAppExample.Models = $dp.$JsNet.SingleAppExample.Models || {};
            $dp.$JsNet.SingleAppExample.Controllers = $dp.$JsNet.SingleAppExample.Controllers || {};
            var _alias0 = $dp.$JsNet.SingleAppExample.Areas.HelpPage.Models;
            var _alias1 = $dp.$JsNet.SingleAppExample.Models;
            var _alias2 = $dp.$JsNet.SingleAppExample.Controllers;
            _alias0.HelpPageApiModel = _alias0.HelpPageApiModel || function () { var args = Array.prototype.slice.call(arguments); var obj = { "ErrorMessages": $dp.$shared.$arrayFactory(""), "ApiDescription": {}, "SampleRequests": $dp.$shared.$arrayFactory({}), "SampleResponses": $dp.$shared.$arrayFactory({}) }; obj.constructor = _alias0.HelpPageApiModel; return obj; };
            _alias1.UserProfile = _alias1.UserProfile || function () { var args = Array.prototype.slice.call(arguments); var obj = { "UserId": 0, "UserName": "" }; obj.constructor = _alias1.UserProfile; return obj; };
            _alias1.RegisterExternalLoginModel = _alias1.RegisterExternalLoginModel || function () { var args = Array.prototype.slice.call(arguments); var obj = { "UserName": "", "ExternalLoginData": "" }; obj.constructor = _alias1.RegisterExternalLoginModel; return obj; };
            _alias1.LocalPasswordModel = _alias1.LocalPasswordModel || function () { var args = Array.prototype.slice.call(arguments); var obj = { "OldPassword": "", "NewPassword": "", "ConfirmPassword": "" }; obj.constructor = _alias1.LocalPasswordModel; return obj; };
            _alias1.LoginModel = _alias1.LoginModel || function () { var args = Array.prototype.slice.call(arguments); var obj = { "UserName": "", "Password": "", "RememberMe": false }; obj.constructor = _alias1.LoginModel; return obj; };
            _alias1.RegisterModel = _alias1.RegisterModel || function () { var args = Array.prototype.slice.call(arguments); var obj = { "UserName": "", "Password": "", "ConfirmPassword": "" }; obj.constructor = _alias1.RegisterModel; return obj; };
            _alias1.ExternalLogin = _alias1.ExternalLogin || function () { var args = Array.prototype.slice.call(arguments); var obj = { "Provider": "", "ProviderDisplayName": "", "ProviderUserId": "" }; obj.constructor = _alias1.ExternalLogin; return obj; };
            _alias1.TodoItemDto = _alias1.TodoItemDto || function () { var args = Array.prototype.slice.call(arguments); var obj = { "TodoItemId": 0, "Title": "", "IsDone": false, "TodoListId": 0 }; obj.constructor = _alias1.TodoItemDto; return obj; };
            _alias1.TodoList = _alias1.TodoList || function () { var args = Array.prototype.slice.call(arguments); var obj = { "TodoListId": 0, "UserId": "", "Title": "", "Todos": $dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)(_alias1.TodoItem)) }; obj.constructor = _alias1.TodoList; return obj; };
            _alias1.TodoItem = _alias1.TodoItem || function () { var args = Array.prototype.slice.call(arguments); var obj = { "TodoItemId": 0, "Title": "", "IsDone": false, "TodoListId": 0, "TodoList": $dp.$shared.$circularReferenceManagerFactory.apply(null, args)(_alias1.TodoList) }; obj.constructor = _alias1.TodoItem; return obj; };
            _alias2.Personnage = _alias2.Personnage || function () { var args = Array.prototype.slice.call(arguments); var obj = { "Nom": "" }; obj.constructor = _alias2.Personnage; return obj; };
            _alias1.TodoListDto = _alias1.TodoListDto || function () { var args = Array.prototype.slice.call(arguments); var obj = { "TodoListId": 0, "UserId": "", "Title": "", "Todos": $dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)(_alias1.TodoItemDto)) }; obj.constructor = _alias1.TodoListDto; return obj; };
            //#endregion
            //#region 'Enum'
            window.$dp = window.$dp || {};
            $dp.$JsNet = $dp.$JsNet || {};
            $dp.$JsNet.SingleAppExample = $dp.$JsNet.SingleAppExample || {};
            $dp.$JsNet.SingleAppExample.Areas = $dp.$JsNet.SingleAppExample.Areas || {};
            $dp.$JsNet.SingleAppExample.Areas.HelpPage = $dp.$JsNet.SingleAppExample.Areas.HelpPage || {};
            $dp.$JsNet.SingleAppExample.Controllers = $dp.$JsNet.SingleAppExample.Controllers || {};
            $dp.$JsNet.SingleAppExample.Controllers.$JsNs$_AccountController = $dp.$JsNet.SingleAppExample.Controllers.$JsNs$_AccountController || {};
            var _alias3 = $dp.$JsNet.SingleAppExample.Areas.HelpPage;
            var _alias4 = $dp.$JsNet.SingleAppExample.Controllers.$JsNs$_AccountController;
            _alias3.SampleDirection = _alias3.SampleDirection || { "Request": { "$Key": "Request", "$Value": 0 }, "Response": { "$Key": "Response", "$Value": 1 } };
            _alias4.ManageMessageId = _alias4.ManageMessageId || { "ChangePasswordSuccess": { "$Key": "ChangePasswordSuccess", "$Value": 0 }, "SetPasswordSuccess": { "$Key": "SetPasswordSuccess", "$Value": 1 }, "RemoveLoginSuccess": { "$Key": "RemoveLoginSuccess", "$Value": 2 } };
            //#endregion
            //#region 'UrlSet'
            window.$dp = window.$dp || {};
            $dp.$JsNet = $dp.$JsNet || {};
            $dp.$JsNet.$UrlSet = {
                "HelpPage": { "Help": { "Index": function actionFactory() { try { var obj = {}; obj.$action0 = function actionFactory() { try { var action = {}; action.$_Url = null; action.$GetUrl = function (routeData) { var f = $dp.$JsNet.$Helpers.$Shared.$Action.getUrlFromTemplate; if (!routeData) { return action.$_Url || f(action); } else { return f(action, routeData); } }; action.$Names = { action: "Index", controller: "Help", area: "HelpPage" }; action.$Params = function () { var obj = null; return obj; }; action.$Return = function () { var obj = {}; return obj; }; action.$Enums = function () { var obj = null; return obj; }; action.$IsApiController = null; action.$AjaxOptions = function () { var obj = { dataType: "json", contentType: "application/json", cache: false }; return obj; }; action.$RouteTemplate = ''; return action; } catch (ex) { throw ex; } }(); return obj; } catch (ex) { throw ex; } }(), "Api": function actionFactory() { try { var obj = {}; obj.$action0 = function actionFactory() { try { var action = {}; action.$_Url = null; action.$GetUrl = function (routeData) { var f = $dp.$JsNet.$Helpers.$Shared.$Action.getUrlFromTemplate; if (!routeData) { return action.$_Url || f(action); } else { return f(action, routeData); } }; action.$Names = { action: "Api", controller: "Help", area: "HelpPage" }; action.$Params = function () { var obj = { "apiId": "" }; return obj; }; action.$Return = function () { var obj = {}; return obj; }; action.$Enums = function () { var obj = null; return obj; }; action.$IsApiController = null; action.$AjaxOptions = function () { var obj = { dataType: "json", contentType: "application/json", cache: false }; return obj; }; action.$RouteTemplate = ''; return action; } catch (ex) { throw ex; } }(); return obj; } catch (ex) { throw ex; } }() } },
                "Account": { "JsonLogin": function actionFactory() { try { var obj = {}; obj.$action0 = function actionFactory() { try { var action = {}; action.$_Url = null; action.$GetUrl = function (routeData) { var f = $dp.$JsNet.$Helpers.$Shared.$Action.getUrlFromTemplate; if (!routeData) { return action.$_Url || f(action); } else { return f(action, routeData); } }; action.$Names = { action: "JsonLogin", controller: "Account", area: "" }; action.$Params = function () { var obj = { "model": _alias1.LoginModel(), "returnUrl": "" }; return obj; }; action.$Return = function () { var obj = {}; return obj; }; action.$Enums = function () { var obj = null; return obj; }; action.$IsApiController = null; action.$AjaxOptions = function () { var obj = { dataType: "json", contentType: "application/json", cache: false }; return obj; }; action.$RouteTemplate = ''; return action; } catch (ex) { throw ex; } }(); return obj; } catch (ex) { throw ex; } }(), "LogOff": function actionFactory() { try { var obj = {}; obj.$action0 = function actionFactory() { try { var action = {}; action.$_Url = null; action.$GetUrl = function (routeData) { var f = $dp.$JsNet.$Helpers.$Shared.$Action.getUrlFromTemplate; if (!routeData) { return action.$_Url || f(action); } else { return f(action, routeData); } }; action.$Names = { action: "LogOff", controller: "Account", area: "" }; action.$Params = function () { var obj = null; return obj; }; action.$Return = function () { var obj = {}; return obj; }; action.$Enums = function () { var obj = null; return obj; }; action.$IsApiController = null; action.$AjaxOptions = function () { var obj = { dataType: "json", contentType: "application/json", cache: false }; return obj; }; action.$RouteTemplate = ''; return action; } catch (ex) { throw ex; } }(); return obj; } catch (ex) { throw ex; } }(), "JsonRegister": function actionFactory() { try { var obj = {}; obj.$action0 = function actionFactory() { try { var action = {}; action.$_Url = null; action.$GetUrl = function (routeData) { var f = $dp.$JsNet.$Helpers.$Shared.$Action.getUrlFromTemplate; if (!routeData) { return action.$_Url || f(action); } else { return f(action, routeData); } }; action.$Names = { action: "JsonRegister", controller: "Account", area: "" }; action.$Params = function () { var obj = { "model": _alias1.RegisterModel(), "returnUrl": "" }; return obj; }; action.$Return = function () { var obj = {}; return obj; }; action.$Enums = function () { var obj = null; return obj; }; action.$IsApiController = null; action.$AjaxOptions = function () { var obj = { dataType: "json", contentType: "application/json", cache: false }; return obj; }; action.$RouteTemplate = ''; return action; } catch (ex) { throw ex; } }(); return obj; } catch (ex) { throw ex; } }(), "Disassociate": function actionFactory() { try { var obj = {}; obj.$action0 = function actionFactory() { try { var action = {}; action.$_Url = null; action.$GetUrl = function (routeData) { var f = $dp.$JsNet.$Helpers.$Shared.$Action.getUrlFromTemplate; if (!routeData) { return action.$_Url || f(action); } else { return f(action, routeData); } }; action.$Names = { action: "Disassociate", controller: "Account", area: "" }; action.$Params = function () { var obj = { "provider": "", "providerUserId": "" }; return obj; }; action.$Return = function () { var obj = {}; return obj; }; action.$Enums = function () { var obj = null; return obj; }; action.$IsApiController = null; action.$AjaxOptions = function () { var obj = { dataType: "json", contentType: "application/json", cache: false }; return obj; }; action.$RouteTemplate = ''; return action; } catch (ex) { throw ex; } }(); return obj; } catch (ex) { throw ex; } }(), "Manage": function actionFactory() { try { var obj = {}; obj.$action0 = function actionFactory() { try { var action = {}; action.$_Url = null; action.$GetUrl = function (routeData) { var f = $dp.$JsNet.$Helpers.$Shared.$Action.getUrlFromTemplate; if (!routeData) { return action.$_Url || f(action); } else { return f(action, routeData); } }; action.$Names = { action: "Manage", controller: "Account", area: "" }; action.$Params = function () { var obj = { "message": 0 }; return obj; }; action.$Return = function () { var obj = {}; return obj; }; action.$Enums = function () { var obj = { "message": _alias4.ManageMessageId }; return obj; }; action.$IsApiController = null; action.$AjaxOptions = function () { var obj = { dataType: "json", contentType: "application/json", cache: false }; return obj; }; action.$RouteTemplate = ''; return action; } catch (ex) { throw ex; } }(); obj.$action1 = function actionFactory() { try { var action = {}; action.$_Url = null; action.$GetUrl = function (routeData) { var f = $dp.$JsNet.$Helpers.$Shared.$Action.getUrlFromTemplate; if (!routeData) { return action.$_Url || f(action); } else { return f(action, routeData); } }; action.$Names = { action: "Manage", controller: "Account", area: "" }; action.$Params = function () { var obj = { "model": _alias1.LocalPasswordModel() }; return obj; }; action.$Return = function () { var obj = {}; return obj; }; action.$Enums = function () { var obj = null; return obj; }; action.$IsApiController = null; action.$AjaxOptions = function () { var obj = { dataType: "json", contentType: "application/json", cache: false }; return obj; }; action.$RouteTemplate = ''; return action; } catch (ex) { throw ex; } }(); return obj; } catch (ex) { throw ex; } }(), "ExternalLogin": function actionFactory() { try { var obj = {}; obj.$action0 = function actionFactory() { try { var action = {}; action.$_Url = null; action.$GetUrl = function (routeData) { var f = $dp.$JsNet.$Helpers.$Shared.$Action.getUrlFromTemplate; if (!routeData) { return action.$_Url || f(action); } else { return f(action, routeData); } }; action.$Names = { action: "ExternalLogin", controller: "Account", area: "" }; action.$Params = function () { var obj = { "provider": "", "returnUrl": "" }; return obj; }; action.$Return = function () { var obj = {}; return obj; }; action.$Enums = function () { var obj = null; return obj; }; action.$IsApiController = null; action.$AjaxOptions = function () { var obj = { dataType: "json", contentType: "application/json", cache: false }; return obj; }; action.$RouteTemplate = ''; return action; } catch (ex) { throw ex; } }(); return obj; } catch (ex) { throw ex; } }(), "ExternalLoginCallback": function actionFactory() { try { var obj = {}; obj.$action0 = function actionFactory() { try { var action = {}; action.$_Url = null; action.$GetUrl = function (routeData) { var f = $dp.$JsNet.$Helpers.$Shared.$Action.getUrlFromTemplate; if (!routeData) { return action.$_Url || f(action); } else { return f(action, routeData); } }; action.$Names = { action: "ExternalLoginCallback", controller: "Account", area: "" }; action.$Params = function () { var obj = { "returnUrl": "" }; return obj; }; action.$Return = function () { var obj = {}; return obj; }; action.$Enums = function () { var obj = null; return obj; }; action.$IsApiController = null; action.$AjaxOptions = function () { var obj = { dataType: "json", contentType: "application/json", cache: false }; return obj; }; action.$RouteTemplate = ''; return action; } catch (ex) { throw ex; } }(); return obj; } catch (ex) { throw ex; } }(), "ExternalLoginConfirmation": function actionFactory() { try { var obj = {}; obj.$action0 = function actionFactory() { try { var action = {}; action.$_Url = null; action.$GetUrl = function (routeData) { var f = $dp.$JsNet.$Helpers.$Shared.$Action.getUrlFromTemplate; if (!routeData) { return action.$_Url || f(action); } else { return f(action, routeData); } }; action.$Names = { action: "ExternalLoginConfirmation", controller: "Account", area: "" }; action.$Params = function () { var obj = { "model": _alias1.RegisterExternalLoginModel(), "returnUrl": "" }; return obj; }; action.$Return = function () { var obj = {}; return obj; }; action.$Enums = function () { var obj = null; return obj; }; action.$IsApiController = null; action.$AjaxOptions = function () { var obj = { dataType: "json", contentType: "application/json", cache: false }; return obj; }; action.$RouteTemplate = ''; return action; } catch (ex) { throw ex; } }(); return obj; } catch (ex) { throw ex; } }(), "ExternalLoginFailure": function actionFactory() { try { var obj = {}; obj.$action0 = function actionFactory() { try { var action = {}; action.$_Url = null; action.$GetUrl = function (routeData) { var f = $dp.$JsNet.$Helpers.$Shared.$Action.getUrlFromTemplate; if (!routeData) { return action.$_Url || f(action); } else { return f(action, routeData); } }; action.$Names = { action: "ExternalLoginFailure", controller: "Account", area: "" }; action.$Params = function () { var obj = null; return obj; }; action.$Return = function () { var obj = {}; return obj; }; action.$Enums = function () { var obj = null; return obj; }; action.$IsApiController = null; action.$AjaxOptions = function () { var obj = { dataType: "json", contentType: "application/json", cache: false }; return obj; }; action.$RouteTemplate = ''; return action; } catch (ex) { throw ex; } }(); return obj; } catch (ex) { throw ex; } }(), "ExternalLoginsList": function actionFactory() { try { var obj = {}; obj.$action0 = function actionFactory() { try { var action = {}; action.$_Url = null; action.$GetUrl = function (routeData) { var f = $dp.$JsNet.$Helpers.$Shared.$Action.getUrlFromTemplate; if (!routeData) { return action.$_Url || f(action); } else { return f(action, routeData); } }; action.$Names = { action: "ExternalLoginsList", controller: "Account", area: "" }; action.$Params = function () { var obj = { "returnUrl": "" }; return obj; }; action.$Return = function () { var obj = {}; return obj; }; action.$Enums = function () { var obj = null; return obj; }; action.$IsApiController = null; action.$AjaxOptions = function () { var obj = { dataType: "json", contentType: "application/json", cache: false }; return obj; }; action.$RouteTemplate = ''; return action; } catch (ex) { throw ex; } }(); return obj; } catch (ex) { throw ex; } }(), "RemoveExternalLogins": function actionFactory() { try { var obj = {}; obj.$action0 = function actionFactory() { try { var action = {}; action.$_Url = null; action.$GetUrl = function (routeData) { var f = $dp.$JsNet.$Helpers.$Shared.$Action.getUrlFromTemplate; if (!routeData) { return action.$_Url || f(action); } else { return f(action, routeData); } }; action.$Names = { action: "RemoveExternalLogins", controller: "Account", area: "" }; action.$Params = function () { var obj = null; return obj; }; action.$Return = function () { var obj = {}; return obj; }; action.$Enums = function () { var obj = null; return obj; }; action.$IsApiController = null; action.$AjaxOptions = function () { var obj = { dataType: "json", contentType: "application/json", cache: false }; return obj; }; action.$RouteTemplate = ''; return action; } catch (ex) { throw ex; } }(); return obj; } catch (ex) { throw ex; } }() },
                "Home": { "Index": function actionFactory() { try { var obj = {}; obj.$action0 = function actionFactory() { try { var action = {}; action.$_Url = null; action.$GetUrl = function (routeData) { var f = $dp.$JsNet.$Helpers.$Shared.$Action.getUrlFromTemplate; if (!routeData) { return action.$_Url || f(action); } else { return f(action, routeData); } }; action.$Names = { action: "Index", controller: "Home", area: "" }; action.$Params = function () { var obj = { "returnUrl": "" }; return obj; }; action.$Return = function () { var obj = {}; return obj; }; action.$Enums = function () { var obj = null; return obj; }; action.$IsApiController = null; action.$AjaxOptions = function () { var obj = { dataType: "json", contentType: "application/json", cache: false }; return obj; }; action.$RouteTemplate = ''; return action; } catch (ex) { throw ex; } }(); return obj; } catch (ex) { throw ex; } }() },
                "Todo": { "PutTodoItem": function actionFactory() { try { var obj = {}; obj.$action0 = function actionFactory() { try { var action = {}; action.$_Url = null; action.$GetUrl = function (routeData) { var f = $dp.$JsNet.$Helpers.$Shared.$Action.getUrlFromTemplate; if (!routeData) { return action.$_Url || f(action); } else { return f(action, routeData); } }; action.$Names = { action: "PutTodoItem", controller: "Todo", area: "" }; action.$Params = function () { var obj = { "id": 0, "todoItemDto": _alias1.TodoItemDto() }; return obj; }; action.$Return = function () { var obj = {}; return obj; }; action.$Enums = function () { var obj = null; return obj; }; action.$IsApiController = { $httpMethodArray: { $put: "put", $items: ["put"], $single: "put" } }; action.$AjaxOptions = function () { var obj = { dataType: "text", contentType: "application/json", cache: false }; return obj; }; action.$RouteTemplate = ''; return action; } catch (ex) { throw ex; } }(); return obj; } catch (ex) { throw ex; } }(), "PostTodoItem": function actionFactory() { try { var obj = {}; obj.$action0 = function actionFactory() { try { var action = {}; action.$_Url = null; action.$GetUrl = function (routeData) { var f = $dp.$JsNet.$Helpers.$Shared.$Action.getUrlFromTemplate; if (!routeData) { return action.$_Url || f(action); } else { return f(action, routeData); } }; action.$Names = { action: "PostTodoItem", controller: "Todo", area: "" }; action.$Params = function () { var obj = { "todoItemDto": _alias1.TodoItemDto() }; return obj; }; action.$Return = function () { var obj = _alias1.TodoItemDto(); return obj; }; action.$Enums = function () { var obj = null; return obj; }; action.$IsApiController = { $httpMethodArray: { $post: "post", $items: ["post"], $single: "post" } }; action.$AjaxOptions = function () { var obj = { dataType: "text", contentType: "application/json", cache: false }; return obj; }; action.$RouteTemplate = ''; return action; } catch (ex) { throw ex; } }(); return obj; } catch (ex) { throw ex; } }(), "DeleteTodoItem": function actionFactory() { try { var obj = {}; obj.$action0 = function actionFactory() { try { var action = {}; action.$_Url = null; action.$GetUrl = function (routeData) { var f = $dp.$JsNet.$Helpers.$Shared.$Action.getUrlFromTemplate; if (!routeData) { return action.$_Url || f(action); } else { return f(action, routeData); } }; action.$Names = { action: "DeleteTodoItem", controller: "Todo", area: "" }; action.$Params = function () { var obj = { "id": 0 }; return obj; }; action.$Return = function () { var obj = {}; return obj; }; action.$Enums = function () { var obj = null; return obj; }; action.$IsApiController = { $httpMethodArray: { $delete: "delete", $items: ["delete"], $single: "delete" } }; action.$AjaxOptions = function () { var obj = { dataType: "text", contentType: "application/json", cache: false }; return obj; }; action.$RouteTemplate = ''; return action; } catch (ex) { throw ex; } }(); return obj; } catch (ex) { throw ex; } }(), "testPut": function actionFactory() { try { var obj = {}; obj.$action0 = function actionFactory() { try { var action = {}; action.$_Url = null; action.$GetUrl = function (routeData) { var f = $dp.$JsNet.$Helpers.$Shared.$Action.getUrlFromTemplate; if (!routeData) { return action.$_Url || f(action); } else { return f(action, routeData); } }; action.$Names = { action: "testPutt", controller: "Todo", area: "" }; action.$Params = function () { var obj = null; return obj; }; action.$Return = function () { var obj = {}; return obj; }; action.$Enums = function () { var obj = null; return obj; }; action.$IsApiController = { $httpMethodArray: { $PUT: "PUT", $TEST: "TEST", $GET: "GET", $items: ["PUT", "TEST", "GET"], $single: null } }; action.$AjaxOptions = function () { var obj = { dataType: "text", contentType: "application/json", cache: false }; return obj; }; action.$RouteTemplate = ''; return action; } catch (ex) { throw ex; } }(); return obj; } catch (ex) { throw ex; } }(), "test1Put": function actionFactory() { try { var obj = {}; obj.$action0 = function actionFactory() { try { var action = {}; action.$_Url = null; action.$GetUrl = function (routeData) { var f = $dp.$JsNet.$Helpers.$Shared.$Action.getUrlFromTemplate; if (!routeData) { return action.$_Url || f(action); } else { return f(action, routeData); } }; action.$Names = { action: "test1Put", controller: "Todo", area: "" }; action.$Params = function () { var obj = null; return obj; }; action.$Return = function () { var obj = $dp.$shared.$arrayFactory(_alias2.Personnage()); return obj; }; action.$Enums = function () { var obj = null; return obj; }; action.$IsApiController = { $httpMethodArray: { $put: "put", $items: ["put"], $single: "put" } }; action.$AjaxOptions = function () { var obj = { dataType: "json", contentType: "application/json", cache: false }; return obj; }; action.$RouteTemplate = 'customers/{customerId}/orders'; return action; } catch (ex) { throw ex; } }(); return obj; } catch (ex) { throw ex; } }() },
                "TodoList": { "GetTodoLists": function actionFactory() { try { var obj = {}; obj.$action0 = function actionFactory() { try { var action = {}; action.$_Url = null; action.$GetUrl = function (routeData) { var f = $dp.$JsNet.$Helpers.$Shared.$Action.getUrlFromTemplate; if (!routeData) { return action.$_Url || f(action); } else { return f(action, routeData); } }; action.$Names = { action: "GetTodoLists", controller: "TodoList", area: "" }; action.$Params = function () { var obj = null; return obj; }; action.$Return = function () { var obj = $dp.$shared.$arrayFactory(_alias1.TodoListDto()); return obj; }; action.$Enums = function () { var obj = null; return obj; }; action.$IsApiController = { $httpMethodArray: { $get: "get", $items: ["get"], $single: "get" } }; action.$AjaxOptions = function () { var obj = { dataType: "json", contentType: "application/json", cache: false }; return obj; }; action.$RouteTemplate = ''; return action; } catch (ex) { throw ex; } }(); return obj; } catch (ex) { throw ex; } }(), "GetTodoList": function actionFactory() { try { var obj = {}; obj.$action0 = function actionFactory() { try { var action = {}; action.$_Url = null; action.$GetUrl = function (routeData) { var f = $dp.$JsNet.$Helpers.$Shared.$Action.getUrlFromTemplate; if (!routeData) { return action.$_Url || f(action); } else { return f(action, routeData); } }; action.$Names = { action: "GetTodoList", controller: "TodoList", area: "" }; action.$Params = function () { var obj = { "id": 0 }; return obj; }; action.$Return = function () { var obj = _alias1.TodoListDto(); return obj; }; action.$Enums = function () { var obj = null; return obj; }; action.$IsApiController = { $httpMethodArray: { $get: "get", $items: ["get"], $single: "get" } }; action.$AjaxOptions = function () { var obj = { dataType: "json", contentType: "application/json", cache: false }; return obj; }; action.$RouteTemplate = ''; return action; } catch (ex) { throw ex; } }(); return obj; } catch (ex) { throw ex; } }(), "PutTodoList": function actionFactory() { try { var obj = {}; obj.$action0 = function actionFactory() { try { var action = {}; action.$_Url = null; action.$GetUrl = function (routeData) { var f = $dp.$JsNet.$Helpers.$Shared.$Action.getUrlFromTemplate; if (!routeData) { return action.$_Url || f(action); } else { return f(action, routeData); } }; action.$Names = { action: "PutTodoList", controller: "TodoList", area: "" }; action.$Params = function () { var obj = { "id": 0, "todoListDto": _alias1.TodoListDto() }; return obj; }; action.$Return = function () { var obj = {}; return obj; }; action.$Enums = function () { var obj = null; return obj; }; action.$IsApiController = { $httpMethodArray: { $put: "put", $items: ["put"], $single: "put" } }; action.$AjaxOptions = function () { var obj = { dataType: "text", contentType: "application/json", cache: false }; return obj; }; action.$RouteTemplate = ''; return action; } catch (ex) { throw ex; } }(); return obj; } catch (ex) { throw ex; } }(), "PostTodoList": function actionFactory() { try { var obj = {}; obj.$action0 = function actionFactory() { try { var action = {}; action.$_Url = null; action.$GetUrl = function (routeData) { var f = $dp.$JsNet.$Helpers.$Shared.$Action.getUrlFromTemplate; if (!routeData) { return action.$_Url || f(action); } else { return f(action, routeData); } }; action.$Names = { action: "PostTodoList", controller: "TodoList", area: "" }; action.$Params = function () { var obj = { "todoListDto": _alias1.TodoListDto() }; return obj; }; action.$Return = function () { var obj = {}; return obj; }; action.$Enums = function () { var obj = null; return obj; }; action.$IsApiController = { $httpMethodArray: { $post: "post", $items: ["post"], $single: "post" } }; action.$AjaxOptions = function () { var obj = { dataType: "text", contentType: "application/json", cache: false }; return obj; }; action.$RouteTemplate = ''; return action; } catch (ex) { throw ex; } }(); return obj; } catch (ex) { throw ex; } }(), "DeleteTodoList": function actionFactory() { try { var obj = {}; obj.$action0 = function actionFactory() { try { var action = {}; action.$_Url = null; action.$GetUrl = function (routeData) { var f = $dp.$JsNet.$Helpers.$Shared.$Action.getUrlFromTemplate; if (!routeData) { return action.$_Url || f(action); } else { return f(action, routeData); } }; action.$Names = { action: "DeleteTodoList", controller: "TodoList", area: "" }; action.$Params = function () { var obj = { "id": 0 }; return obj; }; action.$Return = function () { var obj = {}; return obj; }; action.$Enums = function () { var obj = null; return obj; }; action.$IsApiController = { $httpMethodArray: { $delete: "delete", $items: ["delete"], $single: "delete" } }; action.$AjaxOptions = function () { var obj = { dataType: "text", contentType: "application/json", cache: false }; return obj; }; action.$RouteTemplate = ''; return action; } catch (ex) { throw ex; } }(); return obj; } catch (ex) { throw ex; } }() }
            };
            //#endregion
        })();
    })();
})(); 
