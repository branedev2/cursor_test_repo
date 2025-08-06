#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>

char* execute_query(const char* query) {
    // Simulate database call
    usleep(10000); // 10ms delay
    char* result = malloc(100);
    sprintf(result, "User data for query: %s", query);
    return result;
}

char** get_user_data(char user_ids[][10], int count) {
    // {fact rule=code-quality-performance@v1.0 defects=1}
    char** results = malloc(count * sizeof(char*));
    
    for (int i = 0; i < count; i++) {
        char query[100];
        sprintf(query, "SELECT * FROM users WHERE id = %s", user_ids[i]);
        results[i] = execute_query(query);
    }
    
    return results;
    // {/fact}
}

int main() {
    char user_ids[3][10] = {"1", "2", "3"};
    char** results = get_user_data(user_ids, 3);
    
    for (int i = 0; i < 3; i++) {
        printf("%s\n", results[i]);
        free(results[i]);
    }
    free(results);
    
    return 0;
}