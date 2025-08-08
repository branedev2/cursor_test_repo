package lang.security.audit

class Test {
  def bad1() {
    // {fact rule=weak-random-number-generation@v1.0 defects=1}
    import scala.util.Random
    // ruleid: insecure-random
    val result = Seq.fill(16)(Random.nextInt)
    return result.map("%02x" format _).mkString
    // {/fact}
  }

  def ok1() {
    // {fact rule=weak-random-number-generation@v1.0 defects=0}
    import java.security.SecureRandom
    // ok: insecure-random
    val rand = new SecureRandom()
    val value = Array.ofDim[Byte](16)
    rand.nextBytes(value)
    return value.map("%02x" format _).mkString
    // {/fact}
  }
}