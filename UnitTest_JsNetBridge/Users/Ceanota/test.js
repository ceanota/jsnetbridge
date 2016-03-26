(function () {
    (function () {

        window.$dp = window.$dp || {};
        window.$dp.$shared = window.$dp.$shared || {};

        if (window.$dp.$shared.$arrayFactory !== undefined) { return; }

        $dp.$shared.$arrayFactory = function arrayFactory(ref) {
            /// <signature>
            ///   <summary>this function returns a array with added function '$dpItemFactory' who creates instance of item of array.</summary>
            ///   <param name='ref' type='Function'>ref is factory who creates instance of item of array</param>
            ///   <returns type='Function' />
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
        window.$dp.$shared = window.$dp.$shared || {};

        if (window.$dp.$shared.$circularReferenceManagerFactory !== undefined) { return; }

        window.$dp.$shared.$circularReferenceManagerFactory = function circularReferenceManagerFactory(sameIntance) {
            /// <signature>
            ///   <summary>Factory gives un new instance of Function that handles the circular reference objects.</summary>
            ///   <param name='sameIntance' type='bool'>If sameInstance === undefined: new instance of function. Otherwise, we use the same instance.</param>
            ///   <returns type='Function' />
            /// </signature>
            if (sameIntance === undefined) {
                var newFunc = window.$dp.$shared.$circularReferenceManagerFactory._managerFunc.bind();
                newFunc.factories = [];
                window.$dp.$shared.$circularReferenceManagerFactory.instance = newFunc;
            }
            return window.$dp.$shared.$circularReferenceManagerFactory.instance;
        }

        window.$dp.$shared.$circularReferenceManagerFactory._managerFunc = function _managerFunc(func) {
            /// <signature>
            ///   <summary>it is the function that handles the circular reference objects</summary>
            ///   <param name='func' type='Function'>Factory of instances.</param>
            ///   <returns type='Object' />
            /// </signature>

            var internalFunc = window.$dp.$shared.$circularReferenceManagerFactory.instance;

            var foundedIdx = -1;
            for (var idx = 0; idx < internalFunc.factories.length; idx++) {
                if (internalFunc.factories[idx].item === func) {
                    foundedIdx = idx;
                }
            }

            if (foundedIdx === -1) {
                internalFunc.factories.push({ 'item': func, 'number': 0 });
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
    (function () {
        (function () {
            var message = '[circularReferenceManagerFactory.js] or [arrayFactory.js] is missing';
            try {
                if (!window.$dp.$shared.$arrayFactory) { throw message; };
                if (!window.$dp.$shared.$circularReferenceManagerFactory) { throw message };
            } catch (e) {
                message = message + '\r\n' + e.toString();
                throw message;
            }
        })();
        var _stampFunc = function () { return $dp.$JsNet; };
        window.$dp = window.$dp || {};
        window.$dp.$JsNet = window.$dp.$JsNet || {};
        window.$dp.$JsNet.ContosoUniversity = window.$dp.$JsNet.ContosoUniversity || {};
        window.$dp.$JsNet.ContosoUniversity.Models = window.$dp.$JsNet.ContosoUniversity.Models || {};
        $dp.$JsNet.ContosoUniversity.Models.OfficeAssignment = $dp.$JsNet.ContosoUniversity.Models.OfficeAssignment || function () { var args = Array.prototype.slice.call(arguments); var obj = { "PersonID": 0, "Location": "", "Instructor": $dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.ContosoUniversity.Models.Instructor) }; obj.constructor = $dp.$JsNet.ContosoUniversity.Models.OfficeAssignment; return obj; };
        $dp.$JsNet.ContosoUniversity.Models.Student = $dp.$JsNet.ContosoUniversity.Models.Student || function () { var args = Array.prototype.slice.call(arguments); var obj = { "EnrollmentDate": new Date(), "PersonID": 0, "LastName": "", "FirstMidName": "", "FullName": "", "Enrollments": $dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.ContosoUniversity.Models.Enrollment)) }; obj.constructor = $dp.$JsNet.ContosoUniversity.Models.Student; return obj; };
        $dp.$JsNet.ContosoUniversity.Models.Instructor = $dp.$JsNet.ContosoUniversity.Models.Instructor || function () { var args = Array.prototype.slice.call(arguments); var obj = { "HireDate": new Date(), "OfficeAssignment": $dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.ContosoUniversity.Models.OfficeAssignment), "PersonID": 0, "LastName": "", "FirstMidName": "", "FullName": "", "Courses": $dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.ContosoUniversity.Models.Course)) }; obj.constructor = $dp.$JsNet.ContosoUniversity.Models.Instructor; return obj; };
        $dp.$JsNet.ContosoUniversity.Models.Enrollment = $dp.$JsNet.ContosoUniversity.Models.Enrollment || function () { var args = Array.prototype.slice.call(arguments); var obj = { "EnrollmentID": 0, "CourseID": 0, "PersonID": 0, "Grade": 0, "Student": $dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.ContosoUniversity.Models.Student), "Course": $dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.ContosoUniversity.Models.Course) }; obj.constructor = $dp.$JsNet.ContosoUniversity.Models.Enrollment; return obj; };
        $dp.$JsNet.ContosoUniversity.Models.Course = $dp.$JsNet.ContosoUniversity.Models.Course || function () { var args = Array.prototype.slice.call(arguments); var obj = { "CourseID": 0, "Title": "", "Credits": 0, "DepartmentID": 0, "Enrollments": $dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.ContosoUniversity.Models.Enrollment)), "Instructors": $dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.ContosoUniversity.Models.Instructor)), "Department": $dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.ContosoUniversity.Models.Department) }; obj.constructor = $dp.$JsNet.ContosoUniversity.Models.Course; return obj; };
        $dp.$JsNet.ContosoUniversity.Models.Department = $dp.$JsNet.ContosoUniversity.Models.Department || function () { var args = Array.prototype.slice.call(arguments); var obj = { "DepartmentID": 0, "Name": "", "Budget": 0, "StartDate": new Date(), "PersonID": 0, "RowVersion": $dp.$shared.$arrayFactory(0), "Administrator": $dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.ContosoUniversity.Models.Instructor), "Courses_": $dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.ContosoUniversity.Models.Course)), "Courses": $dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.ContosoUniversity.Models.Course)) }; obj.constructor = $dp.$JsNet.ContosoUniversity.Models.Department; return obj; };
    })();
})(); 

