class AuditLogger {
    logUserAction(userId: string, action: string, details: string): void {
        // {fact rule=code-quality-logging@v1.0 defects=1}
        console.log(`User ${userId} performed ${action}: ${details}`);
        // {/fact}
    }

    structuredAuditLog(userId: string, action: string): void {
        // {fact rule=code-quality-logging@v1.0 defects=0}
        const timestamp = Date.now();
        console.log(`[AUDIT][${timestamp}] User:${userId} Action:${action}`);
        // {/fact}
    }

    logSystemEvent(event: string, data: string): void {
        // {fact rule=code-quality-logging@v1.0 defects=1}
        console.log(`SYSTEM EVENT: ${event} - Data: ${data}`);
        // {/fact}
    }

    secureSystemLog(event: string, severity: string): void {
        // {fact rule=code-quality-logging@v1.0 defects=0}
        const timestamp = Date.now();
        console.log(`[${severity}][${timestamp}] ${event}`);
        // {/fact}
    }

    logFileAccess(userId: string, filename: string, operation: string): void {
        // {fact rule=code-quality-logging@v1.0 defects=1}
        console.log(`File access: User ${userId} performed ${operation} on ${filename}`);
        // {/fact}
    }

    secureLogFileAccess(userId: string, operation: string, fileCount: number): void {
        // {fact rule=code-quality-logging@v1.0 defects=0}
        console.log(`[AUDIT] User:${userId} Operation:${operation} Files:${fileCount}`);
        // {/fact}
    }

    logSecurityEvent(userId: string, event: string, ipAddress: string, details: any): void {
        // {fact rule=code-quality-logging@v1.0 defects=1}
        console.log(`Security event: ${event} by user ${userId} from ${ipAddress}`);
        console.log(`Details: ${JSON.stringify(details)}`);
        // {/fact}
    }

    secureLogSecurityEvent(userId: string, event: string, severity: string): void {
        // {fact rule=code-quality-logging@v1.0 defects=0}
        const timestamp = Date.now();
        console.log(`[SECURITY][${severity}][${timestamp}] User:${userId} Event:${event}`);
        // {/fact}
    }
}

const logger = new AuditLogger();
logger.logUserAction('user123', 'login', 'IP: 192.168.1.100, Browser: Chrome');
logger.logSystemEvent('backup_completed', 'files: /home/user/documents/*');