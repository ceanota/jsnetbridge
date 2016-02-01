using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Test //UnitTest_JsNetBridge.Users.Ceanota
{
    public class CA
    {
        public string propA = "";
        //public CB B = new CB();
        public CC C = new CC();

        public CE E = new CE();
    }

    public class CB
    {
        public string propB = "";
        public CA A = new CA();
    }

    public class CC
    {
        public string propC = "";
        public CB B = new CB();
    }

    public class CD
    {
        public string propD = "";
        public CE E = new CE();
    }

    public class CE
    {
        public string propE = "";
        public CF F = new CF();
    }

    public class CF
    {
        public string propF = "";
        public CC C = new CC();
    }

}
