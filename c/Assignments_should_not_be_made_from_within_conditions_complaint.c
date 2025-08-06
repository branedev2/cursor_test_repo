#include <stdio.h>

int getValuefrom_conditions(){
    return 10;
}

void doSomethinggood_conditions(){
    //do something
}

void func_good(){
    // {fact rule=insecure-assignment@v1.0 defects=0}
      int x = getValuefrom_conditions();
      if (x) {
        doSomethinggood_conditions();
      }
      // {/fact}
}
