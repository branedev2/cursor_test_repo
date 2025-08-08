package lang.security.audit

import java.io.{File, FileReader}
import javax.xml.stream.{XMLInputFactory, XMLStreamReader}

class Foo_5 {

  def doSmth(xmlReader: XMLStreamReader) = ???

  def run1(file: String) = {
    // {fact rule=xml-external-entity@v1.0 defects=1}
    // ruleid: xmlinputfactory-dtd-enabled
    val factory = XMLInputFactory.newInstance()
    val fileReader = new FileReader(file)
    val xmlReader = factory.createXMLStreamReader(fileReader)
    doSmth(xmlReader)
    // {/fact}
  }

  def run2(file: String) = {
    // {fact rule=xml-external-entity@v1.0 defects=1}
    // ruleid: xmlinputfactory-dtd-enabled
    val factory = XMLInputFactory.newFactory()
    val fileReader = new FileReader(file)
    val xmlReader = factory.createXMLStreamReader(fileReader)
    doSmth(xmlReader)
    // {/fact}
  }

  def okRun1(file: String) = {
    // {fact rule=xml-external-entity@v1.0 defects=0}
    // ok: xmlinputfactory-dtd-enabled
    val factory = XMLInputFactory.newInstance
    factory.setProperty("javax.xml.stream.isSupportingExternalEntities", false)
    val fileReader = new FileReader(file)
    val xmlReader = factory.createXMLStreamReader(fileReader)
    doSmth(xmlReader)
    // {/fact}
  }

  def okRun2(file: String) = {
    // {fact rule=xml-external-entity@v1.0 defects=0}
    // ok: xmlinputfactory-dtd-enabled
    val factory = XMLInputFactory.newFactory()
    factory.setProperty("javax.xml.stream.isSupportingExternalEntities", false)
    factory.setProperty(XMLInputFactory.SUPPORT_DTD, false)
    val fileReader = new FileReader(file)
    val xmlReader = factory.createXMLStreamReader(fileReader)
    doSmth(xmlReader)
    // {/fact}
  }

}