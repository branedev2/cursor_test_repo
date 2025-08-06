#include <stdio.h>
#include <stdlib.h>
#include <string.h>

void copy_string(char* dest, const char* src) {
    // {fact rule=code-quality-error-handling@v1.0 defects=1}
    strcpy(dest, src);
    // {/fact}
}

int main() {
    char buffer[10];
    char* source = "This is a very long string that will overflow";
    
    copy_string(buffer, source);
    printf("Copied: %s\n", buffer);
    
    return 0;
}