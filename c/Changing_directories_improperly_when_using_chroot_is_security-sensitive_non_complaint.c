#include <stdlib.h>
#include <unistd.h>
#include <stdio.h>

void func_bad_changing_directories(){
    // {fact rule=insecure-use-of-chroot@v1.0 defects=1}
    const char* root_dir = "/jail/";
    chroot(root_dir); // Sensitive: no chdir before or after chroot, and missing check of return value
    // {/fact}
    
    // {fact rule=insecure-use-of-chroot@v1.0 defects=1}
    const char* root_dir1 = "/jail/";
    chroot(root_dir1); // Sensitive: missing check of the return value
    const char* any_dir = "/any/";
    chdir(any_dir); // Sensitive: missing check of the return value
    // {/fact}

}
