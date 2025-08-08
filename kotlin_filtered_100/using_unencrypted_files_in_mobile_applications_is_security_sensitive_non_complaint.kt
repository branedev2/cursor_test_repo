import java.io.File

// Stub for Android-specific context
class Activity_2 {
    fun filesDir(): File {
        return File(".")
    }
}

// Stub for the file content
val fileContent: String = "dummy content"

// Your class using these stubs
class Unencrypted_1 {

    private val activity = Activity_2() // Stubbed activity

    fun unsafe() {
        // {fact rule=aws-kms-reencryption@v1.0 defects=1}
        val targetFile = File(activity.filesDir(), "data.txt")
        targetFile.writeText(fileContent)  // Sensitive
        // {/fact}
    }
}