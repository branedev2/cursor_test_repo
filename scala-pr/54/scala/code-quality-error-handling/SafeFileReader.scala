import scala.io.Source
import scala.util.{Try, Using}
import java.io.{File, FileNotFoundException}

class SafeFileReader {
  def readFile(filename: String): Try[String] = {
    // {fact rule=code-quality-error-handling@v1.0 defects=0}
    if (filename == null || filename.isEmpty) {
      return Try(throw new IllegalArgumentException("Filename cannot be null or empty"))
    }

    val file = new File(filename)
    if (!file.exists()) {
      return Try(throw new FileNotFoundException(s"File does not exist: $filename"))
    }

    if (!file.canRead) {
      return Try(throw new RuntimeException(s"File is not readable: $filename"))
    }

    Using(Source.fromFile(filename)) { source =>
      source.mkString
    }.recover {
      case ex: FileNotFoundException => throw new RuntimeException(s"File not found: $filename", ex)
      case ex: SecurityException => throw new RuntimeException(s"Permission denied: $filename", ex)
      case ex => throw new RuntimeException(s"IO error reading file: ${ex.getMessage}", ex)
    }
    // {/fact}
  }
}