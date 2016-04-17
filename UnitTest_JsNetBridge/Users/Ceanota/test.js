(function () {
(function () {

    window.$dp = window.$dp || {};
    window.$dp.$shared = window.$dp.$shared || {};

    if (window.$dp.$shared.$arrayFactory !== undefined) { return; }

    $dp.$shared.$arrayFactory = function arrayFactory(ref) {
        /// <signature>
        ///   <summary>this function returns a array with added function '$dpItemFactory' who creates instance of item of array.</summary>
        ///   <param name='ref' type='Function'>ref is factory who creates instance of item of array</param>
        ///   <returns type='Function' />
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
    window.$dp.$shared = window.$dp.$shared || {};

    if (window.$dp.$shared.$circularReferenceManagerFactory !== undefined) { return; }

    window.$dp.$shared.$circularReferenceManagerFactory = function circularReferenceManagerFactory(sameIntance) {
        /// <signature>
        ///   <summary>Factory gives un new instance of Function that handles the circular reference objects.</summary>
        ///   <param name='sameIntance' type='bool'>If sameInstance === undefined: new instance of function. Otherwise, we use the same instance.</param>
        ///   <returns type='Function' />
        /// </signature>
        if (sameIntance === undefined) {
            var newFunc = window.$dp.$shared.$circularReferenceManagerFactory._managerFunc.bind();
            newFunc.factories = [];
            window.$dp.$shared.$circularReferenceManagerFactory.instance = newFunc;
        }
        return window.$dp.$shared.$circularReferenceManagerFactory.instance;
    }

    window.$dp.$shared.$circularReferenceManagerFactory._managerFunc = function _managerFunc(func) {
        /// <signature>
        ///   <summary>it is the function that handles the circular reference objects</summary>
        ///   <param name='func' type='Function'>Factory of instances.</param>
        ///   <returns type='Object' />
        /// </signature>

        var internalFunc = window.$dp.$shared.$circularReferenceManagerFactory.instance;

        var foundedIdx = -1;
        for (var idx = 0; idx < internalFunc.factories.length; idx++) {
            if (internalFunc.factories[idx].item === func) {
                foundedIdx = idx;
            }
        }

        if (foundedIdx === -1) {
            internalFunc.factories.push({ 'item': func, 'number': 0 });
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
(function () {
(function () {
    var message = '[circularReferenceManagerFactory.js] or [arrayFactory.js] is missing';
    try {
        if (!window.$dp.$shared.$arrayFactory) { throw message; };
        if (!window.$dp.$shared.$circularReferenceManagerFactory) { throw message };
    } catch (e) {
        message = message + '\r\n' + e.toString();
        throw message;
    }
})();
var _stampFunc = function() { return $dp.$JsNet; };
window.$dp = window.$dp || {};
$dp.$JsNet = $dp.$JsNet || {};
$dp.$JsNet.BookService = $dp.$JsNet.BookService || {};
$dp.$JsNet.BookService.Areas = $dp.$JsNet.BookService.Areas || {};
$dp.$JsNet.BookService.Areas.HelpPage = $dp.$JsNet.BookService.Areas.HelpPage || {};
$dp.$JsNet.BookService.Areas.HelpPage.ModelDescriptions = $dp.$JsNet.BookService.Areas.HelpPage.ModelDescriptions || {};
$dp.$JsNet.BookService.Models = $dp.$JsNet.BookService.Models || {};
$dp.$JsNet.BookService.Controllers = $dp.$JsNet.BookService.Controllers || {};
$dp.$JsNet.BookService.Areas.HelpPage.Models = $dp.$JsNet.BookService.Areas.HelpPage.Models || {};
var _alias0 = $dp.$JsNet.BookService.Areas.HelpPage.Models;
var _alias1 = $dp.$JsNet.BookService.Models;
var _alias2 = $dp.$JsNet.BookService.Controllers;
var _alias3 = $dp.$JsNet.BookService.Areas.HelpPage;
var _alias4 = $dp.$JsNet.BookService.Areas.HelpPage.Controllers;
var _alias5 = $dp.$JsNet.BookService.Areas.HelpPage.ModelDescriptions;
_alias5.ParameterAnnotation = _alias5.ParameterAnnotation || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"Documentation":"","AnnotationAttribute":{}};obj.constructor=_alias5.ParameterAnnotation; return obj; };
_alias5.ModelDescription = _alias5.ModelDescription || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"Documentation":"","Name":"","ModelType":{}};obj.constructor=_alias5.ModelDescription; return obj; };
_alias1.Author = _alias1.Author || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"Id":0,"Name":""};obj.constructor=_alias1.Author; return obj; };
_alias1.BookDetailDTO = _alias1.BookDetailDTO || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"Id":0,"Title":"","Year":0,"Price":0,"AuthorName":"","Genre":""};obj.constructor=_alias1.BookDetailDTO; return obj; };
_alias1.BookDTO = _alias1.BookDTO || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"Id":0,"Title":"","AuthorName":""};obj.constructor=_alias1.BookDTO; return obj; };
_alias2.Personnage = _alias2.Personnage || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"Nom":""};obj.constructor=_alias2.Personnage; return obj; };
_alias2.Personnage2 = _alias2.Personnage2 || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"Nom":""};obj.constructor=_alias2.Personnage2; return obj; };
_alias5.ParameterDescription = _alias5.ParameterDescription || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"Annotations":$dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$shared.$arrayFactory($dp.$JsNet.BookService.Areas.HelpPage.ModelDescriptions.ParameterAnnotation))),"Documentation":"","Name":"","TypeDescription":$dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.BookService.Areas.HelpPage.ModelDescriptions.ModelDescription)};obj.constructor=_alias5.ParameterDescription; return obj; };
_alias1.Book = _alias1.Book || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"Id":0,"Title":"","Year":0,"Price":0,"Genre":"","AuthorId":0,"Author":$dp.$shared.$circularReferenceManagerFactory.apply(null, args)(_alias1.Author)};obj.constructor=_alias1.Book; return obj; };
_alias2.Theatre_$gen$_BookServiceControllersPersonnage = _alias2.Theatre_$gen$_BookServiceControllersPersonnage || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"Lieu":"","personnage":$dp.$shared.$circularReferenceManagerFactory.apply(null, args)(_alias2.Personnage)};obj.constructor=_alias2.Theatre_$gen$_BookServiceControllersPersonnage; return obj; };
_alias0.HelpPageApiModel = _alias0.HelpPageApiModel || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"UriParameters":$dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$shared.$arrayFactory($dp.$JsNet.BookService.Areas.HelpPage.ModelDescriptions.ParameterDescription))),"RequestDocumentation":"","RequestModelDescription":$dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.BookService.Areas.HelpPage.ModelDescriptions.ModelDescription),"RequestBodyParameters":$dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$shared.$arrayFactory($dp.$JsNet.BookService.Areas.HelpPage.ModelDescriptions.ParameterDescription))),"ResourceDescription":$dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.BookService.Areas.HelpPage.ModelDescriptions.ModelDescription),"ResourceProperties":$dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$shared.$arrayFactory($dp.$JsNet.BookService.Areas.HelpPage.ModelDescriptions.ParameterDescription))),"ErrorMessages":$dp.$shared.$arrayFactory(""),"ApiDescription":{},"SampleRequests":$dp.$shared.$arrayFactory({}),"SampleResponses":$dp.$shared.$arrayFactory({})};obj.constructor=_alias0.HelpPageApiModel; return obj; };
window.$dp = window.$dp || {};
$dp.$JsNet = $dp.$JsNet || {};
$dp.$JsNet.BookService = $dp.$JsNet.BookService || {};
$dp.$JsNet.BookService.Areas = $dp.$JsNet.BookService.Areas || {};
$dp.$JsNet.BookService.Areas.HelpPage = $dp.$JsNet.BookService.Areas.HelpPage || {};
$dp.$JsNet.BookService.Areas.HelpPage.SampleDirection = $dp.$JsNet.BookService.Areas.HelpPage.SampleDirection || {"Request":{ "Key":"Request","Value":0 },"Response":{ "Key":"Response","Value":1 }};
window.$dp = window.$dp || {};$dp.$JsNet = $dp.$JsNet || {};
$dp.$JsNet.$UrlSet = {"HelpPage":{"Help":{"Index": function actionFactory () { try { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { try { var action = {};action.$Params = function(){  var obj = null; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {}; return obj; };return action; } catch(ex) { throw ex;  } }();return action; } catch(ex) { throw ex;  } }(),"Api": function actionFactory () { try { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { try { var action = {};action.$Params = function(){  var obj = {"apiId":""}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {}; return obj; };return action; } catch(ex) { throw ex;  } }();return action; } catch(ex) { throw ex;  } }(),"ResourceModel": function actionFactory () { try { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { try { var action = {};action.$Params = function(){  var obj = {"modelName":""}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {}; return obj; };return action; } catch(ex) { throw ex;  } }();return action; } catch(ex) { throw ex;  } }()}},
"Authors":{"GetAuthors": function actionFactory () { try { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { try { var action = {};action.$Params = function(){  var obj = null; return obj; };action.$Return = function(){  var obj = $dp.$shared.$arrayFactory(_alias1.Author()); return obj; };action.$IsApiController = { $httpMethodArray:{$get:"get",$items:["get"],$single:"get"} };action.$AjaxOptions = function(){  var obj = {dataType:"json",contentType:"application/json",cache:false}; return obj; };return action; } catch(ex) { throw ex;  } }();return action; } catch(ex) { throw ex;  } }(),"GetAuthor": function actionFactory () { try { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { try { var action = {};action.$Params = function(){  var obj = {"id":0}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = { $httpMethodArray:{$get:"get",$items:["get"],$single:"get"} };action.$AjaxOptions = function(){  var obj = {dataType:"json",contentType:"application/json",cache:false}; return obj; };return action; } catch(ex) { throw ex;  } }();return action; } catch(ex) { throw ex;  } }(),"PutAuthor": function actionFactory () { try { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { try { var action = {};action.$Params = function(){  var obj = {"id":0,"author":_alias1.Author()}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = { $httpMethodArray:{$put:"put",$items:["put"],$single:"put"} };action.$AjaxOptions = function(){  var obj = {dataType:"json",contentType:"application/json",cache:false}; return obj; };return action; } catch(ex) { throw ex;  } }();return action; } catch(ex) { throw ex;  } }(),"PostAuthor": function actionFactory () { try { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { try { var action = {};action.$Params = function(){  var obj = {"author":_alias1.Author()}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = { $httpMethodArray:{$post:"post",$items:["post"],$single:"post"} };action.$AjaxOptions = function(){  var obj = {dataType:"json",contentType:"application/json",cache:false}; return obj; };return action; } catch(ex) { throw ex;  } }();return action; } catch(ex) { throw ex;  } }(),"DeleteAuthor": function actionFactory () { try { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { try { var action = {};action.$Params = function(){  var obj = {"id":0}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = { $httpMethodArray:{$delete:"delete",$items:["delete"],$single:"delete"} };action.$AjaxOptions = function(){  var obj = {dataType:"json",contentType:"application/json",cache:false}; return obj; };return action; } catch(ex) { throw ex;  } }();return action; } catch(ex) { throw ex;  } }(),"GetTest": function actionFactory () { try { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { try { var action = {};action.$Params = function(){  var obj = {"id":0}; return obj; };action.$Return = function(){  var obj = _alias2.Personnage(); return obj; };action.$IsApiController = { $httpMethodArray:{$get:"get",$items:["get"],$single:"get"} };action.$AjaxOptions = function(){  var obj = {dataType:"json",contentType:"application/json",cache:false}; return obj; };return action; } catch(ex) { throw ex;  } }();return action; } catch(ex) { throw ex;  } }(),"Test2": function actionFactory () { try { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { try { var action = {};action.$Params = function(){  var obj = {"id":0}; return obj; };action.$Return = function(){  var obj = $dp.$shared.$arrayFactory(_alias2.Personnage2()); return obj; };action.$AjaxOptions = function(){  var obj = {dataType:"json",contentType:"application/json",cache:false}; return obj; };return action; } catch(ex) { throw ex;  } }();return action; } catch(ex) { throw ex;  } }()},
"Books":{"GetBooks": function actionFactory () { try { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { try { var action = {};action.$Params = function(){  var obj = null; return obj; };action.$Return = function(){  var obj = $dp.$shared.$arrayFactory(_alias1.BookDTO()); return obj; };action.$IsApiController = { $httpMethodArray:{$get:"get",$items:["get"],$single:"get"} };action.$AjaxOptions = function(){  var obj = {dataType:"json",contentType:"application/json",cache:false}; return obj; };return action; } catch(ex) { throw ex;  } }();return action; } catch(ex) { throw ex;  } }(),"GetBook": function actionFactory () { try { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { try { var action = {};action.$Params = function(){  var obj = {"id":0}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = { $httpMethodArray:{$get:"get",$items:["get"],$single:"get"} };action.$AjaxOptions = function(){  var obj = {dataType:"json",contentType:"application/json",cache:false}; return obj; };return action; } catch(ex) { throw ex;  } }();return action; } catch(ex) { throw ex;  } }(),"PutBook": function actionFactory () { try { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { try { var action = {};action.$Params = function(){  var obj = {"id":0,"book":_alias1.Book()}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = { $httpMethodArray:{$put:"put",$items:["put"],$single:"put"} };action.$AjaxOptions = function(){  var obj = {dataType:"json",contentType:"application/json",cache:false}; return obj; };return action; } catch(ex) { throw ex;  } }();return action; } catch(ex) { throw ex;  } }(),"PostBook": function actionFactory () { try { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { try { var action = {};action.$Params = function(){  var obj = {"book":_alias1.Book()}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = { $httpMethodArray:{$post:"post",$items:["post"],$single:"post"} };action.$AjaxOptions = function(){  var obj = {dataType:"json",contentType:"application/json",cache:false}; return obj; };return action; } catch(ex) { throw ex;  } }();return action; } catch(ex) { throw ex;  } }(),"DeleteBook": function actionFactory () { try { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { try { var action = {};action.$Params = function(){  var obj = {"id":0}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = { $httpMethodArray:{$delete:"delete",$items:["delete"],$single:"delete"} };action.$AjaxOptions = function(){  var obj = {dataType:"json",contentType:"application/json",cache:false}; return obj; };return action; } catch(ex) { throw ex;  } }();return action; } catch(ex) { throw ex;  } }()},
"Home":{"Index": function actionFactory () { try { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { try { var action = {};action.$Params = function(){  var obj = null; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {}; return obj; };return action; } catch(ex) { throw ex;  } }();return action; } catch(ex) { throw ex;  } }()}};
})();
})();
