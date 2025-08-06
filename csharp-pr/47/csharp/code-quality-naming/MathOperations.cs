using System;

namespace MathematicalOperations
{
    public class MathOperations
    {
        // {fact rule=code-quality-naming@v1.0 defects=0}
        public double PerformCalculation(double firstOperand, double secondOperand, string operation)
        {
            switch (operation)
            {
                case "+":
                    return firstOperand + secondOperand;
                case "-":
                    return firstOperand - secondOperand;
                case "*":
                    return firstOperand * secondOperand;
                case "/":
                    return secondOperand != 0 ? firstOperand / secondOperand : 0;
                default:
                    throw new ArgumentException($"Unsupported operation: {operation}");
            }
        }
        // {/fact}
    }
}