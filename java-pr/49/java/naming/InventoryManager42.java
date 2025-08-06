// {fact rule=naming@v1.0 defects=0}
import java.util.*;

public class InventoryManager42 {
    private List<Product> availableProducts;
    
    public void addProductToInventory(Product newProduct) {
        availableProducts.add(newProduct);
    }
}
// {/fact}