// License: LGPL-3.0 License (c) find-sec-bugs
package xml

import org.apache.xmlrpc.client.XmlRpcClientConfigImpl
import org.apache.xmlrpc.server.XmlRpcServerConfigImpl

object ApacheXmlRpc {
  def createClientAndServerConfigs(): Unit = {
    val serverConfig = new XmlRpcServerConfigImpl
    val clientConfig = new XmlRpcClientConfigImpl
    val trueValue = true
    // {fact rule=object-input-stream-insecure-deserialization@v1.0 defects=1}
    // ruleid: scala_xml_rule-ApacheXmlRpc
    clientConfig.setEnabledForExtensions(true) // BAD
    // {/fact}


    // {fact rule=object-input-stream-insecure-deserialization@v1.0 defects=1}
    // ruleid: scala_xml_rule-ApacheXmlRpc
    clientConfig.setEnabledForExtensions(trueValue)
    // {/fact}


    // {fact rule=object-input-stream-insecure-deserialization@v1.0 defects=1}
    // ruleid: scala_xml_rule-ApacheXmlRpc
    serverConfig.setEnabledForExtensions(true)
    // {/fact}


    // {fact rule=object-input-stream-insecure-deserialization@v1.0 defects=1}
    // ruleid: scala_xml_rule-ApacheXmlRpc
    serverConfig.setEnabledForExtensions(trueValue)
    // {/fact}
    val falseValue = false


    // {fact rule=object-input-stream-insecure-deserialization@v1.0 defects=0}
    clientConfig.setEnabledForExtensions(false) // GOOD
    // {/fact}
    clientConfig.setEnabledForExtensions(falseValue)
    serverConfig.setEnabledForExtensions(false)
    serverConfig.setEnabledForExtensions(falseValue)
    val randomFlagForServer = 0 < 0.5
    serverConfig.setEnabledForExtensions(randomFlagForServer)
    val randomFlagForClient = Math.random < 0.5
    clientConfig.setEnabledForExtensions(randomFlagForClient)
  }
}
