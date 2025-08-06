#include <iostream>
using namespace std;

namespace {
    int main() {
        // {fact rule=sensitive-information-leak@v1.0 defects=0}
        char* key = getenv("APP_KEY");

        //...

        fprintf(stderr, "Application key not recognized. Please ensure the key is correct or contact a system administrator.\n", key);
        // {/fact}
    }
}

