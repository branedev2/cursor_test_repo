// Marco Ivaldi <raptor@0xdeadbeef.info>

#include <stdio.h>
#include <string.h>
#include <unistd.h>

#define BUFSIZE 256

namespace{
	// {fact rule=insecure-buffer-access@v1.0 defects=1}
	void drop_priv_perm()
	{
		// ruleid: raptor-interesting-api-calls
		setuid(getuid());
	}
	// {/fact}

	// {fact rule=insecure-buffer-access@v1.0 defects=1}
	void drop_priv_temp()
	{
		// ruleid: raptor-interesting-api-calls
		seteuid(getuid());
	}
	// {/fact}

	void copy_append_string(char *string1, char *string2)
	{
		char buf[BUFSIZE];
		// {fact rule=insecure-buffer-access@v1.0 defects=1}
		// ruleid: raptor-interesting-api-calls
		strcpy(buf, string1);
		// {/fact}
		
		// {fact rule=insecure-buffer-access@v1.0 defects=1}
		// ruleid: raptor-interesting-api-calls
		strcat(buf, string2);
		// {/fact}
	}

	void copy_string(char *string)
	{
		char buf[BUFSIZE];
		// {fact rule=insecure-buffer-access@v1.0 defects=1}
		// ruleid: raptor-interesting-api-calls
		stpcpy(buf, string);
		// {/fact}
	}

	void copy_string1(char *string)
	{
		char buf[BUFSIZE];
		// {fact rule=insecure-buffer-access@v1.0 defects=1}
		// ruleid: raptor-interesting-api-calls
		strncpy(buf, string, BUFSIZE);
		// {/fact}
	}

	void copy_string2(char *string)
	{
		char buf[BUFSIZE];
		// {fact rule=insecure-buffer-access@v1.0 defects=1}
		// ruleid: raptor-interesting-api-calls
		stpncpy(buf, string, BUFSIZE);
		// {/fact}
	}

	void gets(char* buf){
		//code
	}

	void get_string()
	{
		char buf[BUFSIZE];
		// {fact rule=insecure-buffer-access@v1.0 defects=1}
		// ruleid: raptor-interesting-api-calls
		gets(buf);
		// {/fact}
	}

	int main() 
	{
		printf("Hello, World!");
		return 0;
	}

}