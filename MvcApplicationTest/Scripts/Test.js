window.$dp = window.$dp || {};window.$dp.shared = window.$dp.shared || {};
$dp.shared.arrayFactory=$dp.shared.arrayFactory||function (ref) {
    var aa = [];
    aa.$dpItemFactory = function () {
        return ref;
    };
    return aa;
};

window.$dp = window.$dp || {};
window.$dp.MvcApplication5 = window.$dp.MvcApplication5 || {};
window.$dp.MvcApplication5.Areas = window.$dp.MvcApplication5.Areas || {};
window.$dp.MvcApplication5.Areas.HelpPage = window.$dp.MvcApplication5.Areas.HelpPage || {};
window.$dp.MvcApplication5.Areas.HelpPage.Models = window.$dp.MvcApplication5.Areas.HelpPage.Models || {};
window.$dp.MvcApplication5.Models = window.$dp.MvcApplication5.Models || {};
window.$dp.MvcApplication5.Controllers = window.$dp.MvcApplication5.Controllers || {};
window.$dp.MvcApplication5.Controllers.AccountController = window.$dp.MvcApplication5.Controllers.AccountController || {};
$dp.MvcApplication5.Areas.HelpPage.Models.HelpPageApiModel = $dp.MvcApplication5.Areas.HelpPage.Models.HelpPageApiModel || function(){ return {"ErrorMessages":$dp.shared.arrayFactory(""),"ApiDescription":{},"SampleRequests":{},"SampleResponses":{}}; };
$dp.MvcApplication5.Models.UserProfile = $dp.MvcApplication5.Models.UserProfile || function(){ return {"UserId":0,"UserName":""}; };
$dp.MvcApplication5.Models.RegisterExternalLoginModel = $dp.MvcApplication5.Models.RegisterExternalLoginModel || function(){ return {"UserName":"","ExternalLoginData":""}; };
$dp.MvcApplication5.Models.LocalPasswordModel = $dp.MvcApplication5.Models.LocalPasswordModel || function(){ return {"OldPassword":"","NewPassword":"","ConfirmPassword":""}; };
$dp.MvcApplication5.Models.LoginModel = $dp.MvcApplication5.Models.LoginModel || function(){ return {"UserName":"","Password":"","RememberMe":false}; };
$dp.MvcApplication5.Models.RegisterModel = $dp.MvcApplication5.Models.RegisterModel || function(){ return {"UserName":"","Password":"","ConfirmPassword":""}; };
$dp.MvcApplication5.Models.ExternalLogin = $dp.MvcApplication5.Models.ExternalLogin || function(){ return {"Provider":"","ProviderDisplayName":"","ProviderUserId":""}; };
$dp.MvcApplication5.Models.TodoItemDto = $dp.MvcApplication5.Models.TodoItemDto || function(){ return {"TodoItemId":0,"Title":"","IsDone":false,"TodoListId":0}; };
$dp.MvcApplication5.Models.TodoItem = $dp.MvcApplication5.Models.TodoItem || function(){ return {"TodoItemId":0,"Title":"","IsDone":false,"TodoListId":0,"TodoList_":{"TodoListId":0,"UserId":"","Title":"","Todos":{}}}; };
$dp.MvcApplication5.Models.TodoList = $dp.MvcApplication5.Models.TodoList || function(){ return {"TodoListId":0,"UserId":"","Title":"","Todos":{"TodoItemId":0,"Title":"","IsDone":false,"TodoListId":0,"TodoList_":{}},"ItemTest":{"TodoItemId":0,"Title":"","IsDone":false,"TodoListId":0,"TodoList_":{}}}; };
$dp.MvcApplication5.Controllers.AccountController.test = $dp.MvcApplication5.Controllers.AccountController.test || function(){ return {"name":""}; };
$dp.MvcApplication5.Models.LocalPasswordModel_ = $dp.MvcApplication5.Models.LocalPasswordModel_ || function(){ return {"OldPassword":"","NewPassword":"","ConfirmPassword":"","RegisterExternalLoginModel_":$dp.MvcApplication5.Models.RegisterExternalLoginModel()}; };
$dp.MvcApplication5.Models.TodoListDto = $dp.MvcApplication5.Models.TodoListDto || function(){ return {"TodoListId":0,"UserId":"","Title":"","Todos":$dp.shared.arrayFactory($dp.MvcApplication5.Models.TodoItemDto())}; };
$dp.MvcApplication5.Models.LoginModel_ = $dp.MvcApplication5.Models.LoginModel_ || function(){ return {"UserName":"","Password":"","RememberMe":false,"LocalPasswordModel_":$dp.MvcApplication5.Models.LocalPasswordModel_()}; };
$dp.MvcApplication5.Models.RegisterModel_ = $dp.MvcApplication5.Models.RegisterModel_ || function(){ return {"UserName":"","Password":"","ConfirmPassword":"","LoginModel_":$dp.MvcApplication5.Models.LoginModel_()}; };
$dp.MvcApplication5.Models.ExternalLogin_ = $dp.MvcApplication5.Models.ExternalLogin_ || function(){ return {"Provider":"","ProviderDisplayName":"","ProviderUserId":"","RegisterModel_":$dp.MvcApplication5.Models.RegisterModel_()}; };
window.$dp = window.$dp || {};
window.$dp.MvcApplication5 = window.$dp.MvcApplication5 || {};
window.$dp.MvcApplication5.Areas = window.$dp.MvcApplication5.Areas || {};
window.$dp.MvcApplication5.Areas.HelpPage = window.$dp.MvcApplication5.Areas.HelpPage || {};
$dp.MvcApplication5.Areas.HelpPage.SampleDirection = $dp.MvcApplication5.Areas.HelpPage.SampleDirection || {"Request":{ "Key":"Request","Value":0 },"Response":{ "Key":"Response","Value":1 }};
window.$dp = window.$dp || {};
$dp.UrlSet = {"HelpPage":{"Help":{"Index": {Url:null, Params:function(){ return null; }, Return:function(){ return {}; }, Info:{} },"Api": {Url:null, Params:function(){ return {"apiId":""}; }, Return:function(){ return {}; }, Info:{} }}},
"Account":{"JsonLogin": {Url:null, Params:function(){ return {"model":$dp.MvcApplication5.Models.LoginModel(),"returnUrl":""}; }, Return:function(){ return {}; }, Info:{} },"LogOff": {Url:null, Params:function(){ return null; }, Return:function(){ return {}; }, Info:{} },"JsonRegister": {Url:null, Params:function(){ return {"model":$dp.MvcApplication5.Models.RegisterModel(),"returnUrl":""}; }, Return:function(){ return {}; }, Info:{} },"Disassociate": {Url:null, Params:function(){ return {"provider":"","providerUserId":""}; }, Return:function(){ return {}; }, Info:{} },"Manage": {Url:null, Params:function(){ return {"message":0}; }, Return:function(){ return {}; }, Info:{} },"Manage": {Url:null, Params:function(){ return {"model":$dp.MvcApplication5.Models.LocalPasswordModel()}; }, Return:function(){ return {}; }, Info:{} },"Manage": {Url:null, Params:function(){ return {"instance":$dp.MvcApplication5.Controllers.AccountController.test()}; }, Return:function(){ return {}; }, Info:{} },"ExternalLogin": {Url:null, Params:function(){ return {"provider":"","returnUrl":""}; }, Return:function(){ return {}; }, Info:{} },"ExternalLoginCallback": {Url:null, Params:function(){ return {"returnUrl":""}; }, Return:function(){ return {}; }, Info:{} },"ExternalLoginConfirmation": {Url:null, Params:function(){ return {"model":$dp.MvcApplication5.Models.RegisterExternalLoginModel(),"returnUrl":""}; }, Return:function(){ return {}; }, Info:{} },"ExternalLoginFailure": {Url:null, Params:function(){ return null; }, Return:function(){ return {}; }, Info:{} },"ExternalLoginsList": {Url:null, Params:function(){ return {"returnUrl":""}; }, Return:function(){ return {}; }, Info:{} },"RemoveExternalLogins": {Url:null, Params:function(){ return null; }, Return:function(){ return {}; }, Info:{} }},
"Home":{"Index": {Url:null, Params:function(){ return {"returnUrl":""}; }, Return:function(){ return {}; }, Info:{} }},
"Todo":{"PutTodoItem": {Url:null, Params:function(){ return {"id":0,"todoItemDto":$dp.MvcApplication5.Models.TodoItemDto()}; }, Return:function(){ return {}; }, Info:{} },"PostTodoItem": {Url:null, Params:function(){ return {"todoItemDto":$dp.MvcApplication5.Models.TodoItemDto()}; }, Return:function(){ return {}; }, Info:{} },"DeleteTodoItem": {Url:null, Params:function(){ return {"id":0}; }, Return:function(){ return {}; }, Info:{} }},
"TodoList":{"GetTodoLists": {Url:null, Params:function(){ return null; }, Return:function(){ return $dp.shared.arrayFactory({"TodoListId":0,"UserId":"","Title":"","Todos":$dp.shared.arrayFactory({"TodoItemId":0,"Title":"","IsDone":false,"TodoListId":0})}); }, Info:{} },"GetTodoList": {Url:null, Params:function(){ return {"id":0}; }, Return:function(){ return {"TodoListId":0,"UserId":"","Title":"","Todos":$dp.shared.arrayFactory({"TodoItemId":0,"Title":"","IsDone":false,"TodoListId":0})}; }, Info:{} },"PutTodoList": {Url:null, Params:function(){ return {"id":0,"todoListDto":$dp.MvcApplication5.Models.TodoListDto()}; }, Return:function(){ return {}; }, Info:{} },"PostTodoList": {Url:null, Params:function(){ return {"todoListDto":$dp.MvcApplication5.Models.TodoListDto()}; }, Return:function(){ return {}; }, Info:{} },"DeleteTodoList": {Url:null, Params:function(){ return {"id":0}; }, Return:function(){ return {}; }, Info:{} }}};
