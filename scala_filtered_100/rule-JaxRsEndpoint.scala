// License: LGPL-3.0 License (c) find-sec-bugs
package endpoint

import javax.ws.rs.Path
import org.apache.commons.text.StringEscapeUtils


@Path("/test")
class JaxRsEndpoint {
  def randomFunc(s: String) = s
  // {fact rule=improper-input-validation@v1.0 defects=1}
  @Path("/hello0")
  // ruleid: scala_endpoint_rule-JaxRsEndpoint
  def danger0(user: String) = "Hello " + user // BAD
  // {/fact}


  // {fact rule=improper-input-validation@v1.0 defects=1}
  @Path("/hello1")
  def danger1(user: String) = {
    // ruleid: scala_endpoint_rule-JaxRsEndpoint
    val tainted = randomFunc(user)
    "Hello " + tainted
  }
  // {/fact}

  // {fact rule=improper-input-validation@v1.0 defects=1}
  @Path("/hello2")
  def danger3(user: String) = {
    // ruleid: scala_endpoint_rule-JaxRsEndpoint
    "Hello " + user
  }
  // {/fact}

  // {fact rule=improper-input-validation@v1.0 defects=1}
  @Path("/hello2")
  def danger4(user: String): String = {
    // ruleid: scala_endpoint_rule-JaxRsEndpoint
    return "Hello " + user
  }
  // {/fact}

  // {fact rule=improper-input-validation@v1.0 defects=0}
  @Path("/hello2")
  def ok1(user: String) = {
    // ok: scala_endpoint_rule-JaxRsEndpoint
    val sanitized = StringEscapeUtils.unescapeJava(user)
    "Hello " + sanitized // OK
  }
  // {/fact}

  // {fact rule=improper-input-validation@v1.0 defects=0}
  def ok2(user: String): String = {
    return "Hello " + user // OK
  }
  // {/fact}
}
