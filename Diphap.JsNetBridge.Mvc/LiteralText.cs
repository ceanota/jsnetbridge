using Diphap.JsNetBridge.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Diphap.JsNetBridge.Mvc
{
    /// <summary>
    /// literal text.
    /// </summary>
    static class LiteralText
    {
        /// <summary>
        /// About generated file js.
        /// </summary>
        /// <param name="assInfo"></param>
        /// <returns></returns>
        static public string FileInfo(AssemblyInfo assInfo)
        {
            #region "Literal"
            string descriptionFormat =
@"
//#region ""COPYRIGHT""
/***************************************************************************************************************
            {0} v{1}
            {2}
            {3}

            http://jsnet.codeplex.com/
            The MIT License (MIT)
            
            Creator:    diphap@gmail.com
                        
*/
//#endregion
";
            #endregion

            string description = string.Format(descriptionFormat,
                assInfo.ProductTitle,
                assInfo.Version,
                assInfo.Description,
                assInfo.Copyright);

            return description;
        }

        /// <summary>
        /// It's not necessary.
        /// </summary>
        /// <returns></returns>
        static public string GetStarted()
        {
            return  "" ;
        }
    }
}
