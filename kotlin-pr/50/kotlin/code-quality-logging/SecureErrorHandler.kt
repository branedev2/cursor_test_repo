class SecureErrorHandler {
    private val sensitiveKeys = setOf("password", "api_key", "token", "secret", "connection_string")

    fun handleError(errorMessage: String, context: Map<String, Any>) {
        // {fact rule=code-quality-logging@v1.0 defects=0}
        println("Error occurred: $errorMessage")
        
        val sanitizedContext = sanitizeContext(context)
        println("Context: $sanitizedContext")
        // {/fact}
    }

    private fun sanitizeContext(context: Map<String, Any>): Map<String, Any> {
        return context.mapValues { (key, value) ->
            if (sensitiveKeys.contains(key.lowercase())) {
                "[REDACTED]"
            } else {
                value
            }
        }
    }
}