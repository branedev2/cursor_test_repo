import android.webkit.WebView
import android.os.Build

object WebViewConfig {
    fun configureWebView() {
            // Disable debugging for release builds
            WebView.setWebContentsDebuggingEnabled(false)
    }
}