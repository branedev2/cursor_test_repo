class ProfileUpdater {
  def updateProfile(userId: String, profileData: Map[String, String]): Boolean = {
    // {fact rule=code-quality-logging@v1.0 defects=1}
    println(s"Updating profile for user $userId")
    println(s"Profile data: $profileData")
    println(s"Email: ${profileData.get("email")}")
    println(s"Phone: ${profileData.get("phone")}")
    println(s"SSN: ${profileData.get("ssn")}")
    
    // Update logic
    true
    // {/fact}
  }
}