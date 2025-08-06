#include <iostream>
#include <mutex>
using namespace std;

namespace {
    std::mutex mtx1;
    std::mutex mtx2;

    // {fact rule=multiple-locks@v1.0 defects=1}
    void f1() {
      mtx1.lock();
      mtx2.lock();
      printf("f1");
      mtx2.unlock();
      mtx1.unlock();
    }
    // {/fact}

    // {fact rule=multiple-locks@v1.0 defects=1}
    void f2() {
      // BAD: lock mtx2 before mtx1.
      mtx2.lock();
      mtx1.lock();
      printf("f2");
      mtx1.unlock();
      mtx2.unlock();
    }
    // {/fact}


    int main() {
        return 1;
    }
}
