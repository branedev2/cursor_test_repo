import java.sql.{Connection, DriverManager}

class DatabaseConnector {
  private val host = "localhost"
  private val database = "testdb"
  private val username = "root"
  private val password = "password"

  def connect(): Connection = {
    // {fact rule=code-quality-error-handling@v1.0 defects=1}
    try {
      val connection = DriverManager.getConnection(s"jdbc:mysql://$host/$database", username, password)
      connection
    } catch {
      case _: Exception => null // Swallowing exceptions and returning null
    }
    // {/fact}
  }
}