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

namespace UnitTest_JsNetBridge
{
    [TestClass]
    public class UnitTest
    {
        [TestMethod]
        public void TestMethod1()
        {
            string fileName = @"C:\Users\diphap\Source\Repos\jsnet\SingleAppExample\bin\SingleAppExample.dll";

            AspMvcInfo Singleton = new AspMvcInfo(Assembly.LoadFrom(fileName));
            var ss = Singleton.ToJS();
            string setUrl = Singleton.UrlInfo.ToJS_SetUrl();
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
            string rootPath = @"D:\utilisateurs\diphap\documents\visual studio 2012\Projects\MvcApplication5\MvcApplication5";
            string appAspNetPath = rootPath + @"\bin\MvcApplication5.dll";

            #region "QuadraEdenMVC_UI"
            rootPath = @"D:\DEV\NouvelleGamme\Eden\MVC\QuadraEdenMVC_UI";
            appAspNetPath = rootPath + @"\bin\QuadraEdenMVC_UI.dll";
            #endregion

            string jsFilePath = rootPath + @"\Scripts\Test.js";

            AspMvcInfo api = new AspMvcInfo(appAspNetPath);
            api.WriteAllText(jsFilePath);
        }


        [TestMethod]
        public void Test_()
        {
            string jsFilePath = @"D:\utilisateurs\diphap\documents\visual studio 2012\Projects\MvcApplication5\MvcApplication5\Scripts\Test.js";

            File.WriteAllText(jsFilePath, null);

            List<AssemblySet> typeSetList = new List<Diphap.JsNetBridge.AssemblySet>();
            {
                #region ""
                string rootPath = @"D:\DEV\NouvelleGamme\Eden\WS\QuadraEdenWebService\Lib\QuadraEdenReferentiel";
                string assemblyPath = rootPath + @"\QuadraEdenTransverse.dll";
                #endregion

                typeSetList.Add(new AssemblySet(assemblyPath));
            }

            {
                #region ""
                string rootPath = @"D:\DEV\NouvelleGamme\Eden\WS\QuadraEdenWebService\Lib\QuadraEdenReferentiel";
                string assemblyPath = rootPath + @"\QuadraEdenDomain.dll";
                #endregion

                typeSetList.Add(new AssemblySet(assemblyPath));
            }

            {
                string rootPath = @"D:\utilisateurs\diphap\documents\visual studio 2012\Projects\MvcApplication5\MvcApplication5";
                string assemblyPath = rootPath + @"\bin\MvcApplication5.dll";

                //#region ""
                rootPath = @"D:\DEV\NouvelleGamme\Eden\MVC\QuadraEdenMVC_UI";
                assemblyPath = rootPath + @"\bin\QuadraEdenMVC_UI.dll";
                //#endregion

                AspMvcInfo api = new AspMvcInfo(assemblyPath, typeSetList);
                api.AppendAllText(jsFilePath);
            }

        }


    }
}
