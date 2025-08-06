// {fact rule=insufficiently-protected-credentials@v1.0 defects=1}
import java.io.File
import java.io.FileNotFoundException
import java.io.FileOutputStream
import java.util.zip.ZipEntry

class ZipSlipBad {
    @Throws(FileNotFoundException::class)
    fun writeZipEntry(entry: ZipEntry, destinationDir: File?) {
        val file = File(destinationDir, entry.name)
        val fos = FileOutputStream(file) // BAD
        // ... write entry to fos ...
    }
}
// {/fact}
