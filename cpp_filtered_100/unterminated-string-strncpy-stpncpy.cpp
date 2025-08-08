// Marco Ivaldi <raptor@0xdeadbeef.info>

#include <stdio.h>
#include <string.h>
#include<cstring>
#include<iostream>

#define BUFSIZE 256


namespace{
	// {fact rule=out-of-bounds-read@v1.0 defects=1}
	void copy_string1(char *string)
	{
		char buf[BUFSIZE];

		// ruleid: raptor-unterminated-string-strncpy-stpncpy
		strncpy(buf, string, BUFSIZE);
	}
	// {/fact}

	// {fact rule=out-of-bounds-read@v1.0 defects=1}
	void copy_string2(char *string)
	{
		char buf[BUFSIZE];

		// ruleid: raptor-unterminated-string-strncpy-stpncpy
		stpncpy(buf, string, BUFSIZE);
	}
	// {/fact}

	// {fact rule=out-of-bounds-read@v1.0 defects=1}
	int test_func()
	{
		char longString[] = "String signifying nothing";
		char shortString[16];

		// ruleid: raptor-unterminated-string-strncpy-stpncpy
		strncpy(shortString, longString, 16);
		printf("The last character in shortString is: %c (%1$x)\n", shortString[15]);
		return 0;
	}
	// {/fact}

	void test_func2(int argc, char **argv)
	{
		char Filename[256];
		char Pattern[32];

		// ...
		// {fact rule=out-of-bounds-read@v1.0 defects=1}
		// ruleid: raptor-unterminated-string-strncpy-stpncpy
		strncpy(Filename, argv[1], sizeof(Filename));
		// {/fact}
		
		// {fact rule=out-of-bounds-read@v1.0 defects=1}
		// ruleid: raptor-unterminated-string-strncpy-stpncpy
		strncpy(Pattern, argv[2], sizeof(Pattern));
		// {/fact}

		printf("Searching file: %s for the pattern: %s\n", Filename, Pattern);
	}

	int read_integer(int sockfd){
		//do something
		return 0;
	}

	bool is_username_valid(char* user){
		// do something
		return true;
	}

	int authenticate(int sockfd) 
	{
		char user[1024], *buffer; 
		size_t size;
		int n, cmd;

		int MAX_PACKET = 1;

		cmd = read_integer(sockfd); 
		size = read_integer(sockfd);
		if (size > MAX_PACKET) 
			return -1;

		buffer = (char *)calloc(size + 1, sizeof(char));
		if(!buffer)
			return -1;

		// {fact rule=out-of-bounds-read@v1.0 defects=1}
		switch(cmd) {
		case 1:
			// ruleid: raptor-unterminated-string-strncpy-stpncpy
			strncpy(user, buffer, sizeof(user));
			if (!is_username_valid(user)) 
				return 0;
			break; 
		// ...
		}
		// {/fact}
	}

	// {fact rule=out-of-bounds-read@v1.0 defects=1}
	int process_email(char *email) 
	{
		char buf[1024], *domain;

		// ruleid: raptor-unterminated-string-strncpy-stpncpy
		strncpy(buf, email, sizeof(buf));

		domain = strchr(buf, '@');
		if(!domain)
			return -1;

		*domain++ = '\0';

		// ...
		return 0; 
	}
	// {/fact}

	int main() 
	{
		printf("Hello, World!");
		return 0;
	}

}