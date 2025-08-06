package servlets.security;

import javax.servlet.http.Cookie;

class Bad {
//          public void bad1() {
//            // {ex-fact rule=insecure-cookie@v1.0 defects=1}
//              // ruleid: cookie-issecure-false
//              Cookie cookie = new Cookie("name", "value");
//          }
//          // {/ex-fact}

          public void bad2() {
            // {fact rule=insecure-cookie@v1.0 defects=1}
              // ruleid: cookie-issecure-false
              Cookie cookie = new Cookie("name", "value");
              cookie.setSecure(false);
          }
          // {/fact}
   }

 class Ok {
          public void ok1() {
            // {fact rule=insecure-cookie@v1.0 defects=0}
             // ok: cookie-issecure-false
             Cookie cookie = new Cookie("name", "value");
             cookie.setSecure(true);
          }
          // {/fact}
}
