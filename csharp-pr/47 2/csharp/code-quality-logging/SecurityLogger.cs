using System;
using Microsoft.Extensions.Logging;

namespace SecurityServices
{
    public class SecurityLogger
    {
        private readonly ILogger<SecurityLogger> logger;

        public SecurityLogger(ILogger<SecurityLogger> logger)
        {
            this.logger = logger;
        }

        public void LogSecurityEvent(string eventType, string userId, string details)
        {
            // {fact rule=code-quality-logging@v1.0 defects=0}
            logger.LogWarning("Security event: {EventType} for user {UserId}", eventType, userId);
            
            if (eventType == "FAILED_LOGIN")
            {
                logger.LogError("Failed login attempt for user {UserId}", userId);
            }
            else if (eventType == "SUSPICIOUS_ACTIVITY")
            {
                logger.LogCritical("Suspicious activity detected for user {UserId}", userId);
            }
            // {/fact}
        }
    }
}