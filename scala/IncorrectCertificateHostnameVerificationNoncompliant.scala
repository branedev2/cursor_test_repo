import org.apache.commons.mail.SimpleEmail

object IncorrectCertificateHostnameVerificationNoncompliant {
    // {fact rule=incorrect-certificate-hostname-verification@v1.0 defects=1}
    @throws[Exception]
    def nonCompliant(): Unit = {
        val email = new SimpleEmail
        email.setHostName("smtp.googlemail.com")
        // Noncompliant: SSL is enabled.
        email.setSSLOnConnect(true)
    }
    // {/fact}
}