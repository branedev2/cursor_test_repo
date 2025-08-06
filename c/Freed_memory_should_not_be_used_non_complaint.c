#include <stdlib.h>

void freed_memory_should_not_be_used_non_complaint() // any function 
{
// {fact rule=use-after-free@v1.0 defects=1}
char *cp = (char*)malloc(sizeof(char)*10); // memory is allocated
// all bytes in cp can be used here
free(cp); // memory is released
cp[9] = 0; // Noncompliant: memory is used after it was released
// {/fact}

// {fact rule=use-after-free@v1.0 defects=1}
int *intArray = malloc(sizeof(int) *20); // memory is allocated
// elements of intArray can be written or read here
intArray=NULL; // memory is released
intArray[3] = 10; // Noncompliant: memory is used after it was released
// {/fact}

}
