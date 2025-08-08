// Marco Ivaldi <raptor@0xdeadbeef.info>

#include <stdio.h>
#include <string.h>
#include <stdlib.h>

#define STR_MAX 256

namespace{
	void fillInName(char* name){
		//do something
	}

	// {fact rule=function-call-with-argument@v1.0 defects=1}
	int putName_bad() 
	{
		char name[STR_MAX];

		fillInName(name);

		// ruleid: raptor-putenv-stack-var
		putenv(name);
		
		return 0;
	}
	// {/fact}

	// {fact rule=function-call-with-argument@v1.0 defects=0}
	int putName_good() 
	{
		char *name = (char *)malloc(STR_MAX);

		fillInName(name);

		// ok: raptor-putenv-stack-var
		putenv(name);

		return 0;
	}
	// {/fact}

	int main() 
	{
		printf("Hello, World!");
		return 0;
	}

}