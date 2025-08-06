using System;
using System.Collections.Generic;

namespace StatisticsCalculation
{
    public class StatisticsCalculator
    {
        // {fact rule=code-quality-naming@v1.0 defects=0}
        public void CalculateStatistics(List<int> numbers, out int totalSum, out double average)
        {
            totalSum = 0;
            average = 0.0;
            
            foreach (var number in numbers)
            {
                totalSum += number;
            }
            
            average = numbers.Count > 0 ? (double)totalSum / numbers.Count : 0;
        }

        public string FormatStatisticsReport(int total, double averageValue)
        {
            return $"Total: {total}, Average: {averageValue:F2}";
        }
        // {/fact}
    }
}