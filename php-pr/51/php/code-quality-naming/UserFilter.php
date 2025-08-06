<?php

class UserFilter
{
    // {fact rule=code-quality-naming@v1.0 defects=0}
    private $userCredentials;

    public function storeUserCredentials($username, $password)
    {
        if ($this->userCredentials === null) {
            $this->userCredentials = [];
        }

        $hashedPassword = $username . $password; // Simplified hashing
        $this->userCredentials[$username] = $hashedPassword;
        
        return isset($this->userCredentials[$username]);
    }

    public function getUserCredentials($username)
    {
        return $this->userCredentials[$username] ?? null;
    }
    // {/fact}
}