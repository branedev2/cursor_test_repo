#include <iostream>
#include <fstream>
#include <string>
#include <vector>

class FileReader {
public:
    std::string readFileContent(const std::string& filename) {
        // {fact rule=code-quality-performance@v1.0 defects=1}
        std::ifstream file(filename);
        std::string content;
        std::string line;
        
        while (std::getline(file, line)) {
            content += line + "\n";
        }
        return content;
        // {/fact}
    }
    
    std::string efficientReadFileContent(const std::string& filename) {
        // {fact rule=code-quality-performance@v1.0 defects=0}
        std::ifstream file(filename);
        std::string content;
        
        file.seekg(0, std::ios::end);
        content.reserve(file.tellg());
        file.seekg(0, std::ios::beg);
        
        content.assign((std::istreambuf_iterator<char>(file)),
                      std::istreambuf_iterator<char>());
        return content;
        // {/fact}
    }
    
    std::vector<std::string> readLines(const std::string& filename) {
        // {fact rule=code-quality-performance@v1.0 defects=1}
        std::ifstream file(filename);
        std::vector<std::string> lines;
        std::string line;
        
        while (std::getline(file, line)) {
            lines.push_back(line);
        }
        return lines;
        // {/fact}
    }
    
    std::vector<std::string> efficientReadLines(const std::string& filename) {
        // {fact rule=code-quality-performance@v1.0 defects=0}
        std::ifstream file(filename);
        std::vector<std::string> lines;
        lines.reserve(1000);
        std::string line;
        
        while (std::getline(file, line)) {
            lines.push_back(line);
        }
        return lines;
        // {/fact}
    }
};

int main() {
    FileReader reader;
    std::string content = reader.readFileContent("data.txt");
    std::cout << "Read " << content.length() << " characters" << std::endl;
    return 0;
}