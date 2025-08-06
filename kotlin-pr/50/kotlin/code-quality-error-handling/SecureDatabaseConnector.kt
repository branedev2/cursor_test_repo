import java.sql.Connection
import java.sql.DriverManager
import java.sql.SQLException

class SecureDatabaseConnector {
    private val host = "localhost"
    private val database = "testdb"
    private val username = "root"
    private val password = "password"

    fun connect(): Result<Connection> {
        // {fact rule=code-quality-error-handling@v1.0 defects=0}
        return try {
            val connection = DriverManager.getConnection("jdbc:mysql://$host/$database", username, password)
            Result.success(connection)
        } catch (ex: SQLException) {
            println("Database connection failed: ${ex.message}")
            Result.failure(RuntimeException("Unable to connect to database: ${ex.message}", ex))
        } catch (ex: Exception) {
            println("Unexpected error: ${ex.message}")
            Result.failure(ex)
        }
        // {/fact}
    }
}