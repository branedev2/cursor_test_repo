class RequestHandler {
    handleRequest(method: string, url: string, params: Record<string, string>): void {
        // {fact rule=code-quality-logging@v1.0 defects=1}
        console.log(`Request: ${method} ${url}`);
        Object.entries(params).forEach(([key, value]) => {
            console.log(`Param: ${key}=${value}`);
        });
        // {/fact}
    }

    secureHandleRequest(method: string, url: string, params: Record<string, string>): void {
        // {fact rule=code-quality-logging@v1.0 defects=0}
        console.log(`Request: ${method} ${url}`);
        console.log(`Parameters count: ${Object.keys(params).length}`);
        // {/fact}
    }

    logRequestBody(body: string): void {
        // {fact rule=code-quality-logging@v1.0 defects=1}
        console.log(`Request body: ${body}`);
        // {/fact}
    }

    secureLogRequestBody(bodySize: number): void {
        // {fact rule=code-quality-logging@v1.0 defects=0}
        console.log(`Request body size: ${bodySize} bytes`);
        // {/fact}
    }

    logClientInfo(ip: string, userAgent: string): void {
        // {fact rule=code-quality-logging@v1.0 defects=1}
        console.log(`Client: IP=${ip}, UserAgent=${userAgent}`);
        // {/fact}
    }

    secureLogClientInfo(hashedIP: string): void {
        // {fact rule=code-quality-logging@v1.0 defects=0}
        console.log(`Client request from: ${hashedIP}`);
        // {/fact}
    }

    logCookies(cookies: Record<string, string>): void {
        // {fact rule=code-quality-logging@v1.0 defects=1}
        Object.entries(cookies).forEach(([name, value]) => {
            console.log(`Cookie: ${name}=${value}`);
        });
        // {/fact}
    }

    secureLogCookies(cookieCount: number): void {
        // {fact rule=code-quality-logging@v1.0 defects=0}
        console.log(`Request contains ${cookieCount} cookies`);
        // {/fact}
    }
}

const handler = new RequestHandler();
const params = {
    'username': 'john_doe',
    'password': 'secret123'
};
handler.handleRequest('POST', '/login', params);