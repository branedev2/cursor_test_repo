data class Request(
    val url: String,
    val headers: Map<String, String>,
    val body: String,
    val session: Map<String, Any>
)

class RequestDebugger {
    fun debugRequest(request: Request) {
        // {fact rule=code-quality-logging@v1.0 defects=1}
        println("Request URL: ${request.url}")
        println("Request headers: ${request.headers}")
        println("Authorization header: ${request.headers["Authorization"]}")
        println("Request body: ${request.body}")
        println("Session data: ${request.session}")
        // {/fact}
    }
}