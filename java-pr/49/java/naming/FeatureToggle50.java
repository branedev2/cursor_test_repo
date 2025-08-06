// {fact rule=naming@v1.0 defects=0}
import java.util.*;

public class FeatureToggle50 {
    private boolean isFeatureEnabled;
    
    public void toggleFeatureAvailability() {
        isFeatureEnabled = !isFeatureEnabled;
    }
}
// {/fact}