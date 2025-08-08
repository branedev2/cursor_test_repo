import java.util.*

class PseudoRandom_1 {
    fun pseudoRandomUnsafe() {
        // {fact rule=weak-random-number-generation@v1.0 defects=1}
        val random = Random() // Noncompliant: Random() is not a secure random number generator
        val bytes = ByteArray(20)
        random.nextBytes(bytes)
        // {/fact}
    }
}

