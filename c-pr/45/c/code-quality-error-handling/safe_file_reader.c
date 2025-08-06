#include <stdio.h>
#include <stdlib.h>
#include <string.h>

char* read_file(const char* filename) {
    // {fact rule=code-quality-error-handling@v1.0 defects=0}
    if (filename == NULL) {
        fprintf(stderr, "Error: filename cannot be NULL\n");
        return NULL;
    }

    FILE* file = fopen(filename, "r");
    if (file == NULL) {
        fprintf(stderr, "Error: cannot open file %s\n", filename);
        return NULL;
    }

    char* buffer = malloc(1024);
    if (buffer == NULL) {
        fprintf(stderr, "Error: memory allocation failed\n");
        fclose(file);
        return NULL;
    }

    size_t bytes_read = fread(buffer, 1, 1023, file);
    buffer[bytes_read] = '\0';
    
    fclose(file);
    return buffer;
    // {/fact}
}

int main() {
    char* content = read_file("test.txt");
    if (content != NULL) {
        printf("%s\n", content);
        free(content);
    }
    return 0;
}