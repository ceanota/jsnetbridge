﻿GET STARTED
/***************************************************************************************************************
            GET STARTED: Here's an example to start using the API:
***************************************************************************************************************/
1- Paste this code into the file 'BundleConfig.cs' in the function 'RegisterBundles' of the class 'BundleConfig':

            //bundles.Add(new ScriptBundle("~/bundles/JsNetBridge")
            //    .Include( "~/Scripts/Diphap.JsNetBridge/arrayFactory.js")
            //    .Include("~/Scripts/Diphap.JsNetBridge/circularReferenceManagerFactory.js")
			//    .Include("~/Scripts/Diphap.JsNetBridge/actionHelper.js")
            //    .Include("~/Scripts/Diphap.JsNetBridge/Diphap.JsNetBridge.js"));
2- Paste this code into the file /Script/_references.js:
			/// <reference path="Diphap.JsNetBridge/arrayFactory.js" />
			/// <reference path="Diphap.JsNetBridge/circularReferenceManagerFactory.js" />
			/// <reference path="Diphap.JsNetBridge/actionHelper.js" />
			/// <reference path="Diphap.JsNetBridge/Diphap.JsNetBridge.js" />

3- Paste this code into the file 'Global.asax.cs' in class 'MvcApplication':

            //static Diphap.JsNetBridge.Mvc.AspMvcInfo _AspMvcInfo;
            //static public Diphap.JsNetBridge.Mvc.AspMvcInfo AspMvcInfo
            //{
            //    get
            //    {
            //        if (_AspMvcInfo == null)
            //        {
            //            _AspMvcInfo = new Diphap.JsNetBridge.Mvc.AspMvcInfo(System.Reflection.Assembly.GetExecutingAssembly());
            //        }
            //        return _AspMvcInfo;
            //    }
            //}

4- Paste this code in each layout file (ex: '_Layout.cshtml), before JS app:

            @Scripts.Render("~/bundles/JsNetBridge")
			<script>
				@(new MvcHtmlString({MyWebApp}.MvcApplication.AspMvcInfo.UrlInfo.ToJS_SetUrl(new Diphap.JsNetBridge.Mvc.Proxy.UrlManager(this.Url.Action, this.Url.RouteUrl))))
			</script>

5- Replace the word '{MyWebApp}' with the name of your web application.

6- Properties of your csproj, then Build Events, and then  Post-build event command line:
	
	6.1- : .net object of  MVC Models only. 
	 IF EXIST "$(ProjectDir)\Generators\Diphap.JsNetBridge\Diphap.JsNetBridge.Generator.exe" "$(ProjectDir)\Generators\Diphap.JsNetBridge\Diphap.JsNetBridge.Generator.exe" "{ dll_asp:'$(TargetPath)' }"

	6.2- : .net object of MVC Models only and other .net objects in other assemblies.
	 IF EXIST "$(ProjectDir)\Generators\Diphap.JsNetBridge\Diphap.JsNetBridge.Generator.exe" "$(ProjectDir)\Generators\Diphap.JsNetBridge\Diphap.JsNetBridge.Generator.exe" "{ dll_asp:'$(TargetPath)' , dll_set:[{file:'Newtonsoft.Json.dll', whitens_filters:[], blackns_filters:[]}] }"

	6.3- : .net object of MVC Models only and other .net objects in other assemblies with WHITE FILTERS.
	 IF EXIST "$(ProjectDir)\Generators\Diphap.JsNetBridge\Diphap.JsNetBridge.Generator.exe" "$(ProjectDir)\Generators\Diphap.JsNetBridge\Diphap.JsNetBridge.Generator.exe" "{ dll_asp:'$(TargetPath)' , dll_set:[{file:'Newtonsoft.Json.dll', whitens_filters:['Newtonsoft.Json.Serialization']}], blackns_filters:[] }"

