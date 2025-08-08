// Marco Ivaldi <raptor@0xdeadbeef.info>

#include <stdio.h>

namespace{
	void assign_int(int int_var)
	{
		// {fact rule=incorrect-conversion-of-integers@v1.0 defects=1}
		// ruleid: raptor-integer-truncation
		char char_var = int_var;
		short short_var;
		// {/fact}


		// {fact rule=incorrect-conversion-of-integers@v1.0 defects=1}
		// ruleid: raptor-integer-truncation
		short_var = int_var;
		// {/fact}
	}

	void assign_long(long long_var)
	{   // {fact rule=incorrect-conversion-of-integers@v1.0 defects=1}
		short short_var;
		// ruleid: raptor-integer-truncation
		int int_var = long_var + 1;
		// {/fact}


		// {fact rule=incorrect-conversion-of-integers@v1.0 defects=1}
		// ruleid: raptor-integer-truncation
		short_var = long_var;
		// {/fact}
	}

	void test_func()
	{   // {fact rule=incorrect-conversion-of-integers@v1.0 defects=1}
		int intPrimitive;
		short shortPrimitive;
		intPrimitive = (int)(~((int)0) ^ (1 << (sizeof(int)*8-1)));
		// ruleid: raptor-integer-truncation
		shortPrimitive = intPrimitive;
		printf("Int MAXINT: %d\nShort MAXINT: %d\n", intPrimitive, shortPrimitive);
		// {/fact}
	}

	// {fact rule=incorrect-conversion-of-integers@v1.0 defects=1}
	// ruleid: raptor-integer-truncation
	char func(void)
	{
		int a = 42;
		return a; 
	}
	// {/fact}

	int main() 
	{
		printf("Hello, World!");
		return 0;
	}

}