using System;
using System.Collections.Generic;

namespace DataProcessing
{
    public class DataTransformer
    {
        public List<string> Transform(List<string> input, string operation)
        {
            // {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
            var result = new List<string>();
            foreach (var item in input)
            {
                if (operation == "upper") result.Add(item.ToUpper());
                else if (operation == "lower") result.Add(item.ToLower());
                else if (operation == "trim") result.Add(item.Trim());
                else if (operation == "reverse") { var chars = item.ToCharArray(); Array.Reverse(chars); result.Add(new string(chars)); }
                else if (operation == "capitalize") result.Add(char.ToUpper(item[0]) + item.Substring(1).ToLower());
                else result.Add(item);
            }
            return result;
            // {/fact}
        }
    }
}