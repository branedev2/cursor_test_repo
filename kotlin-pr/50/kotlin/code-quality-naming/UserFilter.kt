class UserFilter {
    // {fact rule=code-quality-naming@v1.0 defects=0}
    private var userCredentials: MutableMap<String, String>? = null

    fun storeUserCredentials(username: String, password: String): Boolean {
        if (userCredentials == null) {
            userCredentials = mutableMapOf()
        }

        val hashedPassword = username + password // Simplified hashing
        userCredentials!![username] = hashedPassword
        
        return userCredentials!!.containsKey(username)
    }

    fun getUserCredentials(username: String): String? {
        return userCredentials?.get(username)
    }
    // {/fact}
}