#include<stdio.h>
#include<iostream>
#include<unistd.h>
#include <fcntl.h>

using namespace std;

namespace{
    void noncompliant(){
        // {fact rule=check-result-of-file-mkdir@v1.0 defects=1}
        const char* any_dir = "/any/";
        chdir(any_dir); // Sensitive: missing check of the return value
        // {/fact}
        
        
        // {fact rule=check-result-of-file-mkdir@v1.0 defects=1}
        int fd = open(any_dir, O_RDONLY | O_DIRECTORY);
        fchdir(fd); // Sensitive: missing check of the return value
        // {/fact}
    }
}