// {fact rule=naming@v1.0 defects=0}
import java.util.*;

public class DataFormatter49 {
    public void transformCustomerDataFormat(String rawCustomerData) {
        String normalizedData = rawCustomerData.replaceAll("[^a-zA-Z0-9]", "");
    }
}
// {/fact}