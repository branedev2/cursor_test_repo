// License: LGPL-3.0 License (c) find-sec-bugs
package inject

import org.apache.commons.httpclient.methods.GetMethod
import org.apache.http.client.methods.HttpGet
import javax.servlet.http.HttpServlet
import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse
import java.io.IOException
import java.net.URLEncoder
import com.google.common.net.UrlEscapers.urlPathSegmentEscaper


class HttpParameterPollution extends HttpServlet {
  override def doGet(request: HttpServletRequest, response: HttpServletResponse): Unit = {
    try {
      val item = request.getParameter("item")
      //in HttpClient 4.x, there is no GetMethod anymore. Instead there is HttpGet
      // {fact rule=os-command-injection@v1.0 defects=0}
      val httpget = new HttpGet("http://host.com?param=" + URLEncoder.encode(item)) //OK
      // {/fact}

      
      
      // {fact rule=os-command-injection@v1.0 defects=1}
      // ruleid: scala_inject_rule-HttpParameterPollution
      val httpget2 = new HttpGet("http://host.com?param=" + item) //BAD
      // {/fact}
      
      // {fact rule=os-command-injection@v1.0 defects=0}
      val httpget3 = new HttpGet("http://host.com?param=" + urlPathSegmentEscaper().escape(item))
      // {/fact}

      // {fact rule=os-command-injection@v1.0 defects=1}
      // ruleid: scala_inject_rule-HttpParameterPollution
      val get = new GetMethod("http://host.com?param=" + item)
      // {/fact}


      // {fact rule=os-command-injection@v1.0 defects=1}
      // ruleid: scala_inject_rule-HttpParameterPollution
      get.setQueryString("item=" + item) //BAD
      // {/fact}
    } catch {
      case e: Exception =>
        System.out.println(e)
    }
  }
}
