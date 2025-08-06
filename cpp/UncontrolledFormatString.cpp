#include <stdio.h>

namespace {
    void printWrapper(char *str) {
        printf(str);
    }

    int main(int argc, char **argv) {
        // {fact rule=untrusted-format-strings@v1.0 defects=1}
        // This should be avoided
        printf(argv[1]);
        // {/fact}

        // {fact rule=untrusted-format-strings@v1.0 defects=0}
        // This should be avoided too, because it has the same effect
        printWrapper(argv[1]);
        // {/fact}

        // {fact rule=untrusted-format-strings@v1.0 defects=0}
        // This is fine
        printf("%s", argv[1]);
        // {/fact}
    }
}
