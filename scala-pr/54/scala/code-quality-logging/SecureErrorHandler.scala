class SecureErrorHandler {
  private val sensitiveKeys = Set("password", "api_key", "token", "secret", "connection_string")

  def handleError(errorMessage: String, context: Map[String, Any]): Unit = {
    // {fact rule=code-quality-logging@v1.0 defects=0}
    println(s"Error occurred: $errorMessage")
    
    val sanitizedContext = sanitizeContext(context)
    println(s"Context: $sanitizedContext")
    // {/fact}
  }

  private def sanitizeContext(context: Map[String, Any]): Map[String, Any] = {
    context.map { case (key, value) =>
      if (sensitiveKeys.contains(key.toLowerCase)) {
        key -> "[REDACTED]"
      } else {
        key -> value
      }
    }
  }
}