// Marco Ivaldi <raptor@0xdeadbeef.info>

#include <stdio.h>
#include <string.h>
#include<cstring>

namespace{
	// {fact rule=integer-overflow@v1.0 defects=1}
	int get_length(char *string)
	{
		short length;

		// ruleid: raptor-unsafe-strlen
		length = strlen(string);

		return length;
	}
	// {/fact}

	int main() 
	{
		printf("Hello, World!");
		return 0;
	}

}