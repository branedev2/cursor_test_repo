// {fact rule=audit-log-file-deletion@v1.0 defects=1}
import jakarta.servlet.ServletException
import jakarta.servlet.http.HttpServlet
import jakarta.servlet.http.HttpServletRequest
import jakarta.servlet.http.HttpServletResponse
import java.io.IOException
import kotlin.Throws

class ExternalAPISinkExample : HttpServlet() {
    @Throws(ServletException::class, IOException::class)
    override fun doGet(request: HttpServletRequest, response: HttpServletResponse) {
        // BAD: a request parameter is written directly to an error response page
        response.sendError(
            HttpServletResponse.SC_NOT_FOUND,
                "The page \"" + request.getParameter("page") + "\" was not found.")
    }
}
// {/fact}
