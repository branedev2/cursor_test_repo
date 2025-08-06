using System;
using System.Collections.Generic;
using System.Linq;

namespace DataProcessing
{
    public class OptimizedDataFilter
    {
        public List<int> FilterAndProcess(List<int> numbers)
        {
            // {fact rule=code-quality-performance@v1.0 defects=0}
            return numbers
                .Where(x => x % 2 == 0)
                .Where(x => x > 100)
                .Select(x => x * 2)
                .ToList();
            // {/fact}
        }
    }
}