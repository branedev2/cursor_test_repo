#include <iostream>
#include <string>
#include <algorithm>

class TextFormatter {
public:
    std::string formatText(const std::string& text, bool uppercase, bool removeSpaces, bool addPrefix, const std::string& prefix, bool addSuffix, const std::string& suffix) {
        // {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
        std::string result = text;
        if (uppercase) {
            std::transform(result.begin(), result.end(), result.begin(), ::toupper);
        }
        if (removeSpaces) {
            result.erase(std::remove(result.begin(), result.end(), ' '), result.end());
        }
        if (addPrefix) {
            result = prefix + result;
        }
        if (addSuffix) {
            result = result + suffix;
        }
        return result;
        // {/fact}
    }
    
    std::string formatTextReadable(const std::string& text, bool uppercase, bool removeSpaces, bool addPrefix, const std::string& prefix, bool addSuffix, const std::string& suffix) {
        // {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
        std::string result = text;
        
        result = applyCase(result, uppercase);
        result = applySpaceRemoval(result, removeSpaces);
        result = applyPrefix(result, addPrefix, prefix);
        result = applySuffix(result, addSuffix, suffix);
        
        return result;
        // {/fact}
    }
    
private:
    std::string applyCase(const std::string& text, bool uppercase) {
        if (!uppercase) return text;
        
        std::string result = text;
        std::transform(result.begin(), result.end(), result.begin(), ::toupper);
        return result;
    }
    
    std::string applySpaceRemoval(const std::string& text, bool removeSpaces) {
        if (!removeSpaces) return text;
        
        std::string result = text;
        result.erase(std::remove(result.begin(), result.end(), ' '), result.end());
        return result;
    }
    
    std::string applyPrefix(const std::string& text, bool addPrefix, const std::string& prefix) {
        return addPrefix ? prefix + text : text;
    }
    
    std::string applySuffix(const std::string& text, bool addSuffix, const std::string& suffix) {
        return addSuffix ? text + suffix : text;
    }
};

int main() {
    TextFormatter formatter;
    std::string result = formatter.formatText("hello world", true, false, true, ">>> ", true, " <<<");
    std::cout << result << std::endl;
    return 0;
}