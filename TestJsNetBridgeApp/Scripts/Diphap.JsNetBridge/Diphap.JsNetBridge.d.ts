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
        $GetUrl(): string,
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
{PackageNugetName:string,PackageNugetVersion:Object}
interface ReturnData
{InputStream:Object,Url:string,Success:boolean,Method:string,BusinessData:Object}
interface ReturnData_$gen$_T
{TypedBusinessData:Object,InputStream:Object,Url:string,Success:boolean,Method:string,BusinessData:Object}
interface ReturnData_$gen$_ContosoUniversityModelsDepartment
{TypedBusinessData:$dp.$JsNet.ContosoUniversity.Models.Department,InputStream:Object,Url:string,Success:boolean,Method:string,BusinessData:Object}
interface ReturnData_$gen$_ContosoUniversityModelsInstructor
{TypedBusinessData:$dp.$JsNet.ContosoUniversity.Models.Instructor,InputStream:Object,Url:string,Success:boolean,Method:string,BusinessData:Object}
interface ReturnData_$gen$_ContosoUniversityModelsStudent
{TypedBusinessData:$dp.$JsNet.ContosoUniversity.Models.Student,InputStream:Object,Url:string,Success:boolean,Method:string,BusinessData:Object}
interface ReturnData_$gen$_ICollection_$gen$_ContosoUniversityModelsStudent
{TypedBusinessData:$dp.$shared.$Array<$dp.$JsNet.ContosoUniversity.Models.Student>,InputStream:Object,Url:string,Success:boolean,Method:string,BusinessData:Object}
//#endregion
//#region 'functions'
var LayoutModel: () => $dp.$JsNet.TestJsNetBridgeApp.Models.LayoutModel;
var ReturnData: () => $dp.$JsNet.TestJsNetBridgeApp.Models.ReturnData;
var ReturnData_$gen$_T: () => $dp.$JsNet.TestJsNetBridgeApp.Models.ReturnData_$gen$_T;
var ReturnData_$gen$_ContosoUniversityModelsDepartment: () => $dp.$JsNet.TestJsNetBridgeApp.Models.ReturnData_$gen$_ContosoUniversityModelsDepartment;
var ReturnData_$gen$_ContosoUniversityModelsInstructor: () => $dp.$JsNet.TestJsNetBridgeApp.Models.ReturnData_$gen$_ContosoUniversityModelsInstructor;
var ReturnData_$gen$_ContosoUniversityModelsStudent: () => $dp.$JsNet.TestJsNetBridgeApp.Models.ReturnData_$gen$_ContosoUniversityModelsStudent;
var ReturnData_$gen$_ICollection_$gen$_ContosoUniversityModelsStudent: () => $dp.$JsNet.TestJsNetBridgeApp.Models.ReturnData_$gen$_ICollection_$gen$_ContosoUniversityModelsStudent;
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
interface Instructor
{HireDate:Date,Courses:$dp.$shared.$Array<$dp.$JsNet.ContosoUniversity.Models.Course>,OfficeAssignment:$dp.$JsNet.ContosoUniversity.Models.OfficeAssignment,PersonID:number,LastName:string,FirstMidName:string,FullName:string}
interface Department
{DepartmentID:number,Name:string,Budget:number,StartDate:Date,PersonID:number,RowVersion:$dp.$shared.$Array<number>,Courses_:$dp.$shared.$Array<$dp.$JsNet.ContosoUniversity.Models.Course>,Administrator:$dp.$JsNet.ContosoUniversity.Models.Instructor,Courses:$dp.$shared.$Array<$dp.$JsNet.ContosoUniversity.Models.Course>}
interface Student
{EnrollmentDate:Date,Enrollments:$dp.$shared.$Array<$dp.$JsNet.ContosoUniversity.Models.Enrollment>,PersonID:number,LastName:string,FirstMidName:string,FullName:string}
interface Enrollment
{EnrollmentID:number,CourseID:number,PersonID:number,Grade:number,Course:$dp.$JsNet.ContosoUniversity.Models.Course,Student:$dp.$JsNet.ContosoUniversity.Models.Student}
interface Course
{CourseID:number,Title:string,Credits:number,DepartmentID:number,Department:$dp.$JsNet.ContosoUniversity.Models.Department,Enrollments:$dp.$shared.$Array<$dp.$JsNet.ContosoUniversity.Models.Enrollment>,Instructors:$dp.$shared.$Array<$dp.$JsNet.ContosoUniversity.Models.Instructor>}
//#endregion
//#region 'functions'
var OfficeAssignment: () => $dp.$JsNet.ContosoUniversity.Models.OfficeAssignment;
var Instructor: () => $dp.$JsNet.ContosoUniversity.Models.Instructor;
var Department: () => $dp.$JsNet.ContosoUniversity.Models.Department;
var Student: () => $dp.$JsNet.ContosoUniversity.Models.Student;
var Enrollment: () => $dp.$JsNet.ContosoUniversity.Models.Enrollment;
var Course: () => $dp.$JsNet.ContosoUniversity.Models.Course;
//#endregion
}

//#region 'Enum'
declare namespace $dp.$JsNet.TestJsNetBridgeApp.Controllers.$JsNs$_HomeController {
interface enum_test {test1:{ $Key:string,$Value:number },test2:{ $Key:string,$Value:number }} 
}
declare namespace $dp.$JsNet.ContosoUniversity.Models {
interface Grade {A:{ $Key:string,$Value:number },B:{ $Key:string,$Value:number },C:{ $Key:string,$Value:number },D:{ $Key:string,$Value:number },F:{ $Key:string,$Value:number }} 
}
//#endregion

declare namespace $dp.$JsNet.$UrlSet.$apiData2.Get{
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
declare namespace $dp.$JsNet.$UrlSet.$apiData.Get{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{}
$Return():$dp.$JsNet.TestJsNetBridgeApp.Models.ReturnData
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.$apiData.Action_AcceptVerbs_TEST{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{}
$Return():$dp.$JsNet.TestJsNetBridgeApp.Models.ReturnData
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.$apiData.Orders{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{}
$Return():$dp.$JsNet.TestJsNetBridgeApp.Models.ReturnData
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.$apiData.Orders_WithCustomerId{
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
$Params():{choice:number,myGrade:number}
$Return():$dp.$JsNet.TestJsNetBridgeApp.Models.ReturnData
$Enums():{choice: $dp.$JsNet.TestJsNetBridgeApp.Controllers.$JsNs$_HomeController.enum_test,myGrade: $dp.$JsNet.ContosoUniversity.Models.Grade}
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
declare namespace $dp.$JsNet.$UrlSet.Home.ShowMe2{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{name:string,age:number,prenom:string}
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
declare namespace $dp.$JsNet.$UrlSet.$apiInstructor.Get{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{id:number}
$Return():$dp.$JsNet.TestJsNetBridgeApp.Models.ReturnData_$gen$_ContosoUniversityModelsInstructor
$Enums():{}
}
var $action0: _$action0;
}
declare namespace $dp.$JsNet.$UrlSet.$apiInstructor.Put{
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
declare namespace $dp.$JsNet.$UrlSet.$apiInstructor.Delete{
interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
$Params():{id:number}
$Return():$dp.$JsNet.TestJsNetBridgeApp.Models.ReturnData_$gen$_ContosoUniversityModelsInstructor
$Enums():{}
}
var $action0: _$action0;
}
import $dpUrlSet = $dp.$JsNet.$UrlSet;
