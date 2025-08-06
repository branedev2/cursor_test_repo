<?php

class EfficientUserFinder
{
    public function getUserData($userIds)
    {
        // {fact rule=code-quality-performance@v1.0 defects=0}
        if (empty($userIds)) {
            return [];
        }

        $userIdList = implode(',', $userIds);
        $batchQuery = "SELECT * FROM users WHERE id IN ({$userIdList})";
        
        return $this->executeBatchQuery($batchQuery, count($userIds));
        // {/fact}
    }

    private function executeBatchQuery($query, $expectedCount)
    {
        // Simulate single batch database call
        usleep(50000); // 50ms delay
        
        $results = [];
        for ($i = 0; $i < $expectedCount; $i++) {
            $results[] = "User data from batch query: {$query}";
        }
        return $results;
    }
}