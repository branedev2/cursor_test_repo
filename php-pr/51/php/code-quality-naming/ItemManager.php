<?php

class ItemManager
{
    // {fact rule=code-quality-naming@v1.0 defects=1}
    private $stuff;

    public function doThing($thing1, $thing2)
    {
        if ($this->stuff === null) {
            $this->stuff = [];
        }

        $temp = $thing1 . $thing2;
        $this->stuff[$thing1] = $temp;
        
        return isset($this->stuff[$thing1]);
    }

    public function getThing($key)
    {
        return $this->stuff[$key] ?? null;
    }
    // {/fact}
}