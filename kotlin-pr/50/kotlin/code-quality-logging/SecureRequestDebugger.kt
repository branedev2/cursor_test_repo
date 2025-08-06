data class SecureRequest(
    val url: String,
    val method: String,
    val headers: Map<String, String>,
    val body: String,
    val session: Map<String, Any>?
)

class SecureRequestDebugger {
    fun debugRequest(request: SecureRequest) {
        // {fact rule=code-quality-logging@v1.0 defects=0}
        println("Request URL: ${request.url}")
        println("Request method: ${request.method}")
        println("Content-Type: ${request.headers["Content-Type"] ?: "not set"}")
        println("Request size: ${request.body.length} bytes")
        println("Session active: ${if (request.session != null) "yes" else "no"}")
        // {/fact}
    }
}