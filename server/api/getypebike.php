<?php
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Methods: GET");
    header("Access-Control-Max-Age: 3600");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    header("Access-Control-Allow-Origin: *");

    // echo $_SERVER["REQUEST_METHOD"] ;
    // exit;

    // if ($_SERVER["REQUEST_METHOD"] == "GET" && $_SERVER["CONTENT_TYPE"] == "application/json") {  
    if ($_SERVER["REQUEST_METHOD"] == "GET") {  
      require_once("dbconnect.php");
      $sql = "SELECT tbikeID, description FROM TYPEBIKE ORDER BY description "; 
      $stmt= $pdo->prepare($sql);
      $stmt->execute(array());
      $stmt->setFetchMode(PDO::FETCH_ASSOC);
      $data_array=[];
// var_dump($sql);
    if($stmt) {
      foreach($stmt as $stmt) {
         $data_array[]= $stmt;
      }

      $json = json_encode($data_array);
      echo $json;
    }
 } else echo '{"message":"if failed"}';
