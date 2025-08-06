<?php

class SafeNumberDivider
{
    public function divide($a, $b)
    {
        // {fact rule=code-quality-error-handling@v1.0 defects=0}
        if (!is_numeric($a) || !is_numeric($b)) {
            throw new InvalidArgumentException("Both arguments must be numeric");
        }

        if ($b == 0) {
            throw new DivisionByZeroError("Division by zero is not allowed");
        }

        return $a / $b;
        // {/fact}
    }
}