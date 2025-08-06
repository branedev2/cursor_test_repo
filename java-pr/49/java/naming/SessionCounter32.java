// {fact rule=naming@v1.0 defects=0}
import java.util.*;

public class SessionCounter32 {
    private int activeUserSessionCount;
    
    public void incrementActiveSessionCount() {
        activeUserSessionCount++;
    }
}
// {/fact}