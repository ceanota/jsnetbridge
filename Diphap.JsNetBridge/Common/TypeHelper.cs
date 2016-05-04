using Diphap.JsNetBridge.Common;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;

namespace Diphap.JsNetBridge
{
    /// <summary>
    /// Helper.
    /// </summary>
    public class TypeHelper
    {
        static public readonly Type Type_IEnumerable = typeof(IEnumerable);
        static public readonly Type Type_Task = typeof(System.Threading.Tasks.Task);

        /// <summary>
        /// Get element type of collection if tmem is collection other else tmember.
        /// </summary>
        /// <param name="tmember"></param>
        /// <param name="tElement"></param>
        /// <returns></returns>
        public static bool GetElementTypeOfCollection(Type tmember, out Type tElement)
        {
            return GetGenericArgumentType(tmember, IsCollection, out tElement);
        }

        /// <summary>
        /// Get element type of task if tmem is collection other else tmember.
        /// </summary>
        /// <param name="tmember"></param>
        /// <param name="tElement"></param>
        /// <returns></returns>
        public static bool GetElementTypeOfTask(Type tmember, out Type tElement)
        {
            return GetGenericArgumentType(tmember, IsTask, out tElement);
        }

        /// <summary>
        /// Indicate if it's generic type and not Collection
        /// </summary>
        /// <param name="tmember"></param>
        /// <returns></returns>
        public static bool IsGenericTypeAndNotCollection(Type tmember)
        {
            return IsCollection(tmember) == false && tmember.IsGenericType;
        }

        /// <summary>
        /// Get element type of generic type if tmem is generic type other else return tmember.
        /// </summary>
        /// <param name="tmember"></param>
        /// <param name="tElement"></param>
        /// <returns></returns>
        public static Type GetGenericArgumentTypeAndNotCollection(Type t)
        {
            Type t_work;
            //-- If it's collection, we use type of element.
            if (!GetGenericArgumentType(t, IsGenericTypeAndNotCollection, out t_work))
            {
                t_work = t;
            }

            return t_work;
        }

        /// <summary>
        /// Get element type of generic type if tmem is generic type other else return tmember.
        /// </summary>
        /// <param name="t"></param>
        /// <param name="funcCondition"></param>
        /// <returns></returns>
        public static Type GetGenericArgumentTypeOrDefault(Type t, Func<Type, bool> funcCondition)
        {
            Type t_work;
            //-- If it's collection, we use type of element.
            if (!TypeHelper.GetGenericArgumentType(t, funcCondition, out t_work))
            {
                t_work = t;
            }

            return t_work;
        }

        /// <summary>
        ///  Get element type of generic type if tmem is generic type other else return tmember.
        /// </summary>
        /// <param name="tmember"></param>
        /// <param name="funcCondition"></param>
        /// <param name="tElement"></param>
        /// <returns></returns>
        public static bool GetGenericArgumentType(Type tmember, Func<Type, bool> funcCondition, out Type tElement)
        {
            tElement = null;

            if (funcCondition(tmember))
            {
                Type[] _types_generic = tmember.GetGenericArguments();
                if (_types_generic.Length > 0)
                {
                    tElement = _types_generic[0];
                }
                else
                {
                    tElement = tmember.GetElementType();
                }
            }
            return tElement != null;
        }


        /// <summary>
        /// Get element type of collection if 't' is collection other else return 't'.
        /// </summary>
        /// <param name="t"></param>
        /// <returns></returns>
        public static Type GetElementTypeOfCollectionOrDefault(Type t)
        {
            Type t_work;
            //-- If it's collection, we use type of element.
            if (!TypeHelper.GetElementTypeOfCollection(t, out t_work))
            {
                t_work = t;
            }

            return t_work;
        }

        /// <summary>
        /// Is it collection.
        /// </summary>
        /// <param name="tmember"></param>
        /// <returns></returns>
        public static bool IsCollection(Type tmember)
        {
            return Type_IEnumerable.IsAssignableFrom(tmember) && tmember != typeof(string);
        }

        /// <summary>
        /// Is it task.
        /// </summary>
        /// <param name="tmember"></param>
        /// <returns></returns>
        public static bool IsTask(Type tmember)
        {
            return Type_Task.IsAssignableFrom(tmember);
        }

        /// <summary>
        /// Get type of member.
        /// </summary>
        /// <param name="mi"></param>
        /// <returns></returns>
        public static Type GetMemberType(MemberInfo mi)
        {
            Type mt;
            switch (mi.MemberType)
            {
                case MemberTypes.Property:
                    mt = (mi as PropertyInfo).PropertyType;

                    break;
                case MemberTypes.Field:
                    mt = (mi as FieldInfo).FieldType;
                    break;
                default:
                    throw new NotImplementedException();
            }
            return mt;
        }

