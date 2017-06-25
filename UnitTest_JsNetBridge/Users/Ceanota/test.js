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
$dp.$JsNet.TestJsNetBridgeApp = $dp.$JsNet.TestJsNetBridgeApp || {};
$dp.$JsNet.TestJsNetBridgeApp.Models = $dp.$JsNet.TestJsNetBridgeApp.Models || {};
$dp.$JsNet.TestJsNetBridgeApp.Controllers = $dp.$JsNet.TestJsNetBridgeApp.Controllers || {};
$dp.$JsNet.TestJsNetBridgeApp.Controllers.$JsNs$_HomeController = $dp.$JsNet.TestJsNetBridgeApp.Controllers.$JsNs$_HomeController || {};
$dp.$JsNet.ContosoUniversity = $dp.$JsNet.ContosoUniversity || {};
$dp.$JsNet.ContosoUniversity.Models = $dp.$JsNet.ContosoUniversity.Models || {};
var _alias0 = $dp.$JsNet.TestJsNetBridgeApp.Models;
var _alias1 = $dp.$JsNet.TestJsNetBridgeApp.Controllers.$JsNs$_HomeController;
var _alias2 = $dp.$JsNet.ContosoUniversity.Models;
_alias0.LayoutModel = _alias0.LayoutModel || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"PackageNugetName":"","PackageNugetVersion":{}};obj.constructor=_alias0.LayoutModel; return obj; };
_alias0.ReturnData = _alias0.ReturnData || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"Url":"","Success":false,"Method":"","InputStream":{},"BusinessData":{}};obj.constructor=_alias0.ReturnData; return obj; };
_alias0.ReturnData_$gen$_T = _alias0.ReturnData_$gen$_T || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"Url":"","Success":false,"Method":"","TypedBusinessData":{},"InputStream":{},"BusinessData":{}};obj.constructor=_alias0.ReturnData_$gen$_T; return obj; };
_alias1.dpPerson = _alias1.dpPerson || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"name":"","age":0,"description":""};obj.constructor=_alias1.dpPerson; return obj; };
_alias2.OfficeAssignment = _alias2.OfficeAssignment || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"PersonID":0,"Location":"","Instructor":$dp.$shared.$circularReferenceManagerFactory.apply(null, args)(_alias2.Instructor)};obj.constructor=_alias2.OfficeAssignment; return obj; };
_alias2.Student = _alias2.Student || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"EnrollmentDate":new Date(),"PersonID":0,"LastName":"","FirstMidName":"","FullName":"","Enrollments":$dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)(_alias2.Enrollment))};obj.constructor=_alias2.Student; return obj; };
_alias0.ReturnData_$gen$_ContosoUniversityModelsStudent = _alias0.ReturnData_$gen$_ContosoUniversityModelsStudent || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"TypedBusinessData":$dp.$shared.$circularReferenceManagerFactory.apply(null, args)(_alias2.Student),"Url":"","Success":false,"Method":"","InputStream":{},"BusinessData":{}};obj.constructor=_alias0.ReturnData_$gen$_ContosoUniversityModelsStudent; return obj; };
_alias0.ReturnData_$gen$_ICollection_$gen$_ContosoUniversityModelsStudent = _alias0.ReturnData_$gen$_ICollection_$gen$_ContosoUniversityModelsStudent || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"TypedBusinessData":$dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)(_alias2.Student)),"Url":"","Success":false,"Method":"","InputStream":{},"BusinessData":{}};obj.constructor=_alias0.ReturnData_$gen$_ICollection_$gen$_ContosoUniversityModelsStudent; return obj; };
_alias2.Enrollment = _alias2.Enrollment || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"EnrollmentID":0,"CourseID":0,"PersonID":0,"Grade":0,"Student":$dp.$shared.$circularReferenceManagerFactory.apply(null, args)(_alias2.Student),"Course":$dp.$shared.$circularReferenceManagerFactory.apply(null, args)(_alias2.Course)};obj.constructor=_alias2.Enrollment; return obj; };
_alias2.Instructor = _alias2.Instructor || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"HireDate":new Date(),"OfficeAssignment":$dp.$shared.$circularReferenceManagerFactory.apply(null, args)(_alias2.OfficeAssignment),"PersonID":0,"LastName":"","FirstMidName":"","FullName":"","Courses":$dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)(_alias2.Course))};obj.constructor=_alias2.Instructor; return obj; };
_alias2.Course = _alias2.Course || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"CourseID":0,"Title":"","Credits":0,"DepartmentID":0,"Enrollments":$dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)(_alias2.Enrollment)),"Instructors":$dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)(_alias2.Instructor)),"Department":$dp.$shared.$circularReferenceManagerFactory.apply(null, args)(_alias2.Department)};obj.constructor=_alias2.Course; return obj; };
_alias0.ReturnData_$gen$_ContosoUniversityModelsInstructor = _alias0.ReturnData_$gen$_ContosoUniversityModelsInstructor || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"TypedBusinessData":$dp.$shared.$circularReferenceManagerFactory.apply(null, args)(_alias2.Instructor),"Url":"","Success":false,"Method":"","InputStream":{},"BusinessData":{}};obj.constructor=_alias0.ReturnData_$gen$_ContosoUniversityModelsInstructor; return obj; };
_alias2.Department = _alias2.Department || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"DepartmentID":0,"Name":"","Budget":0,"StartDate":new Date(),"PersonID":0,"RowVersion":$dp.$shared.$arrayFactory(0),"Courses_":$dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)(_alias2.Course)),"Administrator":$dp.$shared.$circularReferenceManagerFactory.apply(null, args)(_alias2.Instructor),"Courses":$dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)(_alias2.Course))};obj.constructor=_alias2.Department; return obj; };
_alias0.ReturnData_$gen$_ContosoUniversityModelsDepartment = _alias0.ReturnData_$gen$_ContosoUniversityModelsDepartment || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"TypedBusinessData":$dp.$shared.$circularReferenceManagerFactory.apply(null, args)(_alias2.Department),"Url":"","Success":false,"Method":"","InputStream":{},"BusinessData":{}};obj.constructor=_alias0.ReturnData_$gen$_ContosoUniversityModelsDepartment; return obj; };
//#endregion
//#region 'Enum'
//#endregion
//#region 'UrlSet'
window.$dp = window.$dp || {};
$dp.$JsNet = $dp.$JsNet || {};
$dp.$JsNet.$UrlSet = {"TestArea":{"$apiData2":{"Get": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'Get'; action.$Names.controller = 'Data2'; action.$Names.area  = 'TestArea';action.$Params = function(){  var obj = null; return obj; };action.$Return = function(){  var obj = _alias0.ReturnData(); return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$httpMethodArray = {$get:"get",$items:["get"],$single:"get",$first:"get"};action.$IsApi = true;action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:undefined,contentType:'application/json',cache:false,type:action.$httpMethodArray.$first,method:action.$httpMethodArray.$first,data:undefined}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }()},"Home2":{"Action_NoParams": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'Action_NoParams'; action.$Names.controller = 'Home2'; action.$Names.area  = 'TestArea';action.$Params = function(){  var obj = null; return obj; };action.$Return = function(){  var obj = _alias0.ReturnData(); return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:undefined,contentType:'application/json',cache:false,type:'post',method:'post',data:undefined}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"Action_FakeName": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'Action_RealName'; action.$Names.controller = 'Home2'; action.$Names.area  = 'TestArea';action.$Params = function(){  var obj = null; return obj; };action.$Return = function(){  var obj = _alias0.ReturnData(); return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:undefined,contentType:'application/json',cache:false,type:'post',method:'post',data:undefined}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }()}},
"$apiData":{"Get": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'Get'; action.$Names.controller = 'Data'; action.$Names.area  = '';action.$Params = function(){  var obj = null; return obj; };action.$Return = function(){  var obj = _alias0.ReturnData(); return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$httpMethodArray = {$get:"get",$items:["get"],$single:"get",$first:"get"};action.$IsApi = true;action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:undefined,contentType:'application/json',cache:false,type:action.$httpMethodArray.$first,method:action.$httpMethodArray.$first,data:undefined}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"Action_AcceptVerbs_TEST": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'Action_AcceptVerbs_TEST'; action.$Names.controller = 'Data'; action.$Names.area  = '';action.$Params = function(){  var obj = null; return obj; };action.$Return = function(){  var obj = _alias0.ReturnData(); return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$httpMethodArray = {$TEST:"TEST",$items:["TEST"],$single:"TEST",$first:"TEST"};action.$IsApi = true;action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:undefined,contentType:'application/json',cache:false,type:action.$httpMethodArray.$first,method:action.$httpMethodArray.$first,data:undefined}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"Orders": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'Orders'; action.$Names.controller = 'Data'; action.$Names.area  = '';action.$Params = function(){  var obj = null; return obj; };action.$Return = function(){  var obj = _alias0.ReturnData(); return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$httpMethodArray = {$post:"post",$items:["post"],$single:"post",$first:"post"};action.$IsApi = true;action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:undefined,contentType:'application/json',cache:false,type:action.$httpMethodArray.$first,method:action.$httpMethodArray.$first,data:undefined}; return obj; };action.$RouteTemplate = 'customers/orders';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"Orders_WithCustomerId": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'Orders_WithCustomerId'; action.$Names.controller = 'Data'; action.$Names.area  = '';action.$Params = function(){  var obj = {"customerId":0}; return obj; };action.$Return = function(){  var obj = _alias0.ReturnData(); return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$httpMethodArray = {$post:"post",$items:["post"],$single:"post",$first:"post"};action.$IsApi = true;action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:undefined,contentType:'application/json',cache:false,type:action.$httpMethodArray.$first,method:action.$httpMethodArray.$first,data:undefined}; return obj; };action.$RouteTemplate = 'customers/{customerId}/orders';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }()},
"Home":{"Index": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'Index'; action.$Names.controller = 'Home'; action.$Names.area  = '';action.$Params = function(){  var obj = null; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:undefined,contentType:'application/json',cache:false,type:'post',method:'post',data:undefined}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"Action_NoParams": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'Action_NoParams'; action.$Names.controller = 'Home'; action.$Names.area  = '';action.$Params = function(){  var obj = null; return obj; };action.$Return = function(){  var obj = _alias0.ReturnData(); return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:undefined,contentType:'application/json',cache:false,type:'post',method:'post',data:undefined}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"Action_WithParamterIdInUrl": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'Action_WithParamterIdInUrl'; action.$Names.controller = 'Home'; action.$Names.area  = '';action.$Params = function(){  var obj = {"id":""}; return obj; };action.$Return = function(){  var obj = _alias0.ReturnData(); return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:undefined,contentType:'application/json',cache:false,type:'post',method:'post',data:undefined}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"Action_FakeName": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'Action_RealName'; action.$Names.controller = 'Home'; action.$Names.area  = '';action.$Params = function(){  var obj = null; return obj; };action.$Return = function(){  var obj = _alias0.ReturnData(); return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:undefined,contentType:'application/json',cache:false,type:'post',method:'post',data:undefined}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"ShowMe": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'ShowMe'; action.$Names.controller = 'Home'; action.$Names.area  = '';action.$Params = function(){  var obj = {"name":"","age":0}; return obj; };action.$Return = function(){  var obj = _alias1.dpPerson(); return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:undefined,contentType:'application/json',cache:false,type:'post',method:'post',data:undefined}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"GetStudent": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'GetStudent'; action.$Names.controller = 'Home'; action.$Names.area  = '';action.$Params = function(){  var obj = {"PersonID":0}; return obj; };action.$Return = function(){  var obj = _alias0.ReturnData_$gen$_ContosoUniversityModelsStudent(); return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:undefined,contentType:'application/json',cache:false,type:'post',method:'post',data:undefined}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"GetStudents": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'GetStudents'; action.$Names.controller = 'Home'; action.$Names.area  = '';action.$Params = function(){  var obj = {"FirstMidName":""}; return obj; };action.$Return = function(){  var obj = _alias0.ReturnData_$gen$_ICollection_$gen$_ContosoUniversityModelsStudent(); return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:undefined,contentType:'application/json',cache:false,type:'post',method:'post',data:undefined}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"CreateNewStudent": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'CreateNewStudent'; action.$Names.controller = 'Home'; action.$Names.area  = '';action.$Params = function(){  var obj = {"student":_alias2.Student()}; return obj; };action.$Return = function(){  var obj = _alias0.ReturnData_$gen$_ContosoUniversityModelsStudent(); return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:undefined,contentType:'application/json',cache:false,type:'post',method:'post',data:undefined}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"GetDepartment": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'GetDepartment'; action.$Names.controller = 'Home'; action.$Names.area  = '';action.$Params = function(){  var obj = {"departmentName":""}; return obj; };action.$Return = function(){  var obj = _alias0.ReturnData_$gen$_ContosoUniversityModelsDepartment(); return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:undefined,contentType:'application/json',cache:false,type:'post',method:'post',data:undefined}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }()},
"$apiInstructor":{"Get": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'Get'; action.$Names.controller = 'Instructor'; action.$Names.area  = '';action.$Params = function(){  var obj = {"id":0}; return obj; };action.$Return = function(){  var obj = _alias0.ReturnData_$gen$_ContosoUniversityModelsInstructor(); return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$httpMethodArray = {$get:"get",$items:["get"],$single:"get",$first:"get"};action.$IsApi = true;action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:undefined,contentType:'application/json',cache:false,type:action.$httpMethodArray.$first,method:action.$httpMethodArray.$first,data:undefined}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"Put": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'Put'; action.$Names.controller = 'Instructor'; action.$Names.area  = '';action.$Params = function(){  var obj = {"instructor":_alias2.Instructor()}; return obj; };action.$Return = function(){  var obj = _alias0.ReturnData_$gen$_ContosoUniversityModelsInstructor(); return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$httpMethodArray = {$put:"put",$items:["put"],$single:"put",$first:"put"};action.$IsApi = true;action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:undefined,contentType:'application/json',cache:false,type:action.$httpMethodArray.$first,method:action.$httpMethodArray.$first,data:undefined}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();obj.$action1 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'Put'; action.$Names.controller = 'Instructor'; action.$Names.area  = '';action.$Params = function(){  var obj = {"id":0,"instructor":_alias2.Instructor()}; return obj; };action.$Return = function(){  var obj = _alias0.ReturnData_$gen$_ContosoUniversityModelsInstructor(); return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$httpMethodArray = {$put:"put",$items:["put"],$single:"put",$first:"put"};action.$IsApi = true;action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:undefined,contentType:'application/json',cache:false,type:action.$httpMethodArray.$first,method:action.$httpMethodArray.$first,data:undefined}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"Delete": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'Delete'; action.$Names.controller = 'Instructor'; action.$Names.area  = '';action.$Params = function(){  var obj = {"id":0}; return obj; };action.$Return = function(){  var obj = _alias0.ReturnData_$gen$_ContosoUniversityModelsInstructor(); return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$httpMethodArray = {$delete:"delete",$items:["delete"],$single:"delete",$first:"delete"};action.$IsApi = true;action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:undefined,contentType:'application/json',cache:false,type:action.$httpMethodArray.$first,method:action.$httpMethodArray.$first,data:undefined}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }()}};
//-- alias
window.$dpUrlSet = $dp.$JsNet.$UrlSet;
window.$dpLib = $dp.$JsNet;
//#endregion
})();
})();
})(); 
