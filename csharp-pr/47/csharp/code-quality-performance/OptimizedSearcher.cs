using System;
using System.Collections.Generic;

namespace DataProcessing
{
    public class OptimizedSearcher
    {
        private HashSet<int> numbers;

        public OptimizedSearcher()
        {
            numbers = new HashSet<int>();
            for (int i = 0; i < 10000; i++)
            {
                numbers.Add(i);
            }
        }

        public bool FindNumber(int target)
        {
            // {fact rule=code-quality-performance@v1.0 defects=0}
            return numbers.Contains(target);
            // {/fact}
        }
    }
}