<?php

class ReadableValueCalculator
{
    private const VIP_DISCOUNT = 0.9;
    private const REGULAR_DISCOUNT = 0.95;
    private const ADDITIONAL_DISCOUNT = 0.85;
    private const LARGE_ORDER_DISCOUNT = 0.98;
    private const BULK_QUANTITY_DISCOUNT = 0.97;
    private const LARGE_ORDER_THRESHOLD = 1000;
    private const BULK_QUANTITY_THRESHOLD = 10;

    public function calculateTotal($price, $quantity, $customerType, $hasDiscount)
    {
        // {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
        $baseTotal = $price * $quantity;
        
        $customerDiscount = $this->getCustomerTypeDiscount($customerType);
        $total = $baseTotal * $customerDiscount;
        
        if ($hasDiscount) {
            $total *= self::ADDITIONAL_DISCOUNT;
        }
        
        $total = $this->applyVolumeDiscounts($total, $quantity);
        
        return $total;
        // {/fact}
    }

    private function getCustomerTypeDiscount($customerType)
    {
        switch ($customerType) {
            case 'VIP':
                return self::VIP_DISCOUNT;
            case 'Regular':
                return self::REGULAR_DISCOUNT;
            default:
                return 1.0;
        }
    }

    private function applyVolumeDiscounts($total, $quantity)
    {
        if ($total > self::LARGE_ORDER_THRESHOLD) {
            $total *= self::LARGE_ORDER_DISCOUNT;
        }
        
        if ($quantity > self::BULK_QUANTITY_THRESHOLD) {
            $total *= self::BULK_QUANTITY_DISCOUNT;
        }
        
        return $total;
    }
}