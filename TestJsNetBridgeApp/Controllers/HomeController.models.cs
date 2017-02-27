using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TestJsNetBridgeApp.Models;

namespace TestJsNetBridgeApp.Controllers
{
    public partial class HomeController
    {
        /// <summary>
        /// Get a student
        /// </summary>
        /// <param name="PersonID"></param>
        /// <returns></returns>
        [Diphap.JsNetBridge.Common.JsNetResponseType(typeof(ReturnData<ContosoUniversity.Models.Student>))]
        public JsonResult GetStudent(int PersonID)
        {
            JsonResult result = new JsonResult();
            result.JsonRequestBehavior = JsonRequestBehavior.AllowGet;
            var data = new ReturnData<ContosoUniversity.Models.Student>()
            { Success = true, TypedBusinessData = new ContosoUniversity.Models.Student() { PersonID = PersonID, FirstMidName = "Diphap", LastName = "TRAN" } };
            result.Data = data;
            return result;
        }


        /// <summary>
        /// Get all student having this first name.
        /// </summary>
        /// <param name="FirstMidName"></param>
        /// <returns></returns>
        [Diphap.JsNetBridge.Common.JsNetResponseType(typeof(ReturnData<IList<ContosoUniversity.Models.Student>>))]
        public JsonResult GetStudents(string FirstMidName)
        {
            JsonResult result = new JsonResult();
            result.JsonRequestBehavior = JsonRequestBehavior.AllowGet;
            var data = new ReturnData<IList<ContosoUniversity.Models.Student>>()
            {
                Success = true,
                TypedBusinessData = new ContosoUniversity.Models.Student[]
                {
                    new ContosoUniversity.Models.Student() { FirstMidName = FirstMidName, LastName = "TRAN" },
                    new ContosoUniversity.Models.Student() { FirstMidName = FirstMidName, LastName = "NGUYEN" }
                }
            };
            result.Data = data;
            return result;
        }

        /// <summary>
        /// Create a new student.
        /// </summary>
        /// <param name="student"></param>
        /// <returns></returns>
        [Diphap.JsNetBridge.Common.JsNetResponseType(typeof(ReturnData<ContosoUniversity.Models.Student>))]
        public JsonResult CreateNewStudent(ContosoUniversity.Models.Student student)
        {
            JsonResult result = new JsonResult();
            result.JsonRequestBehavior = JsonRequestBehavior.AllowGet;

            student.PersonID = 78;

            var data = new ReturnData<ContosoUniversity.Models.Student>()
            { Success = true, TypedBusinessData = student };

            result.Data = data;
            return result;
        }

        /// <summary>
        /// Get a department with its courses.
        /// </summary>
        /// <param name="departmentName"></param>
        /// <returns></returns>
        [Diphap.JsNetBridge.Common.JsNetResponseType(typeof(ReturnData<ContosoUniversity.Models.Department>))]
        public JsonResult GetDepartment(string departmentName)
        {
            JsonResult result = new JsonResult();
            result.JsonRequestBehavior = JsonRequestBehavior.AllowGet;
            var data = new ReturnData<ContosoUniversity.Models.Department>()
            {
                Success = true,
                TypedBusinessData = new ContosoUniversity.Models.Department
                {
                    Name = departmentName,
                    Courses = new ContosoUniversity.Models.Course[]
                    {
                        new ContosoUniversity.Models.Course() { Title = "Maths", CourseID = 1 },
                        new ContosoUniversity.Models.Course() { Title = "Physics", CourseID = 2 },
                    }
                }
            };
            result.Data = data;
            return result;
        }

        

    }
}