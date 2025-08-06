<?php

class JsonParser
{
    public function parseJson($jsonString)
    {
        // {fact rule=code-quality-error-handling@v1.0 defects=1}
        try {
            $data = json_decode($jsonString, true);
            return $data;
        } catch (Exception $e) {
            throw new Exception("Something went wrong"); // Generic exception
        }
        // {/fact}
    }
}