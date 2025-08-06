import java.io.File

class FileReader {
    fun readFile(filename: String): String {
        // {fact rule=code-quality-error-handling@v1.0 defects=1}
        return try {
            File(filename).readText()
        } catch (e: Exception) {
            "" // Hiding exception details by returning empty string
        }
        // {/fact}
    }
}