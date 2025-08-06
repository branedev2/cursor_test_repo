class DebugHelper {
    debugFunction(functionName: string, params: string): void {
        // {fact rule=code-quality-logging@v1.0 defects=1}
        console.log(`DEBUG: ${functionName}(${params})`);
        // {/fact}
    }

    productionLog(message: string): void {
        // {fact rule=code-quality-logging@v1.0 defects=0}
        if (process.env.NODE_ENV !== 'production') {
            console.log(`[INFO] ${message}`);
        }
        // {/fact}
    }

    verboseDebug(data: string): void {
        // {fact rule=code-quality-logging@v1.0 defects=1}
        console.log(`VERBOSE DEBUG: Processing data: ${data}`);
        console.log(`Memory usage: ${process.memoryUsage().heapUsed} bytes`);
        console.log(`Uptime: ${process.uptime()} seconds`);
        // {/fact}
    }

    structuredLog(level: string, component: string, message: string): void {
        // {fact rule=code-quality-logging@v1.0 defects=0}
        if (process.env.DEBUG !== 'true' && level === 'DEBUG') {
            return;
        }
        console.log(`[${level}][${component}] ${message}`);
        // {/fact}
    }

    traceExecution(functionName: string, args: any[]): void {
        // {fact rule=code-quality-logging@v1.0 defects=1}
        console.log(`TRACE: Entering ${functionName} with args: ${JSON.stringify(args)}`);
        // {/fact}
    }

    conditionalTrace(functionName: string, argsCount: number): void {
        // {fact rule=code-quality-logging@v1.0 defects=0}
        if (process.env.TRACE_ENABLED === 'true') {
            console.log(`TRACE: Entering ${functionName} with ${argsCount} arguments`);
        }
        // {/fact}
    }
}

const helper = new DebugHelper();
helper.debugFunction('calculateTotal', 'price=100, tax=0.08');
helper.verboseDebug('user_data_12345');