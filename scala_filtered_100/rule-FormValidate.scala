// License: LGPL-3.0 License (c) find-sec-bugs
package form

import org.apache.struts.validator.ValidatorForm
// {fact rule=improper-input-validation@v1.0 defects=1}
// ruleid: scala_form_rule-FormValidate
class FormValidate extends ValidatorForm {
  private var name: String = null
  private var email: String = null

  def getName = name

  def setName(n: String) {
    this.name = n
  }

  def getEmail = email

  def setEmail(email: String) {
    this.email = email
  }
}
// {/fact}
