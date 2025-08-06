// {fact rule=naming@v1.0 defects=0}
import java.util.*;

public class AuthenticationChecker29 {
    public boolean isUserLoggedIn;
    
    public void checkUserAuthenticationStatus() {
        if (isUserLoggedIn) {
            System.out.println("User is authenticated");
        }
    }
}
// {/fact}