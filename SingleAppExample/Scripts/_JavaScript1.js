
(function () {

    window.$dp = window.$dp || {};
    window.$dp.shared = window.$dp.shared || {};

    if (window.$dp.shared.arrayFactory !== undefined) { return; }

    $dp.shared.arrayFactory = function arrayFactory(ref) {
        /// <signature>
        ///   <summary>this function returns a array with added function '$dpItemFactory' who creates instance of item of array.</summary>
        ///   <param name="ref" type="Function">ref is factory who creates instance of item of array</param>
        ///   <returns type="Function" />
        /// </signature>

        var aa = [];
        aa.$dpItemFactory = function () {
            var result;
            if (typeof ref === 'function') { result = ref(); }
            else { result = ref; }
            return result;
        };
        return aa;
    };

})();

(function () {
    window.$dp = window.$dp || {};
    window.$dp.shared = window.$dp.shared || {};

    if (window.$dp.shared.circularReferenceManagerFactory !== undefined) { return; }

    window.$dp.shared.circularReferenceManagerFactory = function circularReferenceManagerFactory(sameIntance) {
        /// <signature>
        ///   <summary>Factory gives un new instance of Function that handles the circular reference objects.</summary>
        ///   <param name="sameIntance" type="bool">If sameInstance === undefined: new instance of function. Otherwise, we use the same instance.</param>
        ///   <returns type="Function" />
        /// </signature>
        if (sameIntance === undefined) {
            var newFunc = window.$dp.shared.circularReferenceManagerFactory._managerFunc.bind();
            newFunc.factories = [];
            window.$dp.shared.circularReferenceManagerFactory.instance = newFunc;
        }
        return window.$dp.shared.circularReferenceManagerFactory.instance;
    }

    window.$dp.shared.circularReferenceManagerFactory._managerFunc = function _managerFunc(func) {
        /// <signature>
        ///   <summary>it is the function that handles the circular reference objects</summary>
        ///   <param name="func" type="Function">Factory of instances.</param>
        ///   <returns type="Object" />
        /// </signature>

        var internalFunc = window.$dp.shared.circularReferenceManagerFactory.instance;

        var foundedIdx = -1;
        for (var idx = 0; idx < internalFunc.factories.length; idx++) {
            if (internalFunc.factories[idx].item === func) {
                foundedIdx = idx;
            }
        }

        if (foundedIdx === -1) {
            internalFunc.factories.push({ "item": func, "number": 0 });
            foundedIdx = internalFunc.factories.length - 1;
        } else {
            internalFunc.factories[foundedIdx].number++;
        }

        if (internalFunc.factories[foundedIdx].number < 1) {
            return internalFunc.factories[foundedIdx].item(true);
        } else {
            internalFunc.factories[foundedIdx].number = null;
            return internalFunc.factories[foundedIdx].item;
        }
    }

})();




window.$dp = window.$dp || {};
window.$dp.$JsNet = window.$dp.$JsNet || {};
window.$dp.$JsNet.Test = window.$dp.$JsNet.Test || {};
$dp.$JsNet.Test.CF = $dp.$JsNet.Test.CF || function () { var args = Array.prototype.slice.call(arguments); var obj = { "propF": "", "C": $dp.shared.circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.Test.CC) }; obj.constructor = $dp.$JsNet.Test.CF; return obj; };
$dp.$JsNet.Test.CB = $dp.$JsNet.Test.CB || function () { var args = Array.prototype.slice.call(arguments); var obj = { "propB": "", "A": $dp.shared.circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.Test.CA) }; obj.constructor = $dp.$JsNet.Test.CB; return obj; };
$dp.$JsNet.Test.CC = $dp.$JsNet.Test.CC || function () { var args = Array.prototype.slice.call(arguments); var obj = { "propC": "", "B": $dp.shared.circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.Test.CB) }; obj.constructor = $dp.$JsNet.Test.CC; return obj; };
$dp.$JsNet.Test.CE = $dp.$JsNet.Test.CE || function () { var args = Array.prototype.slice.call(arguments); var obj = { "propE": "", "F": $dp.shared.circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.Test.CF) }; obj.constructor = $dp.$JsNet.Test.CE; return obj; };
$dp.$JsNet.Test.CA = $dp.$JsNet.Test.CA || function () { var args = Array.prototype.slice.call(arguments); var obj = { "propA": "", "C": $dp.shared.circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.Test.CC), "E": $dp.shared.circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.Test.CE) }; obj.constructor = $dp.$JsNet.Test.CA; return obj; };
$dp.$JsNet.Test.CD = $dp.$JsNet.Test.CD || function () { var args = Array.prototype.slice.call(arguments); var obj = { "propD": "", "E": $dp.shared.circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.Test.CE) }; obj.constructor = $dp.$JsNet.Test.CD; return obj; };
