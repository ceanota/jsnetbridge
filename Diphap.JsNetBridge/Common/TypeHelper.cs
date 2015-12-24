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

        /// <summary>
        /// Get element type of collection if tmem is collection other else return null.
        /// </summary>
        /// <param name="tmember"></param>
        /// <param name="tElement"></param>
        /// <returns></returns>
        public static bool GetElementTypeOfCollection(Type tmember, out Type tElement)
        {
            tElement = null;

            if (IsCollection(tmember))
            {
                //-- member is collection
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
        /// Get Types
        /// </summary>
        /// <param name="fileName"></param>
        /// <param name="namespaces"></param>
        /// <returns></returns>
        public static List<Type> GetTypesOfClass(string fileName, IList<string> namespaces)
        {
            Assembly ass = Assembly.LoadFrom(fileName);
            return GetTypesOfClass(ass, namespaces);
        }

        /// <summary>
        /// Get Types of class.
        /// </summary>
        /// <param name="ass"></param>
        /// <param name="namespaces"></param>
        /// <returns></returns>
        public static List<Type> GetTypesOfClass(Assembly ass, IList<string> namespaces)
        {
            List<Type> types_selected = GetTypesOfClass(ass.GetTypes(), namespaces);
            return types_selected;
        }

        /// <summary>
        /// filter types of class.
        /// </summary>
        /// <param name="types"></param>
        /// <param name="namespaces"></param>
        /// <returns></returns>
        public static List<Type> GetTypesOfClass(Type[] types, IList<string> namespaces = null)
        {
            List<Type> types_selected = new List<Type>(types.Length);

            for (int idx = 0; idx < types.Length; idx++)
            {
                Type t = types[idx];

                if (namespaces == null || namespaces.Count == 0 ||
                    (namespaces.Count > 0 && namespaces.Any(ns => !string.IsNullOrWhiteSpace(ns) && t.FullName.IndexOf(ns) == 0)))
                {
                    if (t.GetCustomAttribute(typeof(JsNetIgnoreAttribute), true) == null)
                    {
                        if (types_selected.IndexOf(t) < 0)
                        {
                            if (t.IsPublic && (t.IsClass || t.IsInterface) && t.IsNested == false && !t.Name.Contains("<") && t.IsGenericType == false)
                            {
                                t = TypeHelper.GetElementTypeOfCollectionOrDefault(t);
                                types_selected.Add(t);
                            }
                        }
                    }
                    else
                    {
                        //-- nothing for debug.
                    }
                }
            }
            return types_selected;
        }

        /// <summary>
        /// Get types of enum.
        /// </summary>
        /// <param name="ass"></param>
        /// <param name="namespaces"></param>
        /// <returns></returns>
        public static List<Type> GetTypesOfEnum(Assembly ass, IList<string> namespaces)
        {
            Type[] types = ass.GetTypes();

            List<Type> types_selected = GetTypesOfEnum(types, namespaces);
            return types_selected;

        }

        /// <summary>
        /// Get types of enum.
        /// </summary>
        /// <param name="types"></param>
        /// <param name="namespaces"></param>
        /// <returns></returns>
        public static List<Type> GetTypesOfEnum(Type[] types, IList<string> namespaces = null)
        {
            List<Type> types_selected = new List<Type>(types.Length);

            for (int idx = 0; idx < types.Length; idx++)
            {
                Type t = types[idx];

                if (namespaces == null || namespaces.Count == 0 ||
                    (namespaces.Count > 0 && namespaces.Any(ns => !string.IsNullOrWhiteSpace(ns) && t.FullName.IndexOf(ns) == 0)))
                {
                    if (t.GetCustomAttribute(typeof(JsNetIgnoreAttribute), true) == null && types_selected.IndexOf(t) < 0)
                    {
                        if (t.IsEnum && t.IsNested == false)
                        {
                            types_selected.Add(t);
                        }
                    }
                }
            }
            return types_selected;
        }

        /// <summary>
        /// Get Types of enum.
        /// </summary>
        /// <param name="fileName"></param>
        /// <param name="namespaces"></param>
        /// <returns></returns>
        public static List<Type> GetTypesOfEnum(string fileName, IList<string> namespaces)
        {
            Assembly ass = Assembly.LoadFrom(fileName);
            return GetTypesOfEnum(ass, namespaces);
        }


    }
}
