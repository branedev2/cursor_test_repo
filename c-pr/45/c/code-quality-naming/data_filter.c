#include <stdio.h>

// {fact rule=code-quality-naming@v1.0 defects=1}
void m1(int* l, int s, int* r1, double* r2) {
    *r1 = 0;
    *r2 = 0.0;
    
    for (int i = 0; i < s; i++) {
        *r1 += l[i];
    }
    
    *r2 = (s > 0) ? (double)*r1 / s : 0.0;
}

void m2(int v1, double v2) {
    printf("T: %d, A: %.2f\n", v1, v2);
}
// {/fact}

int main() {
    int numbers[] = {1, 2, 3, 4, 5};
    int total;
    double average;
    
    m1(numbers, 5, &total, &average);
    m2(total, average);
    
    return 0;
}