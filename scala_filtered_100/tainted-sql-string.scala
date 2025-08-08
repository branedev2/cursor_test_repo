package lang.security.audit

import java.sql.{Connection, DriverManager, ResultSet}
import org.slf4j.LoggerFactory
import sun.font.FontUtilities

object Smth_4 {

  def call1(name: String) = {
    // {fact rule=sql-injection@v1.0 defects=1}
    // ruleid: tainted-sql-string
    val sql = "SELECT * FROM table WHERE name = " + name + ";"
    val conn = DriverManager.getConnection("jdbc:mysql://localhost:8080", "guest", "password")
    val stmt = conn.createStatement()
    val rs = stmt.execute(sql)
    rs
    // {/fact}
  }

  def call2(name: String) = {
    val conn = DriverManager.getConnection("jdbc:mysql://localhost:8080", "guest", "password")
    val stmt = conn.createStatement()
    // {fact rule=sql-injection@v1.0 defects=1}
    // ruleid: tainted-sql-string
    val rs = stmt.execute(s"SELECT * FROM table WHERE name = $name;")
    rs
    // {/fact}
  }

  def call3(name: String) = {
    // {fact rule=sql-injection@v1.0 defects=1}
    // ruleid: tainted-sql-string
    val sql = f"SELECT * FROM table WHERE name = $name%s;"
    val conn = DriverManager.getConnection("jdbc:mysql://localhost:8080", "guest", "password")
    val stmt = conn.createStatement()
    val rs = stmt.execute(sql)
    rs
    // {/fact}
  }

  def call4(name: String) = {
    // {fact rule=sql-injection@v1.0 defects=1}
    // ruleid: tainted-sql-string
    val sql = s"SELECT * FROM table WHERE name = ${name};"
    val conn = DriverManager.getConnection("jdbc:mysql://localhost:8080", "guest", "password")
    val stmt = conn.createStatement()
    val rs = stmt.execute(sql)
    rs
    // {/fact}
  }

  def call5(name: String) = {
    // {fact rule=sql-injection@v1.0 defects=1}
    // ruleid: tainted-sql-string
    val sql = s"SELECT * FROM table WHERE name = ${name + "smth"};"
    val conn = DriverManager.getConnection("jdbc:mysql://localhost:8080", "guest", "password")
    val stmt = conn.createStatement()
    val rs = stmt.execute(sql)
    rs
    // {/fact}
  }

  def getFoobarFromEnv() = ???

  def okCall1(name: String) = {
    val foobar = getFoobarFromEnv()
    // {fact rule=sql-injection@v1.0 defects=0}
    // ok: tainted-sql-string
    val sql = "SELECT * FROM table WHERE name = " + foobar + ";"
    val conn = DriverManager.getConnection("jdbc:mysql://localhost:8080", "guest", "password")
    val stmt = conn.createStatement()
    val rs = stmt.execute(sql)
    rs
    // {/fact}
  }

  def okCall2(name: String) = {
    val foobar = "Foobar"
    val conn = DriverManager.getConnection("jdbc:mysql://localhost:8080", "guest", "password")
    val stmt = conn.createStatement()
    // {fact rule=sql-injection@v1.0 defects=0}
    // ok: tainted-sql-string
    val rs = stmt.execute(s"SELECT * FROM table WHERE name = $foobar;")
    rs
    // {/fact}
  }

  def doSmth(name: String) = ???

  def okCall3(name: String) = {
    // {fact rule=sql-injection@v1.0 defects=0}
    // ok: tainted-sql-string
    println("SELECT * FROM table WHERE name = " + name + ";")
    doSmth(name)
    // {/fact}
  }

  def loggingCall1(name: String) = {
    val log = LoggerFactory.getLogger(getClass.getSimpleName)
    // {fact rule=sql-injection@v1.0 defects=0}
    // ok: tainted-sql-string
    log.trace("Create user" + name)
    // {/fact}
  }

  def loggingCall2(name: String) = {
    val scribe = LoggerFactory.getLogger(getClass.getSimpleName)
    // {fact rule=sql-injection@v1.0 defects=0}
    // ok: tainted-sql-string
    scribe.warn("Create user" + name)
    // {/fact}
  }

  def loggingCall3(name: String) = {
    try {
      doSmth(name)
    } catch {
      case e: Exception =>
        FontUtilities.logWarning(s"Create user $name")
    }
  }
}
