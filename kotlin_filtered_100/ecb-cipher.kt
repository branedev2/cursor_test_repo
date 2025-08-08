import javax.crypto.Cipher
import javax.crypto.spec.IvParameterSpec
import javax.crypto.spec.SecretKeySpec

class ECBCipher {

    fun ecbCipher(key: ByteArray, iv: ByteArray, plainText: ByteArray) {
        // {fact rule=use-of-a-broken-or-risky-cryptographic-algorithm@v1.0 defects=1}
        // ruleid: ecb-cipher
        val c: Cipher = Cipher.getInstance("AES/ECB/NoPadding")
        // {/fact}
        val secretKey = SecretKeySpec(key, "AES")
        val ivSpec = IvParameterSpec(iv)
        c.init(Cipher.ENCRYPT_MODE, secretKey, ivSpec)
        val cipherText = c.doFinal(plainText)
        // ... do something with cipherText
    }

    fun ecbCipher2(key: ByteArray, iv: ByteArray, plainText: ByteArray) {
        // {fact rule=use-of-a-broken-or-risky-cryptographic-algorithm@v1.0 defects=1}
        // ruleid: ecb-cipher
        val c = Cipher.getInstance("AES/ECB/NoPadding")
        // {/fact}
        val secretKey = SecretKeySpec(key, "AES")
        val ivSpec = IvParameterSpec(iv)
        c.init(Cipher.ENCRYPT_MODE, secretKey, ivSpec)
        val cipherText = c.doFinal(plainText)
        // ... do something with cipherText
    }

    fun noEcbCipher(key: ByteArray, iv: ByteArray, plainText: ByteArray) {
        // {fact rule=use-of-a-broken-or-risky-cryptographic-algorithm@v1.0 defects=0}
        // ok: ecb-cipher
        val c = Cipher.getInstance("AES/GCM/NoPadding")
        // {/fact}
        val secretKey = SecretKeySpec(key, "AES")
        val ivSpec = IvParameterSpec(iv)
        c.init(Cipher.ENCRYPT_MODE, secretKey, ivSpec)
        val cipherText = c.doFinal(plainText)
        // ... do something with cipherText
    }
}