#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int copy_string(char* dest, size_t dest_size, const char* src) {
    // {fact rule=code-quality-error-handling@v1.0 defects=0}
    if (dest == NULL || src == NULL) {
        fprintf(stderr, "Error: NULL pointer passed to copy_string\n");
        return -1;
    }
    
    if (dest_size == 0) {
        fprintf(stderr, "Error: destination buffer size is zero\n");
        return -1;
    }
    
    size_t src_len = strlen(src);
    if (src_len >= dest_size) {
        fprintf(stderr, "Error: source string too long for destination buffer\n");
        return -1;
    }
    
    strncpy(dest, src, dest_size - 1);
    dest[dest_size - 1] = '\0';
    return 0;
    // {/fact}
}

int main() {
    char buffer[10];
    char* source = "Hello";
    
    if (copy_string(buffer, sizeof(buffer), source) == 0) {
        printf("Copied: %s\n", buffer);
    }
    
    return 0;
}