import android.content.Context


// Stub for android.content.Context
class Context

// Stubs for androidx.security.crypto
object EncryptedSharedPreferences {
    object PrefKeyEncryptionScheme {
        object AES256_SIV
    }
    object PrefValueEncryptionScheme {
        object AES256_GCM
    }

    fun create(name: String, masterKeyAlias: String, context: Context,
               keyScheme: Any, valueScheme: Any): EncryptedSharedPreferences {
        return EncryptedSharedPreferences()
    }

    private operator fun invoke(): EncryptedSharedPreferences {
        TODO("Not yet implemented")
    }
}

// Stubs for io.realm
class Realm {
    companion object {
        fun getInstance(config: RealmConfiguration): Realm = Realm()
    }
}

class RealmConfiguration private constructor() {
    class Builder {
        fun encryptionKey(key: ByteArray): Builder = this
        fun build(): RealmConfiguration = RealmConfiguration()
    }
}

// Stub for android.database.sqlite.SQLiteDatabase
class SQLiteDatabase {
    companion object {
        fun openOrCreateDatabase(name: String, factory: Any?): SQLiteDatabase = SQLiteDatabase()
    }
}

// The actual Database class remains mostly unchanged
class Database(private val context: Context) {

    fun unencryptedDB() {

        // {fact rule=aws-kms-reencryption@v1.0 defects=0}
        val db = SQLiteDatabase.openOrCreateDatabase("test.db", null)

        val masterKeyAlias = MasterKeys.getOrCreate(MasterKeys.AES256_SIV)
        EncryptedSharedPreferences.create(
            "secret",
            "masterKeyAlias",
            context,
            EncryptedSharedPreferences.PrefKeyEncryptionScheme.AES256_SIV,
            EncryptedSharedPreferences.PrefValueEncryptionScheme.AES256_GCM
        )

        val config = RealmConfiguration.Builder()
            .encryptionKey(getKey())
            .build()
        val realm = Realm.getInstance(config)
        // {/fact}
    }

    private fun getKey(): ByteArray {
        return ByteArray(64) { 0 }
    }
}