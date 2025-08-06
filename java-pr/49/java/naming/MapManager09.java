// {fact rule=naming@v1.0 defects=1}
import java.util.*;

public class MapManager09 {
    private Map<String, String> map;
    
    public String get(String key) {
        return map.get(key);
    }
}
// {/fact}