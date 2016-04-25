

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
        if (action.$sig0.$IsApiController) {
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
window.$dp = window.$dp || {};
$dp.$JsNet = $dp.$JsNet || {};
$dp.$JsNet.ContosoUniversity = $dp.$JsNet.ContosoUniversity || {};
$dp.$JsNet.ContosoUniversity.Models = $dp.$JsNet.ContosoUniversity.Models || {};
var _alias0 = $dp.$JsNet.ContosoUniversity.Models;
_alias0.OfficeAssignment = _alias0.OfficeAssignment || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"PersonID":0,"Location":"","Instructor":$dp.$shared.$circularReferenceManagerFactory.apply(null, args)(_alias0.Instructor)};obj.constructor=_alias0.OfficeAssignment; return obj; };
_alias0.Student = _alias0.Student || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"EnrollmentDate":new Date(),"PersonID":0,"LastName":"","FirstMidName":"","FullName":"","Enrollments":$dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)(_alias0.Enrollment))};obj.constructor=_alias0.Student; return obj; };
_alias0.Instructor = _alias0.Instructor || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"HireDate":new Date(),"OfficeAssignment":$dp.$shared.$circularReferenceManagerFactory.apply(null, args)(_alias0.OfficeAssignment),"PersonID":0,"LastName":"","FirstMidName":"","FullName":"","Courses":$dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)(_alias0.Course))};obj.constructor=_alias0.Instructor; return obj; };
_alias0.Enrollment = _alias0.Enrollment || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"EnrollmentID":0,"CourseID":0,"PersonID":0,"Grade":0,"Student":$dp.$shared.$circularReferenceManagerFactory.apply(null, args)(_alias0.Student),"Course":$dp.$shared.$circularReferenceManagerFactory.apply(null, args)(_alias0.Course)};obj.constructor=_alias0.Enrollment; return obj; };
_alias0.Course = _alias0.Course || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"CourseID":0,"Title":"","Credits":0,"DepartmentID":0,"Enrollments":$dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)(_alias0.Enrollment)),"Instructors":$dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)(_alias0.Instructor)),"Department":$dp.$shared.$circularReferenceManagerFactory.apply(null, args)(_alias0.Department)};obj.constructor=_alias0.Course; return obj; };
_alias0.Department = _alias0.Department || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"DepartmentID":0,"Name":"","Budget":0,"StartDate":new Date(),"PersonID":0,"RowVersion":$dp.$shared.$arrayFactory(0),"Administrator":$dp.$shared.$circularReferenceManagerFactory.apply(null, args)(_alias0.Instructor),"Courses_":$dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)(_alias0.Course)),"Courses":$dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)(_alias0.Course))};obj.constructor=_alias0.Department; return obj; };
})();
})();


