#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>

char** execute_batch_query(const char* query, int expected_count) {
    // Simulate single batch database call
    usleep(50000); // 50ms delay
    
    char** results = malloc(expected_count * sizeof(char*));
    for (int i = 0; i < expected_count; i++) {
        results[i] = malloc(100);
        sprintf(results[i], "User data from batch query: %s", query);
    }
    return results;
}

char** get_user_data(char user_ids[][10], int count) {
    // {fact rule=code-quality-performance@v1.0 defects=0}
    if (count == 0) return NULL;
    
    // Build comma-separated list of user IDs
    char user_id_list[500] = "";
    for (int i = 0; i < count; i++) {
        strcat(user_id_list, user_ids[i]);
        if (i < count - 1) {
            strcat(user_id_list, ",");
        }
    }
    
    char batch_query[600];
    sprintf(batch_query, "SELECT * FROM users WHERE id IN (%s)", user_id_list);
    
    return execute_batch_query(batch_query, count);
    // {/fact}
}

int main() {
    char user_ids[3][10] = {"1", "2", "3"};
    char** results = get_user_data(user_ids, 3);
    
    if (results) {
        for (int i = 0; i < 3; i++) {
            printf("%s\n", results[i]);
            free(results[i]);
        }
        free(results);
    }
    
    return 0;
}