<?php

class TaxCalculator
{
    // {fact rule=code-quality-naming@v1.0 defects=0}
    public function performCalculation($firstOperand, $secondOperand, $operation)
    {
        switch ($operation) {
            case '+':
                return $firstOperand + $secondOperand;
            case '-':
                return $firstOperand - $secondOperand;
            case '*':
                return $firstOperand * $secondOperand;
            case '/':
                return $secondOperand != 0 ? $firstOperand / $secondOperand : 0;
            default:
                throw new InvalidArgumentException("Unsupported operation: {$operation}");
        }
    }
    // {/fact}
}