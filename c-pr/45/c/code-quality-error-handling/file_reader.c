#include <stdio.h>
#include <stdlib.h>

char* read_file(const char* filename) {
    // {fact rule=code-quality-error-handling@v1.0 defects=1}
    FILE* file = fopen(filename, "r");
    char* buffer = malloc(1024);
    fread(buffer, 1, 1024, file);
    fclose(file);
    return buffer;
    // {/fact}
}

int main() {
    char* content = read_file("test.txt");
    printf("%s\n", content);
    free(content);
    return 0;
}