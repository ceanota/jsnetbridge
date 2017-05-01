declare namespace $dp.$shared {
    interface $Array<T> extends Array<T> {
        $dpItemFactory(): T;
    }
}
declare namespace $dp.$JsNet.ContosoUniversity.Models {
    //#region 'interfaces'
    interface OfficeAssignment
    { PersonID: number, Location: string, Instructor: $dp.$JsNet.ContosoUniversity.Models.Instructor }
    interface Student
    { EnrollmentDate: Date, PersonID: number, LastName: string, FirstMidName: string, FullName: string, Enrollments: $dp.$shared.$Array<$dp.$JsNet.ContosoUniversity.Models.Enrollment> }
    interface Instructor
    { HireDate: Date, OfficeAssignment: $dp.$JsNet.ContosoUniversity.Models.OfficeAssignment, PersonID: number, LastName: string, FirstMidName: string, FullName: string, Courses: $dp.$shared.$Array<$dp.$JsNet.ContosoUniversity.Models.Course> }
    interface Enrollment
    { EnrollmentID: number, CourseID: number, PersonID: number, Grade: number, Student: $dp.$JsNet.ContosoUniversity.Models.Student, Course: $dp.$JsNet.ContosoUniversity.Models.Course }
    interface Course
    { CourseID: number, Title: string, Credits: number, DepartmentID: number, Enrollments: $dp.$shared.$Array<$dp.$JsNet.ContosoUniversity.Models.Enrollment>, Instructors: $dp.$shared.$Array<$dp.$JsNet.ContosoUniversity.Models.Instructor>, Department: $dp.$JsNet.ContosoUniversity.Models.Department }
    interface Department
    { DepartmentID: number, Name: string, Budget: number, StartDate: Date, PersonID: number, RowVersion: $dp.$shared.$Array<number>, Administrator: $dp.$JsNet.ContosoUniversity.Models.Instructor, Courses_: $dp.$shared.$Array<$dp.$JsNet.ContosoUniversity.Models.Course>, Courses: $dp.$shared.$Array<$dp.$JsNet.ContosoUniversity.Models.Course> }
    //#endregion
    //#region 'functions'
    var OfficeAssignment: () => $dp.$JsNet.ContosoUniversity.Models.OfficeAssignment;
    var Student: () => $dp.$JsNet.ContosoUniversity.Models.Student;
    var Instructor: () => $dp.$JsNet.ContosoUniversity.Models.Instructor;
    var Enrollment: () => $dp.$JsNet.ContosoUniversity.Models.Enrollment;
    var Course: () => $dp.$JsNet.ContosoUniversity.Models.Course;
    var Department: () => $dp.$JsNet.ContosoUniversity.Models.Department;
    //#endregion
}
declare namespace $dp.$JsNet.ContosoUniversity.Models.Generic {
    //#region 'interfaces'
    interface ReturnData_$gen$_ContosoUniversityModelsEnrollment
    { TypedBusinessData: $dp.$JsNet.ContosoUniversity.Models.Enrollment, Url: string, Success: boolean, Method: string, InputStream: {}, BusinessData: {} }
    //#endregion
    //#region 'functions'
    var ReturnData_$gen$_ContosoUniversityModelsEnrollment: () => $dp.$JsNet.ContosoUniversity.Models.Generic.ReturnData_$gen$_ContosoUniversityModelsEnrollment;
    //#endregion
}
