using namespace std;
#include <stdio.h>
#include <string.h>

namespace{
    void noncompliant(char *input){
        // {fact rule=detect-buffer-noassert@v1.0 defects=1}
        char str[20];
        fgets(str, sizeof(str), stdin); // Noncompliant; `str` buffer size is not checked and it is vulnerable to overflows
        // {/fact}
        
        // {fact rule=detect-buffer-noassert@v1.0 defects=1}
        char buffer[20];
        strcpy(buffer, input); // Noncompliant; `input` length is not checked and it may overflow `buffer`
        // {/fact}
    }
}
