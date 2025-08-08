import java.security.MessageDigest
import org.apache.commons.codec.digest.DigestUtils

public class WeakHashes2 {
  public fun sha1(password: String): ByteArray {
// {fact rule=use-of-a-broken-or-risky-cryptographic-algorithm@v1.0 defects=1}
      // ruleid: use-of-sha1
      var sha1Digest: MessageDigest = MessageDigest.getInstance("SHA1")
// {/fact}
      sha1Digest.update(password.toByteArray())
      val hashValue: ByteArray = sha1Digest.digest()
      return hashValue
  }
  public fun sha1b(password: String): ByteArray {

// {fact rule=use-of-a-broken-or-risky-cryptographic-algorithm@v1.0 defects=1}
      // ruleid: use-of-sha1
      var sha1Digest: MessageDigest = MessageDigest.getInstance("SHA-1")
// {/fact}
      sha1Digest.update(password.toByteArray())

      val hashValue: ByteArray = sha1Digest.digest()
      return hashValue

  }
  public fun sha1_digestutil(password: String): ByteArray {
// {fact rule=use-of-a-broken-or-risky-cryptographic-algorithm@v1.0 defects=1}
    // ruleid: use-of-sha1
    val hashValue: ByteArray = DigestUtils.getSha1Digest().digest(password.toByteArray())
// {/fact}
    return hashValue
  }
}
