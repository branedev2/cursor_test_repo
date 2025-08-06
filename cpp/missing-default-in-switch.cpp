// Marco Ivaldi <raptor@0xdeadbeef.info>

#include <stdio.h>
#include <string.h>
#include <stdint.h>
#include <stdlib.h>
#include <stdarg.h>

#define FAIL 0
#define PASS 1

#define OBJ_STR 1
#define OBJ_INT 2
#define OBJ_BOOL 3

namespace{
	int security_check(char* data){
		return 0;
	}

	// {fact rule=default-in-multiple-condition@v1.0 defects=1}
	void bad1(char *data)
	{
		int result = security_check(data);

		// ruleid: raptor-missing-default-in-switch
		switch (result) {
		case FAIL:
			printf("Security check failed!\n");
			exit(1);
			break;
		case PASS:
			printf("Security check passed.\n");
			break;
		}
	}
	// {/fact}

	// {fact rule=default-in-multiple-condition@v1.0 defects=0}
	void good1(char *data)
	{
		int result = security_check(data);

		// ok: raptor-missing-default-in-switch
		switch (result) {
		case FAIL:
			printf("Security check failed!\n");
			exit(1);
			break;
		case PASS:
			printf("Security check passed.\n");
			break;
		default:
			printf("Unknown error (%d), exiting...\n", result);
			exit(1);
		}
	}
	// {/fact}

	struct Pkt{
		int id;
	};

	void initAuth(Pkt * packet){
		//code
	}

	void initReset(Pkt * packet){
		//code
	}

	void initDisconnect(Pkt * packet){
		//code
	}

	void processPacket(Pkt * packet){
		//code
	}

	// {fact rule=default-in-multiple-condition@v1.0 defects=1}
	void bad2(Pkt *packet)
	{
		// ruleid: raptor-missing-default-in-switch
		switch(packet->id) {
		case 1:
			initAuth(packet);
			break;
		case 2:
			initReset(packet);
			break;
		case 3:
			initDisconnect(packet);
			break;
		}

		processPacket(packet);
	}
	// {/fact}

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

	// {fact rule=default-in-multiple-condition@v1.0 defects=1}
	struct object *init_object(int type) 
	{
		struct object *obj;

		if (!(obj = (struct object *)malloc(sizeof(struct object)))) 
			return NULL;

		obj->type = type;
		// ruleid: raptor-missing-default-in-switch
		switch (type) {
		case OBJ_STR:
			obj->un.str = alloc_string(); 
			break;
		case OBJ_INT:
			obj->un.num = alloc_int(); 
			break;
		case OBJ_BOOL:
			obj->un.boolean = alloc_bool(); 
			break;
		}
		return obj;
	}
	// {/fact}

	int foo(){
		return 1;
	}

	// {fact rule=default-in-multiple-condition@v1.0 defects=1}
	void test(int x, int y)
	{
		// ruleid: raptor-missing-default-in-switch
		switch (foo() + x + y) {
		case 1:
			break;
		case 2:
			break;
		}
	// {/fact}

		// {fact rule=default-in-multiple-condition@v1.0 defects=0}
		// ok: raptor-missing-default-in-switch
		switch (foo() + x + y) {
		case 1:
			break;
		default:
			break;
		case 2:
			break;
		}
		// {/fact}
		
		// {fact rule=default-in-multiple-condition@v1.0 defects=0}
		// ok: raptor-missing-default-in-switch
		switch (foo() + x + y) {
		case 1:
			break;
		case 2:
			break;
		default:
			break;
		}
		// {/fact}
	}

	int main() 
	{
		printf("Hello, World!");
		return 0;
	}

}