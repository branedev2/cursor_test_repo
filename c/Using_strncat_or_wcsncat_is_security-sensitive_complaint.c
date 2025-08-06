#include <stdlib.h>
#include <string.h>

int doSomethingWithgood_strncat_or_wcsncat(char *dest){
    //something
    return 1;
}

// {fact rule=classic-buffer-overflow@v1.0 defects=0}
int f_strncat_or_wcsncat_good(char *src) {
  char result[] = "Result: ";
  char dest[256];
  char *dest = malloc(strlen(result) + 1);
  strcpy(dest, result);
  strncat(dest, src, sizeof dest - sizeof result); // Compliant but may silently truncate
  return doSomethingWithgood_strncat_or_wcsncat(dest);
}
// {/fact}
