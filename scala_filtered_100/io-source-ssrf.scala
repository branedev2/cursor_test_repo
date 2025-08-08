package lang.security.audit

import javax.inject._
import play.api._
import play.api.mvc._

import java.net.URI
import scala.concurrent.{ExecutionContext, Future}
import scala.io.{Codec, Source}

object Smth_1 {
  def call1(request_url: URI): String = {
    // {fact rule=server-side-request-forgery@v1.0 defects=1}
    // ruleid: io-source-ssrf
    val html = Source.fromURI(request_url)
    val data = html.mkString
    data
    // {/fact}
  }

  def call2():String = {
    // {fact rule=server-side-request-forgery@v1.0 defects=0}
    // ok: io-source-ssrf
    val html = Source.fromURL("https://www.google.com")
    val data = html.mkString
    data
    // {/fact}
  }
}

object FooBar_1 {
  def call1(request_url: String, codec: Codec) = {
    // {fact rule=server-side-request-forgery@v1.0 defects=1}
    // ruleid: io-source-ssrf
    val res = Source.fromURL(request_url)(codec).mkString
    res
    // {/fact}
  }

  def call2(codec: Codec) = {
    // {fact rule=server-side-request-forgery@v1.0 defects=0}
    // ok: io-source-ssrf
    val res = Source.fromURL("https://www.google.com")(codec).mkString
    res
    // {/fact}
  }
}

@Singleton
class HomeController_1 @Inject()(
  val controllerComponents: ControllerComponents,
  implicit val ec: ExecutionContext
) extends BaseController {

  def whatIsCodec() = {

  }

  def req1(request_url: URI) = Action.async { implicit request: Request[AnyContent] =>
    Future {
      val codec = whatIsCodec()

      // {fact rule=server-side-request-forgery@v1.0 defects=1}
      // ruleid: io-source-ssrf
      val res = Source.fromURI(request_url).mkString
      Ok(res)
      // {/fact}
    }
  }

  def req2() = Action.async { implicit request: Request[AnyContent] =>
    Future {
      // {fact rule=server-side-request-forgery@v1.0 defects=0}
      // ok: io-source-ssrf
      val res = Source.fromURL("https://www.google.com").mkString
      Ok(res)
      // {/fact}
    }
  }

}

object codec
