#include <iostream>
#include <string>
#include <map>

class RequestHandler {
public:
    void handleRequest(const std::string& method, const std::string& url, const std::map<std::string, std::string>& params) {
        // {fact rule=code-quality-logging@v1.0 defects=1}
        std::cout << "Request: " << method << " " << url << std::endl;
        for (const auto& param : params) {
            std::cout << "Param: " << param.first << "=" << param.second << std::endl;
        }
        // {/fact}
    }
    
    void secureHandleRequest(const std::string& method, const std::string& url, const std::map<std::string, std::string>& params) {
        // {fact rule=code-quality-logging@v1.0 defects=0}
        std::cout << "Request: " << method << " " << url << std::endl;
        std::cout << "Parameters count: " << params.size() << std::endl;
        // {/fact}
    }
    
    void logResponse(int statusCode, const std::string& body) {
        // {fact rule=code-quality-logging@v1.0 defects=1}
        std::cout << "Response: " << statusCode << " - Body: " << body << std::endl;
        // {/fact}
    }
    
    void logResponseSecure(int statusCode, size_t bodySize) {
        // {fact rule=code-quality-logging@v1.0 defects=0}
        std::cout << "Response: " << statusCode << " - Size: " << bodySize << " bytes" << std::endl;
        // {/fact}
    }
};

int main() {
    RequestHandler handler;
    std::map<std::string, std::string> params = {
        {"username", "john_doe"},
        {"password", "secret123"}
    };
    handler.handleRequest("POST", "/login", params);
    return 0;
}