package play.security

import play.api.mvc._
import javax.inject._
import java.sql.{Connection, ResultSet, DriverManager}

@Singleton
class HomeController_3 @Inject()(val controllerComponents: ControllerComponents) extends BaseController{

  def oneAction() = Action { implicit request: Request[AnyContent] =>
    val bodyVals = request.body.asFormUrlEncoded
    val name = bodyVals.get("username").head
    // {fact rule=sql-injection@v1.0 defects=1}
    // ruleid: tainted-sql-from-http-request
    val sql = "SELECT * FROM table WHERE name = " + name + ";"
    val conn = DriverManager.getConnection("jdbc:mysql://localhost:8080", "guest", "password")
    val stmt = conn.createStatement()
    val rs = stmt.executeQuery(sql)
    val result = s"ID: ${rs.getInt("id")}, Name: ${rs.getString("name")}, Age: ${rs.getInt("age")}"
    Ok(result)
    // {/fact}
  }

  def twoAction() = Action { implicit request: Request[AnyContent] =>
    val bodyVals = request.body.asFormUrlEncoded
    val name = bodyVals.get("username").head
    // {fact rule=sql-injection@v1.0 defects=1}
    // ruleid: tainted-sql-from-http-request
    val sql = "SELECT * FROM table WHERE name = " + name + ";"
    val conn = DriverManager.getConnection("jdbc:mysql://localhost:8080", "guest", "password")
    val stmt = conn.createStatement()
    val rs = stmt.executeQuery(sql)
    val result = s"ID: ${rs.getInt("id")}, Name: ${rs.getString("name")}, Age: ${rs.getInt("age")}"
    Ok(result)
    // {/fact}
  }

  def threeAction() = Action { implicit request: Request[AnyContent] =>
    val bodyVals = request.body.asFormUrlEncoded
    val name = bodyVals.get("username").head
    val conn = DriverManager.getConnection("jdbc:mysql://localhost:8080", "guest", "password")
    val stmt = conn.createStatement()
    // {fact rule=sql-injection@v1.0 defects=1}
    // ruleid: tainted-sql-from-http-request
    val rs = stmt.executeQuery(s"SELECT * FROM table WHERE name = $name;")
    val result = s"ID: ${rs.getInt("id")}, Name: ${rs.getString("name")}, Age: ${rs.getInt("age")}"
    Ok(result)
    // {/fact}
  }

  def okAction1() = Action { implicit request: Request[AnyContent] =>
    val name = "hardcoded_value"
    val conn = DriverManager.getConnection("jdbc:mysql://localhost:8080", "guest", "password")
    val stmt = conn.createStatement()
    // {fact rule=sql-injection@v1.0 defects=0}
    // ok: tainted-sql-from-http-request
    val rs = stmt.executeQuery(s"SELECT * FROM table WHERE name = $name;")
    val result = s"ID: ${rs.getInt("id")}, Name: ${rs.getString("name")}, Age: ${rs.getInt("age")}"
    Ok(result)
    // {/fact}
  }

  def okAction2(name: String) = Action { implicit request: Request[AnyContent] =>
    val name = "value"
    // {fact rule=sql-injection@v1.0 defects=0}
    // ok: tainted-sql-from-http-request
    val sql = "SELECT * FROM table WHERE name = " + name + ";"
    val conn = DriverManager.getConnection("jdbc:mysql://localhost:8080", "guest", "password")
    val stmt = conn.createStatement()
    val rs = stmt.executeQuery(sql)
    val result = s"ID: ${rs.getInt("id")}, Name: ${rs.getString("name")}, Age: ${rs.getInt("age")}"
    Ok(result)
    // {/fact}
  }

}