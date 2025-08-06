// {fact rule=naming@v1.0 defects=0}
import java.util.*;

public class PreferencesCache34 {
    private Map<String, String> userPreferencesCache;
    
    public String getUserPreference(String preferenceKey) {
        return userPreferencesCache.get(preferenceKey);
    }
}
// {/fact}