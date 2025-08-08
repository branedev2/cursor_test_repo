// License: LGPL-3.0 License (c) find-sec-bugs
package xss

import org.owasp.encoder.Encode
import play.api.mvc.{AbstractController, ControllerComponents}
import javax.inject.Inject

class MVCApi @Inject() (cc: ControllerComponents) extends AbstractController(cc){

  // {fact rule=cross-site-scripting@v1.0 defects=1}
  def unsafe(value: String) =  Action{
    // ruleid: scala_xss_rule-MVCApi
    Ok(value)
  }
  // {/fact}

  // {fact rule=cross-site-scripting@v1.0 defects=1}
  def unsafe2(value: String) = Action {
    // ruleid: scala_xss_rule-MVCApi
    Ok(value + "test")
  }
  // {/fact}

  // {fact rule=cross-site-scripting@v1.0 defects=0}
  def safe(value: String) =  Action{
    val encoded = Encode.forHtml(value)
    Ok(encoded)
  }
  // {/fact}


  // {fact rule=cross-site-scripting@v1.0 defects=0}
  def safe2(value: String) =  Action{
    val encoded = Encode.forHtml(value + "test")
    Ok(encoded + "test")
  }
  // {/fact}
}
