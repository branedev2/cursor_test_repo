package lang.security.audit

import scala.sys.process._

class Foo_1 {
  def run1(message: String) = {
    import sys.process._
    // {fact rule=os-command-injection@v1.0 defects=1}
    // ruleid: dangerous-shell-run
    Seq("sh", "-c", message).!
    // {/fact}
  }

  def run2(message: String): String = {
    import sys.process._
    // {fact rule=os-command-injection@v1.0 defects=1}
    // ruleid: dangerous-shell-run
    val result = Seq("bash", "-c", message).!!
    // {/fact}
    return result
  }

  def run3(message: String): String = {
    import sys.process._
    // {fact rule=os-command-injection@v1.0 defects=0}
    // ok: dangerous-shell-run
    Seq("ls", "-la").!!
    // {/fact}
  }

  def run4(message: String): String = {
    import sys.process._
    // {fact rule=os-command-injection@v1.0 defects=0}
    // ok: dangerous-shell-run
    Seq("sh", "-c", "ls").!!
    // {/fact}
  }

  def run5(message: String): Seq[String] = {
    import sys.process._
    // {fact rule=os-command-injection@v1.0 defects=0}
    // ok: dangerous-shell-run
    Seq("sh", "-c", message)
    // {/fact}
  }

  def run6(message: String): String = {
    // {fact rule=os-command-injection@v1.0 defects=0}
    // ok: dangerous-shell-run
    val result = Seq("bash", "-c", message).!!
    // {/fact}
    return result
  }
}