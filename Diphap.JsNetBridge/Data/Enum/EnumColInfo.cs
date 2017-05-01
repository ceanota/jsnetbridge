using Diphap.JsNetBridge.Common;
using System;
using System.Collections.Generic;
using System.IO;
using System.Reflection;

namespace Diphap.JsNetBridge.Data.Enum
{

    public class EnumColInfo : DataInfoCol
    {
        protected override DataInfo Factory(EnumScript choice, Type tobj, ConfigJS.JSNamespace JSNamespac)
        {
            switch (choice)
            {
                case EnumScript.JS:
                    return new EnumInfo(tobj, this.JsObjCol, JSNamespac, this.flagGetFactory);
                case EnumScript.TS:
                    return new EnumInfo_TS(tobj, this.JsObjCol, JSNamespac, this.flagGetFactory);
                default:
                    throw new NotImplementedException();
            }


        }

        #region "Constructor"

        public EnumColInfo(IList<Type> Types_Net, ConfigJS.JSNamespace JSNamespace)
            : base(Types_Net, JSNamespace)
        {
        }

        public EnumColInfo(Assembly ass, IList<string> whiteNamespaces, IList<string> blackNamespaces, ConfigJS.JSNamespace JSNamespace)
            : base(TypeHelper.GetTypesOfEnum(ass, whiteNamespaces, blackNamespaces), JSNamespace)
        {

        }

        public EnumColInfo(Assembly ass, ConfigJS.JSNamespace JSNamespace)
            : base(TypeHelper.GetTypesOfEnum(ass, new string[] { }, new string[] { }), JSNamespace)
        {
        }

        public EnumColInfo(Assembly ass)
        : this(ass, new ConfigJS.JSNamespace())
        {

        }

        public EnumColInfo(string appAspNetPath, IList<string> whiteNamespaces, IList<string> blackNamespaces, ConfigJS.JSNamespace JSNamespace)
            : base(TypeHelper.GetTypesOfEnum(appAspNetPath, whiteNamespaces, blackNamespaces), JSNamespace)
        {
        }

        public EnumColInfo(string appAspNetPath, ConfigJS.JSNamespace JSNamespace)
            : base(TypeHelper.GetTypesOfEnum(appAspNetPath, new string[] { }, new string[] { }), JSNamespace)
        {

        }

        #endregion

        public override string ToJSCore(string regionName = "Enum")
        {
            return base.ToJSCore(regionName);
        }

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
