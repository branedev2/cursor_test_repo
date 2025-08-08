// Marco Ivaldi <raptor@0xdeadbeef.info>

#include <stdio.h>
#include<iostream>
#include <string.h>

#define BUFSIZE 256
#define FMT "whatever"

namespace{
	void copy_string(char *string, int number)
	{
		char buf[BUFSIZE];
		char fmt[] = "whatever";
		// {fact rule=insecure-buffer-access@v1.0 defects=1}
		// ruleid: raptor-insecure-api-sprintf-vsprintf
		sprintf(buf, "string: %s\n", string);
		// {/fact}
		
		// {fact rule=insecure-buffer-access@v1.0 defects=1}
		// ruleid: raptor-insecure-api-sprintf-vsprintf
		sprintf(buf, "number: %d\n", number);
		// {/fact}
		
		// {fact rule=insecure-buffer-access@v1.0 defects=1}
		// ruleid: raptor-insecure-api-sprintf-vsprintf
		sprintf(buf, FMT, string);
		// {/fact}
		
		// {fact rule=insecure-buffer-access@v1.0 defects=1}
		// ruleid: raptor-insecure-api-sprintf-vsprintf
		sprintf(buf, fmt, string);
		// {/fact}
		
		// {fact rule=insecure-buffer-access@v1.0 defects=1}
		// ruleid: raptor-insecure-api-sprintf-vsprintf
		sprintf(buf, string);
		// {/fact}
	}

	struct jrun_request{
		char* context;
		char* stringRep;
	};

	struct server_rec{

	};

	void va_start(va_list list, const char* szFormat){
		//code
	}

	void va_end(va_list list){
		//code
	}

	void log_error(char* szBuf, server_rec *s){
		//code
	}

	static void
	WriteToLog(jrun_request *r, const char *szFormat, ...) 
	{
		server_rec *s = (server_rec *) r->context; 
		va_list list;
		char szBuf[2048];
		// {fact rule=insecure-buffer-access@v1.0 defects=1}
		strcpy(szBuf, r->stringRep);
		va_start (list, szFormat);
		// ruleid: raptor-insecure-api-sprintf-vsprintf
		vsprintf (strchr(szBuf,'\0'), szFormat, list); 
		va_end (list);
		// {/fact}

	#if MODULE_MAGIC_NUMBER > 19980401
		ap_log_error(APLOG_MARK, APLOG_NOERRNO|APLOG_NOTICE, s, "%s", szBuf);
	#else
		log_error(szBuf, s);
	#endif

	#ifdef WIN32
		strcat(szBuf, "\r\n");
		OutputDebugString(szBuf); 
	#endif
	}

	int main() 
	{
		printf("Hello, World!");
		return 0;
	}

}