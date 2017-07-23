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
declare namespace $dp.$JsNet.WebApplication_vide.Controllers {
//#region 'interfaces'
interface EffetFacture
{EffetFactureId:number,FactureId:number,DateEcheance:Date,ModeReglementId:number,Montant:number,UtilisateurId:number,DateCreation:Date,DateModif:Date,CreateurId:number,PointageId:number,Pointage:$dp.$JsNet.WebApplication_vide.Controllers.Pointage,Ecart:boolean,EtatId:number,SessionComptabilisationId:number,NiveauRelanceId:number,DateDerniereRelance:Date,NumDoc:string,DateDocument:Date}
interface Pointage
{PointageId:number,DossierId:number,TiersId:number,DatePointage:Date,Lettrage:string,UtilisateurId:number,DateCreation:Date,DateModif:Date,CreateurId:number,EffetFacture_unique:$dp.$JsNet.WebApplication_vide.Controllers.EffetFacture}
//#endregion
//#region 'functions'
var EffetFacture: () => $dp.$JsNet.WebApplication_vide.Controllers.EffetFacture;
var Pointage: () => $dp.$JsNet.WebApplication_vide.Controllers.Pointage;
//#endregion
}

//#region 'Enum'
declare namespace $dp.$JsNet.WebApplication_vide.Controllers {
interface EnumTypeDocument {effetFacture:{ $Key:string,$Value:number },demandePrix:{ $Key:string,$Value:number },commande:{ $Key:string,$Value:number },bonReception:{ $Key:string,$Value:number },factureAchat:{ $Key:string,$Value:number },factureVente:{ $Key:string,$Value:number },brouillonAchat:{ $Key:string,$Value:number },brouillonVente:{ $Key:string,$Value:number },devis:{ $Key:string,$Value:number },reglement:{ $Key:string,$Value:number },ecart:{ $Key:string,$Value:number },relance:{ $Key:string,$Value:number },bonLivraison:{ $Key:string,$Value:number },acompte:{ $Key:string,$Value:number }} 
interface EnumEtatReglement {EnCours:{ $Key:string,$Value:number },Comptabilise:{ $Key:string,$Value:number }} 
interface EnumTypeCompte {Auxiliaire_TTC:{ $Key:string,$Value:number },General_HT:{ $Key:string,$Value:number },General_TVA:{ $Key:string,$Value:number },General_Reglement:{ $Key:string,$Value:number },Auxiliaire_Reglement:{ $Key:string,$Value:number }} 
}
//#endregion

declare namespace $dp.$JsNet.$UrlSet.Test.Index_test{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{ef:$dp.$JsNet.WebApplication_vide.Controllers.EffetFacture}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Test.Index{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
import $dpUrlSet = $dp.$JsNet.$UrlSet;
