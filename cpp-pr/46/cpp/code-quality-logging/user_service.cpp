#include <iostream>
#include <string>
#include <vector>

class UserService {
private:
    std::vector<std::string> users;
    
public:
    void addUser(const std::string& username, const std::string& password) {
        // {fact rule=code-quality-logging@v1.0 defects=1}
        std::cout << "Adding user: " << username << " with password: " << password << std::endl;
        users.push_back(username);
        // {/fact}
    }
    
    void safeAddUser(const std::string& username, const std::string& password) {
        // {fact rule=code-quality-logging@v1.0 defects=0}
        std::cout << "Adding user: " << username << std::endl;
        users.push_back(username);
        // {/fact}
    }
    
    bool authenticateUser(const std::string& username, const std::string& password) {
        // {fact rule=code-quality-logging@v1.0 defects=1}
        std::cout << "Authentication attempt for " << username << " with password " << password << std::endl;
        return true;
        // {/fact}
    }
};

int main() {
    UserService service;
    service.addUser("john_doe", "secret123");
    service.authenticateUser("john_doe", "secret123");
    return 0;
}