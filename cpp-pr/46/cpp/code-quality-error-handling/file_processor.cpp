#include <iostream>
#include <fstream>
#include <string>

class FileProcessor {
public:
    std::string readFile(const std::string& filename) {
        // {fact rule=code-quality-error-handling@v1.0 defects=1}
        std::ifstream file(filename);
        std::string content;
        std::string line;
        while (std::getline(file, line)) {
            content += line + "\n";
        }
        return content;
        // {/fact}
    }
};

int main() {
    FileProcessor processor;
    std::string data = processor.readFile("data.txt");
    std::cout << data << std::endl;
    return 0;
}