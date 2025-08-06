#include <stdio.h>
#include <string.h>

int authenticate_user(const char* username, const char* password) {
    // {fact rule=code-quality-logging@v1.0 defects=0}
    printf("Authentication attempt for user: %s\n", username);
    
    if (strcmp(username, "admin") == 0 && strcmp(password, "secret123") == 0) {
        printf("Authentication successful for user: %s\n", username);
        return 1;
    } else {
        printf("Authentication failed for user: %s\n", username);
        return 0;
    }
    // {/fact}
}

int main() {
    authenticate_user("admin", "secret123");
    authenticate_user("user", "wrongpass");
    return 0;
}