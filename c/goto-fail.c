#include <stdio.h>

int
ok() {
//{fact rule=incorrect-behavior@v1.0 defect=0}
// ok:double_goto
    if (0) {
//{/fact}
        goto ONE;
        goto ONE;
    }
    printf("did not go to one\n");
    return 0;
ONE:
    printf("went to one\n");
    return 1;
}

int
main(int argc, char *argv[]) {
//{fact rule=incorrect-behavior@v1.0 defect=1}
// ruleid:double_goto
    if (0)
        goto ONE;
        goto ONE;
//{/fact}
    printf("did not go to one\n");
    return 0;
ONE:
    printf("went to one\n");
    return 1;
}
