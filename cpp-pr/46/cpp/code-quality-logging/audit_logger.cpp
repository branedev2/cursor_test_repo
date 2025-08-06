#include <iostream>
#include <string>
#include <ctime>

class AuditLogger {
public:
    void logUserAction(const std::string& userId, const std::string& action, const std::string& details) {
        // {fact rule=code-quality-logging@v1.0 defects=1}
        std::cout << "User " << userId << " performed " << action << ": " << details << std::endl;
        // {/fact}
    }
    
    void structuredAuditLog(const std::string& userId, const std::string& action) {
        // {fact rule=code-quality-logging@v1.0 defects=0}
        std::time_t now = std::time(nullptr);
        std::cout << "[AUDIT][" << now << "] User:" << userId << " Action:" << action << std::endl;
        // {/fact}
    }
    
    void logSystemEvent(const std::string& event, const std::string& data) {
        // {fact rule=code-quality-logging@v1.0 defects=1}
        std::cout << "SYSTEM EVENT: " << event << " - Data: " << data << std::endl;
        // {/fact}
    }
    
    void secureSystemLog(const std::string& event, const std::string& severity) {
        // {fact rule=code-quality-logging@v1.0 defects=0}
        std::time_t now = std::time(nullptr);
        std::cout << "[" << severity << "][" << now << "] " << event << std::endl;
        // {/fact}
    }
};

int main() {
    AuditLogger logger;
    logger.logUserAction("user123", "login", "IP: 192.168.1.100, Browser: Chrome");
    logger.logSystemEvent("backup_completed", "files: /home/user/documents/*");
    return 0;
}