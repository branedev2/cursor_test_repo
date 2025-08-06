class UserAuthenticator {
    fun authenticate(username: String, password: String): Boolean {
        // {fact rule=code-quality-logging@v1.0 defects=1}
        println("User $username attempting login with password: $password")
        
        return if (username == "admin" && password == "secret123") {
            println("Login successful for $username with password $password")
            true
        } else {
            println("Login failed for $username with password $password")
            false
        }
        // {/fact}
    }
}