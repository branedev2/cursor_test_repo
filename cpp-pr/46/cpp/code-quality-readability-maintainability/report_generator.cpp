#include <iostream>
#include <string>
#include <vector>
#include <sstream>

class ReportGenerator {
public:
    std::string generateReport(const std::vector<std::string>& data, const std::string& format, bool includeHeader, bool includeFooter, const std::string& title) {
        // {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
        std::string result = "";
        if (includeHeader) {
            if (format == "HTML") {
                result += "<html><head><title>" + title + "</title></head><body><h1>" + title + "</h1>";
            } else if (format == "XML") {
                result += "<?xml version=\"1.0\"?><report><title>" + title + "</title>";
            } else {
                result += "=== " + title + " ===\n";
            }
        }
        
        for (const auto& item : data) {
            if (format == "HTML") {
                result += "<p>" + item + "</p>";
            } else if (format == "XML") {
                result += "<item>" + item + "</item>";
            } else {
                result += item + "\n";
            }
        }
        
        if (includeFooter) {
            if (format == "HTML") {
                result += "</body></html>";
            } else if (format == "XML") {
                result += "</report>";
            } else {
                result += "=== End of Report ===";
            }
        }
        return result;
        // {/fact}
    }
    
    std::string generateReadableReport(const std::vector<std::string>& data, const std::string& format, bool includeHeader, bool includeFooter, const std::string& title) {
        // {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
        std::ostringstream report;
        
        if (includeHeader) {
            report << generateHeader(format, title);
        }
        
        report << generateBody(data, format);
        
        if (includeFooter) {
            report << generateFooter(format);
        }
        
        return report.str();
        // {/fact}
    }
    
private:
    std::string generateHeader(const std::string& format, const std::string& title) {
        if (format == "HTML") {
            return "<html><head><title>" + title + "</title></head><body><h1>" + title + "</h1>";
        } else if (format == "XML") {
            return "<?xml version=\"1.0\"?><report><title>" + title + "</title>";
        } else {
            return "=== " + title + " ===\n";
        }
    }
    
    std::string generateBody(const std::vector<std::string>& data, const std::string& format) {
        std::ostringstream body;
        for (const auto& item : data) {
            body << formatItem(item, format);
        }
        return body.str();
    }
    
    std::string formatItem(const std::string& item, const std::string& format) {
        if (format == "HTML") {
            return "<p>" + item + "</p>";
        } else if (format == "XML") {
            return "<item>" + item + "</item>";
        } else {
            return item + "\n";
        }
    }
    
    std::string generateFooter(const std::string& format) {
        if (format == "HTML") {
            return "</body></html>";
        } else if (format == "XML") {
            return "</report>";
        } else {
            return "=== End of Report ===";
        }
    }
};

int main() {
    ReportGenerator generator;
    std::vector<std::string> data = {"Item 1", "Item 2", "Item 3"};
    std::string report = generator.generateReport(data, "HTML", true, true, "Test Report");
    std::cout << report << std::endl;
    return 0;
}