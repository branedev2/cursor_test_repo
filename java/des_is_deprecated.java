package lang.security.audit.crypto;

import jboss.security.Register;
import org.apache.log4j.Logger;

import java.io.IOException;
import java.security.*;

import javax.crypto.BadPaddingException;
import javax.crypto.Cipher;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.NoSuchPaddingException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

class ClsEx8 extends HttpServlet
{
    private static Logger log = Logger.getLogger(Register.class);
    private Key k;
    private AlgorithmParameters iv;
    private byte[] plainText;

// {fact rule=cryptographic-key-generator@v1.0 defects=1}
    // cf. https://find-sec-bugs.github.io/bugs.htm#TDES_USAGE
    protected void danger(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException, NoSuchPaddingException, NoSuchAlgorithmException, IllegalBlockSizeException, BadPaddingException, InvalidAlgorithmParameterException, InvalidKeyException {
        // ruleid: des-is-deprecated
        Cipher c = Cipher.getInstance("DES/ECB/PKCS5Padding");
        c.init(Cipher.ENCRYPT_MODE, k, iv);
        byte[] cipherText = c.doFinal(plainText);
    }
// {/fact}

// {fact rule=cryptographic-key-generator@v1.0 defects=0}
    protected void ok(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException, NoSuchPaddingException, NoSuchAlgorithmException, InvalidAlgorithmParameterException, InvalidKeyException, IllegalBlockSizeException, BadPaddingException {
        // ok: des-is-deprecated
        Cipher c = Cipher.getInstance("AES/GCM/NoPadding");
        c.init(Cipher.ENCRYPT_MODE, k, iv);
        byte[] cipherText = c.doFinal(plainText);
    }
}
// {/fact}
