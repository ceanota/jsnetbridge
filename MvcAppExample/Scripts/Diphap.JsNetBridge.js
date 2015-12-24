/******************************************************************************************
            Diphap.JsNetBridge v1.1.0.0
            Build ASP.NET Objects API for javascript
            Copyright (c)  2015 Diphap

            http://jsnet.codeplex.com/
            The MIT License (MIT)
            
            Creator:    TRAN Alexandre 
                        tran-alexandre@hotmail.fr
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
window.$dp.$JsNet.MvcAppExample.Areas = window.$dp.$JsNet.MvcAppExample.Areas || {};
window.$dp.$JsNet.MvcAppExample.Areas.HelpPage = window.$dp.$JsNet.MvcAppExample.Areas.HelpPage || {};
window.$dp.$JsNet.MvcAppExample.Areas.HelpPage.Models = window.$dp.$JsNet.MvcAppExample.Areas.HelpPage.Models || {};
window.$dp.$JsNet.MvcAppExample.Models = window.$dp.$JsNet.MvcAppExample.Models || {};
$dp.$JsNet.MvcAppExample.Areas.HelpPage.Models.HelpPageApiModel = $dp.$JsNet.MvcAppExample.Areas.HelpPage.Models.HelpPageApiModel || function(){ return {"ErrorMessages":$dp.shared.arrayFactory(""),"ApiDescription":{},"SampleRequests":{},"SampleResponses":{}}; };
$dp.$JsNet.MvcAppExample.Models.UserProfile = $dp.$JsNet.MvcAppExample.Models.UserProfile || function(){ return {"UserId":0,"UserName":""}; };
$dp.$JsNet.MvcAppExample.Models.RegisterExternalLoginModel = $dp.$JsNet.MvcAppExample.Models.RegisterExternalLoginModel || function(){ return {"UserName":"","ExternalLoginData":""}; };
$dp.$JsNet.MvcAppExample.Models.LocalPasswordModel = $dp.$JsNet.MvcAppExample.Models.LocalPasswordModel || function(){ return {"OldPassword":"","NewPassword":"","ConfirmPassword":""}; };
$dp.$JsNet.MvcAppExample.Models.LoginModel = $dp.$JsNet.MvcAppExample.Models.LoginModel || function(){ return {"UserName":"","Password":"","RememberMe":false}; };
$dp.$JsNet.MvcAppExample.Models.RegisterModel = $dp.$JsNet.MvcAppExample.Models.RegisterModel || function(){ return {"UserName":"","Password":"","ConfirmPassword":""}; };
$dp.$JsNet.MvcAppExample.Models.ExternalLogin = $dp.$JsNet.MvcAppExample.Models.ExternalLogin || function(){ return {"Provider":"","ProviderDisplayName":"","ProviderUserId":""}; };
$dp.$JsNet.MvcAppExample.Models.TodoItemDto = $dp.$JsNet.MvcAppExample.Models.TodoItemDto || function(){ return {"TodoItemId":0,"Title":"","IsDone":false,"TodoListId":0}; };
$dp.$JsNet.MvcAppExample.Models.TodoItem = $dp.$JsNet.MvcAppExample.Models.TodoItem || function(){ return {"TodoItemId":0,"Title":"","IsDone":false,"TodoListId":0,"TodoList":{"TodoListId":0,"UserId":"","Title":"","Todos":{}}}; };
$dp.$JsNet.MvcAppExample.Models.TodoList = $dp.$JsNet.MvcAppExample.Models.TodoList || function(){ return {"TodoListId":0,"UserId":"","Title":"","Todos":{"TodoItemId":0,"Title":"","IsDone":false,"TodoListId":0,"TodoList":{}}}; };
$dp.$JsNet.MvcAppExample.Models.TodoListDto = $dp.$JsNet.MvcAppExample.Models.TodoListDto || function(){ return {"TodoListId":0,"UserId":"","Title":"","Todos":$dp.shared.arrayFactory($dp.$JsNet.MvcAppExample.Models.TodoItemDto())}; };
window.$dp = window.$dp || {};
window.$dp.$JsNet = window.$dp.$JsNet || {};
window.$dp.$JsNet.MvcAppExample = window.$dp.$JsNet.MvcAppExample || {};
window.$dp.$JsNet.MvcAppExample.Areas = window.$dp.$JsNet.MvcAppExample.Areas || {};
window.$dp.$JsNet.MvcAppExample.Areas.HelpPage = window.$dp.$JsNet.MvcAppExample.Areas.HelpPage || {};
$dp.$JsNet.MvcAppExample.Areas.HelpPage.SampleDirection = $dp.$JsNet.MvcAppExample.Areas.HelpPage.SampleDirection || {"Request":{ "Key":"Request","Value":0 },"Response":{ "Key":"Response","Value":1 }};
window.$dp = window.$dp || {};window.$dp.$JsNet = window.$dp.$JsNet || {};
$dp.$JsNet.$UrlSet = {"HelpPage":{"Help":{"Index": {Url:null,Params:function(){ return null; },Return:function(){ return {}; },IsApiController:null,AjaxOptions:function(){ return {}; }},"Api": {Url:null,Params:function(){ return {"apiId":""}; },Return:function(){ return {}; },IsApiController:null,AjaxOptions:function(){ return {}; }}}},
"Account":{"JsonLogin": {Url:null,Params:function(){ return {"model":$dp.$JsNet.MvcAppExample.Models.LoginModel(),"returnUrl":""}; },Return:function(){ return {}; },IsApiController:null,AjaxOptions:function(){ return {dataType:"json",contentType:"application/json",cache:false}; }},"LogOff": {Url:null,Params:function(){ return null; },Return:function(){ return {}; },IsApiController:null,AjaxOptions:function(){ return {}; }},"JsonRegister": {Url:null,Params:function(){ return {"model":$dp.$JsNet.MvcAppExample.Models.RegisterModel(),"returnUrl":""}; },Return:function(){ return {}; },IsApiController:null,AjaxOptions:function(){ return {}; }},"Disassociate": {Url:null,Params:function(){ return {"provider":"","providerUserId":""}; },Return:function(){ return {}; },IsApiController:null,AjaxOptions:function(){ return {}; }},"Manage": {Url:null,Params:function(){ return {"message":0}; },Return:function(){ return {}; },IsApiController:null,AjaxOptions:function(){ return {}; }},"Manage": {Url:null,Params:function(){ return {"model":$dp.$JsNet.MvcAppExample.Models.LocalPasswordModel()}; },Return:function(){ return {}; },IsApiController:null,AjaxOptions:function(){ return {}; }},"ExternalLogin": {Url:null,Params:function(){ return {"provider":"","returnUrl":""}; },Return:function(){ return {}; },IsApiController:null,AjaxOptions:function(){ return {}; }},"ExternalLoginCallback": {Url:null,Params:function(){ return {"returnUrl":""}; },Return:function(){ return {}; },IsApiController:null,AjaxOptions:function(){ return {}; }},"ExternalLoginConfirmation": {Url:null,Params:function(){ return {"model":$dp.$JsNet.MvcAppExample.Models.RegisterExternalLoginModel(),"returnUrl":""}; },Return:function(){ return {}; },IsApiController:null,AjaxOptions:function(){ return {}; }},"ExternalLoginFailure": {Url:null,Params:function(){ return null; },Return:function(){ return {}; },IsApiController:null,AjaxOptions:function(){ return {}; }},"ExternalLoginsList": {Url:null,Params:function(){ return {"returnUrl":""}; },Return:function(){ return {}; },IsApiController:null,AjaxOptions:function(){ return {}; }},"RemoveExternalLogins": {Url:null,Params:function(){ return null; },Return:function(){ return {}; },IsApiController:null,AjaxOptions:function(){ return {}; }}},
"Home":{"Index": {Url:null,Params:function(){ return {"returnUrl":""}; },Return:function(){ return {}; },IsApiController:null,AjaxOptions:function(){ return {}; }}},
"Todo":{"PutTodoItem": {Url:null,Params:function(){ return {"id":0,"todoItemDto":$dp.$JsNet.MvcAppExample.Models.TodoItemDto()}; },Return:function(){ return {}; },IsApiController:{ methods:{put:"put",items:["put"],single:"put"} },AjaxOptions:function(){ return {dataType:"text",contentType:"application/json",cache:false}; }},"PostTodoItem": {Url:null,Params:function(){ return {"todoItemDto":$dp.$JsNet.MvcAppExample.Models.TodoItemDto()}; },Return:function(){ return {}; },IsApiController:{ methods:{post:"post",items:["post"],single:"post"} },AjaxOptions:function(){ return {dataType:"text",contentType:"application/json",cache:false}; }},"DeleteTodoItem": {Url:null,Params:function(){ return {"id":0}; },Return:function(){ return {}; },IsApiController:{ methods:{delete:"delete",items:["delete"],single:"delete"} },AjaxOptions:function(){ return {dataType:"text",contentType:"application/json",cache:false}; }},"testPut": {Url:null,Params:function(){ return null; },Return:function(){ return {}; },IsApiController:{ methods:{PUT:"PUT",TEST:"TEST",GET:"GET",items:["PUT","TEST","GET"],single:null} },AjaxOptions:function(){ return {dataType:"text",contentType:"application/json",cache:false}; }},"test1Put": {Url:null,Params:function(){ return null; },Return:function(){ return {}; },IsApiController:{ methods:{put:"put",items:["put"],single:"put"} },AjaxOptions:function(){ return {dataType:"text",contentType:"application/json",cache:false}; }}},
"TodoList":{"GetTodoLists": {Url:null,Params:function(){ return null; },Return:function(){ return $dp.shared.arrayFactory({"TodoListId":0,"UserId":"","Title":"","Todos":$dp.shared.arrayFactory({"TodoItemId":0,"Title":"","IsDone":false,"TodoListId":0})}); },IsApiController:{ methods:{get:"get",items:["get"],single:"get"} },AjaxOptions:function(){ return {dataType:"json",contentType:"application/json",cache:false}; }},"GetTodoList": {Url:null,Params:function(){ return {"id":0}; },Return:function(){ return {"TodoListId":0,"UserId":"","Title":"","Todos":$dp.shared.arrayFactory({"TodoItemId":0,"Title":"","IsDone":false,"TodoListId":0})}; },IsApiController:{ methods:{get:"get",items:["get"],single:"get"} },AjaxOptions:function(){ return {dataType:"json",contentType:"application/json",cache:false}; }},"PutTodoList": {Url:null,Params:function(){ return {"id":0,"todoListDto":$dp.$JsNet.MvcAppExample.Models.TodoListDto()}; },Return:function(){ return {}; },IsApiController:{ methods:{put:"put",items:["put"],single:"put"} },AjaxOptions:function(){ return {dataType:"text",contentType:"application/json",cache:false}; }},"PostTodoList": {Url:null,Params:function(){ return {"todoListDto":$dp.$JsNet.MvcAppExample.Models.TodoListDto()}; },Return:function(){ return {}; },IsApiController:{ methods:{post:"post",items:["post"],single:"post"} },AjaxOptions:function(){ return {dataType:"text",contentType:"application/json",cache:false}; }},"DeleteTodoList": {Url:null,Params:function(){ return {"id":0}; },Return:function(){ return {}; },IsApiController:{ methods:{delete:"delete",items:["delete"],single:"delete"} },AjaxOptions:function(){ return {dataType:"text",contentType:"application/json",cache:false}; }}}};
