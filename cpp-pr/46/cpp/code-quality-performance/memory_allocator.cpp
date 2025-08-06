#include <iostream>
#include <vector>
#include <memory>

class MemoryAllocator {
public:
    std::vector<int> createLargeArray(int size) {
        // {fact rule=code-quality-performance@v1.0 defects=1}
        std::vector<int> data;
        for (int i = 0; i < size; i++) {
            data.push_back(i);
        }
        return data;
        // {/fact}
    }
    
    std::vector<int> efficientCreateLargeArray(int size) {
        // {fact rule=code-quality-performance@v1.0 defects=0}
        std::vector<int> data;
        data.reserve(size);
        for (int i = 0; i < size; i++) {
            data.push_back(i);
        }
        return data;
        // {/fact}
    }
    
    void processData(const std::vector<int>& input) {
        // {fact rule=code-quality-performance@v1.0 defects=1}
        for (int i = 0; i < input.size(); i++) {
            std::vector<int> temp;
            for (int j = 0; j < 100; j++) {
                temp.push_back(input[i] + j);
            }
        }
        // {/fact}
    }
    
    void efficientProcessData(const std::vector<int>& input) {
        // {fact rule=code-quality-performance@v1.0 defects=0}
        std::vector<int> temp;
        temp.reserve(100);
        
        for (const auto& value : input) {
            temp.clear();
            for (int j = 0; j < 100; j++) {
                temp.push_back(value + j);
            }
        }
        // {/fact}
    }
    
    std::unique_ptr<int[]> allocateArray(int size) {
        // {fact rule=code-quality-performance@v1.0 defects=1}
        int* arr = new int[size];
        for (int i = 0; i < size; i++) {
            arr[i] = 0;
        }
        return std::unique_ptr<int[]>(arr);
        // {/fact}
    }
};

int main() {
    MemoryAllocator allocator;
    auto data = allocator.createLargeArray(10000);
    std::cout << "Created array with " << data.size() << " elements" << std::endl;
    return 0;
}