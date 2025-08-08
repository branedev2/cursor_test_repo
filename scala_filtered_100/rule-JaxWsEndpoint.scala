// License: LGPL-3.0 License (c) find-sec-bugs
package endpoint

import org.apache.commons.text.StringEscapeUtils
import javax.jws.WebMethod
import javax.jws.WebService


@WebService
class JaxWsEndpoint {
  // {fact rule=improper-input-validation@v1.0 defects=0}
  @WebMethod(operationName = "timestamp")
  def ping = System.currentTimeMillis // OK
  // {/fact}

  def randomFunc(s: String) = s

  // {fact rule=improper-input-validation@v1.0 defects=1}
  @WebMethod
  // ruleid: scala_endpoint_rule-JaxWsEndpoint
  def danger0(user: String) = "Hello " + user // BAD
  // {/fact}

  // {fact rule=improper-input-validation@v1.0 defects=1}
  @WebMethod
  def danger1(user: String) = {
    // ruleid: scala_endpoint_rule-JaxWsEndpoint
    val tainted = randomFunc(user)
    "Hello " + tainted
  }
  // {/fact}

  // {fact rule=improper-input-validation@v1.0 defects=1}
  @WebMethod
  def danger3(user: String) = {
    // ruleid: scala_endpoint_rule-JaxWsEndpoint
    "Hello " + user
  }
  // {/fact}

  // {fact rule=improper-input-validation@v1.0 defects=0}
  @WebMethod(action="/hello2")
  def ok1(user: String) = {
    // ok: scala_endpoint_rule-JaxWsEndpoint
    val sanitized = StringEscapeUtils.unescapeJava(user)
    "Hello " + sanitized // OK
  }
  // {/fact}

  // {fact rule=improper-input-validation@v1.0 defects=0}
  def ok2(user: String): String = {
    return "Hello " + user // OK
  }
  // {/fact}

  // {fact rule=improper-input-validation@v1.0 defects=0}
  @WebMethod
  def ok3(user: String) = {
    // ok: scala_endpoint_rule-JaxWsEndpoint
    val sanitized = StringEscapeUtils.unescapeJava(user)
    "Hello " + sanitized
  }
  // {/fact}

  def ok4 = 8000
}
