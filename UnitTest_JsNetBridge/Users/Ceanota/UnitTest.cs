﻿using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Diphap.JsNetBridge;
using System.Reflection;
using System.Linq;
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
            var ef = new QuadraEden.Domain.EffetFacture();
            var reg = new QuadraEden.Domain.Reglement();

            var tef = typeof(QuadraEden.Domain.EffetFacture);
            var treg = typeof(QuadraEden.Domain.Reglement);

            ModelInfo st = new ModelInfo(typeof(QuadraEden.Domain.EffetFacture), typeof(QuadraEden.Domain.Reglement));
            File.WriteAllText(@"D:\Source\Repos\jsnet\UnitTest_JsNetBridge\Users\Ceanota\test.d.ts", st.ToTSCore());

            //st.WriteAllText(@"D:\Source\Repos\jsnet\UnitTest_JsNetBridge\Users\Ceanota\test.js", true);

            //EnumColInfo ei = new EnumColInfo(
            //    new List<Type>() { typeof(ContosoUniversity.Models.Grade), typeof(General.Langue), typeof(General.Matiere) },
            //    new ConfigJS.JSNamespace());

            //File.WriteAllText(@"D:\Source\Repos\jsnet\UnitTest_JsNetBridge\Users\Ceanota\test.enum.d.ts", ei.ToTSCore());

            //ei.WriteAllText(@"D:\Source\Repos\jsnet\UnitTest_JsNetBridge\Users\Ceanota\test.enum.js");
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

            //path = @"D:";

            return path;
        }


        [TestMethod]
        public void TestExe_gescom()
        {
            var st = System.Diagnostics.Stopwatch.StartNew();

            //string appAspNetPath = GetUserFolder() + @"\Source\Repos\jsnet\ContosoUniversity\bin\ContosoUniversity.dll";
            //@"D:\Utilisateurs\diphap\Downloads\BookService-master\BookService-master\BookService\bin\BookService.dll"; 
            //string appAspNetPath =  GetUserFolder() + @"\Source\Repos\jsnet\TestJsNetBridgeApp\bin\TestJsNetBridgeApp.dll";
            string appAspNetPath = "";

            //appAspNetPath = @"D:\Source\Repos\jsnet\WebApplication_vide\bin\WebApplication_vide.dll";
            //appAspNetPath = @"D:\Source\Quadratus\QuadraEden.m\QuadraEden - Copie\QuadraEdenMVC_UI\bin\QuadraEdenMVC_UI.dll";
            appAspNetPath = @"d:\source\quadratus\quadraedenmrtui - copie\quadraedenmvc_ui\bin\QuadraEdenMVC_UI.dll";
            AspMvcInfo api = new AspMvcInfo(appAspNetPath);
            
            string repertoire_destination = @"D:\Source\Repos";

            //api.WriteAllText(
            //    repertoire_destination + @"\jsnet\UnitTest_JsNetBridge\Users\Ceanota\test.js",
            //    repertoire_destination + @"\jsnet\UnitTest_JsNetBridge\Users\Ceanota\test.d.ts");

            api.WriteAllText(
 @"D:\Source\Repos\jsnet\WebApplication_vide\scripts\Diphap.JsNetBridge\Diphap.JsNetBridge.js",
 @"D:\Source\Repos\jsnet\WebApplication_vide\scripts\Diphap.JsNetBridge\Diphap.JsNetBridge.d.ts");
            st.Stop();
        }

        [TestMethod]
        public void TestExe()
        {
            //string appAspNetPath = GetUserFolder() + @"\Source\Repos\jsnet\ContosoUniversity\bin\ContosoUniversity.dll";
            //@"D:\Utilisateurs\diphap\Downloads\BookService-master\BookService-master\BookService\bin\BookService.dll"; 
            //string appAspNetPath =  GetUserFolder() + @"\Source\Repos\jsnet\TestJsNetBridgeApp\bin\TestJsNetBridgeApp.dll";
            string appAspNetPath = @"C:\tfs_cegid\Nouvelle_Gamme\QuadraEden - Copie\QuadraEdenMVC_UI\bin\QuadraEdenMVC_UI.dll";
            AspMvcInfo api = new AspMvcInfo(appAspNetPath);

            //File.WriteAllText(GetUserFolder() + @"\Source\Repos\jsnet\UnitTest_JsNetBridge\Users\Ceanota\test.d.ts", api.ToTS());

            //api.WriteAllText(
            //    GetUserFolder() + @"\Source\Repos\jsnet\UnitTest_JsNetBridge\Users\Ceanota\test.js", 
            //    GetUserFolder() + @"\Source\Repos\jsnet\UnitTest_JsNetBridge\Users\Ceanota\test.d.ts");

            api.WriteAllText(
                @"C:\tfs_cegid\Nouvelle_Gamme\QuadraEden - Copie\QuadraEdenMVC_UI\Scripts\Diphap.JsNetBridge\Diphap.JsNetBridge.js",
                @"C:\tfs_cegid\Nouvelle_Gamme\QuadraEden - Copie\QuadraEdenMVC_UI\Scripts\Diphap.JsNetBridge\Diphap.JsNetBridge.d.ts");

        }

        [TestMethod]
        public void TestExeCore()
        {
            string appAspNetPath = "";
            appAspNetPath = @"D:\Source\Repos\jsnet\WebApplicationWinCore\bin\Release\net452\win7-x64\WebApplicationWinCore.exe";
            appAspNetPath = @"D:\Source\Repos\jsnet\WebApplicationWinCore\bin\Debug\net452\win7-x64\WebApplicationWinCore.exe";
            //appAspNetPath = @"D:\Source\Repos\jsnet\WebApplicationWinCore\bin\Debug\net452\WebApplicationWinCore.exe";
            AspMvcInfo api = new AspMvcInfo(appAspNetPath, true);
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
