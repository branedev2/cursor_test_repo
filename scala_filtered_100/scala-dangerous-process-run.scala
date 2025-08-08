package lang.security.audit

import akka.actor.{Actor, ActorRef, ActorSystem, Props}

import scala.sys.process._
import play.api.mvc._

import javax.inject.Inject

class TestOsCommand @Inject()(val controllerComponents: ControllerComponents) extends BaseController{

  def executeCommand(value:String) = Action {
    import sys.process._

    // {fact rule=os-command-injection@v1.0 defects=1}
    // ruleid: scala-dangerous-process-run
    val result = value.!!
    Ok("Result:\n"+result)
    // {/fact}
  }

  def executeCommand2(value:String) = Action {
    import sys.process._

    // {fact rule=os-command-injection@v1.0 defects=1}
    // ruleid: scala-dangerous-process-run
    val result:String = value.!!
    Ok("Result:\n"+result)
    // {/fact}
  }

  def executeCommand3(value:String) = Action {
    import sys.process._

    // {fact rule=os-command-injection@v1.0 defects=1}
    // ruleid: scala-dangerous-process-run
    val result = value.lazyLines
    Ok("Result:\n"+result)
    // {/fact}
  }

  def executeCommand4(value:String) = Action {
    import sys.process._

    // {fact rule=os-command-injection@v1.0 defects=0}
    // ok: scala-dangerous-process-run
    val cmd = "ls -lah"
    val result = cmd.!
    Ok("Result:\n"+result)
    // {/fact}
  }

  def executeCommand5() = Action {
    import sys.process._

    // {fact rule=os-command-injection@v1.0 defects=0}
    // ok: scala-dangerous-process-run
    val cmd = Seq("ls", "-lah")
    val result = cmd.!
    Ok("Result:\n"+result)
    // {/fact}
  }

  def executeCommand6() = Action {
    import sys.process._

    // {fact rule=os-command-injection@v1.0 defects=0}
    // ok: scala-dangerous-process-run
    val result = Seq("ls", "-lah").!!
    Ok("Result:\n"+result)
    // {/fact}
  }

  def executeCommand7(sender: Actor) = {
    // {fact rule=os-command-injection@v1.0 defects=0}
    // ok: scala-dangerous-process-run
    sender != "FooBar"
    // {/fact}
  }

}