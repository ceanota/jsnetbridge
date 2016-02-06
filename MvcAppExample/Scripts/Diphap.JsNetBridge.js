
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
    window.$dp.shared = window.$dp.shared || {};

    if (window.$dp.shared.arrayFactory !== undefined) { return; }

    $dp.shared.arrayFactory = function arrayFactory(ref) {
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
    window.$dp.shared = window.$dp.shared || {};

    if (window.$dp.shared.circularReferenceManagerFactory !== undefined) { return; }

    window.$dp.shared.circularReferenceManagerFactory = function circularReferenceManagerFactory(sameIntance) {
        /// <signature>
        ///   <summary>Factory gives un new instance of Function that handles the circular reference objects.</summary>
        ///   <param name="sameIntance" type="bool">If sameInstance === undefined: new instance of function. Otherwise, we use the same instance.</param>
        ///   <returns type="Function" />
        /// </signature>
        if (sameIntance === undefined) {
            var newFunc = window.$dp.shared.circularReferenceManagerFactory._managerFunc.bind();
            newFunc.factories = [];
            window.$dp.shared.circularReferenceManagerFactory.instance = newFunc;
        }
        return window.$dp.shared.circularReferenceManagerFactory.instance;
    }

    window.$dp.shared.circularReferenceManagerFactory._managerFunc = function _managerFunc(func) {
        /// <signature>
        ///   <summary>it is the function that handles the circular reference objects</summary>
        ///   <param name="func" type="Function">Factory of instances.</param>
        ///   <returns type="Object" />
        /// </signature>

        var internalFunc = window.$dp.shared.circularReferenceManagerFactory.instance;

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



window.$dp = window.$dp || {};
window.$dp.$JsNet = window.$dp.$JsNet || {};
window.$dp.$JsNet.MvcAppExample = window.$dp.$JsNet.MvcAppExample || {};
window.$dp.$JsNet.MvcAppExample.Models = window.$dp.$JsNet.MvcAppExample.Models || {};
$dp.$JsNet.MvcAppExample.Models.UserProfile = $dp.$JsNet.MvcAppExample.Models.UserProfile || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"UserId":0,"UserName":""};obj.constructor=$dp.$JsNet.MvcAppExample.Models.UserProfile; return obj; };
$dp.$JsNet.MvcAppExample.Models.RegisterExternalLoginModel = $dp.$JsNet.MvcAppExample.Models.RegisterExternalLoginModel || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"UserName":"","ExternalLoginData":""};obj.constructor=$dp.$JsNet.MvcAppExample.Models.RegisterExternalLoginModel; return obj; };
$dp.$JsNet.MvcAppExample.Models.LocalPasswordModel = $dp.$JsNet.MvcAppExample.Models.LocalPasswordModel || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"OldPassword":"","NewPassword":"","ConfirmPassword":""};obj.constructor=$dp.$JsNet.MvcAppExample.Models.LocalPasswordModel; return obj; };
$dp.$JsNet.MvcAppExample.Models.LoginModel = $dp.$JsNet.MvcAppExample.Models.LoginModel || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"UserName":"","Password":"","RememberMe":false};obj.constructor=$dp.$JsNet.MvcAppExample.Models.LoginModel; return obj; };
$dp.$JsNet.MvcAppExample.Models.RegisterModel = $dp.$JsNet.MvcAppExample.Models.RegisterModel || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"UserName":"","Password":"","ConfirmPassword":""};obj.constructor=$dp.$JsNet.MvcAppExample.Models.RegisterModel; return obj; };
$dp.$JsNet.MvcAppExample.Models.ExternalLogin = $dp.$JsNet.MvcAppExample.Models.ExternalLogin || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"Provider":"","ProviderDisplayName":"","ProviderUserId":""};obj.constructor=$dp.$JsNet.MvcAppExample.Models.ExternalLogin; return obj; };

