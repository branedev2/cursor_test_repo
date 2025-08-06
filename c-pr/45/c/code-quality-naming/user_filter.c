#include <stdio.h>
#include <string.h>

typedef struct {
    char username[50];
    char hashed_password[100];
} UserCredential;

// {fact rule=code-quality-naming@v1.0 defects=0}
UserCredential user_credentials[100];
int credential_count = 0;

int store_user_credentials(char* username, char* password) {
    char hashed_password[100];
    // Simplified hashing - just concatenate username and password
    strcpy(hashed_password, username);
    strcat(hashed_password, password);
    
    strcpy(user_credentials[credential_count].username, username);
    strcpy(user_credentials[credential_count].hashed_password, hashed_password);
    credential_count++;
    
    return 1;
}

char* get_user_credentials(char* username) {
    for (int i = 0; i < credential_count; i++) {
        if (strcmp(user_credentials[i].username, username) == 0) {
            return user_credentials[i].hashed_password;
        }
    }
    return NULL;
}
// {/fact}

int main() {
    store_user_credentials("john", "password123");
    char* creds = get_user_credentials("john");
    if (creds) {
        printf("Found credentials for john\n");
    }
    return 0;
}