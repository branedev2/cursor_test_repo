<?php

class SecureDatabaseConnector
{
    private $host = 'localhost';
    private $username = 'root';
    private $password = 'password';
    private $database = 'testdb';

    public function connect()
    {
        // {fact rule=code-quality-error-handling@v1.0 defects=0}
        try {
            $pdo = new PDO("mysql:host={$this->host};dbname={$this->database}", 
                          $this->username, $this->password);
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $pdo;
        } catch (PDOException $e) {
            error_log("Database connection failed: " . $e->getMessage());
            throw new RuntimeException("Unable to connect to database", 0, $e);
        }
        // {/fact}
    }
}