#include <stdio.h>

void handle_error(const char* error_message, const char* db_connection, const char* api_key) {
    // {fact rule=code-quality-logging@v1.0 defects=1}
    printf("Error occurred: %s\n", error_message);
    printf("Database connection: %s\n", db_connection);
    printf("API key: %s\n", api_key);
    // {/fact}
}

int main() {
    handle_error("Connection failed", "mysql://user:pass@localhost:3306/db", "sk-1234567890abcdef");
    return 0;
}