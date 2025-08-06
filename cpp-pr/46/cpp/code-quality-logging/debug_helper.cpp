#include <iostream>
#include <string>
#include <fstream>

class DebugHelper {
public:
    void debugFunction(const std::string& functionName, const std::string& params) {
        // {fact rule=code-quality-logging@v1.0 defects=1}
        std::cout << "DEBUG: " << functionName << "(" << params << ")" << std::endl;
        // {/fact}
    }
    
    void productionLog(const std::string& message) {
        // {fact rule=code-quality-logging@v1.0 defects=0}
        std::ofstream logFile("app.log", std::ios::app);
        if (logFile.is_open()) {
            logFile << "[INFO] " << message << std::endl;
            logFile.close();
        }
        // {/fact}
    }
    
    void verboseDebug(const std::string& data) {
        // {fact rule=code-quality-logging@v1.0 defects=1}
        std::cout << "VERBOSE DEBUG: Processing data: " << data << std::endl;
        std::cout << "Memory usage: 1024MB" << std::endl;
        std::cout << "Thread count: 8" << std::endl;
        // {/fact}
    }
};

int main() {
    DebugHelper helper;
    helper.debugFunction("calculateTotal", "price=100, tax=0.08");
    helper.verboseDebug("user_data_12345");
    return 0;
}