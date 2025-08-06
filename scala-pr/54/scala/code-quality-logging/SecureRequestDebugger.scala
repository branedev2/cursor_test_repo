case class SecureRequest(url: String, method: String, headers: Map[String, String], body: String, session: Option[Map[String, Any]])

class SecureRequestDebugger {
  def debugRequest(request: SecureRequest): Unit = {
    // {fact rule=code-quality-logging@v1.0 defects=0}
    println(s"Request URL: ${request.url}")
    println(s"Request method: ${request.method}")
    println(s"Content-Type: ${request.headers.getOrElse("Content-Type", "not set")}")
    println(s"Request size: ${request.body.length} bytes")
    println(s"Session active: ${if (request.session.isDefined) "yes" else "no"}")
    // {/fact}
  }
}