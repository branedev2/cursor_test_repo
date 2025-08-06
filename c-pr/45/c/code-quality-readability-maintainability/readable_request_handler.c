#include <stdio.h>
#include <string.h>
#include <stdlib.h>

typedef struct {
    char name[50];
    char value[50];
} DataItem;

DataItem* get_processed_data(DataItem* data, int count, const char* report_type) {
    // For this example, just return the same data
    // In real implementation, this would process based on report_type
    return data;
}

char* generate_csv_report(DataItem* data, int count, int include_headers) {
    char* result = malloc(2000);
    strcpy(result, "");
    
    if (include_headers && count > 0) {
        strcat(result, "Name,Value\n");
    }
    
    for (int i = 0; i < count; i++) {
        char line[100];
        sprintf(line, "%s,%s\n", data[i].name, data[i].value);
        strcat(result, line);
    }
    
    return result;
}

char* generate_json_report(DataItem* data, int count) {
    char* result = malloc(2000);
    strcpy(result, "[");
    
    for (int i = 0; i < count; i++) {
        char item[100];
        sprintf(item, "{\"name\":\"%s\",\"value\":\"%s\"}", data[i].name, data[i].value);
        strcat(result, item);
        if (i < count - 1) strcat(result, ",");
    }
    
    strcat(result, "]");
    return result;
}

char* process_report(DataItem* data, int count, const char* report_type, int include_headers, const char* format) {
    // {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
    DataItem* processed_data = get_processed_data(data, count, report_type);
    
    if (strcmp(format, "csv") == 0) {
        return generate_csv_report(processed_data, count, include_headers);
    } else if (strcmp(format, "json") == 0) {
        return generate_json_report(processed_data, count);
    } else {
        char* error_result = malloc(100);
        sprintf(error_result, "Unsupported format: %s", format);
        return error_result;
    }
    // {/fact}
}

int main() {
    DataItem data[] = {{"item1", "value1"}, {"item2", "value2"}};
    char* result = process_report(data, 2, "summary", 1, "csv");
    printf("%s", result);
    free(result);
    return 0;
}