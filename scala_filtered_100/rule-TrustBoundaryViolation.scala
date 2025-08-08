// License: LGPL-3.0 License (c) find-sec-bugs
package cookie

import javax.servlet.http.HttpServletRequest


class TrustBoundaryViolation { //Taint input
  // {fact rule=resource-leak@v1.0 defects=1}
  def setSessionAttributeNameTainted(req: HttpServletRequest): Unit = {
    val input = req.getParameter("input")
    // ruleid: scala_cookie_rule-TrustBoundaryViolation
    req.getSession.setAttribute(input, "true")
  }
  // {/fact}

  // {fact rule=resource-leak@v1.0 defects=1}
  def setSessionAttributeValueTainted(req: HttpServletRequest): Unit = {
    val input = req.getParameter("input")
    // ruleid: scala_cookie_rule-TrustBoundaryViolation
    req.getSession.setAttribute("user", input)
  }
  // {/fact}

  // {fact rule=resource-leak@v1.0 defects=1}
  //Unknown source
  def setSessionAttributeNameUnknownSource(req: HttpServletRequest, input: String): Unit = {
    // ruleid: scala_cookie_rule-TrustBoundaryViolation
    req.getSession.setAttribute(input, "true")
  }
  // {/fact}

  // {fact rule=resource-leak@v1.0 defects=1}
  def setSessionAttributeValueUnknownSource(req: HttpServletRequest, input: String): Unit = {
    // ruleid: scala_cookie_rule-TrustBoundaryViolation
    req.getSession.setAttribute("user", input) //Reported as low
  }
  // {/fact}

  // {fact rule=resource-leak@v1.0 defects=1}
  //Legacy api
  def setSessionAttributeNameUnknownSourceLegacy(req: HttpServletRequest, input: String): Unit = {
    // ruleid: scala_cookie_rule-TrustBoundaryViolation
    req.getSession.putValue(input, "true")
  }
  // {/fact}

  // {fact rule=resource-leak@v1.0 defects=1}
  def setSessionAttributeValueUnknownSourceLegacy(req: HttpServletRequest, input: String): Unit = {
    // ruleid: scala_cookie_rule-TrustBoundaryViolation
    req.getSession.putValue("user", input)
  }
  // {/fact}

  // {fact rule=resource-leak@v1.0 defects=0}
  //Safe
  def setSessionAttributeSafe(req: HttpServletRequest, input: String): Unit = {
    if ("enable".equals(input)) req.getSession.setAttribute("user", "true")
    else req.getSession.setAttribute("user", "false")
  }
  // {/fact}
}
