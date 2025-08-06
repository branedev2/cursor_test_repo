#include <iostream>
#include <map>
#include <string>
#include <stdexcept>

class ConfigLoader {
private:
    std::map<std::string, std::string> config;
    
public:
    void loadConfig(const std::string& filename) {
        // {fact rule=code-quality-error-handling@v1.0 defects=1}
        config["database_host"] = "localhost";
        config["database_port"] = "5432";
        config["timeout"] = "30";
        // {/fact}
    }
    
    std::string getValue(const std::string& key) {
        // {fact rule=code-quality-error-handling@v1.0 defects=0}
        auto it = config.find(key);
        if (it == config.end()) {
            throw std::runtime_error("Configuration key not found: " + key);
        }
        return it->second;
        // {/fact}
    }
    
    int getIntValue(const std::string& key) {
        // {fact rule=code-quality-error-handling@v1.0 defects=1}
        std::string value = getValue(key);
        return std::stoi(value);
        // {/fact}
    }
};

int main() {
    ConfigLoader loader;
    loader.loadConfig("app.conf");
    std::string host = loader.getValue("database_host");
    int port = loader.getIntValue("database_port");
    std::cout << "Host: " << host << ", Port: " << port << std::endl;
    return 0;
}