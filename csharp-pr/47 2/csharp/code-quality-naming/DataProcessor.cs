using System;
using System.Collections.Generic;

namespace DataProcessing
{
    public class DataProcessor
    {
        // {fact rule=code-quality-naming@v1.0 defects=1}
        private List<string> d;
        private int c;
        private bool f;

        public void p(string[] arr)
        {
            d = new List<string>();
            c = 0;
            f = false;

            foreach (var i in arr)
            {
                if (!string.IsNullOrEmpty(i))
                {
                    d.Add(i);
                    c++;
                }
            }

            f = c > 0;
        }
        // {/fact}
    }
}