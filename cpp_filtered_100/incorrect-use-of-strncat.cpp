// Marco Ivaldi <raptor@0xdeadbeef.info>

#include <stdio.h>
#include <string.h>
#include <syslog.h>

namespace{
	void log(const char *format, ...) {
	// implementation
	}

	// {fact rule=out-of-bound-write@v1.0 defects=1}
	int copy_data(char *username)
	{
		char buf[1024];

		strcpy(buf, "username is: ");
		// ruleid: raptor-incorrect-use-of-strncat
		strncat(buf, username, sizeof(buf));

		log("%s\n", buf);

		return 0;
	}
	// {/fact}

	// {fact rule=out-of-bound-write@v1.0 defects=1}
	int copy_data2(char *username)
	{
		char buf[1024];

		strcpy(buf, "username is: ");
		// ruleid: raptor-incorrect-use-of-strncat
		strncat(buf, username, 1024);

		log("%s\n", buf);

		return 0;
	}
	// {/fact}

	// {fact rule=out-of-bound-write@v1.0 defects=1}
	int copy_data3(char *username)
	{
		char buf[1024];

		strcpy(buf, "username is: ");
		// ruleid: raptor-incorrect-use-of-strncat
		strncat(buf, username, sizeof(buf) - strlen(buf));

		log("%s\n", buf);

		return 0;
	}
	// {/fact}

	// {fact rule=out-of-bound-write@v1.0 defects=0}
	int good(char *username)
	{
		char buf[1024];

		strcpy(buf, "username is: ");
		// ok: raptor-incorrect-use-of-strncat
		strncat(buf, username, sizeof(buf) - strlen(buf) - 1);

		log("%s\n", buf);

		return 0;
	}
	// {/fact}

	int main() 
	{
		printf("Hello, World!");
		return 0;
	}

}