#include <iostream>
#include <string>
#include <map>

class ApiClient {
public:
    std::string makeRequest(const std::string& endpoint, const std::map<std::string, std::string>& headers) {
        // {fact rule=code-quality-logging@v1.0 defects=1}
        std::cout << "Making request to: " << endpoint << std::endl;
        for (const auto& header : headers) {
            std::cout << "Header: " << header.first << "=" << header.second << std::endl;
        }
        return "Response data";
        // {/fact}
    }
    
    std::string secureRequest(const std::string& endpoint, const std::map<std::string, std::string>& headers) {
        // {fact rule=code-quality-logging@v1.0 defects=0}
        std::cout << "Making request to: " << endpoint << std::endl;
        for (const auto& header : headers) {
            if (header.first == "Authorization" || header.first == "X-API-Key") {
                std::cout << "Header: " << header.first << "=***REDACTED***" << std::endl;
            } else {
                std::cout << "Header: " << header.first << "=" << header.second << std::endl;
            }
        }
        return "Response data";
        // {/fact}
    }
};

int main() {
    ApiClient client;
    std::map<std::string, std::string> headers = {
        {"Content-Type", "application/json"},
        {"Authorization", "Bearer secret_token_123"}
    };
    client.makeRequest("https://api.example.com/users", headers);
    return 0;
}