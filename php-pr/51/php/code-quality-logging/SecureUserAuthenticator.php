<?php

class SecureUserAuthenticator
{
    public function authenticate($username, $password)
    {
        // {fact rule=code-quality-logging@v1.0 defects=0}
        error_log("Authentication attempt for user: {$username}");
        
        if ($username === 'admin' && $password === 'secret123') {
            error_log("Authentication successful for user: {$username}");
            return true;
        }
        
        error_log("Authentication failed for user: {$username}");
        return false;
        // {/fact}
    }
}