using namespace std;
#include <cstdio>

namespace {
  // {fact rule=insecure-temp-file@v1.0 defects=1}
  void f(char *tempData) {
    char *path = tmpnam(NULL); // Sensitive
    FILE* f = fopen(path, "w");
    fputs(tempData, f);
    fclose(f);
  }
  // {/fact}

}

