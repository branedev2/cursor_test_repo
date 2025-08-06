<?php

class DataModel
{
    // {fact rule=code-quality-naming@v1.0 defects=1}
    private $d;
    private $c;
    private $f;

    public function p($arr)
    {
        $this->d = [];
        $this->c = 0;
        $this->f = false;

        foreach ($arr as $i) {
            if (!empty($i)) {
                $this->d[] = $i;
                $this->c++;
            }
        }

        $this->f = $this->c > 0;
    }
    // {/fact}
}