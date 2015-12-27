
//#region "COPYRIGHT"
/***************************************************************************************************************
            Diphap.JsNetBridge.Mvc v1.1.0.0
            Build ASP.NET Objects API for javascript
            Copyright (c)  2015

            http://jsnet.codeplex.com/
            The MIT License (MIT)
            
            Creator:    TRAN Alexandre 
                        tran-alexandre@hotmail.fr
            Created:    27/12/2015 17:13:51, 01:00:00, Paris, Madrid (heure d’été)
*/
//#endregion


//#region "GET STARTED"
/***************************************************************************************************************
            //GET STARTED: Here's an example to start using the software:
***************************************************************************************************************/
// 1- Paste this code into the file 'BundleConfig.cs' in the function 'RegisterBundles' of the class 'BundleConfig':

            //bundles.Add(new ScriptBundle("~/bundles/JsNetBridge").Include(
            //            "~/Scripts/Diphap.JsNetBridge.js"));

// 2- Paste this code into the file 'Global.asax.cs' in class 'MvcApplication':

            //static Diphap.JsNetBridge.AspMvcInfo _AspMvcInfo;
            //static public Diphap.JsNetBridge.AspMvcInfo AspMvcInfo
            //{
            //    get
            //    {
            //        if (_AspMvcInfo == null)
            //        {
            //            _AspMvcInfo = new Diphap.JsNetBridge.AspMvcInfo(System.Reflection.Assembly.GetExecutingAssembly());
            //        }

            //        return _AspMvcInfo;
            //    }
            //}

// 3- Paste this code in each layout file (ex: '_ Layout.cshtml), before JS app:

            //@Scripts.Render("~/bundles/JsNetBridge")
            //<script>
            //    @(new MvcHtmlString(SingleAppExample.MvcApplication.AspMvcInfo.UrlInfo.ToJS_SetUrl(this)))
            //</script>
//#endregion


window.$dp = window.$dp || {};window.$dp.shared = window.$dp.shared || {};
$dp.shared.arrayFactory=$dp.shared.arrayFactory||function (ref) {
    var aa = [];
    aa.$dpItemFactory = function () {
        return ref;
    };
    return aa;
};

window.$dp = window.$dp || {};
window.$dp.$JsNet = window.$dp.$JsNet || {};
window.$dp.$JsNet.MvcAppExample = window.$dp.$JsNet.MvcAppExample || {};
window.$dp.$JsNet.MvcAppExample.Models = window.$dp.$JsNet.MvcAppExample.Models || {};
$dp.$JsNet.MvcAppExample.Models.UserProfile = $dp.$JsNet.MvcAppExample.Models.UserProfile || function(){ var obj = {"UserId":0,"UserName":""};obj.constructor=$dp.$JsNet.MvcAppExample.Models.UserProfile; return obj; };
$dp.$JsNet.MvcAppExample.Models.RegisterExternalLoginModel = $dp.$JsNet.MvcAppExample.Models.RegisterExternalLoginModel || function(){ var obj = {"UserName":"","ExternalLoginData":""};obj.constructor=$dp.$JsNet.MvcAppExample.Models.RegisterExternalLoginModel; return obj; };
$dp.$JsNet.MvcAppExample.Models.LocalPasswordModel = $dp.$JsNet.MvcAppExample.Models.LocalPasswordModel || function(){ var obj = {"OldPassword":"","NewPassword":"","ConfirmPassword":""};obj.constructor=$dp.$JsNet.MvcAppExample.Models.LocalPasswordModel; return obj; };
$dp.$JsNet.MvcAppExample.Models.LoginModel = $dp.$JsNet.MvcAppExample.Models.LoginModel || function(){ var obj = {"UserName":"","Password":"","RememberMe":false};obj.constructor=$dp.$JsNet.MvcAppExample.Models.LoginModel; return obj; };
$dp.$JsNet.MvcAppExample.Models.RegisterModel = $dp.$JsNet.MvcAppExample.Models.RegisterModel || function(){ var obj = {"UserName":"","Password":"","ConfirmPassword":""};obj.constructor=$dp.$JsNet.MvcAppExample.Models.RegisterModel; return obj; };
$dp.$JsNet.MvcAppExample.Models.ExternalLogin = $dp.$JsNet.MvcAppExample.Models.ExternalLogin || function(){ var obj = {"Provider":"","ProviderDisplayName":"","ProviderUserId":""};obj.constructor=$dp.$JsNet.MvcAppExample.Models.ExternalLogin; return obj; };

