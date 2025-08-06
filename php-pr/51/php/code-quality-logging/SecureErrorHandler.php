<?php

class SecureErrorHandler
{
    private $sensitiveKeys = ['password', 'api_key', 'token', 'secret', 'connection_string'];

    public function handleError($errorMessage, $context)
    {
        // {fact rule=code-quality-logging@v1.0 defects=0}
        error_log("Error occurred: {$errorMessage}");
        
        $sanitizedContext = $this->sanitizeContext($context);
        error_log("Context: " . json_encode($sanitizedContext));
        // {/fact}
    }

    private function sanitizeContext($context)
    {
        $sanitized = [];
        foreach ($context as $key => $value) {
            if (in_array(strtolower($key), $this->sensitiveKeys)) {
                $sanitized[$key] = '[REDACTED]';
            } else {
                $sanitized[$key] = $value;
            }
        }
        return $sanitized;
    }
}