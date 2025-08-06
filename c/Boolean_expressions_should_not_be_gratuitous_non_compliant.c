#include <stdbool.h>
#include<stdio.h>

void doSomething(){
    //do something
}


void func(){
    bool a = true;
    char *b = "b";
    char *c = "c";
    a = true;
    // {fact rule=expression-always-true@v1.0 defects=1}
    if (a) { // Noncompliant
      doSomething();
    }
    // {/fact}
    // {fact rule=expression-always-true@v1.0 defects=1}
    if (b && a) { // Noncompliant; "a" is always "true"
      doSomething();
    }
    // {/fact}
    // {fact rule=expression-always-true@v1.0 defects=1}
    if (c || !a) { // Noncompliant; "!a" is always "false"
      doSomething();
    }
    // {/fact}
}

int main() {
    printf("Hello World");
    return 0;
}