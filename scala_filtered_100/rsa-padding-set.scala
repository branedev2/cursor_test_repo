package lang.security.audit

import javax.crypto.{Cipher, SecretKey}
import javax.crypto.spec.{IvParameterSpec, SecretKeySpec}
import scala.util.control.NonFatal

class RSACipher {
  val keyBytes = Array[Byte](/* Your key bytes here */)
  val k: SecretKey = new SecretKeySpec(keyBytes, "AES")
  val ivBytes = Array[Byte](/* Your IV bytes here */)
  val iv = new IvParameterSpec(ivBytes)

  def badRSACipher(): Unit =
    try {
      // {fact rule=use-of-rsa-algorithm-without-oaep@v1.0 defects=1}
      // ruleid: rsa-padding-set
      val c = Cipher.getInstance("RSA/None/NoPadding")
      c.init(Cipher.ENCRYPT_MODE, k, iv)
      val plainText: Array[Byte] = "Your plaintext message".getBytes("UTF-8")
      val cipherText = c.doFinal(plainText)
      // {/fact}
    } catch {
      case NonFatal(e) => throw new RuntimeException("Encrypt error", e)
    }

  def okRSACipher(): Unit =
    try {
      // {fact rule=use-of-rsa-algorithm-without-oaep@v1.0 defects=0}
      // ok: rsa-padding-set
      var c = Cipher.getInstance("RSA/ECB/OAEPWithMD5AndMGF1Padding")
      c.init(Cipher.ENCRYPT_MODE, k, iv)
      val plainText: Array[Byte] = "Your plaintext message".getBytes("UTF-8")
      val cipherText = c.doFinal(plainText)
      // {/fact}
    } catch {
      case NonFatal(e) => throw new RuntimeException("Encrypt error", e)
    }
}
