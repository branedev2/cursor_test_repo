#include <pthread.h>
#include<stdio.h>

pthread_mutex_t m1 = PTHREAD_MUTEX_INITIALIZER;
pthread_mutex_t m2 = PTHREAD_MUTEX_INITIALIZER;
// {fact rule=thread-safety-violation@v1.0 defects=0}
void locks_good() {
  pthread_mutex_lock(&m1);
  pthread_mutex_lock(&m2); // Compliant: we acquired both 'm1' and 'm2' for the first time.
}
// {/fact}

// {fact rule=thread-safety-violation@v1.0 defects=0}
void unlocks_good() {
  pthread_mutex_unlock(&m2);
  pthread_mutex_unlock(&m1); // Compliant: we released both 'm1' and 'm2' for the first time.
}
// {/fact}
