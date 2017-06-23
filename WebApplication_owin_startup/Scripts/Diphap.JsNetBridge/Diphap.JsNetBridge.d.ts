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
declare namespace $dp.$JsNet.WebApplication1.Models {
//#region 'interfaces'
interface ExternalLoginConfirmationViewModel
{Email:string}
interface ExternalLoginListViewModel
{ReturnUrl:string}
interface SendCodeViewModel
{SelectedProvider:string,ReturnUrl:string,RememberMe:boolean,Providers:$dp.$shared.$Array<{}>}
interface VerifyCodeViewModel
{Provider:string,Code:string,ReturnUrl:string,RememberBrowser:boolean,RememberMe:boolean}
interface ForgotViewModel
{Email:string}
interface LoginViewModel
{Email:string,Password:string,RememberMe:boolean}
interface RegisterViewModel
{Email:string,Password:string,ConfirmPassword:string}
interface ResetPasswordViewModel
{Email:string,Password:string,ConfirmPassword:string,Code:string}
interface ForgotPasswordViewModel
{Email:string}
interface FactorViewModel
{Purpose:string}
interface SetPasswordViewModel
{NewPassword:string,ConfirmPassword:string}
interface ChangePasswordViewModel
{OldPassword:string,NewPassword:string,ConfirmPassword:string}
interface AddPhoneNumberViewModel
{Number:string}
interface VerifyPhoneNumberViewModel
{Code:string,PhoneNumber:string}
interface ConfigureTwoFactorViewModel
{SelectedProvider:string,Providers:$dp.$shared.$Array<{}>}
interface ApplicationUser
{Email:string,EmailConfirmed:boolean,PasswordHash:string,SecurityStamp:string,PhoneNumber:string,PhoneNumberConfirmed:boolean,TwoFactorEnabled:boolean,LockoutEndDateUtc:Date,LockoutEnabled:boolean,AccessFailedCount:number,Roles:$dp.$shared.$Array<$dp.$JsNet.Microsoft.AspNet.Identity.EntityFramework.IdentityUserRole>,Claims:$dp.$shared.$Array<$dp.$JsNet.Microsoft.AspNet.Identity.EntityFramework.IdentityUserClaim>,Logins:$dp.$shared.$Array<$dp.$JsNet.Microsoft.AspNet.Identity.EntityFramework.IdentityUserLogin>,Id:string,UserName:string}
interface IndexViewModel
{HasPassword:boolean,Logins:$dp.$shared.$Array<$dp.$JsNet.Microsoft.AspNet.Identity.UserLoginInfo>,PhoneNumber:string,TwoFactor:boolean,BrowserRemembered:boolean}
interface ManageLoginsViewModel
{CurrentLogins:$dp.$shared.$Array<$dp.$JsNet.Microsoft.AspNet.Identity.UserLoginInfo>,OtherLogins:$dp.$shared.$Array<$dp.$JsNet.Microsoft.Owin.Security.AuthenticationDescription>}
interface ApplicationDbContext
{Users:$dp.$shared.$Array<$dp.$JsNet.WebApplication1.Models.ApplicationUser>,Roles:$dp.$shared.$Array<$dp.$JsNet.Microsoft.AspNet.Identity.EntityFramework.IdentityRole>,RequireUniqueEmail:boolean,Database:{},ChangeTracker:{},Configuration:{}}
//#endregion
//#region 'functions'
var ExternalLoginConfirmationViewModel: () => $dp.$JsNet.WebApplication1.Models.ExternalLoginConfirmationViewModel;
var ExternalLoginListViewModel: () => $dp.$JsNet.WebApplication1.Models.ExternalLoginListViewModel;
var SendCodeViewModel: () => $dp.$JsNet.WebApplication1.Models.SendCodeViewModel;
var VerifyCodeViewModel: () => $dp.$JsNet.WebApplication1.Models.VerifyCodeViewModel;
var ForgotViewModel: () => $dp.$JsNet.WebApplication1.Models.ForgotViewModel;
var LoginViewModel: () => $dp.$JsNet.WebApplication1.Models.LoginViewModel;
var RegisterViewModel: () => $dp.$JsNet.WebApplication1.Models.RegisterViewModel;
var ResetPasswordViewModel: () => $dp.$JsNet.WebApplication1.Models.ResetPasswordViewModel;
var ForgotPasswordViewModel: () => $dp.$JsNet.WebApplication1.Models.ForgotPasswordViewModel;
var FactorViewModel: () => $dp.$JsNet.WebApplication1.Models.FactorViewModel;
var SetPasswordViewModel: () => $dp.$JsNet.WebApplication1.Models.SetPasswordViewModel;
var ChangePasswordViewModel: () => $dp.$JsNet.WebApplication1.Models.ChangePasswordViewModel;
var AddPhoneNumberViewModel: () => $dp.$JsNet.WebApplication1.Models.AddPhoneNumberViewModel;
var VerifyPhoneNumberViewModel: () => $dp.$JsNet.WebApplication1.Models.VerifyPhoneNumberViewModel;
var ConfigureTwoFactorViewModel: () => $dp.$JsNet.WebApplication1.Models.ConfigureTwoFactorViewModel;
var ApplicationUser: () => $dp.$JsNet.WebApplication1.Models.ApplicationUser;
var IndexViewModel: () => $dp.$JsNet.WebApplication1.Models.IndexViewModel;
var ManageLoginsViewModel: () => $dp.$JsNet.WebApplication1.Models.ManageLoginsViewModel;
var ApplicationDbContext: () => $dp.$JsNet.WebApplication1.Models.ApplicationDbContext;
//#endregion
}
declare namespace $dp.$JsNet.Microsoft.AspNet.Identity.EntityFramework {
//#region 'interfaces'
interface IdentityUserRole
{UserId:string,RoleId:string}
interface IdentityUserClaim
{Id:number,UserId:string,ClaimType:string,ClaimValue:string}
interface IdentityUserLogin
{LoginProvider:string,ProviderKey:string,UserId:string}
interface IdentityRole
{Users:$dp.$shared.$Array<$dp.$JsNet.Microsoft.AspNet.Identity.EntityFramework.IdentityUserRole>,Id:string,Name:string}
//#endregion
//#region 'functions'
var IdentityUserRole: () => $dp.$JsNet.Microsoft.AspNet.Identity.EntityFramework.IdentityUserRole;
var IdentityUserClaim: () => $dp.$JsNet.Microsoft.AspNet.Identity.EntityFramework.IdentityUserClaim;
var IdentityUserLogin: () => $dp.$JsNet.Microsoft.AspNet.Identity.EntityFramework.IdentityUserLogin;
var IdentityRole: () => $dp.$JsNet.Microsoft.AspNet.Identity.EntityFramework.IdentityRole;
//#endregion
}
declare namespace $dp.$JsNet.Microsoft.AspNet.Identity {
//#region 'interfaces'
interface UserLoginInfo
{LoginProvider:string,ProviderKey:string}
//#endregion
//#region 'functions'
var UserLoginInfo: () => $dp.$JsNet.Microsoft.AspNet.Identity.UserLoginInfo;
//#endregion
}
declare namespace $dp.$JsNet.Microsoft.Owin.Security {
//#region 'interfaces'
interface AuthenticationDescription
{Properties:$dp.$shared.$Array<string>,AuthenticationType:string,Caption:string}
//#endregion
//#region 'functions'
var AuthenticationDescription: () => $dp.$JsNet.Microsoft.Owin.Security.AuthenticationDescription;
//#endregion
}

