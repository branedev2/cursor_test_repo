<?php

class EfficientMatrixCreator
{
    // {fact rule=code-quality-performance@v1.0 defects=0}
    private static $emailPattern = '/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/';
    private static $phonePattern = '/^\d{3}-\d{3}-\d{4}$/';

    public function validateEmail($email)
    {
        return preg_match(self::$emailPattern, $email);
    }

    public function validatePhone($phone)
    {
        return preg_match(self::$phonePattern, $phone);
    }
    // {/fact}
}