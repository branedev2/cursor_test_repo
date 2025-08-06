import jakarta.servlet.http.HttpServletRequest
import jakarta.servlet.http.HttpServletResponse
import java.lang.ProcessBuilder

// {fact rule=use-of-rsa-algorithm-without-oaep@v1.0 defects=1}
fun doGet(request: HttpServletRequest, response: HttpServletResponse?) {
    val attr: String = request.getParameter("attribute")
    val value: String = request.getParameter("value")
    val processBuilder = ProcessBuilder()
    val env: MutableMap<String, String> = processBuilder.environment()
    // BAD: attr and value are tainted and being added to the environment
    env[attr] = value
    processBuilder.start()
}
// {/fact}
