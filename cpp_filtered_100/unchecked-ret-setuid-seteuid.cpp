// Marco Ivaldi <raptor@0xdeadbeef.info>

#include <stdio.h>
#include <unistd.h>


namespace{
	// {fact rule=output-ignored-on-resultset-next@v1.0 defects=1}
	void drop_priv_perm()
	{
		// ruleid: raptor-unchecked-ret-setuid-seteuid
		setuid(getuid());
	}
	// {/fact}


	// {fact rule=output-ignored-on-resultset-next@v1.0 defects=0}
	int drop_priv_perm2()
	{
		// ok: raptor-unchecked-ret-setuid-seteuid
		if (!setuid(getuid())) {
			// ...
			return 0;
		}
		return -1;
	}
	// {/fact}

	// {fact rule=output-ignored-on-resultset-next@v1.0 defects=1}
	void drop_priv_temp()
	{
		// ruleid: raptor-unchecked-ret-setuid-seteuid
		seteuid(getuid());
	}
	// {/fact}

	// {fact rule=output-ignored-on-resultset-next@v1.0 defects=0}
	int drop_priv_temp2()
	{
		// ok: raptor-unchecked-ret-setuid-seteuid
		if (seteuid(getuid()) < 0)
			return -1;

		// ...
	}
	// {/fact}

	int main() 
	{
		printf("Hello, World!");
		return 0;
	}

}