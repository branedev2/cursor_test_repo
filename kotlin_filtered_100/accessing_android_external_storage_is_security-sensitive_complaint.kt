import android.content.Context
import android.os.Environment

class AccessExternalFiles {

    fun accessFiles(context : Context) {
    // {fact rule=insecure-connection@v1.0 defects=0}
        context.getFilesDir()
    // {/fact}
    }
}
