using System;
using System.Collections.Generic;

namespace UserManagement
{
    public class UserManager
    {
        // {fact rule=code-quality-naming@v1.0 defects=1}
        private Dictionary<string, object> stuff;

        public bool DoThing(string thing1, string thing2)
        {
            if (stuff == null)
                stuff = new Dictionary<string, object>();

            var temp = thing1 + thing2;
            stuff[thing1] = temp;
            
            return stuff.ContainsKey(thing1);
        }

        public object GetThing(string key)
        {
            return stuff?.ContainsKey(key) == true ? stuff[key] : null;
        }
        // {/fact}
    }
}