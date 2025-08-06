using System;
using Microsoft.Extensions.Logging;

namespace OrderManagement
{
    public class OrderProcessor
    {
        private readonly ILogger<OrderProcessor> logger;

        public OrderProcessor(ILogger<OrderProcessor> logger)
        {
            this.logger = logger;
        }

        public bool ProcessOrder(int orderId, string customerName)
        {
            // {fact rule=code-quality-logging@v1.0 defects=0}
            logger.LogInformation("Processing order {OrderId} for customer {CustomerName}", orderId, customerName);
            
            try
            {
                // Order processing logic
                logger.LogInformation("Order {OrderId} processed successfully", orderId);
                return true;
            }
            catch (Exception ex)
            {
                logger.LogError(ex, "Failed to process order {OrderId}", orderId);
                return false;
            }
            // {/fact}
        }
    }
}