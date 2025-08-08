// Marco Ivaldi <raptor@0xdeadbeef.info>

#include <stdio.h>
#include <stdlib.h>
#include <time.h>

enum { len = 12 };

namespace{
	// {fact rule=weak-random-number-generation@v1.0 defects=1}
	void func_bad(void) 
	{
		char id[len];
		int r;
		int num;

		// ...

		// ruleid: raptor-insecure-api-rand-srand
		r = rand();
		num = snprintf(id, len, "ID%-d", r);

		// ...
	}
	// {/fact}

	void func_good(void) 
	{
		char id[len];
		int r;
		int num;

		// ...
		// {fact rule=weak-random-number-generation@v1.0 defects=0}
		struct timespec ts;
		if (timespec_get(&ts, TIME_UTC) == 0) {
			/* handle error */
		}
		// ok: raptor-insecure-api-rand-srand
		srandom(ts.tv_nsec ^ ts.tv_sec);
		// {/fact}
		// ...
		// {fact rule=weak-random-number-generation@v1.0 defects=0}
		// ok: raptor-insecure-api-rand-srand
		r = random();
		num = snprintf(id, len, "ID%-d", r);
		// {/fact}
		// ...
	}

	int main() 
	{
		printf("Hello, World!");
		return 0;
	}

}