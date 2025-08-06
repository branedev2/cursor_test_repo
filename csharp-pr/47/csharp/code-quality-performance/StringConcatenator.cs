using System;

namespace StringOperations
{
    public class StringConcatenator
    {
        public string BuildMessage(string[] words)
        {
            // {fact rule=code-quality-performance@v1.0 defects=1}
            string result = "";
            
            for (int i = 0; i < words.Length; i++)
            {
                result += words[i] + " ";
            }
            
            return result.Trim();
            // {/fact}
        }
    }
}