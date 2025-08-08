import java.security.MessageDigest

class WeakHash_1 {
    fun unsafe() {
        // {fact rule=cryptographic-key-generator@v1.0 defects=1}
        val md1: MessageDigest = MessageDigest.getInstance("SHA");  // Sensitive:  SHA is not a standard name, for most security providers it's an alias of SHA-1
        val md2: MessageDigest = MessageDigest.getInstance("SHA1");  // Sensitive
        // {/fact}
    }
}

