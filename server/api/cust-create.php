<?php
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Access-Control-Allow-Origin: *");

if ($_SERVER["REQUEST_METHOD"] == "POST" && $_SERVER["CONTENT_TYPE"] == "application/json") {
 
    // Decode received data
    $data = json_decode(file_get_contents("php://input"));
    require_once("dbconnect.php");
    var_dump($pdo);
    $name = $data->name;
    $lastname = $data->lastname;
    $email = $data->email;
    $passwd = md5($data->passwd); 
    $address = $data->address;
    $postalcode = $data->postalcode;
    $phone = $data->phone;

    $sql = "INSERT INTO CUSTOMER (name, lastname, address, postalcode,passwd, email, phone) 
    VALUES (?,?,?,?,?,?,?)";
 
    $stmt= $pdo->prepare($sql);
    $dataBinding = array($name, $lastname, $address, $postalcode,$passwd, $email, $phone);
    try{

        $stmt->execute($dataBinding);
        $response["message1"] = "Customer successfully created !";
        $response["message2"] = "Please Sign in with your email and your password !";
        $json = json_encode($response);
        echo $json; 
    }
   
    catch (Exception $e){
        $response["message1"] = "email address:".$email. " is already used !";   
        $json = json_encode($response);
        echo $json; 
      //  throw $e;
    }
        
}

exit;