//#region 'Enum'
declare namespace $dp.$JsNet.WebApplication1.Controllers.$JsNs$_ManageController {
interface ManageMessageId {AddPhoneSuccess:{ $Key:string,$Value:number },ChangePasswordSuccess:{ $Key:string,$Value:number },SetTwoFactorSuccess:{ $Key:string,$Value:number },SetPasswordSuccess:{ $Key:string,$Value:number },RemoveLoginSuccess:{ $Key:string,$Value:number },RemovePhoneSuccess:{ $Key:string,$Value:number },Error:{ $Key:string,$Value:number }} 
}
//#endregion

declare namespace $dp.$JsNet.$UrlSet.Account.Login{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{returnUrl:string}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
interface _$action1 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{model:$dp.$JsNet.WebApplication1.Models.LoginViewModel,returnUrl:string}
$Return():{}
$Enums():{}
}
var $action1: _$action1;
}
declare namespace $dp.$JsNet.$UrlSet.Account.VerifyCode{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{provider:string,returnUrl:string,rememberMe:boolean}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
interface _$action1 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{model:$dp.$JsNet.WebApplication1.Models.VerifyCodeViewModel}
$Return():{}
$Enums():{}
}
var $action1: _$action1;
}
declare namespace $dp.$JsNet.$UrlSet.Account.Register{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
interface _$action1 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{model:$dp.$JsNet.WebApplication1.Models.RegisterViewModel}
$Return():{}
$Enums():{}
}
var $action1: _$action1;
}
declare namespace $dp.$JsNet.$UrlSet.Account.ConfirmEmail{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{userId:string,code:string}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Account.ForgotPassword{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
interface _$action1 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{model:$dp.$JsNet.WebApplication1.Models.ForgotPasswordViewModel}
$Return():{}
$Enums():{}
}
var $action1: _$action1;
}
declare namespace $dp.$JsNet.$UrlSet.Account.ForgotPasswordConfirmation{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Account.ResetPassword{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{code:string}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
interface _$action1 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{model:$dp.$JsNet.WebApplication1.Models.ResetPasswordViewModel}
$Return():{}
$Enums():{}
}
var $action1: _$action1;
}
declare namespace $dp.$JsNet.$UrlSet.Account.ResetPasswordConfirmation{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Account.ExternalLogin{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{provider:string,returnUrl:string}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Account.SendCode{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{returnUrl:string,rememberMe:boolean}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
interface _$action1 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{model:$dp.$JsNet.WebApplication1.Models.SendCodeViewModel}
$Return():{}
$Enums():{}
}
var $action1: _$action1;
}
declare namespace $dp.$JsNet.$UrlSet.Account.ExternalLoginCallback{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{returnUrl:string}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Account.ExternalLoginConfirmation{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{model:$dp.$JsNet.WebApplication1.Models.ExternalLoginConfirmationViewModel,returnUrl:string}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Account.LogOff{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Account.ExternalLoginFailure{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{}
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
declare namespace $dp.$JsNet.$UrlSet.Home.About{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Home.Contact{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Manage.Index{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{message:number}
$Return():{}
$Enums():{message: $dp.$JsNet.WebApplication1.Controllers.$JsNs$_ManageController.ManageMessageId}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Manage.RemoveLogin{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{loginProvider:string,providerKey:string}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Manage.AddPhoneNumber{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
interface _$action1 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{model:$dp.$JsNet.WebApplication1.Models.AddPhoneNumberViewModel}
$Return():{}
$Enums():{}
}
var $action1: _$action1;
}
declare namespace $dp.$JsNet.$UrlSet.Manage.EnableTwoFactorAuthentication{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Manage.DisableTwoFactorAuthentication{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Manage.VerifyPhoneNumber{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{phoneNumber:string}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
interface _$action1 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{model:$dp.$JsNet.WebApplication1.Models.VerifyPhoneNumberViewModel}
$Return():{}
$Enums():{}
}
var $action1: _$action1;
}
declare namespace $dp.$JsNet.$UrlSet.Manage.RemovePhoneNumber{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Manage.ChangePassword{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
interface _$action1 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{model:$dp.$JsNet.WebApplication1.Models.ChangePasswordViewModel}
$Return():{}
$Enums():{}
}
var $action1: _$action1;
}
declare namespace $dp.$JsNet.$UrlSet.Manage.SetPassword{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
interface _$action1 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{model:$dp.$JsNet.WebApplication1.Models.SetPasswordViewModel}
$Return():{}
$Enums():{}
}
var $action1: _$action1;
}
declare namespace $dp.$JsNet.$UrlSet.Manage.ManageLogins{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{message:number}
$Return():{}
$Enums():{message: $dp.$JsNet.WebApplication1.Controllers.$JsNs$_ManageController.ManageMessageId}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Manage.LinkLogin{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{provider:string}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Manage.LinkLoginCallback{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
import $dpUrlSet = $dp.$JsNet.$UrlSet;
