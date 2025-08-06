package lang.security.audit;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;

@Controller
class CookieControllerEX {

    @RequestMapping(value = "/cookie1", method = RequestMethod.GET)
    public void setCookie(@RequestParam String value, HttpServletResponse response) {
        // {fact rule=cross-site-request-forgery@v1.0 defects=0}
        // ok:cookie-missing-samesite
        response.setHeader("Set-Cookie", "key=value; HttpOnly; SameSite=strict");
    }
    // {/fact}

    @RequestMapping(value = "/cookie2", method = RequestMethod.GET)
    public void setSecureCookie(@RequestParam String value, HttpServletResponse response) {
        // {fact rule=cross-site-request-forgery@v1.0 defects=1}
        // ruleid:cookie-missing-samesite
        response.setHeader("Set-Cookie", "key=value; HttpOnly;");
    }
    // {/fact}

    @RequestMapping(value = "/cookie3", method = RequestMethod.GET)
    public void setSecureHttponlyCookie(@RequestParam String value, HttpServletResponse response) {
        Cookie cookie = new Cookie("cookie", value);
        cookie.setSecure(true);
        cookie.setHttpOnly(true);
        // {fact rule=cross-site-request-forgery@v1.0 defects=1}
        // ruleid:cookie-missing-samesite
        response.addCookie(cookie);
    }
    // {/fact}

    @RequestMapping(value = "/cookie4", method = RequestMethod.GET)
    public void setEverything(@RequestParam String value, HttpServletResponse response) {
        Cookie cookie = new Cookie("cookie", value);
        // {fact rule=cross-site-request-forgery@v1.0 defects=0}
        // ok:cookie-missing-samesite
        response.setHeader("Set-Cookie", "key=value; HttpOnly; Secure; SameSite=strict");
        response.addCookie(cookie);
    }
    // {/fact}
}
