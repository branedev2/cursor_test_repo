#include <stdio.h>
#include <string.h>
#include <regex.h>
#include <stdlib.h>

// {fact rule=code-quality-performance@v1.0 defects=0}
static regex_t email_regex;
static regex_t phone_regex;
static int patterns_compiled = 0;

void compile_patterns() {
    if (!patterns_compiled) {
        regcomp(&email_regex, "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$", REG_EXTENDED);
        regcomp(&phone_regex, "^[0-9]{3}-[0-9]{3}-[0-9]{4}$", REG_EXTENDED);
        patterns_compiled = 1;
    }
}

int validate_email(const char* email) {
    compile_patterns();
    return (regexec(&email_regex, email, 0, NULL, 0) == 0) ? 1 : 0;
}

int validate_phone(const char* phone) {
    compile_patterns();
    return (regexec(&phone_regex, phone, 0, NULL, 0) == 0) ? 1 : 0;
}

void cleanup_patterns() {
    if (patterns_compiled) {
        regfree(&email_regex);
        regfree(&phone_regex);
        patterns_compiled = 0;
    }
}
// {/fact}

int main() {
    printf("Email valid: %d\n", validate_email("test@example.com"));
    printf("Phone valid: %d\n", validate_phone("123-456-7890"));
    cleanup_patterns();
    return 0;
}