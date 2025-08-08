import java.security.SecureRandom


class PseudoRandom {

    fun psuedoRandomSafe() {
        // {fact rule=weak-random-number-generation@v1.0 defects=0}
        val random = SecureRandom() // Compliant
        val bytes = ByteArray(20)
        random.nextBytes(bytes)
        // {/fact}
    }

}

