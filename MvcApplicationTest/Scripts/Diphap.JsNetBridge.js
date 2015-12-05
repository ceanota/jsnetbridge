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
window.$dp.$JsNet.MvcApplicationTest = window.$dp.$JsNet.MvcApplicationTest || {};
window.$dp.$JsNet.MvcApplicationTest.Areas = window.$dp.$JsNet.MvcApplicationTest.Areas || {};
window.$dp.$JsNet.MvcApplicationTest.Areas.HelpPage = window.$dp.$JsNet.MvcApplicationTest.Areas.HelpPage || {};
window.$dp.$JsNet.MvcApplicationTest.Areas.HelpPage.Models = window.$dp.$JsNet.MvcApplicationTest.Areas.HelpPage.Models || {};
window.$dp.$JsNet.MvcApplicationTest.Models = window.$dp.$JsNet.MvcApplicationTest.Models || {};
window.$dp.$JsNet.MvcApplicationTest.Controllers = window.$dp.$JsNet.MvcApplicationTest.Controllers || {};
window.$dp.$JsNet.MvcApplicationTest.Controllers.AccountController = window.$dp.$JsNet.MvcApplicationTest.Controllers.AccountController || {};
$dp.$JsNet.MvcApplicationTest.Areas.HelpPage.Models.HelpPageApiModel = $dp.$JsNet.MvcApplicationTest.Areas.HelpPage.Models.HelpPageApiModel || function(){ return {"ErrorMessages":$dp.shared.arrayFactory(""),"ApiDescription":{},"SampleRequests":{},"SampleResponses":{}}; };
$dp.$JsNet.MvcApplicationTest.Models.UserProfile = $dp.$JsNet.MvcApplicationTest.Models.UserProfile || function(){ return {"UserId":0,"UserName":""}; };
$dp.$JsNet.MvcApplicationTest.Models.RegisterExternalLoginModel = $dp.$JsNet.MvcApplicationTest.Models.RegisterExternalLoginModel || function(){ return {"UserName":"","ExternalLoginData":""}; };
$dp.$JsNet.MvcApplicationTest.Models.LocalPasswordModel = $dp.$JsNet.MvcApplicationTest.Models.LocalPasswordModel || function(){ return {"OldPassword":"","NewPassword":"","ConfirmPassword":""}; };
$dp.$JsNet.MvcApplicationTest.Models.LoginModel = $dp.$JsNet.MvcApplicationTest.Models.LoginModel || function(){ return {"UserName":"","Password":"","RememberMe":false}; };
$dp.$JsNet.MvcApplicationTest.Models.RegisterModel = $dp.$JsNet.MvcApplicationTest.Models.RegisterModel || function(){ return {"UserName":"","Password":"","ConfirmPassword":""}; };
$dp.$JsNet.MvcApplicationTest.Models.ExternalLogin = $dp.$JsNet.MvcApplicationTest.Models.ExternalLogin || function(){ return {"Provider":"","ProviderDisplayName":"","ProviderUserId":""}; };
$dp.$JsNet.MvcApplicationTest.Models.TodoItemDto = $dp.$JsNet.MvcApplicationTest.Models.TodoItemDto || function(){ return {"TodoItemId":0,"Title":"","IsDone":false,"TodoListId":0}; };
$dp.$JsNet.MvcApplicationTest.Models.TodoItem = $dp.$JsNet.MvcApplicationTest.Models.TodoItem || function(){ return {"TodoItemId":0,"Title":"","IsDone":false,"TodoListId":0,"TodoList_":{"TodoListId":0,"UserId":"","Title":"","Todos":{}}}; };
$dp.$JsNet.MvcApplicationTest.Models.TodoList = $dp.$JsNet.MvcApplicationTest.Models.TodoList || function(){ return {"TodoListId":0,"UserId":"","Title":"","Todos":{"TodoItemId":0,"Title":"","IsDone":false,"TodoListId":0,"TodoList_":{}},"ItemTest":{"TodoItemId":0,"Title":"","IsDone":false,"TodoListId":0,"TodoList_":{}}}; };
$dp.$JsNet.MvcApplicationTest.Controllers.AccountController.test = $dp.$JsNet.MvcApplicationTest.Controllers.AccountController.test || function(){ return {"name":""}; };
$dp.$JsNet.MvcApplicationTest.Models.LocalPasswordModel_ = $dp.$JsNet.MvcApplicationTest.Models.LocalPasswordModel_ || function(){ return {"OldPassword":"","NewPassword":"","ConfirmPassword":"","RegisterExternalLoginModel_":$dp.$JsNet.MvcApplicationTest.Models.RegisterExternalLoginModel()}; };
$dp.$JsNet.MvcApplicationTest.Models.TodoListDto = $dp.$JsNet.MvcApplicationTest.Models.TodoListDto || function(){ return {"TodoListId":0,"UserId":"","Title":"","Todos":$dp.shared.arrayFactory($dp.$JsNet.MvcApplicationTest.Models.TodoItemDto())}; };
$dp.$JsNet.MvcApplicationTest.Models.LoginModel_ = $dp.$JsNet.MvcApplicationTest.Models.LoginModel_ || function(){ return {"UserName":"","Password":"","RememberMe":false,"LocalPasswordModel_":$dp.$JsNet.MvcApplicationTest.Models.LocalPasswordModel_()}; };
$dp.$JsNet.MvcApplicationTest.Models.RegisterModel_ = $dp.$JsNet.MvcApplicationTest.Models.RegisterModel_ || function(){ return {"UserName":"","Password":"","ConfirmPassword":"","LoginModel_":$dp.$JsNet.MvcApplicationTest.Models.LoginModel_()}; };
$dp.$JsNet.MvcApplicationTest.Models.ExternalLogin_ = $dp.$JsNet.MvcApplicationTest.Models.ExternalLogin_ || function(){ return {"Provider":"","ProviderDisplayName":"","ProviderUserId":"","RegisterModel_":$dp.$JsNet.MvcApplicationTest.Models.RegisterModel_()}; };
window.$dp = window.$dp || {};
window.$dp.$JsNet = window.$dp.$JsNet || {};
window.$dp.$JsNet.MvcApplicationTest = window.$dp.$JsNet.MvcApplicationTest || {};
window.$dp.$JsNet.MvcApplicationTest.Areas = window.$dp.$JsNet.MvcApplicationTest.Areas || {};
window.$dp.$JsNet.MvcApplicationTest.Areas.HelpPage = window.$dp.$JsNet.MvcApplicationTest.Areas.HelpPage || {};
$dp.$JsNet.MvcApplicationTest.Areas.HelpPage.SampleDirection = $dp.$JsNet.MvcApplicationTest.Areas.HelpPage.SampleDirection || {"Request":{ "Key":"Request","Value":0 },"Response":{ "Key":"Response","Value":1 }};
window.$dp = window.$dp || {};window.$dp.$JsNet = window.$dp.$JsNet || {};
$dp.$JsNet.$UrlSet = {"HelpPage":{"Help":{"Index": {Url:null, Params:function(){ return null; }, Return:function(){ return {}; }, Info:{} },"Api": {Url:null, Params:function(){ return {"apiId":""}; }, Return:function(){ return {}; }, Info:{} }}},
"Account":{"JsonLogin": {Url:null, Params:function(){ return {"model":$dp.$JsNet.MvcApplicationTest.Models.LoginModel(),"returnUrl":""}; }, Return:function(){ return {}; }, Info:{} },"LogOff": {Url:null, Params:function(){ return null; }, Return:function(){ return {}; }, Info:{} },"JsonRegister": {Url:null, Params:function(){ return {"model":$dp.$JsNet.MvcApplicationTest.Models.RegisterModel(),"returnUrl":""}; }, Return:function(){ return {}; }, Info:{} },"Disassociate": {Url:null, Params:function(){ return {"provider":"","providerUserId":""}; }, Return:function(){ return {}; }, Info:{} },"Manage": {Url:null, Params:function(){ return {"message":0}; }, Return:function(){ return {}; }, Info:{} },"Manage": {Url:null, Params:function(){ return {"model":$dp.$JsNet.MvcApplicationTest.Models.LocalPasswordModel()}; }, Return:function(){ return {}; }, Info:{} },"Manage": {Url:null, Params:function(){ return {"instance":$dp.$JsNet.MvcApplicationTest.Controllers.AccountController.test()}; }, Return:function(){ return {}; }, Info:{} },"ExternalLogin": {Url:null, Params:function(){ return {"provider":"","returnUrl":""}; }, Return:function(){ return {}; }, Info:{} },"ExternalLoginCallback": {Url:null, Params:function(){ return {"returnUrl":""}; }, Return:function(){ return {}; }, Info:{} },"ExternalLoginConfirmation": {Url:null, Params:function(){ return {"model":$dp.$JsNet.MvcApplicationTest.Models.RegisterExternalLoginModel(),"returnUrl":""}; }, Return:function(){ return {}; }, Info:{} },"ExternalLoginFailure": {Url:null, Params:function(){ return null; }, Return:function(){ return {}; }, Info:{} },"ExternalLoginsList": {Url:null, Params:function(){ return {"returnUrl":""}; }, Return:function(){ return {}; }, Info:{} },"RemoveExternalLogins": {Url:null, Params:function(){ return null; }, Return:function(){ return {}; }, Info:{} }},
"Home":{"Index": {Url:null, Params:function(){ return {"returnUrl":""}; }, Return:function(){ return {}; }, Info:{} }},
"Todo":{"PutTodoItem": {Url:null, Params:function(){ return {"id":0,"todoItemDto":$dp.$JsNet.MvcApplicationTest.Models.TodoItemDto()}; }, Return:function(){ return {}; }, Info:{} },"PostTodoItem": {Url:null, Params:function(){ return {"todoItemDto":$dp.$JsNet.MvcApplicationTest.Models.TodoItemDto()}; }, Return:function(){ return {}; }, Info:{} },"DeleteTodoItem": {Url:null, Params:function(){ return {"id":0}; }, Return:function(){ return {}; }, Info:{} }},
"TodoList":{"GetTodoLists": {Url:null, Params:function(){ return null; }, Return:function(){ return $dp.shared.arrayFactory({"TodoListId":0,"UserId":"","Title":"","Todos":$dp.shared.arrayFactory({"TodoItemId":0,"Title":"","IsDone":false,"TodoListId":0})}); }, Info:{} },"GetTodoList": {Url:null, Params:function(){ return {"id":0}; }, Return:function(){ return {"TodoListId":0,"UserId":"","Title":"","Todos":$dp.shared.arrayFactory({"TodoItemId":0,"Title":"","IsDone":false,"TodoListId":0})}; }, Info:{} },"PutTodoList": {Url:null, Params:function(){ return {"id":0,"todoListDto":$dp.$JsNet.MvcApplicationTest.Models.TodoListDto()}; }, Return:function(){ return {}; }, Info:{} },"PostTodoList": {Url:null, Params:function(){ return {"todoListDto":$dp.$JsNet.MvcApplicationTest.Models.TodoListDto()}; }, Return:function(){ return {}; }, Info:{} },"DeleteTodoList": {Url:null, Params:function(){ return {"id":0}; }, Return:function(){ return {}; }, Info:{} }}};
