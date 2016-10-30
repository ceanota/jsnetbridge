window.test_dpUrlSet = function test_dpUrlSet() {
    /// <summary>
    /// </summary>

    //#region "Prerequisites"
    /*

    1) Add this script after the other scripts.
                    
                    <script src="~/Scripts/Diphap.JsNetBridge/Diphap.JsNetBridge.Example.js" ></script>

    2) Copy and Paste the action method 'ShowMe' and the class 'dpPerson' in HomeController.
                
                    public class HomeController : Controller
                    {
                        #region "copy and paste this"
                        public class dpPerson
                        {
                            public string name { get; set; }
                            public int age { get; set; }
                            public string description { get { return String.Format("{0} has {1} years old", name, age); } }
                            public dpPerson() { }
                            public dpPerson(string name, int age) { this.name = name; this.age = age; }
                        }

                        [Diphap.JsNetBridge.Common.JsNetResponseType(typeof(dpPerson))]
                        public JsonResult ShowMe(string name, int age)
                        {
                            JsonResult result = new JsonResult();
                            result.Data = new dpPerson(name, age);
                            return result;
                        }
                        #endregion
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

    console.info("-------------- window.test_dpUrlSet - BEGIN:");

    console.info("$dpUrlSet", $dpUrlSet);

    //-- The controller is 'Home' et the action method is 'ShowMe'
    var action = $dpUrlSet.Home.ShowMe;
    console.info("$dpUrlSet.Home.ShowMe:", action);

    //-- get the url of action method
    var url = action.$action0.$GetUrl();
    //-- generated url by server.
    console.info("$dpUrlSet.Home.ShowMe.$action0.$GetUrl():", url);

    //-- get the parameters of action method 
    var params = action.$action0.$Params();
    params.age = 34;
    params.name = "Alexandre";

    //-- the parameters of action method
    console.info("$dpUrlSet.Home.ShowMe.$action0.$Params():", params);

    //-- the class of result object of action method.
    console.info("$dpUrlSet.Home.ShowMe.$action0.$Return()", $dpUrlSet.Home.ShowMe.$action0.$Return());

    //-- send ajax request:
    var ajaxsettings = action.$action0.$AjaxSettings();
    console.info("$dpUrlSet.Home.ShowMe.$action0.$AjaxSettings():", ajaxsettings);

    //-- generated url by server.
    //-- $dpUrlSet.Home.ShowMe.$action0.$AjaxSettings().url;

    ajaxsettings.data.age = 34;
    ajaxsettings.data.name = "Alexandre";

    //-- Warning: ajaxsettings.data is Object.
    //-- so:
    ajaxsettings.data = JSON.stringify(ajaxsettings.data);

    //-- now, we will never have hard-coded values.!!!
    var xhr = $.ajax(ajaxsettings);
    console.info("$dpUrlSet ajax send:", ajaxsettings);

    xhr.success(function (result) {
        /// <param name="result" type="$dpUrlSet.Home.ShowMe.$action0.$Return">Description</param>

        console.info("$dpUrlSet ajax success:", result);
    });

    xhr.fail(function () {
        console.info("$dpUrlSet ajax fail:", arguments);
    });

    xhr.complete(function () {

        console.info("-------------- window.test_dpUrlSet - END:");

    });

}