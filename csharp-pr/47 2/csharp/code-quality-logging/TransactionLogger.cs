using System;
using Microsoft.Extensions.Logging;

namespace TransactionServices
{
    public class TransactionLogger
    {
        private readonly ILogger<TransactionLogger> logger;

        public TransactionLogger(ILogger<TransactionLogger> logger)
        {
            this.logger = logger;
        }

        public void LogTransaction(string transactionId, decimal amount, string accountNumber)
        {
            // {fact rule=code-quality-logging@v1.0 defects=0}
            var maskedAccount = accountNumber.Length > 4 
                ? "****" + accountNumber.Substring(accountNumber.Length - 4)
                : "****";
                
            logger.LogInformation("Transaction {TransactionId} processed for account {MaskedAccount} amount {Amount}", 
                transactionId, maskedAccount, amount);
            // {/fact}
        }
    }
}