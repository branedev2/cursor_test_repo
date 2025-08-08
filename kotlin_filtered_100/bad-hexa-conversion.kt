package testcode.crypto

import java.security.MessageDigest

class BadHexa {
    fun main(args: Array<String>) {
        val good: String = goodHash("12345")
        val bad: String = badHash("12345")
        println(String.format("%s (len=%d) != %s (len=%d)", good, good.length, bad, bad.length))
    }

    // ok: bad-hexa-conversion
    fun goodHash(password: String): String {
        val md: MessageDigest = MessageDigest.getInstance("SHA-1")
        val resultBytes: ByteArray = md.digest(password.toByteArray(Charsets.UTF_8))

        val stringBuilder: StringBuilder = StringBuilder()
        for (b in resultBytes) {
            stringBuilder.append(String.format("%02X", b))
        }

        return stringBuilder.toString()
    }

    // ruleid: bad-hexa-conversion
    fun badHash(password: String): String {
        val md: MessageDigest = MessageDigest.getInstance("SHA-1")
        val resultBytes: ByteArray = md.digest(password.toByteArray(Charsets.UTF_8))

        val stringBuilder: StringBuilder = StringBuilder()
        for (b in resultBytes) {
            stringBuilder.append(Integer.toHexString(b.toInt() and 0xFF))
        }

        return stringBuilder.toString()
    }
}
