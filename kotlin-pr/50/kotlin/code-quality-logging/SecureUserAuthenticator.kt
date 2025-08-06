class SecureUserAuthenticator {
    fun authenticate(username: String, password: String): Boolean {
        // {fact rule=code-quality-logging@v1.0 defects=0}
        println("Authentication attempt for user: $username")
        
        return if (username == "admin" && password == "secret123") {
            println("Authentication successful for user: $username")
            true
        } else {
            println("Authentication failed for user: $username")
            false
        }
        // {/fact}
    }
}