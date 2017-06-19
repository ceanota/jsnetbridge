declare namespace $dp.$JsNet.$Helpers.$Shared.$Action {

    interface $AjaxSettings {
        cache: boolean,
        contentType: any,
        data: any,
        dataType: string,
        method: string,
        type: string,
        url: string
    }

    interface $httpMethodArray {
        $items: Array<string>, $single: string, $first: string
    }

    interface $Names {
        action: string, controller: string, area: string
    }

    interface _$Action {
        $_Url: string,
        $GetUrl(routeData: Object): string,
        $GetRouteData(): Object,
        $Names: $Names,
        $Params(): {},
        $Return(): Object,
        $Enums(): Object,
        $IsApi: boolean,
        $httpMethodArray: $httpMethodArray,
        $AjaxSettings(): $AjaxSettings,
        $RouteTemplate: string,
    }

    function $ActionFactory(): _$Action;

}
declare namespace $dp.$shared {
    interface $Array<T> extends Array<T> {
        $dpItemFactory(): T;
    }
}
declare namespace $dp.$JsNet.TestJsNetBridgeApp.Models {
//#region 'interfaces'
interface LayoutModel
{PackageNugetName:string,PackageNugetVersion:{}}
interface ReturnData
{Url:string,Success:boolean,Method:string,InputStream:{},BusinessData:{}}
interface ReturnData_$gen$_T
{Url:string,Success:boolean,Method:string,TypedBusinessData:{},InputStream:{},BusinessData:{}}
interface ReturnData_$gen$_ContosoUniversityModelsStudent
{TypedBusinessData:$dp.$JsNet.ContosoUniversity.Models.Student,Url:string,Success:boolean,Method:string,InputStream:{},BusinessData:{}}
interface ReturnData_$gen$_ICollection_$gen$_ContosoUniversityModelsStudent
{TypedBusinessData:$dp.$shared.$Array<$dp.$JsNet.ContosoUniversity.Models.Student>,Url:string,Success:boolean,Method:string,InputStream:{},BusinessData:{}}
interface ReturnData_$gen$_ContosoUniversityModelsInstructor
{TypedBusinessData:$dp.$JsNet.ContosoUniversity.Models.Instructor,Url:string,Success:boolean,Method:string,InputStream:{},BusinessData:{}}
interface ReturnData_$gen$_ContosoUniversityModelsDepartment
{TypedBusinessData:$dp.$JsNet.ContosoUniversity.Models.Department,Url:string,Success:boolean,Method:string,InputStream:{},BusinessData:{}}
//#endregion
//#region 'functions'
var LayoutModel: () => $dp.$JsNet.TestJsNetBridgeApp.Models.LayoutModel;
var ReturnData: () => $dp.$JsNet.TestJsNetBridgeApp.Models.ReturnData;
var ReturnData_$gen$_T: () => $dp.$JsNet.TestJsNetBridgeApp.Models.ReturnData_$gen$_T;
var ReturnData_$gen$_ContosoUniversityModelsStudent: () => $dp.$JsNet.TestJsNetBridgeApp.Models.ReturnData_$gen$_ContosoUniversityModelsStudent;
var ReturnData_$gen$_ICollection_$gen$_ContosoUniversityModelsStudent: () => $dp.$JsNet.TestJsNetBridgeApp.Models.ReturnData_$gen$_ICollection_$gen$_ContosoUniversityModelsStudent;
var ReturnData_$gen$_ContosoUniversityModelsInstructor: () => $dp.$JsNet.TestJsNetBridgeApp.Models.ReturnData_$gen$_ContosoUniversityModelsInstructor;
var ReturnData_$gen$_ContosoUniversityModelsDepartment: () => $dp.$JsNet.TestJsNetBridgeApp.Models.ReturnData_$gen$_ContosoUniversityModelsDepartment;
//#endregion
}
declare namespace $dp.$JsNet.TestJsNetBridgeApp.Controllers.$JsNs$_HomeController {
//#region 'interfaces'
interface dpPerson
{name:string,age:number,description:string}
//#endregion
//#region 'functions'
var dpPerson: () => $dp.$JsNet.TestJsNetBridgeApp.Controllers.$JsNs$_HomeController.dpPerson;
//#endregion
}
declare namespace $dp.$JsNet.ContosoUniversity.Models {
//#region 'interfaces'
interface OfficeAssignment
{PersonID:number,Location:string,Instructor:$dp.$JsNet.ContosoUniversity.Models.Instructor}
interface Student
{EnrollmentDate:Date,PersonID:number,LastName:string,FirstMidName:string,FullName:string,Enrollments:$dp.$shared.$Array<$dp.$JsNet.ContosoUniversity.Models.Enrollment>}
interface Enrollment
{EnrollmentID:number,CourseID:number,PersonID:number,Grade:number,Student:$dp.$JsNet.ContosoUniversity.Models.Student,Course:$dp.$JsNet.ContosoUniversity.Models.Course}
interface Instructor
{HireDate:Date,OfficeAssignment:$dp.$JsNet.ContosoUniversity.Models.OfficeAssignment,PersonID:number,LastName:string,FirstMidName:string,FullName:string,Courses:$dp.$shared.$Array<$dp.$JsNet.ContosoUniversity.Models.Course>}
interface Course
{CourseID:number,Title:string,Credits:number,DepartmentID:number,Enrollments:$dp.$shared.$Array<$dp.$JsNet.ContosoUniversity.Models.Enrollment>,Instructors:$dp.$shared.$Array<$dp.$JsNet.ContosoUniversity.Models.Instructor>,Department:$dp.$JsNet.ContosoUniversity.Models.Department}
interface Department
{DepartmentID:number,Name:string,Budget:number,StartDate:Date,PersonID:number,RowVersion:$dp.$shared.$Array<number>,Courses_:$dp.$shared.$Array<$dp.$JsNet.ContosoUniversity.Models.Course>,Administrator:$dp.$JsNet.ContosoUniversity.Models.Instructor,Courses:$dp.$shared.$Array<$dp.$JsNet.ContosoUniversity.Models.Course>}
//#endregion
//#region 'functions'
var OfficeAssignment: () => $dp.$JsNet.ContosoUniversity.Models.OfficeAssignment;
var Student: () => $dp.$JsNet.ContosoUniversity.Models.Student;
var Enrollment: () => $dp.$JsNet.ContosoUniversity.Models.Enrollment;
var Instructor: () => $dp.$JsNet.ContosoUniversity.Models.Instructor;
var Course: () => $dp.$JsNet.ContosoUniversity.Models.Course;
var Department: () => $dp.$JsNet.ContosoUniversity.Models.Department;
//#endregion
}

