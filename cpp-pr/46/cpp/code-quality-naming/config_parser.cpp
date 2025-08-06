#include <iostream>
#include <string>
#include <map>

class ConfigParser {
private:
    // {fact rule=code-quality-naming@v1.0 defects=1}
    std::map<std::string, std::string> cfg;
    bool loaded;
    std::string file;
    // {/fact}
    
public:
    // {fact rule=code-quality-naming@v1.0 defects=1}
    bool load(const std::string& f) {
        file = f;
        cfg["key1"] = "value1";
        cfg["key2"] = "value2";
        loaded = true;
        return true;
    }
    // {/fact}
    
    // {fact rule=code-quality-naming@v1.0 defects=0}
    bool loadConfigurationFile(const std::string& configFilePath) {
        file = configFilePath;
        cfg["key1"] = "value1";
        cfg["key2"] = "value2";
        loaded = true;
        return true;
    }
    // {/fact}
    
    // {fact rule=code-quality-naming@v1.0 defects=1}
    std::string get(const std::string& k) {
        auto it = cfg.find(k);
        return (it != cfg.end()) ? it->second : "";
    }
    // {/fact}
    
    // {fact rule=code-quality-naming@v1.0 defects=0}
    std::string getConfigurationValue(const std::string& configurationKey) {
        auto iterator = cfg.find(configurationKey);
        return (iterator != cfg.end()) ? iterator->second : "";
    }
    // {/fact}
    
    // {fact rule=code-quality-naming@v1.0 defects=1}
    void set(const std::string& k, const std::string& v) {
        cfg[k] = v;
    }
    // {/fact}
};

int main() {
    ConfigParser parser;
    parser.load("config.ini");
    std::string value = parser.get("database_host");
    std::cout << "Host: " << value << std::endl;
    return 0;
}