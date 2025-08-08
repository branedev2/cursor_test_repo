// License: LGPL-3.0 License (c) find-sec-bugs
package crypto

import java.security.NoSuchAlgorithmException
import org.apache.http.impl.client.DefaultHttpClient
import javax.net.ssl.SSLContext
import java.lang.reflect.Array


object WeakTLSProtocol {
  def main(args: Array): Unit = {
    // {fact rule=improper-certificate-validation@v1.0 defects=1}
    // ruleid: scala_crypto_rule-WeakTLSProtocol
    new DefaultHttpClient // BAD
    // {/fact}

    try {
      // {fact rule=improper-certificate-validation@v1.0 defects=1}
      // ruleid: scala_crypto_rule-WeakTLSProtocol
      val context1 = SSLContext.getInstance("SSL") // BAD
      // {/fact}

      // {fact rule=improper-certificate-validation@v1.0 defects=0}
      val context2 = SSLContext.getInstance("TLS") // OK
      // {/fact}
    } catch {
      case e: NoSuchAlgorithmException =>
        // TODO Auto-generated catch block
        e.printStackTrace
    }
  }
}
