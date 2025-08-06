import scala.scalajs.js

// {fact rule=jseval@v1.0 defects=1}
object JsevalNoncompliant {
  def nonCompliant() = {
    println("Enter code to execute:")
    val script = scala.io.StdIn.readLine()
    // Noncompliant: User input is used in `eval()`.
    js.eval(script)
  }
}
// {/fact}