//#region 'Enum'
declare namespace $dp.$JsNet.TestJsNetBridgeApp.Controllers.$JsNs$_HomeController {
interface enum_test {test1:{ $Key:string,$Value:number },test2:{ $Key:string,$Value:number }} 
}
//#endregion

declare namespace $dp.$JsNet.$UrlSet.Data2.Get{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{}
$Return():$dp.$JsNet.TestJsNetBridgeApp.Models.ReturnData
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Home2.Action_NoParams{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{}
$Return():$dp.$JsNet.TestJsNetBridgeApp.Models.ReturnData
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Home2.Action_FakeName{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{}
$Return():$dp.$JsNet.TestJsNetBridgeApp.Models.ReturnData
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Data.Get{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{}
$Return():$dp.$JsNet.TestJsNetBridgeApp.Models.ReturnData
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Data.Action_AcceptVerbs_TEST{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{}
$Return():$dp.$JsNet.TestJsNetBridgeApp.Models.ReturnData
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Data.Orders{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{}
$Return():$dp.$JsNet.TestJsNetBridgeApp.Models.ReturnData
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Data.Orders_WithCustomerId{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{customerId:number}
$Return():$dp.$JsNet.TestJsNetBridgeApp.Models.ReturnData
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Home.Index{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{}
$Return():{}
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Home.Action_NoParams{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{}
$Return():$dp.$JsNet.TestJsNetBridgeApp.Models.ReturnData
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Home.Action_WithParamterIdInUrl{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{id:string}
$Return():$dp.$JsNet.TestJsNetBridgeApp.Models.ReturnData
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Home.Action_FakeName{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{}
$Return():$dp.$JsNet.TestJsNetBridgeApp.Models.ReturnData
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Home.Action_Enum{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{choice:number}
$Return():$dp.$JsNet.TestJsNetBridgeApp.Models.ReturnData
$Enums():{choice: $dp.$JsNet.TestJsNetBridgeApp.Controllers.$JsNs$_HomeController.enum_test}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Home.ShowMe{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{name:string,age:number}
$Return():$dp.$JsNet.TestJsNetBridgeApp.Controllers.$JsNs$_HomeController.dpPerson
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Home.GetStudent{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{PersonID:number}
$Return():$dp.$JsNet.TestJsNetBridgeApp.Models.ReturnData_$gen$_ContosoUniversityModelsStudent
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Home.GetStudents{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{FirstMidName:string}
$Return():$dp.$JsNet.TestJsNetBridgeApp.Models.ReturnData_$gen$_ICollection_$gen$_ContosoUniversityModelsStudent
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Home.CreateNewStudent{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{student:$dp.$JsNet.ContosoUniversity.Models.Student}
$Return():$dp.$JsNet.TestJsNetBridgeApp.Models.ReturnData_$gen$_ContosoUniversityModelsStudent
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Home.GetDepartment{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{departmentName:string}
$Return():$dp.$JsNet.TestJsNetBridgeApp.Models.ReturnData_$gen$_ContosoUniversityModelsDepartment
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Instructor.Get{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{id:number}
$Return():$dp.$JsNet.TestJsNetBridgeApp.Models.ReturnData_$gen$_ContosoUniversityModelsInstructor
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.Instructor.Put{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{instructor:$dp.$JsNet.ContosoUniversity.Models.Instructor}
$Return():$dp.$JsNet.TestJsNetBridgeApp.Models.ReturnData_$gen$_ContosoUniversityModelsInstructor
$Enums():{}
}
var $action0: _$action0;
interface _$action1 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{id:number,instructor:$dp.$JsNet.ContosoUniversity.Models.Instructor}
$Return():$dp.$JsNet.TestJsNetBridgeApp.Models.ReturnData_$gen$_ContosoUniversityModelsInstructor
$Enums():{}
}
var $action1: _$action1;
}
declare namespace $dp.$JsNet.$UrlSet.Instructor.Delete{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{id:number}
$Return():$dp.$JsNet.TestJsNetBridgeApp.Models.ReturnData_$gen$_ContosoUniversityModelsInstructor
$Enums():{}
}
var $action0: _$action0;
}
