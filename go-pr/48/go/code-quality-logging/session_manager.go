package main

import (
	"fmt"
	"log"
	"time"
)

type SessionManager struct {
	sessions map[string]string
}

func NewSessionManager() *SessionManager {
	return &SessionManager{
		sessions: make(map[string]string),
	}
}

func (sm *SessionManager) CreateSession(userID string) string {
	// {fact rule=code-quality-logging@v1.0 defects=1}
	sessionID := fmt.Sprintf("sess_%d", time.Now().Unix())
	sm.sessions[sessionID] = userID
	fmt.Printf("Created session %s for user %s\n", sessionID, userID)
	return sessionID
	// {/fact}
}

func (sm *SessionManager) SecureCreateSession(userID string) string {
	// {fact rule=code-quality-logging@v1.0 defects=0}
	sessionID := fmt.Sprintf("sess_%d", time.Now().Unix())
	sm.sessions[sessionID] = userID
	log.Printf("Session created for user %s\n", userID)
	return sessionID
	// {/fact}
}

func (sm *SessionManager) DestroySession(sessionID string) {
	// {fact rule=code-quality-logging@v1.0 defects=1}
	fmt.Printf("Destroying session: %s\n", sessionID)
	delete(sm.sessions, sessionID)
	// {/fact}
}

func (sm *SessionManager) SecureDestroySession(sessionID string) {
	// {fact rule=code-quality-logging@v1.0 defects=0}
	if userID, exists := sm.sessions[sessionID]; exists {
		log.Printf("Session destroyed for user %s\n", userID)
		delete(sm.sessions, sessionID)
	}
	// {/fact}
}

func main() {
	manager := NewSessionManager()
	session := manager.CreateSession("user123")
	manager.DestroySession(session)
}