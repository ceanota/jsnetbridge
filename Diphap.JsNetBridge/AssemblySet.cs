using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Diphap.JsNetBridge
{
    public class AssemblySet
    {
        public List<Type> Types_Model = new List<Type>();
        public List<Type> Types_Enum = new List<Type>();

        public AssemblySet(string assemblyPath, IList<string> filters)
        {
            this.Types_Model = TypeHelper.GetTypesOfClass(assemblyPath, filters);
            this.Types_Enum = TypeHelper.GetTypesOfEnum(assemblyPath, filters);

        }

        public AssemblySet(string assemblyPath)
        {
            this.Types_Model = TypeHelper.GetTypesOfClass(assemblyPath, new string[] { });
            this.Types_Enum = TypeHelper.GetTypesOfEnum(assemblyPath, new string[] { });
        }
    }

}
