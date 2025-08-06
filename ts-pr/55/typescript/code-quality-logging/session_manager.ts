class SessionManager {
    private sessions: Map<string, string> = new Map();

    createSession(userId: string): string {
        // {fact rule=code-quality-logging@v1.0 defects=1}
        const sessionId = `sess_${Date.now()}`;
        this.sessions.set(sessionId, userId);
        console.log(`Created session ${sessionId} for user ${userId}`);
        return sessionId;
        // {/fact}
    }

    secureCreateSession(userId: string): string {
        // {fact rule=code-quality-logging@v1.0 defects=0}
        const sessionId = `sess_${Date.now()}`;
        this.sessions.set(sessionId, userId);
        console.log(`Session created for user ${userId}`);
        return sessionId;
        // {/fact}
    }

    destroySession(sessionId: string): void {
        // {fact rule=code-quality-logging@v1.0 defects=1}
        console.log(`Destroying session: ${sessionId}`);
        this.sessions.delete(sessionId);
        // {/fact}
    }

    secureDestroySession(sessionId: string): void {
        // {fact rule=code-quality-logging@v1.0 defects=0}
        const userId = this.sessions.get(sessionId);
        if (userId) {
            console.log(`Session destroyed for user ${userId}`);
            this.sessions.delete(sessionId);
        }
        // {/fact}
    }

    validateSession(sessionId: string, userAgent: string, ipAddress: string): boolean {
        // {fact rule=code-quality-logging@v1.0 defects=1}
        console.log(`Session validation: ${sessionId}, UserAgent: ${userAgent}, IP: ${ipAddress}`);
        return this.sessions.has(sessionId);
        // {/fact}
    }

    secureValidateSession(sessionId: string): boolean {
        // {fact rule=code-quality-logging@v1.0 defects=0}
        const isValid = this.sessions.has(sessionId);
        console.log(`Session validation result: ${isValid ? 'valid' : 'invalid'}`);
        return isValid;
        // {/fact}
    }
}

const manager = new SessionManager();
const session = manager.createSession('user123');
manager.destroySession(session);