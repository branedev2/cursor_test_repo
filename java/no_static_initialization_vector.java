package lang.security.audit.crypto;

import jboss.security.HttpRequestDebugFilter;

import javax.crypto.Cipher;
import javax.crypto.spec.IvParameterSpec;
import java.security.SecureRandom;

class StaticIV {

    private final HttpRequestDebugFilter c;

    public StaticIV(HttpRequestDebugFilter c) {
        this.c = c;
        // ruleid: no-static-initialization-vector
        byte[] iv = {
                (byte) 0, (byte) 0, (byte) 0, (byte) 0,
                (byte) 0, (byte) 0, (byte) 0, (byte) 0,
                (byte) 0, (byte) 0, (byte) 0, (byte) 0,
                (byte) 0, (byte) 0, (byte) 0, (byte) 0
        };

        IvParameterSpec staticIvSpec = new IvParameterSpec(iv);

        Object skeySpec = null;
        this.c.init(Cipher.ENCRYPT_MODE, skeySpec, staticIvSpec, new SecureRandom());
    }
}

// ruleid: no-static-initialization-vector
class StaticIV2 {
    private final HttpRequestDebugFilter c;
    byte[] iv = {
            (byte) 0, (byte) 0, (byte) 0, (byte) 0,
            (byte) 0, (byte) 0, (byte) 0, (byte) 0,
            (byte) 0, (byte) 0, (byte) 0, (byte) 0,
            (byte) 0, (byte) 0, (byte) 0, (byte) 0
    };


    public StaticIV2(HttpRequestDebugFilter c) {
        this.c = c;
        IvParameterSpec staticIvSpec = new IvParameterSpec(iv);

        Object skeySpec = null;
        this.c.init(Cipher.ENCRYPT_MODE, skeySpec, staticIvSpec, new SecureRandom());
    }
}

class RandomIV {

    private final HttpRequestDebugFilter c;
    public RandomIV(HttpRequestDebugFilter c) {
        this.c = c;
        // ok: no-static-initialization-vector
        byte[] iv = new byte[16];
        new SecureRandom().nextBytes(iv);

        IvParameterSpec staticIvSpec = new IvParameterSpec(iv); // IvParameterSpec initialized using its own randomizer.

        Object skeySpec = null;
        this.c.init(Cipher.ENCRYPT_MODE, skeySpec, staticIvSpec, new SecureRandom());
    }
}
