// Marco Ivaldi <raptor@0xdeadbeef.info>
using namespace std;
#include <stdio.h>
#include <string.h>
#include<cstring>
#include<iostream>

#define BUFSIZE 256

namespace{
	// {fact rule=insecure-buffer-access@v1.0 defects=1}
	void copy_string(char *string)
	{
		char buf[BUFSIZE];

		// ruleid: raptor-unsafe-ret-strlcpy-strlcat
		strncpy(buf, string, BUFSIZE);

		// use length to access buf, e.g. with strncat()
	}
	// {/fact}

	// {fact rule=insecure-buffer-access@v1.0 defects=1}
	void append_string(char *string)
	{
		char buf[BUFSIZE];

		// ruleid: raptor-unsafe-ret-strlcpy-strlcat
		strncat(buf, string, BUFSIZE);

		// use length to access buf
	}
	// {/fact}

	// {fact rule=insecure-buffer-access@v1.0 defects=1}
	void qualify_username(char *username) 
	{
		char buf[1024];
		short length;

		// ruleid: raptor-unsafe-ret-strlcpy-strlcat
		strncpy(buf, username, sizeof(buf));
		strncat(buf, "@127.0.0.1", sizeof(buf) - length);
		// ...
	}
	// {/fact}

	int main() 
	{
		printf("Hello, World!");
		return 0;
	}

}