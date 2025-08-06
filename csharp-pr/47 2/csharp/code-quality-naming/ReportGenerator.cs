using System;
using System.Collections.Generic;

namespace ReportGeneration
{
    public class ReportGenerator
    {
        // {fact rule=code-quality-naming@v1.0 defects=1}
        public void m1(List<int> l, out int r1, out double r2)
        {
            r1 = 0;
            r2 = 0.0;
            
            foreach (var x in l)
            {
                r1 += x;
            }
            
            r2 = l.Count > 0 ? (double)r1 / l.Count : 0;
        }

        public string m2(int v1, double v2)
        {
            return $"T: {v1}, A: {v2:F2}";
        }
        // {/fact}
    }
}