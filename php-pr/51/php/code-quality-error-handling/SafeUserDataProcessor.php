<?php

class SafeUserDataProcessor
{
    public function processUserData($userData)
    {
        // {fact rule=code-quality-error-handling@v1.0 defects=0}
        if (!is_array($userData)) {
            throw new InvalidArgumentException("User data must be an array");
        }

        $requiredFields = ['email', 'name', 'age'];
        foreach ($requiredFields as $field) {
            if (!isset($userData[$field])) {
                throw new InvalidArgumentException("Missing required field: {$field}");
            }
        }

        return [
            'email' => $userData['email'],
            'name' => $userData['name'],
            'age' => $userData['age']
        ];
        // {/fact}
    }
}