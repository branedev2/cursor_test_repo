import android.webkit.WebView


class EnableJSForWebview {
    fun configureWebView(webView: WebView) {
        // {fact rule=reflected-cross-site-scripting@v1.0 defects=1}
        webView.getSettings().setJavaScriptEnabled(true) // Sensitive
        // {/fact}
    }
}

