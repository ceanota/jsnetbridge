GET STARTED
/***************************************************************************************************************
            GET STARTED: Here's an example to start using the API:
***************************************************************************************************************/

0- You can download a sample application using the library.
	http://jsnet.codeplex.com/releases/view/624368

1- Paste this code into the file 'BundleConfig.cs' in the function 'RegisterBundles' of the class 'BundleConfig':

			#region "JsNetBridge" 
            bundles.Add(new ScriptBundle("~/bundles/JsNetBridge")
                .Include( "~/Scripts/Diphap.JsNetBridge/arrayFactory.js")
                .Include("~/Scripts/Diphap.JsNetBridge/circularReferenceManagerFactory.js")
			    .Include("~/Scripts/Diphap.JsNetBridge/actionHelper.js")
                .Include("~/Scripts/Diphap.JsNetBridge/Diphap.JsNetBridge.js"));
			#endregion

2- Paste this code into the file /Script/_references.js:

			/// <reference path="Diphap.JsNetBridge/arrayFactory.js" />
			/// <reference path="Diphap.JsNetBridge/circularReferenceManagerFactory.js" />
			/// <reference path="Diphap.JsNetBridge/actionHelper.js" />
			/// <reference path="Diphap.JsNetBridge/Diphap.JsNetBridge.js" />

3- Paste this code into the file 'Global.asax.cs' in class 'MvcApplication':

			#region "JsNetBridge: it will help generate the url in the layout of views."
            static Diphap.JsNetBridge.Mvc.AspMvcInfo _AspMvcInfo;
            static public Diphap.JsNetBridge.Mvc.AspMvcInfo AspMvcInfo
            {
                get
                {
                    if (_AspMvcInfo == null)
                    {
                        _AspMvcInfo = new Diphap.JsNetBridge.Mvc.AspMvcInfo(System.Reflection.Assembly.GetExecutingAssembly());
                    }
                    return _AspMvcInfo;
                }
            }
			#endregion

4- Paste this code in each layout file (ex: '_Layout.cshtml), before JS app:
			
			@* JsNetBridge: it will generate the url. *@
            @Scripts.Render("~/bundles/JsNetBridge")
			<script>
				@(new MvcHtmlString({MyWebApp}.MvcApplication.AspMvcInfo.UrlInfo.ToJS_SetUrl(new Diphap.JsNetBridge.Mvc.Proxy.UrlManager(this.Url.Action, this.Url.RouteUrl))))
			</script>
			@* JsNetBridge: example of use. Read the prerequisites in the script 'Diphap.JsNetBridge.Example.js' *@
			@* <script src="~/Scripts/Diphap.JsNetBridge/Diphap.JsNetBridge.Example.js" ></script> *@

5- Replace the word '{MyWebApp}' with the name of your web application.

6- Properties of your csproj, then Build Events, and then  Post-build event command line, past this command line:

	 IF EXIST "$(ProjectDir)\Generators\Diphap.JsNetBridge\Diphap.JsNetBridge.Generator.exe" "$(ProjectDir)\Generators\Diphap.JsNetBridge\Diphap.JsNetBridge.Generator.exe" "{ dll_asp:'$(TargetPath)' }"


7- Build your ASP.NET application to generate the content of this script '/Scripts/Diphap.JsNetBridge/Diphap.JsNetBridge.js'

8- In the Output Window of Visual Studio, you can check the logs:
	
1>  SingleAppExample -> C:\Users\diphap\Source\Repos\jsnet\SingleAppExample\bin\SingleAppExample.dll
1>  Diphap.JsNetBridge.Generator.exe: BEGIN [15/10/2016 11:53:20 +02:00]
1>  Diphap.JsNetBridge.Generator.exe: [path_exe:C:\Users\diphap\Source\Repos\jsnet\SingleAppExample\Generators\Diphap.JsN
1>  etBridge\Diphap.JsNetBridge.Generator.exe]
1>  Diphap.JsNetBridge.Generator.exe: [_config.dll_asp:C:/Users/diphap/Source/Repos/jsnet/SingleAppExample/bin/SingleAppE
1>  xample.dll]
1>  Diphap.JsNetBridge.Generator.exe: [_config.folder_site_absolute:C:\Users\diphap\Source\Repos\jsnet\SingleAppExample]
1>  Diphap.JsNetBridge.Generator.exe: [_config.file_js_absolute:C:\Users\diphap\Source\Repos\jsnet\SingleAppExample\Scrip
1>  ts\Diphap.JsNetBridge\Diphap.JsNetBridge.js]
1>  Diphap.JsNetBridge.Generator.exe: [_config.dll_asp_absolute:C:\Users\diphap\Source\Repos\jsnet\SingleAppExample\bin\S
1>  ingleAppExample.dll]
1>  Generate JS code - Begin  [0,2125469]
1>  AssemblyResolve => Fails log4net, Version=1.2.11.0, Culture=neutral, PublicKeyToken=669e0ddf0bb1aa2a => return 
1>  AssemblyResolve => Fails Org.Mentalis.Security.Cryptography, Version=4.1.0.0, Culture=neutral, PublicKeyToken=2780ccd
1>  10d57b246 => return 
1>  Instanciate AspMvcInfo - End [0,6354676]
1>  api.WriteAllText(); - End [0,6903366]
1>  Generate JS code - End [0,6906823]
1>  Diphap.JsNetBridge.Generator.exe: SUCCESS [0,690753 sec]

9- You can check the output to that script. '/Scripts/Diphap.JsNetBridge/Diphap.JsNetBridge.js'.

10- In your js scripts, this global object '$dpUrlSet' allows you to access the API.

	//#region "Example"
	//--  get the url of action method
	var url = $dpUrlSet.Home.Index.$action0.$GetUrl();

	//-- get the parameters of action method 
	var params = $dpUrlSet.Home.Index.$action0.Params();

	//-- get the parameters of action method 
	var settings = $dpUrlSet.Home.Index.$action0.AjaxSettings();
	//#endregion

11- In this script 'Diphap.JsNetBridge.Example.js', you have an example of functional code.
	Read the PREREQUISITES in 'Diphap.JsNetBridge.Example.js'.

12- You can download a sample application using the library.
	http://jsnet.codeplex.com/releases/view/624368

