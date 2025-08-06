#include <iostream>
#include <mutex>
using namespace std;

namespace {
    // {fact rule=multiple-locks@v1.0 defects=0}
    class C {
      std::mutex mutex;
      int f_impl(int n) {
        return (n == 0) ? 1 : n*f_impl(n-1);
      }
    public:
      // GOOD: recursion is delegated to f_impl.
      int f(int n) {
        mutex.lock();
        int result = f_impl(n);
        mutex.unlock();
        return result;
      }
    };
    // {/fact}

    int main() {
        return 1;
    }
}
