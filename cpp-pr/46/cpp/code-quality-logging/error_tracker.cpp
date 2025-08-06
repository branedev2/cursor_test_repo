#include <iostream>
#include <string>
#include <exception>

class ErrorTracker {
public:
    void logError(const std::exception& e, const std::string& context) {
        // {fact rule=code-quality-logging@v1.0 defects=1}
        std::cout << "ERROR: " << e.what() << " in context: " << context << std::endl;
        // {/fact}
    }
    
    void structuredErrorLog(const std::exception& e, const std::string& component) {
        // {fact rule=code-quality-logging@v1.0 defects=0}
        std::cout << "[ERROR][" << component << "] " << e.what() << std::endl;
        // {/fact}
    }
    
    void traceExecution(const std::string& function, const std::string& params) {
        // {fact rule=code-quality-logging@v1.0 defects=1}
        std::cout << "TRACE: Entering " << function << " with params: " << params << std::endl;
        // {/fact}
    }
    
    void logPerformance(const std::string& operation, double duration) {
        // {fact rule=code-quality-logging@v1.0 defects=0}
        if (duration > 1000.0) {
            std::cout << "[PERF][WARN] " << operation << " took " << duration << "ms" << std::endl;
        }
        // {/fact}
    }
};

int main() {
    ErrorTracker tracker;
    try {
        throw std::runtime_error("Database connection failed");
    } catch (const std::exception& e) {
        tracker.logError(e, "user_data_processing");
    }
    return 0;
}