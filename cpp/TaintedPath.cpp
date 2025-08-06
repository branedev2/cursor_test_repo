#include <iostream>
#include <cstring>

namespace {
    int main(int argc, char** argv) {
      char *userAndFile = argv[2];

      {
        // {fact rule=path-traversal@v1.0 defects=1}
        char fileBuffer[FILENAME_MAX] = "/home/";
        char *fileName = fileBuffer;
        size_t len = strlen(fileName);
        strncat(fileName+len, userAndFile, FILENAME_MAX-len-1);
        // BAD: a string from the user is used in a filename
        fopen(fileName, "wb+");
        // {/fact}
      }

      {
        // {fact rule=path-traversal@v1.0 defects=0}
        char fileBuffer[FILENAME_MAX] = "/home/";
        char *fileName = fileBuffer;
        size_t len = strlen(fileName);
        // GOOD: use a fixed file
        char* fixed = "jim/file.txt";
        strncat(fileName+len, fixed, FILENAME_MAX-len-1);
        fopen(fileName, "wb+");
        // {/fact}
      }
    }
}

