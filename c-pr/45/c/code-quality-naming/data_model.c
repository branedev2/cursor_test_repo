#include <stdio.h>
#include <string.h>

// {fact rule=code-quality-naming@v1.0 defects=1}
char d[100][50];
int c = 0;
int f = 0;

void p(char arr[][50], int n) {
    c = 0;
    f = 0;
    
    for (int i = 0; i < n; i++) {
        if (strlen(arr[i]) > 0) {
            strcpy(d[c], arr[i]);
            c++;
        }
    }
    
    f = (c > 0) ? 1 : 0;
}
// {/fact}

int main() {
    char input[3][50] = {"hello", "world", ""};
    p(input, 3);
    
    printf("Count: %d, Flag: %d\n", c, f);
    for (int i = 0; i < c; i++) {
        printf("%s ", d[i]);
    }
    printf("\n");
    
    return 0;
}