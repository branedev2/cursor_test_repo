import android.webkit.WebView

class EnableFileAccess_1 {
    fun configureWebView(webView: WebView) {
        // {fact rule=reflected-cross-site-scripting@v1.0 defects=1}
        webView.settings.allowContentAccess = true // Sensitive
        webView.settings.allowFileAccess = true // Sensitive
        // {/fact}
    }
}
