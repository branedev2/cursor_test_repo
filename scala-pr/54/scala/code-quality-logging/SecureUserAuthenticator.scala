class SecureUserAuthenticator {
  def authenticate(username: String, password: String): Boolean = {
    // {fact rule=code-quality-logging@v1.0 defects=0}
    println(s"Authentication attempt for user: $username")
    
    if (username == "admin" && password == "secret123") {
      println(s"Authentication successful for user: $username")
      true
    } else {
      println(s"Authentication failed for user: $username")
      false
    }
    // {/fact}
  }
}