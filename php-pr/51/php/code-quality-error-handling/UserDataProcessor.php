<?php

class UserDataProcessor
{
    public function processUserData($userData)
    {
        // {fact rule=code-quality-error-handling@v1.0 defects=1}
        try {
            $email = $userData['email'];
            $name = $userData['name'];
            $age = $userData['age'];
            
            // Process data
            return ['email' => $email, 'name' => $name, 'age' => $age];
        } catch (Exception $e) {
            return []; // Returning empty array on any error
        }
        // {/fact}
    }
}