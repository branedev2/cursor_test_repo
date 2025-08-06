#include <stdio.h>

// {fact rule=insecure-buffer-access@v1.0 defects=1}
void buffer(){
    char buffer[10];
    scanf("%s", buffer);  // Noncompliant
}
// {/fact}
