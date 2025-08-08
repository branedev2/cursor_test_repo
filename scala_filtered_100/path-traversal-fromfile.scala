package lang.security.audit

import org.apache.commons.io.FilenameUtils
import play.api.mvc.Results.{NotFound, Ok}
import play.api.mvc.{Action, BaseController, ControllerComponents}

import java.nio.file.{Files, Paths}
import javax.inject.Inject
import scala.io.Source


class Test_1 @Inject()(val controllerComponents: ControllerComponents) extends BaseController {{
  def bad1(value:String) =  {
    if (!Files.exists(Paths.get("public/lists/" + value))) {
      NotFound("File not found")
    } else {
      // {fact rule=path-traversal@v1.0 defects=1}
      // ruleid: path-traversal-fromfile
      val result = Source.fromFile("public/lists/" + value).getLines().mkString // Weak point
      Ok(result)
    }
  }

  def bad2(value:String) = Action {
    if (!Files.exists(Paths.get("public/lists/" + value))) {
      NotFound("File not found")
    } else {
      val filename1 = "public/lists"
      val filename = filename1 + value
      // {fact rule=path-traversal@v1.0 defects=1}
      // ruleid: path-traversal-fromfile
      val result = Source.fromFile(filename).getLines().mkString // Weak point
      Ok(result)
      // {/fact}
    }
  }

  def bad3(value:String) = Action {
    if (!Files.exists(Paths.get("public/lists/" + value))) {
      NotFound("File not found")
    } else {
      // {fact rule=path-traversal@v1.0 defects=1}
      // ruleid: path-traversal-fromfile
      val result = Source.fromFile("%s/%s".format("public/lists", value)).getLines().mkString // Weak point
      Ok(result)
      // {/fact}
    }
  }

  def bad4(value:String) = Action {
    if (!Files.exists(Paths.get("public/lists/" + value))) {
      NotFound("File not found")
    } else {
      var filename1 = "public/lists/"
      val filename = filename1.concat(value)
      // {fact rule=path-traversal@v1.0 defects=1}
      // ruleid: path-traversal-fromfile
      val result = Source.fromFile(filename).getLines().mkString // Weak point
      Ok(result)
      // {/fact}
    }
  }

  def ok(value:String) = Action {
    val filename = "public/lists/" + FilenameUtils.getName(value)

    if (!Files.exists(Paths.get(filename))) {
      NotFound("File not found")
    } else {
      // {fact rule=path-traversal@v1.0 defects=0}
      // ok: path-traversal-fromfile
      val result = Source.fromFile(filename).getLines().mkString // Fix
      Ok(result)
      // {/fact}
    }
  }
}}
