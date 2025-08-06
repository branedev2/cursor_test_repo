<?php

class EfficientItemProcessor
{
    public function processNumbers($count)
    {
        // {fact rule=code-quality-performance@v1.0 defects=0}
        $numbers = array_fill(0, $count, 0); // Pre-allocate array
        
        for ($i = 0; $i < $count; $i++) {
            $numbers[$i] = $i * 2;
        }
        
        return $numbers;
        // {/fact}
    }
}