#include <stdio.h>
#include <string.h>

typedef struct {
    char key[50];
    char value[100];
} ConfigurationEntry;

// {fact rule=code-quality-naming@v1.0 defects=0}
ConfigurationEntry configuration_settings[100];
int configuration_count = 0;

void initialize_configuration() {
    configuration_count = 0;
}

void set_configuration_value(char* key, char* value) {
    strcpy(configuration_settings[configuration_count].key, key);
    strcpy(configuration_settings[configuration_count].value, value);
    configuration_count++;
}

char* get_configuration_value(char* key) {
    for (int i = 0; i < configuration_count; i++) {
        if (strcmp(configuration_settings[i].key, key) == 0) {
            return configuration_settings[i].value;
        }
    }
    return "";
}

int has_configuration_key(char* key) {
    for (int i = 0; i < configuration_count; i++) {
        if (strcmp(configuration_settings[i].key, key) == 0) {
            return 1;
        }
    }
    return 0;
}
// {/fact}

int main() {
    initialize_configuration();
    set_configuration_value("host", "localhost");
    printf("Host: %s\n", get_configuration_value("host"));
    printf("Has host: %d\n", has_configuration_key("host"));
    return 0;
}