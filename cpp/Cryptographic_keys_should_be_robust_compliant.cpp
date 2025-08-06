#include <iostream>
#include <memory>
using namespace std;

namespace{
    class Botan {
        public:
            class RandomNumberGenerator {
    
            };
    
            class System_RNG : public RandomNumberGenerator {
    
            };
    
            class RSA_PrivateKey {
                public:
                    RSA_PrivateKey(Botan::RandomNumberGenerator rng, int size) {
    
                    }
            };
    
            static void DL_Group(char* str) {
    
            }
    
            static void EC_Group(char* str) {
    
            }
    };
    
    
    // {fact rule=insecure-cryptography@v1.0 defects=0}
    void encrypt1() {
        std::unique_ptr<Botan::RandomNumberGenerator>   rng(new Botan::System_RNG);
        Botan::RSA_PrivateKey                           rsaKey(*rng, 2048);
    }
    // {/fact}
    
    // {fact rule=insecure-cryptography@v1.0 defects=0}
    void encrypt2() {
        Botan::DL_Group("dsa/botan/2048");
    }
    // {/fact}
    
    // {fact rule=insecure-cryptography@v1.0 defects=0}
    void encrypt3() {
        Botan::EC_Group("secp224k1");
    }
    // {/fact}
    
    int main() {
        return 1;
    }
}

