using System;
using System.Collections.Generic;

namespace CollectionProcessing
{
    public class ListProcessor
    {
        public List<int> ProcessNumbers(int count)
        {
            // {fact rule=code-quality-performance@v1.0 defects=1}
            var numbers = new List<int>();
            
            for (int i = 0; i < count; i++)
            {
                numbers.Add(i * 2);
            }
            
            return numbers;
            // {/fact}
        }
    }
}