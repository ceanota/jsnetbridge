using System;
using System.Collections.Generic;
using System.IO;
using System.Reflection;

namespace Diphap.JsNetBridge.Data.Enum
{

    public class EnumColInfo : DataInfoCol
    {
        protected override DataInfo Factory(Type tobj)
        {
            return new EnumInfo(tobj, this.JsObjCol, this.flagGetFactory);
        }

        #region "Constructor"

        public EnumColInfo(IList<Type> Types_Net)
            : base(Types_Net)
        {

        }

        public EnumColInfo(Assembly ass, IList<string> whiteNamespaces, IList<string> blackNamespaces)
            : base(TypeHelper.GetTypesOfEnum(ass, whiteNamespaces, blackNamespaces))
        {

        }

        public EnumColInfo(Assembly ass)
            : base(TypeHelper.GetTypesOfEnum(ass, new string[] { }, new string[] { }))
        {

        }

        public EnumColInfo(string appAspNetPath, IList<string> whiteNamespaces, IList<string> blackNamespaces)
            : base(TypeHelper.GetTypesOfEnum(appAspNetPath, whiteNamespaces, blackNamespaces))
        {

        }

        public EnumColInfo(string appAspNetPath)
            : base(TypeHelper.GetTypesOfEnum(appAspNetPath, new string[] { }, new string[] { }))
        {

        }

        #endregion

        public void WriteAllText(string jsFilePath)
        {
            File.WriteAllText(jsFilePath, this.ToJS());
        }

        public void AppendAllText(string jsFilePath)
        {
            File.AppendAllText(jsFilePath, this.ToJS());
        }

    }
}
