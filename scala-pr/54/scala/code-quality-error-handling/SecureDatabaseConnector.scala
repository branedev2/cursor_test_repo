import java.sql.{Connection, DriverManager, SQLException}
import scala.util.{Try, Success, Failure}

class SecureDatabaseConnector {
  private val host = "localhost"
  private val database = "testdb"
  private val username = "root"
  private val password = "password"

  def connect(): Try[Connection] = {
    // {fact rule=code-quality-error-handling@v1.0 defects=0}
    Try {
      DriverManager.getConnection(s"jdbc:mysql://$host/$database", username, password)
    } match {
      case Success(connection) => Success(connection)
      case Failure(ex: SQLException) =>
        println(s"Database connection failed: ${ex.getMessage}")
        Failure(new RuntimeException(s"Unable to connect to database: ${ex.getMessage}", ex))
      case Failure(ex) =>
        println(s"Unexpected error: ${ex.getMessage}")
        Failure(ex)
    }
    // {/fact}
  }
}