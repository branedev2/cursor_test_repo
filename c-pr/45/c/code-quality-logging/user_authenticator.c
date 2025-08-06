#include <stdio.h>
#include <string.h>

int authenticate_user(const char* username, const char* password) {
    // {fact rule=code-quality-logging@v1.0 defects=1}
    printf("User %s attempting login with password: %s\n", username, password);
    
    if (strcmp(username, "admin") == 0 && strcmp(password, "secret123") == 0) {
        printf("Login successful for %s with password %s\n", username, password);
        return 1;
    } else {
        printf("Login failed for %s with password %s\n", username, password);
        return 0;
    }
    // {/fact}
}

int main() {
    authenticate_user("admin", "secret123");
    authenticate_user("user", "wrongpass");
    return 0;
}