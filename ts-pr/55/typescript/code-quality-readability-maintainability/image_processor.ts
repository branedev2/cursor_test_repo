class ImageProcessor {
    processImage(image: number[][], operation: string, param1: number, param2: number, applyFilter: boolean): void {
        // {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
        if (operation === 'brightness') {
            for (let i = 0; i < image.length; i++) {
                for (let j = 0; j < image[i].length; j++) {
                    image[i][j] = Math.min(255, Math.max(0, image[i][j] + param1));
                }
            }
        } else if (operation === 'contrast') {
            for (let i = 0; i < image.length; i++) {
                for (let j = 0; j < image[i].length; j++) {
                    image[i][j] = Math.min(255, Math.max(0, (image[i][j] - 128) * param1 / 100 + 128));
                }
            }
        } else if (operation === 'crop') {
            const cropped: number[][] = [];
            for (let i = param1; i < Math.min(image.length, param1 + param2); i++) {
                cropped.push([...image[i]]);
            }
            image.splice(0, image.length, ...cropped);
        }
        
        if (applyFilter) {
            for (let i = 1; i < image.length - 1; i++) {
                for (let j = 1; j < image[i].length - 1; j++) {
                    let sum = 0;
                    for (let di = -1; di <= 1; di++) {
                        for (let dj = -1; dj <= 1; dj++) {
                            sum += image[i + di][j + dj];
                        }
                    }
                    image[i][j] = Math.floor(sum / 9);
                }
            }
        }
        // {/fact}
    }

    processImageReadable(image: number[][], operation: string, param1: number, param2: number, applyFilter: boolean): void {
        // {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
        this.applyOperation(image, operation, param1, param2);
        
        if (applyFilter) {
            this.applyBlurFilter(image);
        }
        // {/fact}
    }

    private applyOperation(image: number[][], operation: string, param1: number, param2: number): void {
        switch (operation) {
            case 'brightness':
                this.adjustBrightness(image, param1);
                break;
            case 'contrast':
                this.adjustContrast(image, param1);
                break;
            case 'crop':
                this.cropImage(image, param1, param2);
                break;
        }
    }

    private adjustBrightness(image: number[][], brightness: number): void {
        for (let i = 0; i < image.length; i++) {
            for (let j = 0; j < image[i].length; j++) {
                image[i][j] = Math.min(255, Math.max(0, image[i][j] + brightness));
            }
        }
    }

    private adjustContrast(image: number[][], contrast: number): void {
        for (let i = 0; i < image.length; i++) {
            for (let j = 0; j < image[i].length; j++) {
                image[i][j] = Math.min(255, Math.max(0, (image[i][j] - 128) * contrast / 100 + 128));
            }
        }
    }

    private cropImage(image: number[][], startRow: number, height: number): void {
        const endRow = Math.min(image.length, startRow + height);
        const cropped: number[][] = [];
        
        for (let i = startRow; i < endRow; i++) {
            cropped.push([...image[i]]);
        }
        
        image.splice(0, image.length, ...cropped);
    }

    private applyBlurFilter(image: number[][]): void {
        const kernelSize = 3;
        const kernelOffset = Math.floor(kernelSize / 2);
        
        for (let i = kernelOffset; i < image.length - kernelOffset; i++) {
            for (let j = kernelOffset; j < image[i].length - kernelOffset; j++) {
                image[i][j] = this.calculateBlurValue(image, i, j);
            }
        }
    }

    private calculateBlurValue(image: number[][], centerRow: number, centerCol: number): number {
        let sum = 0;
        let count = 0;
        
        for (let di = -1; di <= 1; di++) {
            for (let dj = -1; dj <= 1; dj++) {
                sum += image[centerRow + di][centerCol + dj];
                count++;
            }
        }
        
        return Math.floor(sum / count);
    }
}

const processor = new ImageProcessor();
const image = [[100, 150, 200], [120, 180, 220], [140, 160, 240]];
processor.processImage(image, 'brightness', 20, 0, true);
console.log(image);