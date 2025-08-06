import javax.servlet.http.Cookie
import javax.servlet.http.HttpServletResponse

class InsecureCookieNoncompliant {
    // {fact rule=insecure-cookie@v1.0 defects=1}
    def nonCompliant(res: HttpServletResponse): Unit = {
        val cookie = new Cookie("key", "value")
        cookie.setSecure(true)
        cookie.setHttpOnly(true)
        // Noncompliant: MaxAge set to one year.
        cookie.setMaxAge(31536000)
        res.addCookie(cookie)
    }
    // {/fact}
}