class ErrorHandler {
  def handleError(errorMessage: String, context: Map[String, Any]): Unit = {
    // {fact rule=code-quality-logging@v1.0 defects=1}
    println(s"Error occurred: $errorMessage")
    println(s"Full context: $context")
    println(s"Database connection: ${context.get("db_connection_string")}")
    println(s"API key: ${context.get("api_key")}")
    // {/fact}
  }
}