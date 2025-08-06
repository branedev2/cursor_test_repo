<?php

class TaskManager
{
    // {fact rule=code-quality-naming@v1.0 defects=0}
    private $configurationSettings;

    public function initialize()
    {
        $this->configurationSettings = [];
    }

    public function setConfigurationValue($key, $value)
    {
        if ($this->configurationSettings === null) $this->initialize();
        $this->configurationSettings[$key] = $value;
    }

    public function getConfigurationValue($key)
    {
        return $this->configurationSettings[$key] ?? '';
    }

    public function hasConfigurationKey($key)
    {
        return isset($this->configurationSettings[$key]);
    }
    // {/fact}
}