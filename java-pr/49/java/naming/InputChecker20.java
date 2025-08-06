// {fact rule=naming@v1.0 defects=1}
import java.util.*;

public class InputChecker20 {
    public void validate(String input) {
        boolean ok = input != null;
        if (!ok) {
            throw new IllegalArgumentException();
        }
    }
}
// {/fact}