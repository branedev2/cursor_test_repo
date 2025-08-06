<?php

class RequestDebugger
{
    public function debugRequest($request)
    {
        // {fact rule=code-quality-logging@v1.0 defects=1}
        error_log("Request URL: " . $request['url']);
        error_log("Request headers: " . json_encode($request['headers']));
        error_log("Authorization header: " . $request['headers']['Authorization']);
        error_log("Request body: " . $request['body']);
        error_log("Session data: " . json_encode($_SESSION));
        // {/fact}
    }
}