// License: LGPL-3.0 License (c) find-sec-bugs
package unsafe

import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse
import java.io.{File, FileInputStream, OutputStream}
import java.sql.Connection
import java.sql.DriverManager
import java.sql.SQLException
import java.lang.System.out


class InformationExposure {
  def vulnerableErrorMessage1(uri: Nothing): Unit = {
    try {
      val conn = DriverManager.getConnection(uri)
    }
    catch
    {
      // {fact rule=stack-trace-exposure@v1.0 defects=1}
      case sqlException: Exception =>
        // ruleid: scala_unsafe_rule-InformationExposure
        sqlException.printStackTrace(out) // Normal Priority

      // {/fact}

    }
  }

  def vulnerableErrorMessage2(req: HttpServletRequest, resp: HttpServletResponse): Unit = {
    try {
      val out = resp.getOutputStream
    } catch
    {
      case e: Exception =>
        // {fact rule=stack-trace-exposure@v1.0 defects=1}
        // ruleid: scala_unsafe_rule-InformationExposure
        e.printStackTrace(out)
      // {/fact}
    }
  }

  def vulnerableErrorMessage3(): Unit = {
    var fis = null
    try {
      val fileName = "fileName"
      fis = null
    } catch {
      case e: Exception =>
        e.printStackTrace // Low Priority

    }
  }
}
