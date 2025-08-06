#include <iostream>
#include <vector>
#include <string>

class ImageProcessor {
public:
    void processImage(std::vector<std::vector<int>>& image, const std::string& operation, int param1, int param2, bool applyFilter) {
        // {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
        if (operation == "brightness") {
            for (int i = 0; i < image.size(); i++) {
                for (int j = 0; j < image[i].size(); j++) {
                    image[i][j] = std::min(255, std::max(0, image[i][j] + param1));
                }
            }
        } else if (operation == "contrast") {
            for (int i = 0; i < image.size(); i++) {
                for (int j = 0; j < image[i].size(); j++) {
                    image[i][j] = std::min(255, std::max(0, (image[i][j] - 128) * param1 / 100 + 128));
                }
            }
        } else if (operation == "crop") {
            std::vector<std::vector<int>> cropped;
            for (int i = param1; i < std::min((int)image.size(), param1 + param2); i++) {
                cropped.push_back(image[i]);
            }
            image = cropped;
        }
        
        if (applyFilter) {
            for (int i = 1; i < image.size() - 1; i++) {
                for (int j = 1; j < image[i].size() - 1; j++) {
                    int sum = 0;
                    for (int di = -1; di <= 1; di++) {
                        for (int dj = -1; dj <= 1; dj++) {
                            sum += image[i + di][j + dj];
                        }
                    }
                    image[i][j] = sum / 9;
                }
            }
        }
        // {/fact}
    }
    
    void processImageReadable(std::vector<std::vector<int>>& image, const std::string& operation, int param1, int param2, bool applyFilter) {
        // {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
        applyOperation(image, operation, param1, param2);
        
        if (applyFilter) {
            applyBlurFilter(image);
        }
        // {/fact}
    }
    
private:
    void applyOperation(std::vector<std::vector<int>>& image, const std::string& operation, int param1, int param2) {
        if (operation == "brightness") {
            adjustBrightness(image, param1);
        } else if (operation == "contrast") {
            adjustContrast(image, param1);
        } else if (operation == "crop") {
            cropImage(image, param1, param2);
        }
    }
    
    void adjustBrightness(std::vector<std::vector<int>>& image, int brightness) {
        for (auto& row : image) {
            for (auto& pixel : row) {
                pixel = std::min(255, std::max(0, pixel + brightness));
            }
        }
    }
    
    void adjustContrast(std::vector<std::vector<int>>& image, int contrast) {
        for (auto& row : image) {
            for (auto& pixel : row) {
                pixel = std::min(255, std::max(0, (pixel - 128) * contrast / 100 + 128));
            }
        }
    }
    
    void cropImage(std::vector<std::vector<int>>& image, int startRow, int height) {
        std::vector<std::vector<int>> cropped;
        int endRow = std::min((int)image.size(), startRow + height);
        
        for (int i = startRow; i < endRow; i++) {
            cropped.push_back(image[i]);
        }
        
        image = cropped;
    }
    
    void applyBlurFilter(std::vector<std::vector<int>>& image) {
        const int KERNEL_SIZE = 3;
        const int KERNEL_OFFSET = KERNEL_SIZE / 2;
        
        for (int i = KERNEL_OFFSET; i < image.size() - KERNEL_OFFSET; i++) {
            for (int j = KERNEL_OFFSET; j < image[i].size() - KERNEL_OFFSET; j++) {
                image[i][j] = calculateBlurValue(image, i, j);
            }
        }
    }
    
    int calculateBlurValue(const std::vector<std::vector<int>>& image, int centerRow, int centerCol) {
        int sum = 0;
        int count = 0;
        
        for (int di = -1; di <= 1; di++) {
            for (int dj = -1; dj <= 1; dj++) {
                sum += image[centerRow + di][centerCol + dj];
                count++;
            }
        }
        
        return sum / count;
    }
};

int main() {
    ImageProcessor processor;
    std::vector<std::vector<int>> image = {{100, 150, 200}, {120, 180, 220}, {140, 160, 240}};
    processor.processImage(image, "brightness", 20, 0, true);
    return 0;
}