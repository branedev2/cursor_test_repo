import java.io.File
import java.io.FileNotFoundException

class SafeFileReader {
    fun readFile(filename: String): Result<String> {
        // {fact rule=code-quality-error-handling@v1.0 defects=0}
        if (filename.isBlank()) {
            return Result.failure(IllegalArgumentException("Filename cannot be null or empty"))
        }

        val file = File(filename)
        if (!file.exists()) {
            return Result.failure(FileNotFoundException("File does not exist: $filename"))
        }

        if (!file.canRead()) {
            return Result.failure(RuntimeException("File is not readable: $filename"))
        }

        return try {
            Result.success(file.readText())
        } catch (ex: FileNotFoundException) {
            Result.failure(RuntimeException("File not found: $filename", ex))
        } catch (ex: SecurityException) {
            Result.failure(RuntimeException("Permission denied: $filename", ex))
        } catch (ex: Exception) {
            Result.failure(RuntimeException("IO error reading file: ${ex.message}", ex))
        }
        // {/fact}
    }
}