declare namespace $dp.$JsNet.$Helpers.$Shared.$Action {

    interface $AjaxSettings {
        cache: boolean,
        contentType: any,
        data: any,
        dataType: string,
        method: string,
        type: string,
        url: string
    }

    interface $httpMethodArray {
        $items: Array<string>, $single: string, $first: string
    }

    interface $Names {
        action: string, controller: string, area: string
    }

    interface _$Action {
        $_Url: string,
        $GetUrl(routeData: Object): string,
        $GetUrl(): string,
        $GetRouteData(): Object,
        $Names: $Names,
        $Params(): {},
        $Return(): Object,
        $Enums(): Object,
        $IsApi: boolean,
        $httpMethodArray: $httpMethodArray,
        $AjaxSettings(): $AjaxSettings,
        $RouteTemplate: string,
    }

    function $ActionFactory(): _$Action;

}
declare namespace $dp.$shared {
    interface $Array<T> extends Array<T> {
        $dpItemFactory(): T;
    }
}
declare namespace $dp.$JsNet.QuadraEden.Domain {
//#region 'interfaces'
interface EffetFacture
{EffetFactureId:number,FactureId:number,DateEcheance:Date,ModeReglementId:number,Montant:number,UtilisateurId:number,DateCreation:Date,DateModif:Date,CreateurId:number,PointageId:number,Pointage:$dp.$JsNet.QuadraEden.Domain.Pointage,Ecart:boolean,EtatId:number,SessionComptabilisationId:number,NiveauRelanceId:number,DateDerniereRelance:Date,NumDoc:string,DateDocument:Date}
interface Reglement
{ReglementId:number,DossierId:number,DateReglement:Date,NumReglement:string,ModeReglementId:number,BanqueId:number,NumCheque:number,Emetteur:string,TiersId:number,Montant:number,DeviseId:number,RemisEnBanque:boolean,BlocNote:string,UtilisateurId:number,DateCreation:Date,DateModif:Date,CreateurId:number,TauxDev:number,PointageId:number,Pointage:$dp.$JsNet.QuadraEden.Domain.Pointage,EtatId:number,SessionComptabilisationId:number}
interface Pointage
{PointageId:number,DossierId:number,TiersId:number,DatePointage:Date,Lettrage:string,UtilisateurId:number,DateCreation:Date,DateModif:Date,CreateurId:number,EffetFacture:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Domain.EffetFacture>,Reglement:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Domain.Reglement>,EstLettrageTotal:boolean,IsSuccess:boolean,OtherListFailure:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,AllListFailures:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,ListFailure:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,PropertiesToSave:$dp.$shared.$Array<string>}
//#endregion
//#region 'functions'
var EffetFacture: () => $dp.$JsNet.QuadraEden.Domain.EffetFacture;
var Reglement: () => $dp.$JsNet.QuadraEden.Domain.Reglement;
var Pointage: () => $dp.$JsNet.QuadraEden.Domain.Pointage;
//#endregion
}
declare namespace $dp.$JsNet.QuadraEden.Transverse.Fail {
//#region 'interfaces'
interface AggOutFailItemBase
{TypeFail:number,Severity:number,Embedded_ERROR_GUID:string,ResKeyForMainMsg:string,ResKeyForBracesWithinMainMessage:$dp.$shared.$Array<string>,PropertyFailed:string}
//#endregion
//#region 'functions'
var AggOutFailItemBase: () => $dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase;
//#endregion
}

