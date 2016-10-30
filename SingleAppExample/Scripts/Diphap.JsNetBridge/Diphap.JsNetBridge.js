﻿(function () {
(function () {
(function () {
    var message = '[circularReferenceManagerFactory.js] or [arrayFactory.js] or [actionHelper.js] is missing';
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
(function () {
//#region 'Model'
window.$dp = window.$dp || {};
$dp.$JsNet = $dp.$JsNet || {};
$dp.$JsNet.SingleAppExample = $dp.$JsNet.SingleAppExample || {};
$dp.$JsNet.SingleAppExample.Models = $dp.$JsNet.SingleAppExample.Models || {};
$dp.$JsNet.SingleAppExample.Areas = $dp.$JsNet.SingleAppExample.Areas || {};
$dp.$JsNet.SingleAppExample.Areas.HelpPage = $dp.$JsNet.SingleAppExample.Areas.HelpPage || {};
$dp.$JsNet.SingleAppExample.Areas.HelpPage.Models = $dp.$JsNet.SingleAppExample.Areas.HelpPage.Models || {};
$dp.$JsNet.SingleAppExample.Controllers = $dp.$JsNet.SingleAppExample.Controllers || {};
$dp.$JsNet.SingleAppExample.Controllers.$JsNs$_HomeController = $dp.$JsNet.SingleAppExample.Controllers.$JsNs$_HomeController || {};
var _alias0 = $dp.$JsNet.SingleAppExample.Models;
var _alias1 = $dp.$JsNet.SingleAppExample.Areas.HelpPage.Models;
var _alias2 = $dp.$JsNet.SingleAppExample.Controllers.$JsNs$_HomeController;
_alias0.UserProfile = _alias0.UserProfile || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"UserId":0,"UserName":""};obj.constructor=_alias0.UserProfile; return obj; };
_alias0.RegisterExternalLoginModel = _alias0.RegisterExternalLoginModel || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"UserName":"","ExternalLoginData":""};obj.constructor=_alias0.RegisterExternalLoginModel; return obj; };
_alias0.LocalPasswordModel = _alias0.LocalPasswordModel || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"OldPassword":"","NewPassword":"","ConfirmPassword":""};obj.constructor=_alias0.LocalPasswordModel; return obj; };
_alias0.LoginModel = _alias0.LoginModel || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"UserName":"","Password":"","RememberMe":false};obj.constructor=_alias0.LoginModel; return obj; };
_alias0.RegisterModel = _alias0.RegisterModel || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"UserName":"","Password":"","ConfirmPassword":""};obj.constructor=_alias0.RegisterModel; return obj; };
_alias0.ExternalLogin = _alias0.ExternalLogin || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"Provider":"","ProviderDisplayName":"","ProviderUserId":""};obj.constructor=_alias0.ExternalLogin; return obj; };
_alias0.TodoItemDto = _alias0.TodoItemDto || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"TodoItemId":0,"Title":"","IsDone":false,"TodoListId":0};obj.constructor=_alias0.TodoItemDto; return obj; };
_alias0.TodoList = _alias0.TodoList || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"TodoListId":0,"UserId":"","Title":"","Todos":$dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)(_alias0.TodoItem))};obj.constructor=_alias0.TodoList; return obj; };
_alias0.TodoItem = _alias0.TodoItem || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"TodoItemId":0,"Title":"","IsDone":false,"TodoListId":0,"TodoList":$dp.$shared.$circularReferenceManagerFactory.apply(null, args)(_alias0.TodoList)};obj.constructor=_alias0.TodoItem; return obj; };
_alias1.HelpPageApiModel = _alias1.HelpPageApiModel || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"ErrorMessages":$dp.$shared.$arrayFactory(""),"ApiDescription":{},"SampleRequests":$dp.$shared.$arrayFactory({}),"SampleResponses":$dp.$shared.$arrayFactory({})};obj.constructor=_alias1.HelpPageApiModel; return obj; };
_alias2.dpPerson = _alias2.dpPerson || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"name":"","age":0,"description":""};obj.constructor=_alias2.dpPerson; return obj; };
_alias0.TodoListDto = _alias0.TodoListDto || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"TodoListId":0,"UserId":"","Title":"","Todos":$dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)(_alias0.TodoItemDto))};obj.constructor=_alias0.TodoListDto; return obj; };
//#endregion
//#region 'Enum'
window.$dp = window.$dp || {};
$dp.$JsNet = $dp.$JsNet || {};
$dp.$JsNet.SingleAppExample = $dp.$JsNet.SingleAppExample || {};
$dp.$JsNet.SingleAppExample.Areas = $dp.$JsNet.SingleAppExample.Areas || {};
$dp.$JsNet.SingleAppExample.Areas.HelpPage = $dp.$JsNet.SingleAppExample.Areas.HelpPage || {};
$dp.$JsNet.SingleAppExample.Controllers = $dp.$JsNet.SingleAppExample.Controllers || {};
$dp.$JsNet.SingleAppExample.Controllers.$JsNs$_AccountController = $dp.$JsNet.SingleAppExample.Controllers.$JsNs$_AccountController || {};
var _alias3 = $dp.$JsNet.SingleAppExample.Areas.HelpPage;
var _alias4 = $dp.$JsNet.SingleAppExample.Controllers.$JsNs$_AccountController;
_alias3.SampleDirection = _alias3.SampleDirection || {"Request":{ "$Key":"Request","$Value":0 },"Response":{ "$Key":"Response","$Value":1 }};
_alias4.ManageMessageId = _alias4.ManageMessageId || {"ChangePasswordSuccess":{ "$Key":"ChangePasswordSuccess","$Value":0 },"SetPasswordSuccess":{ "$Key":"SetPasswordSuccess","$Value":1 },"RemoveLoginSuccess":{ "$Key":"RemoveLoginSuccess","$Value":2 }};
//#endregion
//#region 'UrlSet'
window.$dp = window.$dp || {};
$dp.$JsNet = $dp.$JsNet || {};
$dp.$JsNet.$UrlSet = {"HelpPage":{"Help":{"Index": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'Index'; action.$Names.controller = 'Help'; action.$Names.area  = 'HelpPage';action.$Params = function(){  var obj = null; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:'text',contentType:'application/json',cache:false,type:'post',method:'post',data:action.$Params()}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"Api": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'Api'; action.$Names.controller = 'Help'; action.$Names.area  = 'HelpPage';action.$Params = function(){  var obj = {"apiId":""}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:'text',contentType:'application/json',cache:false,type:'post',method:'post',data:action.$Params()}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }()}},
"Account":{"JsonLogin": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'JsonLogin'; action.$Names.controller = 'Account'; action.$Names.area  = '';action.$Params = function(){  var obj = {"model":_alias0.LoginModel(),"returnUrl":""}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:'json',contentType:'application/json',cache:false,type:'post',method:'post',data:action.$Params()}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"LogOff": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'LogOff'; action.$Names.controller = 'Account'; action.$Names.area  = '';action.$Params = function(){  var obj = null; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:'text',contentType:'application/json',cache:false,type:'post',method:'post',data:action.$Params()}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"JsonRegister": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'JsonRegister'; action.$Names.controller = 'Account'; action.$Names.area  = '';action.$Params = function(){  var obj = {"model":_alias0.RegisterModel(),"returnUrl":""}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:'text',contentType:'application/json',cache:false,type:'post',method:'post',data:action.$Params()}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"Disassociate": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'Disassociate'; action.$Names.controller = 'Account'; action.$Names.area  = '';action.$Params = function(){  var obj = {"provider":"","providerUserId":""}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:'text',contentType:'application/json',cache:false,type:'post',method:'post',data:action.$Params()}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"Manage": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'Manage'; action.$Names.controller = 'Account'; action.$Names.area  = '';action.$Params = function(){  var obj = {"message":0}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = {"message":_alias4.ManageMessageId}; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:'text',contentType:'application/json',cache:false,type:'post',method:'post',data:action.$Params()}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();obj.$action1 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'Manage'; action.$Names.controller = 'Account'; action.$Names.area  = '';action.$Params = function(){  var obj = {"model":_alias0.LocalPasswordModel()}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:'text',contentType:'application/json',cache:false,type:'post',method:'post',data:action.$Params()}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"ExternalLogin": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'ExternalLogin'; action.$Names.controller = 'Account'; action.$Names.area  = '';action.$Params = function(){  var obj = {"provider":"","returnUrl":""}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:'text',contentType:'application/json',cache:false,type:'post',method:'post',data:action.$Params()}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"ExternalLoginCallback": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'ExternalLoginCallback'; action.$Names.controller = 'Account'; action.$Names.area  = '';action.$Params = function(){  var obj = {"returnUrl":""}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:'text',contentType:'application/json',cache:false,type:'post',method:'post',data:action.$Params()}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"ExternalLoginConfirmation": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'ExternalLoginConfirmation'; action.$Names.controller = 'Account'; action.$Names.area  = '';action.$Params = function(){  var obj = {"model":_alias0.RegisterExternalLoginModel(),"returnUrl":""}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:'text',contentType:'application/json',cache:false,type:'post',method:'post',data:action.$Params()}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"ExternalLoginFailure": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'ExternalLoginFailure'; action.$Names.controller = 'Account'; action.$Names.area  = '';action.$Params = function(){  var obj = null; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:'text',contentType:'application/json',cache:false,type:'post',method:'post',data:action.$Params()}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"ExternalLoginsList": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'ExternalLoginsList'; action.$Names.controller = 'Account'; action.$Names.area  = '';action.$Params = function(){  var obj = {"returnUrl":""}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:'text',contentType:'application/json',cache:false,type:'post',method:'post',data:action.$Params()}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"RemoveExternalLogins": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'RemoveExternalLogins'; action.$Names.controller = 'Account'; action.$Names.area  = '';action.$Params = function(){  var obj = null; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:'text',contentType:'application/json',cache:false,type:'post',method:'post',data:action.$Params()}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }()},
"Home":{"Index": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'Index'; action.$Names.controller = 'Home'; action.$Names.area  = '';action.$Params = function(){  var obj = {"returnUrl":""}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:'text',contentType:'application/json',cache:false,type:'post',method:'post',data:action.$Params()}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"ShowMe": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'ShowMe'; action.$Names.controller = 'Home'; action.$Names.area  = '';action.$Params = function(){  var obj = {"name":"","age":0}; return obj; };action.$Return = function(){  var obj = _alias2.dpPerson(); return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:'json',contentType:'application/json',cache:false,type:'post',method:'post',data:action.$Params()}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }()},
"$apiTodo":{"PutTodoItem": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'PutTodoItem'; action.$Names.controller = 'Todo'; action.$Names.area  = '';action.$Params = function(){  var obj = {"id":0,"todoItemDto":_alias0.TodoItemDto()}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$httpMethodArray = {$put:"put",$items:["put"],$single:"put",$first:"put"};action.$IsApi = true;action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:'json',contentType:'application/json',cache:false,type:action.$httpMethodArray.$first,method:action.$httpMethodArray.$first,data:action.$Params()}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"PostTodoItem": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'PostTodoItem'; action.$Names.controller = 'Todo'; action.$Names.area  = '';action.$Params = function(){  var obj = {"todoItemDto":_alias0.TodoItemDto()}; return obj; };action.$Return = function(){  var obj = _alias0.TodoItemDto(); return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$httpMethodArray = {$post:"post",$items:["post"],$single:"post",$first:"post"};action.$IsApi = true;action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:'json',contentType:'application/json',cache:false,type:action.$httpMethodArray.$first,method:action.$httpMethodArray.$first,data:action.$Params()}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"DeleteTodoItem": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'DeleteTodoItem'; action.$Names.controller = 'Todo'; action.$Names.area  = '';action.$Params = function(){  var obj = {"id":0}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$httpMethodArray = {$delete:"delete",$items:["delete"],$single:"delete",$first:"delete"};action.$IsApi = true;action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:'json',contentType:'application/json',cache:false,type:action.$httpMethodArray.$first,method:action.$httpMethodArray.$first,data:action.$Params()}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }()},
"$apiTodoList":{"GetTodoLists": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'GetTodoLists'; action.$Names.controller = 'TodoList'; action.$Names.area  = '';action.$Params = function(){  var obj = null; return obj; };action.$Return = function(){  var obj = $dp.$shared.$arrayFactory(_alias0.TodoListDto()); return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$httpMethodArray = {$get:"get",$items:["get"],$single:"get",$first:"get"};action.$IsApi = true;action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:'json',contentType:'application/json',cache:false,type:action.$httpMethodArray.$first,method:action.$httpMethodArray.$first,data:action.$Params()}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"GetTodoList": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'GetTodoList'; action.$Names.controller = 'TodoList'; action.$Names.area  = '';action.$Params = function(){  var obj = {"id":0}; return obj; };action.$Return = function(){  var obj = _alias0.TodoListDto(); return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$httpMethodArray = {$get:"get",$items:["get"],$single:"get",$first:"get"};action.$IsApi = true;action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:'json',contentType:'application/json',cache:false,type:action.$httpMethodArray.$first,method:action.$httpMethodArray.$first,data:action.$Params()}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"PutTodoList": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'PutTodoList'; action.$Names.controller = 'TodoList'; action.$Names.area  = '';action.$Params = function(){  var obj = {"id":0,"todoListDto":_alias0.TodoListDto()}; return obj; };action.$Return = function(){  var obj = _alias0.TodoListDto(); return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$httpMethodArray = {$put:"put",$items:["put"],$single:"put",$first:"put"};action.$IsApi = true;action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:'json',contentType:'application/json',cache:false,type:action.$httpMethodArray.$first,method:action.$httpMethodArray.$first,data:action.$Params()}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"PostTodoList": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'PostTodoList'; action.$Names.controller = 'TodoList'; action.$Names.area  = '';action.$Params = function(){  var obj = {"todoListDto":_alias0.TodoListDto()}; return obj; };action.$Return = function(){  var obj = _alias0.TodoList(); return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$httpMethodArray = {$post:"post",$items:["post"],$single:"post",$first:"post"};action.$IsApi = true;action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:'json',contentType:'application/json',cache:false,type:action.$httpMethodArray.$first,method:action.$httpMethodArray.$first,data:action.$Params()}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"DeleteTodoList": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'DeleteTodoList'; action.$Names.controller = 'TodoList'; action.$Names.area  = '';action.$Params = function(){  var obj = {"id":0}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$httpMethodArray = {$delete:"delete",$items:["delete"],$single:"delete",$first:"delete"};action.$IsApi = true;action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:'json',contentType:'application/json',cache:false,type:action.$httpMethodArray.$first,method:action.$httpMethodArray.$first,data:action.$Params()}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }()}};
//-- alias
window.$dpUrlSet = $dp.$JsNet.$UrlSet;
window.$dpLib = $dp.$JsNet;
//#endregion
})();
})();
})();
