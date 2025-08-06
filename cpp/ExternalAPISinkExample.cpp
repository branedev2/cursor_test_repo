// {fact rule=improper-input-validation@v1.0 defects=1}
#include <cstdio>
#include <cstring>

namespace {
    void do_get(FILE* request, FILE* response) {
      char page[1024];
      fgets(page, 1024, request);

      char buffer[1024];
      strcat(buffer, "The page \"");
      strcat(buffer, page);
      strcat(buffer, "\" was not found.");

      fputs(buffer, response);
    }
    // {/fact}
}
