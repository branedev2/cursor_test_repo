using namespace std;
#include <string.h>
#define _POSIX1_SOURCE 2
#include <sys/stat.h>
#include <fcntl.h>

namespace{
    void compliant(){
        int  fd;
        
        // {fact rule=loose-file-permissions@v1.0 defects=0}
        open("myfile.txt", O_CREAT, S_IRWXU | S_IRWXG); // Compliant
        // {/fact}
        
        // {fact rule=loose-file-permissions@v1.0 defects=0}
        mkdir("myfolder", S_IRWXU | S_IRWXG); // Compliant
        // {/fact}
        
        // {fact rule=loose-file-permissions@v1.0 defects=0}
        chmod("myfile.txt", S_IRWXU | S_IRWXG);  // Compliant
        // {/fact}
        
        
        // {fact rule=loose-file-permissions@v1.0 defects=0}
        fchmod(fd, S_IRWXU | S_IRWXG); // Compliant
        // {/fact}
        
        // {fact rule=loose-file-permissions@v1.0 defects=0}
        umask(S_IRWXO); // Compliant: further created files or directories will not have permissions set for "other group"
        // {/fact}
    
    
    }
    
    int main() {
        return 1;
    }
}