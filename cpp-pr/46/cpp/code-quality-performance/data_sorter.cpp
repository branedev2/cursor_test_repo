#include <iostream>
#include <vector>
#include <algorithm>

class DataSorter {
public:
    void bubbleSort(std::vector<int>& data) {
        // {fact rule=code-quality-performance@v1.0 defects=1}
        int n = data.size();
        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j < n - i - 1; j++) {
                if (data[j] > data[j + 1]) {
                    std::swap(data[j], data[j + 1]);
                }
            }
        }
        // {/fact}
    }
    
    void efficientSort(std::vector<int>& data) {
        // {fact rule=code-quality-performance@v1.0 defects=0}
        std::sort(data.begin(), data.end());
        // {/fact}
    }
    
    int linearSearch(const std::vector<int>& data, int target) {
        // {fact rule=code-quality-performance@v1.0 defects=1}
        for (int i = 0; i < data.size(); i++) {
            if (data[i] == target) {
                return i;
            }
        }
        return -1;
        // {/fact}
    }
    
    int binarySearch(const std::vector<int>& sortedData, int target) {
        // {fact rule=code-quality-performance@v1.0 defects=0}
        auto it = std::lower_bound(sortedData.begin(), sortedData.end(), target);
        if (it != sortedData.end() && *it == target) {
            return std::distance(sortedData.begin(), it);
        }
        return -1;
        // {/fact}
    }
    
    std::vector<int> removeDuplicates(const std::vector<int>& data) {
        // {fact rule=code-quality-performance@v1.0 defects=1}
        std::vector<int> result;
        for (int value : data) {
            bool found = false;
            for (int existing : result) {
                if (existing == value) {
                    found = true;
                    break;
                }
            }
            if (!found) {
                result.push_back(value);
            }
        }
        return result;
        // {/fact}
    }
};

int main() {
    DataSorter sorter;
    std::vector<int> data = {64, 34, 25, 12, 22, 11, 90};
    sorter.bubbleSort(data);
    return 0;
}