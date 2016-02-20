GET STARTED
/***************************************************************************************************************
            GET STARTED: Here's an example to start using the API:
***************************************************************************************************************/
1- Paste this code into the file 'BundleConfig.cs' in the function 'RegisterBundles' of the class 'BundleConfig':

            //bundles.Add(new ScriptBundle("~/bundles/JsNetBridge")
            //    .Include( "~/Scripts/Diphap.JsNetBridge/Diphap.Shared.js")
            //    .Include("~/Scripts/Diphap.JsNetBridge/circularReferenceManagerFactory.js")
            //    .Include("~/Scripts/Diphap.JsNetBridge/Diphap.JsNetBridge.js"));

2- Paste this code into the file 'Global.asax.cs' in class 'MvcApplication':

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

3- Paste this code in each layout file (ex: '_Layout.cshtml), before JS app:

            //@Scripts.Render("~/bundles/JsNetBridge")
            //<script>
            //    @(new MvcHtmlString({MyApplicationWeb}.MvcApplication.AspMvcInfo.UrlInfo.ToJS_SetUrl(this)))
            //</script>

 4- Replace the word '{MyApplicationWeb}' with the name of your web application.

 5- Properties of your csproj, then Build Events, and then  Post-build event command line:
	
	5.1- : .net object of  MVC Models only. 
	"$(ProjectDir)\Generators\Diphap.JsNetBridge\Diphap.JsNetBridge.Generator.exe" "{ dll_asp:'$(TargetPath)' }"

	5.2- : .net object of MVC Models only and other .net objects in other assemblies.
	"$(ProjectDir)\Generators\Diphap.JsNetBridge\Diphap.JsNetBridge.Generator.exe" "{ dll_asp:'$(TargetPath)' , dll_set:[{file:'Newtonsoft.Json.dll', ns_filters:[]}] }"

	5.3- : .net object of MVC Models only and other .net objects in other assemblies with WHITE FILTERS.
	"$(ProjectDir)\Generators\Diphap.JsNetBridge\Diphap.JsNetBridge.Generator.exe" "{ dll_asp:'$(TargetPath)' , dll_set:[{file:'Newtonsoft.Json.dll', ns_filters:['Newtonsoft.Json.Serialization']}] }"

