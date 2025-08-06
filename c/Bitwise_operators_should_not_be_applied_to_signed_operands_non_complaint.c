#include <stdio.h>

// {fact rule=incorrect-calculation@v1.0 defects=1}
int f_bitwise(int i) {
    return 1 << i; // Noncompliant
}
// {/fact}
