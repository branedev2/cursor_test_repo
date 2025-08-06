#include <stdio.h>
#include <string.h>
#include <regex.h>
#include <stdlib.h>

int validate_email(const char* email) {
    // {fact rule=code-quality-performance@v1.0 defects=1}
    regex_t regex;
    int result = regcomp(&regex, "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$", REG_EXTENDED);
    if (result != 0) return 0;
    
    result = regexec(&regex, email, 0, NULL, 0);
    regfree(&regex);
    
    return (result == 0) ? 1 : 0;
    // {/fact}
}

int validate_phone(const char* phone) {
    regex_t regex;
    int result = regcomp(&regex, "^[0-9]{3}-[0-9]{3}-[0-9]{4}$", REG_EXTENDED);
    if (result != 0) return 0;
    
    result = regexec(&regex, phone, 0, NULL, 0);
    regfree(&regex);
    
    return (result == 0) ? 1 : 0;
}

int main() {
    printf("Email valid: %d\n", validate_email("test@example.com"));
    printf("Phone valid: %d\n", validate_phone("123-456-7890"));
    return 0;
}