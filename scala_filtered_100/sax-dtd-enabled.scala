package lang.security.audit

import java.io.File
import org.dom4j.io.SAXReader
import org.dom4j.Document
import org.xml.sax.{ContentHandler, DocumentHandler, HandlerBase}
import org.xml.sax.helpers.DefaultHandler

import javax.xml.parsers.SAXParserFactory
import scala.util.Try
import scala.util.{Failure, Success}

class Foo_3 {

  def run1(xmlFilePath:String) = {

    val file = new File(xmlFilePath)
    // {fact rule=xml-external-entity@v1.0 defects=1}
    // ruleid: sax-dtd-enabled
    val saxReader = new SAXReader()
    // {/fact}
    val doc = Try(saxReader.read(file))

    val result = doc match  {
      case Success(r) => r
      case Failure(exception) => println("getDocumentExcetion:" + exception.getMessage)
    }

    result.asInstanceOf[Document]
  }

  def run2(xmlFilePath:String) = {

    val file = new File(xmlFilePath)
    // {fact rule=xml-external-entity@v1.0 defects=1}
    // ruleid: sax-dtd-enabled
    val factory = SAXParserFactory.newInstance()
    val saxReader = factory.newSAXParser()
    // {/fact}
    val handler = new DefaultHandler()
    val doc = Try(saxReader.parse(file, handler))

    val result = doc match  {
      case Success(r) => r
      case Failure(exception) => println("getDocumentExcetion:" + exception.getMessage)
    }

    result.asInstanceOf[Document]
  }

  def doSomethingWithFactory(factory: SAXParserFactory) = {

  }

  def run3(xmlFilePath:String) = {

    val file = new File(xmlFilePath)
    // {fact rule=xml-external-entity@v1.0 defects=1}
    // ruleid: sax-dtd-enabled
    val factory = SAXParserFactory.newInstance()
    // {/fact}
    val doc = Try(doSomethingWithFactory(factory))

    val result = doc match {
      case Success(r) => r
      case Failure(exception) => println("getDocumentExcetion:" + exception.getMessage)
    }

    result.asInstanceOf[Document]
  }

  def run4(xmlFilePath:String) = {

    val file = new File(xmlFilePath)
    // {fact rule=xml-external-entity@v1.0 defects=1}
    // ruleid: sax-dtd-enabled
    val saxReader = SAXParserFactory.newInstance().newSAXParser()
    // {/fact}
    val handler = new DefaultHandler()
    val doc = Try(saxReader.parse(file, handler))

    val result = doc match  {
      case Success(r) => r
      case Failure(exception) => println("getDocumentExcetion:" + exception.getMessage)
    }

    result.asInstanceOf[Document]
  }

  def okRun1(xmlFilePath:String) = {

    val file = new File(xmlFilePath)
    // {fact rule=xml-external-entity@v1.0 defects=0}
    // ok: sax-dtd-enabled
    val saxReader = new SAXReader()
    // {/fact}
    saxReader.setFeature("http://apache.org/xml/features/disallow-doctype-decl", true)
    saxReader.setFeature("http://xml.org/sax/features/external-general-entities", false)
    saxReader.setFeature("http://xml.org/sax/features/external-parameter-entities", false)

    val doc = Try(saxReader.read(file))

    val result = doc match  {
      case Success(r) => r
      case Failure(exception) => println("getDocumentExcetion:" + exception.getMessage)
    }

    result.asInstanceOf[Document]
  }

  def okRun2(xmlFilePath:String) = {

    val file = new File(xmlFilePath)
    // {fact rule=xml-external-entity@v1.0 defects=0}
    // ok: sax-dtd-enabled
    val factory = SAXParserFactory.newInstance()
    val saxReader = factory.newSAXParser()
    // {/fact}
    factory.setFeature("http://xml.org/sax/features/external-general-entities", false)
    factory.setFeature("http://apache.org/xml/features/disallow-doctype-decl", true)
    factory.setFeature("http://xml.org/sax/features/external-parameter-entities", false)

    val handler = new DefaultHandler()
    val doc = Try(saxReader.parse(file, handler))

    val result = doc match  {
      case Success(r) => r
      case Failure(exception) => println("getDocumentExcetion:" + exception.getMessage)
    }

    result.asInstanceOf[Document]
  }

}