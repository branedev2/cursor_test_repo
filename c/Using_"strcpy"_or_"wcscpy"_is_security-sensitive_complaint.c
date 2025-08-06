#include <stdlib.h>
#include <string.h>

int doSomethingWithgood(char *dest){
    //something
    return 1;
}

// {fact rule=classic-buffer-overflow@v1.0 defects=0}
int f_good(char *src) {
  char *dest = malloc(strlen(src) + 1); // For the final 0
  strcpy(dest, src); // Compliant: we made sure the buffer is large enough
  int r= doSomethingWithgood(dest);
  free(dest);
  return r;
}
// {/fact}