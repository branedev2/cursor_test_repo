// {fact rule=naming@v1.0 defects=0}
import java.util.*;

public class PriceCalculator27 {
    public void calculateTotalPrice(int itemQuantity, double itemPrice) {
        double totalAmount = itemQuantity * itemPrice;
        System.out.println("Total: " + totalAmount);
    }
}
// {/fact}