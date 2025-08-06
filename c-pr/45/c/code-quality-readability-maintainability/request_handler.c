#include <stdio.h>
#include <string.h>
#include <stdlib.h>

typedef struct {
    char name[50];
    char value[50];
} DataItem;

char* process_report(DataItem* data, int count, const char* type, int include_headers, const char* format) {
    // {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
    char* result = malloc(2000);
    strcpy(result, "");
    
    if (strcmp(type, "summary") == 0) {
        if (strcmp(format, "csv") == 0) {
            if (include_headers) strcat(result, "Name,Value\n");
            for (int i = 0; i < count; i++) {
                char line[100];
                sprintf(line, "%s,%s\n", data[i].name, data[i].value);
                strcat(result, line);
            }
        } else if (strcmp(format, "json") == 0) {
            strcat(result, "[");
            for (int i = 0; i < count; i++) {
                char item[100];
                sprintf(item, "{\"name\":\"%s\",\"value\":\"%s\"}", data[i].name, data[i].value);
                strcat(result, item);
                if (i < count - 1) strcat(result, ",");
            }
            strcat(result, "]");
        }
    } else if (strcmp(type, "detailed") == 0) {
        strcat(result, "Detailed report processing...");
    }
    
    return result;
    // {/fact}
}

int main() {
    DataItem data[] = {{"item1", "value1"}, {"item2", "value2"}};
    char* result = process_report(data, 2, "summary", 1, "csv");
    printf("%s", result);
    free(result);
    return 0;
}