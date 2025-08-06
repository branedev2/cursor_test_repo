using System;

namespace MathServices
{
    public class CalculatorService
    {
        // {fact rule=code-quality-naming@v1.0 defects=1}
        public double calc(double a, double b, string op)
        {
            switch (op)
            {
                case "+":
                    return a + b;
                case "-":
                    return a - b;
                case "*":
                    return a * b;
                case "/":
                    return b != 0 ? a / b : 0;
                default:
                    return 0;
            }
        }
        // {/fact}
    }
}