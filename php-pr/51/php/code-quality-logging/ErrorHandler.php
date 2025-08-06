<?php

class ErrorHandler
{
    public function handleError($errorMessage, $context)
    {
        // {fact rule=code-quality-logging@v1.0 defects=1}
        error_log("Error occurred: {$errorMessage}");
        error_log("Full context: " . print_r($context, true));
        error_log("Database connection: " . $context['db_connection_string']);
        error_log("API key: " . $context['api_key']);
        // {/fact}
    }
}