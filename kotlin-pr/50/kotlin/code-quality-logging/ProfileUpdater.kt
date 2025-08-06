class ProfileUpdater {
    fun updateProfile(userId: String, profileData: Map<String, String>): Boolean {
        // {fact rule=code-quality-logging@v1.0 defects=1}
        println("Updating profile for user $userId")
        println("Profile data: $profileData")
        println("Email: ${profileData["email"]}")
        println("Phone: ${profileData["phone"]}")
        println("SSN: ${profileData["ssn"]}")
        
        // Update logic
        return true
        // {/fact}
    }
}