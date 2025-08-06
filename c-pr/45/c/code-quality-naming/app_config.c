#include <stdio.h>
#include <string.h>

typedef struct {
    char key[50];
    char value[100];
} ConfigEntry;

// {fact rule=code-quality-naming@v1.0 defects=1}
ConfigEntry cfg[100];
int cnt = 0;

void init() {
    cnt = 0;
}

void set(char* k, char* v) {
    strcpy(cfg[cnt].key, k);
    strcpy(cfg[cnt].value, v);
    cnt++;
}

char* get(char* k) {
    for (int i = 0; i < cnt; i++) {
        if (strcmp(cfg[i].key, k) == 0) {
            return cfg[i].value;
        }
    }
    return "";
}

int chk(char* k) {
    for (int i = 0; i < cnt; i++) {
        if (strcmp(cfg[i].key, k) == 0) {
            return 1;
        }
    }
    return 0;
}
// {/fact}

int main() {
    init();
    set("host", "localhost");
    printf("Host: %s\n", get("host"));
    printf("Has host: %d\n", chk("host"));
    return 0;
}