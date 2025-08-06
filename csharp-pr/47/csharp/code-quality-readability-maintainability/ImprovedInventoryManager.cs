using System;

namespace InventoryManagement
{
    public class InventoryItem
    {
        public string Name { get; set; }
        public int Stock { get; set; }
        public int MinStock { get; set; }
        public int MaxStock { get; set; }
    }

    public class ImprovedInventoryManager
    {
        public bool UpdateInventory(InventoryItem item, string action, int quantity)
        {
            // {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
            return action.ToLower() switch
            {
                "add" => AddToInventory(item, quantity),
                "remove" => RemoveFromInventory(item, quantity),
                _ => throw new ArgumentException($"Unknown action: {action}")
            };
            // {/fact}
        }

        private bool AddToInventory(InventoryItem item, int quantity)
        {
            if (WouldExceedMaxStock(item, quantity))
            {
                Console.WriteLine($"Cannot add {quantity} to {item.Name}. Would exceed max stock of {item.MaxStock}");
                return false;
            }

            item.Stock += quantity;
            CheckMinimumStockWarning(item);
            return true;
        }

        private bool RemoveFromInventory(InventoryItem item, int quantity)
        {
            if (HasInsufficientStock(item, quantity))
            {
                Console.WriteLine($"Cannot remove {quantity} from {item.Name}. Insufficient stock");
                return false;
            }

            item.Stock -= quantity;
            CheckMinimumStockWarning(item);
            return true;
        }

        private bool WouldExceedMaxStock(InventoryItem item, int quantity)
        {
            return item.Stock + quantity > item.MaxStock;
        }

        private bool HasInsufficientStock(InventoryItem item, int quantity)
        {
            return item.Stock - quantity < 0;
        }

        private void CheckMinimumStockWarning(InventoryItem item)
        {
            if (item.Stock < item.MinStock)
            {
                Console.WriteLine($"Warning: {item.Name} below minimum stock");
            }
        }
    }
}