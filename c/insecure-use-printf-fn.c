#include <stdio.h>

void bad_vsprintf(int argc, char **argv) {
    char format[256];
//{fact rule=untrusted-format-strings@v1.0 defect=0}
    //ok: insecure-use-printf-fn
    strncpy(format, argv[1], 255);
//{/fact}
    char buffer[100];
    vsprintf (buffer,format, argc);

//{fact rule=untrusted-format-strings@v1.0 defect=1}
    //ruleid: insecure-use-printf-fn
    vsprintf(buffer, argv[1], args);
//{/fact}

//{fact rule=untrusted-format-strings@v1.0 defect=0}
    //ok: insecure-use-printf-fn
     vsprintf(buffer, "%s\n", argv[0]);
//{/fact}

//{fact rule=untrusted-format-strings@v1.0 defect=1}
    //ruleid: insecure-use-printf-fn
    vsnprintf(buffer, format, args, argc);
//{/fact}
}

void bad_sprintf(int argc, char **argv) {
    char format[256];

    int a = 10, b = 20, c=30;
//{fact rule=untrusted-format-strings@v1.0 defect=0}
    //ok: insecure-use-printf-fn
    strcpy(format, argv[1]);
//{/fact}
    char buffer[200];
    sprintf(buffer, format, a, b, c);


    char buffer[256];
    int i = 3;
//{fact rule=untrusted-format-strings@v1.0 defect=1}
    //ruleid: insecure-use-printf-fn
    sprintf(buffer, argv[2], a, b, c);
//{/fact}

//{fact rule=untrusted-format-strings@v1.0 defect=0}
    //ok: insecure-use-printf-fn
    sprintf("%s\n",argv[0]);
//{/fact}

//{ex-fact rule=untrusted-format-strings@v1.0 defect=0}
    //ok: insecure-use-printf-fn
    //snprintf(buffer, format, a,b,c);
//{ex-/fact}
}

void bad_printf() {
//{fact rule=untrusted-format-strings@v1.0 defect=1}
    //ruleid: insecure-use-printf-fn
    printf(argv[2], 1234);
//{/fact}

    char format[300];
//{fact rule=untrusted-format-strings@v1.0 defect=1}
    //ruleid: insecure-use-printf-fn
    strcpy(format, argv[1]);
    printf(format, 1234);
//{/fact}

//{fact rule=untrusted-format-strings@v1.0 defect=0}
    //ok: insecure-use-printf-fn
    printf("hello");
//{/fact}

//{fact rule=untrusted-format-strings@v1.0 defect=0}
    //ok: insecure-use-printf-fn
    printf("%s\n",argv[0]);
//{/fact}
}

int main() {
    bad_vsprintf(NULL);
    bad_sprintf();
    bad_printf();
    return 0;
}
