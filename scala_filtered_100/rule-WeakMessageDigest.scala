// License: LGPL-3.0 License (c) find-sec-bugs
package crypto

import java.security.MessageDigest
import java.security.NoSuchAlgorithmException
import java.security.NoSuchProviderException
import java.security.Provider
import java.security.Signature


object WeakMessageDigest {
  @throws[NoSuchProviderException]
  @throws[NoSuchAlgorithmException]
  def weakDigestMoreSig(): Unit = {
    // {fact rule=insecure-cryptography@v1.0 defects=1}
    // ruleid: scala_crypto_rule-WeakMessageDigest
    MessageDigest.getInstance("MD5", "SUN")
    // {/fact}
    // {fact rule=insecure-cryptography@v1.0 defects=1}
    // ruleid: scala_crypto_rule-WeakMessageDigest
    MessageDigest.getInstance("MD4", "SUN")
    // {/fact}
    // {fact rule=insecure-cryptography@v1.0 defects=1}
    // ruleid: scala_crypto_rule-WeakMessageDigest
    MessageDigest.getInstance("MD2", "SUN")
    // {/fact}
    // {fact rule=insecure-cryptography@v1.0 defects=1}
    // ruleid: scala_crypto_rule-WeakMessageDigest
    MessageDigest.getInstance("MD5")
    // {/fact}
    // {fact rule=insecure-cryptography@v1.0 defects=1}
    // ruleid: scala_crypto_rule-WeakMessageDigest
    MessageDigest.getInstance("MD4")
    // {/fact}
    // {fact rule=insecure-cryptography@v1.0 defects=1}
    // ruleid: scala_crypto_rule-WeakMessageDigest
    MessageDigest.getInstance("MD2")
    // {/fact}
    // {fact rule=insecure-cryptography@v1.0 defects=1}
    // ruleid: scala_crypto_rule-WeakMessageDigest
    MessageDigest.getInstance("MD5", new WeakMessageDigest.ExampleProvider)
    // {/fact}
    // {fact rule=insecure-cryptography@v1.0 defects=1}
    // ruleid: scala_crypto_rule-WeakMessageDigest
    MessageDigest.getInstance("MD4", new WeakMessageDigest.ExampleProvider)
    // {/fact}
    // {fact rule=insecure-cryptography@v1.0 defects=1}
    // ruleid: scala_crypto_rule-WeakMessageDigest
    MessageDigest.getInstance("MD2", new WeakMessageDigest.ExampleProvider)
    // {/fact}
    MessageDigest.getInstance("SHA", "SUN")
    MessageDigest.getInstance("SHA", new WeakMessageDigest.ExampleProvider)
    // {fact rule=insecure-cryptography@v1.0 defects=1}
    // ruleid: scala_crypto_rule-WeakMessageDigest
    MessageDigest.getInstance("SHA1", "SUN")
    // {/fact}
    // {fact rule=insecure-cryptography@v1.0 defects=1}
    // ruleid: scala_crypto_rule-WeakMessageDigest
    MessageDigest.getInstance("SHA1", new WeakMessageDigest.ExampleProvider)
    // {/fact}
    // {fact rule=insecure-cryptography@v1.0 defects=1}
    // ruleid: scala_crypto_rule-WeakMessageDigest
    MessageDigest.getInstance("SHA-1", "SUN")
    // {/fact}
    // {fact rule=insecure-cryptography@v1.0 defects=1}
    // ruleid: scala_crypto_rule-WeakMessageDigest
    MessageDigest.getInstance("SHA-1", new WeakMessageDigest.ExampleProvider)
    // {/fact}
    // {fact rule=insecure-cryptography@v1.0 defects=0}
    MessageDigest.getInstance("sha-384", "SUN") //OK!
    // {/fact}
    // {fact rule=insecure-cryptography@v1.0 defects=0}
    MessageDigest.getInstance("SHA-512", "SUN")
    // {/fact}
    // {fact rule=insecure-cryptography@v1.0 defects=1}
    // ruleid: scala_crypto_rule-WeakMessageDigest
    Signature.getInstance("MD5withRSA")
    // {/fact}
    // {fact rule=insecure-cryptography@v1.0 defects=1}
    // ruleid: scala_crypto_rule-WeakMessageDigest
    Signature.getInstance("MD2withDSA", "X")
    // {/fact}
    // {fact rule=insecure-cryptography@v1.0 defects=1}
    // ruleid: scala_crypto_rule-WeakMessageDigest
    Signature.getInstance("SHA1withRSA", new WeakMessageDigest.ExampleProvider)
    // {/fact}
    // {fact rule=insecure-cryptography@v1.0 defects=0}
    Signature.getInstance("SHA256withRSA") //OK
    // {/fact}

    Signature.getInstance("uncommon name", "")
  }

  private class ExampleProvider(info: String) extends Provider("example", 0.0, info) {
    def this() {
      this("example")
    }
  }
}
