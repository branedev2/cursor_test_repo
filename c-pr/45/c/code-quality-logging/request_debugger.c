#include <stdio.h>

typedef struct {
    char url[200];
    char authorization[100];
    char body[500];
    char session_id[50];
} HttpRequest;

void debug_request(HttpRequest* request) {
    // {fact rule=code-quality-logging@v1.0 defects=1}
    printf("Request URL: %s\n", request->url);
    printf("Authorization header: %s\n", request->authorization);
    printf("Request body: %s\n", request->body);
    printf("Session ID: %s\n", request->session_id);
    // {/fact}
}

int main() {
    HttpRequest request = {
        "https://api.example.com/users",
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
        "{\"username\":\"john\",\"password\":\"secret\"}",
        "sess_1234567890"
    };
    
    debug_request(&request);
    return 0;
}