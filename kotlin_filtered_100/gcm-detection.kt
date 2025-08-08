import java.util.*
import javax.crypto.Cipher
import javax.crypto.KeyGenerator
import javax.crypto.SecretKey
import javax.crypto.spec.GCMParameterSpec
import javax.crypto.spec.SecretKeySpec

class GcmHardcodedIV {
    private fun byteArrayOfInts(vararg ints: Int) = ints.map { it.toByte() }.toByteArray()
    private val GCM_TAG_LENGTH: Int = 16
    private val BAD_IV: String = "ab0123456789"
    private val BAD_IV2 = byteArrayOfInts(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11)

    private lateinit var theIV: ByteArray
    private lateinit var theKey: SecretKey

    fun main(args: Array<String>) {
        val clearText: String = args[0]
        println(clearText)

        try {
            setKeys()

            val cipherText: String = encrypt(clearText)
            println(cipherText)

            val decrypted: String = decrypt(cipherText)
            println(decrypted)
        } catch (e: Exception) {
            println(e.message)
        }
    }

    fun encrypt(clearText: String): String {
        // {fact rule=reusing_nonce_key_pair_encryption@v1.0 defects=1}
        // ruleid:gcm-detection
        val cipher: Cipher = Cipher.getInstance("AES/GCM/NoPadding")
        // {/fact}
        val keySpec: SecretKeySpec = SecretKeySpec(theKey.encoded, "AES")

        val theBadIV: ByteArray = BAD_IV.toByteArray()

        // {fact rule=reusing_nonce_key_pair_encryption@v1.0 defects=1}
        // ruleid:gcm-detection
        val gcmParameterSpec: GCMParameterSpec = GCMParameterSpec(GCM_TAG_LENGTH * 8, theBadIV)
        // {/fact}
        cipher.init(Cipher.ENCRYPT_MODE, keySpec, gcmParameterSpec)

        val cipherText: ByteArray = cipher.doFinal(clearText.toByteArray())

        val encoded = Base64.getEncoder().encodeToString(cipherText)
        return encoded
    }

    fun decrypt(cipherText: String): String {
        // {fact rule=reusing_nonce_key_pair_encryption@v1.0 defects=1}
        // ruleid:gcm-detection
        val cipher: Cipher = Cipher.getInstance("AES/GCM/NoPadding")
        // {/fact}
        val keySpec: SecretKeySpec = SecretKeySpec(theKey.encoded, "AES")

        // {fact rule=reusing_nonce_key_pair_encryption@v1.0 defects=1}
        // ruleid:gcm-detection
        val gcmParameterSpec: GCMParameterSpec = GCMParameterSpec(GCM_TAG_LENGTH * 8, theIV)
        // {/fact}
        cipher.init(Cipher.DECRYPT_MODE, keySpec, gcmParameterSpec)

        val decoded: ByteArray = Base64.getDecoder().decode(cipherText)
        val decryptedText: ByteArray = cipher.doFinal(decoded)

        return String(decryptedText)
    }

    private fun setKeys() {
        val keyGenerator: KeyGenerator = KeyGenerator.getInstance("AES")
        keyGenerator.init(256)

        theKey = keyGenerator.generateKey()
        theIV = BAD_IV.toByteArray()
    }
}