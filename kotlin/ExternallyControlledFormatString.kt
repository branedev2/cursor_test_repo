// {fact rule={'cleartext-transmission-of-sensitive-information': 'CWE-319', 'insecure-cryptographic-storage': 'CWE-326', 'use-of-a-broken-or-risky-cryptographic-algorithm': 'CWE-327', 'use-of-insufficiently-random-values': 'CWE-330', 'incorrect-usage-of-secrets': 'CWE-335', 'use-of-cryptographically-weak-prng': 'CWE-338', 'improper-verification-of-cryptographic-signature': 'CWE-347', 'cross-site-request-forgery': 'CWE-352', 'time-of-check-time-of-use-race-condition': 'CWE-367', 'race-condition-during-access-to-resources': 'CWE-421', 'unintended-proxy-or-intermediary': 'CWE-441', 'use-of-externally-controlled-input-to-select-classes-or-code': 'CWE-470', 'active-debug-code': 'CWE-489', 'trust-boundary-violation': 'CWE-501', 'deserialization-of-untrusted-data': 'CWE-502', 'insufficiently-protected-credentials': 'CWE-522', 'use-of-cache-controlling-script': 'CWE-524', 'inclusion-of-sensitive-information-in-log-files': 'CWE-532', 'url-redirection-to-untrusted-site': 'CWE-601', 'improper-restriction-of-xml-external-entity-reference': 'CWE-611', 'sensitive-cookie-in-https-session-without-secure-attribute': 'CWE-614', 'improper-neutralization-of-data-within-xpath-queries': 'CWE-643', 'use-of-potentially-dangerous-function': 'CWE-676', 'incorrect-conversion-between-numeric-types': 'CWE-681', 'owasp-top-ten-2013-a7-missing-function-level-access-control': 'CWE-730', 'incorrect-permission-assignment-for-critical-resource': 'CWE-732', 'excessive-permissions-grant': 'CWE-749', 'use-of-rsa-algorithm-without-oaep': 'CWE-780', 'use-of-hard-coded-credentials': 'CWE-798', 'reliance-on-untrusted-inputs-in-a-security-decision': 'CWE-807', 'inclusion-of-functionality-from-untrusted-control-sphere': 'CWE-829', 'dead-and-deactivated-code': 'CWE-833', 'loop-with-unreachable-exit-condition': 'CWE-835', 'improper-neutralization-of-special-elements-used-in-an-os-command': 'CWE-917', 'server-side-request-forgery': 'CWE-918', 'improper-verification-of-intent-by-broadcast-receiver': 'CWE-925', 'improper-export-of-android-application-components': 'CWE-926', 'use-of-impersonation-without-disclosure': 'CWE-927', 'improper-verification-of-origin-with-file-download': 'CWE-940', 'use-of-unmaintained-third-party-components': 'CWE-1104', 'audit-log-file-deletion': 'CWE-1204'} defects=0}
import jakarta.servlet.ServletException
import jakarta.servlet.http.HttpServlet
import jakarta.servlet.http.HttpServletRequest
import jakarta.servlet.http.HttpServletResponse
import java.io.IOException
import java.util.*

class ResponseSplitting : HttpServlet() {
    @Throws(ServletException::class, IOException::class)
    protected override fun doGet(request: HttpServletRequest, response: HttpServletResponse?) {
        val expirationDate: Calendar = GregorianCalendar(2017, GregorianCalendar.SEPTEMBER, 1)
        // User provided value
        val cardSecurityCode: String = request.getParameter("cardSecurityCode")
        if (notValid(cardSecurityCode)) {

            /*
       * BAD: user provided value is included in the format string.
       * A malicious user could provide an extra format specifier, which causes an
       * exception to be thrown. Or they could provide a %1$tm or %1$te format specifier to
       * access the month or day of the expiration date.
       */
            System.out.format(cardSecurityCode +
                    " is not the right value. Hint: the card expires in %1\$ty.",
                    expirationDate)

            // GOOD: %s is used to include the user-provided cardSecurityCode in the output
            System.out.format("%s is not the right value. Hint: the card expires in %2\$ty.",
                    cardSecurityCode,
                    expirationDate)
        }
    }

    private fun notValid(cardSecurityCode: String): Boolean {
        return true
    }
}
// {/fact}
