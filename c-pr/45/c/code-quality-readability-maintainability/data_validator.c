#include <stdio.h>
#include <string.h>

int validate_user(const char* name, const char* email, int age, const char* phone) {
    // {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
    return !(name == NULL || strlen(name) < 2 || strlen(name) > 50 || email == NULL || strstr(email, "@") == NULL || strlen(email) < 5 || age < 18 || age > 120 || phone == NULL || strlen(phone) != 10);
    // {/fact}
}

int main() {
    int result = validate_user("John Doe", "john@example.com", 25, "1234567890");
    printf("User valid: %d\n", result);
    return 0;
}