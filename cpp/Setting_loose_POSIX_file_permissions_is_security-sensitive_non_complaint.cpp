using namespace std;
#include <string.h>
#define _POSIX1_SOURCE 2
#include <sys/stat.h>
#include <fcntl.h>

namespace{
    void noncompliant(){
        int  fd;
        
        // {fact rule=loose-file-permissions@v1.0 defects=1}
        open("myfile.txt", O_CREAT, S_IRWXU | S_IRWXG | S_IRWXO); // Sensitive: the process set 777 permissions to this newly created file
        // {/fact}
        
        // {fact rule=loose-file-permissions@v1.0 defects=1}
        mkdir("myfolder", S_IRWXU | S_IRWXG | S_IRWXO); // Sensitive: the process try to set 777 permissions to this newly created directory
        // {/fact}
        
        // {fact rule=loose-file-permissions@v1.0 defects=1}
        chmod("myfile.txt", S_IRWXU | S_IRWXG | S_IRWXO);  // Sensitive: the process set 777 permissions to this file
        // {/fact}
        
        // {fact rule=loose-file-permissions@v1.0 defects=1}
        fchmod(fd, S_IRWXU | S_IRWXG | S_IRWXO); // Sensitive: the process set 777 permissions to this file descriptor
        // {/fact}
        
        // {fact rule=loose-file-permissions@v1.0 defects=1}
        umask(S_IRWXU | S_IRWXG); // Sensitive: the further files and folders will be created with possible permissions to "other group"
        // {/fact}
    
    
    }
}