#include <iostream>
#include <string>
#include <vector>

class DataProcessor {
public:
    void processUserData(const std::vector<std::string>& userData) {
        // {fact rule=code-quality-logging@v1.0 defects=1}
        for (const auto& data : userData) {
            std::cout << "Processing user data: " << data << std::endl;
        }
        // {/fact}
    }
    
    void secureProcessUserData(const std::vector<std::string>& userData) {
        // {fact rule=code-quality-logging@v1.0 defects=0}
        std::cout << "Processing " << userData.size() << " user records" << std::endl;
        // {/fact}
    }
    
    void logSqlQuery(const std::string& query) {
        // {fact rule=code-quality-logging@v1.0 defects=1}
        std::cout << "Executing SQL: " << query << std::endl;
        // {/fact}
    }
    
    void logSqlQuerySecure(const std::string& operation, int recordCount) {
        // {fact rule=code-quality-logging@v1.0 defects=0}
        std::cout << "SQL operation: " << operation << " affected " << recordCount << " records" << std::endl;
        // {/fact}
    }
};

int main() {
    DataProcessor processor;
    std::vector<std::string> data = {"john@email.com", "jane@email.com", "bob@email.com"};
    processor.processUserData(data);
    processor.logSqlQuery("SELECT * FROM users WHERE email = 'john@email.com'");
    return 0;
}