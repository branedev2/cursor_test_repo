<?php

class AppConfig
{
    // {fact rule=code-quality-naming@v1.0 defects=1}
    private $cfg;

    public function init()
    {
        $this->cfg = [];
    }

    public function set($k, $v)
    {
        if ($this->cfg === null) $this->init();
        $this->cfg[$k] = $v;
    }

    public function get($k)
    {
        return $this->cfg[$k] ?? '';
    }

    public function chk($k)
    {
        return isset($this->cfg[$k]);
    }
    // {/fact}
}