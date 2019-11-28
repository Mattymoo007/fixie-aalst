<?php


// echo "dbconnect";
$host = 'localhost';
$db   = 'bikerepair';
$user = 'root';
$pass = '';
$charset = 'utf8mb4';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";

try {
     $pdo = new PDO($dsn, $user, $pass);
     $pdo->setAttribute(PDO::ATTR_ERRMODE , PDO::ERRMODE_EXCEPTION);

} catch (PDOException $e) {
     // TODO: send json formatted error message
     throw new PDOException($e->getMessage(), (int)$e->getCode());
     // send a JSON file to the browser  
     // to be done show the error message
}

