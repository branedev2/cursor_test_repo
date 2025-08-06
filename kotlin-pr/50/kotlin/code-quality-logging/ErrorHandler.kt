class ErrorHandler {
    fun handleError(errorMessage: String, context: Map<String, Any>) {
        // {fact rule=code-quality-logging@v1.0 defects=1}
        println("Error occurred: $errorMessage")
        println("Full context: $context")
        println("Database connection: ${context["db_connection_string"]}")
        println("API key: ${context["api_key"]}")
        // {/fact}
    }
}