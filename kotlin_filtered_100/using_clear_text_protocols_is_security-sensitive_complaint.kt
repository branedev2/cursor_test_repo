import android.webkit.WebSettings.MIXED_CONTENT_NEVER_ALLOW
import android.webkit.WebView
import com.jcraft.jsch.JSch
import okhttp3.ConnectionSpec
import org.apache.commons.net.ftp.FTPSClient
import org.apache.commons.net.smtp.SMTPSClient


class ClearTextProtocols {

  fun clear(webView: WebView) {
    // {fact rule=sensitive-information-leak@v1.0 defects=0}
    var jsch = JSch();
    var implicit = true;

    if(implicit) {
      // implicit mode is considered deprecated but offer the same security than explicit mode
      val ftpsClient = FTPSClient(true);
    }
    else {
      val ftpsClient = FTPSClient();
    }

    if(implicit) {
      // implicit mode is considered deprecated but offer the same security than explicit mode
      val smtpsClient = SMTPSClient(true);
    }
    else {
      val smtpsClient = SMTPSClient();
      smtpsClient.connect("127.0.0.1", 25);
      if (smtpsClient.execTLS()) {
        // commands
      }
    }


    val spec: ConnectionSpec = ConnectionSpec.Builder(ConnectionSpec.MODERN_TLS)
      .build()


    webView.getSettings().setMixedContentMode(MIXED_CONTENT_NEVER_ALLOW)
// {/fact}
  }
}

