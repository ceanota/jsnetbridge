// Type definitions for [~THE LIBRARY NAME~] [~OPTIONAL VERSION NUMBER~]
// Project: [~THE PROJECT NAME~]
// Definitions by: [~YOUR NAME~] <[~A URL FOR YOU~]>

/*~ If this library is callable (e.g. can be invoked as myLib(3)),
 *~ include those call signatures here.
 *~ Otherwise, delete this section.
 */

//declare function myLib(a: string): string;
//declare function myLib(a: number): number;

/*~ If you want the name of this library to be a valid type name,
 *~ you can do so here.
 *~
 *~ For example, this allows us to write 'var x: myLib';
 *~ Be sure this actually makes sense! If it doesn't, just
 *~ delete this declaration and add types inside the namespace below.
 */

//interface myLib {
//    name: string;
//    length: number;
//    extras?: string[];
//}

/*~ If your library has properties exposed on a global variable,
 *~ place them here.
 *~ You should also place types (interfaces and type alias) here.
 */

declare namespace $dp.$JsNet.$Helpers.$Shared.$Action {

    interface $AjaxSettings {
        dataType: string,
        contentType: string,
        cache: boolean,
        type: string,
        method: string,
    }

    interface $httpMethodArray {
        $items: ArrayConstructor, $single: string, $first: string
    }

    
    interface _$Action {
        $_Url: string,
        $GetUrl(routeData: Object): string,
        $GetRouteData(): Object,
        $Names: Object,
        $Params(): Object,
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


declare namespace $dp.$JsNet.ContosoUniversity.Models {

    interface Enrollment {
        EnrollmentID: number, CourseID: number, PersonID: number, Grade: number,
        Student: Student,
        Course: Object,
    }

    interface Student {
        EnrollmentDate: Date, PersonID: number, LastName: string, FirstMidName: string, FullName: string, Enrollments: $dp.$shared.$Array<Enrollment>,
    }
}

declare namespace $dp.$JsNet.TestJsNetBridgeApp.Models {

    interface ReturnData<T> {
        TypedBusinessData: T,
        Url: string,
        Success: boolean,
        Method: string,
        InputStream: Object,
        BusinessData: Object,
    }
}

declare namespace $dp.$JsNet.$UrlSet.Home.Index {

    function $action0(): $dp.$JsNet.$Helpers.$Shared.$Action._$Action

}

declare namespace $dp.$JsNet.$UrlSet.Home.GetStudent {

    interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
        $Params(): { PersonID: Number }
        $Return(): $dp.$JsNet.TestJsNetBridgeApp.Models.ReturnData<$dp.$JsNet.ContosoUniversity.Models.Student>,
    }

    function $action0(): _$action0

}