#include <iostream>
#include <string>
#include <stdexcept>

class DatabaseConnector {
private:
    bool connected;
    
public:
    DatabaseConnector() : connected(false) {}
    
    void connect(const std::string& host, int port) {
        // {fact rule=code-quality-error-handling@v1.0 defects=1}
        connected = true;
        std::cout << "Connected to " << host << ":" << port << std::endl;
        // {/fact}
    }
    
    void executeQuery(const std::string& query) {
        // {fact rule=code-quality-error-handling@v1.0 defects=0}
        if (!connected) {
            throw std::runtime_error("Database not connected");
        }
        if (query.empty()) {
            throw std::invalid_argument("Query cannot be empty");
        }
        std::cout << "Executing: " << query << std::endl;
        // {/fact}
    }
};

int main() {
    DatabaseConnector db;
    db.connect("localhost", 5432);
    db.executeQuery("SELECT * FROM users");
    return 0;
}