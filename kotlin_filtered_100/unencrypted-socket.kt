package testcode.crypto

import java.net.InetAddress
import java.net.ServerSocket
import java.net.Socket
import javax.net.ssl.SSLServerSocketFactory
import javax.net.ssl.SSLSocketFactory

class UnencryptedSocket {

    fun sslSocket(): Unit {
        // ok: unencrypted-socket
        val soc: Socket = SSLSocketFactory.getDefault().createSocket("www.google.com", 443)
        doGetRequest(soc)
    }

    fun plainSocket(): Unit {
        // {fact rule=cleartext-transmission-of-sensitive-information@v1.0 defects=1}
        // ruleid: unencrypted-socket
        val soc: Socket = Socket("www.google.com", 80)

        doGetRequest(soc)
        // {/fact}
    }

    private fun byteArrayOfInts(vararg ints: Int) = ints.map { it.toByte() }.toByteArray()

    fun otherConstructors(): Unit {

        // {fact rule=cleartext-transmission-of-sensitive-information@v1.0 defects=1}
        // ruleid: unencrypted-socket
        val soc1: Socket = Socket("www.google.com", 80, true)
        doGetRequest(soc1)
        // {/fact}

        // {fact rule=cleartext-transmission-of-sensitive-information@v1.0 defects=1}
        val address: ByteArray = byteArrayOfInts(127, 0, 0, 1)
        // ruleid: unencrypted-socket
        val soc2: Socket = Socket("www.google.com", 80, InetAddress.getByAddress(address), 13337)
        doGetRequest(soc2)
        // {/fact}

        // {fact rule=cleartext-transmission-of-sensitive-information@v1.0 defects=1}
        val remoteAddress: ByteArray = byteArrayOfInts(74, 125, 226, 193)
        // ruleid: unencrypted-socket
        val soc3: Socket = Socket(InetAddress.getByAddress(remoteAddress), 80)
        doGetRequest(soc2)
        // {/fact}
    }

    private fun doGetRequest(soc: Socket): Unit {
        println("")
        soc.close()
    }
}

class UnencryptedServerSocket {
    // {fact rule=cleartext-transmission-of-sensitive-information@v1.0 defects=0}
    fun sslServerSocket(): Unit {
        // ok: unencrypted-socket
        val ssoc: ServerSocket = SSLServerSocketFactory.getDefault().createServerSocket(1234)
        ssoc.close()
    }
    // {/fact}

    fun plainServerSocket(): Unit {

        // {fact rule=cleartext-transmission-of-sensitive-information@v1.0 defects=1}
        // ruleid: unencrypted-socket
        val ssoc: ServerSocket = ServerSocket(1234)
        ssoc.close()
        // {/fact}
    }

    private fun byteArrayOfInts(vararg ints: Int) = ints.map { it.toByte() }.toByteArray()

    fun otherConstructors(): Unit {
        // {fact rule=cleartext-transmission-of-sensitive-information@v1.0 defects=1}
        // ruleid: unencrypted-socket
        val ssoc1: ServerSocket = ServerSocket()
        ssoc1.close()
        // {/fact}

        // {fact rule=cleartext-transmission-of-sensitive-information@v1.0 defects=1}
        // ruleid: unencrypted-socket
        val ssoc2: ServerSocket = ServerSocket(1234, 10)
        ssoc2.close()
        // {/fact}

        val address: ByteArray = byteArrayOfInts(127, 0, 0, 1)
        // {fact rule=cleartext-transmission-of-sensitive-information@v1.0 defects=1}
        // ruleid: unencrypted-socket
        val ssoc3: ServerSocket = ServerSocket(1234, 10, InetAddress.getByAddress(address))
        ssoc3.close()
        // {/fact}
    }

}