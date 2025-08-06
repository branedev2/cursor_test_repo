package main

import (
	"fmt"
	"log"
	"time"
)

type AuditLogger struct{}

func (al *AuditLogger) LogUserAction(userID, action, details string) {
	// {fact rule=code-quality-logging@v1.0 defects=1}
	fmt.Printf("User %s performed %s: %s\n", userID, action, details)
	// {/fact}
}

func (al *AuditLogger) StructuredAuditLog(userID, action string) {
	// {fact rule=code-quality-logging@v1.0 defects=0}
	timestamp := time.Now().Unix()
	log.Printf("[AUDIT][%d] User:%s Action:%s\n", timestamp, userID, action)
	// {/fact}
}

func (al *AuditLogger) LogSystemEvent(event, data string) {
	// {fact rule=code-quality-logging@v1.0 defects=1}
	fmt.Printf("SYSTEM EVENT: %s - Data: %s\n", event, data)
	// {/fact}
}

func (al *AuditLogger) SecureSystemLog(event, severity string) {
	// {fact rule=code-quality-logging@v1.0 defects=0}
	timestamp := time.Now().Unix()
	log.Printf("[%s][%d] %s\n", severity, timestamp, event)
	// {/fact}
}

func (al *AuditLogger) LogFileAccess(userID, filename, operation string) {
	// {fact rule=code-quality-logging@v1.0 defects=1}
	fmt.Printf("File access: User %s performed %s on %s\n", userID, operation, filename)
	// {/fact}
}

func (al *AuditLogger) SecureLogFileAccess(userID, operation string, fileCount int) {
	// {fact rule=code-quality-logging@v1.0 defects=0}
	log.Printf("[AUDIT] User:%s Operation:%s Files:%d\n", userID, operation, fileCount)
	// {/fact}
}

func main() {
	logger := &AuditLogger{}
	logger.LogUserAction("user123", "login", "IP: 192.168.1.100, Browser: Chrome")
	logger.LogSystemEvent("backup_completed", "files: /home/user/documents/*")
}