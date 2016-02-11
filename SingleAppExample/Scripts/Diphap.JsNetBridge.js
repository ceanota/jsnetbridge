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
window.$dp.$JsNet.SingleAppExample = window.$dp.$JsNet.SingleAppExample || {};
window.$dp.$JsNet.SingleAppExample.Areas = window.$dp.$JsNet.SingleAppExample.Areas || {};
window.$dp.$JsNet.SingleAppExample.Areas.HelpPage = window.$dp.$JsNet.SingleAppExample.Areas.HelpPage || {};
window.$dp.$JsNet.SingleAppExample.Areas.HelpPage.Models = window.$dp.$JsNet.SingleAppExample.Areas.HelpPage.Models || {};
window.$dp.$JsNet.SingleAppExample.Models = window.$dp.$JsNet.SingleAppExample.Models || {};
$dp.$JsNet.SingleAppExample.Areas.HelpPage.Models.HelpPageApiModel = $dp.$JsNet.SingleAppExample.Areas.HelpPage.Models.HelpPageApiModel || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"ErrorMessages":$dp.$shared.$arrayFactory(""),"ApiDescription":{},"SampleRequests":$dp.$shared.$arrayFactory({}),"SampleResponses":$dp.$shared.$arrayFactory({})};obj.constructor=$dp.$JsNet.SingleAppExample.Areas.HelpPage.Models.HelpPageApiModel; return obj; };
$dp.$JsNet.SingleAppExample.Models.UserProfile = $dp.$JsNet.SingleAppExample.Models.UserProfile || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"UserId":0,"UserName":""};obj.constructor=$dp.$JsNet.SingleAppExample.Models.UserProfile; return obj; };
$dp.$JsNet.SingleAppExample.Models.RegisterExternalLoginModel = $dp.$JsNet.SingleAppExample.Models.RegisterExternalLoginModel || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"UserName":"","ExternalLoginData":""};obj.constructor=$dp.$JsNet.SingleAppExample.Models.RegisterExternalLoginModel; return obj; };
$dp.$JsNet.SingleAppExample.Models.LocalPasswordModel = $dp.$JsNet.SingleAppExample.Models.LocalPasswordModel || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"OldPassword":"","NewPassword":"","ConfirmPassword":""};obj.constructor=$dp.$JsNet.SingleAppExample.Models.LocalPasswordModel; return obj; };
$dp.$JsNet.SingleAppExample.Models.LoginModel = $dp.$JsNet.SingleAppExample.Models.LoginModel || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"UserName":"","Password":"","RememberMe":false};obj.constructor=$dp.$JsNet.SingleAppExample.Models.LoginModel; return obj; };
$dp.$JsNet.SingleAppExample.Models.RegisterModel = $dp.$JsNet.SingleAppExample.Models.RegisterModel || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"UserName":"","Password":"","ConfirmPassword":""};obj.constructor=$dp.$JsNet.SingleAppExample.Models.RegisterModel; return obj; };
$dp.$JsNet.SingleAppExample.Models.ExternalLogin = $dp.$JsNet.SingleAppExample.Models.ExternalLogin || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"Provider":"","ProviderDisplayName":"","ProviderUserId":""};obj.constructor=$dp.$JsNet.SingleAppExample.Models.ExternalLogin; return obj; };
$dp.$JsNet.SingleAppExample.Models.TodoItemDto = $dp.$JsNet.SingleAppExample.Models.TodoItemDto || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"TodoItemId":0,"Title":"","IsDone":false,"TodoListId":0};obj.constructor=$dp.$JsNet.SingleAppExample.Models.TodoItemDto; return obj; };
$dp.$JsNet.SingleAppExample.Models.TodoList = $dp.$JsNet.SingleAppExample.Models.TodoList || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"TodoListId":0,"UserId":"","Title":"","Todos":$dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.SingleAppExample.Models.TodoItem))};obj.constructor=$dp.$JsNet.SingleAppExample.Models.TodoList; return obj; };
$dp.$JsNet.SingleAppExample.Models.TodoItem = $dp.$JsNet.SingleAppExample.Models.TodoItem || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"TodoItemId":0,"Title":"","IsDone":false,"TodoListId":0,"TodoList":$dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.SingleAppExample.Models.TodoList)};obj.constructor=$dp.$JsNet.SingleAppExample.Models.TodoItem; return obj; };
$dp.$JsNet.SingleAppExample.Models.TodoListDto = $dp.$JsNet.SingleAppExample.Models.TodoListDto || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"TodoListId":0,"UserId":"","Title":"","Todos":$dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.SingleAppExample.Models.TodoItemDto))};obj.constructor=$dp.$JsNet.SingleAppExample.Models.TodoListDto; return obj; };
window.$dp = window.$dp || {};
window.$dp.$JsNet = window.$dp.$JsNet || {};
window.$dp.$JsNet.SingleAppExample = window.$dp.$JsNet.SingleAppExample || {};
window.$dp.$JsNet.SingleAppExample.Areas = window.$dp.$JsNet.SingleAppExample.Areas || {};
window.$dp.$JsNet.SingleAppExample.Areas.HelpPage = window.$dp.$JsNet.SingleAppExample.Areas.HelpPage || {};
$dp.$JsNet.SingleAppExample.Areas.HelpPage.SampleDirection = $dp.$JsNet.SingleAppExample.Areas.HelpPage.SampleDirection || {"Request":{ "Key":"Request","Value":0 },"Response":{ "Key":"Response","Value":1 }};
window.$dp = window.$dp || {};window.$dp.$JsNet = window.$dp.$JsNet || {};
$dp.$JsNet.$UrlSet = {"HelpPage":{"Help":{"Index": function actionFactory () { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { var action = {};action.$Params = function(){  var obj = null; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {}; return obj; };return action; }();return action; }(),"Api": function actionFactory () { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { var action = {};action.$Params = function(){  var obj = {"apiId":""}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {}; return obj; };return action; }();return action; }()}},
"Account":{"JsonLogin": function actionFactory () { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { var action = {};action.$Params = function(){  var obj = {"model":$dp.$JsNet.SingleAppExample.Models.LoginModel(),"returnUrl":""}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {dataType:"json",contentType:"application/json",cache:false}; return obj; };return action; }();return action; }(),"LogOff": function actionFactory () { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { var action = {};action.$Params = function(){  var obj = null; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {}; return obj; };return action; }();return action; }(),"JsonRegister": function actionFactory () { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { var action = {};action.$Params = function(){  var obj = {"model":$dp.$JsNet.SingleAppExample.Models.RegisterModel(),"returnUrl":""}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {}; return obj; };return action; }();return action; }(),"Disassociate": function actionFactory () { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { var action = {};action.$Params = function(){  var obj = {"provider":"","providerUserId":""}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {}; return obj; };return action; }();return action; }(),"Manage": function actionFactory () { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { var action = {};action.$Params = function(){  var obj = {"message":0}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {}; return obj; };return action; }();action.$sig1 = function actionFactory () { var action = {};action.$Params = function(){  var obj = {"model":$dp.$JsNet.SingleAppExample.Models.LocalPasswordModel()}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {}; return obj; };return action; }();return action; }(),"ExternalLogin": function actionFactory () { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { var action = {};action.$Params = function(){  var obj = {"provider":"","returnUrl":""}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {}; return obj; };return action; }();return action; }(),"ExternalLoginCallback": function actionFactory () { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { var action = {};action.$Params = function(){  var obj = {"returnUrl":""}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {}; return obj; };return action; }();return action; }(),"ExternalLoginConfirmation": function actionFactory () { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { var action = {};action.$Params = function(){  var obj = {"model":$dp.$JsNet.SingleAppExample.Models.RegisterExternalLoginModel(),"returnUrl":""}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {}; return obj; };return action; }();return action; }(),"ExternalLoginFailure": function actionFactory () { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { var action = {};action.$Params = function(){  var obj = null; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {}; return obj; };return action; }();return action; }(),"ExternalLoginsList": function actionFactory () { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { var action = {};action.$Params = function(){  var obj = {"returnUrl":""}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {}; return obj; };return action; }();return action; }(),"RemoveExternalLogins": function actionFactory () { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { var action = {};action.$Params = function(){  var obj = null; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {}; return obj; };return action; }();return action; }()},
"Home":{"Index": function actionFactory () { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { var action = {};action.$Params = function(){  var obj = {"returnUrl":""}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {}; return obj; };return action; }();return action; }()},
"Todo":{"PutTodoItem": function actionFactory () { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { var action = {};action.$Params = function(){  var obj = {"id":0,"todoItemDto":$dp.$JsNet.SingleAppExample.Models.TodoItemDto()}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = { $httpMethods:{$put:"put",$items:["put"],$single:"put"} };action.$AjaxOptions = function(){  var obj = {dataType:"text",contentType:"application/json",cache:false}; return obj; };return action; }();return action; }(),"PostTodoItem": function actionFactory () { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { var action = {};action.$Params = function(){  var obj = {"todoItemDto":$dp.$JsNet.SingleAppExample.Models.TodoItemDto()}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = { $httpMethods:{$post:"post",$items:["post"],$single:"post"} };action.$AjaxOptions = function(){  var obj = {dataType:"text",contentType:"application/json",cache:false}; return obj; };return action; }();return action; }(),"DeleteTodoItem": function actionFactory () { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { var action = {};action.$Params = function(){  var obj = {"id":0}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = { $httpMethods:{$delete:"delete",$items:["delete"],$single:"delete"} };action.$AjaxOptions = function(){  var obj = {dataType:"text",contentType:"application/json",cache:false}; return obj; };return action; }();return action; }(),"testPut": function actionFactory () { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { var action = {};action.$Params = function(){  var obj = null; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = { $httpMethods:{$PUT:"PUT",$TEST:"TEST",$GET:"GET",$items:["PUT","TEST","GET"],$single:null} };action.$AjaxOptions = function(){  var obj = {dataType:"text",contentType:"application/json",cache:false}; return obj; };return action; }();return action; }(),"test1Put": function actionFactory () { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { var action = {};action.$Params = function(){  var obj = null; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = { $httpMethods:{$put:"put",$items:["put"],$single:"put"} };action.$AjaxOptions = function(){  var obj = {dataType:"text",contentType:"application/json",cache:false}; return obj; };return action; }();return action; }()},
"TodoList":{"GetTodoLists": function actionFactory () { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { var action = {};action.$Params = function(){  var obj = null; return obj; };action.$Return = function(){  var obj = $dp.$shared.$arrayFactory({"TodoListId":0,"UserId":"","Title":"","Todos":$dp.$shared.$arrayFactory({"TodoItemId":0,"Title":"","IsDone":false,"TodoListId":0})}); return obj; };action.$IsApiController = { $httpMethods:{$get:"get",$items:["get"],$single:"get"} };action.$AjaxOptions = function(){  var obj = {dataType:"json",contentType:"application/json",cache:false}; return obj; };return action; }();return action; }(),"GetTodoList": function actionFactory () { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { var action = {};action.$Params = function(){  var obj = {"id":0}; return obj; };action.$Return = function(){  var obj = {"TodoListId":0,"UserId":"","Title":"","Todos":$dp.$shared.$arrayFactory({"TodoItemId":0,"Title":"","IsDone":false,"TodoListId":0})}; return obj; };action.$IsApiController = { $httpMethods:{$get:"get",$items:["get"],$single:"get"} };action.$AjaxOptions = function(){  var obj = {dataType:"json",contentType:"application/json",cache:false}; return obj; };return action; }();return action; }(),"PutTodoList": function actionFactory () { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { var action = {};action.$Params = function(){  var obj = {"id":0,"todoListDto":$dp.$JsNet.SingleAppExample.Models.TodoListDto()}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = { $httpMethods:{$put:"put",$items:["put"],$single:"put"} };action.$AjaxOptions = function(){  var obj = {dataType:"text",contentType:"application/json",cache:false}; return obj; };return action; }();return action; }(),"PostTodoList": function actionFactory () { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { var action = {};action.$Params = function(){  var obj = {"todoListDto":$dp.$JsNet.SingleAppExample.Models.TodoListDto()}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = { $httpMethods:{$post:"post",$items:["post"],$single:"post"} };action.$AjaxOptions = function(){  var obj = {dataType:"text",contentType:"application/json",cache:false}; return obj; };return action; }();return action; }(),"DeleteTodoList": function actionFactory () { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { var action = {};action.$Params = function(){  var obj = {"id":0}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = { $httpMethods:{$delete:"delete",$items:["delete"],$single:"delete"} };action.$AjaxOptions = function(){  var obj = {dataType:"text",contentType:"application/json",cache:false}; return obj; };return action; }();return action; }()}};
})();
})();
