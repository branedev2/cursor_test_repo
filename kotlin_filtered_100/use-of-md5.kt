import java.security.MessageDigest
import org.apache.commons.codec.digest.DigestUtils

public class WeakHashes {
  public fun sha1_digestutil(password: String): ByteArray {
// {fact rule=insecure-cryptography@v1.0 defects=0}
    // ok: use-of-md5
      val sha256Digest: MessageDigest = MessageDigest.getInstance("SHA256")

      sha256Digest.update(password.toByteArray())
      val hashValue: ByteArray = sha256Digest.digest()
      return hashValue
    val hashValue2: ByteArray = DigestUtils.getSha256Digest().digest(password.toByteArray())
    return hashValue
  }
// {/fact}
  public fun md5(password: String): ByteArray {
// {fact rule=insecure-cryptography@v1.0 defects=1}
    // ruleid: use-of-md5
    val md5Digest: MessageDigest = MessageDigest.getInstance("MD5")
    md5Digest.update(password.toByteArray())
    val hashValue: ByteArray = md5Digest.digest()
    return hashValue
  }
// {/fact}

  public fun md5_digestutil(password: String): ByteArray {

// {fact rule=insecure-cryptography@v1.0 defects=1}
    // ruleid: use-of-md5
    val hashValue: ByteArray = DigestUtils.getMd5Digest().digest(password.toByteArray())

    return hashValue
  }
// {/fact}
}
