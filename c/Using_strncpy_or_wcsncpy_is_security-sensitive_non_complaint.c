#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int doSomethingWith_strncpy_or_wcsncpy_bad(char *dest){
    //something
    return 1;
}

// {fact rule=classic-buffer-overflow@v1.0 defects=1}
int f_strncpy_or_wcsncpy_bad(char *src) {
  char dest[256];
  strncpy(dest, src, sizeof(dest)); // Sensitive: might silently truncate
  return doSomethingWith_strncpy_or_wcsncpy_bad(dest);
}
// {/fact}


