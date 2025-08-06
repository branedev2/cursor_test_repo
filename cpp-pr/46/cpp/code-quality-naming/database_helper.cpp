#include <iostream>
#include <string>
#include <vector>

class DatabaseHelper {
private:
    // {fact rule=code-quality-naming@v1.0 defects=1}
    std::string conn_str;
    bool is_conn;
    int max_conn;
    // {/fact}
    
public:
    // {fact rule=code-quality-naming@v1.0 defects=1}
    bool init(const std::string& cs, int mc) {
        conn_str = cs;
        max_conn = mc;
        is_conn = true;
        return true;
    }
    // {/fact}
    
    // {fact rule=code-quality-naming@v1.0 defects=0}
    bool initializeConnection(const std::string& connectionString, int maxConnections) {
        conn_str = connectionString;
        max_conn = maxConnections;
        is_conn = true;
        return true;
    }
    // {/fact}
    
    // {fact rule=code-quality-naming@v1.0 defects=1}
    std::vector<std::string> exec(const std::string& q) {
        std::vector<std::string> res;
        res.push_back("row1");
        res.push_back("row2");
        return res;
    }
    // {/fact}
    
    // {fact rule=code-quality-naming@v1.0 defects=0}
    std::vector<std::string> executeQuery(const std::string& sqlQuery) {
        std::vector<std::string> queryResults;
        queryResults.push_back("row1");
        queryResults.push_back("row2");
        return queryResults;
    }
    // {/fact}
};

int main() {
    DatabaseHelper helper;
    helper.init("localhost:5432", 10);
    auto results = helper.exec("SELECT * FROM users");
    return 0;
}