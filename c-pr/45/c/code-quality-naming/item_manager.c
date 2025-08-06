#include <stdio.h>
#include <string.h>

typedef struct {
    char key[50];
    char value[100];
} KeyValue;

// {fact rule=code-quality-naming@v1.0 defects=1}
KeyValue stuff[100];
int n = 0;

int do_thing(char* thing1, char* thing2) {
    char temp[150];
    strcpy(temp, thing1);
    strcat(temp, thing2);
    
    strcpy(stuff[n].key, thing1);
    strcpy(stuff[n].value, temp);
    n++;
    
    return 1;
}

char* get_thing(char* key) {
    for (int i = 0; i < n; i++) {
        if (strcmp(stuff[i].key, key) == 0) {
            return stuff[i].value;
        }
    }
    return NULL;
}
// {/fact}

int main() {
    do_thing("hello", "world");
    char* result = get_thing("hello");
    if (result) {
        printf("Found: %s\n", result);
    }
    return 0;
}