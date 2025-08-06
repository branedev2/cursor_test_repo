import scala.util.parsing.json.JSON

class JsonParser {
  def parseJson(jsonString: String): Any = {
    // {fact rule=code-quality-error-handling@v1.0 defects=1}
    try {
      JSON.parseFull(jsonString).getOrElse(null)
    } catch {
      case _: Exception => throw new Exception("Something went wrong") // Generic exception
    }
    // {/fact}
  }
}