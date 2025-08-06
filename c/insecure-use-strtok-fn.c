#include <stdio.h>

int DST_BUFFER_SIZE = 120;

int bad_code() {
    char str[DST_BUFFER_SIZE];
    fgets(str, DST_BUFFER_SIZE, stdin);
    //{fact rule=insecure-buffer-access@v1.0 defect=1}
    // ruleid:insecure-use-strtok-fn
    strtok(str, " ");
    //{/fact}
    printf("%s", str);
    return 0;
}

int main() {
    char str[DST_BUFFER_SIZE];
    char dest[DST_BUFFER_SIZE];
    fgets(str, DST_BUFFER_SIZE, stdin);
    //{fact rule=insecure-buffer-access@v1.0 defect=0}
    // ok:insecure-use-strtok-fn
    strtok_r(str, " ", *dest);
    //{/fact}
    printf("%s", str);
    return 0;
}

