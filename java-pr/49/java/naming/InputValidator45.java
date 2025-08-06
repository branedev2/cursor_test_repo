// {fact rule=naming@v1.0 defects=0}
import java.util.*;

public class InputValidator45 {
    public void validateCustomerInput(String customerInput) {
        boolean isInputValid = customerInput != null && !customerInput.isEmpty();
        if (!isInputValid) {
            throw new IllegalArgumentException("Invalid customer input");
        }
    }
}
// {/fact}