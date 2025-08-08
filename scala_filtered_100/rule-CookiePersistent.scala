// License: LGPL-3.0 License (c) find-sec-bugs
package cookie

import javax.servlet.http.Cookie
import javax.servlet.http.HttpServletResponse

class CookiePersistent {
  // {fact rule=insecure-cookie@v1.0 defects=1}
  def danger(res: HttpServletResponse): Unit = {
    val cookie = new Cookie("key", "value")
    cookie.setSecure(true)
    cookie.setHttpOnly(true)
    // ruleid: scala_cookie_rule-CookiePersistent
    cookie.setMaxAge(31536000) // danger

    res.addCookie(cookie)
  }
  // {/fact}
}
