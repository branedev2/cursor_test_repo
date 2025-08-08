// Marco Ivaldi <raptor@0xdeadbeef.info>

#include <stdio.h>
#include <string.h>

#define SIZE 256

namespace{
    int retrieve_rand_int(int max_value){
        //code
    }

    // {fact rule=insecure-buffer-access@v1.0 defects=1}
    int test1(char* eaddr)
    {
        // ...
        for (int oct_cnt = 1; oct_cnt < 7; oct_cnt++) {
            int oct = (__int8_t)retrieve_rand_int(0xFF);
            if (oct_cnt != 1)
                // ruleid: raptor-incorrect-use-of-sprintf-snprintf
                sprintf(eaddr, "%s:%0x", eaddr, oct);
            else
                sprintf(eaddr, "%0x", oct);
        }
    }
    // {/fact}

    int test2(char* prepend)
    {
        char buf[SIZE];
        char *append;
        // {fact rule=insecure-buffer-access@v1.0 defects=1}
        // ruleid: raptor-incorrect-use-of-sprintf-snprintf
        sprintf(buf, "%s:%s:%s", prepend, buf, append);
        // {/fact}
        // {fact rule=insecure-buffer-access@v1.0 defects=1}
        // ruleid: raptor-incorrect-use-of-sprintf-snprintf
        snprintf(buf, SIZE, "%s:%s", prepend, buf);
        // {/fact}
        // {fact rule=insecure-buffer-access@v1.0 defects=1}
        // ruleid: raptor-incorrect-use-of-sprintf-snprintf
        sprintf(buf, "%s some further text", buf);
        // {/fact}

        return 0;
    }

    int main() 
    {
        printf("Hello, World!");
        return 0;
    }
}