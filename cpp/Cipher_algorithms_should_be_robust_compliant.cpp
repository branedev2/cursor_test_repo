using namespace std;

namespace{
    class Botan {
      public:
        class Cipher_Mode {
            public:
              static void create(char* algo, int enc) {
    
              }
        };
    
        static const int ENCRYPTION = 2;
    };
    
    
    // {fact rule=insecure-cryptography@v1.0 defects=0}
    void encrypt() {
      Botan::Cipher_Mode::create("AES-256/GCM", Botan::ENCRYPTION);
    }
    // {/fact}
    int main() {
      return 1;
    }
}

