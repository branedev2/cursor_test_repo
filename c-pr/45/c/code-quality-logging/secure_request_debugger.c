#include <stdio.h>
#include <string.h>

typedef struct {
    char url[200];
    char method[10];
    char content_type[50];
    char body[500];
    int has_session;
} HttpRequest;

void debug_request(HttpRequest* request) {
    // {fact rule=code-quality-logging@v1.0 defects=0}
    printf("Request URL: %s\n", request->url);
    printf("Request method: %s\n", request->method);
    printf("Content-Type: %s\n", request->content_type);
    printf("Request size: %lu bytes\n", strlen(request->body));
    printf("Session active: %s\n", request->has_session ? "yes" : "no");
    // {/fact}
}

int main() {
    HttpRequest request = {
        "https://api.example.com/users",
        "POST",
        "application/json",
        "{\"username\":\"john\",\"email\":\"john@example.com\"}",
        1
    };
    
    debug_request(&request);
    return 0;
}