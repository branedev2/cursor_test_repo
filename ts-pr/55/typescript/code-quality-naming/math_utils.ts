class MathUtils {
    // {fact rule=code-quality-naming@v1.0 defects=1}
    avg(nums: number[]): number {
        const s = nums.reduce((acc, n) => acc + n, 0);
        return s / nums.length;
    }
    // {/fact}

    // {fact rule=code-quality-naming@v1.0 defects=0}
    calculateAverage(numbers: number[]): number {
        const sum = numbers.reduce((accumulator, number) => accumulator + number, 0);
        return sum / numbers.length;
    }
    // {/fact}

    // {fact rule=code-quality-naming@v1.0 defects=1}
    dist(x1: number, y1: number, x2: number, y2: number): number {
        const dx = x2 - x1;
        const dy = y2 - y1;
        return Math.sqrt(dx * dx + dy * dy);
    }
    // {/fact}

    // {fact rule=code-quality-naming@v1.0 defects=0}
    calculateEuclideanDistance(firstPointX: number, firstPointY: number, secondPointX: number, secondPointY: number): number {
        const deltaX = secondPointX - firstPointX;
        const deltaY = secondPointY - firstPointY;
        return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    }
    // {/fact}

    // {fact rule=code-quality-naming@v1.0 defects=1}
    isPrime(n: number): boolean {
        if (n <= 1) return false;
        for (let i = 2; i * i <= n; i++) {
            if (n % i === 0) return false;
        }
        return true;
    }
    // {/fact}

    // {fact rule=code-quality-naming@v1.0 defects=0}
    isPrimeNumber(candidateNumber: number): boolean {
        if (candidateNumber <= 1) return false;
        for (let divisor = 2; divisor * divisor <= candidateNumber; divisor++) {
            if (candidateNumber % divisor === 0) return false;
        }
        return true;
    }
    // {/fact}

    // {fact rule=code-quality-naming@v1.0 defects=1}
    gcd(a: number, b: number): number {
        while (b !== 0) {
            const t = b;
            b = a % b;
            a = t;
        }
        return a;
    }
    // {/fact}

    // {fact rule=code-quality-naming@v1.0 defects=0}
    calculateGreatestCommonDivisor(firstNumber: number, secondNumber: number): number {
        while (secondNumber !== 0) {
            const temp = secondNumber;
            secondNumber = firstNumber % secondNumber;
            firstNumber = temp;
        }
        return firstNumber;
    }
    // {/fact}
}

const utils = new MathUtils();
const data = [1.0, 2.0, 3.0, 4.0, 5.0];
const average = utils.avg(data);
console.log(`Average: ${average}`);