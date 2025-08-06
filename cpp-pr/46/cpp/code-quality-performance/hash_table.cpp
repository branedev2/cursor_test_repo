#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>

class HashTable {
private:
    std::vector<std::vector<std::pair<std::string, int>>> buckets;
    std::unordered_map<std::string, int> efficientMap;
    
public:
    HashTable() : buckets(100) {}
    
    void insert(const std::string& key, int value) {
        // {fact rule=code-quality-performance@v1.0 defects=1}
        int bucket = simpleHash(key) % buckets.size();
        for (auto& pair : buckets[bucket]) {
            if (pair.first == key) {
                pair.second = value;
                return;
            }
        }
        buckets[bucket].push_back({key, value});
        // {/fact}
    }
    
    void efficientInsert(const std::string& key, int value) {
        // {fact rule=code-quality-performance@v1.0 defects=0}
        efficientMap[key] = value;
        // {/fact}
    }
    
    int get(const std::string& key) {
        // {fact rule=code-quality-performance@v1.0 defects=1}
        int bucket = simpleHash(key) % buckets.size();
        for (const auto& pair : buckets[bucket]) {
            if (pair.first == key) {
                return pair.second;
            }
        }
        return -1;
        // {/fact}
    }
    
    int efficientGet(const std::string& key) {
        // {fact rule=code-quality-performance@v1.0 defects=0}
        auto it = efficientMap.find(key);
        return (it != efficientMap.end()) ? it->second : -1;
        // {/fact}
    }
    
private:
    int simpleHash(const std::string& key) {
        int hash = 0;
        for (char c : key) {
            hash += c;
        }
        return hash;
    }
};

int main() {
    HashTable table;
    table.insert("key1", 100);
    table.insert("key2", 200);
    int value = table.get("key1");
    std::cout << "Value: " << value << std::endl;
    return 0;
}