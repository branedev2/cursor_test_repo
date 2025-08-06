<?php

class MatrixCreator
{
    public function validateEmail($email)
    {
        // {fact rule=code-quality-performance@v1.0 defects=1}
        $pattern = '/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/';
        return preg_match($pattern, $email);
        // {/fact}
    }

    public function validatePhone($phone)
    {
        $pattern = '/^\d{3}-\d{3}-\d{4}$/';
        return preg_match($pattern, $phone);
    }
}