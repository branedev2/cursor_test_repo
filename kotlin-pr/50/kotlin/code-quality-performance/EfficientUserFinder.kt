class EfficientUserFinder {
    fun getUserData(userIds: List<String>): List<String> {
        // {fact rule=code-quality-performance@v1.0 defects=0}
        if (userIds.isEmpty()) return emptyList()

        val userIdList = userIds.joinToString(",")
        val batchQuery = "SELECT * FROM users WHERE id IN ($userIdList)"
        
        return executeBatchQuery(batchQuery, userIds.size)
        // {/fact}
    }

    private fun executeBatchQuery(query: String, expectedCount: Int): List<String> {
        // Simulate single batch database call
        Thread.sleep(50) // 50ms delay
        
        return (1..expectedCount).map {
            "User data from batch query: $query"
        }
    }
}