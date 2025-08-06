using System;
using System.Collections.Generic;

namespace StringProcessing
{
    public class StringProcessor
    {
        // {fact rule=code-quality-naming@v1.0 defects=0}
        private List<string> processedData;
        private int validItemCount;
        private bool hasValidItems;

        public void ProcessStringArray(string[] inputArray)
        {
            processedData = new List<string>();
            validItemCount = 0;
            hasValidItems = false;

            foreach (var inputItem in inputArray)
            {
                if (!string.IsNullOrEmpty(inputItem))
                {
                    processedData.Add(inputItem);
                    validItemCount++;
                }
            }

            hasValidItems = validItemCount > 0;
        }
        // {/fact}
    }
}