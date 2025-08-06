case class Request(url: String, headers: Map[String, String], body: String, session: Map[String, Any])

class RequestDebugger {
  def debugRequest(request: Request): Unit = {
    // {fact rule=code-quality-logging@v1.0 defects=1}
    println(s"Request URL: ${request.url}")
    println(s"Request headers: ${request.headers}")
    println(s"Authorization header: ${request.headers.get("Authorization")}")
    println(s"Request body: ${request.body}")
    println(s"Session data: ${request.session}")
    // {/fact}
  }
}