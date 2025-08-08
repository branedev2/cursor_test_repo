package play.security

import akka.actor.TypedActor.dispatcher
import play.api.mvc._
import play.twirl.api.Html

import javax.inject._
import slick.jdbc.H2Profile.api._

@Singleton
class HomeController @Inject()(val controllerComponents: ControllerComponents) extends BaseController{
  val db = Database.forConfig("h2mem1")

  def oneAction() = Action { implicit request: Request[AnyContent] =>
    val bodyVals = request.body.asFormUrlEncoded
    val smth = bodyVals.get("username").head
    // {fact rule=sql-injection@v1.0 defects=1}
    // ruleid: tainted-slick-sqli
    val action = sql"select ID, NAME, AGE from #$smth".as[(Int,String,Int)]
    db.run(action)
    Ok("ok")
    // {/fact}
  }

  def twoAction(name: String) = Action {
    val people = TableQuery[People]

    // {fact rule=sql-injection@v1.0 defects=1}
    // ruleid: tainted-slick-sqli
    val action = people.filter(_.name === name).result
    db.run(action)
    Ok("ok")

    Ok("ok")
    // {/fact}
  }

  def threeAction(name: String) = Action {
    val people = TableQuery[People]

    // {fact rule=sql-injection@v1.0 defects=1}
    // ruleid: tainted-slick-sqli
    val action = people.filter(_.name === name).result
    db.run(action).map { _ =>
      Ok("ok")
    }

    Ok("ok")
    // {/fact}
  }

  def helloWorldPage() = Action { implicit request: Request[AnyContent] =>
    // {fact rule=sql-injection@v1.0 defects=0}
    // ok: tainted-slick-sqli
    Ok("Okay")
    // {/fact}
  }

  def okAction1() = Action { implicit request: Request[AnyContent] =>
    val smth = "hardcoded_value"
    // {fact rule=sql-injection@v1.0 defects=0}
    // ok: tainted-slick-sqli
    val action = sql"select ID, NAME, AGE from #$smth".as[(Int,String,Int)]
    db.run(action)
    Ok("ok")
    // {/fact}
  }

  def okAction2(name: String) = Action { implicit request: Request[AnyContent] =>
    val people = TableQuery[People]

    // {fact rule=sql-injection@v1.0 defects=0}
    // ok: tainted-slick-sqli
    val action = people.filter(_.name === "FooBar").result
    db.run(action).map { _ =>
      Ok("ok")
    }

    Ok("ok")
    // {/fact}
  }

}

// Define the People table
class People(tag: Tag) extends Table[(Int, String, Int)](tag, "PEOPLE") {
  def id = column[Int]("ID", O.PrimaryKey)
  def name = column[String]("NAME")
  def age = column[Int]("AGE")

  def * = (id, name, age)
}