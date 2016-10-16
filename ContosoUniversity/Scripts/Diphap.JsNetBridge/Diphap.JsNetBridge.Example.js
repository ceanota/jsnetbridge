window.test_dpUrlSet = function test_dpUrlSet() {
    /// <summary>
    /// </summary>

    //#region "Prerequisites"
    /*

    1) Add this script after the other scripts.
                    
                    <script src="~/Scripts/Diphap.JsNetBridge/Diphap.JsNetBridge.Example.js" ></script>

    2) Copy and Paste the action method 'ShowMe' in HomeController.
                
                    public class HomeController : Controller
                    {
                        public JsonResult ShowMe(string name, int age)
                        {
                            JsonResult result = new JsonResult();
                            result.Data = new { name = name, age = age };
                            return result;
                        }
                    }
    


    3) Rebuild the ASP.NET application to generate API.
    4) Start your ASP.NET application.
    4) Call the function in the browser console: window.test_dpUrlSet()
    5) Check the logs in the brower console.
    
    */
    //#endregion

    //-- debugger;

    if (!$dpUrlSet && $dpUrlSet.Home && $dpUrlSet.Home.ShowMe) {
        throw "$dpUrlSet.Home.ShowMe does not exist. You must generate Diphap.JsNetBridge.js and have HomeController and his action method ShowMe";
    }

    //-- The controller is 'Home' et the action method is 'ShowMe'
    var action = $dpUrlSet.Home.ShowMe;
    console.info("$dpUrlSet.Home.ShowMe:", action);

    //-- get the url of action method
    var url = action.$action0.$GetUrl();
    //-- generated url by server.
    console.info("$dpUrlSet url:", url);

    //-- get the parameters of action method 
    var params = action.$action0.$Params();
    params.age = 34;
    params.name = "Alexandre";
    //-- generated url by server.
    console.info("$dpUrlSet params:", params);


    //-- send ajax request:
    var ajaxsettings = action.$action0.$AjaxSettings();

    //-- generated url by server.
    console.info("$dpUrlSet url:", ajaxsettings.url);

    ajaxsettings.data.age = 34;
    ajaxsettings.data.name = "Alexandre";

    //-- Warning: ajaxsettings.data is Object.
    //-- so:
    ajaxsettings.data = JSON.stringify(ajaxsettings.data);

    //-- now, we will never have hard-coded values.!!!
    var xhr = $.ajax(ajaxsettings);
    console.info("$dpUrlSet ajax:", ajaxsettings);

    xhr.success(function (result) {
        console.info("$dpUrlSet ajax success:", result);
    });

    xhr.fail(function () {
        console.info("$dpUrlSet ajax fail:", arguments);
    });
}