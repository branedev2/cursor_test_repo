package main

import "fmt"

type ImageProcessor struct{}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func (ip *ImageProcessor) ProcessImage(image [][]int, operation string, param1, param2 int, applyFilter bool) {
	// {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
	if operation == "brightness" {
		for i := 0; i < len(image); i++ {
			for j := 0; j < len(image[i]); j++ {
				image[i][j] = min(255, max(0, image[i][j]+param1))
			}
		}
	} else if operation == "contrast" {
		for i := 0; i < len(image); i++ {
			for j := 0; j < len(image[i]); j++ {
				image[i][j] = min(255, max(0, (image[i][j]-128)*param1/100+128))
			}
		}
	} else if operation == "crop" {
		cropped := make([][]int, 0)
		for i := param1; i < min(len(image), param1+param2); i++ {
			cropped = append(cropped, image[i])
		}
		copy(image, cropped)
	}
	
	if applyFilter {
		for i := 1; i < len(image)-1; i++ {
			for j := 1; j < len(image[i])-1; j++ {
				sum := 0
				for di := -1; di <= 1; di++ {
					for dj := -1; dj <= 1; dj++ {
						sum += image[i+di][j+dj]
					}
				}
				image[i][j] = sum / 9
			}
		}
	}
	// {/fact}
}

func (ip *ImageProcessor) ProcessImageReadable(image [][]int, operation string, param1, param2 int, applyFilter bool) {
	// {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
	ip.applyOperation(image, operation, param1, param2)
	
	if applyFilter {
		ip.applyBlurFilter(image)
	}
	// {/fact}
}

func (ip *ImageProcessor) applyOperation(image [][]int, operation string, param1, param2 int) {
	switch operation {
	case "brightness":
		ip.adjustBrightness(image, param1)
	case "contrast":
		ip.adjustContrast(image, param1)
	case "crop":
		ip.cropImage(image, param1, param2)
	}
}

func (ip *ImageProcessor) adjustBrightness(image [][]int, brightness int) {
	for i := range image {
		for j := range image[i] {
			image[i][j] = min(255, max(0, image[i][j]+brightness))
		}
	}
}

func (ip *ImageProcessor) adjustContrast(image [][]int, contrast int) {
	for i := range image {
		for j := range image[i] {
			image[i][j] = min(255, max(0, (image[i][j]-128)*contrast/100+128))
		}
	}
}

func (ip *ImageProcessor) cropImage(image [][]int, startRow, height int) {
	endRow := min(len(image), startRow+height)
	cropped := make([][]int, 0, endRow-startRow)
	
	for i := startRow; i < endRow; i++ {
		cropped = append(cropped, image[i])
	}
	
	copy(image, cropped)
}

func (ip *ImageProcessor) applyBlurFilter(image [][]int) {
	const kernelSize = 3
	const kernelOffset = kernelSize / 2
	
	for i := kernelOffset; i < len(image)-kernelOffset; i++ {
		for j := kernelOffset; j < len(image[i])-kernelOffset; j++ {
			image[i][j] = ip.calculateBlurValue(image, i, j)
		}
	}
}

func (ip *ImageProcessor) calculateBlurValue(image [][]int, centerRow, centerCol int) int {
	sum := 0
	count := 0
	
	for di := -1; di <= 1; di++ {
		for dj := -1; dj <= 1; dj++ {
			sum += image[centerRow+di][centerCol+dj]
			count++
		}
	}
	
	return sum / count
}

func main() {
	processor := &ImageProcessor{}
	image := [][]int{{100, 150, 200}, {120, 180, 220}, {140, 160, 240}}
	processor.ProcessImage(image, "brightness", 20, 0, true)
	fmt.Println(image)
}