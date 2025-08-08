import java.security.MessageDigest

class WeakHashing {
    fun safe() {
        // {fact rule=cryptographic-key-generator@v1.0 defects=0}
        val md1: MessageDigest = MessageDigest.getInstance("SHA-512"); // Compliant
        // {/fact}
    }
}

