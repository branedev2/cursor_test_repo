<?php

class FileReader
{
    public function readFile($filename)
    {
        // {fact rule=code-quality-error-handling@v1.0 defects=1}
        try {
            $content = file_get_contents($filename);
            return $content;
        } catch (Exception $e) {
            return false; // Hiding exception details
        }
        // {/fact}
    }
}