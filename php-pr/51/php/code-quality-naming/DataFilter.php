<?php

class DataFilter
{
    // {fact rule=code-quality-naming@v1.0 defects=1}
    public function m1($l, &$r1, &$r2)
    {
        $r1 = 0;
        $r2 = 0.0;
        
        foreach ($l as $x) {
            $r1 += $x;
        }
        
        $r2 = count($l) > 0 ? $r1 / count($l) : 0;
    }

    public function m2($v1, $v2)
    {
        return "T: {$v1}, A: " . number_format($v2, 2);
    }
    // {/fact}
}