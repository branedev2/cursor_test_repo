import android.content.Context
import android.database.sqlite.SQLiteDatabase

// Define a stub for Activity
class Activity {
    // Stub method to simulate opening or creating a database
    fun openOrCreateDatabase(name: String, mode: Int, factory: SQLiteDatabase.CursorFactory?): SQLiteDatabase {
        return SQLiteDatabase.create(null) // Stub implementation
    }

    // Stub method to simulate getting shared preferences
    fun getPreferences(mode: Int): SharedPreferences {
        return SharedPreferences() // Stub implementation
    }
}

// Define a stub for SharedPreferences
class SharedPreferences {
    // Stub implementation of SharedPreferences
}

class UnencryptedDatabase(private val activity: Activity) {
    fun unsafe() {
        // {fact rule=aws-kms-reencryption@v1.0 defects=1}
        val db = activity.openOrCreateDatabase("test.db", Context.MODE_PRIVATE, null) // Sensitive

        val pref = activity.getPreferences(Context.MODE_PRIVATE) // Sensitive

        val config = RealmConfiguration.Builder().build()
        val realm = Realm.getInstance(config) // Sensitive
        // {/fact}
    }
}