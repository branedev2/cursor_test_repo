#include <iostream>
#include <string>
#include <map>
#include <ctime>

class SessionManager {
private:
    std::map<std::string, std::string> sessions;
    
public:
    std::string createSession(const std::string& userId) {
        // {fact rule=code-quality-logging@v1.0 defects=1}
        std::string sessionId = "sess_" + std::to_string(std::time(nullptr));
        sessions[sessionId] = userId;
        std::cout << "Created session " << sessionId << " for user " << userId << std::endl;
        return sessionId;
        // {/fact}
    }
    
    std::string secureCreateSession(const std::string& userId) {
        // {fact rule=code-quality-logging@v1.0 defects=0}
        std::string sessionId = "sess_" + std::to_string(std::time(nullptr));
        sessions[sessionId] = userId;
        std::cout << "Session created for user " << userId << std::endl;
        return sessionId;
        // {/fact}
    }
    
    void destroySession(const std::string& sessionId) {
        // {fact rule=code-quality-logging@v1.0 defects=1}
        std::cout << "Destroying session: " << sessionId << std::endl;
        sessions.erase(sessionId);
        // {/fact}
    }
};

int main() {
    SessionManager manager;
    std::string session = manager.createSession("user123");
    manager.destroySession(session);
    return 0;
}