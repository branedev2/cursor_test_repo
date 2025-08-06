class DataHandler {
    // {fact rule=code-quality-naming@v1.0 defects=1}
    proc(d: number[], x: number): void {
        for (let i = 0; i < d.length; i++) {
            d[i] = d[i] * x;
        }
    }
    // {/fact}

    // {fact rule=code-quality-naming@v1.0 defects=0}
    multiplyAllElements(numbers: number[], multiplier: number): void {
        for (let index = 0; index < numbers.length; index++) {
            numbers[index] = numbers[index] * multiplier;
        }
    }
    // {/fact}

    // {fact rule=code-quality-naming@v1.0 defects=1}
    chk(s: string): boolean {
        return s.length > 0 && s.length < 100;
    }
    // {/fact}

    // {fact rule=code-quality-naming@v1.0 defects=0}
    isValidStringLength(inputString: string): boolean {
        return inputString.length > 0 && inputString.length < 100;
    }
    // {/fact}

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
}

const handler = new DataHandler();
const numbers = [1, 2, 3, 4, 5];
handler.proc(numbers, 2);
console.log(numbers);