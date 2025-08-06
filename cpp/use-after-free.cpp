// Marco Ivaldi <raptor@0xdeadbeef.info>

#include <stdio.h>
#include <stdlib.h>
#include<cstring>

#define MEMSIZE 256
#define BUFSIZER1 256
#define BUFSIZER2 256

namespace{
	// {fact rule=use-after-free@v1.0 defects=1}
	void alloc_and_free1()
	{
		int err = 1, bailout = 0;
		char *ptr = (char *)malloc(MEMSIZE);

		// this should be catched but it isn't, due to a documented limitation in semgrep
		// https://semgrep.dev/docs/writing-rules/pattern-syntax/#ellipses-and-statement-blocks
		if (err) {
			bailout = 1;
			free(ptr);
		}
		if (bailout)
			fprintf(stderr, "error: %p\n", ptr);

		free(ptr);
		// ruleid: raptor-use-after-free
		fprintf(stderr, "error: %p\n", ptr);
	}
	// {/fact}

	// {fact rule=use-after-free@v1.0 defects=0}
	void alloc_and_free2()
	{
		char *ptr = (char *)malloc(MEMSIZE);

		free(ptr);
		ptr = (char *)malloc(MEMSIZE);
		// ok: raptor-use-after-free
		fprintf(stderr, "error: %p\n", ptr);
	}
	// {/fact}

	// {fact rule=use-after-free@v1.0 defects=1}
	void uaf(int argc, char **argv) 
	{
		char *buf1R1;
		char *buf2R1;
		char *buf2R2;
		char *buf3R2;
		buf1R1 = (char *) malloc(BUFSIZER1);
		buf2R1 = (char *) malloc(BUFSIZER1);
		free(buf2R1);
		buf2R2 = (char *) malloc(BUFSIZER2);
		buf3R2 = (char *) malloc(BUFSIZER2);
		// ruleid: raptor-use-after-free
		strncpy(buf2R1, argv[1], BUFSIZER1-1);
		free(buf1R1);
		free(buf2R2);
		free(buf3R2);
	}
	// {/fact}

	// {fact rule=use-after-free@v1.0 defects=1}
	// https://docs.microsoft.com/en-us/cpp/sanitizers/error-heap-use-after-free
	int heap_use_after_free()
	{
		char *x = (char*)malloc(10 * sizeof(char));
		free(x);

		// ...

		// ruleid: raptor-use-after-free
		return x[5];
	}
	// {/fact}

	// {fact rule=use-after-free@v1.0 defects=1}
	char test()
	{
		char *ptr = (char *)malloc(10 * sizeof(char));
		free(ptr);

		// ruleid: raptor-use-after-free
		return *ptr;
	}
	// {/fact}

	int main()
	{
		printf("Hello, World!");
		return 0;
	}

}