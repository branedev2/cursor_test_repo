
class ImproperHandlingOfUnicodeEncodingNoncompliant {

    // {fact rule=improper-handling-of-unicode-encoding@v1.0 defects=1}
    def nonCompliant() = {
        println("Enter a string to compare with 'TEST':")
        val s = scala.io.StdIn.readLine()
        // Noncompliant: Uses improper Unicode normalization method.
        s.toUpperCase().equals("TEST")
    }
    // {/fact}
}