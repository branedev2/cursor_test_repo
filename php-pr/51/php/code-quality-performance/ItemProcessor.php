<?php

class ItemProcessor
{
    public function processNumbers($count)
    {
        // {fact rule=code-quality-performance@v1.0 defects=1}
        $numbers = [];
        
        for ($i = 0; $i < $count; $i++) {
            $numbers[] = $i * 2;
        }
        
        return $numbers;
        // {/fact}
    }
}