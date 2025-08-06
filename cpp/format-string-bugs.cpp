// Marco Ivaldi <raptor@0xdeadbeef.info>

#include <stdio.h>
#include <syslog.h>
#include <cstring>
#include <iostream>

#define BUFSIZE 256

namespace{
	void build_string(char *string)
	{
		char buf[BUFSIZE];
		// {fact rule=untrusted-format-strings@v1.0 defects=1}
		// ruleid: raptor-format-string-bugs
		snprintf(buf, BUFSIZE, string);
		// {/fact}

		// {fact rule=untrusted-format-strings@v1.0 defects=0}
		// ok: raptor-format-string-bugs
		snprintf(buf, BUFSIZE, "%s", string);
		// {/fact}
	}

	void print_stuff(char *string)
	{
		char buf[BUFSIZE];

		// {fact rule=untrusted-format-strings@v1.0 defects=1}
		// ruleid: raptor-format-string-bugs
		printf(string);
		// {/fact}

		// {fact rule=untrusted-format-strings@v1.0 defects=0}
		// ok: raptor-format-string-bugs
		printf("%s\n", string);
		// {/fact}
	}

	void log_stuff(char *string)
	{
		char buf[BUFSIZE];

		// {fact rule=untrusted-format-strings@v1.0 defects=1}
		// ruleid: raptor-format-string-bugs
		syslog(LOG_ERR, string);
		// {/fact}

		// {fact rule=untrusted-format-strings@v1.0 defects=0}
		// ok: raptor-format-string-bugs
		syslog(LOG_ERR, "%s", string);
		// {/fact}
	}

	void va_start(va_list ap, char *fmt){
		//do something
	}

	void va_end(va_list ap){
		// do something
	}

	void log_error(char *fmt, ...) 
	{
		char buf[BUFSIZE];
		va_list ap;

		// {fact rule=untrusted-format-strings@v1.0 defects=1}
		va_start(ap, fmt);
		// ruleid: raptor-format-string-bugs
		vsnprintf(buf, sizeof(buf), fmt, ap); 
		va_end(ap);
		// {/fact}
		
		// {fact rule=untrusted-format-strings@v1.0 defects=1}
		// ruleid: raptor-format-string-bugs
		syslog(LOG_NOTICE, buf);
		// {/fact}
	}

	// {fact rule=untrusted-format-strings@v1.0 defects=1}
	void printWrapper(char *string) 
	{
		// ruleid: raptor-format-string-bugs
		printf(string);
	}
	// {/fact}

	int main() 
	{
		printf("Hello, World!");
		return 0;
	}

}