// License: LGPL-3.0 License (c) find-sec-bugs
package cookie

import javax.servlet.http.Cookie
import javax.servlet.http.HttpServletResponse

class CookieHTTPOnly {
  // {fact rule=sensitive-cookie-without-http-only-flag@v1.0 defects=1}
  def danger(res: HttpServletResponse): Unit = {
    // ruleid: scala_cookie_rule-CookieHTTPOnly
    val cookie = new Cookie("key", "value")
    cookie.setSecure(true)
    cookie.setMaxAge(60)
    cookie.setHttpOnly(false) // danger

    res.addCookie(cookie)
  }
  // {/fact}

  // cookie.setHttpOnly(true) is missing
  // {fact rule=sensitive-cookie-without-http-only-flag@v1.0 defects=1}
  def danger2(res: HttpServletResponse): Unit = {
    // ruleid: scala_cookie_rule-CookieHTTPOnly
    val cookie = new Cookie("key", "value")
    cookie.setSecure(true)
    cookie.setMaxAge(60)
    res.addCookie(cookie)
  }
  // {/fact}
}