window.$dp = window.$dp || {};window.$dp.$JsNet = window.$dp.$JsNet || {};
$dp.$JsNet.$UrlSet = {"Account":{"Login": {Url:null,Params:function(){ var obj = {"returnUrl":""}; return obj; },Return:function(){ var obj = {}; return obj; },IsApiController:null,AjaxOptions:function(){ var obj = {}; return obj; }},"Login": {Url:null,Params:function(){ var obj = {"model":$dp.$JsNet.MvcAppExample.Models.LoginModel(),"returnUrl":""}; return obj; },Return:function(){ var obj = {}; return obj; },IsApiController:null,AjaxOptions:function(){ var obj = {}; return obj; }},"LogOff": {Url:null,Params:function(){ var obj = null; return obj; },Return:function(){ var obj = {}; return obj; },IsApiController:null,AjaxOptions:function(){ var obj = {}; return obj; }},"Register": {Url:null,Params:function(){ var obj = null; return obj; },Return:function(){ var obj = {}; return obj; },IsApiController:null,AjaxOptions:function(){ var obj = {}; return obj; }},"Register": {Url:null,Params:function(){ var obj = {"model":$dp.$JsNet.MvcAppExample.Models.RegisterModel()}; return obj; },Return:function(){ var obj = {}; return obj; },IsApiController:null,AjaxOptions:function(){ var obj = {}; return obj; }},"Disassociate": {Url:null,Params:function(){ var obj = {"provider":"","providerUserId":""}; return obj; },Return:function(){ var obj = {}; return obj; },IsApiController:null,AjaxOptions:function(){ var obj = {}; return obj; }},"Manage": {Url:null,Params:function(){ var obj = {"message":0}; return obj; },Return:function(){ var obj = {}; return obj; },IsApiController:null,AjaxOptions:function(){ var obj = {}; return obj; }},"Manage": {Url:null,Params:function(){ var obj = {"model":$dp.$JsNet.MvcAppExample.Models.LocalPasswordModel()}; return obj; },Return:function(){ var obj = {}; return obj; },IsApiController:null,AjaxOptions:function(){ var obj = {}; return obj; }},"ExternalLogin": {Url:null,Params:function(){ var obj = {"provider":"","returnUrl":""}; return obj; },Return:function(){ var obj = {}; return obj; },IsApiController:null,AjaxOptions:function(){ var obj = {}; return obj; }},"ExternalLoginCallback": {Url:null,Params:function(){ var obj = {"returnUrl":""}; return obj; },Return:function(){ var obj = {}; return obj; },IsApiController:null,AjaxOptions:function(){ var obj = {}; return obj; }},"ExternalLoginConfirmation": {Url:null,Params:function(){ var obj = {"model":$dp.$JsNet.MvcAppExample.Models.RegisterExternalLoginModel(),"returnUrl":""}; return obj; },Return:function(){ var obj = {}; return obj; },IsApiController:null,AjaxOptions:function(){ var obj = {}; return obj; }},"ExternalLoginFailure": {Url:null,Params:function(){ var obj = null; return obj; },Return:function(){ var obj = {}; return obj; },IsApiController:null,AjaxOptions:function(){ var obj = {}; return obj; }},"ExternalLoginsList": {Url:null,Params:function(){ var obj = {"returnUrl":""}; return obj; },Return:function(){ var obj = {}; return obj; },IsApiController:null,AjaxOptions:function(){ var obj = {}; return obj; }},"RemoveExternalLogins": {Url:null,Params:function(){ var obj = null; return obj; },Return:function(){ var obj = {}; return obj; },IsApiController:null,AjaxOptions:function(){ var obj = {}; return obj; }}},
"Home":{"Index": {Url:null,Params:function(){ var obj = null; return obj; },Return:function(){ var obj = {}; return obj; },IsApiController:null,AjaxOptions:function(){ var obj = {}; return obj; }},"About": {Url:null,Params:function(){ var obj = null; return obj; },Return:function(){ var obj = {}; return obj; },IsApiController:null,AjaxOptions:function(){ var obj = {}; return obj; }},"Contact": {Url:null,Params:function(){ var obj = null; return obj; },Return:function(){ var obj = {}; return obj; },IsApiController:null,AjaxOptions:function(){ var obj = {}; return obj; }}}};
