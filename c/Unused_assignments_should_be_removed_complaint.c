#include <stdbool.h>

// {fact rule=unused-assigned-variables@v1.0 defects=0}
int foo_good1(int y) {
  int x = 200; // Compliant: no unnecessary assignment
  return x + y;
}
// {/fact}

int bar(){
    // dosomething
    return 1;
}
int buz();
// {fact rule=unused-assigned-variables@v1.0 defects=0}
int foo_good2(bool b) {
  int x = 0;
  if (b) {
    x = bar();
    return x;
  }
  // Compliant: no more dead stores and superfluous code
  // Assuming call to buz() had no important side effects
  return x;
}
// {/fact}