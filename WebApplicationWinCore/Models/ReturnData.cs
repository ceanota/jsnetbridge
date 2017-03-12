using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplicationWinCore.Models
{
    public class ReturnData
    {
        public object InputStream { get; set; }
        public string Url { get; set; }
        public bool Success { get; set; }
        public string Method { get; set; }
        public object BusinessData { get; set; }
    }

    public class ReturnData<T> : ReturnData where T : class
    {
        public T TypedBusinessData { get; set; }
    }
}