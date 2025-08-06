<?php

class UserDataValidator
{
    private const MIN_NAME_LENGTH = 2;
    private const MAX_NAME_LENGTH = 50;
    private const MIN_AGE = 18;
    private const MAX_AGE = 120;
    private const PHONE_NUMBER_LENGTH = 10;
    private const MIN_EMAIL_LENGTH = 5;

    public function validateUser($name, $email, $age, $phone)
    {
        // {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
        return $this->isValidName($name) && 
               $this->isValidEmail($email) && 
               $this->isValidAge($age) && 
               $this->isValidPhone($phone);
        // {/fact}
    }

    private function isValidName($name)
    {
        return !empty($name) && 
               strlen($name) >= self::MIN_NAME_LENGTH && 
               strlen($name) <= self::MAX_NAME_LENGTH;
    }

    private function isValidEmail($email)
    {
        return !empty($email) && 
               strpos($email, '@') !== false && 
               strlen($email) >= self::MIN_EMAIL_LENGTH;
    }

    private function isValidAge($age)
    {
        return $age >= self::MIN_AGE && $age <= self::MAX_AGE;
    }

    private function isValidPhone($phone)
    {
        return !empty($phone) && 
               strlen($phone) == self::PHONE_NUMBER_LENGTH;
    }
}