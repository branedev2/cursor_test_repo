using System;
using System.Collections.Generic;

namespace CollectionProcessing
{
    public class OptimizedListProcessor
    {
        public List<int> ProcessNumbers(int count)
        {
            // {fact rule=code-quality-performance@v1.0 defects=0}
            var numbers = new List<int>(count); // Pre-allocate capacity
            
            for (int i = 0; i < count; i++)
            {
                numbers.Add(i * 2);
            }
            
            return numbers;
            // {/fact}
        }
    }
}