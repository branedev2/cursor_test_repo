#include <stdio.h>
#include <string.h>

typedef struct {
    char email[100];
    char phone[20];
    char ssn[12];
    char name[50];
    char address[200];
    char city[50];
} UserProfile;

int update_profile(const char* user_id, UserProfile* profile) {
    // {fact rule=code-quality-logging@v1.0 defects=0}
    printf("Updating profile for user %s\n", user_id);
    
    // Only log non-sensitive fields
    printf("Updated fields: name, address, city\n");
    
    // Update logic
    return 1;
    // {/fact}
}

int main() {
    UserProfile profile = {"user@example.com", "555-1234", "123-45-6789", "John Doe", "123 Main St", "Anytown"};
    update_profile("user123", &profile);
    return 0;
}