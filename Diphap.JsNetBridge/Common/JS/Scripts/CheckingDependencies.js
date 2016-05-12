
(function () {
    var message = '[circularReferenceManagerFactory.js] or [arrayFactory.js] or [getUrlFromTemplate.js] is missing';
    try {
        if (!window.$dp.$shared.$arrayFactory) { throw message; };
        if (!window.$dp.$shared.$circularReferenceManagerFactory) { throw message };
        if (!window.$dp.$JsNet.$Helpers.$Shared.$Action.getUrlFromTemplate) { throw message };
    } catch (e) {
        message = message + '\r\n' + e.toString();
        throw message;
    }
})();