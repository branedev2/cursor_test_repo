#include <stdio.h>
#include <string.h>
#include <stdlib.h>

char* build_message(char words[][50], int count) {
    // {fact rule=code-quality-performance@v1.0 defects=0}
    int total_length = 0;
    
    // Calculate total length needed
    for (int i = 0; i < count; i++) {
        total_length += strlen(words[i]) + 1; // +1 for space
    }
    
    char* result = malloc(total_length + 1); // +1 for null terminator
    if (result == NULL) return NULL;
    
    strcpy(result, "");
    
    for (int i = 0; i < count; i++) {
        strcat(result, words[i]);
        if (i < count - 1) {
            strcat(result, " ");
        }
    }
    
    return result;
    // {/fact}
}

int main() {
    char words[3][50] = {"Hello", "World", "Test"};
    char* message = build_message(words, 3);
    if (message) {
        printf("%s\n", message);
        free(message);
    }
    return 0;
}