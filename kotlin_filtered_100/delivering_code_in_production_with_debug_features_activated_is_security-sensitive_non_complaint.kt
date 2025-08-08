import android.webkit.WebView

object WebViewConfig_1 {
    fun configureWebView() {
        // {fact rule=detect-activated-debug-feature@v1.0 defects=1}
        WebView.setWebContentsDebuggingEnabled(true) // Sensitive
        // {/fact}
    }
}