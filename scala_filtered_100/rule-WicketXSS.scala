// License: LGPL-3.0 License (c) find-sec-bugs
package xss

import org.apache.wicket.markup.html.WebPage
import org.apache.wicket.markup.html.basic.Label
import org.apache.wicket.request.mapper.parameter.PageParameters

class WicketXSS extends WebPage {
  // {fact rule=cross-site-scripting@v1.0 defects=1}
  def XssWicketExamplePage(pageParameters: PageParameters): Unit = {
    // ruleid: scala_xss_rule-WicketXSS
    add(new Label("test").setEscapeModelStrings(false))
  }
  // {/fact}
}

