(function () {
    (function () {
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
        var _stampFunc = function () { return $dp.$JsNet; };
        (function () {
            //#region 'Model'
            window.$dp = window.$dp || {};
            $dp.$JsNet = $dp.$JsNet || {};
            $dp.$JsNet.ContosoUniversity = $dp.$JsNet.ContosoUniversity || {};
            $dp.$JsNet.ContosoUniversity.Models = $dp.$JsNet.ContosoUniversity.Models || {};
            var _alias0 = $dp.$JsNet.ContosoUniversity.Models;
            _alias0.OfficeAssignment = _alias0.OfficeAssignment || function () { var args = Array.prototype.slice.call(arguments); var obj = { "PersonID": 0, "Location": "", "Instructor": $dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.ContosoUniversity.Models.Instructor) }; obj.constructor = _alias0.OfficeAssignment; return obj; };
            _alias0.Student = _alias0.Student || function () { var args = Array.prototype.slice.call(arguments); var obj = { "EnrollmentDate": new Date(), "PersonID": 0, "LastName": "", "FirstMidName": "", "FullName": "", "Enrollments": $dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.ContosoUniversity.Models.Enrollment)) }; obj.constructor = _alias0.Student; return obj; };
            _alias0.Instructor = _alias0.Instructor || function () { var args = Array.prototype.slice.call(arguments); var obj = { "HireDate": new Date(), "OfficeAssignment": $dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.ContosoUniversity.Models.OfficeAssignment), "PersonID": 0, "LastName": "", "FirstMidName": "", "FullName": "", "Courses": $dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.ContosoUniversity.Models.Course)) }; obj.constructor = _alias0.Instructor; return obj; };
            _alias0.Enrollment = _alias0.Enrollment || function () { var args = Array.prototype.slice.call(arguments); var obj = { "EnrollmentID": 0, "CourseID": 0, "PersonID": 0, "Grade": 0, "Student": $dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.ContosoUniversity.Models.Student), "Course": $dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.ContosoUniversity.Models.Course) }; obj.constructor = _alias0.Enrollment; return obj; };
            _alias0.Course = _alias0.Course || function () { var args = Array.prototype.slice.call(arguments); var obj = { "CourseID": 0, "Title": "", "Credits": 0, "DepartmentID": 0, "Enrollments": $dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.ContosoUniversity.Models.Enrollment)), "Instructors": $dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.ContosoUniversity.Models.Instructor)), "Department": $dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.ContosoUniversity.Models.Department) }; obj.constructor = _alias0.Course; return obj; };
            _alias0.Department = _alias0.Department || function () { var args = Array.prototype.slice.call(arguments); var obj = { "DepartmentID": 0, "Name": "", "Budget": 0, "StartDate": new Date(), "PersonID": 0, "RowVersion": $dp.$shared.$arrayFactory(0), "Administrator": $dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.ContosoUniversity.Models.Instructor), "Courses_": $dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.ContosoUniversity.Models.Course)), "Courses": $dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.ContosoUniversity.Models.Course)) }; obj.constructor = _alias0.Department; return obj; };
            //#endregion
        })();
    })();
})();
