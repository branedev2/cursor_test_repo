// {fact rule=unexpected-return-value@v1.0 defects=1}
int my_func(int a) {
  if (a > 100) {
    return; // Noncompliant
  }

  // Noncompliant
}
// {/fact}