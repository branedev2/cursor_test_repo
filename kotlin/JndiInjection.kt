// {fact rule=excessive-permissions-grant@v1.0 defects=0}
import jakarta.servlet.http.HttpServletRequest
import java.util.*
import javax.naming.Context
import javax.naming.InitialContext
import javax.naming.NamingException

class JndiInjection {
    @Throws(NamingException::class)
    fun jndiLookup(request: HttpServletRequest) {
        val name: String = request.getParameter("name")
        val env: Hashtable<String, String> = Hashtable<String, String>()
        env.put(Context.INITIAL_CONTEXT_FACTORY, "com.sun.jndi.rmi.registry.RegistryContextFactory")
        env.put(Context.PROVIDER_URL, "rmi://trusted-server:1099")
        val ctx = InitialContext(env)

        // BAD: User input used in lookup
        ctx.lookup(name)

        // GOOD: The name is validated before being used in lookup
        if (isValid(name)) {
            ctx.lookup(name)
        } else {
            // Reject the request
        }
    }

    fun isValid(name: String): Boolean {
        return true;
    }
}
// {/fact}
