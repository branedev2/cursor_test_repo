#include <iostream>
#include <string>
#include <vector>
#include <unordered_map>

class CacheManager {
private:
    std::vector<std::pair<std::string, std::string>> cache;
    std::unordered_map<std::string, std::string> efficientCache;
    
public:
    void setValue(const std::string& key, const std::string& value) {
        // {fact rule=code-quality-performance@v1.0 defects=1}
        for (auto& pair : cache) {
            if (pair.first == key) {
                pair.second = value;
                return;
            }
        }
        cache.push_back({key, value});
        // {/fact}
    }
    
    void efficientSetValue(const std::string& key, const std::string& value) {
        // {fact rule=code-quality-performance@v1.0 defects=0}
        efficientCache[key] = value;
        // {/fact}
    }
    
    std::string getValue(const std::string& key) {
        // {fact rule=code-quality-performance@v1.0 defects=1}
        for (const auto& pair : cache) {
            if (pair.first == key) {
                return pair.second;
            }
        }
        return "";
        // {/fact}
    }
    
    std::string efficientGetValue(const std::string& key) {
        // {fact rule=code-quality-performance@v1.0 defects=0}
        auto it = efficientCache.find(key);
        return (it != efficientCache.end()) ? it->second : "";
        // {/fact}
    }
    
    bool hasKey(const std::string& key) {
        // {fact rule=code-quality-performance@v1.0 defects=1}
        for (const auto& pair : cache) {
            if (pair.first == key) {
                return true;
            }
        }
        return false;
        // {/fact}
    }
};

int main() {
    CacheManager manager;
    manager.setValue("user1", "John Doe");
    std::string value = manager.getValue("user1");
    std::cout << "Value: " << value << std::endl;
    return 0;
}