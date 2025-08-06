class Calculator {
    divide(a: number, b: number): number {
        // {fact rule=code-quality-error-handling@v1.0 defects=1}
        return a / b;
        // {/fact}
    }

    safeDivide(a: number, b: number): number {
        // {fact rule=code-quality-error-handling@v1.0 defects=0}
        if (b === 0) {
            throw new Error('Division by zero is not allowed');
        }
        return a / b;
        // {/fact}
    }

    squareRoot(value: number): number {
        // {fact rule=code-quality-error-handling@v1.0 defects=1}
        return Math.sqrt(value);
        // {/fact}
    }

    safeSquareRoot(value: number): number {
        // {fact rule=code-quality-error-handling@v1.0 defects=0}
        if (value < 0) {
            throw new Error('Cannot calculate square root of negative number');
        }
        return Math.sqrt(value);
        // {/fact}
    }

    logarithm(value: number): number {
        // {fact rule=code-quality-error-handling@v1.0 defects=1}
        return Math.log(value);
        // {/fact}
    }

    safeLogarithm(value: number): number {
        // {fact rule=code-quality-error-handling@v1.0 defects=0}
        if (value <= 0) {
            throw new Error('Logarithm undefined for non-positive numbers');
        }
        return Math.log(value);
        // {/fact}
    }

    factorial(n: number): number {
        // {fact rule=code-quality-error-handling@v1.0 defects=1}
        if (n <= 1) return 1;
        return n * this.factorial(n - 1);
        // {/fact}
    }

    safeFactorial(n: number): number {
        // {fact rule=code-quality-error-handling@v1.0 defects=0}
        if (!Number.isInteger(n) || n < 0) {
            throw new Error('Factorial is only defined for non-negative integers');
        }
        if (n > 170) {
            throw new Error('Factorial result would be too large');
        }
        if (n <= 1) return 1;
        return n * this.safeFactorial(n - 1);
        // {/fact}
    }
}

const calc = new Calculator();
const result = calc.divide(10, 2);
console.log(`Result: ${result}`);