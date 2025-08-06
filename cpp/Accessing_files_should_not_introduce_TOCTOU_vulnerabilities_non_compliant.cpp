#include <iostream>
#include <cstdio>
#include <cerrno>
using namespace std;


namespace {
  int access(const char *file, const char *F_OK){
      if (sizeof(file) == sizeof(F_OK)){
          return 1;
      }
      else{
          return 0;
      }
  }

  // {fact rule=file-race-bad@v1.0 defects=1}
  FILE *fopen_if_not_exists(const char *file, const char *F_OK) {
    if (access(file, F_OK) == -1 && errno == ENOENT) {
      FILE *f = fopen(file, "w"); // Noncompliant

      return f;
    }

    return nullptr;
  }
  // {/fact}
  int main() {
      return 1;
    }

}

