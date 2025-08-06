// {fact rule=naming@v1.0 defects=0}
import java.util.*;

public class EmailValidator28 {
    private String userEmailAddress;
    
    public void validateEmailFormat() {
        boolean isValidEmail = userEmailAddress.contains("@");
    }
}
// {/fact}