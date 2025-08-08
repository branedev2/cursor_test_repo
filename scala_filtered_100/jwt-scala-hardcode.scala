package `jwt-scala`.security


import io.circe.parser._
import java.time.Clock
import pdi.jwt.{JwtJson, JwtAlgorithm, JwtArgonaut, JwtCirce}
import play.api.libs.json.Json
import io.circe.Json

object Smth {
  val secretKey = "foobar"

  def getSecretFromEnv(): String = {
    // Replace this with the actual implementation to get the secret from environment variables
    sys.env.getOrElse("SECRET_KEY", "defaultSecret")
  }

  def run1(token: String) = {
    val algo = JwtAlgorithm.HS256
    // {fact rule=insufficiently-protected-credentials@v1.0 defects=1}
    // ruleid: jwt-scala-hardcode
    JwtArgonaut.decodeJson(token, secretKey, Seq(algo))
    // {/fact}
  }

  def run2(token: String) = {
    val algo = JwtAlgorithm.HS256
    // {fact rule=insufficiently-protected-credentials@v1.0 defects=0}
    // ok: jwt-scala-hardcode
    JwtArgonaut.decodeJson(token, getSecretFromEnv(), Seq(algo))
    // {/fact}
  }
}

class FooBar {
  private val JWT_KEY = "foobar"

  def getSecretFromEnv(): String = {
    // Replace this with the actual implementation to get the secret from environment variables
    sys.env.getOrElse("SECRET_KEY", "defaultSecret")
  }

  def keyFromEnv(): String = {
    // Stub for keyFromEnv
    // Replace this with actual environment variable fetching when implemented
    "stubbedSecretKey"
  }

  def run1() = {
    val claim = play.api.libs.json.Json.obj(("user", 1), ("nbf", 1431520421))
    val key1 = "secretKey"
    val algo = JwtAlgorithm.HS256
    // {fact rule=insufficiently-protected-credentials@v1.0 defects=1}
    // ruleid: jwt-scala-hardcode
    val token = JwtJson.encode(claim, key1, algo)
    // {/fact}
    // {fact rule=insufficiently-protected-credentials@v1.0 defects=0}
    // ok: jwt-scala-hardcode
    JwtJson.decodeJson(token, keyFromEnv(), Seq(JwtAlgorithm.HS256))
    // {/fact}
  }

  def run2() = {
    val claim = play.api.libs.json.Json.obj(("user", 1), ("nbf", 1431520421))
    val key2 = getSecretFromEnv()
    val algo = JwtAlgorithm.HS256

    val circeJson: Json = parse(claim.toString()).getOrElse(io.circe.Json.Null)

    // {fact rule=insufficiently-protected-credentials@v1.0 defects=1}
    // ruleid: jwt-scala-hardcode
    val token = JwtCirce.encode(circeJson, this.JWT_KEY, algo)
    // {/fact}
    // {fact rule=insufficiently-protected-credentials@v1.0 defects=1}
    // ruleid: jwt-scala-hardcode
    JwtCirce.decodeJson(token, this.JWT_KEY, Seq(JwtAlgorithm.HS256))
    // {/fact}
  }

  def run3() = {
    val claim = play.api.libs.json.Json.obj(("user", 1), ("nbf", 1431520421))
    val key2 = getSecretFromEnv()
    val algo = JwtAlgorithm.HS256
    // {fact rule=insufficiently-protected-credentials@v1.0 defects=0}
    // ok: jwt-scala-hardcode
    val token = JwtJson.encode(claim, key2, algo)
    // {/fact}
    // {fact rule=insufficiently-protected-credentials@v1.0 defects=0}
    // ok: jwt-scala-hardcode
    JwtJson.decodeJson(token, key2, Seq(JwtAlgorithm.HS256))
    // {/fact}
  }
}