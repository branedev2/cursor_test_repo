import javax.servlet.http.Cookie
import javax.servlet.http.HttpServletResponse
import javax.servlet.http.HttpServletRequest

class CookieController1 {
    fun setCookie(value: String, response: HttpServletResponse) {
        val cookie: Cookie = Cookie("cookie", value)
        // {fact rule=sensitive-cookie-in-https-session-without-secure-attribute@v1.0 defects=1}
        // ruleid:cookie-missing-secure-flag
        response.addCookie(cookie)
        // {/fact}
    }

    fun setSecureCookie(value: String, response: HttpServletResponse) {
        val cookie: Cookie = Cookie("cookie", value)
        // {fact rule=sensitive-cookie-in-https-session-without-secure-attribute@v1.0 defects=0}
        // ok:cookie-missing-secure-flag
        cookie.setSecure(true)
        response.addCookie(cookie)
        // {/fact}
    }

    fun setSecureHttponlyCookie(value: String, response: HttpServletResponse) {
        val cookie: Cookie = Cookie("cookie", value)
        // {fact rule=sensitive-cookie-in-https-session-without-secure-attribute@v1.0 defects=0}
        // ok:cookie-missing-secure-flag
        cookie.setSecure(true)
        cookie.isHttpOnly = true
        response.addCookie(cookie)
        // {/fact}
    }

    fun explicitDisable(value: String, response: HttpServletResponse) {
        val cookie: Cookie = Cookie("cookie", value)
        // {fact rule=sensitive-cookie-in-https-session-without-secure-attribute@v1.0 defects=1}
        // ruleid:cookie-missing-secure-flag
        cookie.setSecure(false)
        cookie.isHttpOnly = false
        response.addCookie(cookie)
        // {/fact}
    }

    // test case cf. https://github.com/Dreampie/Resty//blob/9ef059c065d1894c79e7d69c150e588a61eb1cd5/resty-common/src/main/java/cn/dreampie/common/http/HttpResponse.java#L69
    fun addCookie(name: String, value: String, expiration: Int, httpOnly: Boolean, response: HttpServletResponse, request:HttpServletRequest) {
        val existingCookie: Cookie? = HttpRequest.getCookie(request.cookies, name)
        if (existingCookie != null) {
            if (Constant.cookiePath == existingCookie.path
                || existingCookie.path == null // in some cases cookies set on path '/' are returned with a null path
            ) {
                // update existing cookie
                existingCookie.path = Constant.cookiePath
                existingCookie.value = value
                existingCookie.maxAge = expiration
                if (Constant.cookieHttpOnly) {
                    existingCookie.setHttpOnly(true)
                }
                existingCookie.setSecure(Constant.cookieSecure)
                if (Constant.cookieDomain != null) {
                    existingCookie.domain = Constant.cookieDomain
                }
                // {fact rule=sensitive-cookie-in-https-session-without-secure-attribute@v1.0 defects=0}
                // ok:cookie-missing-secure-flag
                response.addCookie(existingCookie)
                // {/fact}
            } else {
                // we have an existing cookie on another path: clear it, and add a new cookie on root path
                existingCookie.value = ""
                existingCookie.maxAge = 0
                // {fact rule=sensitive-cookie-in-https-session-without-secure-attribute@v1.0 defects=0}
                // ok:cookie-missing-secure-flag
                response.addCookie(existingCookie)
                // {/fact}
                val c: Cookie = Cookie(name, value)
                c.path = Constant.cookiePath
                c.maxAge = expiration
                if (Constant.cookieHttpOnly) {
                    existingCookie.isHttpOnly = true
                }
                c.setSecure(Constant.cookieSecure)
                if (Constant.cookieDomain != null) {
                    c.domain = Constant.cookieDomain
                }
                // {fact rule=sensitive-cookie-in-https-session-without-secure-attribute@v1.0 defects=0}
                // ok:cookie-missing-secure-flag
                response.addCookie(c)
                // {/fact}
            }
        } else {
            val c: Cookie = Cookie(name, value)
            c.path = Constant.cookiePath
            c.maxAge = expiration
            if (Constant.cookieHttpOnly) {
                c.isHttpOnly = true
            }
            c.setSecure(Constant.cookieSecure)
            if (Constant.cookieDomain != null) {
                c.domain = Constant.cookieDomain
            }
            // {fact rule=sensitive-cookie-in-https-session-without-secure-attribute@v1.0 defects=0}
            // ok:cookie-missing-secure-flag
            response.addCookie(c)
            // {/fact}
        }
    }

    fun clearCookie(cookie: String, response: HttpServletResponse, request:HttpServletRequest) {
        val existingCookie: Cookie? = HttpRequest.getCookie(request.cookies, cookie)
        if (existingCookie != null) {
            existingCookie.path = Constant.cookiePath
            existingCookie.value = ""
            existingCookie.maxAge = 0
            // {fact rule=sensitive-cookie-in-https-session-without-secure-attribute@v1.0 defects=0}
            // ok:cookie-missing-secure-flag
            response.addCookie(existingCookie)
            // {/fact}
        }
    }
}