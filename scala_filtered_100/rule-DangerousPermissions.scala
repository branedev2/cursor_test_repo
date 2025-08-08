// License: LGPL-3.0 License (c) find-sec-bugs
package perm

import java.lang.reflect.ReflectPermission
import java.security.CodeSource
import java.security.PermissionCollection
import java.security.Policy
import java.util


class DangerousPermissions extends Policy {

  // {fact rule=improper-privilege-management@v1.0 defects=1}
  def danger(cs: CodeSource): Unit = {
    val pc: PermissionCollection = super.getPermissions(cs)
    // ruleid: scala_perm_rule-DangerousPermissions
    pc.add(new ReflectPermission("suppressAccessChecks"))
    // {/fact}
  }

  // {fact rule=improper-privilege-management@v1.0 defects=1}
  def danger2(pc: PermissionCollection): Unit = {
    // ruleid: scala_perm_rule-DangerousPermissions
    pc.add(new RuntimePermission("createClassLoader"))
    // {/fact}
  }

  // {fact rule=improper-privilege-management@v1.0 defects=1}
  def danger3(pc: PermissionCollection): Unit = {
    // ruleid: scala_perm_rule-DangerousPermissions
    val perm = new RuntimePermission("createClassLoader")
    pc.add(perm)
    // {/fact}
  }

  // {fact rule=improper-privilege-management@v1.0 defects=1}
  def danger4(pc: PermissionCollection): Unit = {
    // ruleid: scala_perm_rule-DangerousPermissions
    val perm = new ReflectPermission("suppressAccessChecks")
    pc.add(perm)
    // {/fact}
  }

  // {fact rule=improper-privilege-management@v1.0 defects=0}
  def ok(cs: CodeSource): Unit = {
    val perm = new ReflectPermission("suppressAccessChecks")
    val list = new Array[ReflectPermission](1)
    list(0) = perm
  }
  // {/fact}
}
