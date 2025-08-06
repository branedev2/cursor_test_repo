<?php

class ProfileUpdater
{
    public function updateProfile($userId, $profileData)
    {
        // {fact rule=code-quality-logging@v1.0 defects=1}
        error_log("Updating profile for user {$userId}");
        error_log("Profile data: " . json_encode($profileData));
        error_log("Email: " . $profileData['email']);
        error_log("Phone: " . $profileData['phone']);
        error_log("SSN: " . $profileData['ssn']);
        
        // Update logic
        return true;
        // {/fact}
    }
}