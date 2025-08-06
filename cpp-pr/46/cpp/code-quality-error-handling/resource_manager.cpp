#include <iostream>
#include <fstream>
#include <memory>

class ResourceManager {
public:
    void processFile(const std::string& filename) {
        // {fact rule=code-quality-error-handling@v1.0 defects=1}
        std::ifstream file(filename);
        std::string line;
        while (std::getline(file, line)) {
            std::cout << line << std::endl;
        }
        file.close();
        // {/fact}
    }
    
    std::unique_ptr<std::ifstream> openFileSecurely(const std::string& filename) {
        // {fact rule=code-quality-error-handling@v1.0 defects=0}
        auto file = std::make_unique<std::ifstream>(filename);
        if (!file->is_open()) {
            throw std::runtime_error("Failed to open file: " + filename);
        }
        return file;
        // {/fact}
    }
};

int main() {
    ResourceManager manager;
    manager.processFile("config.txt");
    return 0;
}