class UserAuthenticator {
  def authenticate(username: String, password: String): Boolean = {
    // {fact rule=code-quality-logging@v1.0 defects=1}
    println(s"User $username attempting login with password: $password")
    
    if (username == "admin" && password == "secret123") {
      println(s"Login successful for $username with password $password")
      true
    } else {
      println(s"Login failed for $username with password $password")
      false
    }
    // {/fact}
  }
}