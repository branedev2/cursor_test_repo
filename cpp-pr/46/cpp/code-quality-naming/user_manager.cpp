#include <iostream>
#include <string>
#include <vector>

class UserManager {
private:
    // {fact rule=code-quality-naming@v1.0 defects=1}
    std::vector<std::string> u;
    int cnt;
    bool flg;
    // {/fact}
    
    // {fact rule=code-quality-naming@v1.0 defects=0}
    std::vector<std::string> userList;
    int activeUserCount;
    bool isSystemInitialized;
    // {/fact}
    
public:
    // {fact rule=code-quality-naming@v1.0 defects=1}
    void add(const std::string& n) {
        u.push_back(n);
        cnt++;
    }
    // {/fact}
    
    // {fact rule=code-quality-naming@v1.0 defects=0}
    void addUser(const std::string& username) {
        userList.push_back(username);
        activeUserCount++;
    }
    // {/fact}
    
    // {fact rule=code-quality-naming@v1.0 defects=1}
    bool del(int idx) {
        if (idx >= 0 && idx < u.size()) {
            u.erase(u.begin() + idx);
            cnt--;
            return true;
        }
        return false;
    }
    // {/fact}
};

int main() {
    UserManager manager;
    manager.add("john");
    return 0;
}