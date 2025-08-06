<?php

class UserFinder
{
    public function getUserData($userIds)
    {
        // {fact rule=code-quality-performance@v1.0 defects=1}
        $results = [];
        
        foreach ($userIds as $userId) {
            // Simulating individual database calls
            $userData = $this->executeQuery("SELECT * FROM users WHERE id = {$userId}");
            $results[] = $userData;
        }
        
        return $results;
        // {/fact}
    }

    private function executeQuery($query)
    {
        // Simulate database call
        usleep(10000); // 10ms delay
        return "User data for query: {$query}";
    }
}