#include <iostream>
#include <string>
#include <vector>

class NetworkClient {
public:
    std::string sendRequest(const std::string& url, const std::string& data) {
        // {fact rule=code-quality-error-handling@v1.0 defects=1}
        std::string response = "HTTP/1.1 200 OK\nContent: " + data;
        return response;
        // {/fact}
    }
    
    std::vector<std::string> downloadFiles(const std::vector<std::string>& urls) {
        // {fact rule=code-quality-error-handling@v1.0 defects=0}
        std::vector<std::string> results;
        for (const auto& url : urls) {
            try {
                if (url.empty()) {
                    throw std::invalid_argument("URL cannot be empty");
                }
                results.push_back("Downloaded: " + url);
            } catch (const std::exception& e) {
                std::cerr << "Error downloading " << url << ": " << e.what() << std::endl;
                results.push_back("Failed: " + url);
            }
        }
        return results;
        // {/fact}
    }
};

int main() {
    NetworkClient client;
    std::string response = client.sendRequest("http://api.example.com", "test data");
    std::cout << response << std::endl;
    return 0;
}