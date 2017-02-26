(function () {
    mocha.setup('bdd')
    var expect = chai.expect;
    var assert = chai.assert;
    describe('MVC', function () {
        it('Call action method', function (done) {

            //-- action method.
            var funcName = 'Action_NoParams';
            var action = $dpUrlSet.Home.Action_NoParams.$action0;
            var settings = action.$AjaxSettings();

            //-- ajax.
            var xhr = $.ajax(settings);

            assert(action.$Names.action == funcName, 'function name and action name should be same');

            xhr.always(function (result, status, xhr) {
                assert(result.Success === true, 'Should receive {Success:true}');
                done();
            });

        });
        it('Call the action method in MVC [Area]', function (done) {

            //-- action method.
            var funcName = 'Action_FakeName';
            var areaName = 'TestArea';
            var action = $dpUrlSet[areaName].Home2[funcName].$action0;;
            var settings = action.$AjaxSettings();

            //-- ajax.
            var xhr = $.ajax(settings);

            assert(action.$Names.area == areaName, 'The action method should be in a MVC area.');
            assert(action.$Names.action != funcName, 'function name and action name should be different');

            xhr.always(function (result, status, xhr) {

                assert(result.Success === true, 'Should receive {Success:true}');
                done();
            });

        });
        it('Call the action method with an alias defined by [ActionNameAttribute]', function (done) {

            //-- action method.
            var funcName = 'Action_FakeName';
            var action = $dpUrlSet.Home[funcName].$action0;
            var settings = action.$AjaxSettings();

            //-- ajax.
            var xhr = $.ajax(settings);

            assert(action.$Names.action != funcName, 'function name and action name should be different');

            xhr.always(function (result, status, xhr) {
                assert(result.Success === true, 'Should receive {Success:true}');
                done();
            });

        });
    });

    describe('WebApi', function () {
        it('Call action method', function (done) {

            var className = "$apiData";

            assert(className.indexOf('$api') === 0, 'the api controller name should contain "$api"');

            //-- action method.
            var action = $dpUrlSet[className].Get.$action0;

            //-- ajax.
            var settings = action.$AjaxSettings();
            assert(!!settings.method, 'the http method should be defined.');

            var xhr = $.ajax(settings);
            xhr.always(function (result, status, xhr) {
                assert(result.Success === true, 'Should receive {Success:true}');
                done();
            });

        });
        it('Call action method with another route defined by [RouteAttribute]', function (done) {

            var className = "$apiData";

            assert(className.indexOf('$api') === 0, 'the api controller name should contain "$api"');

            //-- action method.
            var action = $dpUrlSet[className].Orders.$action0;



            //-- ajax.
            var settings = action.$AjaxSettings();
            assert(!!settings.method, 'the http method should be defined.');
            assert(settings.url != $dpUrlSet.$apiData.Get.$action0.$GetUrl(), 'the route should be different of traditional route');

            var xhr = $.ajax(settings);
            xhr.always(function (result, status, xhr) {
                assert(result.Success === true, 'Should receive {Success:true}');
                done();
            });

        });
        it('Call action method with another parameterized route defined by [RouteAttribute]', function (done) {

            var className = "$apiData";

            assert(className.indexOf('$api') === 0, 'the api controller name should contain "$api"');

            //-- action method.
            var action = $dpUrlSet[className].Orders_WithCustomerId.$action0;

            assert(action.$RouteTemplate.indexOf('{customerId}') > 0, "the route template should contain a parameter placeholder.");

            //-- ajax.
            var settings = action.$AjaxSettings();
               
            //-- applying the route data to generate url.
            var routeData = { customerId: 5 };
            settings.url = action.$GetUrl(routeData);

            assert(!!settings.method, 'the http method should be defined.');
            assert(settings.url != $dpUrlSet.$apiData.Get.$action0.$GetUrl(), 'the route should be different of traditional route');


            var xhr = $.ajax(settings);
            xhr.always(function (result, status, xhr) {
                assert(result.Success === true, 'Should receive {Success:true}');
                assert(result.InputStream.customerId === routeData.customerId, 'Server should receive { customerId: 5 }');
                done();
            });

        });
        it('Call the action method in [Area]', function (done) {

            //-- action method.
            var areaName = 'TestArea';
            var className = '$apiData2';
            assert(className.indexOf('$api') === 0, 'the api controller name should contain "$api"');

            var action = $dpUrlSet[areaName][className].Get.$action0;
            assert(action.$Names.area === areaName, 'The action method should be in a MVC area.');

            var settings = action.$AjaxSettings();
            assert(!!settings.method, 'the http method should be defined.');

            //-- ajax.
            var xhr = $.ajax(settings);

            xhr.always(function (result, status, xhr) {
                assert(result.Success === true, 'Should receive {Success:true}');
                done();
            });

        });
        it('Call action method with new http method defined by [AcceptVerbsAttribute]', function (done) {

            var className = "$apiData";

            assert(className.indexOf('$api') === 0, 'the api controller name should contain "$api"');

            //-- action method.
            var action = $dpUrlSet[className].Action_AcceptVerbs_TEST.$action0;

            //-- settings.
            var settings = action.$AjaxSettings();
            assert(!!settings.method, 'the http method should be defined.');
            assert(['get', 'post', 'put', 'delete'].indexOf(settings.method.toLocaleLowerCase()) === -1, 'the http method should be different of get,post,put,delete');

            //-- ajax.
            var xhr = $.ajax(settings);
            xhr.always(function (result, status, xhr) {
                assert(result.Success === true, 'Should receive {Success:true}');
                done();
            });

        });
    });

}());




