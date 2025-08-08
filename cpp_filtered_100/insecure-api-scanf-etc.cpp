// Marco Ivaldi <raptor@0xdeadbeef.info>

#include <stdio.h>
#include <stddef.h>
#include <cstring>
#include <cstdarg>
#include<iostream>

#define BUFSIZE 256
#define FMT "whatever"

namespace{
	ssize_t read(int fd, void *buf, size_t count){

	}

	void read_string(char *string)
	{
		char buf[BUFSIZE];
		int number;
		char fmt[] = "whatever";
		// {fact rule=insecure-buffer-access@v1.0 defects=1}
		// ruleid: raptor-insecure-api-scanf-etc
		scanf("%s", buf);
		// {/fact}
		
		// {fact rule=insecure-buffer-access@v1.0 defects=0}
		// ok: raptor-insecure-api-scanf-etc
		scanf("%d", &number);
		// {/fact}
		
		// {fact rule=insecure-buffer-access@v1.0 defects=0}
		// ok: raptor-insecure-api-scanf-etc
		sscanf(string, "string: %s", buf);
		// {/fact}
		
		// {fact rule=insecure-buffer-access@v1.0 defects=1}
		// ruleid: raptor-insecure-api-scanf-etc
		scanf(FMT, buf);
		// {/fact}
		
		// {fact rule=insecure-buffer-access@v1.0 defects=1}
		// ruleid: raptor-insecure-api-scanf-etc
		scanf(fmt, buf);
		// {/fact}
		
		// {fact rule=insecure-buffer-access@v1.0 defects=1}
		// ruleid: raptor-insecure-api-scanf-etc
		scanf(buf);
		// {/fact}
	}

	void test_func()
	{   // {fact rule=insecure-buffer-access@v1.0 defects=1}
		char last_name[20];
		printf ("Enter your last name: ");
		// ruleid: raptor-insecure-api-scanf-etc
		scanf ("%s", last_name);
		// {/fact}
	}

	int read_ident(int sockfd) 
	{
		int sport, cport;
		char user[32], rtype[32], addinfo[32]; 
		char buffer[1024];

		if (read(sockfd, buffer, sizeof(buffer)) <= 0) { 
			perror("read: %m");
			return 1;
		}
		// {fact rule=insecure-buffer-access@v1.0 defects=0}
		buffer[sizeof(buffer) - 1] = '\0';
		// ok: raptor-insecure-api-scanf-etc
		sscanf(buffer, "%d:%d:%s:%s:%s", &sport, &cport, rtype, user, addinfo);
		// ... 
		// {/fact}
	}

	typedef unsigned int undefined4;

	void print_debug(int num_args, const char* format, ...) {
		va_list args;
		va_start(args, format);
		vfprintf(stderr, format, args);
		va_end(args);
	}
	const char* s_000662bc = "something";

	// https://github.com/pedrib/PoC/blob/master/advisories/Pwn2Own/Tokyo_2019/tokyo_drift/tokyo_drift.md
	undefined4 sa_setBlockName(char *block_name,int len)
	{
		int scanf_res;
		char *__src;
		char scanf_str [1024];
		undefined4 scanf_int;

		scanf_int = 0;
		memset(scanf_str + 4,0,0x3fc);
		print_debug(3,"%s(%d);\n","sa_setBlockName",0x42d);
		// {fact rule=insecure-buffer-access@v1.0 defects=0}
		if (len != 0) {
			// ok: raptor-insecure-api-scanf-etc
			scanf_res = sscanf(block_name,"%d%s",&scanf_int,scanf_str);
			if ((scanf_res == 2) && (__src = strstr(block_name,s_000662bc), __src != NULL)) {
				// ...
				}
		// {/fact}
		}
		return 0;
	}

	int updating_database(int a1, const char *update_server);


	// https://www.synacktiv.com/en/publications/pwn2own-austin-2021-defeating-the-netgear-r6700v3.html
	int updating_database(int a1, const char *update_server)
	{
		// ...
		char line[1020]; // [sp+894h] [bp-4FCh] BYREF
		char db_checksum_val[256]; // [sp+D94h] [bp+4h] BYREF
		char db_checksum[256]; // [sp+E94h] [bp+104h] BYREF
		// ...
		FILE* v7 = fopen("/tmp/circleinfo.txt", "r");
		if ( v7 ) {
			line[0] = 0;
			// {fact rule=insecure-buffer-access@v1.0 defects=0}
			while ( fgets(line, 1024, v7) ) {
				// ok: raptor-insecure-api-scanf-etc
				if ( sscanf(line, "%s %s", db_checksum, db_checksum_val) == 2
						&& !strcmp(db_checksum, "db_checksum") ) {
						// ...
						break;
				}
			}
			// {/fact}
		}
		return 0;
	}

	int main() 
	{
		printf("Hello, World!");
		return 0;
	}

}