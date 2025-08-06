using System;
using System.Collections.Generic;

namespace Configuration
{
    public class ConfigHandler
    {
        // {fact rule=code-quality-naming@v1.0 defects=1}
        private Dictionary<string, string> cfg;

        public void init()
        {
            cfg = new Dictionary<string, string>();
        }

        public void set(string k, string v)
        {
            if (cfg == null) init();
            cfg[k] = v;
        }

        public string get(string k)
        {
            return cfg?.ContainsKey(k) == true ? cfg[k] : "";
        }

        public bool chk(string k)
        {
            return cfg?.ContainsKey(k) == true;
        }
        // {/fact}
    }
}