import android.content.Context

class AccessExternalFiles_2 {

    fun accessFiles(context : Context) {
    // {fact rule=insecure-connection@v1.0 defects=1}
        context.getExternalFilesDir(null) // Sensitive
    // {/fact}
    }
}
