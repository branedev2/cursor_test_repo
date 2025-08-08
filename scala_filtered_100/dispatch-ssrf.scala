package lang.security.audit

import javax.inject._
import play.api._
import play.api.mvc._
import dispatch._, Defaults._

import scala.concurrent.{ExecutionContext, Future}

object Smth {
  def call1(request_url: String): dispatch.Future[String] = {
    // {fact rule=server-side-request-forgery@v1.0 defects=1}
    // ruleid: dispatch-ssrf
    val req = url(request_url)
    val data = Http.default(req OK as.String)
    data
    // {/fact}
  }

  def call2(): Future[String] = {
    // {fact rule=server-side-request-forgery@v1.0 defects=0}
    // ok: dispatch-ssrf
    val req = url("https://www.google.com")
    val data = Http.default(req OK as.String)
    data
    // {/fact}
  }
}

object FooBar {
  def call1(request_url: String): Future[String] = {
    // {fact rule=server-side-request-forgery@v1.0 defects=1}
    // ruleid: dispatch-ssrf
    val request = url(request_url).POST.setHeader("Content-Type", "application/json")
    val res: Future[String] = Http.default(request).map(_.getResponseBody)
    res
    // {/fact}
  }

  def call2(): Future[String] = {
    // {fact rule=server-side-request-forgery@v1.0 defects=0}
    // ok: dispatch-ssrf
    val request = url("https://www.google.com").POST.setHeader("Content-Type", "application/json")
    val res: Future[String] = Http.default(request).map(_.getResponseBody)

    res
    // {/fact}
  }
}

@Singleton
class HomeController @Inject()(
  val controllerComponents: ControllerComponents,
  implicit val ec: ExecutionContext
) extends BaseController {

  def req1(request_url: String) = Action.async { implicit request: Request[AnyContent] =>
    // {fact rule=server-side-request-forgery@v1.0 defects=1}
    // ruleid: dispatch-ssrf
    val request = url(request_url).POST.setHeader("Content-Type", "application/json")
    val responseFuture: Future[String] = Http.default(request)(ec).map(_.getResponseBody)(ec)


    responseFuture.map { body =>
      Ok(body) // Returning the body of the response as the Ok result
    }(ec)
    // {/fact}
  }

  def req2() = Action.async { implicit request: Request[AnyContent] =>
    // {fact rule=server-side-request-forgery@v1.0 defects=0}
    // ok: dispatch-ssrf
    val request = url("https://www.google.com").POST.setHeader("Content-Type", "application/json")
    val res: Future[String] = Http.default(request)(ec).map(_.getResponseBody)(ec)

    res.map { body =>
      Ok(body) // Returning the body of the response as the Ok result
    }(ec)
    // {/fact}
  }

}
