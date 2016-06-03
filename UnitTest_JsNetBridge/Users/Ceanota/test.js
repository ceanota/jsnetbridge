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
            action.$IsApi = false;
            action.$httpMethodArray = { $items:['post','get'], $single:'post', $first:'post' };
            action.$AjaxSettings = function () { var obj = { dataType: 'json', contentType: 'application/json', cache: false, method: 'POST' }; return obj; };
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
(function () {
(function () {
    var message = '[circularReferenceManagerFactory.js] or [arrayFactory.js] or [actionHelper.js] is missing';
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
$dp.$JsNet.ContosoUniversity = $dp.$JsNet.ContosoUniversity || {};
$dp.$JsNet.ContosoUniversity.Models = $dp.$JsNet.ContosoUniversity.Models || {};
$dp.$JsNet.ContosoUniversity.Controllers = $dp.$JsNet.ContosoUniversity.Controllers || {};
$dp.$JsNet.ContosoUniversity.Controllers.$JsNs$_StudentController = $dp.$JsNet.ContosoUniversity.Controllers.$JsNs$_StudentController || {};
var _alias0 = $dp.$JsNet.ContosoUniversity.Models;
var _alias1 = $dp.$JsNet.ContosoUniversity.Controllers.$JsNs$_StudentController;
_alias0.LoginModel = _alias0.LoginModel || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"UserName":"","Password":"","RememberMe":false};obj.constructor=_alias0.LoginModel; return obj; };
_alias0.RegisterModel = _alias0.RegisterModel || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"UserName":"","Password":"","ConfirmPassword":""};obj.constructor=_alias0.RegisterModel; return obj; };
_alias0.LocalPasswordModel = _alias0.LocalPasswordModel || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"OldPassword":"","NewPassword":"","ConfirmPassword":""};obj.constructor=_alias0.LocalPasswordModel; return obj; };
_alias0.RegisterExternalLoginModel = _alias0.RegisterExternalLoginModel || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"UserName":"","ExternalLoginData":""};obj.constructor=_alias0.RegisterExternalLoginModel; return obj; };
_alias0.Student = _alias0.Student || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"EnrollmentDate":new Date(),"PersonID":0,"LastName":"","FirstMidName":"","FullName":"","Enrollments":$dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)(_alias0.Enrollment))};obj.constructor=_alias0.Student; return obj; };
_alias0.OfficeAssignment = _alias0.OfficeAssignment || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"PersonID":0,"Location":"","Instructor":$dp.$shared.$circularReferenceManagerFactory.apply(null, args)(_alias0.Instructor)};obj.constructor=_alias0.OfficeAssignment; return obj; };
_alias1.TestClass = _alias1.TestClass || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"HelloWorld":""};obj.constructor=_alias1.TestClass; return obj; };
_alias0.Enrollment = _alias0.Enrollment || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"EnrollmentID":0,"CourseID":0,"PersonID":0,"Grade":0,"Student":$dp.$shared.$circularReferenceManagerFactory.apply(null, args)(_alias0.Student),"Course":$dp.$shared.$circularReferenceManagerFactory.apply(null, args)(_alias0.Course)};obj.constructor=_alias0.Enrollment; return obj; };
_alias0.Instructor = _alias0.Instructor || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"HireDate":new Date(),"OfficeAssignment":$dp.$shared.$circularReferenceManagerFactory.apply(null, args)(_alias0.OfficeAssignment),"PersonID":0,"LastName":"","FirstMidName":"","FullName":"","Courses":$dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)(_alias0.Course))};obj.constructor=_alias0.Instructor; return obj; };
_alias0.Course = _alias0.Course || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"CourseID":0,"Title":"","Credits":0,"DepartmentID":0,"Enrollments":$dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)(_alias0.Enrollment)),"Instructors":$dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)(_alias0.Instructor)),"Department":$dp.$shared.$circularReferenceManagerFactory.apply(null, args)(_alias0.Department)};obj.constructor=_alias0.Course; return obj; };
_alias0.Department = _alias0.Department || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"DepartmentID":0,"Name":"","Budget":0,"StartDate":new Date(),"PersonID":0,"RowVersion":$dp.$shared.$arrayFactory(0),"Administrator":$dp.$shared.$circularReferenceManagerFactory.apply(null, args)(_alias0.Instructor),"Courses_":$dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)(_alias0.Course)),"Courses":$dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)(_alias0.Course))};obj.constructor=_alias0.Department; return obj; };
//#endregion
//#region 'Enum'
window.$dp = window.$dp || {};
$dp.$JsNet = $dp.$JsNet || {};
$dp.$JsNet.ContosoUniversity = $dp.$JsNet.ContosoUniversity || {};
$dp.$JsNet.ContosoUniversity.Controllers = $dp.$JsNet.ContosoUniversity.Controllers || {};
$dp.$JsNet.ContosoUniversity.Controllers.$JsNs$_AccountController = $dp.$JsNet.ContosoUniversity.Controllers.$JsNs$_AccountController || {};
$dp.$JsNet.TestModels = $dp.$JsNet.TestModels || {};
var _alias2 = $dp.$JsNet.ContosoUniversity.Controllers.$JsNs$_AccountController;
var _alias3 = $dp.$JsNet.TestModels;
_alias2.ManageMessageId = _alias2.ManageMessageId || {"ChangePasswordSuccess":{ "$Key":"ChangePasswordSuccess","$Value":0 },"SetPasswordSuccess":{ "$Key":"SetPasswordSuccess","$Value":1 },"RemoveLoginSuccess":{ "$Key":"RemoveLoginSuccess","$Value":2 }};
_alias3.EnumTest = _alias3.EnumTest || {"test1":{ "$Key":"test1","$Value":0 },"test2":{ "$Key":"test2","$Value":1 }};
//#endregion
//#region 'UrlSet'
window.$dp = window.$dp || {};
$dp.$JsNet = $dp.$JsNet || {};
$dp.$JsNet.$UrlSet = {"Account":{"Login": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'Login'; action.$Names.controller = 'Account'; action.$Names.area  = '';action.$Params = function(){  var obj = {"returnUrl":""}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:"json",contentType:"application/json",cache:false,method:'POST',data:action.$Params()}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();obj.$action1 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'Login'; action.$Names.controller = 'Account'; action.$Names.area  = '';action.$Params = function(){  var obj = {"model":_alias0.LoginModel(),"returnUrl":""}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:"json",contentType:"application/json",cache:false,method:'POST',data:action.$Params()}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"LogOff": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'LogOff'; action.$Names.controller = 'Account'; action.$Names.area  = '';action.$Params = function(){  var obj = null; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:"json",contentType:"application/json",cache:false,method:'POST',data:action.$Params()}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"Register": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'Register'; action.$Names.controller = 'Account'; action.$Names.area  = '';action.$Params = function(){  var obj = null; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:"json",contentType:"application/json",cache:false,method:'POST',data:action.$Params()}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();obj.$action1 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'Register'; action.$Names.controller = 'Account'; action.$Names.area  = '';action.$Params = function(){  var obj = {"model":_alias0.RegisterModel()}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:"json",contentType:"application/json",cache:false,method:'POST',data:action.$Params()}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"Disassociate": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'Disassociate'; action.$Names.controller = 'Account'; action.$Names.area  = '';action.$Params = function(){  var obj = {"provider":"","providerUserId":""}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:"json",contentType:"application/json",cache:false,method:'POST',data:action.$Params()}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"Manage": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'Manage'; action.$Names.controller = 'Account'; action.$Names.area  = '';action.$Params = function(){  var obj = {"message":0}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = {"message":_alias2.ManageMessageId}; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:"json",contentType:"application/json",cache:false,method:'POST',data:action.$Params()}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();obj.$action1 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'Manage'; action.$Names.controller = 'Account'; action.$Names.area  = '';action.$Params = function(){  var obj = {"model":_alias0.LocalPasswordModel()}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:"json",contentType:"application/json",cache:false,method:'POST',data:action.$Params()}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"ExternalLogin": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'ExternalLogin'; action.$Names.controller = 'Account'; action.$Names.area  = '';action.$Params = function(){  var obj = {"provider":"","returnUrl":""}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:"json",contentType:"application/json",cache:false,method:'POST',data:action.$Params()}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"ExternalLoginCallback": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'ExternalLoginCallback'; action.$Names.controller = 'Account'; action.$Names.area  = '';action.$Params = function(){  var obj = {"returnUrl":""}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:"json",contentType:"application/json",cache:false,method:'POST',data:action.$Params()}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"ExternalLoginConfirmation": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'ExternalLoginConfirmation'; action.$Names.controller = 'Account'; action.$Names.area  = '';action.$Params = function(){  var obj = {"model":_alias0.RegisterExternalLoginModel(),"returnUrl":""}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:"json",contentType:"application/json",cache:false,method:'POST',data:action.$Params()}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"ExternalLoginFailure": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'ExternalLoginFailure'; action.$Names.controller = 'Account'; action.$Names.area  = '';action.$Params = function(){  var obj = null; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:"json",contentType:"application/json",cache:false,method:'POST',data:action.$Params()}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"ExternalLoginsList": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'ExternalLoginsList'; action.$Names.controller = 'Account'; action.$Names.area  = '';action.$Params = function(){  var obj = {"returnUrl":""}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:"json",contentType:"application/json",cache:false,method:'POST',data:action.$Params()}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"RemoveExternalLogins": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'RemoveExternalLogins'; action.$Names.controller = 'Account'; action.$Names.area  = '';action.$Params = function(){  var obj = null; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:"json",contentType:"application/json",cache:false,method:'POST',data:action.$Params()}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }()},
"Course":{"UpdateCourseCredits": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'UpdateCourseCredits'; action.$Names.controller = 'Course'; action.$Names.area  = '';action.$Params = function(){  var obj = {"multiplier":0}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:"json",contentType:"application/json",cache:false,method:'POST',data:action.$Params()}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"Index": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'Index'; action.$Names.controller = 'Course'; action.$Names.area  = '';action.$Params = function(){  var obj = {"SelectedDepartment":0}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:"json",contentType:"application/json",cache:false,method:'POST',data:action.$Params()}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"Details": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'Details'; action.$Names.controller = 'Course'; action.$Names.area  = '';action.$Params = function(){  var obj = {"id":0}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:"json",contentType:"application/json",cache:false,method:'POST',data:action.$Params()}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"Create": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'Create'; action.$Names.controller = 'Course'; action.$Names.area  = '';action.$Params = function(){  var obj = null; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:"json",contentType:"application/json",cache:false,method:'POST',data:action.$Params()}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();obj.$action1 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'Create'; action.$Names.controller = 'Course'; action.$Names.area  = '';action.$Params = function(){  var obj = {"course":_alias0.Course()}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:"json",contentType:"application/json",cache:false,method:'POST',data:action.$Params()}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"Edit": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'Edit'; action.$Names.controller = 'Course'; action.$Names.area  = '';action.$Params = function(){  var obj = {"id":0}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:"json",contentType:"application/json",cache:false,method:'POST',data:action.$Params()}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();obj.$action1 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'Edit'; action.$Names.controller = 'Course'; action.$Names.area  = '';action.$Params = function(){  var obj = {"course":_alias0.Course()}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:"json",contentType:"application/json",cache:false,method:'POST',data:action.$Params()}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"Delete": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'Delete'; action.$Names.controller = 'Course'; action.$Names.area  = '';action.$Params = function(){  var obj = {"id":0}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:"json",contentType:"application/json",cache:false,method:'POST',data:action.$Params()}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"DeleteConfirmed": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'Delete'; action.$Names.controller = 'Course'; action.$Names.area  = '';action.$Params = function(){  var obj = {"id":0}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:"json",contentType:"application/json",cache:false,method:'POST',data:action.$Params()}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }()},
"Department":{"Index": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'Index'; action.$Names.controller = 'Department'; action.$Names.area  = '';action.$Params = function(){  var obj = null; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:"json",contentType:"application/json",cache:false,method:'POST',data:action.$Params()}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"Details": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'Details'; action.$Names.controller = 'Department'; action.$Names.area  = '';action.$Params = function(){  var obj = {"id":0}; return obj; };action.$Return = function(){  var obj = _alias0.Department(); return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:"json",contentType:"application/json",cache:false,method:'POST',data:action.$Params()}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"Create": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'Create'; action.$Names.controller = 'Department'; action.$Names.area  = '';action.$Params = function(){  var obj = null; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:"json",contentType:"application/json",cache:false,method:'POST',data:action.$Params()}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();obj.$action1 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'Create'; action.$Names.controller = 'Department'; action.$Names.area  = '';action.$Params = function(){  var obj = {"department":_alias0.Department()}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:"json",contentType:"application/json",cache:false,method:'POST',data:action.$Params()}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"Edit": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'Edit'; action.$Names.controller = 'Department'; action.$Names.area  = '';action.$Params = function(){  var obj = {"id":0}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:"json",contentType:"application/json",cache:false,method:'POST',data:action.$Params()}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();obj.$action1 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'Edit'; action.$Names.controller = 'Department'; action.$Names.area  = '';action.$Params = function(){  var obj = {"department":_alias0.Department()}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:"json",contentType:"application/json",cache:false,method:'POST',data:action.$Params()}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"Delete": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'Delete'; action.$Names.controller = 'Department'; action.$Names.area  = '';action.$Params = function(){  var obj = {"id":0,"concurrencyError":false}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:"json",contentType:"application/json",cache:false,method:'POST',data:action.$Params()}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();obj.$action1 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'Delete'; action.$Names.controller = 'Department'; action.$Names.area  = '';action.$Params = function(){  var obj = {"department":_alias0.Department()}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:"json",contentType:"application/json",cache:false,method:'POST',data:action.$Params()}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }()},
"Home":{"Index": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'Index'; action.$Names.controller = 'Home'; action.$Names.area  = '';action.$Params = function(){  var obj = null; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:"json",contentType:"application/json",cache:false,method:'POST',data:action.$Params()}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"About": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'About'; action.$Names.controller = 'Home'; action.$Names.area  = '';action.$Params = function(){  var obj = null; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:"json",contentType:"application/json",cache:false,method:'POST',data:action.$Params()}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"Contact": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'Contact'; action.$Names.controller = 'Home'; action.$Names.area  = '';action.$Params = function(){  var obj = null; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:"json",contentType:"application/json",cache:false,method:'POST',data:action.$Params()}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }()},
"Instructor":{"Index": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'Index'; action.$Names.controller = 'Instructor'; action.$Names.area  = '';action.$Params = function(){  var obj = {"id":0,"courseID":0}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:"json",contentType:"application/json",cache:false,method:'POST',data:action.$Params()}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"Details": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'Details'; action.$Names.controller = 'Instructor'; action.$Names.area  = '';action.$Params = function(){  var obj = {"id":0}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:"json",contentType:"application/json",cache:false,method:'POST',data:action.$Params()}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"Create": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'Create'; action.$Names.controller = 'Instructor'; action.$Names.area  = '';action.$Params = function(){  var obj = null; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:"json",contentType:"application/json",cache:false,method:'POST',data:action.$Params()}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();obj.$action1 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'Create'; action.$Names.controller = 'Instructor'; action.$Names.area  = '';action.$Params = function(){  var obj = {"instructor":_alias0.Instructor()}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:"json",contentType:"application/json",cache:false,method:'POST',data:action.$Params()}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"Edit": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'Edit'; action.$Names.controller = 'Instructor'; action.$Names.area  = '';action.$Params = function(){  var obj = {"id":0}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:"json",contentType:"application/json",cache:false,method:'POST',data:action.$Params()}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();obj.$action1 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'Edit'; action.$Names.controller = 'Instructor'; action.$Names.area  = '';action.$Params = function(){  var obj = {"id":0,"formCollection":[],"selectedCourses":$dp.$shared.$arrayFactory("")}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:"json",contentType:"application/json",cache:false,method:'POST',data:action.$Params()}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"Delete": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'Delete'; action.$Names.controller = 'Instructor'; action.$Names.area  = '';action.$Params = function(){  var obj = {"id":0}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:"json",contentType:"application/json",cache:false,method:'POST',data:action.$Params()}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"DeleteConfirmed": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'Delete'; action.$Names.controller = 'Instructor'; action.$Names.area  = '';action.$Params = function(){  var obj = {"id":0}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:"json",contentType:"application/json",cache:false,method:'POST',data:action.$Params()}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }()},
"Student":{"Index": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'Index'; action.$Names.controller = 'Student'; action.$Names.area  = '';action.$Params = function(){  var obj = {"sortOrder":"","currentFilter":"","searchString":"","page":0}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:"json",contentType:"application/json",cache:false,method:'POST',data:action.$Params()}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"Details": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'Details'; action.$Names.controller = 'Student'; action.$Names.area  = '';action.$Params = function(){  var obj = {"id":0}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:"json",contentType:"application/json",cache:false,method:'POST',data:action.$Params()}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"Create": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'Create'; action.$Names.controller = 'Student'; action.$Names.area  = '';action.$Params = function(){  var obj = null; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:"json",contentType:"application/json",cache:false,method:'POST',data:action.$Params()}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();obj.$action1 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'Create'; action.$Names.controller = 'Student'; action.$Names.area  = '';action.$Params = function(){  var obj = {"student":_alias0.Student()}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:"json",contentType:"application/json",cache:false,method:'POST',data:action.$Params()}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"Edit": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'Edit'; action.$Names.controller = 'Student'; action.$Names.area  = '';action.$Params = function(){  var obj = {"id":0}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:"json",contentType:"application/json",cache:false,method:'POST',data:action.$Params()}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();obj.$action1 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'Edit'; action.$Names.controller = 'Student'; action.$Names.area  = '';action.$Params = function(){  var obj = {"student":_alias0.Student()}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:"json",contentType:"application/json",cache:false,method:'POST',data:action.$Params()}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"Delete": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'Delete'; action.$Names.controller = 'Student'; action.$Names.area  = '';action.$Params = function(){  var obj = {"saveChangesError":false,"id":0}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:"json",contentType:"application/json",cache:false,method:'POST',data:action.$Params()}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();obj.$action1 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'Delete'; action.$Names.controller = 'Student'; action.$Names.area  = '';action.$Params = function(){  var obj = {"id":0}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:"json",contentType:"application/json",cache:false,method:'POST',data:action.$Params()}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"Ajouter": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'aj'; action.$Names.controller = 'Student'; action.$Names.area  = '';action.$Params = function(){  var obj = {"aaa":_alias1.TestClass(),"e":0,"e1":0}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = {"e":_alias3.EnumTest,"e1":_alias3.EnumTest}; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:"json",contentType:"application/json",cache:false,method:'POST',data:action.$Params()}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"Index": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'Index'; action.$Names.controller = 'Student'; action.$Names.area  = '';action.$Params = function(){  var obj = null; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:"json",contentType:"application/json",cache:false,method:'POST',data:action.$Params()}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }()}};
//-- alias
window.$dpUrlSet = $dp.$JsNet.$UrlSet;
window.$dpLib = $dp.$JsNet;
//#endregion
})();
})();
})();
