// Marco Ivaldi <raptor@0xdeadbeef.info>

#include <stdio.h>
#include <string.h>
#include <stdint.h>
#include <stdlib.h>
#include <stdarg.h>

#define FAIL 0
#define PASS 1

namespace{
		int security_check(char* data){
			return 0;
		}

	void bad1(char *data)
	{
		// {fact rule=break-statement-in-switch@v1.0 defects=1}
		int result = security_check(data);

		// ruleid: raptor-missing-break-in-switch
		switch (result) {
		case FAIL:
			printf("Security check failed!\n");
		case PASS:
			printf("Security check passed.\n");
			break;
		default:
			printf("Unknown error (%d), exiting...\n", result);
			exit(1);
		}
		// {/fact}
	}

	void good1(char *data)
	{
		// {fact rule=break-statement-in-switch@v1.0 defects=0}
		int result = security_check(data);

		// ok: raptor-missing-break-in-switch
		switch (result) {
		case FAIL:
			printf("Security check failed!\n");
			exit(1);
		case PASS:
			printf("Security check passed.\n");
			break;
		default:
			printf("Unknown error (%d), exiting...\n", result);
			exit(1);
		}
		// {/fact}
	}

	#define OBJ_STR 1
	#define OBJ_INT 2
	#define OBJ_BOOL 3

	struct object {
		int type;
		union {
			char* str;
			int num;
			bool boolean;
		} un;
	};

	char* alloc_string(){
		//code
	}
	int alloc_int(){
		//code 
		return 1;
	}
	bool alloc_bool(){
		//code
		return true;
	}

	struct object *init_object(int type) 
	{
		struct object *obj;

		if (!(obj = (struct object *)malloc(sizeof(struct object)))) 
			return NULL;
		// {fact rule=break-statement-in-switch@v1.0 defects=1}
		obj->type = type;
		// ruleid: raptor-missing-break-in-switch
		switch (type) {
		case OBJ_STR:
			obj->un.str = alloc_string(); 
		case OBJ_INT:
			obj->un.num = alloc_int(); 
			break;
		case OBJ_BOOL:
			obj->un.boolean = alloc_bool(); 
			break;
		}
		return obj;
		// {/fact}
	}

	// {fact rule=break-statement-in-switch@v1.0 defects=1}
	void printMessage(int month)
	{
		// ruleid: raptor-missing-break-in-switch
		switch (month) {
		case 1: printf("January");
		case 2: printf("February");
		case 3: printf("March");
		case 4: printf("April");
		case 5: printf("May");
		case 6: printf("June");
		case 7: printf("July");
		case 8: printf("August");
		case 9: printf("September");
		case 10: printf("October");
		case 11: printf("November");
		case 12: printf("December");
		}
		printf(" is a great month");
	}
	// {/fact}

	char *escape_string(char *str) 
	{
		char *output, *dest;
		int escape = 0;

		if (!(output = dest = (char *)calloc(strlen(str) + 1, sizeof(char))))
			exit(EXIT_FAILURE);
		// {fact rule=break-statement-in-switch@v1.0 defects=1}
		while (*str) {
			// ruleid: raptor-missing-break-in-switch
			switch (*str) {
			case '\\':
				if (escape) {
							*dest++ = '\\';
							escape = 0;
						} else
							escape = 1;
						break;
			case '\n':
				*dest++ = ' ';
			default:
				*dest++ = *str;
			}
		str++; 
		}
		// {/fact}

		return output;
	}

	int main() 
	{
		printf("Hello, World!");
		return 0;
	}

}