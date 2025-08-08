// License: LGPL-3.0 License (c) find-sec-bugs
package strings

import java.util.Formatter
import java.util.Locale
import java.io.IOException
import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse
import javax.servlet.http.HttpServlet


class FormatStringManipulation extends HttpServlet {
  @throws[IOException]
  override def doGet(request: HttpServletRequest, response: HttpServletResponse): Unit = { // create a new formatter
    val buffer = new StringBuffer()
    val formatter = new Formatter(buffer, Locale.US)
    val input = request.getParameter("suffix")
    // {fact rule=untrusted-format-strings@v1.0 defects=1}
    // ruleid: scala_strings_rule-FormatStringManipulation
    val format = "The customer: %s %s" + input
    //test cases
    // {/fact}

    // {fact rule=untrusted-format-strings@v1.0 defects=1}
    // ruleid: scala_strings_rule-FormatStringManipulation
    formatter.format(format, "John", "Smith", "Jr") //BAD
    // {/fact}



    // {fact rule=untrusted-format-strings@v1.0 defects=1}
    // ruleid: scala_strings_rule-FormatStringManipulation
    formatter.format(Locale.US, format, "John", "Smith")
    // {/fact}
    //false positive test


    // {fact rule=untrusted-format-strings@v1.0 defects=0}
    formatter.format("The customer: %s %s", "John", request.getParameter("testParam")) //OK
    // {/fact}


    // {fact rule=untrusted-format-strings@v1.0 defects=1}
    // ruleid: scala_strings_rule-FormatStringManipulation
    System.out.printf(format, "John", "Smith")
    // {/fact}

    // {fact rule=untrusted-format-strings@v1.0 defects=1}
    // ruleid: scala_strings_rule-FormatStringManipulation
    System.out.printf(Locale.US, format, "John", "Smith")
    // {/fact}


    // {fact rule=untrusted-format-strings@v1.0 defects=1}
    // ruleid: scala_strings_rule-FormatStringManipulation
    System.out.format(format, "John", "Smith")
    // {/fact}


    // {fact rule=untrusted-format-strings@v1.0 defects=1}
    // ruleid: scala_strings_rule-FormatStringManipulation
    System.out.format(Locale.US, format, "John", "Smith")
    // {/fact}


    // {fact rule=untrusted-format-strings@v1.0 defects=1}
    // ruleid: scala_strings_rule-FormatStringManipulation
    val format2 = "The customer: %s %s" + request.getParameter("suffix")
    // {/fact}



    // {fact rule=untrusted-format-strings@v1.0 defects=1}
    // ruleid: scala_strings_rule-FormatStringManipulation
    String.format(format2, "John", "Smith")
    // {/fact}


    // {fact rule=untrusted-format-strings@v1.0 defects=1}
    // ruleid: scala_strings_rule-FormatStringManipulation
    String.format(Locale.US, format2, "John", "Smith")
    // {/fact}
  }
}
