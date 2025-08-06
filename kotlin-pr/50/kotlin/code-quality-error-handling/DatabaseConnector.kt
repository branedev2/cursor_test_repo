import java.sql.Connection
import java.sql.DriverManager

class DatabaseConnector {
    private val host = "localhost"
    private val database = "testdb"
    private val username = "root"
    private val password = "password"

    fun connect(): Connection? {
        // {fact rule=code-quality-error-handling@v1.0 defects=1}
        return try {
            DriverManager.getConnection("jdbc:mysql://$host/$database", username, password)
        } catch (e: Exception) {
            null // Swallowing exceptions and returning null
        }
        // {/fact}
    }
}