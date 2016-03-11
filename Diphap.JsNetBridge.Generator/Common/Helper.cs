using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace Diphap.JsNetBridge.Generator.Common
{
    class Helper
    {
        public static string GetRelativePath(string filespec, string folder)
        {
            Uri pathUri = new Uri(filespec);
            // Folders must end in a slash
            if (!folder.EndsWith(Path.DirectorySeparatorChar.ToString()))
            {
                folder += Path.DirectorySeparatorChar;
            }
            Uri folderUri = new Uri(folder);
            return Uri.UnescapeDataString(folderUri.MakeRelativeUri(pathUri).ToString().Replace('/', Path.DirectorySeparatorChar));
        }

        public static string AssemblyDirectory
        {
            get
            {
                string codeBase = Assembly.GetExecutingAssembly().CodeBase;
                UriBuilder uri = new UriBuilder(codeBase);
                string path = Uri.UnescapeDataString(uri.Path);
                return Path.GetDirectoryName(path);
            }
        }

        public static void CopyDll(string srcFolderPath, string destFolderPath)
        {

            DirectoryInfo di = new DirectoryInfo(srcFolderPath);

            FileInfo[] files = di.GetFiles("*.dll");

            foreach (var f in files)
            {
                string destF = Path.Combine(destFolderPath, f.Name);
                try
                {
                    FileVersionInfo vi_f = FileVersionInfo.GetVersionInfo(f.FullName);
                    if (File.Exists(destF) == false ||
                        File.Exists(destF) && (new Version(vi_f.FileVersion) > (new Version(FileVersionInfo.GetVersionInfo(destF).FileVersion))))
                    {
                        f.CopyTo(destF, true);
                    }
                }
                catch (IOException ex)
                {
                    //-- do nothing.
                }
            }


        }

    }
}
