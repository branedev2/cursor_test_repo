using namespace std;
#include <string.h>
#include <cstdlib>

namespace{
    int doSomethingWith(char *dest){
        return atoi(dest);
    }
    
    // {fact rule=insecure-buffer-access@v1.0 defects=0}
    int f(char *src) {
      char dest[256];
      dest[sizeof dest - 1] = 0;
      strncpy(dest, src, sizeof(dest)); // Compliant
      if (dest[sizeof dest - 1] != 0) {
        // Handle error
      }
      return doSomethingWith(dest);
    }
    // {/fact}
    
    int main() {
      return 1;
    }
}


