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
declare namespace $dp.$JsNet.QuadraEdenMVC_UI.Models {
//#region 'interfaces'
interface ClientExceptionModel
{GUID:string,File:string,LineNumber:string,Stack:string,clientLogs:string}
interface RequestUtilisateur
{UserID:number,ClientId:number,ClaimsUserID:number,ClaimsConnectionString:string,ClaimsAccount:string,HasError:boolean}
//#endregion
//#region 'functions'
var ClientExceptionModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.ClientExceptionModel;
var RequestUtilisateur: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.RequestUtilisateur;
//#endregion
}
declare namespace $dp.$JsNet.QuadraEdenMVC_UI.Models.Request {
//#region 'interfaces'
interface WebserviceSource
{ClientId:number,ClaimsUserID:number,ClaimsConnectionString:string,ClaimsAccount:string,HasError:boolean}
//#endregion
//#region 'functions'
var WebserviceSource: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Request.WebserviceSource;
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
declare namespace $dp.$JsNet.QuadraEdenMVC_UI.Models.Tiers {
//#region 'interfaces'
interface View_AdresseTiersModel
{DossierId:number,TiersId:number,NomPersonne:string,AdresseId:number,CodePostal:string,NomVille:string,NomVoie:string,ComplementAdresse:string,NumVoie:string,Batiment:string,CodePays:string,LibellePays:string,CodeTiers:string}
interface DossierClient_ActiviteModel
{DossierId:number,TiersId:number,ActiviteId:number,Principale:boolean,UtilisateurId:number,DateCreation:Date,DateModif:Date,CreateurId:number}
interface DossierClient_QualifTaxeModel
{DossierId:number,TiersId:number,QualifTaxeId:number,SoumisTaxe:boolean,UtilisateurId:number,DateCreation:Date,DateModif:Date,CreateurId:number}
interface DossierClient_CritereLibreModel
{DossierId:number,TiersId:number,CritereId:number,ValString:string,ComboLibreId:number,UtilisateurId:number,DateCreation:Date,DateModif:Date,CreateurId:number}
interface DossierClient_ReglementModel
{DossierId:number,TiersId:number,Auxiliaire:string,Collectif:string,FamilleComptableId:number,RegimeTVAId:number,DateAttributionEncours:Date,EncoursMaxAutorise:number,EncoursDemande:number,DepassementAutorise:number,FactorId:number,ModeReglementId:number,APartirDe:string,DepartLe:number,PaiementNbJour:number,PaiementLe:number,NbJourInterval:number,NbEcheances:number}
interface DossierClient_PersonneLivreModel
{DossierId:number,TiersId:number,PersonneLivreId:number,Defaut:boolean,IsTiers:boolean,UtilisateurId:number,DateCreation:Date,DateModif:Date,CreateurId:number,PersonneLivre:$dp.$JsNet.QuadraEdenMVC_UI.Models.Commun.PersonneModel}
interface DossierClient_ConditionModel
{DossierId:number,TiersId:number,DeviseId:number,FamilleTarifCliId:number,RemiseLigne1:number,RemiseLigne2:number,RemiseLigne3:number,EnCascade:boolean,RemisePied:number,SoumisEscompte:boolean,Escompte:number,RegroupBLsurFactId:number,SoumisFrais1:boolean,SoumisFrais2:boolean,DepotId:number,TransporteurId:number,ModeleProf:number,ModeleCde:number,ModeleBL:number,ModeleFac:number,ModeleReleveId:number,ReleveFacture:boolean,Facturation:number,ImpObligLivId:number,ImpressionEtiquette:boolean,CoefsurPV:number,SoumisPort1:boolean,FrancoPort1:number,ArtPort1:string,SoumisPort2:boolean,FrancoPort2:number,ArtPort2:string,EANClient:string,EANPlateForme:string,EANFactPapier:string,Allotissement:boolean,EDIExportBL:boolean,EDIExportFact:boolean,Incoterm:number,ModeexpId:number,LieuDispo:number}
interface DossierClientModel
{DossierId:number,TiersId:number,Bloque:boolean,Actif:boolean,Activite:string,DateEntree:Date,DateSortie:Date,Prospect:boolean,ClientDivers:boolean,FamilleCli1Id:number,FamilleCli2Id:number,ImputAnalCliId:number,Representant1Id:number,Representant2Id:number,Representant3Id:number,SecteurGeoId:number,TourneeId:number,SsTourneeId:number,AgenceId:number,ClientFactureId:number,ClientPayeurId:number,MotifSortieId:number,SoumisTaxe:boolean,TiersPayeur:$dp.$JsNet.QuadraEdenMVC_UI.Models.Commun.TiersModel,TiersFacture:$dp.$JsNet.QuadraEdenMVC_UI.Models.Commun.TiersModel,ActiviteList:$dp.$shared.$Array<$dp.$JsNet.QuadraEdenMVC_UI.Models.Tiers.DossierClient_ActiviteModel>,QualifTaxeList:$dp.$shared.$Array<$dp.$JsNet.QuadraEdenMVC_UI.Models.Tiers.DossierClient_QualifTaxeModel>,CritLibreList:$dp.$shared.$Array<$dp.$JsNet.QuadraEdenMVC_UI.Models.Tiers.DossierClient_CritereLibreModel>,ReglementClient:$dp.$JsNet.QuadraEdenMVC_UI.Models.Tiers.DossierClient_ReglementModel,PersonneLivreList:$dp.$shared.$Array<$dp.$JsNet.QuadraEdenMVC_UI.Models.Tiers.DossierClient_PersonneLivreModel>,ConditionClient:$dp.$JsNet.QuadraEdenMVC_UI.Models.Tiers.DossierClient_ConditionModel}
interface DossierTiersModel
{DossierId:number,TiersId:number,CodeTiers:string,PrincipalContact:number,PrincipalIntervenant:number,TexteJuridique:string,Regroupement:string,SiegeGroupe:boolean,LangueId:number,UtilisateurId:number,DateCreation:Date,DateModif:Date,CreateurId:number,TiersInfo:$dp.$JsNet.QuadraEdenMVC_UI.Models.Commun.TiersModel,DossierClientInfo:$dp.$JsNet.QuadraEdenMVC_UI.Models.Tiers.DossierClientModel,AdresseFacture:$dp.$JsNet.QuadraEden.Domain.View_AdresseTiers,AdressePayeur:$dp.$JsNet.QuadraEden.Domain.View_AdresseTiers,NomPersonne:string}
interface View_ClientDetailReglementModel
{ReglementId:number,ModeReglementId:number,CompteCalcule:string,Libelle:string,Montant:number,DeviseAlphabetic:string,NumReglement:string,Nom:string,Code:string,DateReglement:Date,DossierId:number,IsSuccess:boolean,OtherListFailure:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,AllListFailures:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,ListFailure:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,PropertiesToSave:$dp.$shared.$Array<string>}
interface View_ClientReglementModel
{ModeReglementId:number,ModeReglement:string,CompteCalcule:string,Libelle:string,NbReglement:number,MontantTotal:number,DeviseId:number,DeviseAlphabetic:string,DossierId:number,SessionComptabilisationId:number,TypeDocumentId:number,IsSuccess:boolean,OtherListFailure:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,AllListFailures:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,ListFailure:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,PropertiesToSave:$dp.$shared.$Array<string>}
interface View_ClientMontantDuModel
{TiersId:number,DossierId:number,CodeTiers:string,NomPersonne:string,MontantDu:number,AdresseId:number,CodePostal:string,NomVille:string,NomVoie:string,ComplementAdresse:string,Batiment:string,CodePays:string,LibellePays:string,Prospect:boolean,Email:string,Telephone:string,Representant1Id:number,Representant2Id:number,Representant3Id:number,Representant1:string,Representant2:string,Representant3:string,Regroupement:string,ExisteDeviseEtrangere:boolean,IsSuccess:boolean,OtherListFailure:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,AllListFailures:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,ListFailure:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,PropertiesToSave:$dp.$shared.$Array<string>}
interface View_ClientsWithEmailModel
{TiersId:number,PersonneId:number,CodeTiers:string,Nom:string,Prenom:string,Email:string,DossierId:number,IsSuccess:boolean,OtherListFailure:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,AllListFailures:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,ListFailure:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,PropertiesToSave:$dp.$shared.$Array<string>}
interface View_DossierTiersModel
{DossierId:number,TiersId:number,CodeTiers:string,IdNatureJuridique:number,Regroupement:string,SiegeGroupe:boolean,PersonneId:number,NomPersonne:string,PrenomPersonne:string,CodePersonne:string,Siret:string,APE:string,Sexe:string,TypePersonne:number,Enseigne:string,AdresseId:number,CodePostal:string,NomVille:string,NomVoie:string,ComplementAdresse:string,NumVoie:string,Batiment:string,CodePays:string,LibellePays:string,UtilisateurId:number,DateCreation:Date,DateModif:Date,CreateurId:number,NumeroTelephone:string,NumeroFax:string,Actif:boolean,Prospect:boolean,FamilleCli1Id:number,FamilleCli2Id:number,Auxiliaire:string,Collectif:string,ActiviteId:number,Activite:string,FamilleCli1_Libelle:string,FamilleCli2_Libelle:string,Representant1:string,Representant2:string,Representant3:string,Representant1Id:number,Representant2Id:number,Representant3Id:number,ClientDivers:boolean,Bloque:boolean,Email:string,RegimeTVAId:number,FamilleComptableId:number,ModeReglementId:number,DeviseId:number,IsTTC:boolean,IsSuccess:boolean,OtherListFailure:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,AllListFailures:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,ListFailure:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,PropertiesToSave:$dp.$shared.$Array<string>}
interface View_AdresseLivraisonTiersModel
{AdresseId:number,Batiment:string,CodePays:string,CodePostal:string,CodeTiers:string,ComplementAdresse:string,DossierId:number,LibellePays:string,NomPersonne:string,NomVille:string,NomVoie:string,NumVoie:string,PersonneId:number,PrenomPersonne:string,Regroupement:string,SiegeGroupe:boolean,TiersId:number,IsSuccess:boolean,OtherListFailure:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,AllListFailures:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,ListFailure:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,PropertiesToSave:$dp.$shared.$Array<string>}
interface PostDossierTiersModel
{isModeCreation:boolean,dossierIdCtx:number,DuplicationTiersId:number,dtToSave:$dp.$JsNet.QuadraEdenMVC_UI.Models.Tiers.DossierTiersModel}
//#endregion
//#region 'functions'
var View_AdresseTiersModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Tiers.View_AdresseTiersModel;
var DossierClient_ActiviteModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Tiers.DossierClient_ActiviteModel;
var DossierClient_QualifTaxeModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Tiers.DossierClient_QualifTaxeModel;
var DossierClient_CritereLibreModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Tiers.DossierClient_CritereLibreModel;
var DossierClient_ReglementModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Tiers.DossierClient_ReglementModel;
var DossierClient_PersonneLivreModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Tiers.DossierClient_PersonneLivreModel;
var DossierClient_ConditionModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Tiers.DossierClient_ConditionModel;
var DossierClientModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Tiers.DossierClientModel;
var DossierTiersModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Tiers.DossierTiersModel;
var View_ClientDetailReglementModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Tiers.View_ClientDetailReglementModel;
var View_ClientReglementModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Tiers.View_ClientReglementModel;
var View_ClientMontantDuModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Tiers.View_ClientMontantDuModel;
var View_ClientsWithEmailModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Tiers.View_ClientsWithEmailModel;
var View_DossierTiersModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Tiers.View_DossierTiersModel;
var View_AdresseLivraisonTiersModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Tiers.View_AdresseLivraisonTiersModel;
var PostDossierTiersModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Tiers.PostDossierTiersModel;
//#endregion
}
declare namespace $dp.$JsNet.QuadraEdenMVC_UI.Models.Commun {
//#region 'interfaces'
interface AdresseModel
{Id:number,NomVoie:string,ComplementAdresse:string,Batiment:string,CodePostal:string,CodeInsee:string,NomVille:string,CodePays:string,Bulk_ID:string,Latitude:number,Longitude:number,LibellePays:string}
interface AdresseMailModel
{ID:number,Email:string,ID_Type:number,Bulk_ID:string}
interface TelephoneModel
{ID:number,Numero:string,ID_Type:number,Bulk_ID:string}
interface PersonneModel
{ID:number,Code:string,Nom:string,Prenom:string,IdCivilite:number,IdNatureJuridique:number,Sexe:string,Enseigne:string,TypePersonne:number,Bulk_ID:string,Logo:$dp.$shared.$Array<number>,LogoFormat:string,AdressePost:$dp.$JsNet.QuadraEdenMVC_UI.Models.Commun.AdresseModel,MailList:$dp.$shared.$Array<$dp.$JsNet.QuadraEdenMVC_UI.Models.Commun.AdresseMailModel>,TelephoneList:$dp.$shared.$Array<$dp.$JsNet.QuadraEdenMVC_UI.Models.Commun.TelephoneModel>}
interface TiersModel
{ID:number,IdPersonne:number,LogoFormat:string,DateEntree:Date,DateSortie:Date,Code:string,SiteWeb:string,NIF:string,APE:string,SIRET:string,RCS:string,DUNS:string,Capital:number,Effectif:number,Bloque:boolean,Prospect:boolean,Bulk_ID:string,PersonneInfo:$dp.$JsNet.QuadraEdenMVC_UI.Models.Commun.PersonneModel}
interface VentilCptaHTModel
{Identifier:number,FamCptTiersId:number,FamCptArtId:number,CompteHTVenteN:string,IsSuccess:boolean,OtherListFailure:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,AllListFailures:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,ListFailure:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,PropertiesToSave:$dp.$shared.$Array<string>}
interface TauxDeviseModel
{TauxDeviseId:number,DossierId:number,DeviseNumeric:number,DateTaux:Date,Taux:number,DateCreation:Date,DateModif:Date,UtilisateurId:number,CreateurId:number,IsSuccess:boolean,OtherListFailure:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,AllListFailures:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,ListFailure:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,PropertiesToSave:$dp.$shared.$Array<string>}
interface Dossier_TVAModel
{Dossier_TVAId:number,DossierId:number,TVAId:number,CompteTVAVenteN:string,CompteTVAVenteR:string,CompteTVAAchatN:string,CompteTVAAchatR:string,CompteTVAAutoLiquid:string,UtilisateurId:number,DateCreation:Date,DateModif:Date,CreateurId:number}
interface ModeReglementModel
{Identifier:number,Code:string,Libelle:string,LibelleCompta:string,APartirDe:number,DepartLe:number,PaiementNbJour:number,PaiementLe:number,NbJourInterval:number,NbEcheances:number,CategorieReglementId:number,Compte:string,System:boolean,IsSuccess:boolean,OtherListFailure:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,AllListFailures:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,ListFailure:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,PropertiesToSave:$dp.$shared.$Array<string>}
interface RegimeTVAModel
{Identifier:number,Code:string,Libelle:string,Motif:string,DateCreation:Date,DateModif:Date,UtilisateurId:number,CreateurId:number,ExternalGroupId:number,System:boolean,IsSuccess:boolean,OtherListFailure:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,AllListFailures:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,ListFailure:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,PropertiesToSave:$dp.$shared.$Array<string>}
interface TaxeModel
{DossierId:number,Identifier:number,Code:string,Libelle:string,ExternalGroupId:number,TypeMontantId:number,TypeCalculTaxeId:number,RegleCalcul:string,ValHTAchat:number,ValHTVente:number,FamilleComptableArtId:number,CompteHTAchat:string,CompteHTVente:string,TTC:boolean,FamilleTVA1Id:number,UtilisateurId:number,DateCreation:Date,DateModif:Date,CreateurId:number,FamilleTVA2Id:number,FamilleTVA3Id:number,IsSuccess:boolean,OtherListFailure:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,AllListFailures:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,ListFailure:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,PropertiesToSave:$dp.$shared.$Array<string>}
interface PersonneMediaModel
{ID:number,Logo:$dp.$shared.$Array<number>,LogoFormat:string}
interface Dos_MailConfigModel
{TypeDocumentId:number,DossierId:number,Objet:string,Message:string,Signature:string,IsSuccess:boolean,OtherListFailure:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,AllListFailures:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,ListFailure:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,PropertiesToSave:$dp.$shared.$Array<string>}
interface GenericNomenclatureModel
{Identifier:number,Code:string,Libelle:string,ExternalGroupId:string,DossierId:number,System:boolean}
interface PhapPropertyMetaData
{propertyNames:$dp.$shared.$Array<string>,ignoredPropertyNames:$dp.$shared.$Array<string>}
interface TVAModel
{TVAId:number,RegimeTVAId:number,LocalisTaxeId:number,FamilleTVAId:number,TauxTVAVenteN:number,TauxTVAAchatN:number,TauxTVAVenteR:number,TauxTVAAchatR:number,TVAAutoLiquid:boolean,TVANonPercue:boolean,TVAApplicationId:number,UtilisateurId:number,DateCreation:Date,DateModif:Date,CreateurId:number,TVA_compte:$dp.$JsNet.QuadraEdenMVC_UI.Models.Commun.Dossier_TVAModel,IsSuccess:boolean,OtherListFailure:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,AllListFailures:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,ListFailure:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,PropertiesToSave:$dp.$shared.$Array<string>}
interface SmtpMessageModel
{FromAddress:string,ToAddress:string,Body:string,Subject:string,Cc:string,Bcc:string}
interface AppContextModel
{TabletList:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Nomenclature.Tablet>,TabletContextList:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Nomenclature.TabletContext>,VentilCptaHTList:$dp.$shared.$Array<$dp.$JsNet.QuadraEdenMVC_UI.Models.Commun.VentilCptaHTModel>,TauxDeviseList:$dp.$shared.$Array<$dp.$JsNet.QuadraEdenMVC_UI.Models.Commun.TauxDeviseModel>,TVAList:$dp.$shared.$Array<$dp.$JsNet.QuadraEdenMVC_UI.Models.Commun.TVAModel>,ModeReglementList:$dp.$shared.$Array<$dp.$JsNet.QuadraEdenMVC_UI.Models.Commun.ModeReglementModel>,RegimeTvaList:$dp.$shared.$Array<$dp.$JsNet.QuadraEdenMVC_UI.Models.Commun.RegimeTVAModel>,ViewRepresentantList:$dp.$shared.$Array<$dp.$JsNet.QuadraEdenMVC_UI.Models.Dossier.View_RepresentantModel>,TaxeList:$dp.$shared.$Array<$dp.$JsNet.QuadraEdenMVC_UI.Models.Commun.TaxeModel>}
interface SecondaryCompanyViewModel_ed
{IsActive:boolean,DepuisLe:Date,CodeApe:string,TrancheEffectifSalarie:string,Supplier:$dp.$JsNet.Cegid.ScanOcr.Api.CommonSupplier.Models.SupplierModel,Statut:string,IsPrincipal:boolean,LastChecked:Date,FormeJuridique:string,CapitalSocial:string,Address:string,Postcode:string,City:string,Country:string,Siret:string,Name:string,Siren:string,NoTva:string,Rank:number,IsExactMatch:boolean}
//#endregion
//#region 'functions'
var AdresseModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Commun.AdresseModel;
var AdresseMailModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Commun.AdresseMailModel;
var TelephoneModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Commun.TelephoneModel;
var PersonneModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Commun.PersonneModel;
var TiersModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Commun.TiersModel;
var VentilCptaHTModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Commun.VentilCptaHTModel;
var TauxDeviseModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Commun.TauxDeviseModel;
var Dossier_TVAModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Commun.Dossier_TVAModel;
var ModeReglementModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Commun.ModeReglementModel;
var RegimeTVAModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Commun.RegimeTVAModel;
var TaxeModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Commun.TaxeModel;
var PersonneMediaModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Commun.PersonneMediaModel;
var Dos_MailConfigModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Commun.Dos_MailConfigModel;
var GenericNomenclatureModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Commun.GenericNomenclatureModel;
var PhapPropertyMetaData: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Commun.PhapPropertyMetaData;
var TVAModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Commun.TVAModel;
var SmtpMessageModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Commun.SmtpMessageModel;
var AppContextModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Commun.AppContextModel;
var SecondaryCompanyViewModel_ed: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Commun.SecondaryCompanyViewModel_ed;
//#endregion
}
declare namespace $dp.$JsNet.QuadraEden.Domain {
//#region 'interfaces'
interface View_AdresseTiers
{DossierId:number,TiersId:number,NomPersonne:string,AdresseId:number,CodePostal:string,NomVille:string,NomVoie:string,ComplementAdresse:string,NumVoie:string,Batiment:string,CodePays:string,LibellePays:string,CodeTiers:string}
interface DocumentStyle
{DocumentStyleId:number,DocumentModeleId:number,Libelle:string,FichierPath:string,Couleur:string,Media:string,SingleId:number,SinglePk:string}
interface DocumentModeleImpressionDestinataire
{DocumentModeleImpressionDestinataireId:number,Libelle:string}
interface DocumentTypePerso
{DocumentTypePersoId:number,PereId:number,TypeDocumentId:number,Code:string,Libelle:string,Fils:$dp.$shared.$Array<string>,Position:number,EnumTypeDocument:number}
interface SessionComptabilisation
{SessionComptabilisationId:number,Libelle:string,UtilisateurId:number,DateCreation:Date,DateModif:Date,CreateurId:number,Debut:Date,Fin:Date,DocumentId:number}
interface DocumentModele
{DocumentModeleId:number,TypeDocumentId:number,Libelle:string,FichierPath:string,DocumentStyleList:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Domain.DocumentStyle>,SingleId:number,SinglePk:string}
interface DocumentModeleImpressionPerso
{DocumentTypePersoId:number,DocumentModeleImpressionId:number,Visible:boolean,DocumentTypePerso:$dp.$JsNet.QuadraEden.Domain.DocumentTypePerso}
interface EffetFacture
{EffetFactureId:number,FactureId:number,DateEcheance:Date,ModeReglementId:number,Montant:number,UtilisateurId:number,DateCreation:Date,DateModif:Date,CreateurId:number,PointageId:number,Pointage:$dp.$JsNet.QuadraEden.Domain.Pointage,Ecart:boolean,EtatId:number,SessionComptabilisationId:number,NiveauRelanceId:number,DateDerniereRelance:Date,NumDoc:string,DateDocument:Date}
interface Reglement
{ReglementId:number,DossierId:number,DateReglement:Date,NumReglement:string,ModeReglementId:number,BanqueId:number,NumCheque:number,Emetteur:string,TiersId:number,Montant:number,DeviseId:number,RemisEnBanque:boolean,BlocNote:string,UtilisateurId:number,DateCreation:Date,DateModif:Date,CreateurId:number,TauxDev:number,PointageId:number,Pointage:$dp.$JsNet.QuadraEden.Domain.Pointage,EtatId:number,SessionComptabilisationId:number}
interface DocumentModeleImpression
{DocumentModeleImpressionId:number,DocumentStyleId:number,DocumentModeleId:number,DossierId:number,DocumentModeleImpressionDestinataireId:number,Libelle:string,UtilisateurId:number,CreateurId:number,DateCreation:Date,DateModif:Date,DocumentModele:$dp.$JsNet.QuadraEden.Domain.DocumentModele,DocumentModeleImpressionDestinataire:$dp.$JsNet.QuadraEden.Domain.DocumentModeleImpressionDestinataire,DocumentStyle:$dp.$JsNet.QuadraEden.Domain.DocumentStyle,DocumentModeleImpressionPersoList:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Domain.DocumentModeleImpressionPerso>,DocumentModeleImpressionDestinataire_Enum:number,EnCreation:boolean}
interface Pointage
{PointageId:number,DossierId:number,TiersId:number,DatePointage:Date,Lettrage:string,UtilisateurId:number,DateCreation:Date,DateModif:Date,CreateurId:number,EffetFacture:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Domain.EffetFacture>,Reglement:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Domain.Reglement>,Test_EffetFacture:$dp.$JsNet.QuadraEden.Domain.EffetFacture,EstLettrageTotal:boolean,IsSuccess:boolean,OtherListFailure:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,AllListFailures:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,ListFailure:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,PropertiesToSave:$dp.$shared.$Array<string>}
//#endregion
//#region 'functions'
var View_AdresseTiers: () => $dp.$JsNet.QuadraEden.Domain.View_AdresseTiers;
var DocumentStyle: () => $dp.$JsNet.QuadraEden.Domain.DocumentStyle;
var DocumentModeleImpressionDestinataire: () => $dp.$JsNet.QuadraEden.Domain.DocumentModeleImpressionDestinataire;
var DocumentTypePerso: () => $dp.$JsNet.QuadraEden.Domain.DocumentTypePerso;
var SessionComptabilisation: () => $dp.$JsNet.QuadraEden.Domain.SessionComptabilisation;
var DocumentModele: () => $dp.$JsNet.QuadraEden.Domain.DocumentModele;
var DocumentModeleImpressionPerso: () => $dp.$JsNet.QuadraEden.Domain.DocumentModeleImpressionPerso;
var EffetFacture: () => $dp.$JsNet.QuadraEden.Domain.EffetFacture;
var Reglement: () => $dp.$JsNet.QuadraEden.Domain.Reglement;
var DocumentModeleImpression: () => $dp.$JsNet.QuadraEden.Domain.DocumentModeleImpression;
var Pointage: () => $dp.$JsNet.QuadraEden.Domain.Pointage;
//#endregion
}
declare namespace $dp.$JsNet.QuadraEdenMVC_UI.Models.Tiers.Request {
//#region 'interfaces'
interface RequestPostTiers
{DossierTiersToSend:$dp.$JsNet.QuadraEdenMVC_UI.Models.Tiers.DossierTiersModel,ClientId:number,ClaimsUserID:number,ClaimsConnectionString:string,ClaimsAccount:string,HasError:boolean}
//#endregion
//#region 'functions'
var RequestPostTiers: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Tiers.Request.RequestPostTiers;
//#endregion
}
declare namespace $dp.$JsNet.QuadraEdenMVC_UI.Models.Statistique {
//#region 'interfaces'
interface CaGeneriqueModel
{DossierId:number,Month:number,Year:number,CA:number}
interface CaMargeModel
{Marge:number,DossierId:number,Month:number,Year:number,CA:number}
interface CaAnnuelModel
{CA1:number,DossierId:number,Month:number,Year:number,CA:number}
interface ReglementsRetardModel
{DossierId:number,Date:Date,Montant:number,Nombre:number}
interface RepresentantScoreModel
{Nombre:number,HTNet:number,RepresentantId:number,ID_PERSONNE:number,Nom:string,Prenom:string}
//#endregion
//#region 'functions'
var CaGeneriqueModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Statistique.CaGeneriqueModel;
var CaMargeModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Statistique.CaMargeModel;
var CaAnnuelModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Statistique.CaAnnuelModel;
var ReglementsRetardModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Statistique.ReglementsRetardModel;
var RepresentantScoreModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Statistique.RepresentantScoreModel;
//#endregion
}
declare namespace $dp.$JsNet.QuadraEdenMVC_UI.Models.Report {
//#region 'interfaces'
interface FactureReport_PageGarde
{Title:string}
interface FactureReport_Entete
{CodeClient:string,NomVoie:string,Ville:string,CodePostal:string,Pays:string}
interface FactureReport_Line
{CodeArticle:string,PrixUnit:number}
interface FactureReport_Footer
{SIRET:string,APE:string,DUNS:string,Telephone:string}
interface FactureReport_Body
{TitleBody:string,ListLineData:$dp.$shared.$Array<$dp.$JsNet.QuadraEdenMVC_UI.Models.Report.FactureReport_Line>}
interface FactureReportContainer
{typePiece:string,PageGardeData:$dp.$JsNet.QuadraEdenMVC_UI.Models.Report.FactureReport_PageGarde,EnteteData:$dp.$JsNet.QuadraEdenMVC_UI.Models.Report.FactureReport_Entete,BodyData:$dp.$JsNet.QuadraEdenMVC_UI.Models.Report.FactureReport_Body,FooterData:$dp.$JsNet.QuadraEdenMVC_UI.Models.Report.FactureReport_Footer}
//#endregion
//#region 'functions'
var FactureReport_PageGarde: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Report.FactureReport_PageGarde;
var FactureReport_Entete: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Report.FactureReport_Entete;
var FactureReport_Line: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Report.FactureReport_Line;
var FactureReport_Footer: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Report.FactureReport_Footer;
var FactureReport_Body: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Report.FactureReport_Body;
var FactureReportContainer: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Report.FactureReportContainer;
//#endregion
}
declare namespace $dp.$JsNet.QuadraEdenMVC_UI.Models.Piece {
//#region 'interfaces'
interface IPieceModel
{Id:number,NumDoc:string,DossierId:number,TiersId:number,EtatId:number,AdresseGeneral:$dp.$JsNet.QuadraEdenMVC_UI.Models.Tiers.View_AdresseTiersModel,AdressePayeur:$dp.$JsNet.QuadraEdenMVC_UI.Models.Tiers.View_AdresseTiersModel,AdresseFacture:$dp.$JsNet.QuadraEdenMVC_UI.Models.Tiers.View_AdresseTiersModel,IsPieceLocked:boolean,IsAcompteManagerLocked:boolean,EstModifiable_wf:boolean,PossedeReglement:boolean,DocumentId:number,DocumentDuplicataId:number,TypeFactureId:number}
interface AcompteModel
{AcompteId:number,DateEcheance:Date,Pourcentage:number,Montant:number,ModeReglementId:number,EtatId:number,SessionComptabilisationId:number,UtilisateurId:number,DateCreation:Date,DateModif:Date,CreateurId:number,NumOrdre:number,ReglementId:number}
interface DatasCustomerReglModel
{Code:string,Nom:string,NomVille:string,TypePersonne:boolean,DeviseIdList:$dp.$shared.$Array<number>,DeviseIdDefault:number}
interface Fn_PieceModel
{DossierId:number,PieceId:number,DateDocument:Date,NumDoc:string,EtatId:number,EtatCode:number,EtatLibelle:string,TiersId:number,CodeTiers:string,NomTiers:string,Batiment:string,NomVoie:string,ComplementAdresse:string,CodePostal:string,NomVille:string,CodePays:string,LibellePays:string,Representant1:string,Representant2:string,Representant3:string,Representant1Id:number,Representant2Id:number,Representant3Id:number,Interlocuteur:string,Redacteur:string,EmailInterlocuteur:string,TelInterlocuteur:string,SuiviPar:string,SuiviParId:number,DateRelance:Date,IsLockedFromRgt:boolean,TypeFactureId:number,DeviseId:number,DeviseCode:string,DeviseLibelle:string,FactureHT:boolean,BlocNote:string,HTNet:number,TTCNet:number,MontantTVA:number,ReferenceInterne:string,ReferenceInterneBis:string,ReferenceExterne:string,ReferenceExterneBis:string,ModeReglementId:number,UtilisateurId:number,CreateurId:number,DateCreation:Date,DateModif:Date,NumSource:string,DateSource:string,TypeSource:string,MontantTotalAcompte_NonRegle:number,IsSuccess:boolean,OtherListFailure:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,AllListFailures:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,ListFailure:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,PropertiesToSave:$dp.$shared.$Array<string>}
interface BrouillonSlickModel
{BrouillonId:number,DossierId:number,DateDocument:Date,TypeFluxId:number,EtatId:number,TiersId:number,ReferenceInterne:string,RegimeTVAId:number,DeviseId:number,FactureHT:boolean,RemisePied:number,SoumisTaxe:boolean,Frais1:number,Frais2:number,EnCascade:boolean,BlocNote:string,UtilisateurId:number,CreateurId:number,DateCreation:Date,DateModif:Date,HTNet:number,TTCNet:number,Nom:string,Prenom:string,IsSuccess:boolean,OtherListFailure:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,AllListFailures:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,ListFailure:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,PropertiesToSave:$dp.$shared.$Array<string>}
interface Fn_FactureComptableModel
{FactureId:number,tiersId:number,CodeTiers:string,EtatId:number,SessionComptabilisationId:number,EtatLibelle:string,Nom:string,DossierId:number,Auxiliaire:string,NumDoc:string,DateDocument:Date,HTNetProduits:number,HTFraisEtTaxes:number,TVA:number,TauxMoyenTVA:number,TTCNet:number,TauxDev:number,ModeReglementId:number,Anomalie:boolean,DeviseId:number,HTNetProduits_DeviseDossier:number,HTFraisEtTaxes_DeviseDossier:number,TVA_DeviseDossier:number,TTCNet_DeviseDossier:number,IsSuccess:boolean,OtherListFailure:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,AllListFailures:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,ListFailure:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,PropertiesToSave:$dp.$shared.$Array<string>}
interface Fn_RecapFactureComptableModel
{Compte:string,TypeCompteId:number,Credit:number,Debit:number,IsSuccess:boolean,OtherListFailure:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,AllListFailures:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,ListFailure:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,PropertiesToSave:$dp.$shared.$Array<string>}
interface Fn_RecapReglementFactureModel
{ModeReglementId:number,Montant:number,IsSuccess:boolean,OtherListFailure:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,AllListFailures:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,ListFailure:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,PropertiesToSave:$dp.$shared.$Array<string>}
interface LigneBrouillonTaxeModel
{LigneBrouillonId:number,TaxeId:number,QualifTaxeId:number,Coef:number,ValHTAchat:number,ValHTVente:number,TTC:boolean,FamilleTVA1Id:number,FamilleTVA2Id:number,FamilleTVA3Id:number,TypeCalculTaxeId:number,TypeMontantId:number,TauxTVA:number,UtilisateurId:number,DateCreation:Date,DateModif:Date,CreateurId:number}
interface LigneBrouillonModel
{LigneBrouillonId:number,BrouillonId:number,NumOrdre:number,TypeligneId:number,Modifiable:boolean,ArticleId:number,PrixpourQte:number,QteMiniV:number,ParMultipleVTE:number,FamilleTVAId:number,Libelle1:string,Libelle2:string,Libelle3:string,Libelle4:string,Qte:number,MesureId:number,PUHT:number,PUTTC:number,PANet:number,RemiseLigne1:number,RemiseLigne2:number,RemiseLigne3:number,TauxTVA:number,TVANonPercue:boolean,BaseTVA:number,ValeurTVA:number,MontantHT:number,MontantTTC:number,BlocNote:string,UtilisateurId:number,DateCreation:Date,DateModif:Date,CreateurId:number,TaxeList:$dp.$shared.$Array<$dp.$JsNet.QuadraEdenMVC_UI.Models.Piece.LigneBrouillonTaxeModel>,AfficheDetail:boolean,MargeLigne:number,MargePct:number,MargeCoeff:number}
interface BrouillonModel
{BrouillonId:number,DossierId:number,DateDocument:Date,TypeFluxId:number,EtatId:number,TiersId:number,ReferenceInterne:string,RegimeTVAId:number,DeviseId:number,FactureHT:number,RemisePied:number,SoumisTaxe:boolean,Frais1:number,Frais2:number,HTNet:number,TTCNet:number,EnCascade:boolean,BlocNote:string,FamTVAFf1Id:number,FamTVAFf2Id:number,TauxTVAFf1:number,TauxTVAFf2:number,HTNetProduits:number,HTFraisEtTaxes:number,TVA:number,TauxDev:number,LigneBrouillonList:$dp.$shared.$Array<$dp.$JsNet.QuadraEdenMVC_UI.Models.Piece.LigneBrouillonModel>,UtilisateurId:number,CreateurId:number,DateCreation:Date,DateModif:Date}
interface LignePieceTaxeModel
{LignePieceId:number,TaxeId:number,QualifTaxeId:number,Coef:number,ValHTAchat:number,ValHTVente:number,FamilleComptableArtId:number,CompteHTVente:string,TTC:boolean,FamilleTVA1Id:number,FamilleTVA2Id:number,FamilleTVA3Id:number,TypeCalculTaxeId:number,TypeMontantId:number,TauxTVA:number,CompteTVA:string,UtilisateurId:number,DateCreation:Date,DateModif:Date,CreateurId:number}
interface Piece_ComptabiliteModel
{PieceId:number,RegimeTVAId:number,FamilleComptableTiersId:number,Auxiliaire:string,LibelleComptable:string,Comptabilisee:string,TypeCalculTVA:number}
interface Piece_FacturationModel
{PieceId:number,DeviseId:number,FactureHT:number,RemisePied:number,EnCascade:boolean,TauxDev:number,HTNet:number,TTCNet:number,SoumisTaxe:boolean,SoumisEscompte:boolean,Escompte:number,ClientFactureId:number,Frais1:number,Frais2:number,FamTVAFf1Id:number,FamTVAFf2Id:number,TauxTVAFf1:number,TauxTVAFf2:number,CompteHTFf1:string,CompteHTFf2:string,CompteTVAFf1:string,CompteTVAFf2:string,HTNetProduits:number,HTFraisEtTaxes:number,TVA:number,Nom:string,NomVoie:string,ComplementAdresse:string,Batiment:string,CodePostal:string,NomVille:string,CodePays:string,LibellePays:string,NomPersonne:string}
interface Piece_LivraisonModel
{PieceId:number,Nom:string,NomVoie:string,ComplementAdresse:string,Batiment:string,CodePostal:string,NomVille:string,CodePays:string,LibellePays:string}
interface Piece_NoteModel
{PieceId:number,PageGarde:string,Recapitulatif:string}
interface Piece_ReglementModel
{PieceId:number,ClientPayeurId:number,Reglee:string,AccesFirstEcheance:boolean,FirstEcheance:Date,ConditionsPaiement:string,ModeReglementId:number,APartirDe:string,DepartLe:number,PaiementNbJour:number,PaiementLe:number,NbJourInterval:number,NbEcheances:number}
interface Piece_RepresentantModel
{PieceId:number,Representant1Id:number,Representant2Id:number,Representant3Id:number,TauxCommission1:number,TauxCommission2:number,TauxCommission3:number}
interface Piece_SuiviModel
{PieceId:number,InterlocuteurId:number,NomInterlocuteur:string,EmailInterlocuteur:string,TelInterlocuteur:string,RedacteurId:number,SuiviParId:number,DureeValiditeId:number,DateRelance:Date,DureeValidite:string}
interface LignePieceModel
{LignePieceId:number,PieceId:number,NumOrdre:number,TypeligneId:number,Modifiable:boolean,ArticleId:number,Libelle1:string,Libelle2:string,Libelle3:string,Libelle4:string,Qte:number,MesureId:number,PUHT:number,PUTTC:number,RemiseLigne1:number,RemiseLigne2:number,RemiseLigne3:number,TauxTVA:number,BaseTVA:number,ValeurTVA:number,MontantHT:number,MontantTTC:number,PANet:number,FamilleTVAId:number,CompteTVA:string,PrixpourQte:number,QteMiniV:number,ParMultipleVTE:number,TVANonPercue:boolean,FamilleComptableId:number,CompteHTV:string,BlocNote:string,VisuCptV:boolean,ModifTVA:boolean,ModifCptV:boolean,UtilisateurId:number,DateCreation:Date,DateModif:Date,CreateurId:number,TaxeList:$dp.$shared.$Array<$dp.$JsNet.QuadraEdenMVC_UI.Models.Piece.LignePieceTaxeModel>,AfficheDetail:boolean,MargeLigne:number,MargePct:number,MargeCoeff:number}
interface PieceModel
{PieceId:number,DossierId:number,DateDocument:Date,TypeFluxId:number,NumDoc:string,IndiceRevision:number,EtatId:number,IndiceConfiance:number,TiersId:number,ReferenceInterne:string,ReferenceInterneBis:string,ReferenceExterne:string,ReferenceExterneBis:string,BlocNote:string,UtilisateurId:number,DateCreation:Date,DateModif:Date,CreateurId:number,ComptabiliteInfo:$dp.$JsNet.QuadraEdenMVC_UI.Models.Piece.Piece_ComptabiliteModel,FacturationInfo:$dp.$JsNet.QuadraEdenMVC_UI.Models.Piece.Piece_FacturationModel,LivraisonInfo:$dp.$JsNet.QuadraEdenMVC_UI.Models.Piece.Piece_LivraisonModel,NoteInfo:$dp.$JsNet.QuadraEdenMVC_UI.Models.Piece.Piece_NoteModel,ReglementInfo:$dp.$JsNet.QuadraEdenMVC_UI.Models.Piece.Piece_ReglementModel,RepresentantInfo:$dp.$JsNet.QuadraEdenMVC_UI.Models.Piece.Piece_RepresentantModel,SuiviInfo:$dp.$JsNet.QuadraEdenMVC_UI.Models.Piece.Piece_SuiviModel,LignePieceList:$dp.$shared.$Array<$dp.$JsNet.QuadraEdenMVC_UI.Models.Piece.LignePieceModel>,Acomptes:$dp.$shared.$Array<$dp.$JsNet.QuadraEdenMVC_UI.Models.Piece.AcompteModel>,AdresseGeneral:$dp.$JsNet.QuadraEdenMVC_UI.Models.Tiers.View_AdresseTiersModel,AdressePayeur:$dp.$JsNet.QuadraEdenMVC_UI.Models.Tiers.View_AdresseTiersModel,AdresseFacture:$dp.$JsNet.QuadraEdenMVC_UI.Models.Tiers.View_AdresseTiersModel,TypePieceEnum:number,IsPieceLocked:boolean,IsAcompteManagerLocked:boolean,Id:number,EstModifiable_wf:boolean,PossedeReglement:boolean,DocumentId:number,DocumentDuplicataId:number,TypeFactureId:number,OrigineId:number,TypeDocOrigId:number,NumDocOrig:string,EtatOrigId:number,DestinationId:number,TypeDocDestId:number,NumDocDest:string}
interface ReglementModel
{ReglementId:number,DossierId:number,DateReglement:Date,Montant:number,NumReglement:string,ModeReglementId:number,BanqueId:number,NumCheque:number,PointageId:number,Emetteur:string,TiersId:number,DeviseId:number,RemisEnBanque:boolean,BlocNote:string,UtilisateurId:number,DateCreation:Date,DateModif:Date,CreateurId:number,TauxDev:number,EtatId:number,IsSuccess:boolean,OtherListFailure:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,AllListFailures:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,ListFailure:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,PropertiesToSave:$dp.$shared.$Array<string>}
interface EffetFactureModel
{EffetFactureId:number,FactureId:number,DateEcheance:Date,ModeReglementId:number,Montant:number,UtilisateurId:number,DateCreation:Date,DateModif:Date,CreateurId:number,PointageId:number,NumDoc:string,DateDocument:Date,EtatId:number}
interface PointageModel
{PointageId:number,DossierId:number,TiersId:number,DatePointage:Date,Lettrage:string,UtilisateurId:number,DateCreation:Date,DateModif:Date,CreateurId:number,EffetFacture:$dp.$shared.$Array<$dp.$JsNet.QuadraEdenMVC_UI.Models.Piece.EffetFactureModel>,Reglement:$dp.$shared.$Array<$dp.$JsNet.QuadraEdenMVC_UI.Models.Piece.ReglementModel>}
interface SessionPointageBlockContentModel
{EfEcRegID:number,TypeDocumentId:number,Montant:number,ModeReglementId:number,DateDocument:Date,NumDoc:string,DateFacture:Date,DataSorter:number,IsComptabilise:boolean}
interface SessionPointageBlockModel
{MontantDu:number,MontantRegle:number,MontantDiff:number,PointageId:number,DossierId:number,TiersId:number,DatePointage:Date,Lettrage:string,ContentList:$dp.$shared.$Array<$dp.$JsNet.QuadraEdenMVC_UI.Models.Piece.SessionPointageBlockContentModel>}
interface SessionPointageListModel
{TotalMontantDu:number,TotalMontantRegle:number,TotalMontantDiff:number,PointageList:$dp.$shared.$Array<$dp.$JsNet.QuadraEdenMVC_UI.Models.Piece.SessionPointageBlockModel>}
interface View_EffetFactureModel
{EffetFactureId:number,FactureId:number,DateEcheance:Date,ModeReglementId:number,Montant:number,Lettrage:string,DossierId:number,TiersId:number,DeviseId:number,NumDoc:string,KeyCompositeConcat:string,DateDocument:Date,DatePointage:Date,PointageId:number,DateCreation:Date,DateModif:Date,CreateurId:number,UtilisateurId:number,Ecart:boolean,IsSuccess:boolean,OtherListFailure:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,AllListFailures:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,ListFailure:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,PropertiesToSave:$dp.$shared.$Array<string>}
interface View_ReglementModel
{ReglementId:number,DossierId:number,DateReglement:Date,NumReglement:string,ModeReglementId:number,BanqueId:number,NumCheque:number,Emetteur:string,TiersId:number,Montant:number,DeviseId:number,RemisEnBanque:boolean,BlocNote:string,PointageId:number,Lettrage:string,DatePointage:Date,UtilisateurId:number,DateCreation:Date,DateModif:Date,CreateurId:number,TauxDev:number,EtatId:number,IsSuccess:boolean,OtherListFailure:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,AllListFailures:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,ListFailure:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,PropertiesToSave:$dp.$shared.$Array<string>}
interface View_RgtRetardModel
{DossierId:number,TiersId:number,CodeTiers:string,Nom:string,NomVoie:string,Batiment:string,ComplementAdresse:string,CodePostal:string,NomVille:string,CodePays:string,EffetFactureId:number,MontantRetard:number,NiveauRelanceId:number,FactureId:number,NumDoc:string,DateEcheance:Date,NBJoursRetard:number,EmailId:number,Email:string,TelId:number,Telephone:string,DeviseId:number,DateDerniereRelance:Date,IsSuccess:boolean,OtherListFailure:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,AllListFailures:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,ListFailure:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,PropertiesToSave:$dp.$shared.$Array<string>}
interface View_Piece_RecapModel
{DossierId:number,NbPiece:number,Total:number,EtatId:number,DeviseId:number}
interface View_Piece_ArticleModel
{ArticleId:number,Libelle1:string,Libelle2:string,Libelle3:string,Libelle4:string,BlocNote:string,ParMultipleVTE:number,QteMiniV:number,PrixpourQte:number,UniteGestPVId:number,PVHT:number,PVTTC:number,PANet:number,FamilleTVA1Id:number,FamilleComptableId:number,CompteHTV:string}
interface View_Piece_ClientModel
{DossierId:number,TiersId:number,RemiseLigne1:number,RemiseLigne2:number,RemiseLigne3:number,EnCascade:boolean,RemisePied:number,DeviseId:number,SoumisFrais1:boolean,SoumisFrais2:boolean,Facturation:number,SoumisTaxe:boolean,RegimeTVAId:number,SoumisEscompte:boolean,Escompte:number,ModeReglementId:number,APartirDe:string,DepartLe:number,PaiementNbJour:number,PaiementLe:number,NbJourInterval:number,NbEcheances:number,FamilleComptableId:number,Auxiliaire:string,PersonneLivreId:number,ClientFactureId:number,ClientPayeurId:number,ClientDivers:boolean,Representant1Id:number,Representant2Id:number,Representant3Id:number,Bloque:boolean,AdresseGeneral:$dp.$JsNet.QuadraEdenMVC_UI.Models.Tiers.View_AdresseTiersModel,AdressePayeur:$dp.$JsNet.QuadraEdenMVC_UI.Models.Tiers.View_AdresseTiersModel,AdresseFacture:$dp.$JsNet.QuadraEdenMVC_UI.Models.Tiers.View_AdresseTiersModel,PersonneLivre:$dp.$JsNet.QuadraEdenMVC_UI.Models.Commun.PersonneModel}
interface View_Piece_DossierModel
{DossierId:number,FraisFixes1:number,FamTVAFrFiVte1:number,CptFrFiVte1:string,FraisFixes2:number,FamTVAFrFiVte2:number,CptFrFiVte2:string,TauxTvaVte:number,CptTVAVte:string,Facturation:number,RegimeTVAId:number,DeviseId:number,CodePays:string,CptVte:string,TypeCalculTVA:number,Devis_ConditionsPaiement:string}
interface PostPieceModel
{pieceToSave:$dp.$JsNet.QuadraEdenMVC_UI.Models.Piece.PieceModel,typePiece:number}
//#endregion
//#region 'functions'
var IPieceModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Piece.IPieceModel;
var AcompteModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Piece.AcompteModel;
var DatasCustomerReglModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Piece.DatasCustomerReglModel;
var Fn_PieceModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Piece.Fn_PieceModel;
var BrouillonSlickModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Piece.BrouillonSlickModel;
var Fn_FactureComptableModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Piece.Fn_FactureComptableModel;
var Fn_RecapFactureComptableModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Piece.Fn_RecapFactureComptableModel;
var Fn_RecapReglementFactureModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Piece.Fn_RecapReglementFactureModel;
var LigneBrouillonTaxeModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Piece.LigneBrouillonTaxeModel;
var LigneBrouillonModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Piece.LigneBrouillonModel;
var BrouillonModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Piece.BrouillonModel;
var LignePieceTaxeModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Piece.LignePieceTaxeModel;
var Piece_ComptabiliteModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Piece.Piece_ComptabiliteModel;
var Piece_FacturationModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Piece.Piece_FacturationModel;
var Piece_LivraisonModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Piece.Piece_LivraisonModel;
var Piece_NoteModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Piece.Piece_NoteModel;
var Piece_ReglementModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Piece.Piece_ReglementModel;
var Piece_RepresentantModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Piece.Piece_RepresentantModel;
var Piece_SuiviModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Piece.Piece_SuiviModel;
var LignePieceModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Piece.LignePieceModel;
var PieceModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Piece.PieceModel;
var ReglementModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Piece.ReglementModel;
var EffetFactureModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Piece.EffetFactureModel;
var PointageModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Piece.PointageModel;
var SessionPointageBlockContentModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Piece.SessionPointageBlockContentModel;
var SessionPointageBlockModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Piece.SessionPointageBlockModel;
var SessionPointageListModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Piece.SessionPointageListModel;
var View_EffetFactureModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Piece.View_EffetFactureModel;
var View_ReglementModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Piece.View_ReglementModel;
var View_RgtRetardModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Piece.View_RgtRetardModel;
var View_Piece_RecapModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Piece.View_Piece_RecapModel;
var View_Piece_ArticleModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Piece.View_Piece_ArticleModel;
var View_Piece_ClientModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Piece.View_Piece_ClientModel;
var View_Piece_DossierModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Piece.View_Piece_DossierModel;
var PostPieceModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Piece.PostPieceModel;
//#endregion
}
declare namespace $dp.$JsNet.QuadraEdenMVC_UI.Models.Parametrage {
//#region 'interfaces'
interface BundleChampModel
{BundleChampId:number,Libelle:string,BundleTableId:number,RgptBundleChampId:number,Description:string,IsInOutstanding:boolean,IsInStock:boolean,SinglePkArray:$dp.$shared.$Array<string>,SingleId:number,SinglePk:string,IsSuccess:boolean,OtherListFailure:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,AllListFailures:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,ListFailure:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,PropertiesToSave:$dp.$shared.$Array<string>}
interface RgptBundleChampModel
{RgptBundleChampId:number,Libelle:string,BundleTableId:number,BundleChamp:$dp.$shared.$Array<$dp.$JsNet.QuadraEdenMVC_UI.Models.Parametrage.BundleChampModel>,Code:string,IsSuccess:boolean,OtherListFailure:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,AllListFailures:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,ListFailure:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,PropertiesToSave:$dp.$shared.$Array<string>}
interface FournisseurChoiceModel
{HasBeenDefined:boolean}
interface ClientChoiceModel
{HasBeenDefined:boolean,SameEncours:number,SameClient:number,SharedTabletList:$dp.$shared.$Array<number>,CustomDiff:number,CustomFieldList:$dp.$shared.$Array<number>,SameElements:number}
interface ArticleChoiceModel
{HasBeenDefined:boolean,SameStock:number,SameArticle:number,SharedTabletList:$dp.$shared.$Array<number>,CustomDiff:number,CustomFieldList:$dp.$shared.$Array<number>,SameElements:number}
interface BundleDossierModel
{ArticleBundleQR:$dp.$JsNet.QuadraEdenMVC_UI.Models.Parametrage.ArticleChoiceModel,ClientBundleQR:$dp.$JsNet.QuadraEdenMVC_UI.Models.Parametrage.ClientChoiceModel,FournisseurBundleQR:$dp.$JsNet.QuadraEdenMVC_UI.Models.Parametrage.FournisseurChoiceModel}
interface BundleTableModel
{BundleTableId:number,Libelle:string,BundleTablePereId:number,BundleChamp:$dp.$shared.$Array<$dp.$JsNet.QuadraEdenMVC_UI.Models.Parametrage.BundleChampModel>,RgptBundleChamp:$dp.$shared.$Array<$dp.$JsNet.QuadraEdenMVC_UI.Models.Parametrage.RgptBundleChampModel>,SinglePkArray:$dp.$shared.$Array<string>,SingleId:number,SinglePk:string,IsSuccess:boolean,OtherListFailure:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,AllListFailures:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,ListFailure:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,PropertiesToSave:$dp.$shared.$Array<string>}
//#endregion
//#region 'functions'
var BundleChampModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Parametrage.BundleChampModel;
var RgptBundleChampModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Parametrage.RgptBundleChampModel;
var FournisseurChoiceModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Parametrage.FournisseurChoiceModel;
var ClientChoiceModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Parametrage.ClientChoiceModel;
var ArticleChoiceModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Parametrage.ArticleChoiceModel;
var BundleDossierModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Parametrage.BundleDossierModel;
var BundleTableModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Parametrage.BundleTableModel;
//#endregion
}
declare namespace $dp.$JsNet.QuadraEdenMVC_UI.Models.Menu {
//#region 'interfaces'
interface MenuModel
{libelle:string,isBackMenu:boolean,cssClassA:string,cssHeader:string,cssFontAwesome:string,sousMenu:$dp.$shared.$Array<$dp.$JsNet.QuadraEdenMVC_UI.Models.Menu.MenuModel>,subMenuDispatch:$dp.$shared.$Array<Object>,showIcon:boolean,fullUrl:string,Code:string}
interface RawSiteMenuItem
{Create:boolean,Delete:boolean,Id:string,OpenInNewWindow:boolean,ParentId:string,SortOrder:number,Text:string,Update:boolean,Url:string}
//#endregion
//#region 'functions'
var MenuModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Menu.MenuModel;
var RawSiteMenuItem: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Menu.RawSiteMenuItem;
//#endregion
}
declare namespace $dp.$JsNet.QuadraEdenMVC_UI.Models.Json {
//#region 'interfaces'
interface JsonResultModel
{Success:boolean,Message:$dp.$shared.$Array<string>,Result:Object,TypeFail:number,SeverityFail:number,ListWarnings:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>}
//#endregion
//#region 'functions'
var JsonResultModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Json.JsonResultModel;
//#endregion
}
declare namespace $dp.$JsNet.QuadraEdenMVC_UI.Models.Dossier {
//#region 'interfaces'
interface CompteAchatModel
{DossierId:number,DosCptAchId:number,MajCptFou:boolean,JournalAch:string,CptHTAch:string,CptTVAAch:string,TauxTvaAch:number,CodeLibEcrFacAch:string,CodeLibEcrAvoirAch:string,LibEcrFacAch:string,CentralHTAch:boolean,CentralTVAAch:boolean,TauxEscompteAch:number,FamCptEscompteAch:number,CptEscompteAch:string,EscpteFinAch:boolean,FamTVAEscptFinAch:number,CptTVAEscptFinAch:string,JournalBqAch:string,FolioBqAch:number,FolioBqAchJrEcr:boolean,CptBqAch:string,CodeLibEcrBqeAch:string,LibEcrBqAch:string,TransfertQte1:boolean,Qte1:number,TransfertQte2:boolean,Qte2:number}
interface DosNiveauRelanceModel
{DossierId:number,NiveauRelanceId:number,Sujet:string,Entete:string,Pied:string,DocumentModeleImpressionId:number,CreateurId:number,UtilisateurId:number,DateCreation:Date,DateModif:Date}
interface DosParamDocModel
{DossierId:number,TypeDocumentId:number,PrefixeNumDoc:string,ProchChronoDoc:string}
interface DosClientModel
{DossierId:number,TypeClientId:number,DeviseId:number,LocalisTaxeId:number,LangueId:number,DiffModalFact:boolean,Actif:boolean,Prospect:boolean,Representant1Id:number,Representant2Id:number,Representant3Id:number,Affectation1Id:number,Affectation2Id:number,Affectation3Id:number,Affectation4Id:number}
interface DosClientTypeClientModel
{DossierId:number,TypeClientId:number,RegroupBLsurFactId:number,ImpObligLivId:number,ModeReglementId:number,Collectif:string,RegimeTVAId:number,FamilleComptableId:number,GenAutoCodeCli:boolean,PrefixeCodeCli:string,LongueurCodeCli:number,GenAutoCodeAuxi:boolean,Automatisation:number,RadicalCodeAuxi:string,DepartCodeAuxi:string,PasCodeAuxi:number,Facturation:number}
interface DossierFlatModel
{DossierId:number,CleAcces:string,CodeDossier:string,SIRET:string,NatJuridique:number,APE:string,TypeCalculTVA:number,NIF:string,Libelle:string,NomVoie:string,ComplementAdresse:string,Batiment:string,CodePostal:string,NomVille:string,CodePays:string,Latitude:number,Longitude:number,TypeComptaId:number,DeviseId:number,LongueurCptAuxi:number,LongueurCptGen:number,Contact:string,Telephone:string,Fax:string,EMail:string,SiteWeb:string,RCS:string,DUNS:string,Capital:number,TexteJuridique:string}
interface GesComTypeArtModel
{DossierId:number,TypeArtId:number,MesureId:number,FamilleTVAId:number,FamilleComptableArtId:number,GenAutoCodeArt:boolean,PrefixeCodeArt:string,LongueurCodeArt:number,QCodeBarreId:number,NumAffGenCode:string,PasChronoCodeBarre:number,GereCodeBarre:boolean}
interface GesComModel
{DossierId:number,TypeArtId:number,FormatLibelleArtId:number,Actif:boolean,LibelleArtNames:$dp.$shared.$Array<string>,MemoArtNames:$dp.$shared.$Array<string>,AnyLibelleIsUsed:boolean,AnyMemoIsUsed:boolean,UsedLibelleArtNames:$dp.$shared.$Array<string>,UsedMemoArtNames:$dp.$shared.$Array<string>,UnusedLibelleArtNames:$dp.$shared.$Array<string>,UnusedMemoArtNames:$dp.$shared.$Array<string>}
interface CompteVenteRegModel
{DossierId:number,JournalEcartBq:string,FolioEcartBq:number,FolioEcartBqJrEcr:boolean,CptBqVte:string,CodeLibEcrBqeVte:string,LibEcrBqVte:string,JournalODBq:string,JournalCaisseBq:string,FolioODBq:number,FolioODBqJrEcr:boolean,CptGainVte:string,CptPerteVte:string,LibEcrEcart:string}
interface CompteVenteTrModel
{DossierId:number,DosCptVteId:number,MajCptCli:boolean,JournalVte:string,CptVte:string,CptTVAVte:string,CodeLibEcrFacVte:string,CodeLibEcrAvoirVte:string,LibEcrFacVte:string,JournalODVte:string,LibEcrODVte:string,CentralVte:boolean,CentralTVAVte:boolean,TauxTvaVte:number,TransfertQte1:boolean,Qte1:number,TransfertQte2:boolean,Qte2:number,FraisFixes1:number,CptFrFiVte1:string,FamTVAFrFiVte1:number,FraisFixes2:number,CptFrFiVte2:string,FamTVAFrFiVte2:number,FraisFixes3:number,CptFrFiVte3:string,FamTVAFrFiVte3:number,TauxEscompteVte:number,FamCptEscompteVte:number,CptEscompteVte:string,EscpteFinVte:boolean,FamTVAEscptFinVte:number,CptTVAEscptFinVte:string,FolioVte:number,FolioVteJrEcr:boolean,FolioOD:number,FolioODJrEcr:boolean,Acompte_CompteAvancesEtAcomptesPercus:string,Acompte_CompteTaxesSurCA:string,Acompte_CompteAvancesEtAcomptesPercus_Libelle:string,Acompte_FamilleTVAId:number}
interface DossierIdentiteModel
{DossierId:number,NatJuridique:number,Contact:string,Telephone:string,Fax:string,EMail:string,SiteWeb:string,NIF:string,APE:string,SIRET:string,RCS:string,DUNS:string,TexteJuridique:string,Capital:number,AdresseId:number,AdresseDossier:$dp.$JsNet.QuadraEdenMVC_UI.Models.Commun.AdresseModel,LegalMention:string,FreeMention:string,TypeCalculTVA:number}
interface DossierLiteViewModel
{DossierId:number,CodeDossier:string,Libelle:string,Actif:boolean,DateCreation:Date,DateModif:Date,CreateurId:number,UtilisateurId:number,Bundles:$dp.$JsNet.QuadraEdenMVC_UI.Models.Parametrage.BundleDossierModel}
interface DossierModel
{BlocNote:string,CleAcces:string,CodeDossier:string,CompteAchatInfo:$dp.$JsNet.QuadraEdenMVC_UI.Models.Dossier.CompteAchatModel,CompteVenteReglement:$dp.$JsNet.QuadraEdenMVC_UI.Models.Dossier.CompteVenteRegModel,CompteVenteTransfert:$dp.$JsNet.QuadraEdenMVC_UI.Models.Dossier.CompteVenteTrModel,GesCom:$dp.$JsNet.QuadraEdenMVC_UI.Models.Dossier.GesComModel,GesComTypeArticle:$dp.$shared.$Array<$dp.$JsNet.QuadraEdenMVC_UI.Models.Dossier.GesComTypeArtModel>,Client:$dp.$JsNet.QuadraEdenMVC_UI.Models.Dossier.DosClientModel,ClientTypeClient:$dp.$shared.$Array<$dp.$JsNet.QuadraEdenMVC_UI.Models.Dossier.DosClientTypeClientModel>,ParamGen:$dp.$JsNet.QuadraEdenMVC_UI.Models.Dossier.DosParamGenModel,ParamDoc:$dp.$shared.$Array<$dp.$JsNet.QuadraEdenMVC_UI.Models.Dossier.DosParamDocModel>,DateCreation:Date,DateModif:Date,DossierEnfantList:$dp.$shared.$Array<$dp.$JsNet.QuadraEdenMVC_UI.Models.Dossier.DossierModel>,DossierIdentite:$dp.$JsNet.QuadraEdenMVC_UI.Models.Dossier.DossierIdentiteModel,DossierPere:$dp.$JsNet.QuadraEdenMVC_UI.Models.Dossier.DossierModel,DossierId:number,CreateurId:number,PereId:number,ComptabiliteId:number,UtilisateurId:number,Libelle:string,Actif:boolean}
interface RepresentantModel
{DossierId:number,AffectationId:number,RepresentantId:number,TauxCommission:number,UtilisateurId:number,DateModif:Date,CreateurId:number,DateCreation:Date}
interface TimeLineModel
{TimeLineId:number,DateAction:Date,DossierId:number,TypeElementId:number,ElementId:number,ActionId:number,UtilisateurId:number,NumeroDoc:number,Montant:number,Nom:string,TypeFacturation:number,DeviseNumeric:number,Code:string,TiersId:number,CiviliteId:number,TypeDocumentSource:string,NumDocOrigorDest:string,NumDoc:string,TypeElementLibelle:string,ActionLibelle:string,UtilisateurPrenom:string,UtilisateurNom:string}
interface View_RepresentantModel
{AffectationId:number,UtilisateurId:number,CODE:string,Nom:string,Prenom:string,DossierId:number,TauxCommission:number}
interface DosParamGenModel
{DossierId:number,NbDecimPV:number,NbDecimPA:number,NbDecimQTE:number,NbDecimREM:number,NbDecimMNT:number,NbDecimCOM:number,LongueurCptAuxi:number,LongueurCptGen:number,CategorieTVA1Id:number,CategorieTVA2Id:number,CategorieTVA3Id:number,TypeArrondiREMId:number,DureeValiditeDevis:string,NbJoursavantRelance:number,SuspenseAccount:string,ModeExportCompta:number,Devis_ConditionsPaiement:string,AccountingRuleSet:$dp.$JsNet.QuadraEden.Transverse.Business.Rules.AccountingRuleSet}
//#endregion
//#region 'functions'
var CompteAchatModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Dossier.CompteAchatModel;
var DosNiveauRelanceModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Dossier.DosNiveauRelanceModel;
var DosParamDocModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Dossier.DosParamDocModel;
var DosClientModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Dossier.DosClientModel;
var DosClientTypeClientModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Dossier.DosClientTypeClientModel;
var DossierFlatModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Dossier.DossierFlatModel;
var GesComTypeArtModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Dossier.GesComTypeArtModel;
var GesComModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Dossier.GesComModel;
var CompteVenteRegModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Dossier.CompteVenteRegModel;
var CompteVenteTrModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Dossier.CompteVenteTrModel;
var DossierIdentiteModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Dossier.DossierIdentiteModel;
var DossierLiteViewModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Dossier.DossierLiteViewModel;
var DossierModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Dossier.DossierModel;
var RepresentantModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Dossier.RepresentantModel;
var TimeLineModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Dossier.TimeLineModel;
var View_RepresentantModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Dossier.View_RepresentantModel;
var DosParamGenModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Dossier.DosParamGenModel;
//#endregion
}
declare namespace $dp.$JsNet.QuadraEden.Transverse.Business.Rules {
//#region 'interfaces'
interface AccountingGeneralCodeRule
{Patterns_Or:$dp.$shared.$Array<string>,Pattern:string,PatternRadical:string,MessageKey:string,ClassName:string,MinLength:number,MaxLength:number,propNameLongCpt:string,EnumParamGenLengthAccount:number}
interface AccountingTVACodeRule
{Patterns_Or:$dp.$shared.$Array<string>,Pattern:string,PatternRadical:string,MessageKey:string,ClassName:string,MinLength:number,MaxLength:number,propNameLongCpt:string,EnumParamGenLengthAccount:number}
interface AccountingBankCodeRule
{Patterns_Or:$dp.$shared.$Array<string>,Pattern:string,PatternRadical:string,MessageKey:string,ClassName:string,MinLength:number,MaxLength:number,propNameLongCpt:string,EnumParamGenLengthAccount:number}
interface AccountingCollectifCodeRule
{Patterns_Or:$dp.$shared.$Array<string>,Pattern:string,PatternRadical:string,MessageKey:string,ClassName:string,MinLength:number,MaxLength:number,propNameLongCpt:string,EnumParamGenLengthAccount:number}
interface AccountingGeneralEspeceCodeRule
{Patterns_Or:$dp.$shared.$Array<string>,Pattern:string,PatternRadical:string,MessageKey:string,ClassName:string,MinLength:number,MaxLength:number,propNameLongCpt:string,EnumParamGenLengthAccount:number}
interface AccountingGainCodeRule
{Patterns_Or:$dp.$shared.$Array<string>,Pattern:string,PatternRadical:string,MessageKey:string,ClassName:string,MinLength:number,MaxLength:number,propNameLongCpt:string,EnumParamGenLengthAccount:number}
interface AccountingPertesCodeRule
{Patterns_Or:$dp.$shared.$Array<string>,Pattern:string,PatternRadical:string,MessageKey:string,ClassName:string,MinLength:number,MaxLength:number,propNameLongCpt:string,EnumParamGenLengthAccount:number}
interface AccountingGeneralAcompte_CompteTaxeSurCACodeRule
{Patterns_Or:$dp.$shared.$Array<string>,Pattern:string,PatternRadical:string,MessageKey:string,ClassName:string,MinLength:number,MaxLength:number,propNameLongCpt:string,EnumParamGenLengthAccount:number}
interface AccountingGeneralAcompte_CompteAvancesEtAcomptesPercus
{Patterns_Or:$dp.$shared.$Array<string>,Pattern:string,PatternRadical:string,MessageKey:string,ClassName:string,MinLength:number,MaxLength:number,propNameLongCpt:string,EnumParamGenLengthAccount:number}
interface AccountingGeneralTemplate_ModeReglement_DifferentDe_ESP_TLB_PREL
{Pattern:string,PatternRadical:string,MessageKey:string,ClassName:string,MinLength:number,MaxLength:number,propNameLongCpt:string,EnumParamGenLengthAccount:number}
interface AccountingGeneralTemplate_ModeReglement_Pour_TLB_PREL
{Pattern:string,PatternRadical:string,MessageKey:string,ClassName:string,MinLength:number,MaxLength:number,propNameLongCpt:string,EnumParamGenLengthAccount:number}
interface AccountingCustomerOnlyNumericCodeRule
{Patterns_Or:$dp.$shared.$Array<string>,Pattern:string,PatternRadical:string,MessageKey:string,ClassName:string,MinLength:number,MaxLength:number,propNameLongCpt:string,EnumParamGenLengthAccount:number}
interface AccountingCustomerCodeRule
{Pattern:string,PatternRadical:string,MessageKey:string,ClassName:string,MinLength:number,MaxLength:number,propNameLongCpt:string,EnumParamGenLengthAccount:number}
interface AccountingCustomerTemplateCodeRootRule
{Pattern:string,PatternRadical:string,MessageKey:string,ClassName:string,MinLength:number,MaxLength:number,propNameLongCpt:string,EnumParamGenLengthAccount:number}
interface AccountingCustomerRadical
{Pattern:string,PatternRadical:string,MessageKey:string,ClassName:string,MinLength:number,MaxLength:number,propNameLongCpt:string,EnumParamGenLengthAccount:number}
interface AccountingCustomerRadicalCegid
{Pattern:string,PatternRadical:string,MessageKey:string,ClassName:string,MinLength:number,MaxLength:number,propNameLongCpt:string,EnumParamGenLengthAccount:number}
interface AccountingCustomerCodeRuleCegid
{Pattern:string,PatternRadical:string,MessageKey:string,ClassName:string,MinLength:number,MaxLength:number,propNameLongCpt:string,EnumParamGenLengthAccount:number}
interface DbContextFieldRule_Regex
{Pattern:string,PatternRadical:string,MessageKey:string,ClassName:string,MinLength:number,MaxLength:number,propNameLongCpt:string,EnumParamGenLengthAccount:number}
interface AccountingRuleSet
{AccountingGeneralCodeRule:$dp.$JsNet.QuadraEden.Transverse.Business.Rules.AccountingGeneralCodeRule,AccountingTVACodeRule:$dp.$JsNet.QuadraEden.Transverse.Business.Rules.AccountingTVACodeRule,AccountingBankCodeRule:$dp.$JsNet.QuadraEden.Transverse.Business.Rules.AccountingBankCodeRule,AccountingCollectifCodeRule:$dp.$JsNet.QuadraEden.Transverse.Business.Rules.AccountingCollectifCodeRule,AccountingGeneralEspeceCodeRule:$dp.$JsNet.QuadraEden.Transverse.Business.Rules.AccountingGeneralEspeceCodeRule,AccountingGainCodeRule:$dp.$JsNet.QuadraEden.Transverse.Business.Rules.AccountingGainCodeRule,AccountingPertesCodeRule:$dp.$JsNet.QuadraEden.Transverse.Business.Rules.AccountingPertesCodeRule,AccountingGeneralAcompte_CompteTaxeSurCACodeRule:$dp.$JsNet.QuadraEden.Transverse.Business.Rules.AccountingGeneralAcompte_CompteTaxeSurCACodeRule,AccountingGeneralAcompte_CompteAvancesEtAcomptesPercus:$dp.$JsNet.QuadraEden.Transverse.Business.Rules.AccountingGeneralAcompte_CompteAvancesEtAcomptesPercus,AccountingGeneralTemplate_ModeReglement_DifferentDe_ESP_TLB_PREL:$dp.$JsNet.QuadraEden.Transverse.Business.Rules.AccountingGeneralTemplate_ModeReglement_DifferentDe_ESP_TLB_PREL,AccountingGeneralTemplate_ModeReglement_Pour_TLB_PREL:$dp.$JsNet.QuadraEden.Transverse.Business.Rules.AccountingGeneralTemplate_ModeReglement_Pour_TLB_PREL,AccountingCustomerOnlyNumericCodeRule:$dp.$JsNet.QuadraEden.Transverse.Business.Rules.AccountingCustomerOnlyNumericCodeRule,AccountingCustomerCodeRule:$dp.$JsNet.QuadraEden.Transverse.Business.Rules.AccountingCustomerCodeRule,AccountingCustomerTemplateCodeRootRule:$dp.$JsNet.QuadraEden.Transverse.Business.Rules.AccountingCustomerTemplateCodeRootRule,AccountingCustomerRadical:$dp.$JsNet.QuadraEden.Transverse.Business.Rules.AccountingCustomerRadical,AccountingCustomerRadicalCegid:$dp.$JsNet.QuadraEden.Transverse.Business.Rules.AccountingCustomerRadicalCegid,AccountingCustomerCodeRuleCegid:$dp.$JsNet.QuadraEden.Transverse.Business.Rules.AccountingCustomerCodeRuleCegid,GeneralAccountingCodeRules:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Business.Rules.DbContextFieldRule_Regex>,CustomerAccountingCodeRules:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Business.Rules.DbContextFieldRule_Regex>}
//#endregion
//#region 'functions'
var AccountingGeneralCodeRule: () => $dp.$JsNet.QuadraEden.Transverse.Business.Rules.AccountingGeneralCodeRule;
var AccountingTVACodeRule: () => $dp.$JsNet.QuadraEden.Transverse.Business.Rules.AccountingTVACodeRule;
var AccountingBankCodeRule: () => $dp.$JsNet.QuadraEden.Transverse.Business.Rules.AccountingBankCodeRule;
var AccountingCollectifCodeRule: () => $dp.$JsNet.QuadraEden.Transverse.Business.Rules.AccountingCollectifCodeRule;
var AccountingGeneralEspeceCodeRule: () => $dp.$JsNet.QuadraEden.Transverse.Business.Rules.AccountingGeneralEspeceCodeRule;
var AccountingGainCodeRule: () => $dp.$JsNet.QuadraEden.Transverse.Business.Rules.AccountingGainCodeRule;
var AccountingPertesCodeRule: () => $dp.$JsNet.QuadraEden.Transverse.Business.Rules.AccountingPertesCodeRule;
var AccountingGeneralAcompte_CompteTaxeSurCACodeRule: () => $dp.$JsNet.QuadraEden.Transverse.Business.Rules.AccountingGeneralAcompte_CompteTaxeSurCACodeRule;
var AccountingGeneralAcompte_CompteAvancesEtAcomptesPercus: () => $dp.$JsNet.QuadraEden.Transverse.Business.Rules.AccountingGeneralAcompte_CompteAvancesEtAcomptesPercus;
var AccountingGeneralTemplate_ModeReglement_DifferentDe_ESP_TLB_PREL: () => $dp.$JsNet.QuadraEden.Transverse.Business.Rules.AccountingGeneralTemplate_ModeReglement_DifferentDe_ESP_TLB_PREL;
var AccountingGeneralTemplate_ModeReglement_Pour_TLB_PREL: () => $dp.$JsNet.QuadraEden.Transverse.Business.Rules.AccountingGeneralTemplate_ModeReglement_Pour_TLB_PREL;
var AccountingCustomerOnlyNumericCodeRule: () => $dp.$JsNet.QuadraEden.Transverse.Business.Rules.AccountingCustomerOnlyNumericCodeRule;
var AccountingCustomerCodeRule: () => $dp.$JsNet.QuadraEden.Transverse.Business.Rules.AccountingCustomerCodeRule;
var AccountingCustomerTemplateCodeRootRule: () => $dp.$JsNet.QuadraEden.Transverse.Business.Rules.AccountingCustomerTemplateCodeRootRule;
var AccountingCustomerRadical: () => $dp.$JsNet.QuadraEden.Transverse.Business.Rules.AccountingCustomerRadical;
var AccountingCustomerRadicalCegid: () => $dp.$JsNet.QuadraEden.Transverse.Business.Rules.AccountingCustomerRadicalCegid;
var AccountingCustomerCodeRuleCegid: () => $dp.$JsNet.QuadraEden.Transverse.Business.Rules.AccountingCustomerCodeRuleCegid;
var DbContextFieldRule_Regex: () => $dp.$JsNet.QuadraEden.Transverse.Business.Rules.DbContextFieldRule_Regex;
var AccountingRuleSet: () => $dp.$JsNet.QuadraEden.Transverse.Business.Rules.AccountingRuleSet;
//#endregion
}
declare namespace $dp.$JsNet.QuadraEdenMVC_UI.Models.Dossier.Request {
//#region 'interfaces'
interface RequestPostDossier
{DossierToSend:$dp.$JsNet.QuadraEdenMVC_UI.Models.Dossier.DossierModel,ClientId:number,ClaimsUserID:number,ClaimsConnectionString:string,ClaimsAccount:string,HasError:boolean}
interface RequestDossier
{dossierID:number,ClientId:number,ClaimsUserID:number,ClaimsConnectionString:string,ClaimsAccount:string,HasError:boolean}
//#endregion
//#region 'functions'
var RequestPostDossier: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Dossier.Request.RequestPostDossier;
var RequestDossier: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Dossier.Request.RequestDossier;
//#endregion
}
declare namespace $dp.$JsNet.QuadraEdenMVC_UI.Models.DocumentModeleImpression {
//#region 'interfaces'
interface DocumentModeleImpression_MD
{Libelle:string}
interface DocumentModeleImpressionModel
{DocumentModeleImpressionId:number,DocumentStyleId:number,DocumentModeleId:number,DossierId:number,DocumentModeleImpressionDestinataireId:number,Libelle:string,UtilisateurId:number,CreateurId:number,DateCreation:Date,DateModif:Date,DocumentModele:$dp.$JsNet.QuadraEden.Domain.DocumentModele,DocumentModeleImpressionDestinataire:$dp.$JsNet.QuadraEden.Domain.DocumentModeleImpressionDestinataire,DocumentStyle:$dp.$JsNet.QuadraEden.Domain.DocumentStyle,DocumentModeleImpressionPersoList:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Domain.DocumentModeleImpressionPerso>,DocumentModeleImpressionDestinataire_Enum:number,EnCreation:boolean}
//#endregion
//#region 'functions'
var DocumentModeleImpression_MD: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.DocumentModeleImpression.DocumentModeleImpression_MD;
var DocumentModeleImpressionModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.DocumentModeleImpression.DocumentModeleImpressionModel;
//#endregion
}
declare namespace $dp.$JsNet.QuadraEden.Transverse.Nomenclature {
//#region 'interfaces'
interface Nomenclature
{Identifier:number,Code:string,Libelle:string,ExternalGroupId:number,System:boolean,DossierId:number}
interface TabletContext
{TypeNomen:number,DossierIDOnwer:number,Nom:string,ListNomenclature:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Nomenclature.Nomenclature>}
interface Tablet
{TypeNomen:number,Nom:string,ListNomenclature:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Nomenclature.Nomenclature>}
//#endregion
//#region 'functions'
var Nomenclature: () => $dp.$JsNet.QuadraEden.Transverse.Nomenclature.Nomenclature;
var TabletContext: () => $dp.$JsNet.QuadraEden.Transverse.Nomenclature.TabletContext;
var Tablet: () => $dp.$JsNet.QuadraEden.Transverse.Nomenclature.Tablet;
//#endregion
}
declare namespace $dp.$JsNet.Cegid.ScanOcr.Api.CommonSupplier.Models {
//#region 'interfaces'
interface SecondaryCompanyViewModel
{DepuisLe:Date,CodeApe:string,TrancheEffectifSalarie:string,Supplier:$dp.$JsNet.Cegid.ScanOcr.Api.CommonSupplier.Models.SupplierModel,Statut:string,IsPrincipal:boolean,LastChecked:Date,FormeJuridique:string,CapitalSocial:string,Address:string,Postcode:string,City:string,Country:string,Siret:string,Name:string,Siren:string,NoTva:string,Rank:number,IsExactMatch:boolean}
interface SupplierModel
{Id:number,Name:string,Siren:string,Siret:string,Telephone:string,Email:string,Website:string,Country:string,NoTva:string,Others:string,SupplierNamesMatchingCount:number,Type:number,Postcode:string,City:string,Address:string,Source:string,SourceUser:string,ClientId:string,NameCheck:string,AddressCheck:string,NoTvaChecked:boolean,LastChecked:Date,NoTvaInvalid:boolean,LastValidated:Date,InvalidFrom:Date,SecondaryCompanies:$dp.$shared.$Array<$dp.$JsNet.Cegid.ScanOcr.Api.CommonSupplier.Models.SecondaryCompanyViewModel>,CodeApe:string,GetSecondaryCompanies:boolean,GetCodeApe:boolean,Rank:number,IsExactMatch:boolean}
//#endregion
//#region 'functions'
var SecondaryCompanyViewModel: () => $dp.$JsNet.Cegid.ScanOcr.Api.CommonSupplier.Models.SecondaryCompanyViewModel;
var SupplierModel: () => $dp.$JsNet.Cegid.ScanOcr.Api.CommonSupplier.Models.SupplierModel;
//#endregion
}
declare namespace $dp.$JsNet.QuadraEdenMVC_UI.Models.Commun.Abstract {
//#region 'interfaces'
interface AReglementModel
{ModeReglementId:number,APartirDe:string,DepartLe:number,PaiementNbJour:number,PaiementLe:number,NbJourInterval:number,NbEcheances:number}
//#endregion
//#region 'functions'
var AReglementModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Commun.Abstract.AReglementModel;
//#endregion
}
declare namespace $dp.$JsNet.QuadraEdenMVC_UI.Models.Article {
//#region 'interfaces'
interface ArticleCaracteristicsModel
{ArticleId:number,NoFacturable:boolean,NoCumulQteStat:boolean,Lot:boolean,NumeroSerie:boolean,NumeroSerieGR:boolean,InterditContremarque:boolean,TypeNomenclatureId:number,StatutArticleId:number,NomenDouaneId:number,NomenTaxeEnvironId:number,DomaineId:number,PoidsNet:number,PoidsBrut:number,QualifPoidsId:number,Volume:number,QualifVolumeId:number,Longueur:number,QualifLongueurId:number,Largeur:number,QualifLargeurId:number,Hauteur:number,QualifhauteurId:number,Surface:number,QualifSurfaceId:number,Temps:number,QualifTempsId:number,Densite:number,QualifDensiteId:number,QualifUniteStockId:number,QualifUniteVenteId:number,NbHeuresTheo:number,PoidsDouanier:number,CoefUniteSup:number,TypeEmplacementId:number,ModeleEtiqClientId:number,ModeleEtiqFournisseurId:number,NePlusCommander:boolean,HorsStock:boolean,PaysOrigine:string,DuplicationArticleId:number,SinglePkArray:$dp.$shared.$Array<string>,SingleId:number,SinglePk:string,IsSuccess:boolean,OtherListFailure:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,AllListFailures:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,ListFailure:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,PropertiesToSave:$dp.$shared.$Array<string>}
interface fn_ArticleModel
{ArticleId:number,DossierId:number,CodeArticle:string,LigneDimensionId1:number,LigneDimensionId2:number,LigneDimensionId3:number,TypeArtId:number,CodeBarre:string,QualCodeBarreId:number,Libelle1:string,Libelle2:string,Libelle3:string,Libelle4:string,LibelleInterne:string,Actif:boolean,NoVente:boolean,NoAchat:boolean,NoConso:boolean,NoProd:boolean,GereEnStock:boolean,FamilleArt1Id:number,FamilleArt2Id:number,FamilleArt3Id:number,FamilleComptableId:number,FamilleTVA1Id:number,ImputAnalId:number,PVHT:number,PVTTC:number,UniteGestPVId:number,UnitePVId:number,CoefConvPrixV:number,SensVteGes:string,UnitePAId:number,RemiseAch1:number,TypeRemise1Id:number,RemCascade:boolean,RemiseAch2:number,TypeRemise2Id:number,RemiseAch3:number,TypeRemise3Id:number,CoefPVPA:number,CoefPVPATTC:number,AppliCoefPVPAId:number,FournPrincId:number,CompteHTV:string,QteMiniV:number,UniteQteVId:number,CoefConvQteV:number,SensVteSto:string,PrixpourQte:number,PrixNet:boolean,PUAEditer:boolean,ParMultipleVTE:number,BlocNote:string,UtilisateurId:number,DateSupp:Date,DateCreation:Date,DateModif:Date,CreateurId:number,CompteHTA:string,PANet:number,PAvsPV:number,CommissionUnique:boolean,TauxCommission:number,TypeArt:string,TypeArt_Libelle:string,FamilleArt1:string,FamilleArt1_Libelle:string,IsNew:boolean,SinglePkArray:$dp.$shared.$Array<string>,SingleId:number,OtherListFailure:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,FakeUploadFilePath:string,SinglePk:string,IsSuccess:boolean,AllListFailures:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,ListFailure:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,PropertiesToSave:$dp.$shared.$Array<string>}
interface Art_NoImprimsurDocModel
{Art_NoImprimsurDocId:number,ArticleId:number,TypeDocId:number,CreateurId:number,DateCreation:Date,DateModif:Date,UtilisateurId:number,StringState:string,IsSuccess:boolean,OtherListFailure:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,AllListFailures:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,ListFailure:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,PropertiesToSave:$dp.$shared.$Array<string>}
interface Art_TaxeModel
{ArticleId:number,TaxeId:number,Coef:number,UtilisateurId:number,DateCreation:Date,DateModif:Date,CreateurId:number,EntityState:number,IsSuccess:boolean,OtherListFailure:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,AllListFailures:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,ListFailure:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,PropertiesToSave:$dp.$shared.$Array<string>}
interface QualifCodeBarreModel
{ProchChronoCodeBarreComplet:string,IsSuccess:boolean,OtherListFailure:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,AllListFailures:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,ListFailure:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,PropertiesToSave:$dp.$shared.$Array<string>}
interface Art_TVAModel
{ArticleId:number,FamilleTVA1Id:number,FamilleTVA2Id:number,FamilleTVA3Id:number,MntSoumisTva2:number,FamilleTVA12Id:number,FamilleComptable2Id:number,CompteHTV2:string,MntSoumisTva1:number,TypeMntSoumisId:number,ModeTVA:number,EstMultiTVA:boolean,ArticleModel:$dp.$JsNet.QuadraEdenMVC_UI.Models.Article.ArticleModel,DuplicationArticleId:number,SinglePkArray:$dp.$shared.$Array<string>,SingleId:number,SinglePk:string,IsSuccess:boolean,OtherListFailure:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,AllListFailures:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,ListFailure:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,PropertiesToSave:$dp.$shared.$Array<string>}
interface ArticleModel
{ArticleId:number,DossierId:number,CodeArticle:string,LigneDimensionId1:number,LigneDimensionId2:number,LigneDimensionId3:number,TypeArtId:number,CodeBarre:string,QualCodeBarreId:number,Libelle1:string,Libelle2:string,Libelle3:string,Libelle4:string,LibelleInterne:string,Actif:boolean,NoVente:boolean,NoAchat:boolean,NoConso:boolean,NoProd:boolean,GereEnStock:boolean,FamilleArt1Id:number,FamilleArt2Id:number,FamilleArt3Id:number,FamilleComptableId:number,ImputAnalId:number,PVHT:number,PVTTC:number,UniteGestPVId:number,UnitePVId:number,CoefConvPrixV:number,SensVteGes:string,UnitePAId:number,RemiseAch1:number,TypeRemise1Id:number,RemCascade:boolean,RemiseAch2:number,TypeRemise2Id:number,RemiseAch3:number,TypeRemise3Id:number,CoefPVPA:number,CoefPVPATTC:number,AppliCoefPVPAId:number,FournPrincId:number,CompteHTV:string,QteMiniV:number,UniteQteVId:number,CoefConvQteV:number,SensVteSto:string,PrixpourQte:number,PrixNet:boolean,PUAEditer:boolean,ParMultipleVTE:number,BlocNote:string,UtilisateurId:number,DateSupp:Date,DateCreation:Date,DateModif:Date,CreateurId:number,CompteHTA:string,PANet:number,PAvsPV:number,CommissionUnique:boolean,TauxCommission:number,Art_Caracteristique:$dp.$JsNet.QuadraEdenMVC_UI.Models.Article.ArticleCaracteristicsModel,Art_TVA:$dp.$JsNet.QuadraEdenMVC_UI.Models.Article.Art_TVAModel,Art_NoImprimsurDoc:$dp.$shared.$Array<$dp.$JsNet.QuadraEdenMVC_UI.Models.Article.Art_NoImprimsurDocModel>,Art_Taxe:$dp.$shared.$Array<$dp.$JsNet.QuadraEdenMVC_UI.Models.Article.Art_TaxeModel>,Dos_GesComTypeArtList:$dp.$shared.$Array<$dp.$JsNet.QuadraEdenMVC_UI.Models.Dossier.GesComTypeArtModel>,Dos_GesCom:$dp.$JsNet.QuadraEdenMVC_UI.Models.Dossier.GesComModel,IsNew:boolean,EstUneCreation:boolean,EnumModeModificationCrud:number,DuplicationArticleId:number,SinglePkArray:$dp.$shared.$Array<string>,SingleId:number,OtherListFailure:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,FakeUploadFilePath:string,SinglePk:string,IsSuccess:boolean,AllListFailures:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,ListFailure:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,PropertiesToSave:$dp.$shared.$Array<string>}
interface View_ArticleModel
{ArticleId:number,DossierId:number,CodeArticle:string,LigneDimensionId1:number,LigneDimensionId2:number,LigneDimensionId3:number,TypeArtId:number,CodeBarre:string,QualCodeBarreId:number,Libelle1:string,Libelle2:string,Libelle3:string,Libelle4:string,LibelleInterne:string,Actif:boolean,NoVente:boolean,NoAchat:boolean,NoConso:boolean,NoProd:boolean,GereEnStock:boolean,FamilleArt1Id:number,FamilleArt2Id:number,FamilleArt3Id:number,FamilleComptableId:number,ImputAnalId:number,PVHT:number,PVTTC:number,UniteGestPVId:number,UnitePVId:number,CoefConvPrixV:number,SensVteGes:string,UnitePAId:number,RemiseAch1:number,TypeRemise1Id:number,RemCascade:boolean,RemiseAch2:number,TypeRemise2Id:number,RemiseAch3:number,TypeRemise3Id:number,CoefPVPA:number,CoefPVPATTC:number,AppliCoefPVPAId:number,FournPrincId:number,CompteHTV:string,QteMiniV:number,UniteQteVId:number,CoefConvQteV:number,SensVteSto:string,PrixpourQte:number,PrixNet:boolean,PUAEditer:boolean,ParMultipleVTE:number,BlocNote:string,UtilisateurId:number,DateSupp:Date,DateCreation:Date,DateModif:Date,CreateurId:number,CompteHTA:string,PANet:number,PAvsPV:number,CommissionUnique:boolean,TauxCommission:number,Art_Caracteristique:$dp.$JsNet.QuadraEdenMVC_UI.Models.Article.ArticleCaracteristicsModel,Art_TVA:$dp.$JsNet.QuadraEdenMVC_UI.Models.Article.Art_TVAModel,Art_NoImprimsurDoc:$dp.$shared.$Array<$dp.$JsNet.QuadraEdenMVC_UI.Models.Article.Art_NoImprimsurDocModel>,Art_Taxe:$dp.$shared.$Array<$dp.$JsNet.QuadraEdenMVC_UI.Models.Article.Art_TaxeModel>,Dos_GesComTypeArtList:$dp.$shared.$Array<$dp.$JsNet.QuadraEdenMVC_UI.Models.Dossier.GesComTypeArtModel>,Dos_GesCom:$dp.$JsNet.QuadraEdenMVC_UI.Models.Dossier.GesComModel,IsNew:boolean,SinglePkArray:$dp.$shared.$Array<string>,SingleId:number,OtherListFailure:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,FakeUploadFilePath:string,SinglePk:string,IsSuccess:boolean,AllListFailures:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,ListFailure:$dp.$shared.$Array<$dp.$JsNet.QuadraEden.Transverse.Fail.AggOutFailItemBase>,PropertiesToSave:$dp.$shared.$Array<string>}
//#endregion
//#region 'functions'
var ArticleCaracteristicsModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Article.ArticleCaracteristicsModel;
var fn_ArticleModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Article.fn_ArticleModel;
var Art_NoImprimsurDocModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Article.Art_NoImprimsurDocModel;
var Art_TaxeModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Article.Art_TaxeModel;
var QualifCodeBarreModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Article.QualifCodeBarreModel;
var Art_TVAModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Article.Art_TVAModel;
var ArticleModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Article.ArticleModel;
var View_ArticleModel: () => $dp.$JsNet.QuadraEdenMVC_UI.Models.Article.View_ArticleModel;
//#endregion
}
declare namespace $dp.$JsNet.QuadraEden.Transverse.Grid.Parameters {
//#region 'interfaces'
interface ParamColumn
{Id:string,SortAsc:boolean,SearchString:string,IdToOrder:string,ComparatorOperator:number,LogicalOperator:number,DataType:number,IsNotSelected:boolean,Not:boolean,WantedIdToOrder:string,Fields:$dp.$shared.$Array<string>,SqlComparatorOperator:string,Comparaison:string,AggregateFunction:string,AggregateFunctionComplete:string}
//#endregion
//#region 'functions'
var ParamColumn: () => $dp.$JsNet.QuadraEden.Transverse.Grid.Parameters.ParamColumn;
//#endregion
}
declare namespace $dp.$JsNet.Newtonsoft.Json {
//#region 'interfaces'
interface JsonConverter
{CanRead:boolean,CanWrite:boolean}
interface JsonSerializerSettings
{ReferenceLoopHandling:number,MissingMemberHandling:number,ObjectCreationHandling:number,NullValueHandling:number,DefaultValueHandling:number,Converters:$dp.$shared.$Array<$dp.$JsNet.Newtonsoft.Json.JsonConverter>,PreserveReferencesHandling:number,TypeNameHandling:number,MetadataPropertyHandling:number,TypeNameAssemblyFormat:number,ConstructorHandling:number,ContractResolver:$dp.$JsNet.Newtonsoft.Json.Serialization.IContractResolver,EqualityComparer:Object,ReferenceResolver:$dp.$JsNet.Newtonsoft.Json.Serialization.IReferenceResolver,ReferenceResolverProvider:Object,TraceWriter:$dp.$JsNet.Newtonsoft.Json.Serialization.ITraceWriter,Binder:Object,Error:Object,Context:Object,DateFormatString:string,MaxDepth:number,Formatting:number,DateFormatHandling:number,DateTimeZoneHandling:number,DateParseHandling:number,FloatFormatHandling:number,FloatParseHandling:number,StringEscapeHandling:number,Culture:Object,CheckAdditionalContent:boolean}
//#endregion
//#region 'functions'
var JsonConverter: () => $dp.$JsNet.Newtonsoft.Json.JsonConverter;
var JsonSerializerSettings: () => $dp.$JsNet.Newtonsoft.Json.JsonSerializerSettings;
//#endregion
}
declare namespace $dp.$JsNet.Newtonsoft.Json.Serialization {
//#region 'interfaces'
interface IContractResolver
{}
interface IReferenceResolver
{}
interface ITraceWriter
{LevelFilter:number}
//#endregion
//#region 'functions'
var IContractResolver: () => $dp.$JsNet.Newtonsoft.Json.Serialization.IContractResolver;
var IReferenceResolver: () => $dp.$JsNet.Newtonsoft.Json.Serialization.IReferenceResolver;
var ITraceWriter: () => $dp.$JsNet.Newtonsoft.Json.Serialization.ITraceWriter;
//#endregion
}
declare namespace $dp.$JsNet.Quadratus.Mvc.Library.Json {
//#region 'interfaces'
interface DynamicContractResolver
{DynamicCodeGeneration:boolean,DefaultMembersSearchFlags:number,SerializeCompilerGeneratedMembers:boolean,IgnoreSerializableInterface:boolean,IgnoreSerializableAttribute:boolean,PropertiesToIgnore:$dp.$shared.$Array<string>}
interface JsonNetResult
{SerializerSettings:$dp.$JsNet.Newtonsoft.Json.JsonSerializerSettings,Formatting:number,ContractResolver:$dp.$JsNet.Quadratus.Mvc.Library.Json.DynamicContractResolver,ContentEncoding:Object,ContentType:string,Data:Object,JsonRequestBehavior:number,MaxJsonLength:number,RecursionLimit:number}
//#endregion
//#region 'functions'
var DynamicContractResolver: () => $dp.$JsNet.Quadratus.Mvc.Library.Json.DynamicContractResolver;
var JsonNetResult: () => $dp.$JsNet.Quadratus.Mvc.Library.Json.JsonNetResult;
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
$Return():$dp.$JsNet.Quadratus.Mvc.Library.Json.JsonNetResult
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
$Return():$dp.$JsNet.Quadratus.Mvc.Library.Json.JsonNetResult
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.DocumentModeleImpression.DeleteDMI{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{documentModeleImpressionId:number}
$Return():$dp.$JsNet.Quadratus.Mvc.Library.Json.JsonNetResult
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.DocumentModeleImpression.DuplicateDMI{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{documentModeleImpressionId:number}
$Return():$dp.$JsNet.Quadratus.Mvc.Library.Json.JsonNetResult
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
$Return():$dp.$JsNet.Quadratus.Mvc.Library.Json.JsonNetResult
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
