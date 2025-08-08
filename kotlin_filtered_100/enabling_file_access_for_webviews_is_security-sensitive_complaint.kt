import android.webkit.WebView

class EnableFileAccess {
    fun configureWebView(webView: WebView) {
        // {fact rule=reflected-cross-site-scripting@v1.0 defects=0}
        webView.settings.allowContentAccess = false
        webView.settings.allowFileAccess = false
        // {/fact}
    }
}