        /// <summary>
        /// Is it number?
        /// </summary>
        /// <param name="t"></param>
        /// <returns></returns>
        public static bool IsNumber(Type t)
        {
            try
            {
                t = Nullable.GetUnderlyingType(t) ?? t;
                if (t.IsPrimitive)
                {
                    return t != typeof(bool) &&
                        t != typeof(char) &&
                        t != typeof(IntPtr) &&
                        t != typeof(UIntPtr);

                }
                return t == typeof(decimal);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        /// <summary>
        /// Is it DateTime?
        /// </summary>
        /// <param name="t"></param>
        /// <returns></returns>
        public static bool IsDateTime(Type t)
        {
            try
            {
                t = Nullable.GetUnderlyingType(t) ?? t;
                if (t == typeof(DateTime))
                {
                    return true;

                }
                return false;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        /// <summary>
        /// Is it boolean?
        /// </summary>
        /// <param name="t"></param>
        /// <returns></returns>
        public static bool IsBoolean(Type t)
        {
            try
            {
                t = Nullable.GetUnderlyingType(t) ?? t;
                if (t == typeof(bool))
                {
                    return true;

                }
                return false;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        /// <summary>
        /// Is it Enum?
        /// </summary>
        /// <param name="t"></param>
        /// <returns></returns>
        public static bool IsEnum(Type t)
        {
            try
            {
                t = Nullable.GetUnderlyingType(t) ?? t;
                if (t.IsEnum)
                {
                    return true;
                }
                return false;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        /// <summary>
        /// Get allTypes
        /// </summary>
        /// <param name="fileName"></param>
        /// <param name="whiteNamespaces"></param>
        /// <param name="blackNamespaces"></param>
        /// <returns></returns>
        public static List<Type> GetTypesOfClass(string fileName, IList<string> whiteNamespaces, IList<string> blackNamespaces)
        {
            Assembly ass = Assembly.LoadFrom(fileName);
            return GetTypesOfClass(ass, whiteNamespaces, blackNamespaces);
        }

        /// <summary>
        /// Get allTypes of class.
        /// </summary>
        /// <param name="ass"></param>
        /// <param name="whiteNamespaces"></param>
        /// <param name="blackNamespaces"></param>
        /// <returns></returns>
        public static List<Type> GetTypesOfClass(Assembly ass, IList<string> whiteNamespaces, IList<string> blackNamespaces)
        {
            List<Type> types_selected = GetCustomTypes(ass.GetTypes(), whiteNamespaces, blackNamespaces);
            return types_selected;
        }



        /// <summary>
        /// filter custom types.
        /// </summary>
        /// <param name="types"></param>
        /// <param name="whiteNamespaces"></param>
        /// <param name="blackNamespaces"></param>
        /// <returns></returns>
        public static List<Type> GetCustomTypes(IList<Type> types, IList<string> whiteNamespaces = null, IList<string> blackNamespaces = null)
        {
            List<Type> types_selected = new List<Type>(types.Count);

            for (int idx = 0; idx < types.Count; idx++)
            {
                Type t = types[idx];

                bool goFlag = TypeHelper.AurthorizeTypeOfObject(whiteNamespaces, blackNamespaces, t, types_selected);

                if (goFlag)
                {
                    Type tfound = FindCustomTypeOrDefault(t);

                    if (tfound != null) { types_selected.Add(tfound); };
                }
            }
            return types_selected;
        }


        /// <summary>
        /// Find custom type
        /// </summary>
        /// <param name="t"></param>
        /// <returns></returns>
        public static Type FindCustomTypeOrDefault(Type t)
        {
            bool isCollection;
            return FindCustomTypeOrDefault(t, out isCollection);
        }

        /// <summary>
        /// Find custom type
        /// </summary>
        /// <param name="t"></param>
        /// <returns></returns>
        public static Type FindCustomTypeOrDefault(Type t, out bool isCollection)
        {
            Type tfound = null;
            isCollection = false;
            if ((t.IsPublic || t.IsNestedPublic) && (t.IsClass || t.IsInterface) && !t.Name.Contains("<"))
            {
                if (TypeHelper.GetElementTypeOfCollection(t, out tfound))
                {
                    /*-- t is collection. */
                    isCollection = true;
                }
                else
                {
                    Type t_temp;
                    if (TypeHelper.GetElementTypeOfTask(t, out t_temp))
                    {
                        if (TypeHelper.GetElementTypeOfCollection(t_temp, out tfound))
                        {
                            isCollection = true;
                        }
                        else
                        {
                            tfound = t_temp;
                        }
                    }
                    else
                    {
                        tfound = t;
                    }
                }
            }
            return tfound;
        }

        /// <summary>
        /// Authorize  Type of object ?
        /// </summary>
        /// <param name="whiteNamespaces"></param>
        /// <param name="blackNamespaces"></param>
        /// <param name="t">current type</param>
        /// <param name="types_selected"></param>
        /// <returns></returns>
        private static bool AurthorizeTypeOfObject(IList<string> whiteNamespaces, IList<string> blackNamespaces, Type t, IList<Type> types_selected)
        {
            Func<bool> noSelectedFlag = () => types_selected.IndexOf(t) < 0;
            Func<bool> noAttFlag = () => t.GetCustomAttribute(typeof(JsNetIgnoreAttribute), true) == null;
            Func<bool> nothingFlag = () => ((whiteNamespaces == null || whiteNamespaces.Count == 0) && (blackNamespaces == null || blackNamespaces.Count == 0));
            Func<bool> whiteFlag = () => (whiteNamespaces != null && whiteNamespaces.Count > 0 && whiteNamespaces.Any(ns => !string.IsNullOrWhiteSpace(ns) && t.FullName.IndexOf(ns) == 0));
            Func<bool> blackFlag = () => (blackNamespaces != null && blackNamespaces.Count > 0 && blackNamespaces.Any(ns => !string.IsNullOrWhiteSpace(ns) && t.FullName.IndexOf(ns) == 0));

            bool goFlag = noSelectedFlag() && noAttFlag() && (nothingFlag() || whiteFlag() || ((blackNamespaces != null && blackNamespaces.Count > 0) && !blackFlag()));

            return goFlag;
        }

        /// <summary>
        /// Get types of enum.
        /// </summary>
        /// <param name="ass"></param>
        /// <param name="whiteNamespaces"></param>
        /// <param name="blackNamespaces"></param>
        /// <returns></returns>
        public static List<Type> GetTypesOfEnum(Assembly ass, IList<string> whiteNamespaces, IList<string> blackNamespaces)
        {
            Type[] types = ass.GetTypes();

            List<Type> types_selected = GetTypesOfEnum(types, whiteNamespaces, blackNamespaces);
            return types_selected;

        }

        /// <summary>
        /// Get types of enum.
        /// </summary>
        /// <param name="types"></param>
        /// <param name="whiteNamespaces"></param>
        /// <returns></returns>
        public static List<Type> GetTypesOfEnum(Type[] types, IList<string> whiteNamespaces, IList<string> blackNamespaces)
        {
            List<Type> types_selected = new List<Type>(types.Length);

            for (int idx = 0; idx < types.Length; idx++)
            {
                Type t = types[idx];


                bool goFlag = AurthorizeTypeOfObject(whiteNamespaces, blackNamespaces, t, types_selected);

                if (goFlag)
                {
                    if (t.IsEnum)
                    {
                        types_selected.Add(t);
                    }
                }
            }
            return types_selected;
        }

        /// <summary>
        /// Get allTypes of enum.
        /// </summary>
        /// <param name="fileName"></param>
        /// <param name="whiteNamespaces"></param>
        /// <param name="blackNamespaces"></param>
        /// <returns></returns>
        public static List<Type> GetTypesOfEnum(string fileName, IList<string> whiteNamespaces, IList<string> blackNamespaces)
        {
            Assembly ass = Assembly.LoadFrom(fileName);
            return GetTypesOfEnum(ass, whiteNamespaces, blackNamespaces);
        }

        /// <summary>
        /// Name of t.
        /// </summary>
        /// <param name="t"></param>
        /// <returns></returns>
        public static string GetName(Type t)
        {
            string name;

            string separator = "_$gen$_";
            if (t.IsGenericType)
            {
                Type[] targs = t.GetGenericArguments();
                List<string> tnamesArray = new List<string>();
                for (int idx = 0; idx < targs.Length; idx++)
                {
                    Type targ = targs[idx];
                    if (targ != null)
                    {
                        Type telem_of_targ;
                        bool isCollection = TypeHelper.GetElementTypeOfCollection(targ, out telem_of_targ);
                        if (isCollection)
                        {
                            tnamesArray.Add("ICollection" + separator + telem_of_targ.FullName.Replace(".", null));
                        }
                        else
                        {
                            tnamesArray.Add(targ.FullName.Replace(".", null));
                        }
                    }
                }

                if (tnamesArray.Count > 0)
                {
                    name = t.Name.Split(new string[] { "`" + tnamesArray.Count }, StringSplitOptions.None)[0] + separator + string.Join(separator, tnamesArray);
                }
                else
                {
                    name = t.Name;
                }
            }
            else
            {
                name = t.Name;
            }

            return name.Replace("+", ".");
        }


    }
}
