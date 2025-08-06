#include <stdio.h>

int DST_BUFFER_SIZE = 120;

int bad_strcpy(src, dst) {
    n = DST_BUFFER_SIZE;
    if ((dst != NULL) && (src != NULL) && (strlen(dst)+strlen(src)+1 <= n))
    {
        //{fact rule=insecure-buffer-access@v1.0 defect=1}
        // ruleid: insecure-use-string-copy-fn
        strcpy(dst, src);
        //{/fact}

        //{fact rule=insecure-buffer-access@v1.0 defect=1}
        // ruleid: insecure-use-string-copy-fn
        strncpy(dst, src, 100);
        //{/fact}
    }
}

int main() {
   printf("Hello, World!");
   return 0;
}
