using Diphap.JsNetBridge.Common;
using Diphap.JsNetBridge.Common.JS;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Diphap.JsNetBridge
{
    abstract public class ScriptHelper
    {
        static ScriptHelper_JS _ScriptHelper_JS;
        static ScriptHelper_JS ScriptHelper_JS
        { get { if (_ScriptHelper_JS == null) { _ScriptHelper_JS = new ScriptHelper_JS(); } return _ScriptHelper_JS; } }

        static ScriptHelper_TS _ScriptHelper_TS;
        static ScriptHelper_TS ScriptHelper_TS
        { get { if (_ScriptHelper_TS == null) { _ScriptHelper_TS = new ScriptHelper_TS(); } return _ScriptHelper_TS; } }

        /// <summary>
        /// Get instance.
        /// </summary>
        /// <returns></returns>
        static public ScriptHelper GetInstance(EnumScript choice)
        {
            switch (choice)
            {
                case EnumScript.JS:
                    return ScriptHelper.ScriptHelper_JS;
                case EnumScript.TS:
                    return ScriptHelper.ScriptHelper_TS;
                default:
                    throw new NotImplementedException();
            }

        }

        /// <summary>
        /// Get name of object factory.
        /// </summary>
        /// <param name="telem_work"></param>
        /// <param name="isCollection"></param>
        /// <param name="functionReference"></param>
        /// <param name="objectFullName"></param>
        /// <returns></returns>
        public abstract string GetObjectFactoryName(Type telem_work, bool isCollection, bool functionReference, string objectFullName);

        /// <summary>
        /// Create namespace.
        /// </summary>
        /// <param name="js_obj_fullName"></param>
        /// <returns></returns>
        abstract public List<string> CreateNamespace(string js_obj_fullName);

        /// <summary>
        /// Primitive Type of member or Collection of primitive types .
        /// </summary>
        /// <returns></returns>
        public abstract ScriptTypeInfo GetScriptTypeInfo { get; }

        /// <summary>
        /// Primitive Type of member or Collection of primitive types .
        /// </summary>
        /// <param name="tmember"></param>
        /// <param name="jsValue"></param>
        /// <returns></returns>
        public bool GetPrimitiveEmptyValue(Type tmember, out string jsValue)
        {
            jsValue = "";

            if (tmember == typeof(string))
            {
                jsValue = GetScriptTypeInfo.TString;
            }
            else if (TypeHelper.IsNumber(tmember) || TypeHelper.IsEnum(tmember))
            {
                jsValue = GetScriptTypeInfo.TNumber;
            }
            else if (TypeHelper.IsDateTime(tmember))
            {
                jsValue = GetScriptTypeInfo.TDatetime;
            }
            else if (TypeHelper.IsBoolean(tmember))
            {
                jsValue = GetScriptTypeInfo.TBoolean;
            }
            else if (TypeHelper.IsCollection(tmember))
            {
                //-- member is collection
                Type telement;
                if (TypeHelper.GetElementTypeOfCollection(tmember, out telement))
                {
                    if (this.GetPrimitiveEmptyValue(telement, out jsValue) == false)
                    {
                        jsValue = "";
                    }
                    else
                    {
                        jsValue = GetScriptTypeInfo.TArrayFactoryFunctionDefinitionCall(jsValue);
                    }
                }
                else
                {
                    jsValue = GetScriptTypeInfo.TArray;
                }
            }

            return string.IsNullOrWhiteSpace(jsValue) == false;
        }

        /// <summary>
        /// Get Function => FOR!!! => var func = function funcName () { try { /*instructions*/; } catch (ex) { throw $dp.$shared.$innerExceptionFactory('Exception Message', ex); } }()
        /// </summary>
        /// <param name="body"></param>
        /// <param name="call"></param>
        /// <param name="funcName"></param>
        /// <param name="exceptionMessage"></param>
        /// <returns></returns>
        abstract public string GetFunction(string body, bool call, string funcName = null, string exceptionMessage = null);

        /// <summary>
        /// Get Module => ex: (function funcName () { try { /*instructions*/; } catch (ex) { throw $dp.$shared.$innerExceptionFactory('Exception Message', ex); } }())
        /// </summary>
        /// <param name="body"></param>
        /// <param name="call"></param>
        /// <param name="funcName"></param>
        /// <param name="exceptionMessage"></param>
        /// <returns></returns>
        abstract public string GetFunctionModule(string body, bool call, string funcName = null, string exceptionMessage = null);

        /// <summary>
        /// Get Factory:  function(){ return {param1:obj1, param2:2, param3:"" }; }
        /// </summary>
        /// <param name="jsObj">JS object.</param>
        /// <param name="withArgs"></param>
        /// <param name="constructorName">function name.</param>
        /// <param name="stampFunc"></param>
        /// <returns></returns>
        abstract public string GetFactory(string jsObj, bool withArgs, string constructorName = null, bool stampFunc = false);

        /// <summary>
        /// (function(){ return {param1:obj1, param2:2, param3:"" }; })();
        /// </summary>
        /// <param name="instructions"></param>
        /// <returns></returns>
        abstract public string GetFactory_Executing(string instructions);

        /// <summary>
        /// $dp.namespace = $dp.namespace || function(){ return {param1:obj1, param2:2, param3:"" }; };
        /// </summary>
        /// <param name="t"></param>
        /// <param name="jsObj"></param>
        /// <param name="withArgs"></param>
        /// <param name="objFullName"></param>
        /// <returns></returns>
        abstract public string GetFactoryDeclaration(Type t, string jsObj, bool withArgs, string objFullName);

        /// <summary>
        /// namespace.
        /// </summary>
        /// <param name="t"></param>
        /// <returns></returns>
        abstract public string GetNamespace(Type t);

        /// <summary>
        /// $dp.namespace = $dp.namespace ||  {param1:obj1, param2:2, param3:"" };
        /// </summary>
        /// <param name="objectFullNameOrName"></param>
        /// <param name="jsObj"></param>
        /// <returns></returns>
        abstract public string GetObjectDeclaration(string objectFullNameOrName, string jsObj);

    }
}
