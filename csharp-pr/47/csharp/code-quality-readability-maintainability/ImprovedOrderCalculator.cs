using System;

namespace OrderProcessing
{
    public class ImprovedOrderCalculator
    {
        private const decimal VipDiscount = 0.9m;
        private const decimal RegularDiscount = 0.95m;
        private const decimal AdditionalDiscount = 0.85m;
        private const decimal LargeOrderDiscount = 0.98m;
        private const decimal BulkQuantityDiscount = 0.97m;
        private const decimal LargeOrderThreshold = 1000m;
        private const int BulkQuantityThreshold = 10;

        public decimal CalculateTotal(decimal price, int quantity, string customerType, bool hasDiscount)
        {
            // {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
            decimal baseTotal = price * quantity;
            
            decimal customerDiscount = GetCustomerTypeDiscount(customerType);
            decimal total = baseTotal * customerDiscount;
            
            if (hasDiscount)
            {
                total *= AdditionalDiscount;
            }
            
            total = ApplyVolumeDiscounts(total, quantity);
            
            return total;
            // {/fact}
        }

        private decimal GetCustomerTypeDiscount(string customerType)
        {
            return customerType switch
            {
                "VIP" => VipDiscount,
                "Regular" => RegularDiscount,
                _ => 1.0m
            };
        }

        private decimal ApplyVolumeDiscounts(decimal total, int quantity)
        {
            if (total > LargeOrderThreshold)
            {
                total *= LargeOrderDiscount;
            }
            
            if (quantity > BulkQuantityThreshold)
            {
                total *= BulkQuantityDiscount;
            }
            
            return total;
        }
    }
}