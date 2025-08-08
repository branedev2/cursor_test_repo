package endpoint

// License: LGPL-3.0 License (c) find-sec-bugs
import javax.net.ssl.SSLServerSocketFactory
import javax.net.ssl.SSLSocketFactory
import java.io._
import java.net.InetAddress
import java.net.ServerSocket
import java.net.Socket

object UnencryptedSocket {
  @throws[IOException]
  // {fact rule=insecure-connection@v1.0 defects=0}
  private[this] def sslServerSocket(): Unit = {
    // ok: scala_endpoint_rule-UnencryptedSocket
    val ssoc = SSLServerSocketFactory.getDefault.createServerSocket(1234)
    ssoc.close
    // {/fact}
  }

  @throws[IOException]
  private[this] def plainServerSocket(): Unit = {
    val ssoc = new ServerSocket(1234)
    ssoc.close
  }

  @throws[IOException]
  private[this] def otherConstructors(): Unit = {
    val ssoc1 = new ServerSocket
    ssoc1.close
    val ssoc2 = new ServerSocket(1234, 10)
    ssoc2.close
    val address = Array(127.toByte, 0.toByte, 0.toByte, 1.toByte)
    val ssoc3 = new ServerSocket(1234, 10, InetAddress.getByAddress(address))
    ssoc3.close
  }

  @throws[IOException]
  // {fact rule=insecure-connection@v1.0 defects=0}
  private[this] def sslSocket(): Unit = {
    // ok: scala_endpoint_rule-UnencryptedSocket
    val soc = SSLSocketFactory.getDefault.createSocket("www.google.com", 443)
    doGetRequest(soc)
    // {/fact}
  }

  @throws[IOException]
  private[this] def plainSocket(): Unit = {
    // {fact rule=insecure-connection@v1.0 defects=1}
    // ruleid: scala_endpoint_rule-UnencryptedSocket
    val soc = new Socket("www.google.com", 80)
    doGetRequest(soc)
    // {/fact}
  }

  @throws[IOException]
  private[this] def other(): Unit = {
    // {fact rule=insecure-connection@v1.0 defects=1}
    // ruleid: scala_endpoint_rule-UnencryptedSocket
    val soc1 = new Socket("www.google.com", 80, true)
    // {/fact}
    doGetRequest(soc1)
    val address = Array(127.toByte, 0.toByte, 0.toByte, 1.toByte)
    // {fact rule=insecure-connection@v1.0 defects=1}
    val soc2 =
      // ruleid: scala_endpoint_rule-UnencryptedSocket
      new Socket("www.google.com", 80, InetAddress.getByAddress(address), 13337)
    // {/fact}
    doGetRequest(soc2)
    val remoteAddress = Array(74.toByte, 125.toByte, 226.toByte, 193.toByte)
    // {fact rule=insecure-connection@v1.0 defects=1}
    // ruleid: scala_endpoint_rule-UnencryptedSocket
    val soc3 = new Socket(InetAddress.getByAddress(remoteAddress), 80)
    // {/fact}
    doGetRequest(soc2)
  }

  @throws[IOException]
  private[this] def doGetRequest(soc: Socket): Unit = {
    val w = new PrintWriter(soc.getOutputStream)
    w.write("GET / HTTP/1.0\nHost: www.google.com\n\n")
    w.flush
    val r = new BufferedReader(new InputStreamReader(soc.getInputStream))
    var line = r.readLine
    while (line != null) {
      println(line)
      line = r.readLine
    }
    soc.close
  }
}
