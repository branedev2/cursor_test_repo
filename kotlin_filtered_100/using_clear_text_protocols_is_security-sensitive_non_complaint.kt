import android.webkit.WebSettings.MIXED_CONTENT_ALWAYS_ALLOW
import android.webkit.WebView
import okhttp3.ConnectionSpec
import org.apache.commons.net.ftp.FTPClient
import org.apache.commons.net.smtp.SMTPClient
import org.apache.commons.net.telnet.TelnetClient

class ClearText_1 {
  fun unsafe(webView: WebView) {
    // {fact rule=sensitive-information-leak@v1.0 defects=1}
    val telnet = TelnetClient(); // Sensitive

    val ftpClient = FTPClient(); // Sensitive

    val smtpClient = SMTPClient(); // Sensitive


    val spec: ConnectionSpec = ConnectionSpec.Builder(ConnectionSpec.CLEARTEXT) // Sensitive
      .build()

    webView.getSettings().setMixedContentMode(MIXED_CONTENT_ALWAYS_ALLOW) // Sensitive
    // {/fact}
  }
}


