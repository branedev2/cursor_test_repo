package lang.security.audit

import scala.scalajs.js

object Smth_3 {
  def call1(code: String) = {
    // {fact rule=code-injection@v1.0 defects=1}
    // ruleid: scalajs-eval
    js.eval(s"console.log($code)")
    // {/fact}
    // {fact rule=code-injection@v1.0 defects=0}
    // ok: scalajs-eval
    js.eval("FooBar()")
    // {/fact}
    true
  }
}

object FooBar_3 {
  def call2(code: String) = {
    // {fact rule=code-injection@v1.0 defects=1}
    // ruleid: scalajs-eval
    js.eval("console.log(" + code +")")
    // {/fact}
    // {fact rule=code-injection@v1.0 defects=0}
    // ok: scalajs-eval
    js.eval("FooBar()")
    // {/fact}
    true
  }
}
