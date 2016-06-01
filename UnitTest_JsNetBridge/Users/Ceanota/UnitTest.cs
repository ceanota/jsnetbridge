using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Diphap.JsNetBridge;
using System.Reflection;
using System.Web.Http.Controllers;
using System.Linq;
using System.Web.Http.Description;
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
using Diphap.JsNetBridge.Common;

namespace UnitTest_JsNetBridge.Users.Ceanota
{

    /* NE PAS SUPPRIMER: IF EXIST "$(ProjectDir)\Generators\Diphap.JsNetBridge\Diphap.JsNetBridge.Generator.exe" "$(ProjectDir)\Generators\Diphap.JsNetBridge\Diphap.JsNetBridge.Generator.exe" "{ dll_asp:'$(TargetPath)' }" */

    [TestClass]
    public class UnitTest
    {
        [TestMethod]
        public void TestMethod1()
        {
            ModelInfo st = new ModelInfo(typeof(ContosoUniversity.Models.Student));
            st.WriteAllText(@"C:\Users\diphap\Source\Repos\jsnet\UnitTest_JsNetBridge\Users\Ceanota\test.js", false);
        }

        [TestMethod]
        public void TestModel()
        {
            //string fileName = @"D:\utilisateurs\diphap\documents\visual studio 2012\Projects\MvcApplication5\MvcApplication5\bin\MvcApplication5.dll";
            string fileName = @"D:\DEV\NouvelleGamme\Eden\MVC\QuadraEdenMVC_UI\bin\QuadraEdenTransverse.dll";

            string[] namespaces = new string[] { };
            Assembly ass = Assembly.LoadFrom(fileName);

            EnumColInfo ei = new EnumColInfo(ass);
            string text = ei.ToJS();
            File.WriteAllText(@"C:\Users\diphap\Source\Repos\jsnet\UnitTest_JsNetBridge\Users\Ceanota\test.js", text);
        }

        enum EnumTest
        {
            test1, test2
        }

        private string GetUserFolder()
        {
            string path = Directory.GetParent(Environment.GetFolderPath(Environment.SpecialFolder.ApplicationData)).FullName;
            if (Environment.OSVersion.Version.Major >= 6)
            {
                path = Directory.GetParent(path).ToString();
            }

            path = @"C:\Users\diphap";

            return path;
        }

        [TestMethod]
        public void TestExe()
        {
            //string appAspNetPath = @"C:\Users\diphap\Source\Repos\jsnet\ContosoUniversity\bin\ContosoUniversity.dll";
            //@"D:\Utilisateurs\diphap\Downloads\BookService-master\BookService-master\BookService\bin\BookService.dll"; 
            string appAspNetPath = GetUserFolder() + @"\Source\Repos\jsnet\SingleAppExample\bin\SingleAppExample.dll";
            AspMvcInfo api = new AspMvcInfo(appAspNetPath);
            File.WriteAllText(GetUserFolder() + @"\Source\Repos\jsnet\UnitTest_JsNetBridge\Users\Ceanota\test.js", api.ToJS(true));
            
            api.AssemblyResolver.SubscribeAssemblyResolveEvent(false);
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
