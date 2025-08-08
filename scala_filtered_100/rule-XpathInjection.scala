// License: LGPL-3.0 License (c) find-sec-bugs
package xpathi

import org.w3c.dom.Document
import org.w3c.dom.NodeList
import javax.xml.xpath.XPath
import javax.xml.xpath.XPathFactory

object XpathInjection {
  @throws[Exception]
  def main(args: Array[String]): Unit = {
    val doc: Document = null
    val input = args(1)
    val query = "//groups/group[@id='" + input + "']/writeAccess/text()"
    System.out.println(">> XPath.compile()")
    // {fact rule=xml-external-entity@v1.0 defects=1}
    // ruleid: scala_xpathi_rule-XpathInjection
    XPathFactory.newInstance.newXPath.evaluate(query, doc)
    // {/fact}

    System.out.println(">> XPath.evaluate()")

    // {fact rule=xml-external-entity@v1.0 defects=1}
    // ruleid: scala_xpathi_rule-XpathInjection
    System.out.println("result=" +  XPathFactory.newInstance.newXPath.evaluate(query, doc))
    // {/fact}

    // {fact rule=xml-external-entity@v1.0 defects=1}
    // ruleid: scala_xpathi_rule-XpathInjection
    XPathFactory.newInstance.newXPath.compile(query)
    // {/fact}

    //Safe (The next sample should not be mark)
    System.out.println(">> Safe")
    // {fact rule=xml-external-entity@v1.0 defects=0}
    XPathFactory.newInstance.newXPath.compile("//groups/group[@id='admin']/writeAccess/text()")
    // {/fact}
  }

}
