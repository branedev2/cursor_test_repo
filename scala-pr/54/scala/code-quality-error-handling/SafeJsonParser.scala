import scala.util.parsing.json.JSON
import scala.util.{Try, Success, Failure}

class SafeJsonParser {
  def parseJson(jsonString: String): Try[Any] = {
    // {fact rule=code-quality-error-handling@v1.0 defects=0}
    if (jsonString == null || jsonString.isEmpty) {
      return Failure(new IllegalArgumentException("JSON string cannot be null or empty"))
    }

    Try {
      JSON.parseFull(jsonString) match {
        case Some(result) => result
        case None => throw new IllegalArgumentException("Invalid JSON format")
      }
    }.recoverWith {
      case ex: IllegalArgumentException => Failure(ex)
      case ex => Failure(new RuntimeException(s"Unexpected error parsing JSON: ${ex.getMessage}", ex))
    }
    // {/fact}
  }
}