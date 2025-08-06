<?php

class DatabaseConnector
{
    private $host = 'localhost';
    private $username = 'root';
    private $password = 'password';
    private $database = 'testdb';

    public function connect()
    {
        // {fact rule=code-quality-error-handling@v1.0 defects=1}
        try {
            $pdo = new PDO("mysql:host={$this->host};dbname={$this->database}", 
                          $this->username, $this->password);
            return $pdo;
        } catch (Exception $e) {
            // Empty catch block - swallows exceptions
        }
        // {/fact}
    }
}