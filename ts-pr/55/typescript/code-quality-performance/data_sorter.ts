class DataSorter {
    bubbleSort(data: number[]): void {
        // {fact rule=code-quality-performance@v1.0 defects=1}
        const n = data.length;
        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                if (data[j] > data[j + 1]) {
                    const temp = data[j];
                    data[j] = data[j + 1];
                    data[j + 1] = temp;
                }
            }
        }
        // {/fact}
    }

    efficientSort(data: number[]): void {
        // {fact rule=code-quality-performance@v1.0 defects=0}
        data.sort((a, b) => a - b);
        // {/fact}
    }

    linearSearch(data: number[], target: number): number {
        // {fact rule=code-quality-performance@v1.0 defects=1}
        for (let i = 0; i < data.length; i++) {
            if (data[i] === target) {
                return i;
            }
        }
        return -1;
        // {/fact}
    }

    binarySearch(sortedData: number[], target: number): number {
        // {fact rule=code-quality-performance@v1.0 defects=0}
        let left = 0;
        let right = sortedData.length - 1;
        
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (sortedData[mid] === target) {
                return mid;
            } else if (sortedData[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return -1;
        // {/fact}
    }

    findMinMax(data: number[]): [number, number] {
        // {fact rule=code-quality-performance@v1.0 defects=1}
        const sorted = [...data].sort((a, b) => a - b);
        return [sorted[0], sorted[sorted.length - 1]];
        // {/fact}
    }

    efficientFindMinMax(data: number[]): [number, number] {
        // {fact rule=code-quality-performance@v1.0 defects=0}
        if (data.length === 0) {
            return [0, 0];
        }
        
        let min = data[0];
        let max = data[0];
        
        for (let i = 1; i < data.length; i++) {
            if (data[i] < min) {
                min = data[i];
            }
            if (data[i] > max) {
                max = data[i];
            }
        }
        
        return [min, max];
        // {/fact}
    }

    selectionSort(data: number[]): void {
        // {fact rule=code-quality-performance@v1.0 defects=1}
        const n = data.length;
        for (let i = 0; i < n - 1; i++) {
            let minIdx = i;
            for (let j = i + 1; j < n; j++) {
                if (data[j] < data[minIdx]) {
                    minIdx = j;
                }
            }
            if (minIdx !== i) {
                const temp = data[i];
                data[i] = data[minIdx];
                data[minIdx] = temp;
            }
        }
        // {/fact}
    }
}

const sorter = new DataSorter();
const data = [64, 34, 25, 12, 22, 11, 90];
sorter.bubbleSort(data);
console.log(data);