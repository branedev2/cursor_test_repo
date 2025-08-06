#include <iostream>

class MemoryManager {
public:
    int* allocateArray(size_t size) {
        // {fact rule=code-quality-error-handling@v1.0 defects=1}
        int* arr = new int[size];
        for (size_t i = 0; i < size; i++) {
            arr[i] = i * 2;
        }
        return arr;
        // {/fact}
    }
    
    void processData(int* data, size_t size) {
        // {fact rule=code-quality-error-handling@v1.0 defects=0}
        if (data == nullptr || size == 0) {
            throw std::invalid_argument("Invalid input parameters");
        }
        for (size_t i = 0; i < size; i++) {
            data[i] *= 3;
        }
        // {/fact}
    }
};

int main() {
    MemoryManager manager;
    int* data = manager.allocateArray(10);
    manager.processData(data, 10);
    delete[] data;
    return 0;
}