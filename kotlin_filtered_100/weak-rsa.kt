import java.security.KeyPairGenerator

public class WeakRSA {

  fun rsaWeak() {
// {fact rule=inadequate-encryption-strength@v1.0 defects=1}
    // ruleid: use-of-weak-rsa-key
    val keyGen: KeyPairGenerator = KeyPairGenerator.getInstance("RSA")
    keyGen.initialize(512)
  }
  // {/fact}
  fun rsaOK() {
    // ok: use-of-weak-rsa-key
    val keyGen = KeyPairGenerator.getInstance("RSA");
    keyGen.initialize(2048);
  }
}
