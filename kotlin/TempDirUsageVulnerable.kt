//// {fact rule={'cleartext-transmission-of-sensitive-information': 'CWE-319', 'insecure-cryptographic-storage': 'CWE-326', 'use-of-a-broken-or-risky-cryptographic-algorithm': 'CWE-327', 'use-of-insufficiently-random-values': 'CWE-330', 'incorrect-usage-of-secrets': 'CWE-335', 'use-of-cryptographically-weak-prng': 'CWE-338', 'improper-verification-of-cryptographic-signature': 'CWE-347', 'cross-site-request-forgery': 'CWE-352', 'time-of-check-time-of-use-race-condition': 'CWE-367', 'race-condition-during-access-to-resources': 'CWE-421', 'unintended-proxy-or-intermediary': 'CWE-441', 'use-of-externally-controlled-input-to-select-classes-or-code': 'CWE-470', 'active-debug-code': 'CWE-489', 'trust-boundary-violation': 'CWE-501', 'deserialization-of-untrusted-data': 'CWE-502', 'insufficiently-protected-credentials': 'CWE-522', 'use-of-cache-controlling-script': 'CWE-524', 'inclusion-of-sensitive-information-in-log-files': 'CWE-532', 'url-redirection-to-untrusted-site': 'CWE-601', 'improper-restriction-of-xml-external-entity-reference': 'CWE-611', 'sensitive-cookie-in-https-session-without-secure-attribute': 'CWE-614', 'improper-neutralization-of-data-within-xpath-queries': 'CWE-643', 'use-of-potentially-dangerous-function': 'CWE-676', 'incorrect-conversion-between-numeric-types': 'CWE-681', 'owasp-top-ten-2013-a7-missing-function-level-access-control': 'CWE-730', 'incorrect-permission-assignment-for-critical-resource': 'CWE-732', 'excessive-permissions-grant': 'CWE-749', 'use-of-rsa-algorithm-without-oaep': 'CWE-780', 'use-of-hard-coded-credentials': 'CWE-798', 'reliance-on-untrusted-inputs-in-a-security-decision': 'CWE-807', 'inclusion-of-functionality-from-untrusted-control-sphere': 'CWE-829', 'dead-and-deactivated-code': 'CWE-833', 'loop-with-unreachable-exit-condition': 'CWE-835', 'improper-neutralization-of-special-elements-used-in-an-os-command': 'CWE-917', 'server-side-request-forgery': 'CWE-918', 'improper-verification-of-intent-by-broadcast-receiver': 'CWE-925', 'improper-export-of-android-application-components': 'CWE-926', 'use-of-impersonation-without-disclosure': 'CWE-927', 'improper-verification-of-origin-with-file-download': 'CWE-940', 'use-of-unmaintained-third-party-components': 'CWE-1104', 'audit-log-file-deletion': 'CWE-1204'} defects=1}
//import java.io.File
//import java.nio.file.Files
//
//class TempDirUsageVulnerable {
//    fun exampleVulnerable() {
//        val temp1 = File.createTempFile("random", ".txt") // BAD: File has permissions `-rw-r--r--`
//        val temp2 = File.createTempFile("random", "file", null) // BAD: File has permissions `-rw-r--r--`
//        val systemTempDir = File(System.getProperty("java.io.tmpdir"))
//        val temp3 = File.createTempFile("random", "file", systemTempDir) // BAD: File has permissions `-rw-r--r--`
//        val tempDir: File = com.google.common.io.Files.createTempDir() // BAD: CVE-2020-8908: Directory has permissions `drwxr-xr-x`
//        File(System.getProperty("java.io.tmpdir"), "/child").mkdir() // BAD: Directory has permissions `-rw-r--r--`
//        val tempDirChildFile = File(System.getProperty("java.io.tmpdir"), "/child-create-file.txt")
//        Files.createFile(tempDirChildFile.toPath()) // BAD: File has permissions `-rw-r--r--`
//        val tempDirChildDir = File(System.getProperty("java.io.tmpdir"), "/child-dir")
//        tempDirChildDir.mkdir() // BAD: Directory has permissions `drwxr-xr-x`
//        Files.createDirectory(tempDirChildDir.toPath()) // BAD: Directory has permissions `drwxr-xr-x`
//    }
//}
//// {/fact}
