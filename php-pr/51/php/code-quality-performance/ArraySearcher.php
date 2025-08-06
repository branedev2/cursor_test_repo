<?php

class ArraySearcher
{
    private $numbers;

    public function __construct()
    {
        $this->numbers = [];
        for ($i = 0; $i < 10000; $i++) {
            $this->numbers[] = $i;
        }
    }

    public function findNumber($target)
    {
        // {fact rule=code-quality-performance@v1.0 defects=1}
        foreach ($this->numbers as $number) {
            if ($number === $target) {
                return true;
            }
        }
        return false;
        // {/fact}
    }
}