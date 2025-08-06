import scala.io.Source

class FileReader {
  def readFile(filename: String): String = {
    // {fact rule=code-quality-error-handling@v1.0 defects=1}
    try {
      val source = Source.fromFile(filename)
      val content = source.mkString
      source.close()
      content
    } catch {
      case _: Exception => "" // Hiding exception details by returning empty string
    }
    // {/fact}
  }
}