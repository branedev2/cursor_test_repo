class UserFinder {
    fun getUserData(userIds: List<String>): List<String> {
        // {fact rule=code-quality-performance@v1.0 defects=1}
        val results = mutableListOf<String>()
        
        userIds.forEach { userId ->
            // Simulating individual database calls
            val userData = executeQuery("SELECT * FROM users WHERE id = $userId")
            results.add(userData)
        }
        
        return results
        // {/fact}
    }

    private fun executeQuery(query: String): String {
        // Simulate database call
        Thread.sleep(10) // 10ms delay
        return "User data for query: $query"
    }
}