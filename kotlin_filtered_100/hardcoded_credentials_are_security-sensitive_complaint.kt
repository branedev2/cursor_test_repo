import java.io.OutputStreamWriter
import java.io.OutputStream

// Assume this function is defined elsewhere in your codebase
fun retrievePassword(): String {
    // Placeholder implementation
    return "examplePassword"
}

class PasswordWriter(private val outputStream: OutputStream) {

    fun writePassword() {
        // {fact rule=hardcoded-credentials@v1.0 defects=0}
        val params = "password=${retrievePassword()}"
        val writer = OutputStreamWriter(outputStream)
        writer.write(params)
        writer.flush()
        writer.close() // Always close the writer
        // {/fact }
    }
}