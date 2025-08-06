#include <stdio.h>
#include <string.h>
#include <stdlib.h>

char* build_message(char words[][50], int count) {
    // {fact rule=code-quality-performance@v1.0 defects=1}
    char* result = malloc(1000);
    strcpy(result, "");
    
    for (int i = 0; i < count; i++) {
        strcat(result, words[i]);
        strcat(result, " ");
    }
    
    return result;
    // {/fact}
}

int main() {
    char words[3][50] = {"Hello", "World", "Test"};
    char* message = build_message(words, 3);
    printf("%s\n", message);
    free(message);
    return 0;
}