using System;
using System.Collections.Generic;

namespace InventoryManagement
{
    public class InventoryManager
    {
        public bool UpdateInventory(Dictionary<string, object> item, string action, int quantity)
        {
            // {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
            var currentStock = (int)item["stock"];
            var minStock = (int)item["minStock"];
            var maxStock = (int)item["maxStock"];
            var itemName = (string)item["name"];
            
            if (action == "add") {
                if (currentStock + quantity > maxStock) {
                    Console.WriteLine($"Cannot add {quantity} to {itemName}. Would exceed max stock of {maxStock}");
                    return false;
                }
                item["stock"] = currentStock + quantity;
                if ((int)item["stock"] < minStock) Console.WriteLine($"Warning: {itemName} below minimum stock");
            } else if (action == "remove") {
                if (currentStock - quantity < 0) {
                    Console.WriteLine($"Cannot remove {quantity} from {itemName}. Insufficient stock");
                    return false;
                }
                item["stock"] = currentStock - quantity;
                if ((int)item["stock"] < minStock) Console.WriteLine($"Warning: {itemName} below minimum stock");
            }
            return true;
            // {/fact}
        }
    }
}