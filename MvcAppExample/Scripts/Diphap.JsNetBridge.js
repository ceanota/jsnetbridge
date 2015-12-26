/******************************************************************************************
            Diphap.JsNetBridge.Mvc v1.1.0.0
            Build ASP.NET Objects API for javascript
            Copyright (c)  2015

            http://jsnet.codeplex.com/
            The MIT License (MIT)
            
            Creator:    TRAN Alexandre 
                        tran-alexandre@hotmail.fr
            Created:    26/12/2015 09:55:56, 01:00:00, Paris, Madrid (heure d’été)
*******************************************************************************************/
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
$dp.$JsNet.MvcAppExample.Models.UserProfile = $dp.$JsNet.MvcAppExample.Models.UserProfile || function(){ return {"UserId":0,"UserName":""}; };
$dp.$JsNet.MvcAppExample.Models.RegisterExternalLoginModel = $dp.$JsNet.MvcAppExample.Models.RegisterExternalLoginModel || function(){ return {"UserName":"","ExternalLoginData":""}; };
$dp.$JsNet.MvcAppExample.Models.LocalPasswordModel = $dp.$JsNet.MvcAppExample.Models.LocalPasswordModel || function(){ return {"OldPassword":"","NewPassword":"","ConfirmPassword":""}; };
$dp.$JsNet.MvcAppExample.Models.LoginModel = $dp.$JsNet.MvcAppExample.Models.LoginModel || function(){ return {"UserName":"","Password":"","RememberMe":false}; };
$dp.$JsNet.MvcAppExample.Models.RegisterModel = $dp.$JsNet.MvcAppExample.Models.RegisterModel || function(){ return {"UserName":"","Password":"","ConfirmPassword":""}; };
$dp.$JsNet.MvcAppExample.Models.ExternalLogin = $dp.$JsNet.MvcAppExample.Models.ExternalLogin || function(){ return {"Provider":"","ProviderDisplayName":"","ProviderUserId":""}; };

window.$dp = window.$dp || {};window.$dp.$JsNet = window.$dp.$JsNet || {};
$dp.$JsNet.$UrlSet = {"Account":{"Login": {Url:null,Params:function(){ return {"returnUrl":""}; },Return:function(){ return {}; },IsApiController:null,AjaxOptions:function(){ return {}; }},"Login": {Url:null,Params:function(){ return {"model":$dp.$JsNet.MvcAppExample.Models.LoginModel(),"returnUrl":""}; },Return:function(){ return {}; },IsApiController:null,AjaxOptions:function(){ return {}; }},"LogOff": {Url:null,Params:function(){ return null; },Return:function(){ return {}; },IsApiController:null,AjaxOptions:function(){ return {}; }},"Register": {Url:null,Params:function(){ return null; },Return:function(){ return {}; },IsApiController:null,AjaxOptions:function(){ return {}; }},"Register": {Url:null,Params:function(){ return {"model":$dp.$JsNet.MvcAppExample.Models.RegisterModel()}; },Return:function(){ return {}; },IsApiController:null,AjaxOptions:function(){ return {}; }},"Disassociate": {Url:null,Params:function(){ return {"provider":"","providerUserId":""}; },Return:function(){ return {}; },IsApiController:null,AjaxOptions:function(){ return {}; }},"Manage": {Url:null,Params:function(){ return {"message":0}; },Return:function(){ return {}; },IsApiController:null,AjaxOptions:function(){ return {}; }},"Manage": {Url:null,Params:function(){ return {"model":$dp.$JsNet.MvcAppExample.Models.LocalPasswordModel()}; },Return:function(){ return {}; },IsApiController:null,AjaxOptions:function(){ return {}; }},"ExternalLogin": {Url:null,Params:function(){ return {"provider":"","returnUrl":""}; },Return:function(){ return {}; },IsApiController:null,AjaxOptions:function(){ return {}; }},"ExternalLoginCallback": {Url:null,Params:function(){ return {"returnUrl":""}; },Return:function(){ return {}; },IsApiController:null,AjaxOptions:function(){ return {}; }},"ExternalLoginConfirmation": {Url:null,Params:function(){ return {"model":$dp.$JsNet.MvcAppExample.Models.RegisterExternalLoginModel(),"returnUrl":""}; },Return:function(){ return {}; },IsApiController:null,AjaxOptions:function(){ return {}; }},"ExternalLoginFailure": {Url:null,Params:function(){ return null; },Return:function(){ return {}; },IsApiController:null,AjaxOptions:function(){ return {}; }},"ExternalLoginsList": {Url:null,Params:function(){ return {"returnUrl":""}; },Return:function(){ return {}; },IsApiController:null,AjaxOptions:function(){ return {}; }},"RemoveExternalLogins": {Url:null,Params:function(){ return null; },Return:function(){ return {}; },IsApiController:null,AjaxOptions:function(){ return {}; }}},
"Home":{"Index": {Url:null,Params:function(){ return null; },Return:function(){ return {}; },IsApiController:null,AjaxOptions:function(){ return {}; }},"About": {Url:null,Params:function(){ return null; },Return:function(){ return {}; },IsApiController:null,AjaxOptions:function(){ return {}; }},"Contact": {Url:null,Params:function(){ return null; },Return:function(){ return {}; },IsApiController:null,AjaxOptions:function(){ return {}; }}}};
