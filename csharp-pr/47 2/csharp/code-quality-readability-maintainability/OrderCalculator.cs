using System;

namespace OrderProcessing
{
    public class OrderCalculator
    {
        public decimal CalculateTotal(decimal price, int quantity, string customerType, bool hasDiscount)
        {
            // {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
            decimal total = price * quantity;
            if (customerType == "VIP") total = total * 0.9m;
            else if (customerType == "Regular") total = total * 0.95m;
            if (hasDiscount) total = total * 0.85m;
            if (total > 1000) total = total * 0.98m;
            if (quantity > 10) total = total * 0.97m;
            return total;
            // {/fact}
        }
    }
}