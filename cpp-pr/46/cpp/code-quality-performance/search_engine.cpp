#include <iostream>
#include <vector>
#include <string>
#include <unordered_set>
#include <algorithm>

class SearchEngine {
private:
    std::vector<std::string> documents;
    
public:
    void addDocument(const std::string& doc) {
        documents.push_back(doc);
    }
    
    std::vector<std::string> searchDocuments(const std::string& query) {
        // {fact rule=code-quality-performance@v1.0 defects=1}
        std::vector<std::string> results;
        for (const auto& doc : documents) {
            if (doc.find(query) != std::string::npos) {
                results.push_back(doc);
            }
        }
        return results;
        // {/fact}
    }
    
    std::vector<std::string> optimizedSearchDocuments(const std::string& query) {
        // {fact rule=code-quality-performance@v1.0 defects=0}
        std::vector<std::string> results;
        results.reserve(documents.size() / 10);
        
        for (const auto& doc : documents) {
            if (doc.find(query) != std::string::npos) {
                results.push_back(doc);
            }
        }
        return results;
        // {/fact}
    }
    
    bool hasDocument(const std::string& doc) {
        // {fact rule=code-quality-performance@v1.0 defects=1}
        for (const auto& document : documents) {
            if (document == doc) {
                return true;
            }
        }
        return false;
        // {/fact}
    }
};

int main() {
    SearchEngine engine;
    engine.addDocument("This is a test document");
    engine.addDocument("Another document for testing");
    auto results = engine.searchDocuments("test");
    std::cout << "Found " << results.size() << " documents" << std::endl;
    return 0;
}