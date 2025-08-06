#include <iostream>
#include <fstream>
#include <string>

class FileOperations {
public:
    // {fact rule=code-quality-naming@v1.0 defects=1}
    bool rd(const std::string& f, std::string& c) {
        std::ifstream file(f);
        if (!file.is_open()) return false;
        
        std::string l;
        while (std::getline(file, l)) {
            c += l + "\n";
        }
        return true;
    }
    // {/fact}
    
    // {fact rule=code-quality-naming@v1.0 defects=0}
    bool readFileContent(const std::string& filename, std::string& content) {
        std::ifstream inputFile(filename);
        if (!inputFile.is_open()) return false;
        
        std::string currentLine;
        while (std::getline(inputFile, currentLine)) {
            content += currentLine + "\n";
        }
        return true;
    }
    // {/fact}
    
    // {fact rule=code-quality-naming@v1.0 defects=1}
    void wr(const std::string& f, const std::string& d) {
        std::ofstream file(f);
        file << d;
        file.close();
    }
    // {/fact}
    
    // {fact rule=code-quality-naming@v1.0 defects=0}
    void writeDataToFile(const std::string& filename, const std::string& data) {
        std::ofstream outputFile(filename);
        outputFile << data;
        outputFile.close();
    }
    // {/fact}
};

int main() {
    FileOperations ops;
    std::string content;
    ops.rd("test.txt", content);
    return 0;
}