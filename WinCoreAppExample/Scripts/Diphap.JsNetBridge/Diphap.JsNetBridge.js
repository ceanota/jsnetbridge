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
$dp.$JsNet.Microsoft = $dp.$JsNet.Microsoft || {};
$dp.$JsNet.Microsoft.AspNetCore = $dp.$JsNet.Microsoft.AspNetCore || {};
$dp.$JsNet.Microsoft.AspNetCore.Mvc = $dp.$JsNet.Microsoft.AspNetCore.Mvc || {};
$dp.$JsNet.Microsoft.AspNetCore.Mvc.ViewEngines = $dp.$JsNet.Microsoft.AspNetCore.Mvc.ViewEngines || {};
$dp.$JsNet.Newtonsoft = $dp.$JsNet.Newtonsoft || {};
$dp.$JsNet.Newtonsoft.Json = $dp.$JsNet.Newtonsoft.Json || {};
$dp.$JsNet.Newtonsoft.Json.Serialization = $dp.$JsNet.Newtonsoft.Json.Serialization || {};
var _alias0 = $dp.$JsNet.Microsoft.AspNetCore.Mvc;
var _alias2 = $dp.$JsNet.Microsoft.AspNetCore.Mvc.ViewEngines;
var _alias3 = $dp.$JsNet.Newtonsoft.Json;
var _alias4 = $dp.$JsNet.Newtonsoft.Json.Serialization;
_alias0.IActionResult = _alias0.IActionResult || function(){ var args = Array.prototype.slice.call(arguments); var obj = {};obj.constructor=_alias0.IActionResult; return obj; };
_alias2.IViewEngine = _alias2.IViewEngine || function(){ var args = Array.prototype.slice.call(arguments); var obj = {};obj.constructor=_alias2.IViewEngine; return obj; };
_alias3.JsonConverter = _alias3.JsonConverter || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"CanRead":false,"CanWrite":false};obj.constructor=_alias3.JsonConverter; return obj; };
_alias4.IContractResolver = _alias4.IContractResolver || function(){ var args = Array.prototype.slice.call(arguments); var obj = {};obj.constructor=_alias4.IContractResolver; return obj; };
_alias4.IReferenceResolver = _alias4.IReferenceResolver || function(){ var args = Array.prototype.slice.call(arguments); var obj = {};obj.constructor=_alias4.IReferenceResolver; return obj; };
_alias4.ITraceWriter = _alias4.ITraceWriter || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"LevelFilter":0};obj.constructor=_alias4.ITraceWriter; return obj; };
_alias0.ActionResult = _alias0.ActionResult || function(){ var args = Array.prototype.slice.call(arguments); var obj = {};obj.constructor=_alias0.ActionResult; return obj; };
_alias0.ViewResult = _alias0.ViewResult || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"StatusCode":0,"ViewName":"","ViewData":[],"TempData":[],"ViewEngine":$dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.Microsoft.AspNetCore.Mvc.ViewEngines.IViewEngine),"ContentType":"","Model":{}};obj.constructor=_alias0.ViewResult; return obj; };
_alias3.JsonSerializerSettings = _alias3.JsonSerializerSettings || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"ReferenceLoopHandling":0,"MissingMemberHandling":0,"ObjectCreationHandling":0,"NullValueHandling":0,"DefaultValueHandling":0,"Converters":$dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.Newtonsoft.Json.JsonConverter)),"PreserveReferencesHandling":0,"TypeNameHandling":0,"MetadataPropertyHandling":0,"TypeNameAssemblyFormat":0,"ConstructorHandling":0,"ContractResolver":$dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.Newtonsoft.Json.Serialization.IContractResolver),"ReferenceResolver":$dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.Newtonsoft.Json.Serialization.IReferenceResolver),"TraceWriter":$dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.Newtonsoft.Json.Serialization.ITraceWriter),"DateFormatString":"","MaxDepth":0,"Formatting":0,"DateFormatHandling":0,"DateTimeZoneHandling":0,"DateParseHandling":0,"FloatFormatHandling":0,"FloatParseHandling":0,"StringEscapeHandling":0,"CheckAdditionalContent":false,"EqualityComparer":{},"ReferenceResolverProvider":{},"Binder":{},"Error":{},"Context":{},"Culture":{}};obj.constructor=_alias3.JsonSerializerSettings; return obj; };
_alias0.JsonResult = _alias0.JsonResult || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"ContentType":"","SerializerSettings":$dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.Newtonsoft.Json.JsonSerializerSettings),"StatusCode":0,"Value":{}};obj.constructor=_alias0.JsonResult; return obj; };
//#endregion
//#region 'Enum'
//#endregion
//#region 'UrlSet'
window.$dp = window.$dp || {};
$dp.$JsNet = $dp.$JsNet || {};
$dp.$JsNet.$UrlSet = {
    "Home": {
        "Index": function actionFactory() {
            try
            {
                var obj = {}; obj.$action0 = function actionFactory() {
                    try
                    {
                        var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory(); action.$Names.action = 'Index';
                        action.$Names.controller = 'Home'; action.$Names.area = ''; action.$Params = function () { var obj = null; return obj; }; action.$Return = function () { var obj = {}; return obj; }; action.$Enums = function () { var obj = null; return obj; }; action.$AjaxSettings = function () { var obj = { url: action.$GetUrl(), dataType: 'json', contentType: 'application/json', cache: false, type: 'post', method: 'post', data: action.$Params() }; return obj; }; action.$RouteTemplate = ''; return action;
                    } catch (ex) { throw ex; }
                }(); return obj;
            } catch (ex) { throw ex; }
        }(), "About": function actionFactory() {
            try {
                var obj = {}; obj.$action0 = function actionFactory() {
                    try {
                        var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory(); action.$Names.action = 'About'; action.$Names.controller = 'Home'; action.$Names.area = ''; action.$Params = function () { var obj = null; return obj; }; action.$Return = function () { var obj = {}; return obj; }; action.$Enums = function () { var obj = null; return obj; };
                        action.$AjaxSettings = function () { var obj = { url: action.$GetUrl(), dataType: 'json', contentType: 'application/json', cache: false, type: 'post', method: 'post', data: action.$Params() }; return obj; }; action.$RouteTemplate = ''; return action;
                    } catch (ex) { throw ex; }
                }(); return obj;
            } catch (ex) { throw ex; }
        }(), "Contact": function actionFactory() {
            try
            { var obj = {}; obj.$action0 = function actionFactory() { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory(); action.$Names.action = 'Contact'; action.$Names.controller = 'Home'; action.$Names.area = ''; action.$Params = function () { var obj = null; return obj; }; action.$Return = function () { var obj = {}; return obj; }; action.$Enums = function () { var obj = null; return obj; }; action.$AjaxSettings = function () { var obj = { url: action.$GetUrl(), dataType: 'json', contentType: 'application/json', cache: false, type: 'post', method: 'post', data: action.$Params() }; return obj; }; action.$RouteTemplate = ''; return action; } catch (ex) { throw ex; } }(); return obj; } catch (ex) { throw ex; }
        }(), "Error": function actionFactory() {
            try {
                var obj = {}; obj.$action0 = function actionFactory() { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory(); action.$Names.action = 'Error'; action.$Names.controller = 'Home'; action.$Names.area = ''; action.$Params = function () { var obj = null; return obj; }; action.$Return = function () { var obj = {}; return obj; }; action.$Enums = function () { var obj = null; return obj; }; action.$AjaxSettings = function () { var obj = { url: action.$GetUrl(), dataType: 'json', contentType: 'application/json', cache: false, type: 'post', method: 'post', data: action.$Params() }; return obj; }; action.$RouteTemplate = ''; return action; } catch (ex) { throw ex; } }(); return obj;
            } catch (ex) { throw ex; }
        }(), "Vue": function actionFactory() {
            try {
                var obj = {};
                obj.$action0 = function actionFactory() { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory(); action.$Names.action = 'vue'; action.$Names.controller = 'Home'; action.$Names.area = ''; action.$Params = function () { var obj = null; return obj; }; action.$Return = function () { var obj = {}; return obj; }; action.$Enums = function () { var obj = null; return obj; }; action.$AjaxSettings = function () { var obj = { url: action.$GetUrl(), dataType: 'text', contentType: 'application/json', cache: false, type: 'post', method: 'post', data: action.$Params() }; return obj; }; action.$RouteTemplate = ''; return action; } catch (ex) { throw ex; } }(); return obj;
            } catch (ex) { throw ex; }
        }(), "Data": function actionFactory() {
            try {
                var obj = {}; obj.$action0 = function actionFactory()
                {
                    try {
                        var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();
                        action.$Names.action = 'Data'; action.$Names.controller = 'Home';
                        action.$Names.area = ''; action.$Params = function () { var obj = null; return obj; };
                        action.$Return = function () { var obj = {}; return obj; }; action.$Enums = function () { var obj = null; return obj; }; action.$AjaxSettings = function () { var obj = { url: action.$GetUrl(), dataType: 'json', contentType: 'application/json', cache: false, type: 'post', method: 'post', data: action.$Params() }; return obj; }; action.$RouteTemplate = ''; return action;
                    } catch (ex) { throw ex; }
                }(); return obj;
            } catch (ex) { throw ex; }
        }(), "Vue88": function actionFactory() { try { var obj = {}; obj.$action0 = function actionFactory() { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory(); action.$Names.action = 'vue'; action.$Names.controller = 'Home'; action.$Names.area = ''; action.$Params = function () { var obj = null; return obj; }; action.$Return = function () { var obj = {}; return obj; }; action.$Enums = function () { var obj = null; return obj; }; action.$AjaxSettings = function () { var obj = { url: action.$GetUrl(), dataType: 'text', contentType: 'application/json', cache: false, type: 'post', method: 'post', data: action.$Params() }; return obj; }; action.$RouteTemplate = ''; return action; } catch (ex) { throw ex; } }(); return obj; } catch (ex) { throw ex; } }()
    }
};
//-- alias
window.$dpUrlSet = $dp.$JsNet.$UrlSet;
window.$dpLib = $dp.$JsNet;
//#endregion
})();
})();
})();
