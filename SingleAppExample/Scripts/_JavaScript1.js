
window.$dp = window.$dp || {};
window.$dp.$JsNet = window.$dp.$JsNet || {};
window.$dp.$JsNet.ContosoUniversity = window.$dp.$JsNet.ContosoUniversity || {};
window.$dp.$JsNet.ContosoUniversity.Models = window.$dp.$JsNet.ContosoUniversity.Models || {};
window.$dp.$JsNet.TestModels = window.$dp.$JsNet.TestModels || {};
$dp.$JsNet.ContosoUniversity.Models.OfficeAssignment = $dp.$JsNet.ContosoUniversity.Models.OfficeAssignment || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"PersonID":0,"Location":"","Instructor":$dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.ContosoUniversity.Models.Instructor)};obj.$stamp = _stampFunc; return obj; };
$dp.$JsNet.TestModels.MyModel = $dp.$JsNet.TestModels.MyModel || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"Name":"","Age":0};obj.$stamp = _stampFunc; return obj; };
$dp.$JsNet.ContosoUniversity.Models.Student = $dp.$JsNet.ContosoUniversity.Models.Student || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"EnrollmentDate":new Date(),"PersonID":0,"LastName":"","FirstMidName":"","FullName":"","Enrollments":$dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.ContosoUniversity.Models.Enrollment)),"MyModel":$dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.TestModels.MyModel)};obj.$stamp = _stampFunc; return obj; };
