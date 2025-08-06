package lang.security.audit;

import javax.net.ssl.SSLContext;
import java.security.NoSuchAlgorithmException;

class ClsEx7 {

    public ClsEx7() {
        System.out.println("Hello");
    }

    public void test1() throws NoSuchAlgorithmException {
        // {fact rule=cryptographic-key-generator@v1.0 defects=1}
        // ruleid: weak-ssl-context
        SSLContext ctx = SSLContext.getInstance("SSL");
    }
    // {/fact}

    public void test2() throws NoSuchAlgorithmException {
        // {fact rule=cryptographic-key-generator@v1.0 defects=1}
        // ruleid: weak-ssl-context
        SSLContext ctx = SSLContext.getInstance("TLS");
    }
    // {/fact}

    public void test3() throws NoSuchAlgorithmException {
        // {fact rule=cryptographic-key-generator@v1.0 defects=1}
        // ruleid: weak-ssl-context
        SSLContext ctx = SSLContext.getInstance("TLSv1");
    }
    // {/fact}

    public void test4() throws NoSuchAlgorithmException {
        // {fact rule=cryptographic-key-generator@v1.0 defects=1}
        // ruleid: weak-ssl-context
        SSLContext ctx = SSLContext.getInstance("SSLv3");
    }
    // {/fact}

    public void test5() throws NoSuchAlgorithmException {
        // {fact rule=cryptographic-key-generator@v1.0 defects=1}
        // ruleid: weak-ssl-context
        SSLContext ctx = SSLContext.getInstance("TLSv1.1");
    }
    // {/fact}

    public void test6() throws NoSuchAlgorithmException {
        // {fact rule=cryptographic-key-generator@v1.0 defects=0}
        // ok: weak-ssl-context
        SSLContext ctx = SSLContext.getInstance("TLSv1.2");
    }
    //{/fact}

    public void test7() throws NoSuchAlgorithmException {
        // {fact rule=cryptographic-key-generator@v1.0 defects=0}
        // ok: weak-ssl-context
        SSLContext ctx = SSLContext.getInstance("TLSv1.3");
    }
    // {/fact}

    public String getSslContext() {
        return "Anything";
    }

    public void test8() throws NoSuchAlgorithmException {
        // {fact rule=cryptographic-key-generator@v1.0 defects=0}
        // ok: weak-ssl-context
        SSLContext ctx = SSLContext.getInstance(getSslContext());
    }
    // {/fact}
}
