<?php
require_once("dbconnect.php");
header("Content-Type: application/json; charset=UTF-8");

$sql = "SELECT tbikeID, description FROM TYPEBIKE ORDER BY description "; 
$stmt= $pdo->prepare($sql);
$stmt->execute(array());
$stmt->setFetchMode(PDO::FETCH_ASSOC);

$data_array=[];

if($stmt) {
  foreach($stmt as $stmt) {
     $data_array[]= $stmt;
  }

$json = json_encode($data_array);

echo $json;
}

?>