(function () {
    mocha.setup('bdd')
    var expect = chai.expect;
    var assert = chai.assert;

    describe('MVC Action', function () {
        it('Call action method [HomeController.Action_NoParams]', function (done) {
            //-- action method.
            var funcName = 'Action_NoParams';
            var action = $dpUrlSet.Home[funcName].$action0;
            var settings = action.$AjaxSettings();

            //-- ajax.
            var xhr = $.ajax(settings);

            assert(action.$Names.action == funcName, 'function name and action name should be same');

            xhr.always(function (result, status, xhr) {
                assert(result.Success === true, 'Should receive {Success:true}');
                done();
            });

        });
        it('Call action method [HomeController.Action_WithParamterIdInUrl] with parameter id in url [{controller}/{action}/{id}]', function (done) {
            //-- action method.
            var funcName = 'Action_WithParamterIdInUrl';
            var action = $dpUrlSet.Home[funcName].$action0;
            var settings = action.$AjaxSettings();

            //-- we want to transmit a paramater in url.
            var routeData = { id: 'id_frolon' };
            settings.url = action.$GetUrl(routeData);

            //-- ajax.
            var xhr = $.ajax(settings);
            xhr.always(function (result, status, xhr) {
                assert(result.Success === true, 'Should receive {Success:true}');
                assert(result.InputStream.id === routeData.id, 'Server should receveive the id');
                done();
            });

        });
        it('Call the action method [TestArea.Home2Controller.Action_FakeName] in MVC [Area]', function (done) {
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
        it('Call the action method [HomeController.Action_FakeName] with an alias defined by [ActionNameAttribute]', function (done) {
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

    describe('MVC Models', function () {
        it('Call action method [HomeController.GetStudent] to get a instance of \'Student\'', function (done) {
            //-- action method.
            var action = $dpUrlSet.Home.GetStudent.$action0;
            var settings = action.$AjaxSettings();

            //-- Warning, we must stringify our parameter.
            var saved_settings_data = action.$Params();
            saved_settings_data.PersonID = 69;
            settings.data = JSON.stringify(saved_settings_data);

            //-- ajax.
            var xhr = $.ajax(settings);

            xhr.done(function (result) {
                /// <param name="result" type="action.$Return">receive the student</param>
                assert(result.Success === true, 'Should receive {Success:true}');

                var student = result.TypedBusinessData;
                assert(student.PersonID === saved_settings_data.PersonID, 'should receive instance of $dpLib.ContosoUniversity.Models.Student');
                done();

            });

            xhr.fail(function (xhr, status, message) {
                throw new Error(message);
            });

        });
        it('Call action method [HomeController.GetStudents] to get a array of \'Students\'', function (done) {
            //-- action method.
            var action = $dpUrlSet.Home.GetStudents.$action0;
            var settings = action.$AjaxSettings();

            //-- Warning, we must stringify our parameter.
            var saved_settings_data = action.$Params();
            saved_settings_data.FirstMidName = 'Alexandre';
            settings.data = JSON.stringify(saved_settings_data);

            //-- ajax.
            var xhr = $.ajax(settings);

            xhr.done(function (result) {
                /// <param name="result" type="action.$Return">receive the array of students</param>

                assert(
                    result.Success === true,
                    'Should receive {Success:true}');

                var students = result.TypedBusinessData;

                assert(
                    _.isArray(students)
                    && students.length > 0
                    && _.all(students, function (el) { return _.has(el, 'FirstMidName') }),
                    'Should receive a array of instances of $dpLib.ContosoUniversity.Models.Student');

                assert(
                    _.all(students, function (el) { return el.FirstMidName === saved_settings_data.FirstMidName; }),
                    'All instances of $dpLib.ContosoUniversity.Models.Student should have the same FirstMidName (Alexandre)');

                done();

            });

            xhr.fail(function (xhr, status, message) {
                throw new Error(message);
            });

        });
        it('Call action method [HomeController.GetDepartment] to get the courses of \'SCIENCE\' Department', function (done) {
            //-- action method.
            var action = $dpUrlSet.Home.GetDepartment.$action0;
            var settings = action.$AjaxSettings();

            //-- Warning, we must stringify our parameter.
            var saved_settings_data = action.$Params();
            saved_settings_data.departmentName = 'SCIENCE';
            settings.data = JSON.stringify(saved_settings_data);

            //-- ajax.
            var xhr = $.ajax(settings);

            xhr.done(function (result) {
                /// <param name="result" type="action.$Return">receive the department</param>

                assert(
                    result.Success === true,
                    'Should receive {Success:true}');

                var department = result.TypedBusinessData;

                assert(
                    department.Name === saved_settings_data.departmentName,
                    'Should receive a instance of $dpLib.ContosoUniversity.Models.Department');

                assert(
                    _.isArray(department.Courses)
                    && department.Courses.length > 0
                    && _.all(department.Courses, function (el) { return el.CourseID > 0 }),
                    'Should receive courses of SCIENCE department (instances of $dpLib.ContosoUniversity.Models.Course)');

                done();

            });

            xhr.fail(function (xhr, status, message) {
                throw new Error(message);
            });

        });
        it('Call action method [HomeController.CreateNewStudent] to create a NEW \'Student\'', function (done) {
            //-- action method.
            var action = $dpUrlSet.Home.CreateNewStudent.$action0;

            //--  new instance of ajax settings.
            var settings = action.$AjaxSettings();

            //-- settings give empty student.
            var saved_settings_data = action.$Params();

            //-- fill the instance of student.
            saved_settings_data.student.PersonID = 0;
            saved_settings_data.student.FirstMidName = 'Toan';
            saved_settings_data.student.LastName = 'TRUONG';

            //-- Warning, we must stringify our instance.
            settings.data = JSON.stringify(saved_settings_data);

            //-- ajax.
            var xhr = $.ajax(settings);

            xhr.done(function (result) {
                /// <param name="result" type="action.$Return">receive the created student</param>
                assert(result.Success === true, 'Should receive {Success:true}');

                var student = result.TypedBusinessData;
                assert(student.PersonID > 0, 'should receive created instance of $dpLib.ContosoUniversity.Models.Student');
                done();

            });

            xhr.fail(function (xhr, status, message) {
                throw new Error(message);
            });

        });
    });

    describe('WebApi', function () {
        it('Call action method [DataController.Get]', function (done) {
            var className = "$apiData";

            assert(className.indexOf('$api') === 0, 'the api controller name should contain "$api"');

            //-- action method.
            var action = $dpUrlSet[className].Get.$action0;

            //-- ajax.
            var settings = action.$AjaxSettings();
            assert(settings.method === 'get', 'the http method should be defined.');

            var xhr = $.ajax(settings);
            xhr.always(function (result, status, xhr) {
                assert(result.Success === true, 'Should receive {Success:true}');
                done();
            });

        });
        it('Call action method [DataController.Orders] with another route defined by [RouteAttribute("customers/orders")]', function (done) {
            var className = "$apiData";

            assert(className.indexOf('$api') === 0, 'the api controller name should contain "$api"');

            //-- action method.
            var action = $dpUrlSet[className].Orders.$action0;

            //-- ajax.
            var settings = action.$AjaxSettings();
            assert(settings.method === 'post', 'the http method should be defined.');
            assert(settings.url != $dpUrlSet.$apiData.Get.$action0.$GetUrl(), 'the route should be different of traditional route');

            var xhr = $.ajax(settings);
            xhr.always(function (result, status, xhr) {
                assert(result.Success === true, 'Should receive {Success:true}');
                done();
            });

        });
        it('Call action method [DataController.Orders_WithCustomerId] with another parameterized route defined by [RouteAttribute("customers/{customerId}/orders")]', function (done) {
            var className = "$apiData";
            assert(className.indexOf('$api') === 0, 'the api controller name should contain "$api"');

            //-- action method.
            var action = $dpUrlSet[className].Orders_WithCustomerId.$action0;
            assert(action.$RouteTemplate == 'customers/{customerId}/orders', 'the route template should contain a parameter placeholder');

            //-- settings.
            var settings = action.$AjaxSettings();

            //-- applying the route data to generate url.
            var routeData = { customerId: 5 };
            settings.url = action.$GetUrl(routeData);
            assert(settings.method === 'post', 'the http method should be defined');
            assert(settings.url === '/customers/5/orders', 'the route should be different of legacy route');

            //-- ajax
            var xhr = $.ajax(settings);
            xhr.always(function (result, status, xhr) {
                assert(result.Success === true, 'Should receive {Success:true}');
                assert(result.InputStream.customerId === routeData.customerId, 'Server should receive { customerId: 5 }');
                done();
            });

        });
        it('Call the action method [TestArea.Data2Controller.Get] in [Area]', function (done) {
            //-- action method.
            var areaName = 'TestArea';
            var className = '$apiData2';
            assert(className.indexOf('$api') === 0, 'the api controller name should contain "$api"');

            var action = $dpUrlSet[areaName][className].Get.$action0;
            assert(action.$Names.area === areaName, 'The action method should be in a MVC area.');

            var settings = action.$AjaxSettings();
            assert(settings.method === 'get', 'the http method should be defined.');

            //-- ajax.
            var xhr = $.ajax(settings);

            xhr.always(function (result, status, xhr) {
                assert(result.Success === true, 'Should receive {Success:true}');
                done();
            });

        });
        it('Call action method [DataController.Action_AcceptVerbs_TEST] with new http method defined by [AcceptVerbsAttribute]', function (done) {
            var className = "$apiData";
            assert(className.indexOf('$api') === 0, 'the api controller name should contain "$api"');

            //-- action method.
            var action = $dpUrlSet[className].Action_AcceptVerbs_TEST.$action0;

            //-- settings.
            var settings = action.$AjaxSettings();
            assert(settings.method === 'TEST', 'the http method should be defined.');

            //-- ajax.
            var xhr = $.ajax(settings);
            xhr.always(function (result, status, xhr) {
                assert(result.Success === true, 'Should receive {Success:true}');
                done();
            });

        });
    });

    describe('WebApi Models', function () {
        it('Call action method [InstructorController.Get] to get a instance of \'Instructor\'', function (done) {
            //-- action method.
            var action = $dpUrlSet.$apiInstructor.Get.$action0;
            var settings = action.$AjaxSettings();

            //append id to url.
            var routeData = { id: 13 };
            settings.url = action.$GetUrl(routeData);
            assert(settings.method === 'get', 'the http method should be defined.');

            //-- ajax.
            var xhr = $.ajax(settings);

            xhr.done(function (result) {
                /// <param name="result" type="action.$Return">receive the instructor</param>
                assert(result.Success === true, 'Should receive {Success:true}');

                var instructor = result.TypedBusinessData;
                assert(instructor.PersonID === routeData.id, 'should receive instance of $dpLib.ContosoUniversity.Models.Instructor');
                assert(instructor.OfficeAssignment.Location === 'House Einstein, room E45', 'should receive instance of $dpLib.ContosoUniversity.Models.Instructor');
                done();

            });

            xhr.fail(function (xhr, status, message) {
                throw new Error(message);
            });

        });

        it('Call action method [InstructorController.Put] to Add \'Courses\' to a instance of \'Instructor\'', function (done) {
            //-- action method.
            var action = $dpUrlSet.$apiInstructor.Put.$action0;
            var settings = action.$AjaxSettings();

            //-- settings give a empty instance of Instructor.
            var instructor_in = action.$Params().instructor;

            //-- Fill the empty instance of Instructor.
            instructor_in.FirstMidName = "Anh";
            instructor_in.LastName = "Hung";
            instructor_in.HireDate = Date();

            //-- create new instances of Course with its Factory.
            var physics = instructor_in.Courses.$dpItemFactory();
            physics.Title = 'Physics';
            instructor_in.Courses.push(physics);

            var computer = instructor_in.Courses.$dpItemFactory();
            computer.Title = 'Computer';
            instructor_in.Courses.push(computer);

            //-- Warning, we must stringify the parameter.
            settings.data = JSON.stringify(instructor_in);

            assert(settings.method === 'put', 'the http method should be defined.');

            //-- ajax.
            var xhr = $.ajax(settings);

            xhr.done(function (result) {
                /// <param name="result" type="action.$Return">receive the instructor</param>
                assert(result.Success === true, 'Should receive {Success:true}');

                var instructor_out = result.TypedBusinessData;
                assert(instructor_out.FirstMidName === instructor_in.FirstMidName, 'should receive instance of $dpLib.ContosoUniversity.Models.Instructor');
                assert(!!_.find(instructor_out.Courses, function (el) { return el.Title === computer.Title }, 'should receive Courses of Instructor.'));
                done();

            });

            xhr.fail(function (xhr, status, message) {
                throw new Error(message);
            });

        });

        it('action method OVERLOADING => [InstructorController.Put(instructor)] OR [InstructorController.Put(id, instructor)]', function (done) {
            //-- Warning 2 action methods for InstructorController.Put !!!.
            var action = $dpUrlSet.$apiInstructor.Put.

                //-- $action1 instead of $action0
                $action1;


            assert(typeof action.$Params().id === 'number',
                'the method action should have a numeric parameter \'id\'');
            assert(typeof action.$Params().instructor === 'object' && typeof action.$Params().instructor.PersonID === 'number',
                'the method action should have a instance of Instructor as parameter');

            //-- settings
            var settings = action.$AjaxSettings();


            //**** First Parameter IN URL ****/
            //-- append id parameter to url.
            var routeData = { id: 888 };
            settings.url = action.$GetUrl(routeData);


            //**** Second Parameter IN settings.data ****/
            //-- settings give a empty instance of Instructor.
            var instructor_in = action.$Params().instructor;
            //-- Fill the empty instance of Instructor.
            instructor_in.FirstMidName = "Anh";
            instructor_in.LastName = "Hung";
            //-- Warning, we must stringify the parameter.
            settings.data = JSON.stringify(instructor_in);


            //-- http method.
            assert(settings.method === 'put', 'the http method should be defined.');


            //-- ajax.
            var xhr = $.ajax(settings);
            xhr.done(function (result) {
                /// <param name="result" type="action.$Return">receive the instructor</param>
                assert(result.Success === true, 'Should receive {Success:true}');

                var instructor_out = result.TypedBusinessData;
                assert(instructor_out.PersonID === routeData.id, 'should receive instance of $dpLib.ContosoUniversity.Models.Instructor');
                done();

            });

            xhr.fail(function (xhr, status, message) {
                throw new Error(message);
            });

        });


    });

}());


((function () {
    $(function () {
        $('#toggle_all_outlining').click(function () {
            /// <summary>toggle all outlining</summary>
            $('li.test h2').trigger('click');
        });
    });

})());