//#region 'Enum'
declare namespace $dp.$JsNet.QuadraEdenMVC_UI.ServiceMail {
interface MailPriority {Normal:{ $Key:string,$Value:number },Low:{ $Key:string,$Value:number },High:{ $Key:string,$Value:number }} 
}
declare namespace $dp.$JsNet.QuadraEdenMVC_UI.QuadraClientService {
interface TYPE_PERS {UNKNOWN:{ $Key:string,$Value:number },CLIENT:{ $Key:string,$Value:number },INTERLOCUTEUR:{ $Key:string,$Value:number },INTERVENANT:{ $Key:string,$Value:number },UTILISATEUR:{ $Key:string,$Value:number },CONTACT_PERSO:{ $Key:string,$Value:number }} 
interface TYPE_UTILISATEUR {COLLABORATEUR:{ $Key:string,$Value:number },INTERLOCUTEUR:{ $Key:string,$Value:number },COLLABORATEUR_CABINET:{ $Key:string,$Value:number }} 
interface AUTHORIZED_VIEW {CARD:{ $Key:string,$Value:number },MAIL_HISTO:{ $Key:string,$Value:number },EVENT_CALENDAR:{ $Key:string,$Value:number },DOC:{ $Key:string,$Value:number }} 
interface ConfidentialiteClient {ClientAutorises:{ $Key:string,$Value:number },ClientSauf:{ $Key:string,$Value:number }} 
interface TYPE_FREQUENCE {ALL:{ $Key:string,$Value:number },NOW:{ $Key:string,$Value:number },DAY:{ $Key:string,$Value:number },HEB:{ $Key:string,$Value:number }} 
interface CategoryGroupeStatut {Start:{ $Key:string,$Value:number },End:{ $Key:string,$Value:number },Middle:{ $Key:string,$Value:number }} 
interface OperateurLogical {AND:{ $Key:string,$Value:number },OR:{ $Key:string,$Value:number }} 
interface Op {Equals:{ $Key:string,$Value:number },Different:{ $Key:string,$Value:number },GreaterThan:{ $Key:string,$Value:number },LessThan:{ $Key:string,$Value:number },GreaterThanOrEqual:{ $Key:string,$Value:number },LessThanOrEqual:{ $Key:string,$Value:number },Contains:{ $Key:string,$Value:number },StartsWith:{ $Key:string,$Value:number },EndsWith:{ $Key:string,$Value:number }} 
}
declare namespace $dp.$JsNet.QuadraEdenMVC_UI.QuadraBoxServiceCompta {
interface EnumValuesEquilibreSource {SaisieImage:{ $Key:string,$Value:number },DevisFact:{ $Key:string,$Value:number },SuiviCaisse:{ $Key:string,$Value:number },ShopApplication:{ $Key:string,$Value:number }} 
interface EnumValuesCompteAuxiliaireType {Client:{ $Key:string,$Value:number },Fournisseur:{ $Key:string,$Value:number },General:{ $Key:string,$Value:number }} 
interface EnumValuesCompteAuxiliaireUpdateType {Full:{ $Key:string,$Value:number },Partial:{ $Key:string,$Value:number },PartialShort:{ $Key:string,$Value:number }} 
interface EnumValuesEquilibreType {Undefined:{ $Key:string,$Value:number },FactureAchat:{ $Key:string,$Value:number },FactureVente:{ $Key:string,$Value:number },Reglement:{ $Key:string,$Value:number }} 
interface EnumValuesSaisieType {Pourcentage:{ $Key:string,$Value:number },Milliemes:{ $Key:string,$Value:number },Montant:{ $Key:string,$Value:number }} 
interface TreeCodeBox {FACT:{ $Key:string,$Value:number },FACTVENTE:{ $Key:string,$Value:number },CONTRAT:{ $Key:string,$Value:number },AUTREDOC:{ $Key:string,$Value:number },CONSULT_ACHAT:{ $Key:string,$Value:number },CONSULT_VENTE:{ $Key:string,$Value:number },CONSULT_CONTRAT:{ $Key:string,$Value:number }} 
}
declare namespace $dp.$JsNet.QuadraEdenMVC_UI.QuadraBackOfficeServiceClient {
interface EnumProxyTypeClient {CLIENT:{ $Key:string,$Value:number },SOUS_CLIENT:{ $Key:string,$Value:number },SOUS_CLIENT_EXT:{ $Key:string,$Value:number }} 
}
declare namespace $dp.$JsNet.QuadraEdenMVC_UI.Models.Commun {
interface EnumTypeFlux {Achats:{ $Key:string,$Value:number },Ventes:{ $Key:string,$Value:number },Achats_Ventes:{ $Key:string,$Value:number }} 
}
declare namespace $dp.$JsNet.QuadraEdenMVC_UI.Controllers {
interface EnumModeEnvoi {Mail:{ $Key:string,$Value:number },Telechargement:{ $Key:string,$Value:number }} 
}
declare namespace $dp.$JsNet.QuadraEden.Transverse.Business {
interface EnumTypeDocument {effetFacture:{ $Key:string,$Value:number },demandePrix:{ $Key:string,$Value:number },commande:{ $Key:string,$Value:number },bonReception:{ $Key:string,$Value:number },factureAchat:{ $Key:string,$Value:number },factureVente:{ $Key:string,$Value:number },brouillonAchat:{ $Key:string,$Value:number },brouillonVente:{ $Key:string,$Value:number },devis:{ $Key:string,$Value:number },reglement:{ $Key:string,$Value:number },ecart:{ $Key:string,$Value:number },relance:{ $Key:string,$Value:number },bonLivraison:{ $Key:string,$Value:number },acompte:{ $Key:string,$Value:number }} 
interface EnumDocumentModeleImpressionDestinataire {Tous:{ $Key:string,$Value:number },Entreprise:{ $Key:string,$Value:number },Particulier:{ $Key:string,$Value:number }} 
interface EnumTypeValidationReglement {LettrageTotal:{ $Key:string,$Value:number },LettragePartiel:{ $Key:string,$Value:number }} 
interface EnumTypeImport {Tiers:{ $Key:string,$Value:number },Article:{ $Key:string,$Value:number }} 
}
declare namespace $dp.$JsNet.QuadraEden.Transverse.QuadraEnum {
interface EnumNomenclatureContextType {UNKNOWN:{ $Key:string,$Value:number },FamilleComptable:{ $Key:string,$Value:number },FamilleArt1:{ $Key:string,$Value:number },FamilleArt2:{ $Key:string,$Value:number },FamilleArt3:{ $Key:string,$Value:number },FamilleTarifArt:{ $Key:string,$Value:number },FamilleTarifClient:{ $Key:string,$Value:number },ImputationAnalytique:{ $Key:string,$Value:number },ImputationAnalCli:{ $Key:string,$Value:number },TypeDimension:{ $Key:string,$Value:number },Activite:{ $Key:string,$Value:number },Agence:{ $Key:string,$Value:number },FamilleCli1:{ $Key:string,$Value:number },FamilleCli2:{ $Key:string,$Value:number },FamilleComptableTiers:{ $Key:string,$Value:number },Depot:{ $Key:string,$Value:number },Tournee:{ $Key:string,$Value:number },MotifSortie:{ $Key:string,$Value:number },SecteurGeo:{ $Key:string,$Value:number },ModeleEtiq:{ $Key:string,$Value:number },Sous_Tournee:{ $Key:string,$Value:number },Factor:{ $Key:string,$Value:number },VentilCptaHT:{ $Key:string,$Value:number },Taxe:{ $Key:string,$Value:number },TVA:{ $Key:string,$Value:number },FamilleTVA1:{ $Key:string,$Value:number },FamilleTVA2:{ $Key:string,$Value:number },FamilleTVA3:{ $Key:string,$Value:number },Representant:{ $Key:string,$Value:number },ModeReglement:{ $Key:string,$Value:number },TauxDevise:{ $Key:string,$Value:number }} 
interface EnumNomenclatureType {UNKNOWN:{ $Key:string,$Value:number },Pays:{ $Key:string,$Value:number },NatJuridique:{ $Key:string,$Value:number },CodeBarreType:{ $Key:string,$Value:number },Mesure:{ $Key:string,$Value:number },TypeDocument:{ $Key:string,$Value:number },AppliCoefPvPa:{ $Key:string,$Value:number },CritImpFact:{ $Key:string,$Value:number },Devise:{ $Key:string,$Value:number },FormatLibelleArt:{ $Key:string,$Value:number },ImpObligLiv:{ $Key:string,$Value:number },Incoterm:{ $Key:string,$Value:number },LieuDispo:{ $Key:string,$Value:number },MethAch:{ $Key:string,$Value:number },ModeExp:{ $Key:string,$Value:number },RegroupBLsurFact:{ $Key:string,$Value:number },StatutArticle:{ $Key:string,$Value:number },StatutClient:{ $Key:string,$Value:number },TypeAppartenance:{ $Key:string,$Value:number },TypeArt:{ $Key:string,$Value:number },TypeClient:{ $Key:string,$Value:number },TypeDonnee:{ $Key:string,$Value:number },TypeFlux:{ $Key:string,$Value:number },TypeJour:{ $Key:string,$Value:number },TypeMontant:{ $Key:string,$Value:number },TypeNomenclatureUE:{ $Key:string,$Value:number },TypeUL:{ $Key:string,$Value:number },Langue:{ $Key:string,$Value:number },QualifMesure:{ $Key:string,$Value:number },QualifTaxe:{ $Key:string,$Value:number },RegimeTVA:{ $Key:string,$Value:number },TypeTelephone:{ $Key:string,$Value:number },LocalisTaxe:{ $Key:string,$Value:number },CategorieTVA:{ $Key:string,$Value:number },CategorieReglement:{ $Key:string,$Value:number },Etat:{ $Key:string,$Value:number },Affectation:{ $Key:string,$Value:number },Comptabilite:{ $Key:string,$Value:number },Civilite:{ $Key:string,$Value:number },NiveauRelance:{ $Key:string,$Value:number },APE:{ $Key:string,$Value:number }} 
}
declare namespace $dp.$JsNet.QuadraEden.Domain.Parametrage {
interface EnumBundleUnivers {Article:{ $Key:string,$Value:number },Client:{ $Key:string,$Value:number },Fournisseur:{ $Key:string,$Value:number }} 
}
//#endregion

