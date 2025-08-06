<?php

class ValueCalculator
{
    public function calculateTotal($price, $quantity, $customerType, $hasDiscount)
    {
        // {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
        $total = $price * $quantity;
        if ($customerType == 'VIP') $total = $total * 0.9;
        else if ($customerType == 'Regular') $total = $total * 0.95;
        if ($hasDiscount) $total = $total * 0.85;
        if ($total > 1000) $total = $total * 0.98;
        if ($quantity > 10) $total = $total * 0.97;
        return $total;
        // {/fact}
    }
}