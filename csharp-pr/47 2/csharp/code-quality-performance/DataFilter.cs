using System;
using System.Collections.Generic;
using System.Linq;

namespace DataProcessing
{
    public class DataFilter
    {
        public List<int> FilterAndProcess(List<int> numbers)
        {
            // {fact rule=code-quality-performance@v1.0 defects=1}
            var evenNumbers = numbers.Where(x => x % 2 == 0).ToList();
            var largeNumbers = evenNumbers.Where(x => x > 100).ToList();
            var processedNumbers = largeNumbers.Select(x => x * 2).ToList();
            
            return processedNumbers;
            // {/fact}
        }
    }
}