#include <stdio.h>
// {fact rule=insecure-buffer-access@v1.0 defects=1}
char str[20];
gets(str); // Noncompliant; `str` buffer size is not checked and it is vulnerable to overflows
// {/fact}

#include <string.h>
// {fact rule=insecure-buffer-access@v1.0 defects=1}
char buffer[20];
strcpy(buffer, input); // Noncompliant; `input` length is not checked and it may overflow `buffer`.
// {/fact}