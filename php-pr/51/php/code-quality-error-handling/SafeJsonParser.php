<?php

class SafeJsonParser
{
    public function parseJson($jsonString)
    {
        // {fact rule=code-quality-error-handling@v1.0 defects=0}
        if (empty($jsonString)) {
            throw new InvalidArgumentException("JSON string cannot be empty");
        }

        $data = json_decode($jsonString, true);
        
        if (json_last_error() !== JSON_ERROR_NONE) {
            throw new InvalidArgumentException("Invalid JSON: " . json_last_error_msg());
        }

        return $data;
        // {/fact}
    }
}