window.$dp = window.$dp || {};window.$dp.$JsNet = window.$dp.$JsNet || {};
$dp.$JsNet.$UrlSet = {"Account":{"Login": function actionFactory () { var action = {};action.Url = null;action.sig0 = function actionFactory () { var action = {};action.Params = function(){  var obj = {"returnUrl":""}; return obj; };action.Return = function(){  var obj = {}; return obj; };action.IsApiController = null;action.AjaxOptions = function(){  var obj = {}; return obj; };return action; }();action.sig1 = function actionFactory () { var action = {};action.Params = function(){  var obj = {"model":$dp.$JsNet.MvcAppExample.Models.LoginModel(),"returnUrl":""}; return obj; };action.Return = function(){  var obj = {}; return obj; };action.IsApiController = null;action.AjaxOptions = function(){  var obj = {}; return obj; };return action; }();return action; }(),"LogOff": function actionFactory () { var action = {};action.Url = null;action.sig0 = function actionFactory () { var action = {};action.Params = function(){  var obj = null; return obj; };action.Return = function(){  var obj = {}; return obj; };action.IsApiController = null;action.AjaxOptions = function(){  var obj = {}; return obj; };return action; }();return action; }(),"Register": function actionFactory () { var action = {};action.Url = null;action.sig0 = function actionFactory () { var action = {};action.Params = function(){  var obj = null; return obj; };action.Return = function(){  var obj = {}; return obj; };action.IsApiController = null;action.AjaxOptions = function(){  var obj = {}; return obj; };return action; }();action.sig1 = function actionFactory () { var action = {};action.Params = function(){  var obj = {"model":$dp.$JsNet.MvcAppExample.Models.RegisterModel()}; return obj; };action.Return = function(){  var obj = {}; return obj; };action.IsApiController = null;action.AjaxOptions = function(){  var obj = {}; return obj; };return action; }();return action; }(),"Disassociate": function actionFactory () { var action = {};action.Url = null;action.sig0 = function actionFactory () { var action = {};action.Params = function(){  var obj = {"provider":"","providerUserId":""}; return obj; };action.Return = function(){  var obj = {}; return obj; };action.IsApiController = null;action.AjaxOptions = function(){  var obj = {}; return obj; };return action; }();return action; }(),"Manage": function actionFactory () { var action = {};action.Url = null;action.sig0 = function actionFactory () { var action = {};action.Params = function(){  var obj = {"message":0}; return obj; };action.Return = function(){  var obj = {}; return obj; };action.IsApiController = null;action.AjaxOptions = function(){  var obj = {}; return obj; };return action; }();action.sig1 = function actionFactory () { var action = {};action.Params = function(){  var obj = {"model":$dp.$JsNet.MvcAppExample.Models.LocalPasswordModel()}; return obj; };action.Return = function(){  var obj = {}; return obj; };action.IsApiController = null;action.AjaxOptions = function(){  var obj = {}; return obj; };return action; }();return action; }(),"ExternalLogin": function actionFactory () { var action = {};action.Url = null;action.sig0 = function actionFactory () { var action = {};action.Params = function(){  var obj = {"provider":"","returnUrl":""}; return obj; };action.Return = function(){  var obj = {}; return obj; };action.IsApiController = null;action.AjaxOptions = function(){  var obj = {}; return obj; };return action; }();return action; }(),"ExternalLoginCallback": function actionFactory () { var action = {};action.Url = null;action.sig0 = function actionFactory () { var action = {};action.Params = function(){  var obj = {"returnUrl":""}; return obj; };action.Return = function(){  var obj = {}; return obj; };action.IsApiController = null;action.AjaxOptions = function(){  var obj = {}; return obj; };return action; }();return action; }(),"ExternalLoginConfirmation": function actionFactory () { var action = {};action.Url = null;action.sig0 = function actionFactory () { var action = {};action.Params = function(){  var obj = {"model":$dp.$JsNet.MvcAppExample.Models.RegisterExternalLoginModel(),"returnUrl":""}; return obj; };action.Return = function(){  var obj = {}; return obj; };action.IsApiController = null;action.AjaxOptions = function(){  var obj = {}; return obj; };return action; }();return action; }(),"ExternalLoginFailure": function actionFactory () { var action = {};action.Url = null;action.sig0 = function actionFactory () { var action = {};action.Params = function(){  var obj = null; return obj; };action.Return = function(){  var obj = {}; return obj; };action.IsApiController = null;action.AjaxOptions = function(){  var obj = {}; return obj; };return action; }();return action; }(),"ExternalLoginsList": function actionFactory () { var action = {};action.Url = null;action.sig0 = function actionFactory () { var action = {};action.Params = function(){  var obj = {"returnUrl":""}; return obj; };action.Return = function(){  var obj = {}; return obj; };action.IsApiController = null;action.AjaxOptions = function(){  var obj = {}; return obj; };return action; }();return action; }(),"RemoveExternalLogins": function actionFactory () { var action = {};action.Url = null;action.sig0 = function actionFactory () { var action = {};action.Params = function(){  var obj = null; return obj; };action.Return = function(){  var obj = {}; return obj; };action.IsApiController = null;action.AjaxOptions = function(){  var obj = {}; return obj; };return action; }();return action; }()},
"Home":{"Index": function actionFactory () { var action = {};action.Url = null;action.sig0 = function actionFactory () { var action = {};action.Params = function(){  var obj = null; return obj; };action.Return = function(){  var obj = {}; return obj; };action.IsApiController = null;action.AjaxOptions = function(){  var obj = {}; return obj; };return action; }();return action; }(),"About": function actionFactory () { var action = {};action.Url = null;action.sig0 = function actionFactory () { var action = {};action.Params = function(){  var obj = null; return obj; };action.Return = function(){  var obj = {}; return obj; };action.IsApiController = null;action.AjaxOptions = function(){  var obj = {}; return obj; };return action; }();return action; }(),"Contact": function actionFactory () { var action = {};action.Url = null;action.sig0 = function actionFactory () { var action = {};action.Params = function(){  var obj = null; return obj; };action.Return = function(){  var obj = {}; return obj; };action.IsApiController = null;action.AjaxOptions = function(){  var obj = {}; return obj; };return action; }();return action; }()}};
