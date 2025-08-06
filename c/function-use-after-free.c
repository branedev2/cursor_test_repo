#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct name {
    char *myname;
    void (*func)(char *str);
} NAME;

void other_func(char *ignored) {}
void refreencode(char *ignored) {}

int bad_code1() {
    NAME *var;
    char buf[10];
    var = (NAME *)malloc(sizeof(struct name));
    free(var);
//{fact rule=use-after-free@v1.0 defect=1}
// ruleid: function-use-after-free
    strcpy(buf, (char*)var);
//{/fact}
//{fact rule=use-after-free@v1.0 defect=1}
// ruleid: function-use-after-free
    other_func((char*)(*var));
//{/fact}
//{fact rule=use-after-free@v1.0 defect=1}
// ruleid: function-use-after-free
    other_func((char*)var[0]);
//{/fact}
//{fact rule=use-after-free@v1.0 defect=1}
// ruleid: function-use-after-free
    var->func(var->myname);
//{/fact}
    return 0;
}

int bad_code2() {
    NAME *var;
    char buf[10];
    var = (NAME *)malloc(sizeof(struct name));
    free(var);
//{fact rule=use-after-free@v1.0 defect=1}
// ruleid: function-use-after-free
    strcpy(buf, (char*)*var);
//{/fact}
//{fact rule=use-after-free@v1.0 defect=1}
// ruleid: function-use-after-free
    other_func((char*)var);
//{/fact}
//{fact rule=use-after-free@v1.0 defect=1}
// ruleid: function-use-after-free
    other_func((char*)var->myname);
//{/fact}
    return 0;
}

int okay_code1() {
    NAME *var;
    var = (NAME *)malloc(sizeof(struct name));
    free(var);
    var = NULL;
    // This will segmentation fault
//{fact rule=use-after-free@v1.0 defect=1}
// ruleid: function-use-after-free
    other_func((char*)var);
//{/fact}
    other_func((char*)var->myname);
    other_func((char*)*var);
    return 0;
}

int okay_code2() {
    NAME *var;
    var = (NAME *)malloc(sizeof(struct name));
    free(var);
    var = NULL;
    var = (NAME *)malloc(sizeof(struct name));
    // This will segmentation fault
//{fact rule=use-after-free@v1.0 defect=0}
// ok: function-use-after-free
    other_func((char*)var);
//{/fact}
    other_func((char*)var->myname);
    other_func((char*)*var);
    return 0;
}
