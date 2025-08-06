// Marco Ivaldi <raptor@0xdeadbeef.info>

#include <stdio.h>

#define BUFSIZE 256

namespace{
	void gets(char * buff){
		
	}

	// {fact rule=insecure-buffer-access@v1.0 defects=1}
	void get_string()
	{
		char buf[BUFSIZE];

		// ruleid: raptor-insecure-api-gets
		gets(buf);
	}
	// {/fact}

	int main() 
	{
		printf("Hello, World!");
		return 0;
	}

}