declare namespace $dp.$JsNet.$UrlSet.Account.Index{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Account.AccessDenied{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Account.GetInfosUserFromAjax{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.DocumentManager.GetZippedDocument{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{DocumentId:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.DocumentManager.GetDocument{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{DocumentId:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Error.Index{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{statusCode:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.ComptabilisationBase.Comptabiliser{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{dossierId:number,debut:string,fin:string}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.ComptabilisationBase.FlagPiecesNonComptabilisees{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{ctxid:number,startDate:Date}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.ComptabilisationBase.VisuSessionComptabilisation{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{DossierId:number,SessionComptabilisationId:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.ComptabilisationReglement.Index{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{ctxid:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.ComptabilisationReglement.FlagPiecesNonComptabilisees{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{ctxid:number,startDate:Date}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.ComptabilisationReglement.Comptabiliser{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{dossierId:number,debut:string,fin:string}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.ComptabilisationReglement.VisuSessionComptabilisation{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{DossierId:number,SessionComptabilisationId:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.ComptabilisationReglement.ReadRangeNonComptabilises{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{senderId:string,start:number,limit:number,paramColumns:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Grid.Parameters.ParamColumn>,ctxid:number,dateDebut:Date,dateFin:Date}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.ComptabilisationReglement.ReadRangeComptabilises{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{senderId:string,start:number,limit:number,paramColumns:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Grid.Parameters.ParamColumn>,ctxid:number,SessionId:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.ComptabilisationReglement.ReadRangeNonComptabilisesDetail{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{senderId:string,start:number,limit:number,paramColumns:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Grid.Parameters.ParamColumn>,ctxid:number,dateDebut:Date,dateFin:Date,ModeReglementid:number,Deviseid:number,MontantTotal:number,SessionId:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.ComptabilisationReglement.SendMail{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{DossierId:number,SessionComptabilisation:$dp.$JsNet.QuadraEden.Domain.SessionComptabilisation,SmtpMessageModel:$dp.$JsNet.QuadraEdenMVC_UI.Models.Commun.SmtpMessageModel}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.ComptabilisationReglement.GetModeleEmail{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Comptabilisation.Comptabiliser{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{dossierId:number,debut:string,fin:string}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Comptabilisation.VisuSessionComptabilisation{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{DossierId:number,SessionComptabilisationId:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Comptabilisation.SendMail{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{DossierId:number,SessionComptabilisation:$dp.$JsNet.QuadraEden.Domain.SessionComptabilisation,SmtpMessageModel:$dp.$JsNet.QuadraEdenMVC_UI.Models.Commun.SmtpMessageModel}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Comptabilisation.FlagPiecesNonComptabilisees{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{ctxid:number,startDate:Date}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Comptabilisation.Index{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{ctxid:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Comptabilisation.EnCoursOuReimprimer{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{ctxid:number,startDate:Date,endDate:Date}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Comptabilisation.GetListSession{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{TypeDocumentSession:number}
$Return():{}
$Enums():{TypeDocumentSession: $dp.$JsNet.QuadraEden.Transverse.Business.EnumTypeDocument}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Comptabilisation.GetModeleEmail{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.DocumentModeleImpression.GetMailTemplate{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{TypeDocumentId:number,dossierId:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.DocumentModeleImpression.GetModeleImpressionParDefaut{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{dossierId:number,tiersId:number,typeDocument:number}
$Return():{}
$Enums():{typeDocument: $dp.$JsNet.QuadraEden.Transverse.Business.EnumTypeDocument}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.DocumentModeleImpression.Get_AvecPersonnalisation{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{dossierId:number,typeDocument:number}
$Return():{}
$Enums():{typeDocument: $dp.$JsNet.QuadraEden.Transverse.Business.EnumTypeDocument}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.DocumentModeleImpression.Get_AvecPersonnalisationById{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{id:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.DocumentModeleImpression.GetPersonnalisationByTypeDocument{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{typeDocument:number}
$Return():{}
$Enums():{typeDocument: $dp.$JsNet.QuadraEden.Transverse.Business.EnumTypeDocument}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.DocumentModeleImpression.GetModeles{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{typeDocumentId:number}
$Return():{}
$Enums():{typeDocumentId: $dp.$JsNet.QuadraEden.Transverse.Business.EnumTypeDocument}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.DocumentModeleImpression.GetMedia{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{documentStyleId:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.DocumentModeleImpression.GetMediaByDMIId{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{documentmodeleImpressionId:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.DocumentModeleImpression.ModifierDestinataire{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{documentModeleImpressionId:number,destinataire:number}
$Return():{}
$Enums():{destinataire: $dp.$JsNet.QuadraEden.Transverse.Business.EnumDocumentModeleImpressionDestinataire}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.DocumentModeleImpression.Sauvegarder{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{entite:$dp.$JsNet.QuadraEden.Domain.DocumentModeleImpression}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.DocumentModeleImpression.DeleteDMI{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{documentModeleImpressionId:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.DocumentModeleImpression.DuplicateDMI{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{documentModeleImpressionId:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Piece.GetDocumentPDF{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{pieceId:number,typePieceId:number,duplicata:boolean}
$Return():{}
$Enums():{typePieceId: $dp.$JsNet.QuadraEden.Transverse.Business.EnumTypeDocument}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Piece.GenererDocument{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{pieceId:number,typePieceId:number,documentModeleImpressionId:number}
$Return():{}
$Enums():{typePieceId: $dp.$JsNet.QuadraEden.Transverse.Business.EnumTypeDocument}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Piece.SendMail{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{typeDocumentId:number,pieceId:number,isDuplicata:boolean,SmtpMessageModel:$dp.$JsNet.QuadraEdenMVC_UI.Models.Commun.SmtpMessageModel}
$Return():{}
$Enums():{typeDocumentId: $dp.$JsNet.QuadraEden.Transverse.Business.EnumTypeDocument}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Piece.SendToClient{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{typeDocumentId:number,documentId:number,dossierId:number,tiersId:number,documentModeleImpressionId:number}
$Return():{}
$Enums():{typeDocumentId: $dp.$JsNet.QuadraEden.Transverse.Business.EnumTypeDocument}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Piece.ActiverSaisie{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{typeDocumentId:number,documentId:number,dossierId:number}
$Return():{}
$Enums():{typeDocumentId: $dp.$JsNet.QuadraEden.Transverse.Business.EnumTypeDocument}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Piece.ReadAuxiliaireDepuisTiers{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{dossierId:number,tiersId:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Piece.ChangerEtatSimple{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{typeDocumentId:number,pieceId:number,actionName:string}
$Return():{}
$Enums():{typeDocumentId: $dp.$JsNet.QuadraEden.Transverse.Business.EnumTypeDocument}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Piece.CalculerDatePremiereEcheance{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{PieceModel:$dp.$JsNet.QuadraEdenMVC_UI.Models.Piece.PieceModel}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Piece.ReadRangeGeneric{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{senderId:string,start:number,limit:number,paramColumns:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Grid.Parameters.ParamColumn>,ctxid:number,typepiece:number}
$Return():{}
$Enums():{typepiece: $dp.$JsNet.QuadraEden.Transverse.Business.EnumTypeDocument}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Piece.ReadGeneric{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{folderId:number,senderId:string,idArray:$dp.$shared.$Array<number>,typepiece:number}
$Return():{}
$Enums():{typepiece: $dp.$JsNet.QuadraEden.Transverse.Business.EnumTypeDocument}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Piece.DetailBrouillon{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{ctxid:number,brouillonid:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Piece.CreateBrouillon{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{ctxid:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Piece.ListBrouillon{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{ctxid:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Piece.SauverBrouillonComplet{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{brouillonToSave:$dp.$JsNet.QuadraEdenMVC_UI.Models.Piece.BrouillonModel}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Piece.GetBrouillonCompletFromAjax{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{dossierId:number,brouillonId:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Piece.Read{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{folderId:number,idArray:$dp.$shared.$Array<number>,paramColumns:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Grid.Parameters.ParamColumn>}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Piece.ReadRange{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{senderId:string,start:number,limit:number,paramColumns:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Grid.Parameters.ParamColumn>,ctxid:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Piece.DetailBonlivraison{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{ctxid:number,pieceid:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Piece.CreateBonlivraison{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{ctxid:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Piece.ListBonlivraison{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{ctxid:number,initialfilteretat:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Piece.DetailDevis{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{ctxid:number,pieceid:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Piece.CreateDevis{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{ctxid:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Piece.ListDevis{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{ctxid:number,initialfilteretat:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Piece.TransfoPiece{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{pieceFromId:number,typeDocumentFromId:number,typeDocumentToId:number,dossierId:number}
$Return():{}
$Enums():{typeDocumentFromId: $dp.$JsNet.QuadraEden.Transverse.Business.EnumTypeDocument,typeDocumentToId: $dp.$JsNet.QuadraEden.Transverse.Business.EnumTypeDocument}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Piece.DeletePiece{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{typeDocumentId:number,documentId:number,avecReactivationPieceSource:boolean}
$Return():{}
$Enums():{typeDocumentId: $dp.$JsNet.QuadraEden.Transverse.Business.EnumTypeDocument}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Piece.DuplicatePiece{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{typeDocumentId:number,documentId:number,convertToAvoir:boolean}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Piece.ReadArticleForPiece{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{articleIds:$dp.$shared.$Array<number>}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Piece.ReadDossierForPiece{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{dossierId:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Piece.ReadClientForPiece{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{dossierId:number,tiersId:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Piece.GetPieceCompleteFromAjax{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{dossierId:number,pieceId:number,typePiece:number}
$Return():{}
$Enums():{typePiece: $dp.$JsNet.QuadraEden.Transverse.Business.EnumTypeDocument}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Piece.SauverPieceComplete{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{piece:$dp.$JsNet.QuadraEdenMVC_UI.Models.Piece.PostPieceModel}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Piece.GetPieceRecapFromAjax{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{dossierId:number,typePiece:number,DeviseId:number}
$Return():{}
$Enums():{typePiece: $dp.$JsNet.QuadraEden.Transverse.Business.EnumTypeDocument}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Piece.ExistPiece{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{typeDocumentId:number,pieceId:number}
$Return():{}
$Enums():{typeDocumentId: $dp.$JsNet.QuadraEden.Transverse.Business.EnumTypeDocument}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Piece.GetAcomptesRegles{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{typeDocumentId:number,pieceId:number}
$Return():{}
$Enums():{typeDocumentId: $dp.$JsNet.QuadraEden.Transverse.Business.EnumTypeDocument}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Piece.DetailFacture{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{ctxid:number,pieceid:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Piece.CreateFacture{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{ctxid:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Piece.ListFacture{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{ctxid:number,initialfiltermois:number,initialfilterannee:number,surFiltreEtatComptable:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Relance.GetDocumentRelancePDF{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{dossierId:number,tiersId:number,niveauRelanceId:number,factureId:number,effetFactureId:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Relance.GetDocumentRelanceClientPDF{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{dossierId:number,tiersId:number,niveauRelanceId:number,paramColsJson:string}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Relance.RelancerEffetFacture{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{dossierId:number,tiersId:number,niveauRelanceId:number,factureId:number,effetFactureId:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Relance.RelancerClient{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{dossierId:number,tiersId:number,niveauRelanceId:number,paramCols:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Grid.Parameters.ParamColumn>}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Relance.RelancerEffetFactureParMail{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{dossierId:number,tiersId:number,niveauRelanceId:number,factureId:number,effetFactureId:number,SmtpMessageModel:$dp.$JsNet.QuadraEdenMVC_UI.Models.Commun.SmtpMessageModel}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Relance.RelancerClientParMail{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{dossierId:number,tiersId:number,niveauRelanceId:number,paramCols:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Grid.Parameters.ParamColumn>,SmtpMessageModel:$dp.$JsNet.QuadraEdenMVC_UI.Models.Commun.SmtpMessageModel}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Relance.GetDocumentPDF_Client{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{dossierId:number,tiersId:number,niveauRelanceId:number,paramCols:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Grid.Parameters.ParamColumn>}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Relance.GetDocumentPDF_EffetFacture{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{dossierId:number,tiersId:number,niveauRelanceId:number,effetFacture:$dp.$JsNet.QuadraEden.Domain.EffetFacture}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Relance.GetDocumentPDF_AvecCodeTiers{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{dossierId:number,niveauRelanceId:number,codeTiers:string,sts:string,mrt:string}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Relance.RelancerEffetFacture_test{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Relance.RelancerClient_test{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Relance.GetDocumentPDF_Client_test{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Relance.GetDocumentPDF_EffetFacture_test{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.ClientLogging.LogJSError{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{dossierId:number,clEx:$dp.$JsNet.QuadraEdenMVC_UI.Models.ClientExceptionModel}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.ClientLogging.LogJSLogs{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{additionnalInfo:string,clientsLogs:string}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Tiers.Test{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Tiers.GetListSupplier{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{Name:string,Siret:string,City:string,Postcode:string,IsActive:boolean,ResultLimit:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Tiers.ListClient{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{ctxid:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Tiers.ListCustomers{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{ctxid:number,tiersId:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Tiers.TierImport{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{ctxid:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Tiers.DetailDossierTiers{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{ctxid:number,tiersid:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Tiers.CreateDossierTiers{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{ctxid:number,DuplicationTiersId:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Tiers.DTiersSelectorManager{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{ctxid:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Tiers.PersonneLivreeManager{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Tiers.SauverDossierTiersComplet{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{postDT:$dp.$JsNet.QuadraEdenMVC_UI.Models.Tiers.PostDossierTiersModel}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Tiers.SupprimerDossierTiers{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{dossierId:number,tiersId:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Tiers.GetDossierTiersCompletFromAjax{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{dossierId:number,tiersId:number,convertDataToJsonString:boolean,DuplicationTiersId:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Tiers.GetTiersDefaultParam{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{dossierId:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Tiers.GetTiersAdditionnalInfo{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{ctxid:number,tiersId:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Tiers.ListByCompteAuxi{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{senderId:string,start:number,limit:number,paramColumns:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Grid.Parameters.ParamColumn>,ctxid:number,cptAuxi:string}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Tiers.CheckCompteAuxi{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{ctxid:number,tiersId:number,cptAuxi:string}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Tiers.ReadRange{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{senderId:string,start:number,limit:number,paramColumns:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Grid.Parameters.ParamColumn>,ctxid:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Tiers.ReadRangeTiersPourAdresseLivraison{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{senderId:string,start:number,limit:number,paramColumns:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Grid.Parameters.ParamColumn>,ctxid:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Tiers.ReadRangeTiersPourAdresseFacturation{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{senderId:string,start:number,limit:number,paramColumns:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Grid.Parameters.ParamColumn>,ctxid:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Tiers.getClientsWithEmail{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{ctxid:number,search:string}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Tiers.ReadByCode{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{propertyName:string,value:string,ctxid:number,typeDocumentId:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Tiers.Read{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{folderId:number,senderId:string,idArray:$dp.$shared.$Array<number>}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Tiers.ReadRangeAdresseLivraison{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{senderId:string,start:number,limit:number,paramColumns:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Grid.Parameters.ParamColumn>,ctxid:number,tiersId:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Tiers.ReadRangeClientDu{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{senderId:string,start:number,limit:number,paramColumns:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Grid.Parameters.ParamColumn>,ctxid:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Tiers.GetDevisesClientDu{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{DossierId:number,TiersId:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Tiers.UploadFile{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{dossierId:number,userMinuteOffset:number,importConfig:string}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Tiers.ExportCsv{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{dossierId:number,paramColumnsJsonStr:string}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Vente.Journal{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{ctxid:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Vente.ReadRangeFacturesNonComptabilisees{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{senderId:string,start:number,limit:number,paramColumns:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Grid.Parameters.ParamColumn>,ctxid:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Vente.ReadRangeFacturesComptabilisees{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{senderId:string,start:number,limit:number,paramColumns:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Grid.Parameters.ParamColumn>,ctxid:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Vente.ReadRangeRecapFacturesNonComptabilisees{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{senderId:string,start:number,limit:number,paramColumns:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Grid.Parameters.ParamColumn>,ctxid:number,EnumSession:string,preventCptGrouping:boolean}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Vente.ReadRangeJV{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{senderId:string,start:number,limit:number,paramColumns:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Grid.Parameters.ParamColumn>,ctxid:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Vente.ReadRangeRecapFactureComptable{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{senderId:string,start:number,limit:number,paramColumns:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Grid.Parameters.ParamColumn>,ctxid:number,preventCptGrouping:boolean}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Vente.ReadRangeRecapReglementFacture{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{senderId:string,start:number,limit:number,paramColumns:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Grid.Parameters.ParamColumn>,ctxid:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Statistique.CaMargeByDossier{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{dossierId:number,mois:number,annee:number,cumul:boolean}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Statistique.CaAnnuelByDossier{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{dossierId:number,annee:Date}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Statistique.GetFacturesSelonClasseRepresentant_aggregate{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{classe_rep_id:number,dossierId:number,dateDebut:Date,dateFin:Date}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Statistique.GetFacturesSelonClasseRepresentant_aggregate_test{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{classe_rep_id:number,dossierId:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Statistique.GetDevisSelonClasseRepresentant_aggregate{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{classe_rep_id:number,dossierId:number,dateDebut:Date,dateFin:Date}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Statistique.GetPersonneMedia{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{ownerIds:$dp.$shared.$Array<number>}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Statistique.ReglementsRetard{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{dossierId:number,date:Date}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Resource.GetResourcelang{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{lang:string}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Reglement.ListRgtDu{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{ctxid:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Reglement.ListRgtRetard{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{ctxid:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Reglement.PaymentSeized{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{ctxid:number,tiersId:number,lettrage:string,deviseId:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Reglement.SauverReglement{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{reglementToSave:$dp.$JsNet.QuadraEdenMVC_UI.Models.Piece.ReglementModel}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Reglement.SupprimerReglement{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{reglementId:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Reglement.ReadRangeEffetFacture{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{senderId:string,start:number,limit:number,paramColumns:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Grid.Parameters.ParamColumn>}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Reglement.ReadRangeReglement{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{senderId:string,start:number,limit:number,paramColumns:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Grid.Parameters.ParamColumn>}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Reglement.ReadPointage{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{PointageId:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Reglement.getDataCustomerForReglement{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{dossierId:number,tiersId:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Reglement.Creer_pointage_effet_reglement{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{effetFactures:$dp.$shared.$Array<$dp.$JsNet.QuadraEdenMVC_UI.Models.Piece.EffetFactureModel>,reglements:$dp.$shared.$Array<$dp.$JsNet.QuadraEdenMVC_UI.Models.Piece.ReglementModel>,dossierId:number,tiersId:number,choix:number}
$Return():{}
$Enums():{choix: $dp.$JsNet.QuadraEden.Transverse.Business.EnumTypeValidationReglement}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Reglement.Creer_AbandonDeDette{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{effetFactures:$dp.$shared.$Array<$dp.$JsNet.QuadraEdenMVC_UI.Models.Piece.EffetFactureModel>,dossierId:number,tiersId:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Reglement.supprimer_pointage{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{pointageId:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Reglement.ReadRangeRgtRetard{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{senderId:string,start:number,limit:number,paramColumns:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Grid.Parameters.ParamColumn>,ctxid:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Reglement.ReadRangeRgtRetardDUnTiers{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{senderId:string,start:number,paramColumns:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Grid.Parameters.ParamColumn>,ctxid:number,tiersId:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Reglement.GetPointageTotalPaginated{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{dossierId:number,tiersId:number,currentPage:number,nbResultByPage:number,searchFilter:string,deviseIdFilter:number,datePointageFilter:Date}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Dossier.GetCompteVenteTr_M{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Dossier.List{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{force:boolean}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Dossier.QuickCreate{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{codeDossier:string}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Dossier.Dashboard{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{ctxid:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Dossier.DetailDossier{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{ctxid:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Dossier.CreateDossier{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{codeDossier:string}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Dossier.CreateDossierWithParent{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{ctxid:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Dossier.SauverDossierComplet{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{dossierToSave:$dp.$JsNet.QuadraEdenMVC_UI.Models.Dossier.DossierModel}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Dossier.SauverDossierFlat{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{dossierFlatToSave:$dp.$JsNet.QuadraEdenMVC_UI.Models.Dossier.DossierFlatModel}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Dossier.GetDos_GesCom{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{dossierId:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Dossier.GetDossierCompletFromAjax{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{Id:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Dossier.ListDossierAjax{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Dossier.ListAjaxByUser{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Dossier.CheckAccessKey{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{dossierId:number,aKey:string}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Dossier.GetDossierLiteFromAjax{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{Id:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Dossier.ActivateDossier{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{dossierId:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Dossier.GetTimeLine{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{dossierId:number,currentPage:number,nbResultByPage:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Dossier.GetConfigurationNiveauRelance{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{dossierId:number,niveauRelanceId:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Dossier.SauvegarderConfigRelance{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{objToSave:$dp.$JsNet.QuadraEdenMVC_UI.Models.Dossier.DosNiveauRelanceModel}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Home.Index{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Home.Test{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Home.TestModel{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Item.ReadTaxes{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{dossierId:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Item.ReadArt_Taxes{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{articleId:$dp.$shared.$Array<number>}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Item.GenerateBarCode{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{item:$dp.$JsNet.QuadraEdenMVC_UI.Models.Article.ArticleModel}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Item.GridView{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{ctxid:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Item._FormView{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Item._SellingItemSubFormView_SpecialUses{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Item._SellingItemSubFormView_SalesTerms{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Item._SellingItemSubFormView{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Item._CaracteristicsItemSubFormView{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Item._VATandTaxesItemSubFormView{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Item._AddTaxesView{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Item.ItemImport{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{ctxid:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Item.New{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{senderId:string,dossierId:number,duplicationArticleId:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Item.test{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{nom:string,test:string}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Item.UploadFile{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{dossierId:number,userMinuteOffset:number,importConfig:string}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Item.Read{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{folderId:number,senderId:string,idArray:$dp.$shared.$Array<number>}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Item.ReadCaracteristiques{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{senderId:string,idArray:$dp.$shared.$Array<number>}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Item.ReadTVA{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{senderId:string,idArray:$dp.$shared.$Array<number>}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Item.ReadArt_NoImprimsurDoc_FluxVente{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{senderId:string,articleId:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Item.ExportCsv{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{dossierId:number,paramColumnsJsonStr:string,fileDownloadToken:string}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Item.ReadRange{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{senderId:string,start:number,limit:number,paramColumns:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Grid.Parameters.ParamColumn>,ctxid:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Item.ReadByCode{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{propertyName:string,value:string,ctxid:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Item.Insert{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{senderId:string,newItems:$dp.$shared.$Array<$dp.$JsNet.QuadraEdenMVC_UI.Models.Article.ArticleModel>}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Item.DuplicateAll{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{senderId:string,paramColumns:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Grid.Parameters.ParamColumn>,prefix:string,separator:string}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Item.DeleteById{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{senderId:string,idArray:$dp.$shared.$Array<number>}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Item.Update{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{senderId:string,idArray:$dp.$shared.$Array<number>,propertyNames:$dp.$shared.$Array<string>,values:$dp.$shared.$Array<Object>}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Item.Save{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{senderId:string,ContextDossier:$dp.$JsNet.QuadraEdenMVC_UI.Models.Dossier.DossierModel,sellingData:$dp.$shared.$Array<$dp.$JsNet.QuadraEdenMVC_UI.Models.Article.ArticleModel>,caracteristicsData:$dp.$shared.$Array<$dp.$JsNet.QuadraEdenMVC_UI.Models.Article.ArticleCaracteristicsModel>,tvaData:$dp.$shared.$Array<$dp.$JsNet.QuadraEdenMVC_UI.Models.Article.Art_TVAModel>}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Utilisateur.InsertOrUpdateUserPreference{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{parentNodeName:string,childNodeName:string,dataJson:string}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Utilisateur.DeleteUserPreference{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{parentNodeName:string,childNodeName:string}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Utilisateur.GetUserPreference{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{parentNodeName:string,childNodeName:string}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Menu.GetMenuFromAjax{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Nomenclature.NomenclatureContextList{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{type:number}
$Return():{}
$Enums():{type: $dp.$JsNet.QuadraEden.Transverse.QuadraEnum.EnumNomenclatureContextType}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Nomenclature.NomenclatureList{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{type:number}
$Return():{}
$Enums():{type: $dp.$JsNet.QuadraEden.Transverse.QuadraEnum.EnumNomenclatureType}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Nomenclature.NomenclatureContextForm{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{type:number}
$Return():{}
$Enums():{type: $dp.$JsNet.QuadraEden.Transverse.QuadraEnum.EnumNomenclatureContextType}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Nomenclature.NomenclatureForm{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{type:number}
$Return():{}
$Enums():{type: $dp.$JsNet.QuadraEden.Transverse.QuadraEnum.EnumNomenclatureType}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Nomenclature.PaymentMethodView{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Nomenclature.RegimeTvaFormView{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Nomenclature.AccountantLinkView{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Nomenclature.TVAView{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Nomenclature.TauxDeviseView{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Nomenclature.CommissionsView{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Nomenclature.TaxesView{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Nomenclature.NomenclatureGenericList{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Nomenclature.NomenclatureGenericForm{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Nomenclature.NomenclatureCategoryGenericList{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Nomenclature.NomenclatureCategoryGenericForm{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Nomenclature.DocumentModeleImpressionListRibbon{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{viewModelClient:string}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Nomenclature.DocumentModeleImpressionForm{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{viewModelClient:string}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Nomenclature.GetContextWithoutFolder{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Nomenclature.GetContextWithFolder{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{dossierId:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Nomenclature.LoadTabletFromAjax{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{typenommenclature:number}
$Return():{}
$Enums():{typenommenclature: $dp.$JsNet.QuadraEden.Transverse.QuadraEnum.EnumNomenclatureType}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Nomenclature.LoadTabletContextFromAjax{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{typenommenclature:number,dossierId:number}
$Return():{}
$Enums():{typenommenclature: $dp.$JsNet.QuadraEden.Transverse.QuadraEnum.EnumNomenclatureContextType}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Nomenclature.LoadModeReglementFromAjax{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{dossierId:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Nomenclature.LoadVentilCptaHTFromAjax{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{dossierId:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Nomenclature.LoadTVAFromAjax{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{dossierId:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Nomenclature.SaveNomenclatureContext{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{tabletctx:$dp.$JsNet.QuadraEden.Transverse.Nomenclature.TabletContext}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Nomenclature.SaveModeReglement{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{modeReglementModel:$dp.$JsNet.QuadraEdenMVC_UI.Models.Commun.ModeReglementModel,dossierId:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Nomenclature.SaveVentilCptaHT{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{ventilCptaHTModel:$dp.$JsNet.QuadraEdenMVC_UI.Models.Commun.VentilCptaHTModel,dossierId:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Nomenclature.SaveRegimeTVA{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{RegimeTVAModel:$dp.$JsNet.QuadraEdenMVC_UI.Models.Commun.RegimeTVAModel}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Nomenclature.DeleteRegimeTVA{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{idToDelete:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Nomenclature.DeleteVentilCptaHT{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{idToDelete:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Nomenclature.SaveTaxe{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{taxeModel:$dp.$JsNet.QuadraEdenMVC_UI.Models.Commun.TaxeModel,dossierId:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Nomenclature.SaveTauxDevise{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{tauxDevise:$dp.$JsNet.QuadraEdenMVC_UI.Models.Commun.TauxDeviseModel,dossierId:number,ConstanteDossierCodeDevise:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Nomenclature.SaveTVA{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{tvaModel:$dp.$JsNet.QuadraEdenMVC_UI.Models.Commun.TVAModel,dossierId:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Nomenclature.DeleteTVA{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{idToDelete:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Nomenclature.SaveNomenclature{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{tablet:$dp.$JsNet.QuadraEden.Transverse.Nomenclature.Tablet}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Nomenclature.DeleteNomenclatureContext{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{tabletctx:$dp.$JsNet.QuadraEden.Transverse.Nomenclature.TabletContext}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Nomenclature.DeleteNomenclature{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{tablet:$dp.$JsNet.QuadraEden.Transverse.Nomenclature.Tablet}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Nomenclature.GetRepresentantsParDossier{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{dossierId:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Nomenclature.GetRepresentants{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{fonctionsId:$dp.$shared.$Array<number>,dossierId:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Nomenclature.InsertOrUpdateTauxCommission{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{representants:$dp.$shared.$Array<$dp.$JsNet.QuadraEdenMVC_UI.Models.Dossier.RepresentantModel>}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Parametrage.General{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{ctxid:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Parametrage.Article{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{ctxid:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Parametrage.Client{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{ctxid:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Parametrage.LawDefinition{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{childDossierId:number,childCode:string,ctxid:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Parametrage.NiveauRelance{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Parametrage.ChildListAjax{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{ctxid:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Parametrage.LoadHeritages{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{childId:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Parametrage.HeritageArticle{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{childId:number,choicesToSave:$dp.$JsNet.QuadraEdenMVC_UI.Models.Parametrage.ArticleChoiceModel}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Parametrage.HeritageClient{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{childId:number,choicesToSave:$dp.$JsNet.QuadraEdenMVC_UI.Models.Parametrage.ClientChoiceModel}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Parametrage.HeritageFournisseur{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{childId:number,choicesToSave:string}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Parametrage.HeritagePropagation{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{transmitterId:number,receptorsId:$dp.$shared.$Array<number>}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Parametrage.GetRgptBundleChamp{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{enumUnivers:number}
$Return():{}
$Enums():{enumUnivers: $dp.$JsNet.QuadraEden.Domain.Parametrage.EnumBundleUnivers}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Parametrage.GetSatelliteTables{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{enumUnivers:number}
$Return():{}
$Enums():{enumUnivers: $dp.$JsNet.QuadraEden.Domain.Parametrage.EnumBundleUnivers}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Parametrage.GetListImportConfig{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{typeImport:number}
$Return():{}
$Enums():{typeImport: $dp.$JsNet.QuadraEden.Transverse.Business.EnumTypeImport}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Parametrage.GetImportConfigById{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{importConfigId:number}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Media.ReadMedia{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{ownerIds:$dp.$shared.$Array<number>}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Media.ReadArt_Media{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{ownerIds:$dp.$shared.$Array<number>}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Media.SaveMedia{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{entityName:string,ownerIds:string,mediaId:number,files:$dp.$shared.$Array<Object>}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Media.DeleteMedia{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{entityName:string,ownerIds:$dp.$shared.$Array<number>,idArray:$dp.$shared.$Array<number>}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
import $dpUrlSet = $dp.$JsNet.$UrlSet;
