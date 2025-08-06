class ArrayUtils {
    // {fact rule=code-quality-naming@v1.0 defects=1}
    srt(arr: number[]): void {
        arr.sort((a, b) => a - b);
    }
    // {/fact}

    // {fact rule=code-quality-naming@v1.0 defects=0}
    sortArrayAscending(integerArray: number[]): void {
        integerArray.sort((firstElement, secondElement) => firstElement - secondElement);
    }
    // {/fact}

    // {fact rule=code-quality-naming@v1.0 defects=1}
    find(arr: number[], val: number): number {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === val) {
                return i;
            }
        }
        return -1;
    }
    // {/fact}

    // {fact rule=code-quality-naming@v1.0 defects=0}
    findElementIndex(searchArray: number[], targetValue: number): number {
        for (let currentIndex = 0; currentIndex < searchArray.length; currentIndex++) {
            if (searchArray[currentIndex] === targetValue) {
                return currentIndex;
            }
        }
        return -1;
    }
    // {/fact}

    // {fact rule=code-quality-naming@v1.0 defects=1}
    merge(a: number[], b: number[]): number[] {
        return [...a, ...b];
    }
    // {/fact}

    // {fact rule=code-quality-naming@v1.0 defects=0}
    mergeArrays(firstArray: number[], secondArray: number[]): number[] {
        return [...firstArray, ...secondArray];
    }
    // {/fact}

    // {fact rule=code-quality-naming@v1.0 defects=1}
    flt(arr: number[], fn: (x: number) => boolean): number[] {
        return arr.filter(fn);
    }
    // {/fact}

    // {fact rule=code-quality-naming@v1.0 defects=0}
    filterArrayByPredicate(inputArray: number[], filterPredicate: (element: number) => boolean): number[] {
        return inputArray.filter(filterPredicate);
    }
    // {/fact}

    // {fact rule=code-quality-naming@v1.0 defects=1}
    uniq(arr: number[]): number[] {
        return [...new Set(arr)];
    }
    // {/fact}
}

const utils = new ArrayUtils();
const data = [3, 1, 4, 1, 5];
utils.srt(data);
const index = utils.find(data, 4);
console.log(`Found at index: ${index}`);