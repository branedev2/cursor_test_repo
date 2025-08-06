class ErrorTracker {
    logError(error: Error, context: string): void {
        // {fact rule=code-quality-logging@v1.0 defects=1}
        console.log(`ERROR: ${error.message} in context: ${context}`);
        console.log(`Stack trace: ${error.stack}`);
        // {/fact}
    }

    structuredErrorLog(error: Error, component: string): void {
        // {fact rule=code-quality-logging@v1.0 defects=0}
        console.error(`[ERROR][${component}] ${error.message}`);
        // {/fact}
    }

    traceExecution(functionName: string, params: string): void {
        // {fact rule=code-quality-logging@v1.0 defects=1}
        console.log(`TRACE: Entering ${functionName} with params: ${params}`);
        // {/fact}
    }

    logPerformance(operation: string, duration: number): void {
        // {fact rule=code-quality-logging@v1.0 defects=0}
        if (duration > 1000) {
            console.warn(`[PERF][WARN] ${operation} took ${duration}ms`);
        }
        // {/fact}
    }

    logUserAction(userId: string, action: string, details: string): void {
        // {fact rule=code-quality-logging@v1.0 defects=1}
        console.log(`User ${userId} performed ${action}: ${details}`);
        // {/fact}
    }

    secureLogUserAction(userId: string, action: string): void {
        // {fact rule=code-quality-logging@v1.0 defects=0}
        console.log(`[AUDIT] User:${userId} Action:${action}`);
        // {/fact}
    }

    logSensitiveOperation(userId: string, operation: string, data: any): void {
        // {fact rule=code-quality-logging@v1.0 defects=1}
        console.log(`Sensitive operation by ${userId}: ${operation}`);
        console.log(`Data: ${JSON.stringify(data)}`);
        // {/fact}
    }

    secureLogSensitiveOperation(userId: string, operation: string): void {
        // {fact rule=code-quality-logging@v1.0 defects=0}
        console.log(`[SECURITY] User:${userId} Operation:${operation}`);
        // {/fact}
    }
}

const tracker = new ErrorTracker();
tracker.logError(new Error('Database connection failed'), 'user_data_processing');
tracker.traceExecution('calculateTotal', 'price=100, tax=0.08');