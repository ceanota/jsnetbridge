﻿(function () {

//#region "COPYRIGHT"
/***************************************************************************************************************
            Diphap.JsNetBridge.Mvc v1.1.0.6
            Build ASP.NET Objects API for javascript
            Copyright (c)  2015

            http://jsnet.codeplex.com/
            The MIT License (MIT)
            
            Creator:    diphap@gmail.com
                        
*/
//#endregion


//#region [references]
/*
System.Web.Mvc.ActionResult, System.Web.Mvc, Version=4.0.0.1, Culture=neutral, PublicKeyToken=31bf3856ad364e35 - C:\Windows\Microsoft.Net\assembly\GAC_MSIL\System.Web.Mvc\v4.0_4.0.0.1__31bf3856ad364e35\System.Web.Mvc.dll
System.Web.Http.ApiController, System.Web.Http, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35 - C:\Windows\Microsoft.Net\assembly\GAC_MSIL\System.Web.Http\v4.0_4.0.0.0__31bf3856ad364e35\System.Web.Http.dll
System.Net.Http.HttpResponseMessage, System.Net.Http, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a - C:\Windows\Microsoft.Net\assembly\GAC_MSIL\System.Net.Http\v4.0_4.0.0.0__b03f5f7f11d50a3a\System.Net.Http.dll
System.Web.Mvc.JsonResult, System.Web.Mvc, Version=4.0.0.1, Culture=neutral, PublicKeyToken=31bf3856ad364e35 - C:\Windows\Microsoft.Net\assembly\GAC_MSIL\System.Web.Mvc\v4.0_4.0.0.1__31bf3856ad364e35\System.Web.Mvc.dll
System.Web.Mvc.ViewResult, System.Web.Mvc, Version=4.0.0.1, Culture=neutral, PublicKeyToken=31bf3856ad364e35 - C:\Windows\Microsoft.Net\assembly\GAC_MSIL\System.Web.Mvc\v4.0_4.0.0.1__31bf3856ad364e35\System.Web.Mvc.dll
*/
//#endregion




(function () {
var _stampFunc = function() { return $dp.$JsNet; };
window.$dp = window.$dp || {};
window.$dp.$JsNet = window.$dp.$JsNet || {};
window.$dp.$JsNet.MvcAppExample = window.$dp.$JsNet.MvcAppExample || {};
window.$dp.$JsNet.MvcAppExample.Models = window.$dp.$JsNet.MvcAppExample.Models || {};
window.$dp.$JsNet.Newtonsoft = window.$dp.$JsNet.Newtonsoft || {};
window.$dp.$JsNet.Newtonsoft.Json = window.$dp.$JsNet.Newtonsoft.Json || {};
window.$dp.$JsNet.Newtonsoft.Json.Serialization = window.$dp.$JsNet.Newtonsoft.Json.Serialization || {};
$dp.$JsNet.MvcAppExample.Models.UserProfile = $dp.$JsNet.MvcAppExample.Models.UserProfile || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"UserId":0,"UserName":""};obj.$stamp = _stampFunc; return obj; };
$dp.$JsNet.MvcAppExample.Models.RegisterExternalLoginModel = $dp.$JsNet.MvcAppExample.Models.RegisterExternalLoginModel || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"UserName":"","ExternalLoginData":""};obj.$stamp = _stampFunc; return obj; };
$dp.$JsNet.MvcAppExample.Models.LocalPasswordModel = $dp.$JsNet.MvcAppExample.Models.LocalPasswordModel || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"OldPassword":"","NewPassword":"","ConfirmPassword":""};obj.$stamp = _stampFunc; return obj; };
$dp.$JsNet.MvcAppExample.Models.LoginModel = $dp.$JsNet.MvcAppExample.Models.LoginModel || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"UserName":"","Password":"","RememberMe":false};obj.$stamp = _stampFunc; return obj; };
$dp.$JsNet.MvcAppExample.Models.RegisterModel = $dp.$JsNet.MvcAppExample.Models.RegisterModel || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"UserName":"","Password":"","ConfirmPassword":""};obj.$stamp = _stampFunc; return obj; };
$dp.$JsNet.MvcAppExample.Models.ExternalLogin = $dp.$JsNet.MvcAppExample.Models.ExternalLogin || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"Provider":"","ProviderDisplayName":"","ProviderUserId":""};obj.$stamp = _stampFunc; return obj; };
$dp.$JsNet.Newtonsoft.Json.Serialization.IContractResolver = $dp.$JsNet.Newtonsoft.Json.Serialization.IContractResolver || function(){ var args = Array.prototype.slice.call(arguments); var obj = {};obj.$stamp = _stampFunc; return obj; };
$dp.$JsNet.Newtonsoft.Json.Serialization.DefaultContractResolver = $dp.$JsNet.Newtonsoft.Json.Serialization.DefaultContractResolver || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"DynamicCodeGeneration":false,"DefaultMembersSearchFlags":0,"SerializeCompilerGeneratedMembers":false,"IgnoreSerializableInterface":false,"IgnoreSerializableAttribute":false};obj.$stamp = _stampFunc; return obj; };
$dp.$JsNet.Newtonsoft.Json.Serialization.CamelCasePropertyNamesContractResolver = $dp.$JsNet.Newtonsoft.Json.Serialization.CamelCasePropertyNamesContractResolver || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"DynamicCodeGeneration":false,"DefaultMembersSearchFlags":0,"SerializeCompilerGeneratedMembers":false,"IgnoreSerializableInterface":false,"IgnoreSerializableAttribute":false};obj.$stamp = _stampFunc; return obj; };
$dp.$JsNet.Newtonsoft.Json.Serialization.IReferenceResolver = $dp.$JsNet.Newtonsoft.Json.Serialization.IReferenceResolver || function(){ var args = Array.prototype.slice.call(arguments); var obj = {};obj.$stamp = _stampFunc; return obj; };
$dp.$JsNet.Newtonsoft.Json.Serialization.DefaultSerializationBinder = $dp.$JsNet.Newtonsoft.Json.Serialization.DefaultSerializationBinder || function(){ var args = Array.prototype.slice.call(arguments); var obj = {};obj.$stamp = _stampFunc; return obj; };
$dp.$JsNet.Newtonsoft.Json.Serialization.ITraceWriter = $dp.$JsNet.Newtonsoft.Json.Serialization.ITraceWriter || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"LevelFilter":0};obj.$stamp = _stampFunc; return obj; };
$dp.$JsNet.Newtonsoft.Json.Serialization.DiagnosticsTraceWriter = $dp.$JsNet.Newtonsoft.Json.Serialization.DiagnosticsTraceWriter || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"LevelFilter":0};obj.$stamp = _stampFunc; return obj; };
$dp.$JsNet.Newtonsoft.Json.Serialization.IValueProvider = $dp.$JsNet.Newtonsoft.Json.Serialization.IValueProvider || function(){ var args = Array.prototype.slice.call(arguments); var obj = {};obj.$stamp = _stampFunc; return obj; };
$dp.$JsNet.Newtonsoft.Json.Serialization.DynamicValueProvider = $dp.$JsNet.Newtonsoft.Json.Serialization.DynamicValueProvider || function(){ var args = Array.prototype.slice.call(arguments); var obj = {};obj.$stamp = _stampFunc; return obj; };
$dp.$JsNet.Newtonsoft.Json.Serialization.ErrorContext = $dp.$JsNet.Newtonsoft.Json.Serialization.ErrorContext || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"Path":"","Handled":false,"Error":{},"OriginalObject":{},"Member":{}};obj.$stamp = _stampFunc; return obj; };
$dp.$JsNet.Newtonsoft.Json.Serialization.ExpressionValueProvider = $dp.$JsNet.Newtonsoft.Json.Serialization.ExpressionValueProvider || function(){ var args = Array.prototype.slice.call(arguments); var obj = {};obj.$stamp = _stampFunc; return obj; };
$dp.$JsNet.Newtonsoft.Json.Serialization.IAttributeProvider = $dp.$JsNet.Newtonsoft.Json.Serialization.IAttributeProvider || function(){ var args = Array.prototype.slice.call(arguments); var obj = {};obj.$stamp = _stampFunc; return obj; };
$dp.$JsNet.Newtonsoft.Json.JsonConverter = $dp.$JsNet.Newtonsoft.Json.JsonConverter || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"CanRead":false,"CanWrite":false};obj.$stamp = _stampFunc; return obj; };
$dp.$JsNet.Newtonsoft.Json.Serialization.SerializationCallback = $dp.$JsNet.Newtonsoft.Json.Serialization.SerializationCallback || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"Method":{},"Target":{}};obj.$stamp = _stampFunc; return obj; };
$dp.$JsNet.Newtonsoft.Json.Serialization.SerializationErrorCallback = $dp.$JsNet.Newtonsoft.Json.Serialization.SerializationErrorCallback || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"Method":{},"Target":{}};obj.$stamp = _stampFunc; return obj; };
$dp.$JsNet.Newtonsoft.Json.Serialization.ExtensionDataSetter = $dp.$JsNet.Newtonsoft.Json.Serialization.ExtensionDataSetter || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"Method":{},"Target":{}};obj.$stamp = _stampFunc; return obj; };
$dp.$JsNet.Newtonsoft.Json.Serialization.ExtensionDataGetter = $dp.$JsNet.Newtonsoft.Json.Serialization.ExtensionDataGetter || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"Method":{},"Target":{}};obj.$stamp = _stampFunc; return obj; };
$dp.$JsNet.Newtonsoft.Json.Serialization.MemoryTraceWriter = $dp.$JsNet.Newtonsoft.Json.Serialization.MemoryTraceWriter || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"LevelFilter":0};obj.$stamp = _stampFunc; return obj; };
$dp.$JsNet.Newtonsoft.Json.Serialization.OnErrorAttribute = $dp.$JsNet.Newtonsoft.Json.Serialization.OnErrorAttribute || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"TypeId":{}};obj.$stamp = _stampFunc; return obj; };
$dp.$JsNet.Newtonsoft.Json.Serialization.ReflectionAttributeProvider = $dp.$JsNet.Newtonsoft.Json.Serialization.ReflectionAttributeProvider || function(){ var args = Array.prototype.slice.call(arguments); var obj = {};obj.$stamp = _stampFunc; return obj; };
$dp.$JsNet.Newtonsoft.Json.Serialization.ReflectionValueProvider = $dp.$JsNet.Newtonsoft.Json.Serialization.ReflectionValueProvider || function(){ var args = Array.prototype.slice.call(arguments); var obj = {};obj.$stamp = _stampFunc; return obj; };
$dp.$JsNet.Newtonsoft.Json.Serialization.ErrorEventArgs = $dp.$JsNet.Newtonsoft.Json.Serialization.ErrorEventArgs || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"ErrorContext":$dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.Newtonsoft.Json.Serialization.ErrorContext),"CurrentObject":{}};obj.$stamp = _stampFunc; return obj; };
$dp.$JsNet.Newtonsoft.Json.Serialization.JsonContract = $dp.$JsNet.Newtonsoft.Json.Serialization.JsonContract || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"IsReference":false,"Converter":$dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.Newtonsoft.Json.JsonConverter),"OnDeserializedCallbacks":$dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.Newtonsoft.Json.Serialization.SerializationCallback)),"OnDeserializingCallbacks":$dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.Newtonsoft.Json.Serialization.SerializationCallback)),"OnSerializedCallbacks":$dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.Newtonsoft.Json.Serialization.SerializationCallback)),"OnSerializingCallbacks":$dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.Newtonsoft.Json.Serialization.SerializationCallback)),"OnErrorCallbacks":$dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.Newtonsoft.Json.Serialization.SerializationErrorCallback)),"DefaultCreatorNonPublic":false,"UnderlyingType":{},"CreatedType":{},"OnDeserialized":{},"OnDeserializing":{},"OnSerialized":{},"OnSerializing":{},"OnError":{},"DefaultCreator":{}};obj.$stamp = _stampFunc; return obj; };
$dp.$JsNet.Newtonsoft.Json.Serialization.JsonContainerContract = $dp.$JsNet.Newtonsoft.Json.Serialization.JsonContainerContract || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"ItemConverter":$dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.Newtonsoft.Json.JsonConverter),"ItemIsReference":false,"ItemReferenceLoopHandling":0,"ItemTypeNameHandling":0,"IsReference":false,"Converter":$dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.Newtonsoft.Json.JsonConverter),"OnDeserializedCallbacks":$dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.Newtonsoft.Json.Serialization.SerializationCallback)),"OnDeserializingCallbacks":$dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.Newtonsoft.Json.Serialization.SerializationCallback)),"OnSerializedCallbacks":$dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.Newtonsoft.Json.Serialization.SerializationCallback)),"OnSerializingCallbacks":$dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.Newtonsoft.Json.Serialization.SerializationCallback)),"OnErrorCallbacks":$dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.Newtonsoft.Json.Serialization.SerializationErrorCallback)),"DefaultCreatorNonPublic":false,"UnderlyingType":{},"CreatedType":{},"OnDeserialized":{},"OnDeserializing":{},"OnSerialized":{},"OnSerializing":{},"OnError":{},"DefaultCreator":{}};obj.$stamp = _stampFunc; return obj; };
$dp.$JsNet.Newtonsoft.Json.Serialization.JsonArrayContract = $dp.$JsNet.Newtonsoft.Json.Serialization.JsonArrayContract || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"IsMultidimensionalArray":false,"ItemConverter":$dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.Newtonsoft.Json.JsonConverter),"ItemIsReference":false,"ItemReferenceLoopHandling":0,"ItemTypeNameHandling":0,"IsReference":false,"Converter":$dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.Newtonsoft.Json.JsonConverter),"OnDeserializedCallbacks":$dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.Newtonsoft.Json.Serialization.SerializationCallback)),"OnDeserializingCallbacks":$dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.Newtonsoft.Json.Serialization.SerializationCallback)),"OnSerializedCallbacks":$dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.Newtonsoft.Json.Serialization.SerializationCallback)),"OnSerializingCallbacks":$dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.Newtonsoft.Json.Serialization.SerializationCallback)),"OnErrorCallbacks":$dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.Newtonsoft.Json.Serialization.SerializationErrorCallback)),"DefaultCreatorNonPublic":false,"CollectionItemType":{},"UnderlyingType":{},"CreatedType":{},"OnDeserialized":{},"OnDeserializing":{},"OnSerialized":{},"OnSerializing":{},"OnError":{},"DefaultCreator":{}};obj.$stamp = _stampFunc; return obj; };
$dp.$JsNet.Newtonsoft.Json.Serialization.JsonDictionaryContract = $dp.$JsNet.Newtonsoft.Json.Serialization.JsonDictionaryContract || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"ItemConverter":$dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.Newtonsoft.Json.JsonConverter),"ItemIsReference":false,"ItemReferenceLoopHandling":0,"ItemTypeNameHandling":0,"IsReference":false,"Converter":$dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.Newtonsoft.Json.JsonConverter),"OnDeserializedCallbacks":$dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.Newtonsoft.Json.Serialization.SerializationCallback)),"OnDeserializingCallbacks":$dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.Newtonsoft.Json.Serialization.SerializationCallback)),"OnSerializedCallbacks":$dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.Newtonsoft.Json.Serialization.SerializationCallback)),"OnSerializingCallbacks":$dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.Newtonsoft.Json.Serialization.SerializationCallback)),"OnErrorCallbacks":$dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.Newtonsoft.Json.Serialization.SerializationErrorCallback)),"DefaultCreatorNonPublic":false,"PropertyNameResolver":{},"DictionaryKeyResolver":{},"DictionaryKeyType":{},"DictionaryValueType":{},"UnderlyingType":{},"CreatedType":{},"OnDeserialized":{},"OnDeserializing":{},"OnSerialized":{},"OnSerializing":{},"OnError":{},"DefaultCreator":{}};obj.$stamp = _stampFunc; return obj; };
$dp.$JsNet.Newtonsoft.Json.Serialization.JsonDynamicContract = $dp.$JsNet.Newtonsoft.Json.Serialization.JsonDynamicContract || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"Properties":[],"ItemConverter":$dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.Newtonsoft.Json.JsonConverter),"ItemIsReference":false,"ItemReferenceLoopHandling":0,"ItemTypeNameHandling":0,"IsReference":false,"Converter":$dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.Newtonsoft.Json.JsonConverter),"OnDeserializedCallbacks":$dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.Newtonsoft.Json.Serialization.SerializationCallback)),"OnDeserializingCallbacks":$dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.Newtonsoft.Json.Serialization.SerializationCallback)),"OnSerializedCallbacks":$dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.Newtonsoft.Json.Serialization.SerializationCallback)),"OnSerializingCallbacks":$dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.Newtonsoft.Json.Serialization.SerializationCallback)),"OnErrorCallbacks":$dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.Newtonsoft.Json.Serialization.SerializationErrorCallback)),"DefaultCreatorNonPublic":false,"PropertyNameResolver":{},"UnderlyingType":{},"CreatedType":{},"OnDeserialized":{},"OnDeserializing":{},"OnSerialized":{},"OnSerializing":{},"OnError":{},"DefaultCreator":{}};obj.$stamp = _stampFunc; return obj; };
$dp.$JsNet.Newtonsoft.Json.Serialization.JsonISerializableContract = $dp.$JsNet.Newtonsoft.Json.Serialization.JsonISerializableContract || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"ItemConverter":$dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.Newtonsoft.Json.JsonConverter),"ItemIsReference":false,"ItemReferenceLoopHandling":0,"ItemTypeNameHandling":0,"IsReference":false,"Converter":$dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.Newtonsoft.Json.JsonConverter),"OnDeserializedCallbacks":$dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.Newtonsoft.Json.Serialization.SerializationCallback)),"OnDeserializingCallbacks":$dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.Newtonsoft.Json.Serialization.SerializationCallback)),"OnSerializedCallbacks":$dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.Newtonsoft.Json.Serialization.SerializationCallback)),"OnSerializingCallbacks":$dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.Newtonsoft.Json.Serialization.SerializationCallback)),"OnErrorCallbacks":$dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.Newtonsoft.Json.Serialization.SerializationErrorCallback)),"DefaultCreatorNonPublic":false,"ISerializableCreator":{},"UnderlyingType":{},"CreatedType":{},"OnDeserialized":{},"OnDeserializing":{},"OnSerialized":{},"OnSerializing":{},"OnError":{},"DefaultCreator":{}};obj.$stamp = _stampFunc; return obj; };
$dp.$JsNet.Newtonsoft.Json.Serialization.JsonLinqContract = $dp.$JsNet.Newtonsoft.Json.Serialization.JsonLinqContract || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"IsReference":false,"Converter":$dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.Newtonsoft.Json.JsonConverter),"OnDeserializedCallbacks":$dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.Newtonsoft.Json.Serialization.SerializationCallback)),"OnDeserializingCallbacks":$dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.Newtonsoft.Json.Serialization.SerializationCallback)),"OnSerializedCallbacks":$dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.Newtonsoft.Json.Serialization.SerializationCallback)),"OnSerializingCallbacks":$dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.Newtonsoft.Json.Serialization.SerializationCallback)),"OnErrorCallbacks":$dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.Newtonsoft.Json.Serialization.SerializationErrorCallback)),"DefaultCreatorNonPublic":false,"UnderlyingType":{},"CreatedType":{},"OnDeserialized":{},"OnDeserializing":{},"OnSerialized":{},"OnSerializing":{},"OnError":{},"DefaultCreator":{}};obj.$stamp = _stampFunc; return obj; };
$dp.$JsNet.Newtonsoft.Json.Serialization.JsonObjectContract = $dp.$JsNet.Newtonsoft.Json.Serialization.JsonObjectContract || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"MemberSerialization":0,"ItemRequired":0,"Properties":[],"ConstructorParameters":[],"CreatorParameters":[],"ExtensionDataSetter":$dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.Newtonsoft.Json.Serialization.ExtensionDataSetter),"ExtensionDataGetter":$dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.Newtonsoft.Json.Serialization.ExtensionDataGetter),"ItemConverter":$dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.Newtonsoft.Json.JsonConverter),"ItemIsReference":false,"ItemReferenceLoopHandling":0,"ItemTypeNameHandling":0,"IsReference":false,"Converter":$dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.Newtonsoft.Json.JsonConverter),"OnDeserializedCallbacks":$dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.Newtonsoft.Json.Serialization.SerializationCallback)),"OnDeserializingCallbacks":$dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.Newtonsoft.Json.Serialization.SerializationCallback)),"OnSerializedCallbacks":$dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.Newtonsoft.Json.Serialization.SerializationCallback)),"OnSerializingCallbacks":$dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.Newtonsoft.Json.Serialization.SerializationCallback)),"OnErrorCallbacks":$dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.Newtonsoft.Json.Serialization.SerializationErrorCallback)),"DefaultCreatorNonPublic":false,"OverrideConstructor":{},"ParametrizedConstructor":{},"OverrideCreator":{},"UnderlyingType":{},"CreatedType":{},"OnDeserialized":{},"OnDeserializing":{},"OnSerialized":{},"OnSerializing":{},"OnError":{},"DefaultCreator":{}};obj.$stamp = _stampFunc; return obj; };
$dp.$JsNet.Newtonsoft.Json.Serialization.JsonPrimitiveContract = $dp.$JsNet.Newtonsoft.Json.Serialization.JsonPrimitiveContract || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"IsReference":false,"Converter":$dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.Newtonsoft.Json.JsonConverter),"OnDeserializedCallbacks":$dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.Newtonsoft.Json.Serialization.SerializationCallback)),"OnDeserializingCallbacks":$dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.Newtonsoft.Json.Serialization.SerializationCallback)),"OnSerializedCallbacks":$dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.Newtonsoft.Json.Serialization.SerializationCallback)),"OnSerializingCallbacks":$dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.Newtonsoft.Json.Serialization.SerializationCallback)),"OnErrorCallbacks":$dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.Newtonsoft.Json.Serialization.SerializationErrorCallback)),"DefaultCreatorNonPublic":false,"UnderlyingType":{},"CreatedType":{},"OnDeserialized":{},"OnDeserializing":{},"OnSerialized":{},"OnSerializing":{},"OnError":{},"DefaultCreator":{}};obj.$stamp = _stampFunc; return obj; };
$dp.$JsNet.Newtonsoft.Json.Serialization.JsonProperty = $dp.$JsNet.Newtonsoft.Json.Serialization.JsonProperty || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"PropertyName":"","Order":0,"UnderlyingName":"","ValueProvider":$dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.Newtonsoft.Json.Serialization.IValueProvider),"AttributeProvider":$dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.Newtonsoft.Json.Serialization.IAttributeProvider),"Converter":$dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.Newtonsoft.Json.JsonConverter),"MemberConverter":$dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.Newtonsoft.Json.JsonConverter),"Ignored":false,"Readable":false,"Writable":false,"HasMemberAttribute":false,"Required":0,"IsReference":false,"NullValueHandling":0,"DefaultValueHandling":0,"ReferenceLoopHandling":0,"ObjectCreationHandling":0,"TypeNameHandling":0,"ItemConverter":$dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.Newtonsoft.Json.JsonConverter),"ItemIsReference":false,"ItemTypeNameHandling":0,"ItemReferenceLoopHandling":0,"DeclaringType":{},"PropertyType":{},"DefaultValue":{},"ShouldSerialize":{},"GetIsSpecified":{},"SetIsSpecified":{}};obj.$stamp = _stampFunc; return obj; };
$dp.$JsNet.Newtonsoft.Json.Serialization.JsonStringContract = $dp.$JsNet.Newtonsoft.Json.Serialization.JsonStringContract || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"IsReference":false,"Converter":$dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.Newtonsoft.Json.JsonConverter),"OnDeserializedCallbacks":$dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.Newtonsoft.Json.Serialization.SerializationCallback)),"OnDeserializingCallbacks":$dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.Newtonsoft.Json.Serialization.SerializationCallback)),"OnSerializedCallbacks":$dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.Newtonsoft.Json.Serialization.SerializationCallback)),"OnSerializingCallbacks":$dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.Newtonsoft.Json.Serialization.SerializationCallback)),"OnErrorCallbacks":$dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.Newtonsoft.Json.Serialization.SerializationErrorCallback)),"DefaultCreatorNonPublic":false,"UnderlyingType":{},"CreatedType":{},"OnDeserialized":{},"OnDeserializing":{},"OnSerialized":{},"OnSerializing":{},"OnError":{},"DefaultCreator":{}};obj.$stamp = _stampFunc; return obj; };
$dp.$JsNet.Newtonsoft.Json.Serialization.JsonPropertyCollection = $dp.$JsNet.Newtonsoft.Json.Serialization.JsonPropertyCollection || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"Item":$dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.Newtonsoft.Json.Serialization.JsonProperty),"Count":0,"Item":$dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.Newtonsoft.Json.Serialization.JsonProperty),"Comparer":{}};obj.$stamp = _stampFunc; return obj; };
window.$dp = window.$dp || {};
window.$dp.$JsNet = window.$dp.$JsNet || {};
window.$dp.$JsNet.Newtonsoft = window.$dp.$JsNet.Newtonsoft || {};
window.$dp.$JsNet.Newtonsoft.Json = window.$dp.$JsNet.Newtonsoft.Json || {};
window.$dp.$JsNet.Newtonsoft.Json.Serialization = window.$dp.$JsNet.Newtonsoft.Json.Serialization || {};
$dp.$JsNet.Newtonsoft.Json.Serialization.JsonContractType = $dp.$JsNet.Newtonsoft.Json.Serialization.JsonContractType || {"None":{ "Key":"None","Value":0 },"Object":{ "Key":"Object","Value":1 },"Array":{ "Key":"Array","Value":2 },"Primitive":{ "Key":"Primitive","Value":3 },"String":{ "Key":"String","Value":4 },"Dictionary":{ "Key":"Dictionary","Value":5 },"Dynamic":{ "Key":"Dynamic","Value":6 },"Serializable":{ "Key":"Serializable","Value":7 },"Linq":{ "Key":"Linq","Value":8 }};
window.$dp = window.$dp || {};window.$dp.$JsNet = window.$dp.$JsNet || {};
$dp.$JsNet.$UrlSet = {"Account":{"Login": function actionFactory () { try { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { try { var action = {};action.$Params = function(){  var obj = {"returnUrl":""}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {}; return obj; };return action; } catch(ex) { throw ex;  } }();action.$sig1 = function actionFactory () { try { var action = {};action.$Params = function(){  var obj = {"model":$dp.$JsNet.MvcAppExample.Models.LoginModel(),"returnUrl":""}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {}; return obj; };return action; } catch(ex) { throw ex;  } }();return action; } catch(ex) { throw ex;  } }(),"LogOff": function actionFactory () { try { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { try { var action = {};action.$Params = function(){  var obj = null; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {}; return obj; };return action; } catch(ex) { throw ex;  } }();return action; } catch(ex) { throw ex;  } }(),"Register": function actionFactory () { try { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { try { var action = {};action.$Params = function(){  var obj = null; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {}; return obj; };return action; } catch(ex) { throw ex;  } }();action.$sig1 = function actionFactory () { try { var action = {};action.$Params = function(){  var obj = {"model":$dp.$JsNet.MvcAppExample.Models.RegisterModel()}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {}; return obj; };return action; } catch(ex) { throw ex;  } }();return action; } catch(ex) { throw ex;  } }(),"Disassociate": function actionFactory () { try { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { try { var action = {};action.$Params = function(){  var obj = {"provider":"","providerUserId":""}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {}; return obj; };return action; } catch(ex) { throw ex;  } }();return action; } catch(ex) { throw ex;  } }(),"Manage": function actionFactory () { try { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { try { var action = {};action.$Params = function(){  var obj = {"message":0}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {}; return obj; };return action; } catch(ex) { throw ex;  } }();action.$sig1 = function actionFactory () { try { var action = {};action.$Params = function(){  var obj = {"model":$dp.$JsNet.MvcAppExample.Models.LocalPasswordModel()}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {}; return obj; };return action; } catch(ex) { throw ex;  } }();return action; } catch(ex) { throw ex;  } }(),"ExternalLogin": function actionFactory () { try { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { try { var action = {};action.$Params = function(){  var obj = {"provider":"","returnUrl":""}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {}; return obj; };return action; } catch(ex) { throw ex;  } }();return action; } catch(ex) { throw ex;  } }(),"ExternalLoginCallback": function actionFactory () { try { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { try { var action = {};action.$Params = function(){  var obj = {"returnUrl":""}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {}; return obj; };return action; } catch(ex) { throw ex;  } }();return action; } catch(ex) { throw ex;  } }(),"ExternalLoginConfirmation": function actionFactory () { try { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { try { var action = {};action.$Params = function(){  var obj = {"model":$dp.$JsNet.MvcAppExample.Models.RegisterExternalLoginModel(),"returnUrl":""}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {}; return obj; };return action; } catch(ex) { throw ex;  } }();return action; } catch(ex) { throw ex;  } }(),"ExternalLoginFailure": function actionFactory () { try { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { try { var action = {};action.$Params = function(){  var obj = null; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {}; return obj; };return action; } catch(ex) { throw ex;  } }();return action; } catch(ex) { throw ex;  } }(),"ExternalLoginsList": function actionFactory () { try { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { try { var action = {};action.$Params = function(){  var obj = {"returnUrl":""}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {}; return obj; };return action; } catch(ex) { throw ex;  } }();return action; } catch(ex) { throw ex;  } }(),"RemoveExternalLogins": function actionFactory () { try { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { try { var action = {};action.$Params = function(){  var obj = null; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {}; return obj; };return action; } catch(ex) { throw ex;  } }();return action; } catch(ex) { throw ex;  } }()},
"Home":{"Index": function actionFactory () { try { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { try { var action = {};action.$Params = function(){  var obj = null; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {}; return obj; };return action; } catch(ex) { throw ex;  } }();return action; } catch(ex) { throw ex;  } }(),"About": function actionFactory () { try { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { try { var action = {};action.$Params = function(){  var obj = null; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {}; return obj; };return action; } catch(ex) { throw ex;  } }();return action; } catch(ex) { throw ex;  } }(),"Contact": function actionFactory () { try { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { try { var action = {};action.$Params = function(){  var obj = null; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {}; return obj; };return action; } catch(ex) { throw ex;  } }();return action; } catch(ex) { throw ex;  } }()}};
})();
})();
