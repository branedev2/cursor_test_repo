<?php

class DataValidator
{
    public function validateUser($name, $email, $age, $phone)
    {
        // {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
        if ($name == null || strlen($name) < 2 || strlen($name) > 50 || $email == null || strpos($email, '@') === false || strlen($email) < 5 || $age < 18 || $age > 120 || $phone == null || strlen($phone) != 10) return false;
        return true;
        // {/fact}
    }
}