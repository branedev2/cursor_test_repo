#include <iostream>
#include <vector>
#include <algorithm>

class ArrayUtils {
public:
    // {fact rule=code-quality-naming@v1.0 defects=1}
    void sort(std::vector<int>& arr) {
        std::sort(arr.begin(), arr.end());
    }
    // {/fact}
    
    // {fact rule=code-quality-naming@v1.0 defects=0}
    void sortArrayAscending(std::vector<int>& integerArray) {
        std::sort(integerArray.begin(), integerArray.end());
    }
    // {/fact}
    
    // {fact rule=code-quality-naming@v1.0 defects=1}
    int find(const std::vector<int>& arr, int val) {
        for (int i = 0; i < arr.size(); i++) {
            if (arr[i] == val) return i;
        }
        return -1;
    }
    // {/fact}
    
    // {fact rule=code-quality-naming@v1.0 defects=0}
    int findElementIndex(const std::vector<int>& searchArray, int targetValue) {
        for (size_t currentIndex = 0; currentIndex < searchArray.size(); currentIndex++) {
            if (searchArray[currentIndex] == targetValue) return currentIndex;
        }
        return -1;
    }
    // {/fact}
    
    // {fact rule=code-quality-naming@v1.0 defects=1}
    std::vector<int> merge(const std::vector<int>& a, const std::vector<int>& b) {
        std::vector<int> result = a;
        result.insert(result.end(), b.begin(), b.end());
        return result;
    }
    // {/fact}
};

int main() {
    ArrayUtils utils;
    std::vector<int> data = {3, 1, 4, 1, 5};
    utils.sort(data);
    int index = utils.find(data, 4);
    std::cout << "Found at index: " << index << std::endl;
    return 0;
}