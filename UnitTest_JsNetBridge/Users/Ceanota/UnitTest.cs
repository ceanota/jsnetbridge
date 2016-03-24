using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Diphap.JsNetBridge;
using System.Reflection;
using SingleAppExample.Areas.HelpPage.Models;
using System.Web.Http.Controllers;
using System.Linq;
using System.Web.Http.Description;
using SingleAppExample.Models;
using System.Collections.ObjectModel;
using System.Collections.Generic;
using System.Text.RegularExpressions;
using System.IO;
using Diphap.JsNetBridge.Common.JS;
using Diphap.JsNetBridge.Data.Enum;
using Diphap.JsNetBridge.Data;
using Diphap.JsNetBridge.Mvc;
using Test;
using System.Text;

namespace UnitTest_JsNetBridge.Users.Ceanota
{

    

    [TestClass]
    public class UnitTest
    {
        [TestMethod]
        public void TestMethod1()
        {

            //ModelInfo st = new ModelInfo(typeof(TestModels.MyModel)); //ContosoUniversity.Models.Student));
            ModelInfo st = new ModelInfo(typeof(ContosoUniversity.Models.Student));
            string jsCore = st.ToJS();

            StringBuilder sb = new StringBuilder();
            sb.AppendLine(File.ReadAllText(@"C:\Users\diphap\Source\Repos\jsnet\NuGet.Packager\content\Scripts\Diphap.JsNetBridge\arrayFactory.js"));
            sb.AppendLine(File.ReadAllText(@"C:\Users\diphap\Source\Repos\jsnet\NuGet.Packager\content\Scripts\Diphap.JsNetBridge\circularReferenceManagerFactory.js"));
            sb.AppendLine(jsCore);
            
            File.WriteAllText(@"C:\Users\diphap\Source\Repos\jsnet\UnitTest_JsNetBridge\Users\Ceanota\test.js", sb.ToString());

        }

        [TestMethod]
        public void TestModel()
        {
            //string fileName = @"D:\utilisateurs\diphap\documents\visual studio 2012\Projects\MvcApplication5\MvcApplication5\bin\MvcApplication5.dll";
            string fileName = @"D:\DEV\NouvelleGamme\Eden\MVC\QuadraEdenMVC_UI\bin\QuadraEdenTransverse.dll";

            string[] namespaces = new string[] { };
            Assembly ass = Assembly.LoadFrom(fileName);

            EnumColInfo ei = new EnumColInfo(ass);

        }

        [TestMethod]
        public void TestExe()
        {
            string appAspNetPath = @"D:\Utilisateurs\diphap\Downloads\BookService-master\BookService-master\BookService\bin\BookService.dll"; //@"C:\Users\diphap\Source\Repos\jsnet\SingleAppExample\bin\SingleAppExample.dll";
            AspMvcInfo api = new AspMvcInfo(appAspNetPath);
            api.WriteAllText(@"C:\Users\diphap\Source\Repos\jsnet\UnitTest_JsNetBridge\Users\Ceanota\test.js");
        }


        [TestMethod]
        public void Test_()
        {
            List<AssemblySet> typeSetList = new List<Diphap.JsNetBridge.AssemblySet>();

            {

                string assemblyPath = @"C:\Users\diphap\Source\Repos\jsnet\SingleAppExample\bin\SingleAppExample.dll"; //@"C:\Users\diphap\Source\Repos\jsnet\ContosoUniversity\bin\ContosoUniversity.dll";

                AspMvcInfo api = new AspMvcInfo(assemblyPath, typeSetList);

                string jsCore = api.ToJS();

                StringBuilder sb = new StringBuilder();
                sb.AppendLine(File.ReadAllText(@"C:\Users\diphap\Source\Repos\jsnet\NuGet.Packager\content\Scripts\Diphap.JsNetBridge\arrayFactory.js"));
                sb.AppendLine(File.ReadAllText(@"C:\Users\diphap\Source\Repos\jsnet\NuGet.Packager\content\Scripts\Diphap.JsNetBridge\circularReferenceManagerFactory.js"));
                sb.AppendLine(jsCore);

                File.WriteAllText(@"C:\Users\diphap\Source\Repos\jsnet\UnitTest_JsNetBridge\Users\Ceanota\test.js", sb.ToString());


            }

        }


    }
}
