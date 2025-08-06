#include <iostream>

namespace {
    class MessageBox {
        public:
            MessageBox(char* hWnd, char* buffer, char* message, char* MB_OK) {

            }
    };

    void congratulateUser(const char *userName)
    {
        char buffer[80];
        char* hWnd;
        char* MB_OK;

        // BAD: this could overflow the buffer if the UserName is long
        // {fact rule=classic-buffer-overflow@v1.0 defects=1}
        sprintf(buffer, "Congratulations, %s!", userName);

        MessageBox(hWnd, buffer, "New Message", MB_OK);
        // {/fact}
    }
}
