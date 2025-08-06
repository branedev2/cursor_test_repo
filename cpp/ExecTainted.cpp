#include <iostream>

namespace {
    void encodeShellString(char* userName, int length, char* username) {
  // Some logic to encode
}

int main(int argc, char** argv) {
  char *userName = argv[2];

  {
    // BAD: a string from the user is injected directly into
    // a command line.
    // {fact rule=os-command-injection@v1.0 defects=1}
    char command1[1000] = {0};
    sprintf(command1, "userinfo -v \"%s\"", userName);
    system(command1);
    // {/fact}
  }

  {
    // GOOD: the user string is encoded by a library routine.
    // {fact rule=os-command-injection@v1.0 defects=0}
    char userNameQuoted[1000] = {0};
    encodeShellString(userNameQuoted, 1000, userName);
    char command2[1000] = {0};
    sprintf(command2, "userinfo -v %s", userNameQuoted);
    system(command2);
    // {/fact}
        }
    }
}


