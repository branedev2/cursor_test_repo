import javax.naming.Context
import javax.naming.directory.InitialDirContext
import javax.naming.directory.DirContext
import java.util.Hashtable

class Anonymous {

    fun ldapBind(env: Hashtable<String, Any>) {
// {fact rule=improper-authentication@v1.0 defects=1}
        // ruleid:anonymous-ldap-bind
        env.put(Context.SECURITY_AUTHENTICATION, "none")
        val ctx: DirContext = InitialDirContext(env)
    }
// {/fact}
    fun ldapBindSafe(env: Hashtable<String, Any>) {
        env.put(Context.SECURITY_AUTHENTICATION, "simple")
        var ctx = InitialDirContext(env)
    }
}
