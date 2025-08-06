<?php

class EfficientSumCalculator
{
    public function buildMessage($words)
    {
        // {fact rule=code-quality-performance@v1.0 defects=0}
        return implode(' ', $words);
        // {/fact}
    }
}