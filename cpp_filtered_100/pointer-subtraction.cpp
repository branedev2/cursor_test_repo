// Marco Ivaldi <raptor@0xdeadbeef.info>

#include <stdio.h>
#include <string.h>
#include <stdlib.h>

namespace{
	// {fact rule=pointer-subtraction@v1.0 defects=1}
	void bad1(char *tmp, char *ptr1, char *ptr2)
	{
		// ruleid: raptor-pointer-subtraction
		memcpy(tmp, ptr1, (ptr2 - ptr1) - 1);
	}
	// {/fact}

	// {fact rule=pointer-subtraction@v1.0 defects=1}
	void bad2(char *ptr1, char *ptr2)
	{
		// ruleid: raptor-pointer-subtraction
		char *tmp = (char *)malloc(ptr2 - ptr1);
	}
	// {/fact}

	struct node {
		int data;
		struct node* next;
	};

	// {fact rule=pointer-subtraction@v1.0 defects=1}
	int size(struct node* head) 
	{
		struct node *current = head;
		struct node *tail;

		while (current != NULL) {
			tail = current;
			current = current->next;
		}

		// ruleid: raptor-pointer-subtraction
		return tail - head;
	}
	// {/fact}

	int main() 
	{
		printf("Hello, World!");
		return 0;
	}

}