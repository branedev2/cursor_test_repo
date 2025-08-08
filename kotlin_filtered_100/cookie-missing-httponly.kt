import javax.servlet.http.Cookie
import javax.servlet.http.HttpServletResponse

class CookieController {
    fun setCookie(value: String, response: HttpServletResponse) {
        val cookie: Cookie = Cookie("cookie", value)
        // {fact rule=sensitive-cookie-without-http-only-flag@v1.0 defects=1}
        // ruleid: cookie-missing-httponly
        response.addCookie(cookie)
        // {/fact}
    }

    fun setSecureCookie(value: String, response: HttpServletResponse) {
        val cookie: Cookie = Cookie("cookie", value)
        cookie.setSecure(true)
        // {fact rule=sensitive-cookie-without-http-only-flag@v1.0 defects=1}
        // ruleid: cookie-missing-httponly
        response.addCookie(cookie)
        // {/fact}
    }

    fun setSecureHttponlyCookie(value: String, response: HttpServletResponse) {
        val cookie: Cookie = Cookie("cookie", value)
        cookie.setSecure(true)
        cookie.isHttpOnly = true
        // {fact rule=sensitive-cookie-without-http-only-flag@v1.0 defects=0}
        // ok: cookie-missing-httponly
        response.addCookie(cookie)
        // {/fact}
    }

    fun explicitDisable(value: String, response: HttpServletResponse) {
        val cookie: Cookie = Cookie("cookie", value)
        cookie.setSecure(false)
        // {fact rule=sensitive-cookie-without-http-only-flag@v1.0 defects=1}
        // ruleid:cookie-missing-httponly
        cookie.isHttpOnly = false
        response.addCookie(cookie)
        // {/fact}
    }
}