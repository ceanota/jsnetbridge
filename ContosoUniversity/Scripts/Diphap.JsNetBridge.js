(function () {

//#region "COPYRIGHT"
/***************************************************************************************************************
            Diphap.JsNetBridge.Mvc v1.1.0.0
            Build ASP.NET Objects API for javascript
            Copyright (c)  2015

            http://jsnet.codeplex.com/
            The MIT License (MIT)
            
            Creator:    TRAN Alexandre 
                        tran-alexandre@hotmail.fr
*/
//#endregion


//#region "GET STARTED"
/***************************************************************************************************************
            //GET STARTED: Here's an example to start using the API:
***************************************************************************************************************/
// 1- Paste this code into the file 'BundleConfig.cs' in the function 'RegisterBundles' of the class 'BundleConfig':

            //bundles.Add(new ScriptBundle("~/bundles/JsNetBridge").Include(
            //            "~/Scripts/Diphap.JsNetBridge.js"));

// 2- Paste this code into the file 'Global.asax.cs' in class 'MvcApplication':

            //static Diphap.JsNetBridge.Mvc.AspMvcInfo _AspMvcInfo;
            //static public Diphap.JsNetBridge.Mvc.AspMvcInfo AspMvcInfo
            //{
            //    get
            //    {
            //        if (_AspMvcInfo == null)
            //        {
            //            _AspMvcInfo = new Diphap.JsNetBridge.Mvc.AspMvcInfo(System.Reflection.Assembly.GetExecutingAssembly());
            //        }

            //        return _AspMvcInfo;
            //    }
            //}

// 3- Paste this code in each layout file (ex: '_ Layout.cshtml), before JS app:

            //@Scripts.Render("~/bundles/JsNetBridge")
            //<script>
            //    @(new MvcHtmlString({MyApplicationWeb}.MvcApplication.AspMvcInfo.UrlInfo.ToJS_SetUrl(this)))
            //</script>

// 4- Replace the word '{MyApplicationWeb}' with the name of your web application.

//#endregion


(function () {

    window.$dp = window.$dp || {};
    window.$dp.$shared = window.$dp.$shared || {};

    if (window.$dp.$shared.$arrayFactory !== undefined) { return; }

    $dp.$shared.$arrayFactory = function arrayFactory(ref) {
        /// <signature>
        ///   <summary>this function returns a array with added function '$dpItemFactory' who creates instance of item of array.</summary>
        ///   <param name="ref" type="Function">ref is factory who creates instance of item of array</param>
        ///   <returns type="Function" />
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
        ///   <param name="sameIntance" type="bool">If sameInstance === undefined: new instance of function. Otherwise, we use the same instance.</param>
        ///   <returns type="Function" />
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
        ///   <param name="func" type="Function">Factory of instances.</param>
        ///   <returns type="Object" />
        /// </signature>

        var internalFunc = window.$dp.$shared.$circularReferenceManagerFactory.instance;

        var foundedIdx = -1;
        for (var idx = 0; idx < internalFunc.factories.length; idx++) {
            if (internalFunc.factories[idx].item === func) {
                foundedIdx = idx;
            }
        }

        if (foundedIdx === -1) {
            internalFunc.factories.push({ "item": func, "number": 0 });
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
window.$dp.$JsNet = window.$dp.$JsNet || {};
window.$dp.$JsNet.ContosoUniversity = window.$dp.$JsNet.ContosoUniversity || {};
window.$dp.$JsNet.ContosoUniversity.Models = window.$dp.$JsNet.ContosoUniversity.Models || {};
$dp.$JsNet.ContosoUniversity.Models.UserProfile = $dp.$JsNet.ContosoUniversity.Models.UserProfile || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"UserId":0,"UserName":""};obj.constructor=$dp.$JsNet.ContosoUniversity.Models.UserProfile; return obj; };
$dp.$JsNet.ContosoUniversity.Models.RegisterExternalLoginModel = $dp.$JsNet.ContosoUniversity.Models.RegisterExternalLoginModel || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"UserName":"","ExternalLoginData":""};obj.constructor=$dp.$JsNet.ContosoUniversity.Models.RegisterExternalLoginModel; return obj; };
$dp.$JsNet.ContosoUniversity.Models.LocalPasswordModel = $dp.$JsNet.ContosoUniversity.Models.LocalPasswordModel || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"OldPassword":"","NewPassword":"","ConfirmPassword":""};obj.constructor=$dp.$JsNet.ContosoUniversity.Models.LocalPasswordModel; return obj; };
$dp.$JsNet.ContosoUniversity.Models.LoginModel = $dp.$JsNet.ContosoUniversity.Models.LoginModel || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"UserName":"","Password":"","RememberMe":false};obj.constructor=$dp.$JsNet.ContosoUniversity.Models.LoginModel; return obj; };
$dp.$JsNet.ContosoUniversity.Models.RegisterModel = $dp.$JsNet.ContosoUniversity.Models.RegisterModel || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"UserName":"","Password":"","ConfirmPassword":""};obj.constructor=$dp.$JsNet.ContosoUniversity.Models.RegisterModel; return obj; };
$dp.$JsNet.ContosoUniversity.Models.ExternalLogin = $dp.$JsNet.ContosoUniversity.Models.ExternalLogin || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"Provider":"","ProviderDisplayName":"","ProviderUserId":""};obj.constructor=$dp.$JsNet.ContosoUniversity.Models.ExternalLogin; return obj; };
$dp.$JsNet.ContosoUniversity.Models.Student = $dp.$JsNet.ContosoUniversity.Models.Student || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"EnrollmentDate":new Date(),"PersonID":0,"LastName":"","FirstMidName":"","FullName":"","Enrollments":$dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.ContosoUniversity.Models.Enrollment))};obj.constructor=$dp.$JsNet.ContosoUniversity.Models.Student; return obj; };
$dp.$JsNet.ContosoUniversity.Models.OfficeAssignment = $dp.$JsNet.ContosoUniversity.Models.OfficeAssignment || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"PersonID":0,"Location":"","Instructor":$dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.ContosoUniversity.Models.Instructor)};obj.constructor=$dp.$JsNet.ContosoUniversity.Models.OfficeAssignment; return obj; };
$dp.$JsNet.ContosoUniversity.Models.Person = $dp.$JsNet.ContosoUniversity.Models.Person || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"PersonID":0,"LastName":"","FirstMidName":"","FullName":""};obj.constructor=$dp.$JsNet.ContosoUniversity.Models.Person; return obj; };
$dp.$JsNet.ContosoUniversity.Models.Enrollment = $dp.$JsNet.ContosoUniversity.Models.Enrollment || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"EnrollmentID":0,"CourseID":0,"PersonID":0,"Grade":0,"Student":$dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.ContosoUniversity.Models.Student),"Course":$dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.ContosoUniversity.Models.Course)};obj.constructor=$dp.$JsNet.ContosoUniversity.Models.Enrollment; return obj; };
$dp.$JsNet.ContosoUniversity.Models.Instructor = $dp.$JsNet.ContosoUniversity.Models.Instructor || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"HireDate":new Date(),"OfficeAssignment":$dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.ContosoUniversity.Models.OfficeAssignment),"PersonID":0,"LastName":"","FirstMidName":"","FullName":"","Courses":$dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.ContosoUniversity.Models.Course))};obj.constructor=$dp.$JsNet.ContosoUniversity.Models.Instructor; return obj; };
$dp.$JsNet.ContosoUniversity.Models.Course = $dp.$JsNet.ContosoUniversity.Models.Course || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"CourseID":0,"Title":"","Credits":0,"DepartmentID":0,"Enrollments":$dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.ContosoUniversity.Models.Enrollment)),"Instructors":$dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.ContosoUniversity.Models.Instructor)),"Department":$dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.ContosoUniversity.Models.Department)};obj.constructor=$dp.$JsNet.ContosoUniversity.Models.Course; return obj; };
$dp.$JsNet.ContosoUniversity.Models.Department = $dp.$JsNet.ContosoUniversity.Models.Department || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"DepartmentID":0,"Name":"","Budget":0,"StartDate":new Date(),"PersonID":0,"RowVersion":$dp.$shared.$arrayFactory(0),"Administrator":$dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.ContosoUniversity.Models.Instructor),"Courses_":$dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.ContosoUniversity.Models.Course)),"Courses":$dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.ContosoUniversity.Models.Course))};obj.constructor=$dp.$JsNet.ContosoUniversity.Models.Department; return obj; };
window.$dp = window.$dp || {};
window.$dp.$JsNet = window.$dp.$JsNet || {};
window.$dp.$JsNet.ContosoUniversity = window.$dp.$JsNet.ContosoUniversity || {};
window.$dp.$JsNet.ContosoUniversity.Models = window.$dp.$JsNet.ContosoUniversity.Models || {};
$dp.$JsNet.ContosoUniversity.Models.Grade = $dp.$JsNet.ContosoUniversity.Models.Grade || {"A":{ "Key":"A","Value":0 },"B":{ "Key":"B","Value":1 },"C":{ "Key":"C","Value":2 },"D":{ "Key":"D","Value":3 },"F":{ "Key":"F","Value":4 }};
window.$dp = window.$dp || {};window.$dp.$JsNet = window.$dp.$JsNet || {};
$dp.$JsNet.$UrlSet = {"Account":{"Login": function actionFactory () { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { var action = {};action.$Params = function(){  var obj = {"returnUrl":""}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {}; return obj; };return action; }();action.$sig1 = function actionFactory () { var action = {};action.$Params = function(){  var obj = {"model":$dp.$JsNet.ContosoUniversity.Models.LoginModel(),"returnUrl":""}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {}; return obj; };return action; }();return action; }(),"LogOff": function actionFactory () { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { var action = {};action.$Params = function(){  var obj = null; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {}; return obj; };return action; }();return action; }(),"Register": function actionFactory () { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { var action = {};action.$Params = function(){  var obj = null; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {}; return obj; };return action; }();action.$sig1 = function actionFactory () { var action = {};action.$Params = function(){  var obj = {"model":$dp.$JsNet.ContosoUniversity.Models.RegisterModel()}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {}; return obj; };return action; }();return action; }(),"Disassociate": function actionFactory () { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { var action = {};action.$Params = function(){  var obj = {"provider":"","providerUserId":""}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {}; return obj; };return action; }();return action; }(),"Manage": function actionFactory () { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { var action = {};action.$Params = function(){  var obj = {"message":0}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {}; return obj; };return action; }();action.$sig1 = function actionFactory () { var action = {};action.$Params = function(){  var obj = {"model":$dp.$JsNet.ContosoUniversity.Models.LocalPasswordModel()}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {}; return obj; };return action; }();return action; }(),"ExternalLogin": function actionFactory () { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { var action = {};action.$Params = function(){  var obj = {"provider":"","returnUrl":""}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {}; return obj; };return action; }();return action; }(),"ExternalLoginCallback": function actionFactory () { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { var action = {};action.$Params = function(){  var obj = {"returnUrl":""}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {}; return obj; };return action; }();return action; }(),"ExternalLoginConfirmation": function actionFactory () { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { var action = {};action.$Params = function(){  var obj = {"model":$dp.$JsNet.ContosoUniversity.Models.RegisterExternalLoginModel(),"returnUrl":""}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {}; return obj; };return action; }();return action; }(),"ExternalLoginFailure": function actionFactory () { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { var action = {};action.$Params = function(){  var obj = null; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {}; return obj; };return action; }();return action; }(),"ExternalLoginsList": function actionFactory () { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { var action = {};action.$Params = function(){  var obj = {"returnUrl":""}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {}; return obj; };return action; }();return action; }(),"RemoveExternalLogins": function actionFactory () { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { var action = {};action.$Params = function(){  var obj = null; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {}; return obj; };return action; }();return action; }()},
"Course":{"UpdateCourseCredits": function actionFactory () { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { var action = {};action.$Params = function(){  var obj = {"multiplier":0}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {}; return obj; };return action; }();return action; }(),"Index": function actionFactory () { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { var action = {};action.$Params = function(){  var obj = {"SelectedDepartment":0}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {}; return obj; };return action; }();return action; }(),"Details": function actionFactory () { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { var action = {};action.$Params = function(){  var obj = {"id":0}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {}; return obj; };return action; }();return action; }(),"Create": function actionFactory () { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { var action = {};action.$Params = function(){  var obj = null; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {}; return obj; };return action; }();action.$sig1 = function actionFactory () { var action = {};action.$Params = function(){  var obj = {"course":$dp.$JsNet.ContosoUniversity.Models.Course()}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {}; return obj; };return action; }();return action; }(),"Edit": function actionFactory () { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { var action = {};action.$Params = function(){  var obj = {"id":0}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {}; return obj; };return action; }();action.$sig1 = function actionFactory () { var action = {};action.$Params = function(){  var obj = {"course":$dp.$JsNet.ContosoUniversity.Models.Course()}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {}; return obj; };return action; }();return action; }(),"Delete": function actionFactory () { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { var action = {};action.$Params = function(){  var obj = {"id":0}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {}; return obj; };return action; }();return action; }(),"DeleteConfirmed": function actionFactory () { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { var action = {};action.$Params = function(){  var obj = {"id":0}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {}; return obj; };return action; }();return action; }()},
"Department":{"Index": function actionFactory () { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { var action = {};action.$Params = function(){  var obj = null; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {}; return obj; };return action; }();return action; }(),"Details": function actionFactory () { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { var action = {};action.$Params = function(){  var obj = {"id":0}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {}; return obj; };return action; }();return action; }(),"Create": function actionFactory () { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { var action = {};action.$Params = function(){  var obj = null; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {}; return obj; };return action; }();action.$sig1 = function actionFactory () { var action = {};action.$Params = function(){  var obj = {"department":$dp.$JsNet.ContosoUniversity.Models.Department()}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {}; return obj; };return action; }();return action; }(),"Edit": function actionFactory () { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { var action = {};action.$Params = function(){  var obj = {"id":0}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {}; return obj; };return action; }();action.$sig1 = function actionFactory () { var action = {};action.$Params = function(){  var obj = {"department":$dp.$JsNet.ContosoUniversity.Models.Department()}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {}; return obj; };return action; }();return action; }(),"Delete": function actionFactory () { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { var action = {};action.$Params = function(){  var obj = {"id":0,"concurrencyError":false}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {}; return obj; };return action; }();action.$sig1 = function actionFactory () { var action = {};action.$Params = function(){  var obj = {"department":$dp.$JsNet.ContosoUniversity.Models.Department()}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {}; return obj; };return action; }();return action; }()},
"Home":{"Index": function actionFactory () { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { var action = {};action.$Params = function(){  var obj = null; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {}; return obj; };return action; }();return action; }(),"About": function actionFactory () { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { var action = {};action.$Params = function(){  var obj = null; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {}; return obj; };return action; }();return action; }(),"Contact": function actionFactory () { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { var action = {};action.$Params = function(){  var obj = null; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {}; return obj; };return action; }();return action; }()},
"Instructor":{"Index": function actionFactory () { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { var action = {};action.$Params = function(){  var obj = {"id":0,"courseID":0}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {}; return obj; };return action; }();return action; }(),"Details": function actionFactory () { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { var action = {};action.$Params = function(){  var obj = {"id":0}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {}; return obj; };return action; }();return action; }(),"Create": function actionFactory () { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { var action = {};action.$Params = function(){  var obj = null; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {}; return obj; };return action; }();action.$sig1 = function actionFactory () { var action = {};action.$Params = function(){  var obj = {"instructor":$dp.$JsNet.ContosoUniversity.Models.Instructor()}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {}; return obj; };return action; }();return action; }(),"Edit": function actionFactory () { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { var action = {};action.$Params = function(){  var obj = {"id":0}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {}; return obj; };return action; }();action.$sig1 = function actionFactory () { var action = {};action.$Params = function(){  var obj = {"id":0,"formCollection":[],"selectedCourses":$dp.$shared.$arrayFactory("")}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {}; return obj; };return action; }();return action; }(),"Delete": function actionFactory () { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { var action = {};action.$Params = function(){  var obj = {"id":0}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {}; return obj; };return action; }();return action; }(),"DeleteConfirmed": function actionFactory () { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { var action = {};action.$Params = function(){  var obj = {"id":0}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {}; return obj; };return action; }();return action; }()},
"Student":{"Index": function actionFactory () { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { var action = {};action.$Params = function(){  var obj = {"sortOrder":"","currentFilter":"","searchString":"","page":0}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {}; return obj; };return action; }();return action; }(),"Details": function actionFactory () { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { var action = {};action.$Params = function(){  var obj = {"id":0}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {}; return obj; };return action; }();return action; }(),"Create": function actionFactory () { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { var action = {};action.$Params = function(){  var obj = null; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {}; return obj; };return action; }();action.$sig1 = function actionFactory () { var action = {};action.$Params = function(){  var obj = {"student":$dp.$JsNet.ContosoUniversity.Models.Student()}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {}; return obj; };return action; }();return action; }(),"Edit": function actionFactory () { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { var action = {};action.$Params = function(){  var obj = {"id":0}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {}; return obj; };return action; }();action.$sig1 = function actionFactory () { var action = {};action.$Params = function(){  var obj = {"student":$dp.$JsNet.ContosoUniversity.Models.Student()}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {}; return obj; };return action; }();return action; }(),"Delete": function actionFactory () { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { var action = {};action.$Params = function(){  var obj = {"saveChangesError":false,"id":0}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {}; return obj; };return action; }();action.$sig1 = function actionFactory () { var action = {};action.$Params = function(){  var obj = {"id":0}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {}; return obj; };return action; }();return action; }()}};
})();
})();
