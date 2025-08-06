using System;
using System.Text;

namespace StringOperations
{
    public class MessageBuilder
    {
        public string BuildMessage(string[] words)
        {
            // {fact rule=code-quality-performance@v1.0 defects=0}
            var stringBuilder = new StringBuilder();
            
            for (int i = 0; i < words.Length; i++)
            {
                stringBuilder.Append(words[i]);
                if (i < words.Length - 1)
                {
                    stringBuilder.Append(" ");
                }
            }
            
            return stringBuilder.ToString();
            // {/fact}
        }
    }
}