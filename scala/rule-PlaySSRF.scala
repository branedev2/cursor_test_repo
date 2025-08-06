// License: LGPL-3.0 License (c) find-sec-bugs
package ssrf

import java.io.IOException
import play.api.libs.ws._
import java.net.URISyntaxException

object PlaySSRF {
  @throws[IOException]
  def unsafe(ws: WSClient, url: String, input: String): Unit = {
    // {fact rule=server-side-request-forgery@v1.0 defects=1}
    // ruleid: scala_ssrf_rule-PlaySSRF
    ws.url(url + "?query=abc")
    // {/fact}


    // {fact rule=server-side-request-forgery@v1.0 defects=1}
    // ruleid: scala_ssrf_rule-PlaySSRF
    ws.url(url)
    // {/fact}

    // {fact rule=server-side-request-forgery@v1.0 defects=1}
    val internal = "https://test.com"
    // ruleid: scala_ssrf_rule-PlaySSRF
    ws.url(internal + input)
    // {/fact}
    
    
  }

  @throws[IOException]
  @throws[URISyntaxException]
  def safe(ws: WSClient, input: String): Unit = {
    val url = "https://test.com"
    ws.url(url + "?query=abc")
    ws.url(url)
  }
}
