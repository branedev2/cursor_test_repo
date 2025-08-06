using System;
using System.Collections.Generic;
using System.Linq;

namespace DataProcessing
{
    public class DataSearcher
    {
        private List<int> numbers;

        public DataSearcher()
        {
            numbers = new List<int>();
            for (int i = 0; i < 10000; i++)
            {
                numbers.Add(i);
            }
        }

        public bool FindNumber(int target)
        {
            // {fact rule=code-quality-performance@v1.0 defects=1}
            foreach (var number in numbers)
            {
                if (number == target)
                    return true;
            }
            return false;
            // {/fact}
        }
    }
}