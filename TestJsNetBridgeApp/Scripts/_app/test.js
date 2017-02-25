
QUnit.asyncTest('Call MVC action method (no parameters)', function () {

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