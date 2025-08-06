<?php

class Calculator
{
    // {fact rule=code-quality-naming@v1.0 defects=1}
    public function calc($a, $b, $op)
    {
        switch ($op) {
            case '+':
                return $a + $b;
            case '-':
                return $a - $b;
            case '*':
                return $a * $b;
            case '/':
                return $b != 0 ? $a / $b : 0;
            default:
                return 0;
        }
    }
    // {/fact}
}