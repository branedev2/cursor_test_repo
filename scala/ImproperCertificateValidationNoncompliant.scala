import javax.net.ssl._

object ImproperCertificateValidationNoncompliant {
  // {fact rule=improper-certificate-validation@v1.0 defects=1}
  def compliant(args: Array): Unit = {
    try {
      // Noncompliant: the default hostname verifier is not used.
      val context1 = SSLContext.getInstance("SSL")
    } catch {
      case e: NoSuchAlgorithmException =>
        e.printStackTrace
    }
  }
  // {/fact}
}