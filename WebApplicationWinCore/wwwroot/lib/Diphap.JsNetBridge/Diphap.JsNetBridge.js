(function () {
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
$dp.$JsNet.WebApplicationWinCore = $dp.$JsNet.WebApplicationWinCore || {};
$dp.$JsNet.WebApplicationWinCore.Models = $dp.$JsNet.WebApplicationWinCore.Models || {};
$dp.$JsNet.Microsoft = $dp.$JsNet.Microsoft || {};
$dp.$JsNet.Microsoft.AspNetCore = $dp.$JsNet.Microsoft.AspNetCore || {};
$dp.$JsNet.Microsoft.AspNetCore.Mvc = $dp.$JsNet.Microsoft.AspNetCore.Mvc || {};
var _alias0 = $dp.$JsNet.WebApplicationWinCore.Models;
var _alias1 = $dp.$JsNet.Microsoft.AspNetCore.Mvc;
_alias0.LayoutModel = _alias0.LayoutModel || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"PackageNugetName":"","PackageNugetVersion":{}};obj.constructor=_alias0.LayoutModel; return obj; };
_alias0.ReturnData = _alias0.ReturnData || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"Url":"","Success":false,"Method":"","InputStream":{},"BusinessData":{}};obj.constructor=_alias0.ReturnData; return obj; };
_alias0.ReturnData_$gen$_T = _alias0.ReturnData_$gen$_T || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"Url":"","Success":false,"Method":"","TypedBusinessData":{},"InputStream":{},"BusinessData":{}};obj.constructor=_alias0.ReturnData_$gen$_T; return obj; };
_alias1.ActionResult = _alias1.ActionResult || function(){ var args = Array.prototype.slice.call(arguments); var obj = {};obj.constructor=_alias1.ActionResult; return obj; };
//#endregion
//#region 'Enum'
//#endregion
//#region 'UrlSet'
window.$dp = window.$dp || {};
$dp.$JsNet = $dp.$JsNet || {};
$dp.$JsNet.$UrlSet = {"Home":{"Index": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'Index'; action.$Names.controller = 'Home'; action.$Names.area  = '';action.$Params = function(){  var obj = null; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:undefined,contentType:'application/json',cache:false,type:'post',method:'post',data:undefined}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"Action_NoParams": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'Action_NoParams'; action.$Names.controller = 'Home'; action.$Names.area  = '';action.$Params = function(){  var obj = null; return obj; };action.$Return = function(){  var obj = _alias0.ReturnData(); return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:undefined,contentType:'application/json',cache:false,type:'post',method:'post',data:undefined}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"Action_WithParamterIdInUrl": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'Action_WithParamterIdInUrl'; action.$Names.controller = 'Home'; action.$Names.area  = '';action.$Params = function(){  var obj = {"id":""}; return obj; };action.$Return = function(){  var obj = _alias0.ReturnData(); return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:undefined,contentType:'application/json',cache:false,type:'post',method:'post',data:undefined}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"Action_FakeName": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'Action_RealName'; action.$Names.controller = 'Home'; action.$Names.area  = '';action.$Params = function(){  var obj = null; return obj; };action.$Return = function(){  var obj = _alias0.ReturnData(); return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:undefined,contentType:'application/json',cache:false,type:'post',method:'post',data:undefined}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }()}};
//-- alias
window.$dpUrlSet = $dp.$JsNet.$UrlSet;
window.$dpLib = $dp.$JsNet;
//#endregion
})();
})();
})();
