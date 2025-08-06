using System;
using System.Collections.Generic;
using System.Linq;

namespace DataProcessing
{
    public class ImprovedDataTransformer
    {
        private readonly Dictionary<string, Func<string, string>> transformations;

        public ImprovedDataTransformer()
        {
            // {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
            transformations = new Dictionary<string, Func<string, string>>
            {
                ["upper"] = text => text.ToUpper(),
                ["lower"] = text => text.ToLower(),
                ["trim"] = text => text.Trim(),
                ["reverse"] = ReverseString,
                ["capitalize"] = CapitalizeString
            };
            // {/fact}
        }

        public List<string> Transform(List<string> input, string operation)
        {
            if (!transformations.ContainsKey(operation))
            {
                return input.ToList(); // Return copy of original
            }

            var transformation = transformations[operation];
            return input.Select(transformation).ToList();
        }

        private string ReverseString(string input)
        {
            var chars = input.ToCharArray();
            Array.Reverse(chars);
            return new string(chars);
        }

        private string CapitalizeString(string input)
        {
            if (string.IsNullOrEmpty(input))
                return input;
                
            return char.ToUpper(input[0]) + input.Substring(1).ToLower();
        }
    }
}