// License: LGPL-3.0 License (c) find-sec-bugs
package strings

import java.net.IDN
import java.net.URI
import java.text.Normalizer

class ImproperUnicode {

  // {fact rule=encoding-error@v1.0 defects=1}
  def dangerToUpperEquals(s: String) = {
    // ruleid: scala_strings_rule-ImproperUnicode
    s.toUpperCase().equals("TEST")
  }
  // {/fact}


  // {fact rule=encoding-error@v1.0 defects=1}
  def dangerToUpperEqualIgnoreCase(s: String) = {
    // ruleid: scala_strings_rule-ImproperUnicode
    s.toUpperCase().equalsIgnoreCase("TEST")
  }
  // {/fact}


  // {fact rule=encoding-error@v1.0 defects=1}
  def dangerToUpperIndexOf(s: String) = {
    // ruleid: scala_strings_rule-ImproperUnicode
    s.toUpperCase().indexOf("T")
  }
  // {/fact}



  // {fact rule=encoding-error@v1.0 defects=1}
  def dangerToLowerEquals(s: String) = {
    // ruleid: scala_strings_rule-ImproperUnicode
    s.toLowerCase().equals("test")
  }
  // {/fact}


  // {fact rule=encoding-error@v1.0 defects=1}
  def dangerToLowerEqualIgnoreCase(s: String) = {
    // ruleid: scala_strings_rule-ImproperUnicode
    s.toLowerCase().equalsIgnoreCase("test")
  }
  // {/fact}


  // {fact rule=encoding-error@v1.0 defects=1}
  def dangerToLowerIndexOf(s: String) = {
    // ruleid: scala_strings_rule-ImproperUnicode
    s.toLowerCase().indexOf("t")
  }
  // {/fact}


  // {fact rule=encoding-error@v1.0 defects=1}
  def dangerURI(uri: URI) = {
    // ruleid: scala_strings_rule-ImproperUnicode
    uri.toASCIIString()
  }
  // {/fact}


  // {fact rule=encoding-error@v1.0 defects=1}
  def dangerIDN(input: String) = {
    // ruleid: scala_strings_rule-ImproperUnicode
    IDN.toASCII(input)
  }
  // {/fact}


  // {fact rule=encoding-error@v1.0 defects=1}
  def dangerNormalize(s: String) = {
    // ruleid: scala_strings_rule-ImproperUnicode
    Normalizer.normalize(s.toUpperCase, Normalizer.Form.NFKC).equals("ADMIN")
  }
  // {/fact}
}
