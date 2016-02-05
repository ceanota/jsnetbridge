﻿using Diphap.JsNetBridge.Common.JS;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Diphap.JsNetBridge
{
    public class JSHelper
    {
        /// <summary>
        /// Get name of object factory.
        /// </summary>
        /// <param name="telem_work"></param>
        /// <param name="isCollection"></param>
        /// <param name="functionReference"></param>
        /// <returns></returns>
        public static string GetObjectFactoryName(Type telem_work, bool isCollection, bool functionReference = true)
        {
            string jsvalue = string.Format("{0}.{1}()", Config.prefix_ns, telem_work.FullName.Replace("+", "."));
            if (isCollection)
            {
                jsvalue = JSArrayFactory.FunctionDefinitionCall(jsvalue);
            }
            if (functionReference)
            {
                jsvalue = jsvalue.Replace("()", null);
            }
            return jsvalue;
        }

        /// <summary>
        /// Create namespace.
        /// </summary>
        /// <param name="js_obj_fullName"></param>
        /// <returns></returns>
        static public List<string> CreateNamespace(string js_obj_fullName)
        {
            //-- 
            List<string> obj_full_array;
            {
                //-- parts of namespace.
                List<string> ns_parts = js_obj_fullName.Split('.').ToList();

                obj_full_array = new List<string>(ns_parts.Count);


                if ((ns_parts[0] == "window") == false)
                {
                    //-- insert 'window'
                    ns_parts.Insert(0, "window");
                    js_obj_fullName = "window." + js_obj_fullName;
                }

                string ns_remain = js_obj_fullName;
                for (int ii = ns_parts.Count - 1; ii > 0; ii--)
                {
                    string obj_current = ns_parts[ii];
                    int length = ns_remain.Length - obj_current.Length;
                    string obj_all = ns_remain.Substring(0, length).TrimEnd('.');
                    obj_full_array.Add(obj_all);
                    ns_remain = obj_all;
                }

                obj_full_array.Reverse();

                obj_full_array.Remove("window");
            }


            List<string> instructions = new List<string>();
            foreach (string obj in obj_full_array)
            {
                instructions.Add(string.Format("{0} = {0} || {{}};", obj));
            }

            return instructions;

        }

        /// <summary>
        /// Primitive Type of member or Collection of primitive types .
        /// </summary>
        /// <param name="tmember"></param>
        /// <param name="jsValue"></param>
        /// <returns></returns>
        public static bool GetPrimitiveEmptyValue(Type tmember, out string jsValue)
        {
            jsValue = "";

            if (tmember == typeof(string))
            {
                jsValue = "\"\"";
            }
            else if (TypeHelper.IsNumber(tmember) || TypeHelper.IsEnum(tmember))
            {
                jsValue = "0";
            }
            else if (TypeHelper.IsDateTime(tmember))
            {
                jsValue = "new Date()";
            }
            else if (TypeHelper.IsBoolean(tmember))
            {
                jsValue = "false";
            }
            else if (TypeHelper.IsCollection(tmember))
            {
                //-- member is collection
                Type telement;
                if (TypeHelper.GetElementTypeOfCollection(tmember, out telement))
                {
                    if (JSHelper.GetPrimitiveEmptyValue(telement, out jsValue) == false)
                    {
                        jsValue = "";
                    }
                    else
                    {
                        jsValue = JSArrayFactory.FunctionDefinitionCall(jsValue);
                    }
                }
                else
                {
                    jsValue = "[]";
                }
            }

            return string.IsNullOrWhiteSpace(jsValue) == false;
        }

        /// <summary>
        /// Get Function.
        /// </summary>
        /// <param name="body"></param>
        /// <param name="call"></param>
        /// <param name="funcName"></param>
        /// <returns></returns>
        static public string GetFunction(string body, bool call, string funcName = null)
        {
            return string.Format("function {0} () {{ {1} }}{2}", funcName, body, call ? "()" : null);
        }

        /// <summary>
        /// Get Factory:  function(){ return {param1:obj1, param2:2, param3:"" }; }
        /// </summary>
        /// <param name="jsObj">JS object.</param>
        /// <param name="constructorName">function name.</param>
        /// <returns></returns>
        static public string GetFactory(string jsObj, bool withArgs, string constructorName = null)
        {
            if ((string.IsNullOrWhiteSpace(jsObj) == false) == false)
            {
                throw new ArgumentNullException("jsObj");
            }

            string constructorInstruction = null;
            if (string.IsNullOrWhiteSpace(constructorName) == false)
            {
                constructorInstruction = string.Format("obj.constructor={0};", constructorName);
            }

            string argsInstruction = null;
            if (withArgs)
            {
                argsInstruction = "var args = Array.prototype.slice.call(arguments);";
            }

            return string.Format("function(){{ {0} var obj = {1};{2} return obj; }}", argsInstruction, jsObj, constructorInstruction);
        }

        /// <summary>
        /// (function(){ return {param1:obj1, param2:2, param3:"" }; })();
        /// </summary>
        /// <param name="instructions"></param>
        /// <returns></returns>
        static public string GetFactory_Executing(string instructions)
        {
            string value = string.Format("(function(){{ {0} }})();", instructions);
            return value;
        }

        /// <summary>
        /// $dp.namespace = $dp.namespace || function(){ return {param1:obj1, param2:2, param3:"" }; };
        /// </summary>
        /// <param name="t"></param>
        /// <param name="jsObj"></param>
        /// <param name="withArgs"></param>
        /// <returns></returns>
        static public string GetFactoryDeclaration(Type t, string jsObj, bool withArgs)
        {
            return GetObjectDeclaration(t, GetFactory(jsObj, withArgs, GetObjectFullName(t)));
        }

        /// <summary>
        /// full name of object.
        /// </summary>
        /// <param name="t"></param>
        /// <returns></returns>
        static public string GetObjectFullName(Type t)
        {
            string objFullname = string.Format("{0}.{1}", Config.prefix_ns, t.FullName.Replace("+", "."));
            return objFullname;
        }

        /// <summary>
        /// $dp.namespace = $dp.namespace ||  {param1:obj1, param2:2, param3:"" };
        /// </summary>
        /// <param name="t"></param>
        /// <param name="jsObj"></param>
        /// <returns></returns>
        static public string GetObjectDeclaration(Type t, string jsObj)
        {
            return GetObjectDeclaration(GetObjectFullName(t), jsObj);
        }

        /// <summary>
        /// $dp.namespace = $dp.namespace ||  {param1:obj1, param2:2, param3:"" };
        /// </summary>
        /// <param name="objectFullName"></param>
        /// <param name="jsObj"></param>
        /// <returns></returns>
        static public string GetObjectDeclaration(string objectFullName, string jsObj)
        {
            return string.Format("{0} = {0} || {1};", objectFullName, jsObj);
        }

    }
}
