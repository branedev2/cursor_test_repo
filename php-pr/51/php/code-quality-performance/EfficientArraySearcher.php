<?php

class EfficientArraySearcher
{
    private $numbers;

    public function __construct()
    {
        $this->numbers = [];
        for ($i = 0; $i < 10000; $i++) {
            $this->numbers[$i] = true; // Using array keys for O(1) lookup
        }
    }

    public function findNumber($target)
    {
        // {fact rule=code-quality-performance@v1.0 defects=0}
        return isset($this->numbers[$target]);
        // {/fact}
    }
}