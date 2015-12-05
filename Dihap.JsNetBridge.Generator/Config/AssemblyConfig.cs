using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Diphap.JsNetBridge.Generator.Config
{
    public class AssemblyConfig
    {
        public string file;
        public IList<string> ns_filters;
        public void validate(string folder)
        {
            this.file = folder + "/" + this.file;
            if (File.Exists(this.file) == false)
            {
                throw new FileNotFoundException(this.file);
            }
        }
    }
}
