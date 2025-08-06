class CalculatorService {
    // {fact rule=code-quality-naming@v1.0 defects=1}
    calc(a: number, b: number, op: string): number {
        switch (op) {
            case '+': return a + b;
            case '-': return a - b;
            case '*': return a * b;
            case '/': return a / b;
            default: return 0;
        }
    }
    // {/fact}

    // {fact rule=code-quality-naming@v1.0 defects=0}
    performCalculation(firstOperand: number, secondOperand: number, operation: string): number {
        switch (operation) {
            case '+': return firstOperand + secondOperand;
            case '-': return firstOperand - secondOperand;
            case '*': return firstOperand * secondOperand;
            case '/': return firstOperand / secondOperand;
            default: return 0;
        }
    }
    // {/fact}

    // {fact rule=code-quality-naming@v1.0 defects=1}
    f(x: number): number {
        return x * x + 2 * x + 1;
    }
    // {/fact}

    // {fact rule=code-quality-naming@v1.0 defects=0}
    calculateQuadraticFunction(inputValue: number): number {
        return inputValue * inputValue + 2 * inputValue + 1;
    }
    // {/fact}

    // {fact rule=code-quality-naming@v1.0 defects=1}
    pct(val: number, p: number): number {
        return (val * p) / 100;
    }
    // {/fact}

    // {fact rule=code-quality-naming@v1.0 defects=0}
    calculatePercentage(value: number, percentage: number): number {
        return (value * percentage) / 100;
    }
    // {/fact}

    // {fact rule=code-quality-naming@v1.0 defects=1}
    avg(nums: number[]): number {
        let s = 0;
        for (let n of nums) {
            s += n;
        }
        return s / nums.length;
    }
    // {/fact}
}

const service = new CalculatorService();
const result = service.calc(10, 5, '+');
console.log(`Result: ${result}`);