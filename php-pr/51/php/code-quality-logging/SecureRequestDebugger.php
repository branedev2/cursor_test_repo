<?php

class SecureRequestDebugger
{
    public function debugRequest($request)
    {
        // {fact rule=code-quality-logging@v1.0 defects=0}
        error_log("Request URL: " . $request['url']);
        error_log("Request method: " . $request['method']);
        error_log("Content-Type: " . ($request['headers']['Content-Type'] ?? 'not set'));
        error_log("Request size: " . strlen($request['body']) . " bytes");
        error_log("Session active: " . (session_status() === PHP_SESSION_ACTIVE ? 'yes' : 'no'));
        // {/fact}
    }
}