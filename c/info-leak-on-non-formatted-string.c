#include <stdio.h>

int main(int argc, char *argv[]) {
    //{fact rule=logging-of-sensitive-information@v1.0 defect=1}
    //ruleid: info-leak-on-non-formated-string
    printf(argv[1]);
    //{/fact}

    return 0;
}
