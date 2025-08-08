import javax.servlet.http.Cookie
import javax.servlet.http.HttpServletRequest

object HttpRequest {
    fun getCookie(cookies: Array<Cookie>?, name: String): Cookie? {
        cookies?.forEach { cookie ->
            if (cookie.name == name) {
                return cookie
            }
        }
        return null
    }
}