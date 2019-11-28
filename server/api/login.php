<?php

require_once("dbconnect.php");

header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Access-Control-Allow-Origin: *");
if ($_SERVER["REQUEST_METHOD"] == "POST" && $_SERVER["CONTENT_TYPE"] == "application/json") {

    $data = json_decode(file_get_contents("php://input"));
 
    $email = $data->email;
    $password = $data->password;

    $stm = $pdo->prepare("Select * from CUSTOMER where email = '$email' and  password = '$password';");
    $stm->execute();
    $result = $stm->fetch(PDO::FETCH_ASSOC);

    $response["user"] = $result;

   if ($result) {
    $response["message"] = "Success! you are logged in!";
   }
   else {
    $response["message"] = "Wrong username or password (retry) or Register first!";
   }
   $json = json_encode($response);
    echo $json;
}