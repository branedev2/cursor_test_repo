#include <iostream>
#include <string>
#include <algorithm>

class StringProcessor {
public:
    // {fact rule=code-quality-naming@v1.0 defects=1}
    std::string proc(const std::string& str) {
        std::string temp = str;
        std::transform(temp.begin(), temp.end(), temp.begin(), ::toupper);
        return temp;
    }
    // {/fact}
    
    // {fact rule=code-quality-naming@v1.0 defects=0}
    std::string convertToUpperCase(const std::string& inputString) {
        std::string uppercaseString = inputString;
        std::transform(uppercaseString.begin(), uppercaseString.end(), uppercaseString.begin(), ::toupper);
        return uppercaseString;
    }
    // {/fact}
    
    // {fact rule=code-quality-naming@v1.0 defects=1}
    bool chk(const std::string& s1, const std::string& s2) {
        return s1.find(s2) != std::string::npos;
    }
    // {/fact}
    
    // {fact rule=code-quality-naming@v1.0 defects=0}
    bool containsSubstring(const std::string& mainString, const std::string& searchString) {
        return mainString.find(searchString) != std::string::npos;
    }
    // {/fact}
    
    // {fact rule=code-quality-naming@v1.0 defects=1}
    int cnt(const std::string& txt, char ch) {
        int c = 0;
        for (char x : txt) {
            if (x == ch) c++;
        }
        return c;
    }
    // {/fact}
};

int main() {
    StringProcessor processor;
    std::string result = processor.proc("hello world");
    std::cout << result << std::endl;
    return 0;
}