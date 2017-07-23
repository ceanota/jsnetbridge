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
$dp.$JsNet.WebApplication_vide = $dp.$JsNet.WebApplication_vide || {};
$dp.$JsNet.WebApplication_vide.Controllers = $dp.$JsNet.WebApplication_vide.Controllers || {};
var _alias0 = $dp.$JsNet.WebApplication_vide.Controllers;
_alias0.EffetFacture = _alias0.EffetFacture || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"EffetFactureId":0,"FactureId":0,"DateEcheance":new Date(),"ModeReglementId":0,"Montant":0,"UtilisateurId":0,"DateCreation":new Date(),"DateModif":new Date(),"CreateurId":0,"PointageId":0,"Pointage":$dp.$shared.$circularReferenceManagerFactory.apply(null, args)(_alias0.Pointage),"Ecart":false,"EtatId":0,"SessionComptabilisationId":0,"NiveauRelanceId":0,"DateDerniereRelance":new Date(),"NumDoc":"","DateDocument":new Date()};obj.constructor=_alias0.EffetFacture; return obj; };
_alias0.Pointage = _alias0.Pointage || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"PointageId":0,"DossierId":0,"TiersId":0,"DatePointage":new Date(),"Lettrage":"","UtilisateurId":0,"DateCreation":new Date(),"DateModif":new Date(),"CreateurId":0,"EffetFacture_unique":$dp.$shared.$circularReferenceManagerFactory.apply(null, args)(_alias0.EffetFacture)};obj.constructor=_alias0.Pointage; return obj; };
//#endregion
//#region 'Enum'
window.$dp = window.$dp || {};
$dp.$JsNet = $dp.$JsNet || {};
$dp.$JsNet.WebApplication_vide = $dp.$JsNet.WebApplication_vide || {};
$dp.$JsNet.WebApplication_vide.Controllers = $dp.$JsNet.WebApplication_vide.Controllers || {};
var _alias0 = $dp.$JsNet.WebApplication_vide.Controllers;
_alias0.EnumTypeDocument = _alias0.EnumTypeDocument || {"effetFacture":{ "$Key":"effetFacture","$Value":0 },"demandePrix":{ "$Key":"demandePrix","$Value":1 },"commande":{ "$Key":"commande","$Value":2 },"bonReception":{ "$Key":"bonReception","$Value":3 },"factureAchat":{ "$Key":"factureAchat","$Value":4 },"factureVente":{ "$Key":"factureVente","$Value":5 },"brouillonAchat":{ "$Key":"brouillonAchat","$Value":6 },"brouillonVente":{ "$Key":"brouillonVente","$Value":7 },"devis":{ "$Key":"devis","$Value":8 },"reglement":{ "$Key":"reglement","$Value":9 },"ecart":{ "$Key":"ecart","$Value":10 },"relance":{ "$Key":"relance","$Value":11 },"bonLivraison":{ "$Key":"bonLivraison","$Value":12 },"acompte":{ "$Key":"acompte","$Value":13 }};
_alias0.EnumEtatReglement = _alias0.EnumEtatReglement || {"EnCours":{ "$Key":"EnCours","$Value":20 },"Comptabilise":{ "$Key":"Comptabilise","$Value":21 }};
_alias0.EnumTypeCompte = _alias0.EnumTypeCompte || {"Auxiliaire_TTC":{ "$Key":"Auxiliaire_TTC","$Value":1 },"General_HT":{ "$Key":"General_HT","$Value":2 },"General_TVA":{ "$Key":"General_TVA","$Value":3 },"General_Reglement":{ "$Key":"General_Reglement","$Value":4 },"Auxiliaire_Reglement":{ "$Key":"Auxiliaire_Reglement","$Value":5 }};
//#endregion
//#region 'UrlSet'
window.$dp = window.$dp || {};
$dp.$JsNet = $dp.$JsNet || {};
$dp.$JsNet.$UrlSet = {"Test":{"Index_test": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'Index_test'; action.$Names.controller = 'Test'; action.$Names.area  = '';action.$Params = function(){  var obj = {"ef":_alias0.EffetFacture()}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:undefined,contentType:'application/json',cache:false,type:'post',method:'post',data:undefined}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"Index": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'Index'; action.$Names.controller = 'Test'; action.$Names.area  = '';action.$Params = function(){  var obj = null; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:undefined,contentType:'application/json',cache:false,type:'post',method:'post',data:undefined}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }()}};
//-- alias
window.$dpUrlSet = $dp.$JsNet.$UrlSet;
window.$dpLib = $dp.$JsNet;
//#endregion
})();
})();
})();
