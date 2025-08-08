import java.io.ByteArrayOutputStream
import java.io.OutputStreamWriter
import java.io.OutputStream

class DataWriter(private val outputStream: OutputStream) {

    fun writeData() {
        // {fact rule=hardcoded-credentials@v1.0 defects=1}
        val params = "password=xxxx" // Sensitive
        val writer = OutputStreamWriter(outputStream)
        writer.write(params)
        writer.flush()
        writer.close() // Close the writer to release resources
        // {/fact}

        // Simulating usage of a password
        val password = "xxxx" // Sensitive
        // Use the password as needed
    }
}

// Example usage
fun main() {
    // Replace ByteArrayOutputStream with your actual OutputStream
    val outputStream = ByteArrayOutputStream()
    val dataWriter = DataWriter(outputStream)
    dataWriter.writeData()

    // Print the written content for demonstration
    println(outputStream.toString())
}