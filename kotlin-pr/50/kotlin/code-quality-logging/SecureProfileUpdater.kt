class SecureProfileUpdater {
    fun updateProfile(userId: String, profileData: Map<String, String>): Boolean {
        // {fact rule=code-quality-logging@v1.0 defects=0}
        println("Updating profile for user $userId")
        
        val allowedFields = setOf("name", "address", "city")
        val logData = profileData.filterKeys { it in allowedFields }
        println("Updated fields: ${logData.keys.joinToString(", ")}")
        
        // Update logic
        return true
        // {/fact}
    }
}