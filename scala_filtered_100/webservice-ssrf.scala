package play.security

import akka.actor.TypedActor.dispatcher

import javax.inject._
import play.api._
import play.api.mvc._
import play.api.libs.ws._

import scala.concurrent.Future
import scala.util.Success
import scala.util.Failure
import scala.concurrent.ExecutionContext

object Smth {
  def call1(wsClient: WSClient, url: String): Future[Unit] = {
    // {fact rule=server-side-request-forgery@v1.0 defects=1}
    // ruleid: webservice-ssrf
    wsClient.url(url).get().map { response =>
      val statusText: String = response.statusText
      println(s"Got a response $statusText")
    }
    // {/fact}
  }

  def call2(wsClient: WSClient): Future[Unit] = {
    // {fact rule=server-side-request-forgery@v1.0 defects=0}
    // ok: webservice-ssrf
    wsClient.url("https://www.google.com").get().map { response =>
      val statusText: String = response.statusText
      println(s"Got a response $statusText")
    }
    // {/fact}
  }
}

object FooBar {
  def call1(url: String, wsClient: WSClient): Future[Unit] = {
    // {fact rule=server-side-request-forgery@v1.0 defects=1}
    // ruleid: webservice-ssrf
    wsClient.url(url).get().map { response =>
      val statusText: String = response.statusText
      println(s"Got a response $statusText")
    }
    // {/fact}
  }

  def call2(wsClient: WSClient): Future[Unit] = {
    // {fact rule=server-side-request-forgery@v1.0 defects=0}
    // ok: webservice-ssrf
    wsClient.url("https://www.google.com").get().map { response =>
      val statusText: String = response.statusText
      println(s"Got a response $statusText")
    }
    // {/fact}
  }
}

@Singleton
class HomeController_5 @Inject()(
  ws: WSClient,
  val controllerComponents: ControllerComponents,
  implicit val ec: ExecutionContext
) extends BaseController {

  def req1(url: String, wsClient: WSClient) = Action.async { implicit request: Request[AnyContent] =>
    // {fact rule=server-side-request-forgery@v1.0 defects=1}
    // ruleid: webservice-ssrf
    val futureResponse = ws.url(url).get()
    futureResponse.map { response =>
      Ok(s"it works: ${response.statusText}")
    }
    // {/fact}
  }

  def req2(url: String, wsClient: WSClient) = Action.async { implicit request: Request[AnyContent] =>
    // {fact rule=server-side-request-forgery@v1.0 defects=0}
    // ok: webservice-ssrf
    val futureResponse = ws.url("https://www.google.com").get()
    futureResponse.map { response =>
      Ok(s"it works: ${url}")
    }
    // {/fact}
  }

}
