import java.lang.Runtime
import javax.crypto.Cipher
import javax.crypto.NullCipher

class Cls {
    fun test1(plainText: String): ByteArray {
        // {fact rule=use-of-a-broken-or-risky-cryptographic-algorithm@v1.0 defects=1}
        // ruleid: no-null-cipher
        val doNothingCipher: Cipher = NullCipher()
        // {/fact}
        //The ciphertext produced will be identical to the plaintext.
        val cipherText: ByteArray = doNothingCipher.doFinal(plainText.toByteArray())
        return cipherText
    }

    fun test2(plainText: String): ByteArray {
        // ok: no-null-cipher
        val cipher: Cipher = Cipher.getInstance("AES/CBC/PKCS5Padding")
        val cipherText: ByteArray = cipher.doFinal(plainText.toByteArray())
        return cipherText
    }
}