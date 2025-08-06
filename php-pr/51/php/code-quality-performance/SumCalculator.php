<?php

class SumCalculator
{
    public function buildMessage($words)
    {
        // {fact rule=code-quality-performance@v1.0 defects=1}
        $result = '';
        
        for ($i = 0; $i < count($words); $i++) {
            $result .= $words[$i] . ' ';
        }
        
        return trim($result);
        // {/fact}
    }
}