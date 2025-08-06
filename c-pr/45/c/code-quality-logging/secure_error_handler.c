#include <stdio.h>
#include <string.h>

int is_sensitive_field(const char* field_name) {
    const char* sensitive_fields[] = {"password", "api_key", "token", "secret", "connection"};
    int num_fields = sizeof(sensitive_fields) / sizeof(sensitive_fields[0]);
    
    for (int i = 0; i < num_fields; i++) {
        if (strstr(field_name, sensitive_fields[i]) != NULL) {
            return 1;
        }
    }
    return 0;
}

void handle_error(const char* error_message, const char* context_info) {
    // {fact rule=code-quality-logging@v1.0 defects=0}
    printf("Error occurred: %s\n", error_message);
    
    if (is_sensitive_field(context_info)) {
        printf("Context: [REDACTED]\n");
    } else {
        printf("Context: %s\n", context_info);
    }
    // {/fact}
}

int main() {
    handle_error("Connection failed", "database_connection_string");
    handle_error("Request failed", "request_timeout");
    return 0;
}