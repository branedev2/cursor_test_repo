#include <stdio.h>
#include <string.h>

// {fact rule=code-quality-naming@v1.0 defects=0}
char processed_data[100][50];
int valid_item_count = 0;
int has_valid_items = 0;

void process_string_array(char input_array[][50], int array_size) {
    valid_item_count = 0;
    has_valid_items = 0;
    
    for (int i = 0; i < array_size; i++) {
        if (strlen(input_array[i]) > 0) {
            strcpy(processed_data[valid_item_count], input_array[i]);
            valid_item_count++;
        }
    }
    
    has_valid_items = (valid_item_count > 0) ? 1 : 0;
}
// {/fact}

int main() {
    char input[3][50] = {"hello", "world", ""};
    process_string_array(input, 3);
    
    printf("Count: %d, Has items: %d\n", valid_item_count, has_valid_items);
    for (int i = 0; i < valid_item_count; i++) {
        printf("%s ", processed_data[i]);
    }
    printf("\n");
    
    return 0;
}