import java.io.File
import java.io.OutputStream

// Stub for Android-specific context
class Activity_1 {
    fun filesDir(): File {
        return File(".")
    }
}

// Stub for MasterKeys
object MasterKeys {
    val AES256_SIV: String = ""
    const val AES256_GCM_SPEC = "AES256_GCM_SPEC"

    fun getOrCreate(keyAlias: String): ByteArray {
        // Return a dummy byte array for the key
        return ByteArray(32) { 0 }
    }
}

// Stub for EncryptedFile
class EncryptedFile private constructor(
    private val file: File,
    private val context: Activity_1,
    private val key: ByteArray,
    private val scheme: FileEncryptionScheme
) {
    class Builder(
        private val file: File,
        private val context: Activity_1,
        private val key: ByteArray,
        private val scheme: FileEncryptionScheme
    ) {
        fun build(): EncryptedFile {
            return EncryptedFile(file, context, key, scheme)
        }
    }

    fun openFileOutput(): OutputStream {
        // Return a dummy OutputStream
        return object : OutputStream() {
            override fun write(b: Int) {
                // No-op
            }
        }
    }

    enum class FileEncryptionScheme {
        AES256_GCM_HKDF_4KB
    }
}

// Your class using these stubs
class Unencrypted {

    private val activity = Activity_1() // Stubbed activity

    fun safe() {
        // {fact rule=aws-kms-reencryption@v1.0 defects=0}
        val mainKey = MasterKeys.getOrCreate(MasterKeys.AES256_GCM_SPEC)

        val encryptedFile = EncryptedFile.Builder(
            File(activity.filesDir(), "data.txt"),
            activity,
            mainKey,
            EncryptedFile.FileEncryptionScheme.AES256_GCM_HKDF_4KB
        ).build()

        encryptedFile.openFileOutput().apply {
            write("dummy content".toByteArray())
            flush()
            close()
        }
        // {/fact}
    }
}