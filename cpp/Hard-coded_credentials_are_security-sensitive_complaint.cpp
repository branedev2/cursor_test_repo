#include <iostream>
using namespace std;

namespace{
    // Stubs
    class dbi_conn {
    
    };
    
    dbi_conn dbi_conn_new(char* db) {
    
    }
    
    string getDatabasePassword() {
        return "";
    }
    
    void dbi_conn_set_option(dbi_conn conn, string pass, string obj) {
    
    }
    
    int main() {
        // {fact rule=hardcoded-credentials@v1.0 defects=0}
        dbi_conn conn = dbi_conn_new("mysql");
        string password = getDatabasePassword(); // Compliant
        // {/fact}
    
        // {fact rule=hardcoded-credentials@v1.0 defects=0}
        dbi_conn_set_option(conn, "password", password.c_str()); // Compliant
        // {/fact}
    }
    

}