<?php

class SecureProfileUpdater
{
    public function updateProfile($userId, $profileData)
    {
        // {fact rule=code-quality-logging@v1.0 defects=0}
        error_log("Updating profile for user {$userId}");
        
        $allowedFields = ['name', 'address', 'city'];
        $logData = array_intersect_key($profileData, array_flip($allowedFields));
        error_log("Updated fields: " . json_encode(array_keys($logData)));
        
        // Update logic
        return true;
        // {/fact}
    }
}