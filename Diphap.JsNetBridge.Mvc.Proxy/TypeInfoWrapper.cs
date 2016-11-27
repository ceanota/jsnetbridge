using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Diphap.JsNetBridge.Mvc.Proxy
{
    /// <summary>
    /// Wrapper
    /// </summary>
    internal class TypeInfoWrapper //: System.Runtime.InteropServices._Type
    {

        private readonly Type _t;

        /// <summary>
        /// Wrapper
        /// </summary>
        /// <param name="t">optionnel</param>
        public TypeInfoWrapper(Type t)
        {
            this._t = t;
        }

        /// <summary>
        /// Determines whether an instance of a specified type can be assigned to the current
        ///     type instance.
        /// </summary>
        /// <param name="c">The type to compare with the current type.</param>
        /// <returns>
        /// true if any of the following conditions is true: c and the current instance represent
        ///     the same type. c is derived either directly or indirectly from the current instance.
        ///     The current instance is an interface that c implements. c is a generic type parameter,
        ///     and the current instance represents one of the constraints of c. c represents
        ///     a value type, and the current instance represents Nullable (Nullable(Of c)
        ///     in Visual Basic).false if none of these conditions are true, or if c is null.
        /// </returns>
        public bool IsAssignableFrom(Type c)
        {
            return this._t == null ? false : this._t.IsAssignableFrom(c);
        }
    }
}

