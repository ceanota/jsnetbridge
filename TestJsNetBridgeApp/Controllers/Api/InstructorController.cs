using ContosoUniversity.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using TestJsNetBridgeApp.Models;

namespace TestJsNetBridgeApp.Controllers.Api
{
    public class InstructorController : ApiController
    {
        /// <summary>
        /// Get instructor.
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public ReturnData<Instructor> Get(int id)
        {
            Instructor instructor = new Instructor();
            instructor.PersonID = id;
            instructor.FirstMidName = "Marie Théophanie";
            instructor.LastName = "TRUONG";

            instructor.OfficeAssignment = new OfficeAssignment();
            instructor.OfficeAssignment.PersonID = instructor.PersonID;
            //instructor.OfficeAssignment.Instructor = instructor;
            instructor.OfficeAssignment.Location = "House Einstein, room E45";

            instructor.Courses = new List<Course>();
            Course maths = new Course() { CourseID = 23 };
            maths.Title = "Maths";
            //maths.Instructors = new List<Instructor>() { instructor };
            maths.Department = new Department() { Name = "SCIENCE" };


            return new ReturnData<Instructor>() { Success = true, TypedBusinessData = instructor };
        }

        /// <summary>
        /// Update instructor.
        /// </summary>
        /// <param name="instructor"></param>
        /// <returns></returns>
        public ReturnData<Instructor> Put(Instructor instructor)
        {
            return new ReturnData<Instructor>() { Success = true, TypedBusinessData = instructor };
        }

        /// <summary>
        /// Update instructor
        /// </summary>
        /// <param name="id"></param>
        /// <param name="instructor"></param>
        /// <returns></returns>
        public ReturnData<Instructor> Put(int id, Instructor instructor)
        {
            instructor.PersonID = id;
            return new ReturnData<Instructor> { Success = true, TypedBusinessData = instructor };
        }

        /// <summary>
        /// Delete instructor.
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public ReturnData<Instructor> Delete(int id)
        {
            Instructor instructor = new Instructor();
            instructor.PersonID = id;
            instructor.FirstMidName = "Marie Théophanie";
            instructor.LastName = "TRUONG";

            return new ReturnData<Instructor> { Success = true, TypedBusinessData = instructor };
        }


    }
}
