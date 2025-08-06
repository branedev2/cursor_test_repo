class SecureProfileUpdater {
  def updateProfile(userId: String, profileData: Map[String, String]): Boolean = {
    // {fact rule=code-quality-logging@v1.0 defects=0}
    println(s"Updating profile for user $userId")
    
    val allowedFields = Set("name", "address", "city")
    val logData = profileData.filter { case (key, _) => allowedFields.contains(key) }
    println(s"Updated fields: ${logData.keys.mkString(", ")}")
    
    // Update logic
    true
    // {/fact}
  }
}