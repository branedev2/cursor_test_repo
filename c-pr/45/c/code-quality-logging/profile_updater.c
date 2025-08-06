#include <stdio.h>

typedef struct {
    char email[100];
    char phone[20];
    char ssn[12];
    char name[50];
} UserProfile;

int update_profile(const char* user_id, UserProfile* profile) {
    // {fact rule=code-quality-logging@v1.0 defects=1}
    printf("Updating profile for user %s\n", user_id);
    printf("Email: %s\n", profile->email);
    printf("Phone: %s\n", profile->phone);
    printf("SSN: %s\n", profile->ssn);
    printf("Name: %s\n", profile->name);
    
    // Update logic
    return 1;
    // {/fact}
}

int main() {
    UserProfile profile = {"user@example.com", "555-1234", "123-45-6789", "John Doe"};
    update_profile("user123", &profile);
    return 0;
}