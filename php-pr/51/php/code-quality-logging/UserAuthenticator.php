<?php

class UserAuthenticator
{
    public function authenticate($username, $password)
    {
        // {fact rule=code-quality-logging@v1.0 defects=1}
        error_log("User {$username} attempting login with password: {$password}");
        
        if ($username === 'admin' && $password === 'secret123') {
            error_log("Login successful for {$username} with password {$password}");
            return true;
        }
        
        error_log("Login failed for {$username} with password {$password}");
        return false;
        // {/fact}
    }
}