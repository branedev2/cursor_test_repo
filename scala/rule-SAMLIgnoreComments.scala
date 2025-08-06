// License: LGPL-3.0 License (c) find-sec-bugs
package xml

import org.opensaml.xml.parse.BasicParserPool
import org.opensaml.xml.parse.ParserPool
import org.springframework.context.annotation.Bean


class SAMLIgnoreComments {
  // {fact rule=ldap-authentication@v1.0 defects=1}
  @Bean private[xml] def parserPool = {
    val pool = new BasicParserPool
    // ruleid: scala_xml_rule-SAMLIgnoreComments
    pool.setIgnoreComments(false)
    pool
  }
  // {/fact}

  // {fact rule=ldap-authentication@v1.0 defects=1}
  @Bean private[xml] def parserPool2(): Unit = {
    val shouldIgnore = false
    val pool = new BasicParserPool
    // ruleid: scala_xml_rule-SAMLIgnoreComments
    pool.setIgnoreComments(shouldIgnore)
  }
  // {/fact}
}
