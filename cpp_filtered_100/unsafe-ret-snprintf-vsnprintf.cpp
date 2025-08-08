// Marco Ivaldi <raptor@0xdeadbeef.info>

#include <stdio.h>
#include<cstring>

#define BUFSIZE 256
#define SIZE(x, y) (sizeof(x))

namespace{
	// {fact rule=insecure-buffer-access@v1.0 defects=1}
	void copy_string(char *string)
	{
		char buf[BUFSIZE];
		size_t length;

		// ruleid: raptor-unsafe-ret-snprintf-vsnprintf
		length = snprintf(buf, BUFSIZE, "%s", string);

		// use length to access buf
	}
	// {/fact}

	void bad(char *username, char* password)
	{
		char buf[1024], *ptr;
		ptr = buf;
		// {fact rule=insecure-buffer-access@v1.0 defects=1}
		// ruleid: raptor-unsafe-ret-snprintf-vsnprintf
		ptr += snprintf(ptr, SIZE(buf, ptr), "user: %s\n", username);
		// {/fact}
		
		// {fact rule=insecure-buffer-access@v1.0 defects=1}
		// ruleid: raptor-unsafe-ret-snprintf-vsnprintf
		ptr += snprintf(ptr, SIZE(buf, ptr), "pass: %s\n", password);
		// {/fact}
	}

	void va_start(va_list ap, char* fmt){
		// do something
	}

	void va_end(va_list ap){
		//do something
	}

	void write_log(int fd, char* buffer, int len){
		//do something
	}

	// {fact rule=insecure-buffer-access@v1.0 defects=1}
	int log(int fd, char *fmt, ...) 
	{
		char buffer[BUFSIZE]; 
		int n;
		va_list ap;

		va_start(ap, fmt);

		// ruleid: raptor-unsafe-ret-snprintf-vsnprintf
		n = vsnprintf(buffer, sizeof(buffer), fmt, ap);

		if (n >= BUFSIZE - 2) 
			buffer[sizeof(buffer) - 2] = '\0';

		strcat(buffer, "\n");

		va_end(ap);

		write_log(fd, buffer, strlen(buffer));

		return 0; 
	}
	// {/fact}

	int main() 
	{
		printf("Hello, World!");
		return 0;
	}

}