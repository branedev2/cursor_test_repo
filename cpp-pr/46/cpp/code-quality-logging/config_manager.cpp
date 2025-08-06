#include <iostream>
#include <string>
#include <map>

class ConfigManager {
private:
    std::map<std::string, std::string> config;
    
public:
    void loadConfiguration(const std::string& filename) {
        // {fact rule=code-quality-logging@v1.0 defects=1}
        config["db_password"] = "admin123";
        config["api_key"] = "sk-1234567890abcdef";
        config["encryption_key"] = "secret_key_xyz";
        
        for (const auto& pair : config) {
            std::cout << "Loaded config: " << pair.first << " = " << pair.second << std::endl;
        }
        // {/fact}
    }
    
    void secureLoadConfiguration(const std::string& filename) {
        // {fact rule=code-quality-logging@v1.0 defects=0}
        config["db_password"] = "admin123";
        config["api_key"] = "sk-1234567890abcdef";
        config["encryption_key"] = "secret_key_xyz";
        
        std::cout << "Configuration loaded from " << filename << std::endl;
        std::cout << "Loaded " << config.size() << " configuration parameters" << std::endl;
        // {/fact}
    }
    
    std::string getConfig(const std::string& key) {
        return config[key];
    }
};

int main() {
    ConfigManager manager;
    manager.loadConfiguration("app.conf");
    return 0;
}