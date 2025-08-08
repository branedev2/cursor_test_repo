// License: LGPL-3.0 License (c) find-sec-bugs
package script

import org.springframework.context.expression.MapAccessor
import org.springframework.expression.Expression
import org.springframework.expression.spel.standard.SpelExpressionParser
import org.springframework.expression.spel.support.StandardEvaluationContext
import org.springframework.util.PropertyPlaceholderHelper
import org.springframework.util.PropertyPlaceholderHelper.PlaceholderResolver
import org.springframework.web.servlet.View
import org.springframework.web.servlet.support.ServletUriComponentsBuilder

import java.util
import jakarta.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse
import java.util._


abstract class SpelView(val template: String) extends View {
  var resolver: PlaceholderResolver
  final private val parser = new SpelExpressionParser()
  final private val context = new StandardEvaluationContext()

  this.context.addPropertyAccessor(new MapAccessor())
  // {fact rule=cross-site-scripting@v1.0 defects=1}
  this.resolver = (name: String) => {
      // ruleid: scala_script_rule-SpelView
      val expression = parser.parseExpression(name) //BOOM!
      val value = expression.getValue(context)
      null
    // {/fact}
  }
  override def getContentType = "text/html"

  @throws[Exception]
  def render(model: java.util.Map[String, _], request: jakarta.servlet.http.HttpServletRequest, response: HttpServletResponse): Unit = {
    val path = ServletUriComponentsBuilder.fromContextPath(request).build.getPath
    context.setRootObject(model)
    val helper = new PropertyPlaceholderHelper("${", "}")
    val result = helper.replacePlaceholders(template, resolver)
    response.setContentType(getContentType)
    response.getWriter.append(result)
  }
}
