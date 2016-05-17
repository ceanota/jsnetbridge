﻿using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace Diphap.JsNetBridge.Common
{
    ///// <summary>
    /////  Occurs when the resolution of an assembly fails.
    ///// </summary>
    //public class AssemblyResolver
    //{
    //    private readonly Dictionary<string, Assembly> _Redirects = new Dictionary<string, Assembly>();

    //    private readonly string _appFolderPath;
    //    private AssemblyResolver(string appFolderPath)
    //    {
    //        _appFolderPath = appFolderPath;
    //    }

    //    /// <summary>
    //    /// Occurs when the resolution of an assembly fails.
    //    /// </summary>
    //    /// <param name="sender"></param>
    //    /// <param name="argss"></param>
    //    /// <returns></returns>
    //    Assembly AssemblyResolveEventHandler(object sender, ResolveEventArgs argss)
    //    {
    //        if (_Redirects.ContainsKey(argss.Name) == false)
    //        {
    //            string fullName = argss.Name.Split(',')[0].Trim() + ".dll";
    //            var path = Path.Combine(_appFolderPath, fullName);
    //            if (File.Exists(path))
    //            {
    //                Assembly ass = Assembly.ReflectionOnlyLoadFrom(path);
    //                _Redirects.Add(argss.Name, ass);

    //                Console.WriteLine(string.Format("AssemblyResolve => Load {0} => return {1}", argss.Name, ass));

    //                return ass;
    //            }
    //            else
    //            {
    //                Console.WriteLine(string.Format("AssemblyResolve => Fails {0} => return {1}", argss.Name, null));
    //                var a = Assembly.ReflectionOnlyLoad(argss.Name);
    //                if (a == null) throw new TypeLoadException("Could not load assembly " + argss.Name);
    //                return a;
    //            }

    //        }
    //        else
    //        {
    //            Console.WriteLine(string.Format("AssemblyResolve => Same {0} => return {1}", argss.Name, _Redirects[argss.Name]));
    //            return _Redirects[argss.Name];
    //        }
    //    }

    //    /// <summary>
    //    /// Occurs when the resolution of an assembly fails.
    //    /// </summary>
    //    /// <param name="appFolderPath"></param>
    //    /// <returns></returns>
    //    static public ResolveEventHandler GetHandler(string appFolderPath)
    //    {
    //        AssemblyResolver r = new AssemblyResolver(appFolderPath);
    //        return new ResolveEventHandler(r.AssemblyResolveEventHandler);
    //    }

    //}
}
