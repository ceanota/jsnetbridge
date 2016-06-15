//using System;
//using System.Collections.Generic;
//using System.ComponentModel.DataAnnotations;
//using System.ComponentModel.DataAnnotations.Schema;
//using System.Linq;
//using System.Text;
//using System.Threading.Tasks;

//namespace TestModels
//{

//    public enum EnumTest
//    {
//        test1, test2
//    }

//    public class MyModelBase
//    {
//        [Key]
//        public int PersonID { get; set; }

//        //[RegularExpression(@"^[A-Z]+[a-zA-Z''-'\s]*$")]
//        //[StringLength(50, MinimumLength = 1)]
//        //[Display(Name = "Last Name")]
//        //public string LastName { get; set; }

//        //[Column("FirstName")]
//        //[Display(Name = "First Name")]
//        //[StringLength(50, MinimumLength = 2, ErrorMessage = "First name must be between 2 and 50 characters.")]
//        //public string FirstMidName { get; set; }

//        //public string FullName
//        //{
//        //    get
//        //    {
//        //        return LastName + ", " + FirstMidName;
//        //    }
//        //}

        
//    }

//    public class MyModel : MyModelBase
//    {
//        [DataType(DataType.Date)]
//        [Display(Name = "Enrollment Date")]
//        public DateTime EnrollmentDate { get; set; }

//        public virtual ICollection<Enrollment> Enrollments { get; set; }

//    }

//    public enum Grade
//    {
//        A, B, C, D, F
//    }

//    public class Enrollment
//    {
//        //public int EnrollmentID { get; set; }
//        //public int CourseID { get; set; }
//        //public int PersonID { get; set; }

//        //[DisplayFormat(NullDisplayText = "No grade")]
//        //public Grade? Grade { get; set; }

//        //public virtual Course Course { get; set; }
//        public virtual MyModel Student { get; set; }
//    }

//    public class Course
//    {
//        [DatabaseGenerated(DatabaseGeneratedOption.None)]
//        [Display(Name = "Number")]
//        public int CourseID { get; set; }

//        [StringLength(50, MinimumLength = 3)]
//        public string Title { get; set; }

//        [Range(0, 5)]
//        public int Credits { get; set; }

//        [Display(Name = "Department")]
//        public int DepartmentID { get; set; }

//        //public virtual Department Department { get; set; }
//        public virtual ICollection<Enrollment> Enrollments { get; set; }
//        //public virtual ICollection<Instructor> Instructors { get; set; }
//    }

//}
