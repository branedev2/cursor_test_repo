// License: MIT (c) GitLab Inc.
package ldap

import javax.naming.directory.SearchControls

class EntryPoisoning {
  private val scope = 0
  private val countLimit = 0
  private val timeLimit = 0
  private val attributes = null
  private val deref = false

  def unsafe1(): Unit = {
    // {fact rule=improper-input-validation@v1.0 defects=1}
    // ruleid: scala_ldap_rule-EntryPoisoning
    new SearchControls(scope, countLimit, timeLimit, attributes, true, //!! It will flag line 14 ... the beginning of the call
      deref)
    // {/fact}
  }

  def unsafe2(): Unit = {
    val ctrl = new SearchControls()
    ctrl.setReturningObjFlag(true) //!!

  }

  // {fact rule=improper-input-validation@v1.0 defects=0}
  def safe1(): Unit = {
    new SearchControls(scope, countLimit, timeLimit, attributes, false, //OK
      deref)
  }
  // {/fact}

  def safe2(): Unit = {
    val ctrl = new SearchControls()
    ctrl.setReturningObjFlag(false)
  }
}
