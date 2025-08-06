//// {fact rule=use-of-cryptographically-weak-prng@v1.0 defects=0}
//import org.apache.commons.lang3.RandomStringUtils
//import java.security.SecureRandom
//
///**
// * Utility class for generating random Strings.
// */
//object RandomUtil {
//    private val SECURE_RANDOM = SecureRandom() // GOOD: Using SecureRandom
//    const val DEF_COUNT = 20
//
//    init {
//        SECURE_RANDOM.nextBytes(ByteArray(64))
//    }
//
//    private fun generateRandomAlphanumericString(): String {
//        // GOOD: Passing Secure Random to RandomStringUtils::random
//        return RandomStringUtils.random(DEF_COUNT, 0, 0, true, true, null, SECURE_RANDOM)
//    }
//
//    /**
//     * Generate a password.
//     *
//     * @return the generated password.
//     */
//    fun generatePassword(): String {
//        return generateRandomAlphanumericString()
//    }
//
//    /**
//     * Generate an activation key.
//     *
//     * @return the generated activation key.
//     */
//    fun generateActivationKey(): String {
//        return generateRandomAlphanumericString()
//    }
//
//    /**
//     * Generate a reset key.
//     *
//     * @return the generated reset key.
//     */
//    fun generateResetKey(): String {
//        return generateRandomAlphanumericString()
//    }
//
//    /**
//     * Generate a unique series to validate a persistent token, used in the
//     * authentication remember-me mechanism.
//     *
//     * @return the generated series data.
//     */
//    fun generateSeriesData(): String {
//        return generateRandomAlphanumericString()
//    }
//
//    /**
//     * Generate a persistent token, used in the authentication remember-me mechanism.
//     *
//     * @return the generated token data.
//     */
//    fun generateTokenData(): String {
//        return generateRandomAlphanumericString()
//    }
//}
//// {/fact}
