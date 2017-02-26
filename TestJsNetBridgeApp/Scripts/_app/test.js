
(function () {

    return;
    QUnit.module("MVC");
    QUnit.asyncTest('Call MVC action method (without parameters)', function () {

        //-- we have one async test to run
        QUnit.expect(1);

        //-- action method.
        var action = $dpUrlSet.Home.Action_NoParams.$action0;
        var settings = action.$AjaxSettings();
        //-- ajax.
        var xhr = $.ajax(settings);

        xhr.always(function (result, status, xhr) {
            /// <summary>Description</summary>
            /// <param name="result" type="PlainObject"></param>
            /// <param name="xhr" type="jqXHR"></param>
            /// <param name="status" type="String"></param>

            QUnit.equal(result.Success, true, "Call '/Home/Action_NoParams'");

            //-- we have our answer for this assertion, continue testing other assertions
            QUnit.start();
        });

    });

    QUnit.asyncTest('Call MVC action method with [ActionName]', function () {

        //-- we have one async test to run
        QUnit.expect(1);

        //-- action method.
        var action = $dpUrlSet.Home.Action_FakeName.$action0;
        var settings = action.$AjaxSettings();
        //-- ajax.
        var xhr = $.ajax(settings);

        xhr.always(function (result, status, xhr) {
            /// <summary>Description</summary>
            /// <param name="result" type="PlainObject"></param>
            /// <param name="xhr" type="jqXHR"></param>
            /// <param name="status" type="String"></param>

            QUnit.equal(result.Success, true, "Call '/Home/Action_RealName'");

            //-- we have our answer for this assertion, continue testing other assertions
            QUnit.start();
        });

    });

    QUnit.asyncTest('Call MVC action method with [Area], [ActionName]', function () {

        //-- we have one async test to run
        QUnit.expect(1);

        //-- action method.
        var action = $dpUrlSet.TestArea.Home2.Action_FakeName.$action0;
        var settings = action.$AjaxSettings();

        //-- ajax.
        var xhr = $.ajax(settings);

        xhr.always(function (result, status, xhr) {
            /// <summary>Description</summary>
            /// <param name="result" type="PlainObject"></param>
            /// <param name="xhr" type="jqXHR"></param>
            /// <param name="status" type="String"></param>

            QUnit.equal(result.Success, true, "Call '/TestArea/Home/Action_RealName'");

            //-- we have our answer for this assertion, continue testing other assertions
            QUnit.start();
        });

    });

    QUnit.module("WebApi");
    QUnit.asyncTest('Call WebApi action method (no parameters) ', function () {

        //-- we have one async test to run
        QUnit.expect(1);

        //-- action method.
        var action = $dpUrlSet.$apiData.Get.$action0;
        var settings = action.$AjaxSettings();
        //-- ajax.
        var xhr = $.ajax(settings);

        xhr.always(function (result, status, xhr) {
            /// <summary>Description</summary>
            /// <param name="result" type="PlainObject"></param>
            /// <param name="xhr" type="jqXHR"></param>
            /// <param name="status" type="String"></param>

            QUnit.equal(result.Success, true, "Call '/api/Data' " + JSON.stringify(_.pick(settings, ['method'])));

            //-- we have our answer for this assertion, continue testing other assertions
            QUnit.start();
        });

    });

    QUnit.asyncTest('Call WebApi action method with [Area]', function () {

        //-- we have one async test to run
        QUnit.expect(1);

        //-- action method.
        var action = $dpUrlSet.TestArea.$apiData2.Get.$action0;
        var settings = action.$AjaxSettings();
        //-- ajax.
        var xhr = $.ajax(settings);

        xhr.always(function (result, status, xhr) {
            /// <summary>Description</summary>
            /// <param name="result" type="PlainObject"></param>
            /// <param name="xhr" type="jqXHR"></param>
            /// <param name="status" type="String"></param>

            QUnit.equal(result.Success, true, "Call '/api/Data' " + JSON.stringify(_.pick(settings, ['method'])));

            //-- we have our answer for this assertion, continue testing other assertions
            QUnit.start();
        });

    });

    QUnit.asyncTest('Call WebApi action method with new [AcceptVerbs] ', function () {

        //-- we have one async test to run
        QUnit.expect(1);

        //-- action method.
        var action = $dpUrlSet.$apiData.Action_AcceptVerbs_TEST.$action0;
        var settings = action.$AjaxSettings();
        //-- ajax.
        var xhr = $.ajax(settings);

        xhr.always(function (result, status, xhr) {
            /// <summary>Description</summary>
            /// <param name="result" type="PlainObject"></param>
            /// <param name="xhr" type="jqXHR"></param>
            /// <param name="status" type="String"></param>

            QUnit.equal(result.Method, settings.method, "Call '/api/Data' " + JSON.stringify(_.pick(settings, ['method'])));

            //-- we have our answer for this assertion, continue testing other assertions
            QUnit.start();
        });

    });

    QUnit.asyncTest('Call WebApi action method with another [Route] ', function () {

        //-- we have one async test to run
        QUnit.expect(1);

        //-- action method.
        var action = $dpUrlSet.$apiData.Orders.$action0;
        var settings = action.$AjaxSettings();

        //-- ajax.
        var xhr = $.ajax(settings);

        xhr.always(function (result, status, xhr) {
            /// <summary>Description</summary>
            /// <param name="result" type="PlainObject"></param>
            /// <param name="xhr" type="jqXHR"></param>
            /// <param name="status" type="String"></param>

            QUnit.equal(result.Method.toLowerCase(), settings.method.toLowerCase(), "Call " + JSON.stringify(_.pick(settings, ['url', 'method'])));

            //-- we have our answer for this assertion, continue testing other assertions
            QUnit.start();
        });

    });

}());

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

            assert(action.$Names.area == areaName,'The action method should be in a MVC area.');
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
        it('Call action method with new http method defined by [AcceptVerbs]', function (done) {

            var className = "$apiData";

            assert(className.indexOf('$api') === 0, 'the api controller name should contain "$api"');

            //-- action method.
            var action = $dpUrlSet[className].Action_AcceptVerbs_TEST.$action0;

            //-- settings.
            var settings = action.$AjaxSettings();
            assert(!!settings.method, 'the http method should be defined.');
            assert(['get','post','put','delete'].indexOf(settings.method.toLocaleLowerCase()) === -1, 'the http method should be different of get,post,put,delete');
            
            //-- ajax.
            var xhr = $.ajax(settings);
            xhr.always(function (result, status, xhr) {
                assert(result.Success === true, 'Should receive {Success:true}');
                done();
            });

        });
    });

}());




