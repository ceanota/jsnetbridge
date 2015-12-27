
//#region "COPYRIGHT"
/***************************************************************************************************************
            Diphap.JsNetBridge.Mvc v1.1.0.0
            Build ASP.NET Objects API for javascript
            Copyright (c)  2015

            http://jsnet.codeplex.com/
            The MIT License (MIT)
            
            Creator:    TRAN Alexandre 
                        tran-alexandre@hotmail.fr
            Created:    27/12/2015 20:14:22, 01:00:00, Paris, Madrid (heure d’été)
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
window.$dp.$JsNet.SingleAppExample = window.$dp.$JsNet.SingleAppExample || {};
window.$dp.$JsNet.SingleAppExample.Areas = window.$dp.$JsNet.SingleAppExample.Areas || {};
window.$dp.$JsNet.SingleAppExample.Areas.HelpPage = window.$dp.$JsNet.SingleAppExample.Areas.HelpPage || {};
window.$dp.$JsNet.SingleAppExample.Areas.HelpPage.Models = window.$dp.$JsNet.SingleAppExample.Areas.HelpPage.Models || {};
window.$dp.$JsNet.SingleAppExample.Models = window.$dp.$JsNet.SingleAppExample.Models || {};
$dp.$JsNet.SingleAppExample.Areas.HelpPage.Models.HelpPageApiModel = $dp.$JsNet.SingleAppExample.Areas.HelpPage.Models.HelpPageApiModel || function(){ var obj = {"ErrorMessages":$dp.shared.arrayFactory(""),"ApiDescription":{},"SampleRequests":{},"SampleResponses":{}};obj.constructor=$dp.$JsNet.SingleAppExample.Areas.HelpPage.Models.HelpPageApiModel; return obj; };
$dp.$JsNet.SingleAppExample.Models.UserProfile = $dp.$JsNet.SingleAppExample.Models.UserProfile || function(){ var obj = {"UserId":0,"UserName":""};obj.constructor=$dp.$JsNet.SingleAppExample.Models.UserProfile; return obj; };
$dp.$JsNet.SingleAppExample.Models.RegisterExternalLoginModel = $dp.$JsNet.SingleAppExample.Models.RegisterExternalLoginModel || function(){ var obj = {"UserName":"","ExternalLoginData":""};obj.constructor=$dp.$JsNet.SingleAppExample.Models.RegisterExternalLoginModel; return obj; };
$dp.$JsNet.SingleAppExample.Models.LocalPasswordModel = $dp.$JsNet.SingleAppExample.Models.LocalPasswordModel || function(){ var obj = {"OldPassword":"","NewPassword":"","ConfirmPassword":""};obj.constructor=$dp.$JsNet.SingleAppExample.Models.LocalPasswordModel; return obj; };
$dp.$JsNet.SingleAppExample.Models.LoginModel = $dp.$JsNet.SingleAppExample.Models.LoginModel || function(){ var obj = {"UserName":"","Password":"","RememberMe":false};obj.constructor=$dp.$JsNet.SingleAppExample.Models.LoginModel; return obj; };
$dp.$JsNet.SingleAppExample.Models.RegisterModel = $dp.$JsNet.SingleAppExample.Models.RegisterModel || function(){ var obj = {"UserName":"","Password":"","ConfirmPassword":""};obj.constructor=$dp.$JsNet.SingleAppExample.Models.RegisterModel; return obj; };
$dp.$JsNet.SingleAppExample.Models.ExternalLogin = $dp.$JsNet.SingleAppExample.Models.ExternalLogin || function(){ var obj = {"Provider":"","ProviderDisplayName":"","ProviderUserId":""};obj.constructor=$dp.$JsNet.SingleAppExample.Models.ExternalLogin; return obj; };
$dp.$JsNet.SingleAppExample.Models.TodoItemDto = $dp.$JsNet.SingleAppExample.Models.TodoItemDto || function(){ var obj = {"TodoItemId":0,"Title":"","IsDone":false,"TodoListId":0};obj.constructor=$dp.$JsNet.SingleAppExample.Models.TodoItemDto; return obj; };
$dp.$JsNet.SingleAppExample.Models.TodoItem = $dp.$JsNet.SingleAppExample.Models.TodoItem || function(){ var obj = {"TodoItemId":0,"Title":"","IsDone":false,"TodoListId":0,"TodoList":{"TodoListId":0,"UserId":"","Title":"","Todos":{}}};obj.constructor=$dp.$JsNet.SingleAppExample.Models.TodoItem; return obj; };
$dp.$JsNet.SingleAppExample.Models.TodoList = $dp.$JsNet.SingleAppExample.Models.TodoList || function(){ var obj = {"TodoListId":0,"UserId":"","Title":"","Todos":{"TodoItemId":0,"Title":"","IsDone":false,"TodoListId":0,"TodoList":{}}};obj.constructor=$dp.$JsNet.SingleAppExample.Models.TodoList; return obj; };
$dp.$JsNet.SingleAppExample.Models.TodoListDto = $dp.$JsNet.SingleAppExample.Models.TodoListDto || function(){ var obj = {"TodoListId":0,"UserId":"","Title":"","Todos":$dp.shared.arrayFactory($dp.$JsNet.SingleAppExample.Models.TodoItemDto())};obj.constructor=$dp.$JsNet.SingleAppExample.Models.TodoListDto; return obj; };
window.$dp = window.$dp || {};
window.$dp.$JsNet = window.$dp.$JsNet || {};
window.$dp.$JsNet.SingleAppExample = window.$dp.$JsNet.SingleAppExample || {};
window.$dp.$JsNet.SingleAppExample.Areas = window.$dp.$JsNet.SingleAppExample.Areas || {};
window.$dp.$JsNet.SingleAppExample.Areas.HelpPage = window.$dp.$JsNet.SingleAppExample.Areas.HelpPage || {};
$dp.$JsNet.SingleAppExample.Areas.HelpPage.SampleDirection = $dp.$JsNet.SingleAppExample.Areas.HelpPage.SampleDirection || {"Request":{ "Key":"Request","Value":0 },"Response":{ "Key":"Response","Value":1 }};
window.$dp = window.$dp || {};window.$dp.$JsNet = window.$dp.$JsNet || {};
$dp.$JsNet.$UrlSet = {"HelpPage":{"Help":{"Index": {Url:null,Params:function(){ var obj = null; return obj; },Return:function(){ var obj = {}; return obj; },IsApiController:null,AjaxOptions:function(){ var obj = {}; return obj; }},"Api": {Url:null,Params:function(){ var obj = {"apiId":""}; return obj; },Return:function(){ var obj = {}; return obj; },IsApiController:null,AjaxOptions:function(){ var obj = {}; return obj; }}}},
"Account":{"JsonLogin": {Url:null,Params:function(){ var obj = {"model":$dp.$JsNet.SingleAppExample.Models.LoginModel(),"returnUrl":""}; return obj; },Return:function(){ var obj = {}; return obj; },IsApiController:null,AjaxOptions:function(){ var obj = {dataType:"json",contentType:"application/json",cache:false}; return obj; }},"LogOff": {Url:null,Params:function(){ var obj = null; return obj; },Return:function(){ var obj = {}; return obj; },IsApiController:null,AjaxOptions:function(){ var obj = {}; return obj; }},"JsonRegister": {Url:null,Params:function(){ var obj = {"model":$dp.$JsNet.SingleAppExample.Models.RegisterModel(),"returnUrl":""}; return obj; },Return:function(){ var obj = {}; return obj; },IsApiController:null,AjaxOptions:function(){ var obj = {}; return obj; }},"Disassociate": {Url:null,Params:function(){ var obj = {"provider":"","providerUserId":""}; return obj; },Return:function(){ var obj = {}; return obj; },IsApiController:null,AjaxOptions:function(){ var obj = {}; return obj; }},"Manage": {Url:null,Params:function(){ var obj = {"message":0}; return obj; },Return:function(){ var obj = {}; return obj; },IsApiController:null,AjaxOptions:function(){ var obj = {}; return obj; }},"Manage": {Url:null,Params:function(){ var obj = {"model":$dp.$JsNet.SingleAppExample.Models.LocalPasswordModel()}; return obj; },Return:function(){ var obj = {}; return obj; },IsApiController:null,AjaxOptions:function(){ var obj = {}; return obj; }},"ExternalLogin": {Url:null,Params:function(){ var obj = {"provider":"","returnUrl":""}; return obj; },Return:function(){ var obj = {}; return obj; },IsApiController:null,AjaxOptions:function(){ var obj = {}; return obj; }},"ExternalLoginCallback": {Url:null,Params:function(){ var obj = {"returnUrl":""}; return obj; },Return:function(){ var obj = {}; return obj; },IsApiController:null,AjaxOptions:function(){ var obj = {}; return obj; }},"ExternalLoginConfirmation": {Url:null,Params:function(){ var obj = {"model":$dp.$JsNet.SingleAppExample.Models.RegisterExternalLoginModel(),"returnUrl":""}; return obj; },Return:function(){ var obj = {}; return obj; },IsApiController:null,AjaxOptions:function(){ var obj = {}; return obj; }},"ExternalLoginFailure": {Url:null,Params:function(){ var obj = null; return obj; },Return:function(){ var obj = {}; return obj; },IsApiController:null,AjaxOptions:function(){ var obj = {}; return obj; }},"ExternalLoginsList": {Url:null,Params:function(){ var obj = {"returnUrl":""}; return obj; },Return:function(){ var obj = {}; return obj; },IsApiController:null,AjaxOptions:function(){ var obj = {}; return obj; }},"RemoveExternalLogins": {Url:null,Params:function(){ var obj = null; return obj; },Return:function(){ var obj = {}; return obj; },IsApiController:null,AjaxOptions:function(){ var obj = {}; return obj; }}},
"Home":{"Index": {Url:null,Params:function(){ var obj = {"returnUrl":""}; return obj; },Return:function(){ var obj = {}; return obj; },IsApiController:null,AjaxOptions:function(){ var obj = {}; return obj; }}},
"Todo":{"PutTodoItem": {Url:null,Params:function(){ var obj = {"id":0,"todoItemDto":$dp.$JsNet.SingleAppExample.Models.TodoItemDto()}; return obj; },Return:function(){ var obj = {}; return obj; },IsApiController:{ methods:{put:"put",items:["put"],single:"put"} },AjaxOptions:function(){ var obj = {dataType:"text",contentType:"application/json",cache:false}; return obj; }},"PostTodoItem": {Url:null,Params:function(){ var obj = {"todoItemDto":$dp.$JsNet.SingleAppExample.Models.TodoItemDto()}; return obj; },Return:function(){ var obj = {}; return obj; },IsApiController:{ methods:{post:"post",items:["post"],single:"post"} },AjaxOptions:function(){ var obj = {dataType:"text",contentType:"application/json",cache:false}; return obj; }},"DeleteTodoItem": {Url:null,Params:function(){ var obj = {"id":0}; return obj; },Return:function(){ var obj = {}; return obj; },IsApiController:{ methods:{delete:"delete",items:["delete"],single:"delete"} },AjaxOptions:function(){ var obj = {dataType:"text",contentType:"application/json",cache:false}; return obj; }},"testPut": {Url:null,Params:function(){ var obj = null; return obj; },Return:function(){ var obj = {}; return obj; },IsApiController:{ methods:{PUT:"PUT",TEST:"TEST",GET:"GET",items:["PUT","TEST","GET"],single:null} },AjaxOptions:function(){ var obj = {dataType:"text",contentType:"application/json",cache:false}; return obj; }},"test1Put": {Url:null,Params:function(){ var obj = null; return obj; },Return:function(){ var obj = {}; return obj; },IsApiController:{ methods:{put:"put",items:["put"],single:"put"} },AjaxOptions:function(){ var obj = {dataType:"text",contentType:"application/json",cache:false}; return obj; }}},
"TodoList":{"GetTodoLists": {Url:null,Params:function(){ var obj = null; return obj; },Return:function(){ var obj = $dp.shared.arrayFactory({"TodoListId":0,"UserId":"","Title":"","Todos":$dp.shared.arrayFactory({"TodoItemId":0,"Title":"","IsDone":false,"TodoListId":0})}); return obj; },IsApiController:{ methods:{get:"get",items:["get"],single:"get"} },AjaxOptions:function(){ var obj = {dataType:"json",contentType:"application/json",cache:false}; return obj; }},"GetTodoList": {Url:null,Params:function(){ var obj = {"id":0}; return obj; },Return:function(){ var obj = {"TodoListId":0,"UserId":"","Title":"","Todos":$dp.shared.arrayFactory({"TodoItemId":0,"Title":"","IsDone":false,"TodoListId":0})}; return obj; },IsApiController:{ methods:{get:"get",items:["get"],single:"get"} },AjaxOptions:function(){ var obj = {dataType:"json",contentType:"application/json",cache:false}; return obj; }},"PutTodoList": {Url:null,Params:function(){ var obj = {"id":0,"todoListDto":$dp.$JsNet.SingleAppExample.Models.TodoListDto()}; return obj; },Return:function(){ var obj = {}; return obj; },IsApiController:{ methods:{put:"put",items:["put"],single:"put"} },AjaxOptions:function(){ var obj = {dataType:"text",contentType:"application/json",cache:false}; return obj; }},"PostTodoList": {Url:null,Params:function(){ var obj = {"todoListDto":$dp.$JsNet.SingleAppExample.Models.TodoListDto()}; return obj; },Return:function(){ var obj = {}; return obj; },IsApiController:{ methods:{post:"post",items:["post"],single:"post"} },AjaxOptions:function(){ var obj = {dataType:"text",contentType:"application/json",cache:false}; return obj; }},"DeleteTodoList": {Url:null,Params:function(){ var obj = {"id":0}; return obj; },Return:function(){ var obj = {}; return obj; },IsApiController:{ methods:{delete:"delete",items:["delete"],single:"delete"} },AjaxOptions:function(){ var obj = {dataType:"text",contentType:"application/json",cache:false}; return obj; }}}};
