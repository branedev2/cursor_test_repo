// {fact rule={'cleartext-transmission-of-sensitive-information': 'CWE-319', 'insecure-cryptographic-storage': 'CWE-326', 'use-of-a-broken-or-risky-cryptographic-algorithm': 'CWE-327', 'use-of-insufficiently-random-values': 'CWE-330', 'incorrect-usage-of-secrets': 'CWE-335', 'use-of-cryptographically-weak-prng': 'CWE-338', 'improper-verification-of-cryptographic-signature': 'CWE-347', 'cross-site-request-forgery': 'CWE-352', 'time-of-check-time-of-use-race-condition': 'CWE-367', 'race-condition-during-access-to-resources': 'CWE-421', 'unintended-proxy-or-intermediary': 'CWE-441', 'use-of-externally-controlled-input-to-select-classes-or-code': 'CWE-470', 'active-debug-code': 'CWE-489', 'trust-boundary-violation': 'CWE-501', 'deserialization-of-untrusted-data': 'CWE-502', 'insufficiently-protected-credentials': 'CWE-522', 'use-of-cache-controlling-script': 'CWE-524', 'inclusion-of-sensitive-information-in-log-files': 'CWE-532', 'url-redirection-to-untrusted-site': 'CWE-601', 'improper-restriction-of-xml-external-entity-reference': 'CWE-611', 'sensitive-cookie-in-https-session-without-secure-attribute': 'CWE-614', 'improper-neutralization-of-data-within-xpath-queries': 'CWE-643', 'use-of-potentially-dangerous-function': 'CWE-676', 'incorrect-conversion-between-numeric-types': 'CWE-681', 'owasp-top-ten-2013-a7-missing-function-level-access-control': 'CWE-730', 'incorrect-permission-assignment-for-critical-resource': 'CWE-732', 'excessive-permissions-grant': 'CWE-749', 'use-of-rsa-algorithm-without-oaep': 'CWE-780', 'use-of-hard-coded-credentials': 'CWE-798', 'reliance-on-untrusted-inputs-in-a-security-decision': 'CWE-807', 'inclusion-of-functionality-from-untrusted-control-sphere': 'CWE-829', 'dead-and-deactivated-code': 'CWE-833', 'loop-with-unreachable-exit-condition': 'CWE-835', 'improper-neutralization-of-special-elements-used-in-an-os-command': 'CWE-917', 'server-side-request-forgery': 'CWE-918', 'improper-verification-of-intent-by-broadcast-receiver': 'CWE-925', 'improper-export-of-android-application-components': 'CWE-926', 'use-of-impersonation-without-disclosure': 'CWE-927', 'improper-verification-of-origin-with-file-download': 'CWE-940', 'use-of-unmaintained-third-party-components': 'CWE-1104', 'audit-log-file-deletion': 'CWE-1204'} defects=0}
import jakarta.servlet.http.HttpServletRequest
import org.apache.directory.api.ldap.model.message.SearchRequest
import org.apache.directory.api.ldap.model.message.SearchRequestImpl
import org.apache.directory.api.ldap.model.name.Dn
import org.apache.directory.ldap.client.api.LdapConnection
import javax.naming.ldap.Rdn

class LdapInjectionApache {
    fun ldapQueryGood(request: HttpServletRequest, c: LdapConnection) {
        val organizationName: String = request.getParameter("organization_name")
        val username: String = request.getParameter("username")

        // GOOD: Organization name is encoded before being used in DN
        val safeDn = Dn("OU", "Organization")

        // GOOD: User input is encoded before being used in search filter
        val safeFilter: String = equal(username)
        val searchRequest: SearchRequest = SearchRequestImpl()
        searchRequest.setBase(safeDn)
        searchRequest.setFilter(safeFilter)
        c.search(searchRequest)
    }

    private fun equal(username: String): String {
        TODO("Not yet implemented")
    }
}
// {/fact}
