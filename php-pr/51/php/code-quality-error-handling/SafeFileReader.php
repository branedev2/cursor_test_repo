<?php

class SafeFileReader
{
    public function readFile($filename)
    {
        // {fact rule=code-quality-error-handling@v1.0 defects=0}
        if (!file_exists($filename)) {
            throw new InvalidArgumentException("File does not exist: {$filename}");
        }

        if (!is_readable($filename)) {
            throw new RuntimeException("File is not readable: {$filename}");
        }

        $content = file_get_contents($filename);
        if ($content === false) {
            throw new RuntimeException("Failed to read file: {$filename}");
        }

        return $content;
        // {/fact}
    }
}