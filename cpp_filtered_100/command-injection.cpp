// Marco Ivaldi <raptor@0xdeadbeef.info>

#include <stdio.h>
#include <stdlib.h>

namespace{
	void invoke1(char *string)
	{
		char buf[] = "uname -a; id";
		// {fact rule=os-command-injection@v1.0 defects=0}
		// ok: raptor-command-injection
		system(buf);
		// {/fact}
		
		// {fact rule=os-command-injection@v1.0 defects=0}
		// ok: raptor-command-injection
		system("whoami");
		// {/fact}
		
		// {fact rule=os-command-injection@v1.0 defects=1}
		// ruleid: raptor-command-injection
		system(string);
		// {/fact}
	}

	void invoke2(char *string)
	{
		char buf[] = "uname -a; id";
		// {fact rule=os-command-injection@v1.0 defects=0}
		// ok: raptor-command-injection
		popen(buf, "r");
		// {/fact}

		// {fact rule=os-command-injection@v1.0 defects=0}
		// ok: raptor-command-injection
		popen("whoami", "r");
		// {/fact}

		// {fact rule=os-command-injection@v1.0 defects=1}
		// ruleid: raptor-command-injection
		popen(string, "r");
		// {/fact}
	}

	int send_mail(char *user) 
	{
		char buf[1024];
		FILE *fp;

		snprintf(buf, sizeof(buf), "/usr/bin/sendmail -s \"hi\" %s", user);

		// {fact rule=os-command-injection@v1.0 defects=1}
		// ruleid: raptor-command-injection
		fp = popen(buf, "w");
		// {/fact}

		if (fp == NULL)
				return 1;
		// ...
		return 1;
	}

	int main() 
	{
		printf("Hello, World!");
		return 0;
	}

}