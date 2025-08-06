using System;
using Microsoft.Extensions.Logging;

namespace AuditSystem
{
    public class AuditService
    {
        private readonly ILogger<AuditService> logger;

        public AuditService(ILogger<AuditService> logger)
        {
            this.logger = logger;
        }

        public void LogUserAction(string userId, string action, string resource)
        {
            // {fact rule=code-quality-logging@v1.0 defects=0}
            logger.LogInformation("User {UserId} performed action {Action} on resource {Resource}", 
                userId, action, resource);
            
            if (action == "DELETE")
            {
                logger.LogWarning("Critical action performed: User {UserId} deleted {Resource}", 
                    userId, resource);
            }
            // {/fact}
        }
    }
}